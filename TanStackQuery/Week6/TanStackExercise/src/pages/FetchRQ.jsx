import React, { useEffect, useState } from 'react'
import { deletePost, fetchPosts } from '../API/api';
import { keepPreviousData, useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { NavLink } from 'react-router-dom';


const FetchRQ = () => {

  
  const getPostsData = async () => {
    try{
      const res = await fetchPosts();
      return res.status === 200 ? res.data :[];
      
    }
    catch(error){
      console.log(error);
      console.log("error in fetch data from api");
      return [];
    }
  }

  const [pageNumber , setPageNumber ] = useState(0);

  const queryClient = useQueryClient();

  const {data , isLoading , isError , error} = useQuery({
    queryKey:['posts',pageNumber],//its similar to useState
    queryFn:()=>fetchPosts(pageNumber),//its similar to useEffect
    placeholderData:keepPreviousData,


    //gcTime:1000,

    //gcTime garbage collection time hai jo ki by default 5 minutes ka hota hai react query previously fetched data ko cache me save karke rakhta hai aur agar server me data update hua ho to turant usko show karta hai nahi to cache me saved data ko hi dikhata hai 
    //react query hamesa updated data hi provide karta hai

    //staleTime:5000,

    //by default stale time 0 hota hai taki har bar ye fresh/ updated data provide kara sake

    //refetchInterval:1000,

    //har 1sec bad bad request hota rahega aur updated data lata rahega jaise grow jaisa app me har second data change hota rahta hai wahi feature pane k liye refetchInterval use karte hai

    //refetchIntervalInBackground:true,

    //tab change karne k bad bhi background me data fetch hota rahega
  });

  

  //isLoading, isError, and error ka data by default provide karta hai


  //! mutation function to delete the post

  const deleteMutation = useMutation({
    mutationFn:(id) => {
      console.log("deleting:",id);
      return deletePost(id)},
    onSuccess:(data,id)=>{
      queryClient.setQueryData(["posts",pageNumber],(curElm)=>{
        if(!curElm)return [];
        return curElm?.filter((post)=>post.id!==id)
      });
    }
  });

  if(isLoading) return <p>Loading...</p>;
  if(isError) return <p> Error: {error.message || "Something went wrong !" } </p>;

  return (
    <div >
      <ul >
        {data?.map((post) => (

          <li key={post.id} className='py-4 bg-slate-900'>

            <NavLink to = {`/rq/${post.id}`}>
              <p className='text-gray-300 px-2'>{post.id}</p>
              <p className='text-xl text-blue-900 text-center'>{post.title}</p>
              <p className='bg-slate-700 text-gray-300 leading-10'>{post.body}</p>
            </NavLink>
            <button onClick={()=>deleteMutation.mutate(post.id)}
              className='bg-red-500 px-4 py-2 rounded-xl'
            >
              Delete
            </button>
            
          </li>
        ))}
      </ul>
      <div className='flex gap-4 text-xl mt-2 '>
        <button 
          disabled = {pageNumber===0 ? true :false }
          onClick={()=>setPageNumber((prev)=>prev-3)}
          className='bg-green-500 px-4 py-2 rounded-xl'>
            Prev
          </button>

        <h2 className='mt-2'>
          {(pageNumber/3)+1}
        </h2>

        <button 
          onClick={()=>setPageNumber((prev)=>prev+3)}
          className='bg-blue-500 px-4 py-2 rounded-xl'>
          Next
        </button>
      </div>
    </div>
  )
}

export default FetchRQ 
