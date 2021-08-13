import React, { useState } from "react";
import "./App.css";

function App() {
  const [pocet, setPocet] = useState(0);
  const [pole, setPole] = useState([]);

  const handleOnChange = (e) => {
    const name = e.target.name;
    if (e.target.checked === true) {
      setPocet(pocet + 1);
      let radString = e.currentTarget.parentNode.parentNode.innerText;
      let sedadloString = e.target.value;
      let idSedadlo = e.target.id;
      setPole(pole, pole.push({ idSedadlo, radString, sedadloString, name }));
    } else {
      setPocet(pocet - 1);
      let radString = e.currentTarget.parentNode.parentNode.innerText;
      let sedadloString = e.target.value;
      let idSedadlo = e.target.id;
      setPole(pole, pole.shift({ idSedadlo, radString, sedadloString, name }));
    }
    return pole;
  };

  const rad = (i) => {
    let radSedadiel = [];
    for (let j = 1; j <= 20; j++) {
      let name = i + "rad" + j;
      radSedadiel.push(
        <td key={"j" + j}>
          <input
            onClick={handleOnChange}
            type="checkbox"
            name={name}
            value={j}
            id={`check${name}`}
          ></input>
        </td>
      );
    }
    return radSedadiel;
  };
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
  const hladisko = () => {
    let miestaNaSedenie = [];
    for (let i = 1; i <= 10; i++) {
      miestaNaSedenie.push(
        <tr key={"i" + i}>
          {i}
          {rad(i)}
        </tr>
      );
    }
    return miestaNaSedenie;
  };
  const handleRemove = (e) => {
    const remove = pole[e.target.value];
    document.getElementById(remove.idSedadlo).checked = false
    setPole(pole.filter((item) => item !== remove));

  };
  return (
    <div className="App">
      <header className="App-header">
        <table>
          <thead>
            <tr>{column()}</tr>
          </thead>
          <tbody id='hladisko'>{hladisko()}</tbody>
          <p>Počet vybraných miest: {pole.length}</p>
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
                  zrušit
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
