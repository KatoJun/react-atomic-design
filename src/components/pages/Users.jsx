import { useContext } from "react";
import styled from "styled-components";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";
import { UserContext } from "../providers/UserProvider";

const users = [...Array(10).keys()].map((value) => {
  return {
    id: value,
    image: "https://source.unsplash.com/NE0XGVKTmcA",
    name: `Kato Jun${value}`,
    email: "12345@example.com",
    phone: "090-1111-222",
    company: {
      name: "テスト株式会社"
    },
    website: "https://google.com"
  };
});

export const Users = () => {
  const { userInfo, setUserInfo } = useContext(UserContext);

  const onClickSwitch = () => {
    setUserInfo({ isAdmin: !userInfo.isAdmin });
  };

  return (
    <SContainer>
      <SecondaryButton onClick={onClickSwitch}>切り替え</SecondaryButton>
      <h2>ユーザー一覧</h2>
      <SearchInput />
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

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
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
