import React from 'react';
import AuthForm from './AuthForm';

const LoginPageHR = () => {
    return (
        <div>
            <h2>HR Login</h2>
            <AuthForm isRegistering={false} userType="HR" /> {/* Specify userType as HR */}
        </div>
    );
};

export default LoginPageHR;
