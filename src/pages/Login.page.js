import React, { useState } from "react";
import Wrapper from "../styles/styled/Login.styled";
import votingLogo from "../assets/images/voting-logo.png";
const Login = () => {
  return (
    <Wrapper>
      <img src={votingLogo} alt="Voting App Logo" />
      <h1>Voting App</h1>
      <Form setParentState={console.log} />
    </Wrapper>
  );
};

const Form = (props) => {
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  // callback func from App - setData
  const setParentState = props.setParentState;
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const formData = {
          username,
          email,
        };
        setParentState(formData);
      }}
    >
      <label htmlFor="userName">User Name: </label>
      <input
        type="text"
        name="userName"
        value={username}
        onChange={(e) => {
          setusername(e.target.value);
        }}
      />
      <br />
      <label htmlFor="email">Email: </label>
      <input
        type="email"
        name="email"
        value={email}
        onChange={(e) => {
          setemail(e.target.value);
        }}
      />
      <button type="submit">Continue</button>
    </form>
  );
};

export default Login;
