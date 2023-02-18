import React from "react";

const ConfirmVote = ({ setVote, setisDoneVoting }) => {
  return (
    <div>
      <button type="" onClick={() => setVote(null)}>
        Change Vote
      </button>
      <button type="" onClick={() => setisDoneVoting(true)}>
        Done
      </button>
    </div>
  );
};

export default ConfirmVote;
