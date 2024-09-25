import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LandingPage from './components/pages/LandingPage';
import LoginPageHR from './components/pages/LoginPageHR';
import LoginPageCandidate from './components/pages/LoginPageCandidate';
import RegisterPageHR from './components/pages/RegisterPageHR';
import RegisterPageCandidate from './components/pages/RegisterPageCandidate';
import HrLandingPage from './components/pages/HrLandingPage';
import CandidateLandingPage from './components/pages/CandidateLandingPage';

import './App.css';

export default function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/login-hr" element={<LoginPageHR />} />
                    <Route path="/login-candidate" element={<LoginPageCandidate />} />
                    <Route path="/register-hr" element={<RegisterPageHR />} />
                    <Route path="/register-candidate" element={<RegisterPageCandidate />} />
                    <Route path="/hr-landing-page" element={<HrLandingPage />} />
                    <Route path="/candidate-landing-page" element={<CandidateLandingPage />} />
                </Routes>
            </div>
        </Router>
    );
}
