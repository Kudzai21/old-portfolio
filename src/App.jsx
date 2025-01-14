import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Pages/Home';
import SocialLinks from './components/shared/Sociallinks';
import Casestudy from './components/Pages/Casestudy';
import Casestudy2 from './components/Pages/Casestudy2';
import Casestudy3 from './components/Pages/Casestudy3';
const App = () => {
  return (
    <Router>
      <div>
        <SocialLinks />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/casestudy" element={<Casestudy />} />
          <Route path="/casestudy2" element={<Casestudy2 />} />
          <Route path="/casestudy3" element={<Casestudy3 />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
