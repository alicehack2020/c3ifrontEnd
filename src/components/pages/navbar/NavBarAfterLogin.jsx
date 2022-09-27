import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import "./NavBar.css"

const NavBarAfterLogin = () => {
  return (
    <div className='NavBarmain'>
     <Link className='link'to="/"><Button variant="outlined">Logout</Button></Link>
 </div>
  )
}

export default NavBarAfterLogin