import * as React from 'react'
import { Link, Outlet, createRootRoute } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <React.Fragment>
      <Link to='/' className='[&.active]:font-bold'>Home</Link>
      <Link to='/about' className='[&.active]:font-bold'>About</Link>
      <Link to='/posts' search={{
        q:'post1'
      }} className='[&.active]:font-bold'>posts</Link>
      <Outlet />
    </React.Fragment>
  )
};
