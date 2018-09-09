import React from 'react';


export default class Header extends React.Component {

	constructor() {
		super()
		this.state = {menuOpen:false}
	}

	handleClick() {
		this.setState({menuOpen: !this.state.menuOpen})
	}

    render () {
        return (
        <div style = {{height:"100%", width:"100%"}}>
        {this.state.menuOpen && <div style = {{height:"100%", width:"100%", opacity:"95%", color:"lightGray"}}> </div>}
        	<header style = {{backgroundColor: "#ff4d4d", height: "60px", margin: "-18px -28px 0 -28px"}}>
        		<h1 style = {{color:"white", paddingTop: "15px"}}>SOS</h1>
        		
        		<nav style = {{margin: "-60px 0 0 20px"}}>
        			<p style = {{color:"white", fontSize: "25px"}} onClick = {() => this.handleClick()}>&#9776;</p>
        		</nav>
        	</header>
        </div>
       )
   }
}