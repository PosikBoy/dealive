import MainPage from "../components/MainPage/MainPage";
import "./page.css";
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <div className="wrapper">
        <Header />
        <MainPage />
      </div>
    </div>
  );
}
