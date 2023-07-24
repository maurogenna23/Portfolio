import React, { useState, useEffect } from 'react';
import Home from './components/Home/home';
import Nav from './components/Nav/nav';
import './App.css'
function App() {
  const [showLandingPage, setShowLandingPage] = useState(true);

  useEffect(() => {
    const handleSmoothScroll = (event) => {
      event.preventDefault();

      const targetId = event.target.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth',
        });
      }
    };

    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach((link) => {
      link.addEventListener('click', handleSmoothScroll);
    });

    return () => {
      navLinks.forEach((link) => {
        link.removeEventListener('click', handleSmoothScroll);
      });
    };
  }, []);

  const handleRedirectToHome = () => {
    setShowLandingPage(false);
  };

  return (
    <div className="App">
      {showLandingPage ? (
        <div className="Landing">
          <h1>Mauro Nelson Genna</h1>
          <button onClick={handleRedirectToHome} className='button'>View Portfolio</button>
        </div>
      ) : (
        <div>
          <Nav />
          <div>
            <Home />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
