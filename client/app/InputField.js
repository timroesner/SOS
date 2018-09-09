import React from 'react'

export default class InputField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {style:  {
  		borderStyle: 'none', 
  		borderBottom: "1px solid gray",
  		paddingBottom: "3px",
  		width: this.props.width
  	}}
  }

  onFocus(){
  	this.setState({style: {
  		outline: 'none',
  		borderStyle: 'none', 
  		borderBottom: "1px solid #ff4d4d",
  		paddingBottom: "3px",
  		width: this.props.width
  	}})
  }

  onBlur(){
  	this.setState({style: {
  		borderStyle: 'none', 
  		borderBottom: "1px solid gray",
  		paddingBottom: "3px",
  		width: this.props.width
  	}})
  }

  render() {
    return (
         <input type="text" 
         value={this.props.value} 
         onChange={this.props.handleChange} 
         style={this.state.style}
         onFocus={() => this.onFocus()}
         onBlur={() => this.onBlur()} 
         name= "full-name"/>
    );
  }
}