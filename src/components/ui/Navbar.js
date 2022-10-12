import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='nav'>
        <Link className='navitems active' to='/home'>Home</Link>
        <Link className='navitems' to='/char'>characters</Link>
        <Link className='navitems' to='/'>Seasons</Link>
        <Link className='navitems' to='/'>quotes</Link>
    </div>
  )
}

export default Navbar