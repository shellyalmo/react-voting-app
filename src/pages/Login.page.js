import React, { useState } from "react";
import Wrapper from "../styles/styled/Login.styled";
import votingLogo from "../assets/images/voting-logo.png";
const Login = ({ setLogin }) => {
  const [userName, setuserName] = useState("");
  const [userEmail, setuserEmail] = useState("");
  const [userPassword, setuserPassword] = useState("");

  return (
    <Wrapper>
      <div class="login-page">
        <div class="left-login-page">
          <div class="logo">
            <img src={votingLogo} alt="" />
            <h1>Voting App</h1>
          </div>
          <div class="login-container">
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
              <label for="userName">User Name: </label>
              <input
                type="text"
                name="userName"
                value={userName}
                onChange={(e) => {
                  setuserName(e.target.value);
                }}
              />
              <label for="userEmail">Email: </label>
              <input
                type="email"
                name="userEmail"
                value={userEmail}
                onChange={(e) => {
                  setuserEmail(e.target.value);
                }}
              />
              <label for="userPassword">Password: </label>
              <input
                type="password"
                name="userPassword"
                value={userPassword}
                onChange={(e) => {
                  setuserPassword(e.target.value);
                }}
              />
              <button>Login</button>
            </form>
          </div>
        </div>
        <div class="right-login-page">
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
