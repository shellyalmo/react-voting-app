import React from "react";

const ConfirmVote = ({ setVote }) => {
  return (
    <div>
      <button type="" onClick={() => setVote(null)}>
        Change Vote
      </button>
      <button type="">Done</button>
    </div>
  );
};

export default ConfirmVote;
