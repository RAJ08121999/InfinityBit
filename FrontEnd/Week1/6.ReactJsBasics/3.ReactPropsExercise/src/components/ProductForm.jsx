import React, { useState } from 'react'

function ProductForm(props) {

    const [title,setTitle] = useState('');
    const [date,setDate] = useState('');
    const [amount,setAmount] = useState('');

    function titleChangeHandler(event){
        setTitle(event.target.value)
    }

    function amountChangeHandler(event){
        setAmount(event.target.value)
    }

    function dateChangeHandler(event){
        setDate(event.target.value)
    }

    function submitHandler(event){
        event.preventDefault();

        const productData = {
            title:title,
            date:date,
            amount:amount
        };
        // console.log(productData)

        props.onSaveProduct(productData)
        setTitle('');
        setDate('');
        setAmount('');
        setButtonText("Product Added");

        setTimeout(()=>{
            setButtonText("Add Product");
        },1000);
    }

    const[buttonText,setButtonText]=useState('Add Product');


    return (
        <form className='flex flex-col justify-center items-center gap-4 border border-gray-400 p-2'onSubmit={submitHandler}>

            <div >
                <label className='font-bold text-2xl text-blue-900 p-2 '>Title:</label>

                <input type='text' value={title} onChange={titleChangeHandler}></input>
            </div>

            <div>
                <label className='font-bold text-2xl text-blue-900 p-2 '> Amount: </label>

                <input type='text' value={amount} onChange={amountChangeHandler}></input>
            </div>

            <div>
                <label className='font-bold text-2xl text-blue-900 p-2 '>Mfg.Date:</label>

                <input type='date' value={date} onChange={dateChangeHandler}></input>
            </div>

            <button type='submit'
            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-xl shadow focus:outline-none focus:ring-2 focus:ring-blue-300 active:scale-95 transition"
            >{buttonText}</button>

        </form>
    )
}

export default ProductForm
