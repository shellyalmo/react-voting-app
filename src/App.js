import React, { useState } from "react";
import { checkUserInDb } from "./api/login";
import LoginError from "./components/LoginError.component";
import Login from "./pages/Login.page";
import Voting from "./pages/Voting.page";
import "./styles/App.css";
import ironman from "./assets/images/ironman.png";
import thor from "./assets/images/thor.png";
import hulk from "./assets/images/hulk.png";
import captainamerica from "./assets/images/captainamerica.png";

function App() {
  const [loginData, setloginData] = useState(null);
  const [userFromDB, setuserFromDB] = useState(null);
  const [candidates, setCandidates] = useState([
    {
      name: "Iron Man",
      img: ironman,
      numVotes: 8,
    },
    { name: "Thor", img: thor, numVotes: 6 },
    { name: "Hulk", img: hulk, numVotes: 6 },
    {
      name: "Captain America",
      img: captainamerica,
      numVotes: 0,
    },
  ]);

  if (loginData) {
    const dbResult = checkUserInDb(loginData);
    if (!Object.is(dbResult, userFromDB)) {
      setuserFromDB(dbResult);
    }
  }

  const isWrongLoginData = userFromDB === undefined;
  const isFirstLoad = userFromDB === null;
  const isNotLoggedIn = isFirstLoad || isWrongLoginData;

  return (
    <div className="App">
      {!isNotLoggedIn && (
        <nav
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "grey",
            color: "white",
          }}
        >
          <h1>Welcome, {userFromDB.name}</h1>
          <button
            type=""
            onClick={() => {
              setloginData(null);
              setuserFromDB(null);
            }}
          >
            Logout
          </button>
        </nav>
      )}
      {isNotLoggedIn ? (
        <div>
          <Login setLogin={setloginData} />
          {isWrongLoginData ? <LoginError /> : undefined}
        </div>
      ) : (
        <Voting
          userFromDB={userFromDB}
          candidates={candidates}
          setCandidates={setCandidates}
        />
      )}
    </div>
  );
}

export default App;
