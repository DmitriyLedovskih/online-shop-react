import Header from "./Header";
import Main from "./Main";
import cardData from "../assets/cardData.json";

function App() {
  const tabArr = ["Всё", "Новинки", "Аккаунты", "Ключи"];
  return (
    <div className="App">
      <Header />
      <Main data={cardData} tab={tabArr} />
    </div>
  );
}

export default App;
