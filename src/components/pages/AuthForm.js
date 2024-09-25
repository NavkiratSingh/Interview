import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser, loginUser } from '../../firebase';

const AuthForm = ({ isRegistering, userType }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    
    const isMounted = React.useRef(true);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        // Basic validation
        if (!/\S+@\S+\.\S+/.test(email)) {
            setError('Please enter a valid email address.');
            setLoading(false);
            return;
        }

        if (password.length < 6) {
            setError('Password must be at least 6 characters long.');
            setLoading(false);
            return;
        }

        try {
            if (isRegistering) {
                await registerUser(email, password, userType);
            } else {
                await loginUser(email, password, userType);
            }
            if (isMounted.current) {
                navigate(`/${userType.toLowerCase()}-landing-page`);
            }
        } catch (err) {
            if (isMounted.current) {
                setError(err.message);
            }
        } finally {
            if (isMounted.current) {
                setLoading(false);
            }
        }
    };

    useEffect(() => {
        isMounted.current = true;
        return () => {
            isMounted.current = false;
        };
    }, []);

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            {error && <p>{error}</p>}
            <button type="submit" disabled={loading}>
                {isRegistering ? 'Register' : 'Login'}
            </button>
        </form>
    );
};

export default AuthForm;
