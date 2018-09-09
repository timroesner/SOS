import React from 'react';

export default class HelpView extends React.Component {

    submitForm(e) {
        e.preventDefault()
        console.log("submit")
        if (navigator && navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.sendForm, this.error);
        }
    }

    error(error) {
        alert(error.message)
    }

    sendForm(position) {
        console.log(position.coords.latitude)
        console.log(position.coords.longitude)
    }

    render() {
        return (
            <div>
                <h1>
                    Need Help?
                </h1>
                <form>
                    {/* Input for Name */}
                    <span>{/* Input for Contact and Dropdown*/}</span>
                    <input
                        type="submit"
                        value="Send Location"
                        onClick={this.submitForm.bind(this)}
                        style={{
                            webkitAppearance: "none",
                            cursor: "pointer",
                            width: "100%",
                            height: '44px',
                            backgroundColor: "#CF000F",
                            color: "white",
                            fontSize: "1.1rem",
                            borderRadius: "8px",
                            borderStyle: "none",
                            outline: "none"
                        }} />
                </form>
            </div>
        )
    }
}