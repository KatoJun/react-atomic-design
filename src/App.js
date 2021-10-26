import { useParams } from "react-router-dom";
import { PrimaryButton } from "./components/atoms/buttons/PrimaryButton";
import { SecondaryButton } from "./components/atoms/buttons/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";
import { HeaderOnly } from "./components/templates/HeaderOnly";
import "./styles.css";

export default function App() {
  const user = {
    image: "https://source.unsplash.com/NE0XGVKTmcA",
    name: "Kato Jun",
    email: "12345@example.com",
    phone: "090-1111-222",
    company: {
      name: "テスト株式会社"
    },
    website: "https://google.com"
  };

  return (
    <HeaderOnly>
      <PrimaryButton>テスト</PrimaryButton>
      <SecondaryButton>検索</SecondaryButton>
      <br />
      <SearchInput />
      <UserCard user={user} />
    </HeaderOnly>
  );
}
[];
