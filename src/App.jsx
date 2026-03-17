import "./styles/global.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { Hero } from "./Components/Hero/Hero";

function App() {
  return (
    <div className="container">
      <nav>
        <Navbar />
      </nav>
      <main>
        <Hero />
      </main>
    </div>
  );
}

export default App;
