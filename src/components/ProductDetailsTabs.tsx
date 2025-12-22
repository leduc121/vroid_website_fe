import { useState } from 'react';
import { Star, User, Calendar } from 'lucide-react';

interface ProductDetailsTabsProps {
    product: {
        name: string;
        description: string;
        specs: Array<{ label: string; value: string }>;
        rating: number;
        reviews: number;
    };
}

type TabType = 'description' | 'specifications' | 'reviews';

export function ProductDetailsTabs({ product }: ProductDetailsTabsProps) {
    const [activeTab, setActiveTab] = useState<TabType>('description');

    const tabs: Array<{ id: TabType; label: string }> = [
        { id: 'description', label: 'Description' },
        { id: 'specifications', label: 'Specifications' },
        { id: 'reviews', label: 'Reviews' },
    ];

    // Mock reviews data
    const mockReviews = [
        {
            id: 1,
            author: 'SakuraChan',
            rating: 5,
            date: '2024-12-15',
            comment: 'Absolutely amazing! The quality is top-notch and the textures are incredibly detailed. Perfect for my VTuber avatar!',
        },
        {
            id: 2,
            author: 'CyberNinja',
            rating: 5,
            date: '2024-12-10',
            comment: 'Best purchase ever! The neon accents look stunning in VR. Highly recommend for anyone wanting a cyberpunk aesthetic.',
        },
        {
            id: 3,
            author: 'VRoidMaster',
            rating: 4,
            date: '2024-12-05',
            comment: 'Great product overall. The physics bones work perfectly. Only minor issue is the file size, but worth it for the quality!',
        },
    ];

    return (
        <div className="bg-white border-4 border-anime-black shadow-pop-lg">
            {/* Tab Navigation */}
            <div className="flex border-b-4 border-anime-black">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex-1 px-6 py-4 font-black uppercase text-sm md:text-base transition-all relative ${activeTab === tab.id
                                ? 'bg-anime-yellow text-anime-black'
                                : 'bg-white text-gray-500 hover:bg-gray-50'
                            }`}
                    >
                        {tab.label}
                        {activeTab === tab.id && (
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-anime-black"></div>
                        )}
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            <div className="p-6 md:p-8">
                {/* Description Tab */}
                {activeTab === 'description' && (
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-2xl font-black uppercase mb-4 text-anime-black">
                                Product Description
                            </h3>
                            <div className="prose max-w-none">
                                <p className="text-gray-700 leading-relaxed mb-4 font-medium">
                                    {product.description}
                                </p>
                                <p className="text-gray-700 leading-relaxed mb-4 font-medium">
                                    This premium VRoid asset has been meticulously crafted by professional 3D artists
                                    with years of experience in virtual avatar creation. Every detail has been carefully
                                    designed to ensure maximum compatibility and visual impact across all major VR platforms.
                                </p>
                                <div className="bg-anime-blue/10 border-l-4 border-anime-blue p-4 my-6">
                                    <h4 className="font-black uppercase text-sm mb-2 text-anime-blue">Key Features:</h4>
                                    <ul className="space-y-2 text-gray-700 font-medium">
                                        <li className="flex items-start">
                                            <span className="text-anime-blue mr-2">▸</span>
                                            High-resolution 4K textures for stunning visual quality
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-anime-blue mr-2">▸</span>
                                            Fully rigged with advanced physics bones for realistic movement
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-anime-blue mr-2">▸</span>
                                            Compatible with VRoid Studio, VRChat, and other major platforms
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-anime-blue mr-2">▸</span>
                                            Commercial use license included - perfect for VTubers and content creators
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-anime-blue mr-2">▸</span>
                                            Regular updates and bug fixes included with purchase
                                        </li>
                                    </ul>
                                </div>
                                <p className="text-gray-700 leading-relaxed font-medium">
                                    Whether you're a professional VTuber, content creator, or just looking to enhance
                                    your virtual presence, this asset will take your avatar to the next level. Join
                                    thousands of satisfied customers who have already transformed their virtual identity!
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {/* Specifications Tab */}
                {activeTab === 'specifications' && (
                    <div>
                        <h3 className="text-2xl font-black uppercase mb-6 text-anime-black">
                            Technical Specifications
                        </h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            {product.specs.map((spec, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-center justify-between p-4 bg-gray-50 border-2 border-anime-black"
                                >
                                    <span className="font-black uppercase text-sm text-gray-500">
                                        {spec.label}
                                    </span>
                                    <span className="font-bold text-anime-black">{spec.value}</span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 space-y-4">
                            <div className="border-2 border-anime-black p-4">
                                <h4 className="font-black uppercase text-sm mb-2">Compatibility</h4>
                                <p className="text-gray-700 font-medium">
                                    VRoid Studio 1.0+, VRChat, VSeeFace, 3tene, Vtube Studio
                                </p>
                            </div>
                            <div className="border-2 border-anime-black p-4">
                                <h4 className="font-black uppercase text-sm mb-2">System Requirements</h4>
                                <p className="text-gray-700 font-medium">
                                    Windows 10/11, macOS 10.15+, 4GB RAM minimum, Graphics card with OpenGL 3.3 support
                                </p>
                            </div>
                            <div className="border-2 border-anime-black p-4">
                                <h4 className="font-black uppercase text-sm mb-2">Installation</h4>
                                <p className="text-gray-700 font-medium">
                                    Simply import the .vroid file into VRoid Studio. Detailed installation guide included in download.
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {/* Reviews Tab */}
                {activeTab === 'reviews' && (
                    <div>
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-2xl font-black uppercase text-anime-black">
                                Customer Reviews
                            </h3>
                            <div className="flex items-center gap-2">
                                <div className="flex items-center text-anime-yellow">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 fill-current stroke-anime-black stroke-2" />
                                    ))}
                                </div>
                                <span className="font-bold text-gray-500">
                                    {product.rating} ({product.reviews} reviews)
                                </span>
                            </div>
                        </div>

                        <div className="space-y-6">
                            {mockReviews.map((review) => (
                                <div
                                    key={review.id}
                                    className="border-3 border-anime-black p-6 bg-white hover:shadow-pop transition-shadow"
                                >
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-12 h-12 bg-anime-blue border-2 border-anime-black flex items-center justify-center">
                                                <User className="w-6 h-6 text-white" />
                                            </div>
                                            <div>
                                                <div className="font-black text-anime-black">{review.author}</div>
                                                <div className="flex items-center gap-2 text-sm text-gray-500 font-medium">
                                                    <Calendar className="w-4 h-4" />
                                                    {new Date(review.date).toLocaleDateString('en-US', {
                                                        year: 'numeric',
                                                        month: 'long',
                                                        day: 'numeric',
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center text-anime-yellow">
                                            {[...Array(5)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    className={`w-4 h-4 stroke-anime-black stroke-2 ${i < review.rating ? 'fill-current' : 'fill-white'
                                                        }`}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                    <p className="text-gray-700 leading-relaxed font-medium">{review.comment}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 text-center">
                            <button className="px-8 py-3 bg-anime-yellow border-3 border-anime-black font-black uppercase shadow-pop hover:shadow-pop-lg transition-all transform hover:-translate-y-1">
                                Load More Reviews
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
