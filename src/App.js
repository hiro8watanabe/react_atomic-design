// import { BrowserRouter } from "react-router-dom";
// import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
// import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
// import { SearchInput } from "./components/molecules/SearchInput";

import { Router } from "./router/Router";
import "./styles.css";

const user = {
  name: "ひろ",
  img: "https://source.unsplash.com/ymy29Y4J5Qs",
  email: "12345@aaa.com",
  tel: "000-9999-9999",
  company: {
    name: "テスト株式会社"
  },
  website: "https://google.com"
};

export const App = () => {
  return <Router />;
};
