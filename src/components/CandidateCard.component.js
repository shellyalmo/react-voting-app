import React from "react";
import VoteBtn from "./VoteBtn.component";
import ConfirmVote from "./ConfirmVote.component";

const CandidateCard = ({
  candidateName,
  candidateImg,
  setVote,
  vote,
  setisDoneVoting,
  isDoneVoting,
  numVotes = 0,
  setCandidates,
}) => {
  const isChosen = vote === candidateName;
  const cardStyle = isChosen
    ? "candidate-card candidate-card-chosen"
    : "candidate-card";
  const hasVoted = typeof vote === "string";

  const displayContent = () => {
    if (!isDoneVoting && isChosen) {
      return (
        <ConfirmVote
          setVote={setVote}
          setisDoneVoting={setisDoneVoting}
          candidateName={candidateName}
          setCandidates={setCandidates}
        />
      );
    } else if (!isDoneVoting && !isChosen) {
      return (
        <VoteBtn
          hasVoted={hasVoted}
          candidateName={candidateName}
          setVote={setVote}
          setCandidates={setCandidates}
        />
      );
    } else if (isDoneVoting) {
      return <h1>Thanks for voting!</h1>;
    }
  };

  return (
    <div className={cardStyle}>
      <h1 className="candidate-name">
        {candidateName} - {numVotes} votes
      </h1>

      <img src={candidateImg} alt={candidateName} />
      {displayContent()}
    </div>
  );
};
export default CandidateCard;
