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

  return (
    <main className="App">
      <h1> Test App.js </h1>
      { user ?
        <>
          <NavBar />
          <Routes>
            <Route path="/movies" element={<MovieIndexPage />} />
            <Route path="/actors" element={<ActorIndexPage />} />
          </Routes>
        </>
        :
        <LoginPage />
      }  
    </main>
  );
}

export default App;
