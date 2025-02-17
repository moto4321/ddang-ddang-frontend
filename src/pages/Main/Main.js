import { Container, Grid } from "../../elements/index";
import styled from "styled-components";
import UserInfoContainer from "./components/UserInfoContainer";
import QuestButtonContainer from "./components/QuestButtonContainer";
import LocalQuestSummary from "./components/LocalQuestSummary";
import MainMapContainer from "./components/MainMapContainer";
import Navigation from "../../components/Navigation";
import { useState } from "react";
import { useMainData } from "./hooks/MainHooks";

export default function Main() {
  const {
    questList,
    loading,
    questType,
    setQuestType,
    location,
    region,
  } = useMainData();

  return (
    <Container>

      <BackgroundPaper/>

      <Grid
        mystyles={
          'position: relative; z-index: 100; padding: 0 30px;'
        }
      >
        <Address>{region.regionSi}시 {region.regionGu} {region.regionDong}</Address>
        <UserInfoContainer/>  
        
        <MainMapContainer
          type={questType}
          questList={questList}
        />

        <QuestButtonContainer
          setType={setQuestType}
        />
      </Grid>

      <LocalQuestSummary
        questList={questList}
        location={location}
      />


      <Navigation/>
    </Container>
  )
}

const BackgroundPaper = styled.div`
  position: absolute;
  top: -928px;
  left: calc(50% - 750px);
  z-index: 0;
  width: 1500px;
  height: 1500px;
  background: #5DEB85;
  border-radius: 50%;
`
const Address = styled.p`
  width: 100%;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.15;
  text-align: center;
  color: #fff;
  padding: 50px 0 30px;
`;