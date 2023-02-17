import React from "react";

const CandidateCard = ({ candidateName, candidateImg, setVote, vote }) => {
  return (
    <div className="candidate-card">
      <h1 className="candidate-name">{candidateName}</h1>
      <img src={candidateImg} alt={candidateName} />
      <button
        className="vote-btn"
        disabled={typeof vote === "string"}
        type=""
        onClick={(e) => {
          setVote(candidateName);
        }}
      >
        Vote
      </button>
    </div>
  );
};
export default CandidateCard;
