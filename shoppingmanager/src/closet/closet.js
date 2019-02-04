import React, { Component } from 'react'
import './closet.css'
// import {Navbar, Nav, NavItem, MenuItem, NavDropdown} from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './navbar.css'
// import { FaCog } from 'react-icons/fa'
// import { FiLogOut } from 'react-icons/fi'

// const CollectionDiv = () => {
// 	return(
// 		<div className= "collectionDiv">
// 			<ul>
// 				<li>Tops</li>
// 				<li>Sweaters</li>
// 				<li>Jackets</li>
// 				<li>Jeans</li>
// 				<li>Footwear</li>
// 			</ul>
// 		</div>
// 		)
// }


class Closet extends Component {

	constructor(props){
		super(props)
		this.state={
			wear: ""
		}

	}


	// showDiv=()=>{
	// 	if(this.state.bool === false){
	// 	return(
	// 		this.setState({
	// 			bool: true
	// 		})
	// 		)
	// }
	// else{
	// 	return(
	// 		this.setState({
	// 			bool: false
	// 		})
	// 		)
	// 	}
	// }

	selectWear = (val) =>{
		console.log("hi")
		const wear = val
			this.setState({
				wear:wear
			})	
	}


	render(){
		const wear = this.state.wear

		let styles = {
			display: "inline",
		}

		let imgHeight = {
			height: "200px",
		}

		
		if(wear =="top"){
			
			return(
			<div>
				<div className="collectionPos">
					<a href="#">Collection</a>
					<div className= "collectionDiv">
						<ul>
			 				<li key={1} click={this.selectWear.bind(this, "tops")}><a href="#">Tops</a></li>
			 				<li key={2} click={this.selectWear.bind(this, "sweaters")}><a href="#">Sweaters</a></li>
			 				<li key={3} click={this.selectWear.bind(this, "jackets")}><a href="#">Jackets</a></li>
			 				<li key={4} click={this.selectWear.bind(this, "jeans")}><a href="#">Jeans</a></li>
			 				<li key={5} click={this.selectWear.bind(this, "footwears")}><a href="#">Footwear</a></li>
 						</ul>
					</div>
				</div>
				<div className="closetPos">
				<div style={styles}>
					<img style= {imgHeight} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiUmWk_dJjfKXuTHtDpQ4DqMiogLBrBNy-XevUZQwkrY9e6h6E"></img>
				</div>
				<div style={styles}>
					<img style= {imgHeight} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM1NpcOvkkqpnHVJjKLGz5t57FJZ6aGbJnO959SD4cJYgDMgqQ"></img>
				</div>
				<div style={styles}>
					<img style= {imgHeight} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwRbpG05EOumOKS1m8qT7F7Ik8xP4yRMqyjeLNHJ9AURMIt3ZM"></img>
				</div>
				<div style={styles}>
					<img style= {imgHeight} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuMrs8H6BuuBMhmt1cRjN4AxWXxjn06pTZanp__H2cIQJvRrgUqg"></img>
				</div>	
				</div>
			</div>
		)
	}
			else if(wear==""){
			return(
			<div>
				<div className="collectionPos">
					<a href="#">Collection</a>
					<div className= "collectionDiv">
						<ul>
			 				<li id="top" click={this.selectWear}><a href="#">Tops</a></li>
			 				<li id="sweater" click={this.selectWear}><a href="#">Sweaters</a></li>
			 				<li id="jacket" click={this.selectWear}><a href="#">Jackets</a></li>
			 				<li id="jean" click={this.selectWear}><a href="#">Jeans</a></li>
			 				<li id="footwear" click={this.selectWear}><a href="#">Footwear</a></li>
 						</ul>
					</div>
				</div>
				<div className="closetPos">
					
				</div>
			</div>
		)
	    }
		}	
	}


export default Closet