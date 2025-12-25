import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Loader2 } from 'lucide-react';

export function AuthCallbackPage() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    useEffect(() => {
        const token = searchParams.get('token');

        if (token) {
            // Save token to localStorage
            localStorage.setItem('authToken', token);

            // Optionally fetch user profile here
            // const response = await fetch('http://localhost:3001/api/auth/profile', {
            //   headers: { Authorization: `Bearer ${token}` }
            // });

            // Redirect to home page
            setTimeout(() => {
                navigate('/');
            }, 1000);
        } else {
            // No token found, redirect to login
            setTimeout(() => {
                navigate('/login');
            }, 2000);
        }
    }, [searchParams, navigate]);

    const token = searchParams.get('token');

    return (
        <div className="min-h-screen w-full bg-[#FFA502] flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-white border-4 border-black rounded-xl shadow-[12px_12px_0px_0px_#000] p-12 text-center">
                <Loader2 className="w-16 h-16 mx-auto mb-6 animate-spin text-[#FF4757]" strokeWidth={3} />
                <h1 className="text-3xl font-black uppercase mb-4">
                    {token ? 'Login Successful!' : 'Authentication Failed'}
                </h1>
                <p className="font-bold text-gray-600">
                    {token
                        ? 'Redirecting you to the homepage...'
                        : 'Redirecting you back to login...'}
                </p>
            </div>
        </div>
    );
}
