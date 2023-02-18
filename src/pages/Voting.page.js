import React, { useState } from "react";
import Wrapper from "../styles/styled/Voting.styled";
import CandidateCard from "../components/CandidateCard.component";

import ironman from "../assets/images/ironman.png";
import thor from "../assets/images/thor.png";
import hulk from "../assets/images/hulk.png";
import captainamerica from "../assets/images/captainamerica.png";

const Voting = ({ userFromDB }) => {
  const [vote, setVote] = useState(null);
  const [isDoneVoting, setisDoneVoting] = useState(false);

  return (
    <Wrapper>
      <div>
        <h1>Welcome, {userFromDB.name}</h1>
        <div>
          {[
            { name: "Iron Man", img: ironman },
            { name: "Thor", img: thor },
            { name: "Hulk", img: hulk },
            { name: "Captain America", img: captainamerica },
          ].map((candidate) => (
            <CandidateCard
              key={candidate.name}
              candidateName={candidate.name}
              candidateImg={candidate.img}
              setVote={setVote}
              vote={vote}
              setisDoneVoting={setisDoneVoting}
              isDoneVoting={isDoneVoting}
            />
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default Voting;
