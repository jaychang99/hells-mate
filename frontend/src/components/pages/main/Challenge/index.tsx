import React, { HTMLAttributes } from "react";
import Image from "next/image";
import Link from "next/link";
import { css } from "@emotion/react";
import ChallengeProfile from "components/pages/main/Challenge/ChallengeProfile";
import {
  ChallengeDescriptionText,
  ChallengeRibbon,
  ChallengeTitleText,
  FlexContentColumn,
  FlexContentIconColumn,
  FlexContentInfoColumn,
  FlexLastColumn,
  FlexRibbonColumn,
  FlexSpaceBetweenContainer,
  StyledChallenge,
} from "components/pages/main/Challenge/styles";
import { ChallengeType } from "types/api";

import dumbbellIcon from "/public/images/dumbbellIcon.svg";
import bigDumbbellIcon from "/public/images/ep_exercise_icon.svg";
import foodIcon from "/public/images/ep_food_icon.svg";
import forkKinfeIcon from "/public/images/forkKnifeIcon.svg";
import navigateNextIcon from "/public/images/navigateNext.svg";

interface Props extends HTMLAttributes<HTMLDivElement>, ChallengeType {}

function Challenge({ challengeTitle, description, members, category, ...props }: Props) {
  return (
    <StyledChallenge {...props}>
      <FlexRibbonColumn>
        <ChallengeRibbon category={category} />
      </FlexRibbonColumn>
      <FlexContentColumn
        css={css`
          flex-grow: 1;
        `}
      >
        <FlexContentIconColumn>
          <Image alt="icon" src={category === "food" ? forkKinfeIcon : dumbbellIcon} />
        </FlexContentIconColumn>
        <FlexSpaceBetweenContainer>
          <FlexContentInfoColumn
            css={css`
              flex-grow: 1;
              justify-content: space-between;
            `}
          >
            <div>
              <ChallengeTitleText>{challengeTitle}</ChallengeTitleText>
              <ChallengeDescriptionText>{description}</ChallengeDescriptionText>
            </div>
            <ChallengeProfile members={members} />
          </FlexContentInfoColumn>
          <FlexLastColumn>
            <Link href="#" passHref>
              <a>
                <Image alt="navigation next icon" src={navigateNextIcon} />
              </a>
            </Link>

            <Image
              alt="big dumbbell icon"
              src={category === "food" ? foodIcon : bigDumbbellIcon}
              width={90}
              height={90}
            />
          </FlexLastColumn>
        </FlexSpaceBetweenContainer>
      </FlexContentColumn>
    </StyledChallenge>
  );
}

export default Challenge;