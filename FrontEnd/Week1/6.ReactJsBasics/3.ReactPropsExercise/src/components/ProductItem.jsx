import React , { useState } from "react";
import ProductDate from "./ProductDate";
import Card from "./Card";

function ProductItem(props) {

    const [buttonText,setButtonText]= useState("Add to cart");

    function clickHandler(){
        
        setButtonText("Added");
        // return console.log("button clicked")
        setTimeout(()=>{
            setButtonText("Add to cart");
        },1000);
    };
    return (
        <Card className="bg-yellow-600 text-blue-950 my-4 p-4 rounded-md shadow flex items-center justify-between">
            <ProductDate date={props.date} />

            <h2 className="text-2xl font-bold">{props.title}</h2>


            <h3 className="text-2xl">Rs.{props.amount}</h3>

            <button
            
            onClick={clickHandler}
            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-300 active:scale-95 transition"
            >
            {buttonText}
            </button>
        </Card>
    );
}

export default ProductItem;
