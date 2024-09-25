import React from 'react';
import AuthForm from './AuthForm';

const RegisterPageHR = () => {
    return (
        <div>
            <h2>HR Registration</h2>
            <AuthForm isRegistering={true} userType="HR" /> {/* Specify userType as HR */}
        </div>
    );
};

export default RegisterPageHR;
