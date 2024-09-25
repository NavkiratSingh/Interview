import React from 'react';
import AuthForm from './AuthForm';

const LoginPageCandidate = () => {
    return (
        <div>
            <h2>Candidate Login</h2>
            <AuthForm isRegistering={false} userType="Candidate" /> {/* Specify userType as Candidate */}
        </div>
    );
};

export default LoginPageCandidate;
