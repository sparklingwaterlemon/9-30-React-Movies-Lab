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
    console.log("testing user.name")
    console.log(user.name)
  }

  return (
    <main className="App">
        { user ?
          <>
            <NavBar username={user.name}/>
            <Routes>
              <Route path="/movies" element={<MovieIndexPage username={user.name}/>} />
              <Route path="/actors" element={<ActorIndexPage username={user.name}/>} />
            </Routes>
          </>
          :
          <LoginPage addUser={addUser} />
        }
    </main>
  );
}

export default App;
