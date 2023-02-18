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
  const candidates = [
    {
      name: "Iron Man",
      img: ironman,
      numVotes: 6 + ("Iron Man" === vote ? 1 : 0),
    },
    { name: "Thor", img: thor, numVotes: 6 + ("Thor" === vote ? 1 : 0) },
    { name: "Hulk", img: hulk, numVotes: 0 + ("Hulk" === vote ? 1 : 0) },
    {
      name: "Captain America",
      img: captainamerica,
      numVotes: 8 + ("Captain America" === vote ? 1 : 0),
    },
  ];
  return (
    <Wrapper>
      <div>
        <h1>Welcome, {userFromDB.name}</h1>
        <div>
          {candidates
            .sort((a, b) => {
              return b.numVotes - a.numVotes;
            })
            .map((candidate) => (
              <CandidateCard
                key={candidate.name}
                candidateName={candidate.name}
                candidateImg={candidate.img}
                setVote={setVote}
                vote={vote}
                setisDoneVoting={setisDoneVoting}
                isDoneVoting={isDoneVoting}
                numVotes={candidate.numVotes}
              />
            ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default Voting;
