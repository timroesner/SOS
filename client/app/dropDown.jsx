import React from 'react';

export default class DropDown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            style: {
                borderStyle: "none",
                borderBottom: "1 px solid grey",
                paddingBottom: "3px",
                width: this.props.width
            }, showMenu: false, menuVal: "Relationship"
        }

    }

    onFocus() {
        this.setState({
            style: {
                outline: "none",
                borderStyle: "none",
                borderBottom: "1 px black",
                paddingBottom: "3px",
                width: this.props.width
            }
        })
    }

    onBlur() {
        this.setState({
            style: {
                borderStyle: "none",
                borderBottom: "1 px solid grey",
                paddingBottom: "3px",
                width: this.props.width
            }
        })
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

        if (this.state.showMenu) {
            style = {
                borderBottom: "2px solid #ff4d4d",
                paddingBottom: "3px"
            }
        } else {
            style = {
                borderBottom: "2px solid black",
                paddingBottom: "3px"
            }
        }
        return (
            <section >
                <p
                    onClick={() => this.clickMenu()}
                    style={style}
                >
                    {this.state.menuVal}
                </p>
                {
                    this.state.showMenu
                    && (
                        <div className="relationship"
                            style={this.state.style}
                            onChange={this.props.handleChange}
                            onFocus={() => this.onFocus()}
                            onBlur={() => this.onBlur()}>
                            <button onClick={() => this.clickOption(this.event, "test")}>test</button> <br />
                            <button>option 2</button> <br />
                            <button>option 3</button> <br />
                        </div>)
                }
            </section>
        );
    }

}