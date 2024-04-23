/* eslint-disable no-unused-vars */
import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-purple-200'>
      <div className="logo font-bold">Passify</div>
       <ul>
        <li>
          <a href='#'>Home</a>
          <a href='#'>About</a>
          <a href='#'>Contacts</a>
        </li>
       </ul>
    </nav>
  )
}

export default Navbar
