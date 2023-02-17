import React from "react";

const CandidateCard = ({ candidateName, candidateImg }) => {
  return (
    <div className="candidate-card">
      <h1 className="candidate-name">{candidateName}</h1>
      <img src={candidateImg} alt={candidateName} />
      <button className="vote-btn" type="">
        Vote
      </button>
    </div>
  );
};
export default CandidateCard;
