import React from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <Header />

      {/* App body */}
      <div className="app-body">
        <Sidebar />
      {/* Feed */}
      {/* Widgets */}
     
     
      </div>
    </div>
  );
}

export default App;