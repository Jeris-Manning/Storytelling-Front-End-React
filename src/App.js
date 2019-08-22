import React from 'react';
import './App.css';
import HomePage from './components/HomePage';
import CountriesTab from './components/CountriesTab';
import StoryList from './components/StoryList';
import StoryForm from './components/StoryForm';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HomePage/>
        <CountriesTab/>
        <StoryList/>
        <StoryForm/>
      </header>
    </div>
  );
}

export default App;
