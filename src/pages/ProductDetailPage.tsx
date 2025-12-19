import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Header } from '../components/Header';
import { MangaButton } from '../components/ui/MangaButton';
import { Star, ShoppingCart, Heart, Share2, ShieldCheck, ArrowRight } from 'lucide-react';
export function ProductDetailPage() {
  const {
    id
  } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  // Mock data
  const product = {
    name: 'Cyber Punk Jacket V2',
    price: 29.99,
    rating: 4.8,
    reviews: 124,
    description: 'The ultimate cyberpunk aesthetic for your VRoid avatar. Features neon accents, high-resolution textures, and fully rigged physics bones. Perfect for VTubers who want to stand out in the metaverse.',
    images: ['https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600', 'https://images.unsplash.com/photo-1536766820879-059fec98ec0a?w=600', 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600', 'https://images.unsplash.com/photo-1529139574466-a302d27f60d0?w=600'],
    specs: [{
      label: 'Format',
      value: '.vroid'
    }, {
      label: 'Size',
      value: '25MB'
    }, {
      label: 'License',
      value: 'Commercial Use'
    }, {
      label: 'Version',
      value: '1.0.2'
    }],
    tags: ['Cyberpunk', 'Neon', 'Jacket', 'Outerwear']
  };
  return <div className="min-h-screen flex flex-col font-sans text-anime-black bg-gray-50">
      <Header />

      <main className="flex-grow py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-8 text-sm font-bold text-gray-500">
            <span className="hover:text-anime-blue cursor-pointer">Shop</span>
            <span>/</span>
            <span className="hover:text-anime-blue cursor-pointer">Tops</span>
            <span>/</span>
            <span className="text-anime-black">{product.name}</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="aspect-square bg-white border-4 border-anime-black shadow-pop-lg overflow-hidden relative group">
                <img src={product.images[selectedImage]} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute top-4 right-4 bg-anime-yellow text-black font-black px-3 py-1 border-3 border-anime-black transform rotate-3">
                  NEW!
                </div>
              </div>
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((img, idx) => <button key={idx} onClick={() => setSelectedImage(idx)} className={`aspect-square border-3 border-anime-black overflow-hidden transition-all ${selectedImage === idx ? 'ring-4 ring-anime-blue ring-offset-2' : 'hover:opacity-80'}`}>
                    <img src={img} alt={`View ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>)}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="flex items-start justify-between mb-4">
                <h1 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter leading-tight">
                  {product.name}
                </h1>
                <button className="p-3 border-3 border-anime-black rounded-full hover:bg-red-50 hover:text-anime-red transition-colors">
                  <Heart className="w-6 h-6" />
                </button>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center text-anime-yellow">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current stroke-anime-black stroke-2" />)}
                </div>
                <span className="font-bold text-gray-500 underline decoration-2 decoration-anime-blue">
                  {product.reviews} Reviews
                </span>
              </div>

              <div className="text-4xl font-black text-anime-red mb-8">
                ${product.price}
              </div>

              <p className="text-lg font-medium text-gray-700 mb-8 leading-relaxed border-l-4 border-anime-yellow pl-4">
                {product.description}
              </p>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {product.specs.map((spec, idx) => <div key={idx} className="bg-white border-3 border-anime-black p-3">
                    <span className="block text-xs font-black uppercase text-gray-400 mb-1">
                      {spec.label}
                    </span>
                    <span className="block font-bold">{spec.value}</span>
                  </div>)}
              </div>

              {/* Actions */}
              <div className="space-y-4 border-t-4 border-anime-black pt-8">
                <div className="flex items-center gap-4">
                  <div className="flex items-center border-3 border-anime-black bg-white">
                    <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-2 font-black hover:bg-gray-100 border-r-3 border-anime-black">
                      -
                    </button>
                    <span className="px-6 py-2 font-black text-xl">
                      {quantity}
                    </span>
                    <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-2 font-black hover:bg-gray-100 border-l-3 border-anime-black">
                      +
                    </button>
                  </div>
                  <span className="font-bold text-gray-500">In Stock</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <MangaButton variant="primary" size="lg" className="w-full">
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Add to Cart
                  </MangaButton>
                  <MangaButton variant="accent" size="lg" className="w-full">
                    Buy Now
                  </MangaButton>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="mt-8 flex items-center gap-6 text-sm font-bold text-gray-500">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-green-500" />
                  <span>Secure Payment</span>
                </div>
                <div className="flex items-center gap-2">
                  <Share2 className="w-5 h-5 text-anime-blue" />
                  <span>Instant Delivery</span>
                </div>
              </div>
            </div>
          </div>

          {/* Related Products Section */}
          <div className="mt-24">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-anime-blue border-3 border-anime-black flex items-center justify-center shadow-pop-sm">
                <Star className="w-6 h-6 text-white fill-current" />
              </div>
              <h2 className="text-3xl font-black uppercase tracking-tighter">
                You Might Also Like
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map(i => <div key={i} className="bg-white border-3 border-anime-black p-4 hover:shadow-pop transition-shadow cursor-pointer group">
                  <div className="aspect-square bg-gray-100 mb-4 border-2 border-anime-black overflow-hidden">
                    <div className="w-full h-full bg-gray-200 group-hover:scale-110 transition-transform duration-500"></div>
                  </div>
                  <h3 className="font-black uppercase truncate">
                    Related Item {i}
                  </h3>
                  <div className="flex justify-between items-center mt-2">
                    <span className="font-bold text-anime-red">$19.99</span>
                    <button className="p-1 hover:bg-anime-yellow rounded border-2 border-transparent hover:border-anime-black transition-all">
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>)}
            </div>
          </div>
        </div>
      </main>
    </div>;
}