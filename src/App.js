import React,{useEffect }from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Header from './components/Header';
import Home from './components/Home';
import Detail from './components/Detail';
import Login from './components/Login';
import db from './firebase';

function App() {

  useEffect(()=>{
    db.collection("movies").onSnapshot((snapshot)=>{
      let tempMovies = snapshot.docs.map()
    })

  },[]);
  return (
    <div className="App">

      <Router>
        <Header/>
        <Routes>
          <Route path = "/" element = {<Home/>}/>
          <Route path = "/detail" element= {<Detail/>}/>
          <Route path = "/login" element = {<Login/>}/>
        </Routes>
      </Router>


    </div>
  );
}

export default App;
