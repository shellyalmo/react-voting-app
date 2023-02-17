import React, { useState } from "react";
import Wrapper from "../styles/styled/Login.styled";
import votingLogo from "../assets/images/voting-logo.png";
const Login = ({ setLogin }) => {
  const [userName, setuserName] = useState("");
  const [userEmail, setuserEmail] = useState("");
  const [userPassword, setuserPassword] = useState("");

  return (
    <Wrapper>
      <div className="login-page">
        <div className="left-login-page">
          <div className="logo">
            <img src={votingLogo} alt="" />
            <h1>Voting App</h1>
          </div>
          <div className="login-container">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const formData = {
                  userName,
                  userEmail,
                  userPassword,
                };
                setLogin(formData);
              }}
            >
              <label htmlFor="userName">User Name: </label>
              <input
                type="text"
                name="userName"
                value={userName}
                required
                onChange={(e) => {
                  setuserName(e.target.value);
                }}
              />
              <label htmlFor="userEmail">Email: </label>
              <input
                type="email"
                name="userEmail"
                value={userEmail}
                required
                autoComplete="email"
                onChange={(e) => {
                  setuserEmail(e.target.value);
                }}
              />
              <label htmlFor="userPassword">Password: </label>
              <input
                type="password"
                name="userPassword"
                value={userPassword}
                required
                onChange={(e) => {
                  setuserPassword(e.target.value);
                }}
              />
              <button>Login</button>
            </form>
          </div>
        </div>
        <div className="right-login-page">
          <img
            src="https://img.freepik.com/free-vector/character-illustration-people-with-vote-icons_53876-43035.jpg?w=2000"
            alt=""
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default Login;
