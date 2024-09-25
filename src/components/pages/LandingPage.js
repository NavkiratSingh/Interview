import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import BackgroundImage from '../../assets/images/bg.png';

export default function LandingPage() {
    const [showLoginDropdown, setShowLoginDropdown] = useState(false);
    const [showSignupDropdown, setShowSignupDropdown] = useState(false);

    // Handlers to toggle dropdowns
    const toggleLoginDropdown = () => setShowLoginDropdown(!showLoginDropdown);
    const toggleSignupDropdown = () => setShowSignupDropdown(!showSignupDropdown);

    return (
        <header style={HeaderStyle}>
            <h1 className="main-title text-center">Login / Register Page</h1>
            <p className="main-para text-center">Join us now and don't waste time</p>
            <div className="buttons text-center">
                {/* Login Button with Dropdown */}
                <div className="dropdown">
                    <button className="primary-button" onClick={toggleLoginDropdown}>Log In</button>
                    {showLoginDropdown && (
                        <div className="dropdown-content">
                            <Link to="/login-hr">Log In as HR</Link>
                            <Link to="login-candidate">Log In as Candidate</Link>
                        </div>
                    )}
                </div>

                {/* Signup Button with Dropdown */}
                <div className="dropdown">
                    <button className="primary-button" onClick={toggleSignupDropdown}>Sign Up</button>
                    {showSignupDropdown && (
                        <div className="dropdown-content">
                            <Link to="/register-hr">Sign Up as HR</Link>
                            <Link to="/register-candidate">Sign Up as Candidate</Link>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}

const HeaderStyle = {
    width: "100%",
    height: "100vh",
    background: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
};