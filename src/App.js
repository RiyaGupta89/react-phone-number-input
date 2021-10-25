import logo from "./logo.svg";
import "./App.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useState } from "react";

function App() {
  const [value, setValue] = useState("");
  return (
    <>
      <div>{value}</div>
      <PhoneInput country={"us"} value={value} onChange={setValue} />
    </>
  );
}

export default App;
