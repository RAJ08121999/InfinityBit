import React,{useState} from 'react'
import Tours from './components/Tours'
import Data from './Data'

function App() {

  const [tours , setTourse ] = useState(Data);

  function removeTour(id){
      const newTours = tours.filter(tour => tour.id !== id);
    setTourse(newTours);
  }

  if(tours.length===0){
    return(
      <div className='refresh'>
        <h2>No Tours Left</h2>
        <button className= "btn-white" onClick={()=>{setTourse(Data)}}>Refresh</button>
      </div>
    )
  }

  return (
    <div className='app'>
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  )
}

export default App
