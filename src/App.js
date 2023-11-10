import './styles/App.css';
import MusicComponent from './components/MusicComponent'
import LocaleComponent from './components/LocaleComponent';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h2>Virtual Ambient Workspace</h2>
        <div className="main">
          <MusicComponent />
          <LocaleComponent />
        </div>
      </header>
    </div>
  );
}

export default App;
