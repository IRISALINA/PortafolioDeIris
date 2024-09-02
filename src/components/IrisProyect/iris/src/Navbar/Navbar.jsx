import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import Home from '../Home/Home';
import Courses from '../Courses';

const Navbar = () => {
  return (
    <div>
        <Router>
            <div>
                <nav>
                <ul>

                    <li>
                    <Link to="/">Home</Link>
                    </li>

                    <li>
                    <Link to="/courses">Courses</Link>
                    </li>
                    
                </ul>
                </nav>

                <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/courses" element={<Courses />} />
                </Routes>
            </div>
        </Router>
    </div>
  )
}

export default Navbar
