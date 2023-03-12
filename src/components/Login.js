import React, { Component } from "react";
import "../styles/Login.css"

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log("Username: ", this.state.username);
        console.log("Password: ", this.state.password);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="username">Username: </label>
                    <input
                        type="text"
                        id="username"
                        value={this.state.username}
                        onChange={(e) => this.setState({ username: e.target.value })}
                        className="input-field"
                    />
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input 
                        className="input-field"
                        type="password"
                        id="password"
                        value={this.state.password}
                        onChange={(e) => this.setState({ password: e.target.value })}
                    />
                </div>
                <button className="submit-btn" type="submit">Log In</button>
            </form>
        );
    }

}

export default Login;