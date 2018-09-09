import React from 'react'

export default class InputField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      style: {
        fontSize: "1.1rem",
        borderStyle: 'none',
        borderBottom: "2px solid gray",
        paddingBottom: "3px",
        marginBottom: "10px",
        width: this.props.width
      }
    }
  }

  onFocus() {
    this.setState({
      style: {
        fontSize: "1.1rem",
        outline: 'none',
        borderStyle: 'none',
        marginBottom: "10px",
        borderBottom: "2px solid #ff4d4d",
        paddingBottom: "3px",
        width: this.props.width
      }
    })
  }

  onBlur() {
    this.setState({
      style: {
        fontSize: "1.1rem",
        borderStyle: 'none',
        borderBottom: "2px solid gray",
        paddingBottom: "3px",
        marginBottom: "10px",
        width: this.props.width
      }
    })
  }

  render() {
    return (
      <input
        type="text"
        placeholder={this.props.placeholder}
        value={this.props.value}
        onChange={this.props.handleChange}
        style={this.state.style}
        onFocus={() => this.onFocus()}
        onBlur={() => this.onBlur()}
        name={this.props.autofill} />
    );
  }
}