import React from 'react';
import './App.css';
import MovieCardContainer from '../MovieCardContainer/MovieCardContainer';
import NavBar from '../NavBar/NavBar';


function App() {
  return (
    <div className="App">
      <NavBar />
      <MovieCardContainer />
    </div>
  );
}

export default App;
