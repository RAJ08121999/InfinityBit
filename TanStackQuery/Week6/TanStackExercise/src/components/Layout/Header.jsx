import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <header className='flex justify-between items-center text-2xl'>
        <NavLink to ="/">The React Query</NavLink>
        <ul className='flex justify-between items-center gap-12 text-xl underline' >
            <li><NavLink to = "/">Home</NavLink></li>
            <li><NavLink to = "/trad">Fetchold</NavLink></li>
            <li><NavLink to = "/rq">FetchRQ</NavLink></li>
            <li><NavLink to = "/infinite">InfiniteScroll</NavLink></li>
        </ul>
      </header>
    </div>
  )
}

export default Header
