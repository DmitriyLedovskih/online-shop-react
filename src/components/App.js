import Header from "./Header";
import Main from "./Main";
import cardData from "../assets/cardData.json";
import { Route, Routes } from "react-router-dom";
import Footer from "./Footer";
import Cart from "./Cart";
import { React, useState } from "react";

function App() {
  const tabArr = ["Всё", "Новинки", "Аккаунты", "Ключи"];
  const [item, setItem] = useState([]);
  function addToCart(data) {
    setItem([...item, data]);
  }
  function deleteCartItem(id) {
    setItem(item.filter((element) => element.id !== id));
  }
  return (
    <div className="App">
      <Header item={item} />
      <main className="content">
        <div className="container">
          <Routes>
            <Route
              path="/online-shop-react"
              element={
                <Main data={cardData} tab={tabArr} onAddToCart={addToCart} />
              }
            />
            <Route
              path="/cart"
              element={<Cart data={item} onDeleteItem={deleteCartItem} />}
            />
          </Routes>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
