import React from 'react'
import Cards from './components/cards'
function App() {
  const cardData=[
    {img:'./src/assets/ca.jpg' ,name:'Captain America'},
    {img:'./src/assets/batman.jpeg' ,name:'Bat Man'},
    {img:'./src/assets/hulk.png' ,name:'Hulk'},
    {img:'./src/assets/ironman.jpeg' ,name:'Iron Man'},
  ];
  return (
    <div className=" w-screen min-h-screen bg-slate-700 flex items-center justify-center p-4 overflow-x-hidden">

      <div className="grid grid-cols-4 gap-4">
        {cardData.map((card, index) => (
          <Cards key={index} img={card.img} name={card.name} />
        ))}
      </div>
      
    </div>
  );
}

export default App
