import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// By importing as, it means that from now now we will be able to just call it Router
import Nav from "./components/Nav/Nav";
import Title from "./components/Title/Title";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import UserPage from "./pages/UserPage";
import './App.css';

function App() {
  return(
    
    <Router>
      <Title />
      <div>
        <Nav />
        <Switch>
          <Route path="/projects/:id"><ProjectPage /></Route> 
          <Route path="/users"><UserPage /></Route>
          <Route path="/"><HomePage /></Route> 
          {/* ---->>>> Put the home page at the end, otherwise the links do not quite work */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
