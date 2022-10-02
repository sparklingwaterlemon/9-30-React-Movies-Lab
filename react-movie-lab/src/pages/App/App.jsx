import { useState } from "react";

import LoginPage from "../LoginPage/LoginPage";
import ActorIndexPage from "../ActorIndexPage/ActorIndexPage";
import MovieIndexPage from "../MovieIndexPage/MovieIndexPage";

import './App.css';
// imports above this line

function App() {
  const [user, setUser] = useState(null);

  return (
    <main className="App">
      <h1> Test App.js </h1>
      { user ?
        <MovieIndexPage />
        :
        <LoginPage />
      }  
    </main>
  );
}

export default App;
