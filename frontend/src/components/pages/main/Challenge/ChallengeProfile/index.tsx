import Profile from "components/common/Profile";
import {
  ChallengeProfileMoreButton,
  ChallengeProfileMoreButtonText,
  StyledChallengeProfile,
} from "components/pages/main/Challenge/ChallengeProfile/styles";
import React, { HTMLAttributes, useEffect, useState } from "react";
import { Member } from "types/api";

interface Props extends HTMLAttributes<HTMLDivElement> {
  members: Member[];
}

function ChallengeProfile({ members, ...props }: Props) {
  const [processedMembers, setProcessedMembers] = useState(
    members.length > 3 ? members.slice(0, 2) : members
  );
  const [isMoreButton, setIsMoreButton] = useState(members.length > 3 ? true : false);

  useEffect(() => {
    setProcessedMembers(members.length > 3 ? members.slice(0, 2) : members);
    setIsMoreButton(members.length > 3 ? true : false);
  }, [members]);

  return (
    <StyledChallengeProfile {...props}>
      {processedMembers.map((member, index) => (
        <Profile member={member} key={index} />
      ))}
      {isMoreButton && (
        <ChallengeProfileMoreButton>
          <ChallengeProfileMoreButtonText>+ {members.length - 2}</ChallengeProfileMoreButtonText>
        </ChallengeProfileMoreButton>
      )}
    </StyledChallengeProfile>
  );
}

export default ChallengeProfile;