import React from "react";
import Wrapper from "../styles/styled/Voting.styled";
import CandidateCard from "../components/CandidateCard.component";

import ironman from "../assets/images/ironman.png";
import thor from "../assets/images/thor.png";
import hulk from "../assets/images/hulk.png";
import captainamerica from "../assets/images/captainamerica.png";

const Voting = () => {
  return (
    <Wrapper>
      <div>
        <CandidateCard candidateName={"Iron Man"} candidateImg={ironman} />
        <CandidateCard candidateName={"Thor"} candidateImg={thor} />
        <CandidateCard candidateName={"Hulk"} candidateImg={hulk} />
        <CandidateCard
          candidateName={"Captain America"}
          candidateImg={captainamerica}
        />
      </div>
    </Wrapper>
  );
};

export default Voting;
