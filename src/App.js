import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './component/Home/Home';
import NoMatch from './component/NoMatch/NoMatch';
import Header from './component/Header/Header';
import TeamDetails from './component/TeamDetails/TeamDetails';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path = "home" element = {<Home></Home>}/>
          <Route path = "/" element = {<Home></Home>}/>
          <Route path = "home/:tName" element = {<TeamDetails></TeamDetails>}></Route>
          <Route path = "/:tName" element = {<TeamDetails></TeamDetails>}></Route>
          <Route path = "*" element = {<NoMatch></NoMatch>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
