import { BrowserRouter } from 'react-router-dom';

import { About, Contact, Experience, Hero, Navbar, Projects } from './components';

// Feedbacks, Tech, StarsCanvas removed

const App = () => {
  return (
      <BrowserRouter>
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
          <About />
          {/* <Tech /> */}
          <Projects />
          <Experience />
          {/* <Feedbacks /> */}
          <div className="relative z-0">
            <Contact />
            {/* <StarsCanvas /> */}
          </div>
        </div>
      </BrowserRouter>     
  );
}

export default App;
