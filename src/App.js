import React from 'react';
import './App.css';
import HomePage from './components/HomePage';
import CountriesTab from './components/CountriesTab';
import StoryList from './components/StoryList';
import StoryForm from './components/StoryForm';
import LogIn from './components/LogIn';
import DonorProfile from './components/donor/DonorProfile';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HomePage/>
        <DonorProfile/>
        <CountriesTab/>
        <StoryList/>
        <StoryForm/>
        <LogIn/>
      </header>
    </div>
  );
}

export default App;
