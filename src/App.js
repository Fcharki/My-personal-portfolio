import './app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/navbar';
import { Banner } from "./components/about";
import { Skills } from "./components/skills";
import { Projects } from "./components/projets";
import  Contact  from "./components/contact";
import { Footer } from "./components/footer";
import Services from "./components/services";

function App() {
  return (
    <div className="App parent">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Services/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
