import React from 'react'
import logo from './realzs.svg'
import { Link } from "react-router-dom"


const NavBar = () => {

  return (
    <body> 
    <ul class="nav">
       <div class="navbar">
       <span class="navbar-brand mb-1 h1">.</span>
      </div>
      <div class ="logo">
      <Link to="/">
      <img src={logo} alt="zs logo" height = {65} width={200}/>
      </Link>
      </div>
    </ul>
  </body>
  )
}

export default NavBar