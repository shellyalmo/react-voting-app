import React from "react";

const VoteBtn = ({ hasVoted, candidateName, setVote, setCandidates }) => {
  return (
    <button
      className="vote-btn"
      disabled={hasVoted}
      type=""
      onClick={(e) => {
        setVote(candidateName);
        setCandidates((candidates) => {
          return candidates.map((c) => {
            if (c.name === candidateName) {
              return { ...c, numVotes: c.numVotes + 1 };
            }
            return c;
          });
        });
      }}
    >
      Vote
    </button>
  );
};

export default VoteBtn;
