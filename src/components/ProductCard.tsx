import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, Plus } from 'lucide-react';

interface ProductCardProps {
  id: number | string;
  title: string;
  price: string;
  author: string;
  image?: string;
  imageColor: string;
  shadowColor?: 'red' | 'blue' | 'yellow';
  tag?: string;
}

export function ProductCard({
  id,
  title,
  price,
  author,
  image,
  imageColor,
  shadowColor = 'red',
  tag
}: ProductCardProps) {
  return (
    <Link to={`/product/${id}`} className="block h-full">
      <motion.div whileHover={{
        y: -8,
        rotate: 1
      }} className="group relative bg-white border-4 border-anime-black p-3 h-full flex flex-col shadow-pop transition-all duration-300">
        {/* Image Area */}
        <div className={`aspect-square w-full border-2 border-anime-black mb-4 relative overflow-hidden ${imageColor} bg-opacity-20`}>
          {!image ? (
            <div className="absolute inset-0 bg-halftone opacity-30" />
          ) : (
            <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover" />
          )}

          {/* Tag */}
          {tag && <div className="absolute top-2 left-2 bg-anime-yellow border-2 border-anime-black px-2 py-1 transform -rotate-2 z-10">
              <span className="text-xs font-black uppercase">{tag}</span>
            </div>}

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
            <button className="bg-white border-3 border-anime-black p-3 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-200 hover:bg-anime-red hover:text-white">
              <Plus className="w-6 h-6 stroke-[3px]" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col">
          <h3 className="font-black text-lg leading-tight mb-1 line-clamp-2 group-hover:text-anime-blue transition-colors">
            {title}
          </h3>
          <p className="text-sm font-bold text-gray-500 mb-4">by {author}</p>

          <div className="mt-auto flex items-center justify-between">
            <div className="bg-anime-black text-white px-3 py-1 transform skew-x-12">
              <span className="block transform -skew-x-12 font-black text-lg">
                {price}
              </span>
            </div>

            <button className="p-2 hover:text-anime-red transition-colors" onClick={(e) => e.preventDefault()}>
              <Heart className="w-6 h-6 stroke-[3px]" />
            </button>
          </div>
        </div>

        {/* Decorative Corner */}
        <div className={`absolute -bottom-2 -right-2 w-0 h-0 border-l-[20px] border-l-transparent border-b-[20px] ${shadowColor === 'red' ? 'border-b-anime-red' : shadowColor === 'blue' ? 'border-b-anime-blue' : 'border-b-anime-yellow'} transform rotate-180`} />
      </motion.div>
    </Link>
  );
}
