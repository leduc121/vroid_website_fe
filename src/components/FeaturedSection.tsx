import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ProductCard } from './ProductCard';
import { MangaButton } from './ui/MangaButton';
import { ArrowRight } from 'lucide-react';
import { IntlText } from '../i18n';
const products = [{
  id: 1,
  title: 'Cyberpunk Streetwear Set V2',
  author: 'NeonDreams',
  price: '$25.00',
  imageColor: 'bg-anime-blue',
  shadowColor: 'red' as const,
  tag: 'HOT'
}, {
  id: 2,
  title: 'Magical Girl Academy Uniform',
  author: 'KawaiiFactory',
  price: '$18.50',
  imageColor: 'bg-anime-red',
  shadowColor: 'yellow' as const,
  tag: 'NEW'
}, {
  id: 3,
  title: 'Casual Hoodie & Jeans Pack',
  author: 'StreetStyle',
  price: '$12.00',
  imageColor: 'bg-anime-yellow',
  shadowColor: 'blue' as const
}, {
  id: 4,
  title: 'Gothic Lolita Dress Complete',
  author: 'DarkMoon',
  price: '$30.00',
  imageColor: 'bg-purple-500',
  shadowColor: 'red' as const,
  tag: 'SALE'
}];
export function FeaturedSection() {
  return <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gray-50 transform skew-x-12 -z-10 border-l-4 border-gray-100" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-block bg-anime-yellow border-3 border-anime-black px-4 py-1 mb-4 transform -rotate-2">
              <span className="font-black text-sm uppercase tracking-widest">
                <IntlText en="Editor's Pick" ja="編集部のおすすめ" vi="Bộ sưu tập đề xuất" />
              </span>
            </div>
            <h2 className="text-5xl font-black uppercase italic tracking-tighter">
              <IntlText en="Trending" ja="トレンド" vi="Đang thịnh hành" /> <span className="text-anime-red"><IntlText en="Now" ja="今" vi="Hiện nay" /></span>
            </h2>
          </div>

          <Link to="/shop" className="self-start md:self-end">
            <MangaButton variant="outline" className="flex items-center gap-2">
              <IntlText en="View All Items" ja="すべて見る" vi="Xem tất cả" /> <ArrowRight className="w-4 h-4" />
            </MangaButton>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => <motion.div key={product.id} initial={{
          opacity: 0,
          y: 50
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: index * 0.1
        }}>
              <ProductCard {...product} />
            </motion.div>)}
        </div>
      </div>
    </section>;
}
