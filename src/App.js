import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.css";
import "./styles/MediaQueries.css";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import Projects from './components/projects/Projects';
import FeaturedProjects from './components/projects/RequiredComponents/FeaturedProjects';
import AppBreweryProjects from './components/projects/RequiredComponents/AppBreweryProjects';

//Had to manually rename files in GitHub in order for components to be imported.

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/skills" component={Skills} />
        <Route path="/contact" component={Contact} />
        <Route path="/projects" component={Projects} />
        <Route path="/featured" component={FeaturedProjects} />
        <Route path="/bootcamp" exact component={AppBreweryProjects} />
      </Switch>
    </Router>
  );
}

export default App;
