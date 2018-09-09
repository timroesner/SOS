import React from 'react';


export default class Header extends React.Component {

	constructor() {
		super()
		this.state = {menuOpen:false}
	}

	handleClick(event) {
		this.setState({menuOpen: !this.state.menuOpen})
		console.log("click")
	}

    render () {
        return (


        	


        	<header style = {{backgroundColor: "#ff4d4d", height: "60px", margin: "-18px -28px 0 -28px"}}>

        		<h1 style = {{color:"white", paddingTop: "12px"}}>SOS</h1>
        		
        		<nav style = {{margin: "-61px 0 0 20px", width:"21px", zIndex:"100"}}>
        			<button style = {{color:"white", fontSize: "25px", marginTop: "13px"}} onClick = {() => this.handleClick(this.event)}>&#9776;</button>
        			
        			{
        			 this.state.menuOpen && 
			     		 (
			          <div style = {{backgroundColor:"white", shadowOpacity: "95%", margin:"9px 0 0 -28px", width:"383px", height:"607px", position:"absolute"}}>
			          	<hr/><p style = {{color: "#ff4d4d", fontSize:"24px", margin:"5px 40px 0 40px", paddingTop:"10px"}}>Surivors</p>
			          	<hr/><p style = {{color: "#ff4d4d", fontSize:"24px", margin:"5px 40px 0 40px", paddingTop:"10px"}}>First Responders</p>
			          	<hr/><p style = {{color: "#ff4d4d", fontSize:"24px", margin:"5px 40px 0 40px", paddingTop:"10px"}}>Chat</p>
			          	<hr/>

			            {/*<button style = {{color:"blue", fontSize:"14px", marginTop:"10px", backgroundColor:"white"}}> Menu item 1 </button> <br/>
			            <button style = {{color:"blue", fontSize:"14px", marginTop:"10px", backgroundColor:"white"}}> Menu item 2 </button><br/>
			            <button style = {{color:"blue", fontSize:"14px", marginTop:"10px", backgroundColor:"white"}}> Menu item 3 </button><br/>*/}
			          </div>
			        )

       				 }
        		</nav> 
        	</header>
       )
   }
}