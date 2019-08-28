import React from 'react';
import { useEffect } from 'react';
import './App.css';
import HomePage from './components/HomePage';
import CountriesTab from './components/CountriesTab';
import StoryList from './components/StoryList';
import StoryForm from './components/StoryForm';
import LogIn from './components/LogIn';
import DonorProfile from './components/donor/DonorProfile';
import axios from 'axios';



function App() {

  


  return (
    <div className='App'>
      <header className='App-header'></header>
      <LogIn />
      <StoryForm />
      <StoryList />
      

      
     
    </div>



  );


}

export default App;
