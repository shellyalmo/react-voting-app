import React, { useState, useEffect } from "react";
import { checkUserInDb } from "./api/login";
import Login from "./pages/Login.page";
import "./styles/App.css";

function App() {
  const [loginData, setloginData] = useState(null);
  const [userFromDB, setuserFromDB] = useState(null);

  //only check user in db if it hasn't happened yet and rerender only if login data changed
  useEffect(() => {
    if (loginData) {
      const dbResult = checkUserInDb(loginData);
      setuserFromDB(dbResult);
    }
  }, [loginData]);

  return (
    <div className="App">
      <Login setLogin={setloginData}></Login>
      {userFromDB ? "loggedin" : "Not logged in"}
    </div>
  );
}

export default App;
