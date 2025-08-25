import React from 'react';
import About from './components/About';
import Support from './components/Support';
import Contact from './components/Contact';
import Labs from './components/Labs';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Header from './components/Header';
import {Route,Routes} from 'react-router-dom';
import { NavLink } from 'react-router-dom';


const App = () => {
  return (
    <div >
      <nav>

        <ul className='flex justify-center items-center gap-4 mt-2'>

          <li className='bg-red-400 px-2 py-1 rounded-md'>
            <NavLink to="/">Home</NavLink>
          </li>
          
          <li className='bg-red-400 px-2 py-1 rounded-md'>
            <NavLink to = "/about">About</NavLink>
          </li>

          <li className='bg-red-400 px-2 py-1 rounded-md'>
            <NavLink to = "/support">Support</NavLink>
          </li>

          <li className='bg-red-400 px-2 py-1 rounded-md'>
            <NavLink to = "/contact">Contacts</NavLink>
          </li>

          <li className='bg-red-400 px-2 py-1 rounded-md'>
            <NavLink to = "/labs">Labs</NavLink>
          </li>

        </ul>

      </nav>
      
        <Routes>
          <Route path="/" element = {<Header/>}>
            {/* Home will be the default route */}
            <Route index element = {<Home/>}></Route>
            <Route path="/about" element = {<About/>}></Route>
            <Route path="/support" element= {<Support/>}></Route>
            <Route path="/contact"element= {<Contact/>}></Route>
            <Route path="/labs" element= {<Labs/>}></Route>
            <Route path="*" element= {<NotFound/>}></Route>
          </Route>
        </Routes>
      
    </div>
  )
}

export default App

// header route ko baki sare routes ka parent banaye hai
//parent router element child router element ko render hone nahi deta hai agar child router element ko render karana hai to outlet tag ka use karna hoga home component me
// lekin isse parent aur child dono router element render hota hai ek hi jagah isiliye home ka contents remove kar denge 
