// import './styles/sass/index.scss';
import Header from './components/Header.js';
import ApiCall from './utils/ApiCall.js';
// import Results from './components/Results.js'
import UserInputs from './components/UserInputs.js';
import './styles/sass/index.scss';


function App() {
  return (
    <div className="dadJokeApp">
      <Header />
      <UserInputs />
      <ApiCall />     
      {/* <Results /> */}
    </div>
  );
}

export default App;
