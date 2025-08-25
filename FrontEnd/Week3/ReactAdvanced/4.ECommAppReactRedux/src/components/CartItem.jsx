import React from 'react'
import { useDispatch } from 'react-redux'
import { remove } from '../redux/slices/CartSlice';
import { toast } from 'react-hot-toast';
import { MdDelete } from 'react-icons/md';

const CartItem = ({item,itemIndex}) => {
    const dispatch = useDispatch();

    const removeFromCart=()=>{
        dispatch(remove(item.id));
        toast.error("Item Removed")
    }
    return (
        <div className='flex border-b-4 gap-x-6 gap-y-4 mb-4 ml-2'>

            <div className='flex justify-center items-center'>
                <img src={item.image} className='h-[200px] w-full'/>
            </div>

            <div className='flex flex-col justify-around w-full'>
            
                <h1 className='text-gray-700 font-semibold text-lg text-left mt-2'>{item.title}</h1>

                <h1 className=' text-gray-400 font-normal text-[15px] tex-left'>{item.description.split(" ").slice(0,20).join(" ")+ "..."}</h1>

                <div className='flex justify-between items-center mr-4'>
                    <p className='text-green-600 font-semibold text-lg'>
                        ₹{item.price}
                    </p>

                    <div className=' bg-gray-300 text-lg w-10 h-10 flex justify-center items-center rounded-full text-red-600 '
                    onClick={removeFromCart}
                    >
                        <MdDelete/>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CartItem
