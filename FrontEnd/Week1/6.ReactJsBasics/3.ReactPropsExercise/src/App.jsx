import React from 'react'
import Products from './components/Products'
import AddProduct from './components/AddProduct';

function App() {
  const products =[
    {
      id:'p1',
      title:'Bicycle',
      amount:10000,
      date:new Date(15, 8, 1954),
    },
    {
      id:'p2',
      title:'Motor Bicycle',
      amount:100000,
      date:new Date(25, 8, 1954),
    },
    {
      id:'p3',
      title:'Car',
      amount:100000,
      date:new Date(15, 10, 1945),
    },
    {
      id:'p4',
      title:'Air Plane',
      amount:10000000,
      date:new Date(15, 8, 1947),
    },
  ];

  function printProductData(data){
    console.log("i am inside App.js")
    console.log(data);
  }

  return (
    <div className='flex justify-around items-center min-h-screen w-full h-full'>

      <div className=" rounded-2xl bg-red-600 w-[48%] h-[650px]">
        
        <Products items={products} />
      
      </div>

      <div className=" rounded-2xl bg-amber-600 w-[48%] h-[650px] flex justify-center items-center">
        
        <AddProduct printProduct={printProductData}/>
      
      </div>

    </div>
  );
}

export default App
