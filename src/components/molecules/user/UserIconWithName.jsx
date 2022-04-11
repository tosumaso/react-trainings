import styled from "styled-components";
import React,{useContext} from "react";
import { UserContext } from "../../../providers/UserProvider";

//memo化しているのでpropsとcontextの更新時以外は再レンダリングされない
export const UserIconWithName = memo((props) => {
  //useContext(登録されたContext名) : 登録されたContextを呼び出すHook
  const {userInfo} = useContext(UserContext);
  const {name,image} = props;
  const isAdmin = userInfo ? userInfo.isAdmin : false;
  return (
    <SContainer>
      <SImg width="160px" height="160px" alt={name} src={image} />
      <SName>{name}</SName>
      {isAdmin && <div>編集</div>}
    </SContainer>
  );
});

const SContainer = styled.div`
  text-align: center;
`;

const SImg = styled.img`
  border-radius: 50%;
`;

const SName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: #40514e;
`;