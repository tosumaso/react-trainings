import styled from "styled-components";
import React,{useContext} from "react";
import {useHistory} from "react-router-dom";
import { UserContext } from "../../providers/UserProvider";
import { SecondaryButton } from "../atoms/button/SecondaryButton";

export const Top = () => {
  const history = useHistory();
  const {setUserInfo} = useContext(UserContext);

  const onClickAdmin = () => {
    setUserInfo({isAdmin: true});
    history.push("/users");
  };

  const onClickGeneral = () => {
    setUserInfo({isAdmin: false});
    history.push("/users");
  }

  return (
    <SContainer>
      <h2>Topページです</h2>
      <SecondaryButton onClick={onClickAdmin} >管理ユーザー</SecondaryButton>
      <br/>
      <SecondaryButton onClick={onClickGeneral} >一般ユーザー</SecondaryButton>
    </SContainer>
  )
}

const SContainer = styled.div`
  text-align: center;
`;