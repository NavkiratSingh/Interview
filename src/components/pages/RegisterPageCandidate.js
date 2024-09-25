import React from 'react';
import AuthForm from './AuthForm';

const RegisterPageCandidate = () => {
    return (
        <div>
            <h2>Candidate Registration</h2>
            <AuthForm isRegistering={true} userType="Candidate" /> {/* Specify userType as Candidate */}
        </div>
    );
};

export default RegisterPageCandidate;
