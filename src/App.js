import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Cards from "./Components/Cards/Cards";
import axios from "axios";

const cardsData = [
  {
    id: 1,
    name: "React Developer",
  },
  {
    id: 2,
    name: "RPA Developer",
  },
  {
    id: 3,
    name: "Python Developer",
  },
  {
    id: 4,
    name: "Angular Developer",
  },
];

function App() {
  const [cards, setCards] = useState([]);

  const getCardsData = async () => {
    await axios
      .get("https://5ead7be14350860016e1372c.mockapi.io/cards")
      .then((res) => {
        // console.log(res);
        setCards(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getCardsData();
  }, []);

  return (
    <div className="App">
      <Navbar name="Piyush" />
      <div className="container">
        <div className="row">
          {cards.map((item) => (
            <Cards key={item.id} props={item.name} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
