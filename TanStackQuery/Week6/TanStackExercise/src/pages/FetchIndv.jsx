import { useQuery } from '@tanstack/react-query'
import { NavLink, useParams } from 'react-router-dom'
import { FetchIndvPost } from '../API/api'

const FetchIndv = () => {
  
  const {id} = useParams();
  const {data,isPending,isError,error } = useQuery({
    queryKey:["post",id],
    queryFn: () => FetchIndvPost(id),
  })

if(isPending) return <p>Loading...</p>;
if(isError) return <p>Error:{error.message || "something went wrong"}</p>

  return (
    <div className='bg-slate-700 text-gray-300 py-4'>
      <ul>
        <li>
          <p className='text-2xl text-center underline '>Post ID:{data.id}</p>
          <p>Title:{data.title}</p>
          <p>Body: {data.body}</p>
        </li>
      </ul>
      <NavLink to = "/rq" className="flex justify-center items-center py-2" >
        <button className=' border-2 border-red-500 px-4 py-3 text-blue-300 rounded-xl' >GO Back</button>
      </NavLink>
    </div>
  )
}

export default FetchIndv
