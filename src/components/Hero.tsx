import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import { MangaButton } from './ui/MangaButton';
import { IntlText } from '../i18n';
export function Hero() {
  return <div className="relative overflow-hidden bg-anime-yellow border-b-4 border-anime-black">
    {/* Background Pattern */}
    <div className="absolute inset-0 bg-halftone opacity-20 pointer-events-none" />

    {/* Diagonal Split Background */}
    <div className="absolute inset-0 bg-white transform -skew-y-3 origin-top-left translate-y-24 z-0 border-t-4 border-anime-black" />

    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div initial={{
          x: -100,
          opacity: 0
        }} animate={{
          x: 0,
          opacity: 1
        }} transition={{
          type: 'spring',
          bounce: 0.5
        }}>
          {/* Speech Bubble */}
          <motion.div initial={{
            scale: 0
          }} animate={{
            scale: 1
          }} transition={{
            delay: 0.5,
            type: 'spring'
          }} className="inline-block mb-6 relative">
            <div className="bg-white border-4 border-anime-black px-6 py-3 rounded-2xl shadow-pop-blue relative z-10">
              <p className="font-black text-anime-blue text-lg uppercase tracking-wider">
                <IntlText en="New Collection Drop!" ja="新作コレクション公開！" vi="Bộ sưu tập mới ra mắt!" />
              </p>
            </div>
            {/* Bubble Tail */}
            <div className="absolute -bottom-3 left-8 w-6 h-6 bg-white border-r-4 border-b-4 border-anime-black transform rotate-45 z-0" />
          </motion.div>

          <h1 className="text-6xl md:text-8xl font-black text-anime-black leading-none mb-6 tracking-tighter">
            <IntlText en="LEVEL UP" ja="レベルアップ" vi="Nâng cấp" /> <br />
            <span className="text-stroke text-transparent drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
              <IntlText en="YOUR" ja="あなたの" vi="Avatar của" />
            </span>{' '}
            <br />
            <span className="text-anime-red"><IntlText en="AVATAR!" ja="アバター！" vi="Bạn!" /></span>
          </h1>

          <p className="text-xl md:text-2xl font-bold text-gray-800 mb-8 max-w-lg border-l-8 border-anime-blue pl-6 py-2 bg-white/50 backdrop-blur-sm">
            <IntlText
              en="Discover thousands of high-quality VRoid assets created by the community."
              ja="コミュニティが作成した高品質なVRoidアセットを数千点見つけよう。"
              vi="Khám phá hàng nghìn asset VRoid chất lượng cao do cộng đồng tạo ra."
            />
          </p>

          <div className="flex flex-wrap gap-4">
            <Link to="/shop">
              <MangaButton size="lg" className="flex items-center gap-2">
                <IntlText en="Start Browsing" ja="閲覧を開始" vi="Mua sắm" /> <ArrowRight className="w-6 h-6" />
              </MangaButton>
            </Link>
            <Link to="/ai-studio">
              <MangaButton variant="outline" size="lg">
                <IntlText en="Gen Assets" ja="アセットを販売" vi="Tạo asset" />
              </MangaButton>
            </Link>
          </div>
        </motion.div>

        {/* Hero Image / Graphic */}
        <motion.div initial={{
          x: 100,
          opacity: 0,
          rotate: 10
        }} animate={{
          x: 0,
          opacity: 1,
          rotate: 3
        }} transition={{
          type: 'spring',
          bounce: 0.4,
          delay: 0.2
        }} className="relative hidden md:block">
          <div className="relative z-10 bg-anime-blue border-4 border-anime-black p-2 transform rotate-3 shadow-pop-red">
            <div className="bg-white border-2 border-anime-black aspect-[4/5] relative overflow-hidden flex items-center justify-center bg-speed-lines">
              {/* Placeholder for Character Art */}
              <div className="text-center">
                <Star className="w-24 h-24 text-anime-yellow mx-auto mb-4 animate-bounce-slight fill-current stroke-[3px] stroke-black" />
                <p className="font-black text-4xl uppercase transform -rotate-6">
                  Sugoi!
                </p>
              </div>
            </div>
          </div>

          {/* Decorative Elements behind */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-anime-yellow border-4 border-anime-black rounded-full z-0 flex items-center justify-center shadow-pop">
            <span className="font-black text-2xl transform rotate-12">
              POP!
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  </div>;
}
