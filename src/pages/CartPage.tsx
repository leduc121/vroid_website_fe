import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { FaUser, FaShoppingCart, FaDownload, FaWallet } from 'react-icons/fa';

interface User {
    id: string;
    email: string;
    name?: string;
    role: string;
}

export function CartPage() {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            fetch('http://localhost:3001/api/auth/profile', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
                .then(res => res.json())
                .then(data => setUser(data))
                .catch(() => {
                    localStorage.removeItem('token');
                });
        }
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#FFE5E9] to-[#FFF0F3]">
            <Header />

            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        {/* User Profile Card */}
                        <div className="bg-gradient-to-br from-[#4A90E2] to-[#357ABD] border-4 border-black rounded-lg shadow-[8px_8px_0px_0px_#000] p-6 mb-6">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-16 h-16 bg-white rounded-lg border-4 border-black flex items-center justify-center">
                                    <FaUser className="text-3xl text-[#4A90E2]" />
                                </div>
                                <div className="text-white">
                                    <h2 className="font-black text-xl">{user?.name || 'USER'}</h2>
                                    <p className="text-sm opacity-90">Member since {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
                                </div>
                            </div>
                        </div>

                        {/* Menu */}
                        <div className="bg-white border-4 border-black rounded-lg shadow-[8px_8px_0px_0px_#000]">
                            <Link
                                to="/profile"
                                className="flex items-center gap-3 p-4 border-b-4 border-black hover:bg-gray-50 transition-colors font-bold group"
                            >
                                <FaUser className="text-xl group-hover:scale-110 transition-transform" />
                                <span>PROFILE</span>
                            </Link>

                            <Link
                                to="/cart"
                                className="flex items-center gap-3 p-4 border-b-4 border-black bg-[#FFA500] hover:bg-[#FF8C00] transition-colors font-bold group"
                            >
                                <FaShoppingCart className="text-xl group-hover:scale-110 transition-transform" />
                                <span>CART</span>
                            </Link>

                            <Link
                                to="/purchases"
                                className="flex items-center gap-3 p-4 border-b-4 border-black hover:bg-gray-50 transition-colors font-bold group"
                            >
                                <FaDownload className="text-xl group-hover:scale-110 transition-transform" />
                                <span>PURCHASES</span>
                            </Link>

                            <Link
                                to="/wallet"
                                className="flex items-center gap-3 p-4 hover:bg-gray-50 transition-colors font-bold group"
                            >
                                <FaWallet className="text-xl group-hover:scale-110 transition-transform" />
                                <span>WALLET</span>
                            </Link>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-3">
                        <div className="bg-white border-4 border-black rounded-lg shadow-[8px_8px_0px_0px_#000] p-8">
                            {/* Header */}
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-12 h-12 bg-[#4A90E2] rounded-lg border-4 border-black flex items-center justify-center">
                                    <FaShoppingCart className="text-2xl text-white" />
                                </div>
                                <h1 className="text-3xl font-black">SHOPPING CART</h1>
                            </div>

                            {/* Empty Cart */}
                            <div className="text-center py-16">
                                <div className="inline-block mb-6">
                                    <div className="w-32 h-32 bg-gray-100 rounded-full border-4 border-black flex items-center justify-center">
                                        <FaShoppingCart className="text-6xl text-gray-300" />
                                    </div>
                                </div>
                                <h2 className="text-2xl font-black text-gray-400 mb-4">YOUR CART IS EMPTY</h2>
                                <Link
                                    to="/products"
                                    className="inline-block px-8 py-4 bg-gradient-to-br from-[#FF4757] to-[#FF6B81] text-white font-black border-4 border-black rounded-lg shadow-[4px_4px_0px_0px_#000] hover:shadow-[6px_6px_0px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"
                                >
                                    START SHOPPING
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
