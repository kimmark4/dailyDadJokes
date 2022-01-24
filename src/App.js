import './styles/sass/index.scss';
import Header from './components/Header.js';
import Results from './components/Results.js'
import UserInputs from './components/UserInputs.js';
import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react';



function App() {

  const [submit, setSubmit] = useState(false);
  const [userLimitChoice, setuserLimitChoice] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');
  const [userChoice, setUserChoice] = useState("placeholder");

  

  const appjsClick = () => {
    console.log(searchTerm);
    console.log(userLimitChoice);
    console.log(submit);
  }


  return (
    <div className="dadJokeApp">

      <Header />
    
      <h2>{searchTerm}</h2>
      <p>{searchTerm}</p>
      <p>{userLimitChoice}</p>
      <button onClick={appjsClick}>this is app.js</button>

      <Routes>
        <Route path="/" element={<UserInputs propTerm={searchTerm => setSearchTerm(searchTerm)} propLimit={userLimitChoice => setuserLimitChoice(userLimitChoice)} propSubmit={submit => setSubmit(submit)} />} />
        <Route path="/results" element={<Results submit={submit} userLimitChoice={userLimitChoice} searchTerm={searchTerm} />} />
      </Routes>


      {/* <UserInputs />  */}
        {/* <Results /> */}
    </div>
  );
}

export default App;
