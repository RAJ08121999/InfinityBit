import { useInfiniteQuery } from '@tanstack/react-query'
import { fetchUsers } from '../API/api'
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const InfiniteScroll = () => {

const {data , hasNextPage , fetchNextPage , status , isFetchingNextPage} =   useInfiniteQuery({
        queryKey:["users"],
        queryFn:fetchUsers,
        getNextPageParam: (lastPage) =>{
            // console.log("lastPage",lastPage);
            // console.log("allPages",allPages);
            // if(!lastPage || !Array.isArray(lastPage)) return undefined;
            // return lastPage.length === 10 ? allPages.length +1 :undefined

            if(!lastPage || lastPage.length === 0 ) return undefined;
            return lastPage[lastPage.length -1].id;
        },
    });

    // const handleScroll = () =>{
    //     const bottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight -1;

    //     if(bottom && hasNextPage){
    //         fetchNextPage();
    //     }
    // }

    //..........now we will use react-intersection-observer

    const {ref, inView } = useInView({
        threshold:1,
    });

    useEffect(()=>{
        // window.addEventListener('scroll',handleScroll);
        // return () => window.removeEventListener("scroll",handleScroll);

        if(inView && hasNextPage){
            fetchNextPage();
        }
    },[hasNextPage,fetchNextPage,inView]);

    if(status === "loading") return <div>Loading....</div>
    if(status === "error") return <div> Error in fetching data </div>
  return (
    <div>
      <h1 className='text-center text-3xl mt-4 underline'>Infinte scroll with react query</h1>
      {data?.pages?.map((page,index)=>(
        <ul key = {index}>
            {page.map((user)=>(
                <li key = {user.id}
                className='p-4 border border-green-700'
                >
                    <p>{user.login}</p>
                    <img
                        src={user.avatar_url}
                        alt={user.login}
                        width={50}
                        height={50}
                    />
                </li>
            ))}
        </ul>
      ))}
      <div ref={ref}>
        {isFetchingNextPage 
        ? "Loading more ...."
        :hasNextPage
        ? "scroll down to load more"
        : "No more users"
        }
      </div>
      
    </div>
  )
}

export default InfiniteScroll
