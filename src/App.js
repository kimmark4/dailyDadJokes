import './styles/sass/index.scss';
import Header from './components/Header.js';
import Results from './components/Results.js';
import Footer from './components/Footer.js';
import UserInputs from './components/UserInputs.js';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';




function App() {

  const [submit, setSubmit] = useState(false);
  const [userLimitChoice, setuserLimitChoice] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');



  return (
    <div className="dadJokeApp">

      <Header />
    
      <Routes>
        <Route path="/" element={<UserInputs propTerm={searchTerm => setSearchTerm(searchTerm)} propLimit={userLimitChoice => setuserLimitChoice(userLimitChoice)} propSubmit={submit => setSubmit(submit)} />} />
        <Route path="/results" element={<Results submit={submit} userLimitChoice={userLimitChoice} searchTerm={searchTerm} />} />
      </Routes>

      <Footer />

    </div>
  );
}

export default App;

// allow users to save slideshows and access them later
  // create a form that will push the userData useState to firebase
    // import firebase to Results component
    // generate unique ids for each array
    // allow users to name their slideshow 
    // push userData to firebase with the name chosen by users 
  

  // on the home page, allow users to see saved slideshows
    // import firebase to UserInputs component
    // pull firebase data to a useState on UserInputs
    // 