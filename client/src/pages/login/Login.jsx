import { useRef, useState } from "react"
import "./login.scss"

function Register() {
    

  return (
    <div className="login">
        <div className="top">
        <div className="wrapper">
            <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="" srcSet="" />
        </div>
        </div>
        <div className="container">
            <form >
                <h1>Sign In</h1>
                <input type="email" placeholder="Email or phone number" name="" id="" />
                <input type="password" placeholder="Password"/>
                <button className="loginButton">Sign In</button>
                <span>New to Netflix? <b>Sign up now.</b></span>
                <small>
                    This page is protectedby Gooogle reCAPTCHA to ensure you're nota bot. <b>Learn more.</b>
                </small>
            </form>
        </div>
    </div>
  )
}

export default Register