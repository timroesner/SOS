import React from 'react';

export default class DropDown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showMenu: false,
            menuVal: ""
        }

    }

    clickMenu(event) {
        this.setState({ showMenu: !this.state.showMenu });
    }
    clickOption(event, option) {
        this.clickMenu(event);
        this.setState({ menuVal: option });
    }

    render() {
        let style = {}

        const optionStyle = {
            cursor: "pointer",

        }

        if (this.state.showMenu) {
            style = {
                fontSize: "1.1rem",
                borderStyle: 'none',
                outline: "none",
                borderBottom: "2px solid #ff4d4d",
                paddingBottom: "3px",
                width: "100%"
            }
        } else {
            style = {
                fontSize: "1.1rem",
                borderStyle: 'none',
                borderBottom: "2px solid gray",
                paddingBottom: "3px",
                marginBottom: "25px",
                width: "100%"
            }
        }
        return (
            <section>
                <input
                    type="text"
                    placeholder="Relationship"
                    onClick={() => this.clickMenu()}
                    style={style}
                    value={this.state.menuVal}
                />
                {
                    this.state.showMenu
                    && (
                        <div className="relationship"
                            style={this.state.style}
                            onChange={this.props.handleChange}
                            onFocus={() => this.onFocus()}
                            onBlur={() => this.onBlur()}>
                            <p style={optionStyle} onClick={() => this.clickOption(this.event, "Parent")}>Parent</p>
                            <hr />
                            <p style={optionStyle} onClick={() => this.clickOption(this.event, "Child")}>Child</p>
                            <hr />
                            <p style={optionStyle} onClick={() => this.clickOption(this.event, "Relative")}>Relative</p>
                            <hr />
                            <p style={optionStyle} onClick={() => this.clickOption(this.event, "Friend")}>Friend</p>
                            <hr />
                            <p style={optionStyle} onClick={() => this.clickOption(this.event, "Other")}>Other</p>
                        </div>)
                }
            </section>
        );
    }

}