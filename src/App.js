import { useParams } from "react-router-dom";
import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";
import { HeaderOnly } from "./components/templates/HeaderOnly";
import "./styles.css";
import { BrowserRouter } from "react-router-dom";

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
    <BrowserRouter>
      <HeaderOnly>
        <PrimaryButton>テスト</PrimaryButton>
        <SecondaryButton>検索</SecondaryButton>
        <br />
        <SearchInput />
        <UserCard user={user} />
      </HeaderOnly>
    </BrowserRouter>
  );
}
