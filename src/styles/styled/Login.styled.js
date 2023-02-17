import styled from "styled-components";

const Wrapper = styled.section`
  .logo {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  .logo > img {
    width: 200px;
  }

  .login-container > form {
    margin-left: 10rem;
    display: flex;
    flex-direction: column;
    width: 200px;
  }

  .login-container button {
    width: 50px;
  }

  .login-page {
    display: flex;
    justify-content: space-around;
  }

  .right-login-page img {
    width: 700px;
  }
`;

export default Wrapper;
