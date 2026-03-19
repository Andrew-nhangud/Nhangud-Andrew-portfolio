import "./styles/global.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { Hero } from "./Components/Hero/Hero";
import { Skills } from "./Components/Skill/Skills";
import { Project } from "./Components/Project/Project";
import { About } from "./Components/About/About";
import { Contact } from "./Components/Contact/Contact";

function App() {
  return (
    <div className="container">
      <nav>
        <Navbar />
      </nav>
      <main>
        <Hero />
        <Skills />
        <Project />
        <About />
        <Contact />
      </main>
    </div>
  );
}

export default App;
