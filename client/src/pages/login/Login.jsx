import { useContext, useState } from "react";
import { login } from "../../authContext/apiCalls";
import { AuthContext } from "../../authContext/AuthContext";
import "./login.scss";
import { Link } from "react-router-dom";
import logo from "../../public/Ani.png"
import Footer from "../../components/footer/Footer";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    login({ email, password }, dispatch);
  };

  const setTestUser = (e) => {
    e.preventDefault();
    setEmail("sam@gmail.com");
    setPassword("123456");
  };


  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <Link to="/" className="logo">
            ANIFLIX
          </Link>
          <a href="" className="dashboard">Admin Dashboard</a>
        </div>
      </div>
      <div className="container">
        <form>
          <h1>Sign In</h1>
          <input
            type="email"
            placeholder="Email or phone number"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="loginButton" onClick={handleLogin}>
            Sign In
          </button>
          <button className="loginButton" onClick={setTestUser}>
            Sign in as guest user
          </button>
          <span>
            New to Aniflix? <b><Link to="/register" className="lik">Sign up now.</Link></b>
          </span>
        </form>
      </div>
      <Footer/>
    </div>
  );
}