import axios from "axios";
import { useRef } from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./register.scss";
import Footer from "../../components/footer/Footer";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const emailRef = useRef();
  const passwordRef = useRef();
  const usernameRef = useRef();

  const handleStart = () => {
    const enteredEmail = emailRef.current.value;

    // Simple email validation using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(enteredEmail)) {
      setEmail(enteredEmail);
    } else {
      // Handle invalid email
      alert("Please enter a valid email address");
    }
  };
  

  const handleFinish = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("api/auth/register", { email,username, password });
      navigate("/login");
    } catch (err) {
        console.log(err);
        alert("Error, try again");
    }
  };
  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <Link to="/" className="logo">ANIFLIX</Link>
          <div>
          <Link to="/login" className="loginButton">Sign In</Link>
          <a href="" className="loginButton">Admin Dashboard</a>
          </div>
        </div>
      </div>
      <div className="container">
        <h1>Unlimited anime shows and movies.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        {!email ? (
          <div className="input">
            <input type="email" placeholder="email address" ref={emailRef} />
            <button className="registerButton" onClick={handleStart}>
              Get Started
            </button>
          </div>
        ) : (
          <form className="input">
            <input type="username" value={username } onChange={(e) => setUsername(e.target.value)} placeholder="username" />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" />
            <button className="registerButton" onClick={handleFinish}>
              Start
            </button>
          </form>
        )}
      </div>
      <Footer/>
    </div>
  );
}