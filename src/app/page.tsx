import Contact from './contact';
import Projects from './projects';
import About from './about';
import Home from './home';

const HomePage = () => {
  return (
    <div className="w-full min-h-full">
      <div className="grid grid-flow-row auto-rows-max">
        <div className="grid grid-cols-1">
          <div id="Home" className="my-0 mb-8">
            <Home></Home>
          </div>
          <div id="About" className="my-16">
            <About></About>
          </div>
          <div id="Projects" className="mb-8">
            <Projects></Projects>
          </div>
          <div id="Contact" className="mb-8">
            <Contact></Contact>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
