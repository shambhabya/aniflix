import { useRef, useState } from "react"
import "./register.scss"

function Register() {
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");

    const emailRef = useRef();
    const passwordRef = useRef();

    const handleStart =()=>{
        setEmail(emailRef.current.value);
    }

    const handleFinish= ()=>{
        setPassword(passwordRef.current.value);
    }

  return (
    <div className="register">
        <div className="top">
        <div className="wrapper">
            <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="" srcset="" />
            <button className="loginButton">Sign In</button>
        </div>
        </div>
        <div className="container">
            <h1>Unlimited movies, TV shows, and more.</h1>
            <h2>Watch anywhere, Cancel Anytime</h2>
            <p>
                Ready to watch? Enter your email to create or restart your membership.
            </p>{
                !email ? (
                    <div className="input">
                <input type="email" name="" placeholder="email address" id="" ref={emailRef} />
                <button className="registerButton" onClick={handleStart}>Get Started</button>
            </div>
                ) : (
                    <form className="input">
                <input type="password" name="" placeholder="password" id="" ref={passwordRef} />
                <button className="registerButton" onClick={handleFinish}>Start</button>
            </form>
            )
            }
            
        </div>
    </div>
  )
}

export default Register