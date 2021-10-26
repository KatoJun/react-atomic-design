import "./styles.css";
import { Router } from "./router/Router";

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

export default function App() {
  return <Router />;
}
