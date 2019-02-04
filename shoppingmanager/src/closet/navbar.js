import React from 'react'
import {Navbar, Nav, NavItem, MenuItem, NavDropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css'
import { FaCog } from 'react-icons/fa'
import { FiLogOut } from 'react-icons/fi'


const Header = () => {
	return(
		<div>
			<div className="appTitle">
				Shopping Manager
			</div>
		 
	    	<div className="navbarPos">
				<ul className="nav navbar-right bg-dark">
	 				 <li className="nav-item">
	   				 	<a className="nav-link active" href="#">Closet</a>
	  				</li>
	  				<li className="nav-item">
	    				<a className="nav-link" href="#">Shop</a>
	  				</li>
	  				<li className="nav-item">
	    				<a className="nav-link" href="#">Contact Us</a>
	  				</li>

	  				<li className="nav-item" id="rightLink">
	    				<a className="nav-link" href="#"><FaCog /></a>
	  				</li>
	  				<li className="nav-item" id="rightLink">
	    				<a className="nav-link" href="#"><FiLogOut /></a>
	  				</li>
				</ul>
			</div>
		</div>
		)
}

export default Header