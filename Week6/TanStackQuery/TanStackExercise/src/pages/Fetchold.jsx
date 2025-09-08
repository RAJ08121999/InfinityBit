import React, { useEffect, useState } from 'react'
import { fetchPosts } from '../API/api';

const Fetchold = () => {

  const [posts, setPosts ] = useState([]);
  const [isLoading , setIsLoading ] = useState(true);
  const [isError,setIsError] = useState(false);

  const getPostsData = async () => {
    try{
      const res = await fetchPosts();
      if(res.status===200){
        setPosts(res.data);
        setIsLoading(false);
      }
    }
    catch(error){
      console.log(error);
      setIsError(true);
      setIsLoading(false);
      console.log("error in fetch data from api");
      return [];
    }
  }
  useEffect(()=>{
    getPostsData();
  },[]
);

if(isLoading) return <p>Loading...</p>;
if(isError) return <p>Something went wrong </p>;


  return (
    <div >
      <ul >
        {posts?.map((post) => (

          <li key={post.id} className='py-4 bg-slate-900'>
          <p className='text-xl text-blue-900 text-center'>{post.title}</p>
          <p className='bg-slate-700 text-gray-300 leading-10'>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Fetchold ;


//thi is the older way of fetching data from axios
