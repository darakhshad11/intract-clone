import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Explore from './components/Explore'; 

import Home from './components/Home'; 
import Academy from './components/Academy';


const App = () => {
    return (
        <Router>
           
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/explore" element={<Explore />} />
                <Route path="/academy" element={<Academy />} />
            </Routes>
          
        </Router>
    );
};

export default App;
