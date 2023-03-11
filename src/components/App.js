import Header from "./Header";
import Main from "./Main";
import cardData from "../assets/cardData.json";
import { Route, Routes } from "react-router-dom";
import Footer from "./Footer";
import Cart from "./Cart";
import { React, useState } from "react";
import Game from "./Game";

function App() {
  const tabArr = ["Всё", "Новинки", "Аккаунты", "Ключи"];
  const [item, setItem] = useState([]);
  let [price, setPrice] = useState(0);
  const [card, setCard] = useState({});

  function addToCart(data) {
    setItem([...item, data]);
    setPrice((price += Number.parseFloat(data.price)));
  }

  function deleteCartItem(data) {
    setItem(item.filter((element) => element.id !== data.id));
    setPrice((price -= Number.parseFloat(data.price)));
  }

  // function incrementCounter(data) {
  //   setCounter(counter + 1);
  //   setPrice((price += data.price));
  // }

  // function dicrementCounter(data) {
  //   if (counter > 1) {
  //     setCounter(counter - 1);
  //     setPrice((price -= data.price));
  //   }
  // }

  function getItem(item) {
    setCard(item);
    console.log(card, item);
  }

  return (
    <div className="App">
      <Header item={item} />
      <main className="content">
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  data={cardData}
                  tab={tabArr}
                  onAddToCart={addToCart}
                  getItem={getItem}
                />
              }
            />
            <Route
              path="/cart"
              element={
                <Cart data={item} onDeleteItem={deleteCartItem} price={price} />
              }
            />
            <Route
              path="/game/:title"
              element={
                <Game
                  card={card}
                  onAddToCart={addToCart}
                  getItem={getItem}
                  cards={cardData}
                />
              }
            />
          </Routes>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
