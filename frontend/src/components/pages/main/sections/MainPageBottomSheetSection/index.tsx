import { HTMLAttributes } from "react";
import { css } from "@emotion/react";
import Button from "components/common/Button";
import BottomSheetResultSelector from "components/pages/main/sections/MainPageBottomSheetSection/BottomSheetResultSelector";
import { MOCKUP_CHALLENGES } from "mockups/challenges";
import { Member } from "types/api";

import { FlexColumnContainer } from "./styles";
import BottomSheetChallenge from "./BottomSheetChallenge/index";

interface Props extends HTMLAttributes<HTMLDivElement> {
  member: Member;
  currentUser: Member;
  checkStatusInfo: boolean[];
}

function MainPageBottomSheetSection({ member, currentUser, checkStatusInfo, ...props }: Props) {
  return (
    <FlexColumnContainer>
      <BottomSheetChallenge {...MOCKUP_CHALLENGES[0]} onAreaClick={() => {}} />
      <BottomSheetResultSelector
        member={member}
        isOwner={member.id === currentUser.id}
        checkStatusInfo={checkStatusInfo}
      />
      <Button
        css={css`
          margin-bottom: 35px;
        `}
      >
        인증하기
      </Button>
    </FlexColumnContainer>
  );
}

export default MainPageBottomSheetSection;