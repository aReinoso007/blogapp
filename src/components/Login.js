import { useRef, useState, useEffect, useContext } from 'react';
import "../styles/Login.css"
import { Link } from "react-router-dom";
import { signIn } from "../config/Api";
import AuthContext from '../context/AuthProvider';
const Login = () => {

    const { setAuth } = useContext(AuthContext);

    const emailRef = useRef();
    const errRef = useRef();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        emailRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [email, password])

    const handleSubmit = async (e) => {
        e.preventDefault();
        signIn({ email: email, password: password }).then((res) => {
            if (res !== undefined) {
                console.log('res ', res.data.uid);
                const uid = res.data.uid;
                setAuth({ email, password, uid });
                setEmail('');
                setPassword('');
                setSuccess(true);
            }else{
                alert('Datos incorrectos')
                setSuccess(false);
            }
            
        })
    }

    return (
        <>
            {success ?
                (
                    <section>
                        <h1>Has iniciado sesion!</h1>
                        <br />
                        <p>
                            <Link to="/home" relative="path">Ir a blogs</Link>
                        </p>
                    </section>
                ) : (
                    <section>
                        <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                        <h1>Login</h1>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="email">Email</label>
                                <input
                                    type="text"
                                    id="email"
                                    value={email}
                                    ref={emailRef}
                                    autoComplete="on"
                                    onChange={(e) => setEmail(e.target.value)}
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
                                    value={password}
                                    autoComplete="off"
                                    required
                                    onChange={(e) => setPassword(e.target.value)}
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
                )}
        </>
    );

}

export default Login;