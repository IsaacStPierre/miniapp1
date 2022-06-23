import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home.js'
import { useEffect } from 'react';

function App() {

  //useEffect()

  return (
    <>
      <h1>MovieList MiniApp</h1>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
