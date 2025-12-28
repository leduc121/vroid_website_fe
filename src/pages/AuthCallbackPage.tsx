import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

export function AuthCallbackPage() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    useEffect(() => {
        const token = searchParams.get('token');

        if (token) {
            // Save token to localStorage
            localStorage.setItem('token', token);

            // Redirect to home page
            navigate('/');
        } else {
            // No token, redirect to login
            navigate('/login');
        }
    }, [searchParams, navigate]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#FFE5E9] to-[#FFF0F3]">
            <div className="text-center">
                <div className="inline-block animate-spin rounded-full h-16 w-16 border-8 border-black border-t-[#FF4757] mb-4"></div>
                <p className="text-2xl font-black">LOGGING IN...</p>
            </div>
        </div>
    );
}
