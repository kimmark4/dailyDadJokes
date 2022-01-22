import './styles/sass/index.scss';
import Header from './components/Header.js';
import ApiCall from './utils/ApiCall.js';



function App() {
  return (
    <div className="dadJokeApp">
      <Header />
      <ApiCall />
    </div>
  );
}

export default App;
