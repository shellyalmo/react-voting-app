import React, { useState } from "react";
import Wrapper from "../styles/styled/Voting.styled";
import CandidateCard from "../components/CandidateCard.component";

import ironman from "../assets/images/ironman.png";
import thor from "../assets/images/thor.png";
import hulk from "../assets/images/hulk.png";
import captainamerica from "../assets/images/captainamerica.png";

const Voting = ({ userFromDB }) => {
  const [vote, setVote] = useState(null);

  return (
    <Wrapper>
      <div>
        <h1>Welcome, {userFromDB.name}</h1>
        <CandidateCard
          candidateName={"Iron Man"}
          candidateImg={ironman}
          setVote={setVote}
          vote={vote}
        />
        <CandidateCard
          candidateName={"Thor"}
          candidateImg={thor}
          setVote={setVote}
          vote={vote}
        />
        <CandidateCard
          candidateName={"Hulk"}
          candidateImg={hulk}
          setVote={setVote}
          vote={vote}
        />
        <CandidateCard
          candidateName={"Captain America"}
          candidateImg={captainamerica}
          setVote={setVote}
          vote={vote}
        />
      </div>
    </Wrapper>
  );
};

export default Voting;
