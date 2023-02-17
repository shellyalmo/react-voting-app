import React, { useState } from "react";
import Login from "./pages/Login.page";
import "./styles/App.css";

function App() {
  const [loginData, setloginData] = useState(null);
  return (
    <div className="App">
      <Login setLogin={setloginData}></Login>
    </div>
  );
}

export default App;
