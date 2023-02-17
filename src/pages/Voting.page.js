import React from "react";
import Wrapper from "../styles/styled/Voting.styled";

import ironman from "../assets/images/ironman.png";
import thor from "../assets/images/thor.png";
import hulk from "../assets/images/hulk.png";
import captainamerica from "../assets/images/captainamerica.png";

const Voting = () => {
  return (
    <Wrapper>
      <div>
        <div className="candidate-card">
          <h1 className="candidate-name">Iron Man</h1>
          <img src={ironman} alt="Iron Man photo" />
          <button className="vote-btn" type="">
            Vote
          </button>
        </div>
        <div className="candidate-card">
          <h1 className="candidate-name">Thor</h1>
          <img src={thor} alt="Thor photo" />
          <button className="vote-btn" type="">
            Vote
          </button>
        </div>
        <div className="candidate-card">
          <h1 className="candidate-name">Hulk</h1>
          <img src={hulk} alt="Hulk photo" />
          <button className="vote-btn" type="">
            Vote
          </button>
        </div>
        <div className="candidate-card">
          <h1 className="candidate-name">Captain America</h1>
          <img src={captainamerica} alt="Captain America photo" />
          <button className="vote-btn" type="">
            Vote
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Voting;
