import React from 'react'

function Filter({filterData,category,setCategory}) {

    function filterHandler(title){
        setCategory(title)
    }


    return (
        <div className='flex justify-center flex-wrap text-2xl  w-11/12 max-w-max space-x-4 gap-y-4 mx-auto mt-4'>
            {
                filterData.map((data)=>{
                    return <button 
                            className=
                            {`text-lg px-2 py-1 rounded-md font-medium text-white bg-slate-900 hover:bg-opacity-70 border-2 transition-all duration-300
                            ${category===data.title ? 
                            "bg-opacity-60 border-white":
                            "bg-opacity-40 border-transparent"}
                            `}
                            key={data.id}
                            onClick={()=>filterHandler(data.title)}
                            //jis bhi button pe click hoga uska title filehandler ko send kar dena hai taki usi k accordingly filter ho paye
                        >
                            {data.title}

                        </button>
                })
            }
        </div>
    )
}

export default Filter
