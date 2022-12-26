import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Header from "./components/Header";
import { Main } from "./components/Main";

function App() {
  const [porcentaje, setPorcentaje] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [numberPeople, setNumberPeople] = useState(0);

  return (
    <div className="App">
      <Header />
      <Main
        porcentaje={porcentaje}
        setPorcentaje={setPorcentaje}
        totalCount={totalCount}
        setTotalCount={setTotalCount}
        numberPeople={numberPeople}
        setNumberPeople={setNumberPeople}
      />
    </div>
  );
}

export default App;
