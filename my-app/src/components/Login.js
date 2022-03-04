import React from "react";
import { useState } from "react";
import { auth } from "../firebase";
import "./Login.css";

function Login() {
  const { name, setName } = useState("");
  const { email, setEmail } = useState("");
  const { password, setPassword } = useState("");
  const { profilePic, setProfilePic } = useState("");

  const loginToApp = (e) => {
    e.preventDefault();
  };
    const register = () => {
        if (!name) {
            return alert("Please enter a full name!");
        }
        
        auth.createUserWithEmailAndPassword(email, password).then((userAuth) => {
            userAuth.user.updateProfile({
                displayName: name,
                photoURL: profilePic,
            })
                .then(() => {
                
            })
        })
  };

  return (
    <div className="login">
      <img
        src="https://www.logo.wine/a/logo/LinkedIn/LinkedIn-Logo.wine.svg"
        alt=""
      />
      <form action="Submit">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full name"
          type="text"
        />

        <input
          value={profilePic}
          onChange={(e) => e.target.value}
          placeholder="Profile pic URL (optional)"
          type="text"
        />

        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          type="email"
        />

        <input
          value={password}
          onChange={(e) => e.target.value}
          placeholder="Password"
          type="password"
        />

        <button type="submit" onClick={loginToApp}>
          Sign In
        </button>
      </form>
      <p>Not a member?</p>
      <span className="login-register" onClick={register}>
        Register Now
      </span>
    </div>
  );
}

export default Login;
