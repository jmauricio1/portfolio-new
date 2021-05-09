import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import Navigation from './components/navigation';
import Projects from './components/projects/projects';
import FeaturedProjects from './components/projects/featured-projects';
import AppBreweryProjects from './components/projects/app-brewery-projects';

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/projects" component={Projects} />
        <Route path="/featured" component={FeaturedProjects} />
        <Route path="/bootcamp" exact component={AppBreweryProjects} />
      </Switch>
    </Router>
  );
}

export default App;
