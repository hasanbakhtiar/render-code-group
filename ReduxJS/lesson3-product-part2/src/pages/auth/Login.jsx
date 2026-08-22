import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';

const staticUserData = {
    email: "admin@example.com",
    password: "example123"
}

const Login = () => {
    const emailRef = useRef();
    const passRef = useRef();
    const navigate = useNavigate();

    const loginSubmited = (e) => {
        e.preventDefault();
        if (!emailRef.current.value || !passRef.current.value) {
            alert('Please, fill inputs');
        } else {
            if (emailRef.current.value === staticUserData.email && passRef.current.value === staticUserData.password) {
                alert('Login successfull!');
                navigate('/dashboard');
            } else {

                alert('Email or password is wrong!');
            }
        }
    }
    return (
        <div className="d-flex align-items-center justify-content-center flex-column">
            <h1 className='my-5 '>Login</h1>
            <div className="col-5">
                <form onSubmit={loginSubmited}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input ref={emailRef} type="email" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input ref={passRef} type="password" className="form-control" />
                    </div>

                    <button type="submit" className="btn btn-warning">Login</button>
                </form>

            </div>
        </div>
    )
}

export default Login