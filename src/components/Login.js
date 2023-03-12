import React, { Component } from "react";
import "../styles/Login.css"
import { Link } from "react-router-dom";

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log("email: ", this.state.email);
        console.log("Password: ", this.state.password);
    }

    render() {
        return (
           <section>
            <h1>Login</h1>
             <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        id="email"
                        value={this.state.email}
                        autoComplete="on"
                        onChange={(e) => this.setState({ email: e.target.value })}
                        required
                        className="input-field"
                    />
                </div>
                <div>
                    <label htmlFor="password">Password </label>
                    <input 
                        className="input-field"
                        type="password"
                        id="password"
                        value={this.state.password}
                        autoComplete="off"
                        required
                        onChange={(e) => this.setState({ password: e.target.value })}
                    />
                </div>
                <button className="submit-btn" type="submit">Log In</button>
                <p>
                No tienes cuenta? <br />
                <span className="line">
                    <Link to="/signup" relative="path">Registrarse</Link>
                </span>
            </p>
            </form>
           </section>
        );
    }

}

export default Login;