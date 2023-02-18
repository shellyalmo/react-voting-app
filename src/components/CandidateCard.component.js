import React from "react";
import VoteBtn from "./VoteBtn.component";
import ConfirmVote from "./ConfirmVote.component";

const CandidateCard = ({
  candidateName,
  candidateImg,
  setVote,
  vote,
  setisDoneVoting,
  numVotes = 0,
  setCandidates,
}) => {
  const isChosen = vote === candidateName;
  const cardStyle = isChosen
    ? "candidate-card candidate-card-chosen"
    : "candidate-card";
  const hasVoted = typeof vote === "string";

  return (
    <div className={cardStyle}>
      <h1 className="candidate-name">
        {candidateName} - {numVotes} votes
      </h1>

      <img src={candidateImg} alt={candidateName} />
      {isChosen ? (
        <ConfirmVote
          setVote={setVote}
          setisDoneVoting={setisDoneVoting}
          candidateName={candidateName}
          setCandidates={setCandidates}
        />
      ) : (
        <VoteBtn
          hasVoted={hasVoted}
          candidateName={candidateName}
          setVote={setVote}
          setCandidates={setCandidates}
        />
      )}
    </div>
  );
};
export default CandidateCard;
