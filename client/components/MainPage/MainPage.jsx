import "./mainpage.css";
import Tile from "../Tile/Tile";
import MiniForm from "../MiniForm/MiniForm";
const MainPage = () => {
  return (
    <div className="main-page">
      <div className="container">
        <div className="main-page__content">
          <div className="main-page__block">
            <div className="main-page__offer">
              <h1 className="main-page__title">СРОЧНАЯ ДОСТАВКА В МОСКВЕ</h1>
              <p className="main-page__subtitle">
                Найдем курьера с молниеносной скоростью
              </p>
            </div>
            <MiniForm />
          </div>
          <div className="main-page__tiles">
            <div className="main-page__tiles-row">
              <div className="main-page__tiles-block">
                <Tile
                  color="rgba(103, 227, 0, 0.42)"
                  title="Доставка по городу"
                />
                <Tile
                  color="rgba(255, 147, 147, 0.44)"
                  title="Выкуп и отправка"
                />
              </div>
              <div className="main-page__tiles-block">
                <Tile color="rgba(124, 114, 234, 0.52)" title="Сбор ПВЗ" />
                <Tile
                  color="rgba(77, 137, 255, 0.54)"
                  title="И другие поручения"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
