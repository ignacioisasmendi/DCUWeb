import React from 'react'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import AboutUs from '../pages/AboutUs';
import Home from '../pages/Home';
import Demo from '../pages/Demo';

const Redirections = () => {
  return (
    <div>
        <Router>
          <Routes>
            <Route exact path='/about' element={<AboutUs />}>
            </Route>
            <Route exact path='/' element={<Home />}>
            </Route>
            <Route exact path='/demo' element={<Demo />}>
            </Route>
          </Routes>
        </Router>
    </div>
  )
}

export default Redirections;