import styled from "styled-components";
import { UserContext } from "../../providers/UserProvider";
import {useContext} from "react";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";

const users = [...Array(10).keys()].map((value) => {
  return {
    id: value,
    name: `Tom${value}`,
    image: "https://source.unsplash.com/CEx86maLUSc",
    email: "aaa@gmail.com",
    phone: "090-1111-2222",
    company: {
      name: "テスト株式会社"
    },
    website: "https://google.com"
  }
})

export const Users = () => {

  //contextが更新されるとcontextを参照しているコンポーネントもレンダリングされる。子コンポーネントもレンダリングされるため子はmemo()でpropsの変更時以外はレンダリングしないようにする
  const {userInfo,setUserInfo} = useContext(UserContext);
  const onClickSwitch = () => setUserInfo({isAdmin: !userInfo.isAdmin})

  return (
    <SContainer>
      <h2>ユーザーページです</h2>
      <SearchInput />
      <br/>
      <SecondaryButton onClick={onClickSwitch}>切り替え</SecondaryButton>
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </SUserArea>
    </SContainer>
  )
}

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(200px,1fr));
  grid-gap: 20px;
`;