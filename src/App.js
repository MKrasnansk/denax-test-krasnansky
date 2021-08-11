import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [pocet, setPocet] = useState(0);
  const [pole, setPole] = useState([]);

  useEffect(() => {
    let availableWidthPx = document.getElementById("menu-section");
    if (availableWidthPx) {
      console.log(availableWidthPx.offsetWidth);
    }
  }, []);
  const checked = (e) => {
    if (e.target.checked === true) {
      setPocet(pocet + 1);
      let radString = e.currentTarget.parentNode.parentNode.innerText;
      let sedadloString = e.target.value;
      let idSedadlo = e.target.id;
      setPole(pole, pole.push({ idSedadlo, radString, sedadloString }));
    } else {
      setPocet(pocet - 1);
      let radString = e.currentTarget.parentNode.parentNode.innerText;
      let sedadloString = e.target.value;
      let idSedadlo = e.target.id;
      setPole(pole, pole.shift({ idSedadlo, radString, sedadloString }));
    }
  };

  const rad = () => {
    let radSedadiel = [];
    for (let j = 1; j <= 20; j++) {
      radSedadiel.push(
        <td key={"j" + j}>
          <input
            onChange={checked}
            type="checkbox"
            name={j}
            value={j}
            id={"check" + Math.floor(Math.random().toFixed(4) * 10000)}
          ></input>
        </td>
      );
    }
    return radSedadiel;
  };
  //STLPEC head
  const column = () => {
    let cols = [];
    for (let c = 0; c <= 20; c++) {
      if (c === 0) {
        cols.push(<th key={"c" + c}></th>);
      } else {
        cols.push(<th key={"c" + c}>{c}</th>);
      }
    }
    return cols;
  };
  //BODY hladisko
  const hladisko = () => {
    let miestaNaSedenie = [];
    for (let i = 1; i <= 10; i++) {
      miestaNaSedenie.push(
        <tr key={"i" + i}>
          {i}
          {rad()}
        </tr>
      );
    }
    return miestaNaSedenie;
  };
  const handleRemove = (e) => {
    const remove = pole[e.target.value];
    setPole(pole.filter((item) => item !== remove));
  };
  return (
    <div className="App">
      <header className="App-header">
        <table>
          <thead>
            <tr>{column()}</tr>
          </thead>
          <tbody>{hladisko()}</tbody>
        <p>Počet vybratých miest: {pole.length}</p>

        </table>
        <aside>
          <ul>
            {pole.map((item, index) => (
              <li
                key={index}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <p>
                  Rad: {item.radString} sedadlo: {item.sedadloString}
                </p>
                <button
                  type="submit"
                  value={index}
                  onClick={handleRemove}
                  style={{ marginLeft: "11px" }}
                >
                  zrusit
                </button>
              </li>
            ))}
          </ul>
        </aside>
      </header>
    </div>
  );
}

export default App;
