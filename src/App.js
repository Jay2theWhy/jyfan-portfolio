import { Navbar, Homepage } from './components';
import './App.css';


function App() {
  return (
    <div className="app">
      <div className="navbar">
          <Navbar />
      </div>
      <div className="main">
        Main body
      </div>
      <div className="footer">
        Footer stuff
      </div>
    </div>
  );
}

export default App;
