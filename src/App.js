import React, { useState, useEffect } from "react";
import { checkUserInDb } from "./api/login";
import LoginError from "./components/LoginError";
import Login from "./pages/Login.page";
import Voting from "./pages/Voting.page";
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

  const isWrongLoginData = userFromDB === undefined;
  const isFirstLoad = userFromDB === null;
  const isNotLoggedIn = isFirstLoad || isWrongLoginData;

  return (
    <div className="App">
      {isNotLoggedIn ? (
        <div>
          <Login setLogin={setloginData}></Login>
          {isWrongLoginData ? <LoginError></LoginError> : undefined}
        </div>
      ) : (
        <Voting></Voting>
      )}
    </div>
  );
}

export default App;
