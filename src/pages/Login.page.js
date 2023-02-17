import React, { useState } from "react";
import Wrapper from "../styles/styled/Login.styled";
import votingLogo from "../assets/images/voting-logo.png";
const Login = () => {
  return (
    <Wrapper>
      <div class="login-page">
        <div class="left-login-page">
          <div class="logo">
            <img
              src="https://media.istockphoto.com/id/1185358452/vector/vote-icon-in-flat-style-ballot-box-vector-illustration-on-white-isolated-background-election.jpg?s=612x612&w=0&k=20&c=tAdaMTOaFUxHwjtNMe8QxPdVxszMWUm6jvZmblUT-Qk="
              alt=""
            />
            <h1>Voting App</h1>
          </div>
          <div class="login-container">
            <form action="">
              <label for="userName">User Name: </label>
              <input type="text" name="userName" />
              <label for="userEmail">Email: </label>
              <input type="email" name="userEmail" value="" />
              <label for="userPassword">Password: </label>
              <input type="password" name="userPassword" value="" />
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
