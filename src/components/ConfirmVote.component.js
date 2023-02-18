import React from "react";

const ConfirmVote = ({
  setVote,
  setisDoneVoting,
  setCandidates,
  candidateName,
  userFromDB,
}) => {
  return (
    <div>
      <button
        type=""
        onClick={() => {
          setCandidates((candidates) => {
            return candidates.map((c) => {
              if (c.name === candidateName) {
                return { ...c, numVotes: c.numVotes - 1 };
              }
              return c;
            });
          });
          setVote(null);
        }}
      >
        Change Vote
      </button>
      <button
        type=""
        onClick={() => {
          setisDoneVoting(true);
          setCandidates((candidates) => {
            return candidates.map((c) => {
              if (c.name === candidateName) {
                return { ...c, voters: [...c.voters, userFromDB.name] };
              }
              return c;
            });
          });
        }}
      >
        Done
      </button>
    </div>
  );
};

export default ConfirmVote;
