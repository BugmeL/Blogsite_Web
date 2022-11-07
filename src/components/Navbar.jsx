import React from 'react'
import {Link} from 'react-router-dom'
import logo from "../img/logo.png"
import { AuthContext } from '../context/authContext'
import { useContext } from 'react'
 
 
const Navbar = () =>{

  // const {currentUser, logout} = useContext(AuthContext);

  return (
    <div className='navbar'>
     <div className="container">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="links"> 
        <Link className="link" to="/?cat=art">
          <h6>ART</h6>
        </Link>
        <Link className="link" to="/?cat=science">
          <h6>SCIENCE</h6>
        </Link>
        <Link className="link" to="/?cat=technology">
          <h6>TECHNOLOGY</h6>
        </Link>
        <Link className="link" to="/?cat=cinema">
          <h6>CINEMA</h6>
        </Link>
        <Link className="link" to="/?cat=design">
          <h6>DESIGN</h6>
        </Link>
        <Link className="link" to="/?cat=food">
          <h6>FOOD</h6>
        </Link>
          <span>Mel</span>
         <Link to="/login"><span >Logout</span></Link>
        <span className="write">
          <Link to="/write">Write</Link>
        </span>
      </div>
     </div>
    </div>
  )
}

export default Navbar