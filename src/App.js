import './styles/sass/index.scss';
import Header from './components/Header.js';

// import Results from './components/Results.js'
import UserInputs from './components/UserInputs.js';
import ButtonClick from './components/ButtonClick';



function App() {
  return (
    <div className="dadJokeApp">
      <Header />
      <ButtonClick />
      <UserInputs /> 
        {/* <Results /> */}
    </div>
  );
}

export default App;
