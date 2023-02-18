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
import Admin from "./pages/Admin.page";

function App() {
  const [loginData, setloginData] = useState(null);
  const [userFromDB, setuserFromDB] = useState({
    id: "9pL5E1wC8V",
    name: "Alice Lee",
    password: "2NDJYFL",
    type: "admin",
    email: "alicelee@gmail.com",
  });
  const [candidates, setCandidates] = useState([
    {
      name: "Iron Man",
      img: ironman,
      numVotes: 8,
      voters: [],
    },
    { name: "Thor", img: thor, numVotes: 6, voters: [] },
    { name: "Hulk", img: hulk, numVotes: 6, voters: [] },
    {
      name: "Captain America",
      img: captainamerica,
      numVotes: 0,
      voters: [],
    },
  ]);
  const [goToAdminClicked, setGoToAdminClicked] = useState(false);

  if (loginData) {
    const dbResult = checkUserInDb(loginData);
    if (!Object.is(dbResult, userFromDB)) {
      setuserFromDB(dbResult);
    }
  }

  const isWrongLoginData = userFromDB === undefined;
  const isFirstLoad = userFromDB === null;
  const isNotLoggedIn = isFirstLoad || isWrongLoginData;
  const isAdmin = userFromDB.type === "admin";

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
          <div>
            {isAdmin && (
              <button onClick={() => setGoToAdminClicked(true)}>
                Go to Admin page
              </button>
            )}
            <button
              type=""
              onClick={() => {
                setloginData(null);
                setuserFromDB(null);
              }}
            >
              Logout
            </button>
          </div>
        </nav>
      )}
      {isNotLoggedIn && goToAdminClicked === false ? (
        <div>
          <Login setLogin={setloginData} />
          {isWrongLoginData ? <LoginError /> : undefined}
        </div>
      ) : !isNotLoggedIn && goToAdminClicked === false ? (
        <Voting
          userFromDB={userFromDB}
          candidates={candidates}
          setCandidates={setCandidates}
        />
      ) : (
        <Admin candidates={candidates} />
      )}
    </div>
  );
}

export default App;
