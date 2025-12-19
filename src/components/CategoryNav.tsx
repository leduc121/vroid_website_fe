import React from 'react';
import { motion } from 'framer-motion';
import { Shirt, Glasses, User, Sparkles, Crown, BoxIcon } from 'lucide-react';
const categories = [{
  name: 'Full Sets',
  icon: User,
  color: 'bg-anime-red'
}, {
  name: 'Tops',
  icon: Shirt,
  color: 'bg-anime-blue'
}, {
  name: 'Accessories',
  icon: Glasses,
  color: 'bg-anime-yellow'
}, {
  name: 'Hair',
  icon: Sparkles,
  color: 'bg-purple-500'
}, {
  name: 'Textures',
  icon: BoxIcon,
  color: 'bg-green-500'
}, {
  name: 'Premium',
  icon: Crown,
  color: 'bg-black text-white'
}];
export function CategoryNav() {
  return <div className="w-full bg-white py-12 border-b-4 border-anime-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-4 h-8 bg-anime-red transform -skew-x-12" />
          <h2 className="text-3xl font-black uppercase italic tracking-tighter">
            Browse Categories
          </h2>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-8 pt-2 px-2 scrollbar-hide">
          {categories.map((cat, index) => <motion.button key={cat.name} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: index * 0.1
        }} whileHover={{
          scale: 1.05,
          rotate: -2,
          y: -5
        }} whileTap={{
          scale: 0.95
        }} className={`
                flex-shrink-0 w-40 h-40 flex flex-col items-center justify-center gap-3
                border-4 border-anime-black shadow-pop transition-all
                ${cat.color} ${cat.name === 'Premium' ? 'text-white' : 'text-black'}
              `}>
              <cat.icon className="w-12 h-12 stroke-[2.5px]" />
              <span className="font-black text-lg uppercase tracking-tight">
                {cat.name}
              </span>
            </motion.button>)}
        </div>
      </div>
    </div>;
}