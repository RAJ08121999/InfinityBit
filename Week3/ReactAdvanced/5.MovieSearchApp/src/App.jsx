import Navbar from './components/Navbar';
import { Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';

const App = () => {
  return (
    <div className='min-h-screen bg-slate-500'>

    {/* navbar is here */}

      <Navbar/>

      {/* this is the main container */}

      <div className='mx-auto px-4 py-6'>

        <Routes>

          <Route path = '/' element={<Home/>}></Route>

          <Route path='/movie/:id' element={<MovieDetails/>}></Route>

          <Route path = '/*' element={<div>ERROR 404 NO DATA FOUND </div>}></Route>

        </Routes>

      </div>
      
    </div>
  )
}

export default App
