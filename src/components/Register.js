import React, { Component } from "react";
import axios from "axios";
import "../styles/Register.css"
import { Link } from "react-router-dom";

class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            lastName: "",
            username: "",
            email: "",
            password: "",
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;

        this.setState({
            [name]: value,
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        axios
            .post("http://localhost:500/api/v1/blog/user/registro", this.state)
            .then((response) => {
                console.log(response.data);
                if (response.status === 201) {
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        return (
            <section className="register-container">
                <Link to="/" relative="path"><span> &#8592;</span> <span>Regresar</span></Link>
                <br />
                <h2>Register</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input
                            type="text"
                            name="name"
                            value={this.state.name}
                            required
                            onChange={this.handleChange}
                        />
                    </label>
                    <br />
                    <label>
                        Last Name:
                        <input
                            type="text"
                            name="lastName"
                            required
                            value={this.state.lastName}
                            onChange={this.handleChange}
                        />
                    </label>
                    <br />
                    <label>
                        Username:
                        <input
                            type="text"
                            name="username"
                            required
                            value={this.state.username}
                            onChange={this.handleChange}
                        />
                    </label>
                    <br />
                    <label>
                        Email:
                        <input
                            type="email"
                            name="email"
                            required
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </label>
                    <br />
                    <label>
                        Password:
                        <input
                            type="password"
                            name="password"
                            required
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                    </label>
                    <br />
                    <button type="submit">Register</button>
                </form>
            </section>
        );
    }
}

export default Register;
