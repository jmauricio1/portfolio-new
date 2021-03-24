import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/header";
import Title from "./components/title";
import About from "./components/about";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Footer from "./components/footer";

function App() {
  return (
    <div>
      <Header />
      <Title />
      <hr />
      <About />
      <hr />
      <Skills />
      <hr />
      <Projects />
      <hr />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
