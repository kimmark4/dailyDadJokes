import './styles/sass/index.scss';
import Header from './components/Header.js';
import Results from './components/Results.js'
import UserInputs from './components/UserInputs.js';
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react';



function App() {

  const [submit, setSubmit] = useState(false);
  const [userLimitChoice, setuserLimitChoice] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');
  const [usersJokes, setUsersJokes] = useState([]);


  return (
    <div className="dadJokeApp">

      <Header />
      <Routes>
        <Route path="/" element={<UserInputs propTerm={searchTerm => setSearchTerm(searchTerm)} propLimit={userLimitChoice => setuserLimitChoice(userLimitChoice)} propSubmit={submit => setSubmit(submit)} propJokes={usersJokes => setUsersJokes(usersJokes)} />} />
        <Route path="/results" element={<Results submit={submit} userLimitChoice={userLimitChoice} searchTerm={searchTerm} usersJokes={usersJokes} />} />
      </Routes>

      <footer>
        <p>Copyright © Juno College </p>
      </footer>
    </div>
  );
}

export default App;
