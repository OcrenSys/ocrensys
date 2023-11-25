import Contact from './_contact/contact';
import Projects from './projects';
import About from './about';

const HomePage = () => {
  return (
    <div className="w-full min-h-full">
      <div className="grid grid-flow-row auto-rows-max">
        <div className="grid grid-cols-1">
          <div id="About" className="my-16">
            <About></About>
          </div>
          <div id="Projects" className="my-16">
            <Projects></Projects>
          </div>
          <div id="Contact" className="my-16">
            <Contact></Contact>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
