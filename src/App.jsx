import "./styles/global.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { Hero } from "./Components/Hero/Hero";
import { Services } from "./Components/Services/Services";
import { Project } from "./Components/Project/Project";
import { About } from "./Components/About/About";
import { Contact } from "./Components/Contact/Contact";
import Cursor from "./Components/Cursor/Cursor";

function App() {
  return (
    <>
      <Cursor />
      <div className="container">
        <nav>
          <Navbar />
        </nav>
        <main>
          <Hero />
          <Services />
          <Project />
          <About />
          <Contact />
        </main>
      </div>
    </>
  );
}

export default App;
