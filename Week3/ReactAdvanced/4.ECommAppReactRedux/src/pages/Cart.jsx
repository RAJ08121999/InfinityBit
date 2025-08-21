import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';

const Cart = () => {
    const {cart} = useSelector((state)=>state);
    const [totalAmount , setTotalAmount ] = useState(0);

    useEffect( ()=>{
        setTotalAmount(cart.reduce( (acc, curr)=>acc+curr.price,0));
    },[cart])

    return (
        <div className='w-10/12 max-w-[1160px] h-full mx-auto'>
            {
                cart.length>0 ?
                (
                    <div className='flex w-full h-full'>

                        <div className='w-1/2 '>
                            {
                                cart.map( (item,index)=>{
                                    return <CartItem key={item.id} item={item} itemIndex={index}/>
                                })
                            }
                        </div>
                        
                        <div className='w-1/2 flex flex-col justify-between p-4 '>

                            <div className='flex flex-col w-full'>
                                <div className='text-green-600 text-lg font-medium uppercase'>Your Cart</div>

                                <div className='text-green-600 text-4xl font-medium uppercase'>Summary</div>

                                <p className='font-medium'>
                                    <span>Total Items : {cart.length}</span>
                                </p>

                            </div>

                            <div className='flex flex-col w-full justify-center items-center'>
                                <p className='font-semibold'>Total Amount: ₹{totalAmount}</p>
                                <button className='w-full bg-green-600 py-1 px-2 font-semibold rounded-lg text-white'>
                                    CheckOut Now
                                </button>
                            </div>

                        </div>

                        
                    </div>

                )
                :
                (<div>
                    <h1>Empty Cart</h1>
                    <Link to={'/'}>
                        <button>
                            Shop Now
                        </button>
                    </Link>
                </div>)
            }
        </div>
    )
}

export default Cart
