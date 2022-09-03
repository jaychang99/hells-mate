import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "@emotion/styled";
import { BlueGt } from "components/common/BlueGt";
import { SubDescript, Title } from "components/common/Description";
import { StyledInput } from "components/common/Input/styles";
import { motion } from "framer-motion";
import { defaultFadeInVariants, staggerOne } from "styles/motions";

import lPolygon from "../../images/lPolygon.svg";
import rPolygon from "../../images/rPolygon.svg";

const MoveContainer = styled(motion.div)`
  position: absolute;
  width: 60px;
  height: 30px;
  display: flex;
  justify-content: space-between;
  top: 7%;

  span {
    margin-left: 10px;
    line-height: 30px;

    b {
      font-weight: bold;
    }
  }
`;

const IntroduceGroup = styled(StyledInput)`
  height: 213px;
  resize: none;
`;

const GroupDescript = styled(SubDescript)`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 10px;
  margin-left: 0;
`;

export default function GroupInfo() {
  const [name, setName] = useState("");
  const [groupDes, setGroupDes] = useState("");

  const onSubmit = (e: any) => {
    const router = useRouter();
    router.push({
      pathname: "/",
      query: {
        name,
        groupDes,
      },
    });
  };

  const aboutName = (e: any) => {
    const value = e.target.value;
    setName(value);
    console.log(name);
  };

  const aboutGroup = (e: any) => {
    const value = e.target.value;
    setGroupDes(value);
  };

  const Goback = styled(motion.a)`
    font-size: 20px;
  `;
  return (
    <>
      <motion.form variants={staggerOne} initial="initial" whileInView="animate" exit="exit">
        <MoveContainer>
          <Link href="/firstPage" passHref>
            <Goback variants={defaultFadeInVariants}>
              <Image alt={"back"} src={lPolygon} />
            </Goback>
          </Link>
          <motion.span variants={defaultFadeInVariants}>
            <b>2</b> / 3
          </motion.span>
        </MoveContainer>
        <Title variants={defaultFadeInVariants}>
          그룹에 대한
          <br />
          정보를 알려주세요.
        </Title>
        <GroupDescript variants={defaultFadeInVariants}>그룹의 이름을 입력해주세요.</GroupDescript>
        <StyledInput
          onChange={aboutName}
          value={name}
          variants={defaultFadeInVariants}
          placeholder="그룹의 이름을 입력해주세요"
        />
        <GroupDescript variants={defaultFadeInVariants}>그룹에 대해 설명해주세요.</GroupDescript>
        <IntroduceGroup
          value={groupDes}
          onChange={aboutGroup}
          variants={defaultFadeInVariants}
          placeholder="그룹에 대해 설명해주세요"
        />
        {/* <Link href='/thirdPage' passHref> */}
        <BlueGt onSubmit={onSubmit}>
          <a>
            <Image src={rPolygon} />
          </a>
        </BlueGt>
      </motion.form>
      {/* </Link> */}
    </>
  );
}