import styled from "styled-components";

const Wrapper = styled.section`
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: grey;
    color: white;
  }
  .candidate-card {
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    width: 200px;
  }
  .candidates-board {
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(2, 1fr);
  }
  .candidate-card-chosen {
    background-color: green;
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
