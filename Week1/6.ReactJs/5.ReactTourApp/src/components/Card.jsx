import React, { useState } from 'react'

function Card({id,name,info,image,price,removeTour}) {

    const [readmore,setReadmore]=useState(false)

    const description =  readmore ? info :`${info.substring(0,100)}....`


    function readmorehandler (){
        setReadmore(!readmore);
    }

    

    return (
        <div className='card'>
            <img src ={image} className='image'></img>

            <div className='tour-info'>
                <div className='tour-details'>
                    <div>
                        <h4 className='tour-price'>Rs.{price}</h4>
                        <h4 className='tour-name'>{name}</h4>
                    </div>
                </div>

                <div className='description'>
                    
                    {description}

                    <span className='read-more' onClick={readmorehandler}>
                        {readmore ? `show less` : `readmore`}
                    </span>
                    
                </div>
            </div>

            <button className ='btn-red' onClick={()=>removeTour(id)}>
                Not Intereseted
            </button>

        </div>

        
    )
}

export default Card
