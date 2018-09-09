import React from 'react';
import Header from './Menu.jsx';
import InputField from './InputField';
import DropDown from './DropDown.jsx';

export default class HelpView extends React.Component {
    constructor() {
        super()
        this.state = {
            name: "",
            contact: "",
            relation: ""
        }
    }

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

    txtChanged(e, type) {
        if (type === "name") {
            this.setState({ name: e.target.value })
        } else if (type === "contact") {
            this.setState({ contact: e.target.value })
        }
    }

    render() {
        return (
            <div>
                <Header />
                <h1>
                    Need Help?
                </h1>
                <form>
                    <InputField
                        placeholder="Name"
                        handleChange={e => this.txtChanged(e, "name")}
                        width="100%"
                        value={this.state.name}
                        autofill="name"
                    />
                    <div className="flex">
                        <InputField
                            placeholder="Contact name"
                            handleChange={e => this.txtChanged(e, "contact")}
                            width="100%"
                            value={this.state.contact}
                            autofill=""
                        />
                        <DropDown />
                    </div>
                    <input
                        type="submit"
                        value="Send Location"
                        onClick={this.submitForm.bind(this)}
                        style={{
                            WebkitAppearance: "none",
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