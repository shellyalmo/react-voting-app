import React from "react";

const CandidateCard = ({ candidateName, candidateImg, setVote, vote }) => {
  const isChosen =
    vote === candidateName
      ? "candidate-card candidate-card-chosen"
      : "candidate-card";
  const hasVoted = typeof vote === "string";

  return (
    <div className={isChosen}>
      <h1 className="candidate-name">{candidateName}</h1>
      <img src={candidateImg} alt={candidateName} />
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
    </div>
  );
};
export default CandidateCard;
