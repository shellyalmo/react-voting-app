import React, { useState } from "react";
import Wrapper from "../styles/styled/Voting.styled";
import CandidateCard from "../components/CandidateCard.component";

const Voting = ({ userFromDB, candidates, setCandidates }) => {
  const [vote, setVote] = useState(null);
  const [isDoneVoting, setisDoneVoting] = useState(false);

  return (
    <Wrapper>
      <div>
        <div className="navbar">
          <h1>Welcome, {userFromDB.name}</h1>
          <button type="">Logout</button>
        </div>
        <div className="candidates-board">
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
                setCandidates={setCandidates}
              />
            ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default Voting;
