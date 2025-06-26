import React, { useState } from "react";
import {Link} from 'react-router-dom'
 import "./Navbar.css";


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

  return (
   <div >
     <nav className="navlink" style={{marginTop:"1rem"}}>
      <Link to="/" className="title">
        <div className="logo_div">
        <span style={{color:"Red"}}>BRAMHA GRC</span>
       <span style={{color:"Green"}}>CREATION</span>
        </div>
      
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
      <li>
          <Link  to="/">Home</Link>
        </li>
        <li>
          <Link  to="/about">About</Link>
        </li>
        <li>
          <Link  to="/product">Products</Link>
        </li>
        <li>
          <Link to="/works">Works</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
   </div>
  )
}

export default Navbar