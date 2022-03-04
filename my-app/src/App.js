import React from "react";
import "./App.css";
import Feed from "./components/Feed";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { selectUser } from "./features/counter/userSlice";
import Login from "./components/Login";
import { useSelector } from "react-redux"

function App() {
  const user = useSelector(selectUser);
  return (
    <div className="App">
      <Header />

      {!user ? (
        <Login />
      ) : (
        <div className="app-body">
          <Sidebar />
          {/* Feed */}
          <Feed />

          {/* Widgets */}
        </div>
      )}
      {/* App body */}
    </div>
  );
}

export default App;
