import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import LoginPage from "../LoginPage/LoginPage";
import ActorIndexPage from "../ActorIndexPage/ActorIndexPage";
import MovieIndexPage from "../MovieIndexPage/MovieIndexPage";
import NavBar from "../../components/NavBar/NavBar";

import './App.css';
// imports above this line

function App() {
  const [user, setUser] = useState(null);

  function addUser(user){
    setUser(user);
    console.log("adding user");
    console.log(user)
  }

  return (
    <main className="App">
      <div className="full-screen-container">
        { user ?
          <>
            <NavBar />
            <Routes>
              <Route path="/movies" element={<MovieIndexPage />} />
              <Route path="/actors" element={<ActorIndexPage />} />
            </Routes>
          </>
          :
          <LoginPage addUser={addUser} />
        }
      </div>
    </main>
  );
}

export default App;
