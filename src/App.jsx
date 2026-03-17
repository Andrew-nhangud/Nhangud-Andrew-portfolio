import "./styles/global.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { Hero } from "./Components/Hero/Hero";
import { Skills } from "./Components/Skill/Skills";

function App() {
  return (
    <div className="container">
      <nav>
        <Navbar />
      </nav>
      <main>
        <Hero />
        <Skills />
      </main>
    </div>
  );
}

export default App;
