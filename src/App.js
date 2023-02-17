import React, { useState, useEffect } from "react";
import { checkUserInDb } from "./api/login";
import Login from "./pages/Login.page";
import "./styles/App.css";

function App() {
  const [loginData, setloginData] = useState(null);
  const [userFromDB, setuserFromDB] = useState(null);
  //TODO: let user try again after bad login

  //only check user in db if it hasn't happened yet
  if (loginData && userFromDB === null) {
    const dbResult = checkUserInDb(loginData);
    setuserFromDB(dbResult);
  }

  return (
    <div className="App">
      <Login setLogin={setloginData}></Login>
      {userFromDB ? "loggedin" : "Not logged in"}
    </div>
  );
}

export default App;
