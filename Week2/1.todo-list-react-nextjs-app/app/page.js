"use client"
import React,{useState} from 'react';

const page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [mainTask, setmainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setmainTask([...mainTask,{title,desc}]);
    settitle("");
    setdesc("");
  }

  const deleteHandler=(i)=>{
    let copyTask=[...mainTask]
    copyTask.splice(i,1)
    setmainTask(copyTask);
  }

  let renderTask = <h2>No Task Available</h2>

  if(mainTask.length>0){
    renderTask = mainTask.map((t,i)=>{
      return (
        <li key={i} className='flex items-center justify-between mb-8'>
          <div className=' flex justify-between w-2/3'>
            <h5 className='text-2xl font-semibold'>{i+1}. {t.title}</h5>
            <h6 className='text-lg font-medium'>{t.desc}</h6>
          </div>
          <button
          onClick={()=>{
            deleteHandler(i)
          }}
          className='bg-red-400 text-white rounded-md font-bold hover:bg-red-600 px-4 py-2'>Delete</button>
        </li>
      )
    });
  }


  return (
    <div>
      <h1 className='bg-black text-white p-5 text-5xl text-center font-bold'>My Todo List</h1>

      <form onSubmit={submitHandler} className='flex flex-wrap justify-between items-center '>
        <input type='text' className='text-2xl border-zinc-800 border-2 m-5 px-4 py-2 rounded-md ' placeholder='Enter Task Title Here' required value={title} onChange={(e)=>{
          settitle(e.target.value);
        }}

        />
        <input type='text' className='text-2xl border-zinc-800 border-2 m-5 px-4 py-2 rounded-md ' placeholder='Enter Description Here' value={desc} onChange={(e)=>{
          setdesc(e.target.value);
        }}
        />
        <button className='bg-green-400 text-white px-3 py-2 text-2xl font-bold rounded-md m-5 hover:bg-green-600'>Add Task</button>
      </form>

      <hr/>

      <div className='p-8 bg-slate-200'>
        <ul>
          {renderTask}
        </ul>
      </div>

    </div>
  )
}

export default page;
