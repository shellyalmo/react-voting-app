import styled from "styled-components";

const Wrapper = styled.section`
  .candidate-card {
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    width: 200px;
  }
  .candidate-card img {
    width: 100px;
  }
  .vote-btn {
    width: 100px;
  }
  .candidate-name {
    font-size: 2rem;
  }
`;

export default Wrapper;
