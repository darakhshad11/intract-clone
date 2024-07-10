import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Explore from './components/Explore'; 

import Home from './components/Home'; 
import Academy from './components/Academy';
import Nafty from './components/Nafty';





const App = () => {
    return (
        <Router>
           
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/explore" element={<Explore />} />
                <Route path="/academy" element={<Academy />} />
                <Route path="/nafty" element={<Nafty />} />
              
            </Routes>
          
        </Router>
    );
};

export default App;
