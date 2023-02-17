import React from "react";

const VoteBtn = ({ hasVoted, candidateName, setVote }) => {
  return (
    <button
      className="vote-btn"
      disabled={hasVoted}
      type=""
      onClick={(e) => {
        setVote(candidateName);
      }}
    >
      Vote
    </button>
  );
};

export default VoteBtn;
