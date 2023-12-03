import Contact from './contact';
import Projects from './projects';
import About from './about';
import Home from './home';

const HomePage = () => {
  return (
    <div className="w-full min-h-full">
      <div className="grid grid-flow-row auto-rows-max">
        <div className="grid grid-cols-1">
          <div id="home" className="my-0 pb-8 md:pb-16">
            <Home></Home>
          </div>
          <div id="about" className="py-8 md:py-16">
            <About></About>
          </div>
          <div id="projects" className="py-8 md:py-16">
            <Projects></Projects>
          </div>
          <div id="contact" className="pb-8 md:pb-16">
            <Contact></Contact>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
