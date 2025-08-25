import React from 'react'
import ProductForm from './ProductForm'

function AddProduct(props) {
    function saveProduct(product){
        console.log("i am inside add product");
        console.log(product);

        // calling parent function
        props.printProduct(product);
    }
    return (
        <div>
            <ProductForm onSaveProduct={saveProduct}/>
        </div>
    )
}

export default AddProduct
