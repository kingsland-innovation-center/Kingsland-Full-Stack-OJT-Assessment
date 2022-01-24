import Routes from './Routes';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;
