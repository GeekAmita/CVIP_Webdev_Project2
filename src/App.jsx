import Header from "./screens/Header";
import Home from "./screens/Home";
import Projects from "./screens/Projects";
import About from "./screens/About";
import Contact from "./screens/Contact";

function App() {
  return (
    <div className="flex flex-col bg-neutral-800">
      <Header />
      <div className="h-full overflow-scroll">
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
