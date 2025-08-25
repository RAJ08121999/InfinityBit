import React, { useState } from 'react'
import Products from './Products';




function App() {
  var [a,b] = useState(0)
  return (
    <div className="w-full bg-red-400 m-4 p-4">
      <h1 className='text-3xl mx-7'>{a}</h1>
      <button onClick={()=>b(a+1)} className='px-3 py-1 bg-green-800 rounded-md'>click me</button>
      <Products age = "35" />
    </div>
  );
}

export default App


// ye ek function hai jo jsx return kar raha  hai isi ko component kahte hai 

// kisi v bade container jaise nav container hero container footer etc sab ko ek ek component banaya jaa sakta hai aur jo bhi chiz bar bar repeat ho raha ho jaise ki koi button uska bhi component banana jaruri hai

// jsx html ki tarah dikhta hai but html hota nahi hai ye ultimately js me convert ho jata hai


// 2 chizo ko eksath return nahi kiya jaa sakta hai isiliye sara chiz ko kisi ek div ya blank tag k andar dal k usko return karana padega

// blank tags <> </> ko react fragments kehte hai


// state matlab normally data samajh lete hai 
// jab bhi state badlega tab tab react react karega yahi react ka pura model hai
