import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./component/header/Header";
import AddItems from "./component/additems/AddItems";
import DisplayList from "./component/displaylist/DisplayList";

function App() {
  const [items, setItems] = useState([]);

  return (
    <>
      <Header />
      <AddItems setItems={setItems} />
      <DisplayList items={items} setItems={setItems} />
    </>
  );
}

export default App;
