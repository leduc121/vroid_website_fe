import React from 'react';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { CategoryNav } from '../components/CategoryNav';
import { FeaturedSection } from '../components/FeaturedSection';
import { MangaButton } from '../components/ui/MangaButton';
import { Mail } from 'lucide-react';
import { IntlText } from '../i18n';
export function HomePage() {
  return <div className="min-h-screen flex flex-col font-sans text-anime-black">
      <Header />

      <main className="flex-grow">
        <Hero />
        <CategoryNav />
        <FeaturedSection />

        {/* Promo Section */}
        <section className="bg-anime-red py-24 border-y-4 border-anime-black relative overflow-hidden">
          <div className="absolute inset-0 bg-halftone-red opacity-20" />
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 uppercase italic tracking-tighter drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
              <IntlText en="Join the Creator Community!" ja="クリエイターコミュニティに参加しよう！" vi="Tham gia cộng đồng Creator!" />
            </h2>
            <p className="text-xl text-white font-bold mb-10 max-w-2xl mx-auto">
              <IntlText
                en="Start selling your own VRoid textures and models today. Zero fees for your first 5 sales."
                ja="自作のVRoidテクスチャやモデルを今日から販売開始。最初の5件は手数料ゼロ。"
                vi="Bắt đầu bán texture và model VRoid của bạn ngay hôm nay. Miễn phí cho 5 giao dịch đầu tiên."
              />
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <MangaButton variant="accent" size="lg">
                <IntlText en="Start Selling Now" ja="今すぐ販売開始" vi="Bắt đầu bán ngay" />
              </MangaButton>
              <MangaButton variant="outline" size="lg">
                <IntlText en="Learn More" ja="詳細を見る" vi="Tìm hiểu thêm" />
              </MangaButton>
            </div>
          </div>
        </section>

        {/* Second Product Grid (New Arrivals) */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-12 bg-anime-blue border-3 border-anime-black flex items-center justify-center shadow-pop-sm">
                <span className="text-white font-black text-xl">#</span>
              </div>
              <h2 className="text-4xl font-black uppercase tracking-tighter">
                <IntlText en="Fresh Arrivals" ja="新着" vi="Hàng mới về" />
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map(i => <div key={i} className="bg-white border-3 border-anime-black h-48 flex items-center justify-center text-gray-300 font-bold uppercase tracking-widest hover:bg-anime-yellow hover:text-black hover:border-black transition-colors cursor-pointer">
                  <IntlText en="Coming Soon" ja="近日公開" vi="Sắp ra mắt" />
                </div>)}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-anime-black text-white py-16 border-t-4 border-anime-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2">
              <div className="inline-block bg-white text-anime-black px-2 py-1 transform -skew-x-12 mb-6">
                <span className="block transform skew-x-12 font-black text-xl">
                  V-MARKET
                </span>
              </div>
              <p className="text-gray-400 font-medium max-w-sm mb-6">
                <IntlText
                  en="The most energetic marketplace for VRoid assets. Level up your virtual identity today."
                  ja="最も活気のあるVRoidアセットのマーケット。あなたのバーチャルアイデンティティを強化しよう。"
                  vi="Marketplace sôi động nhất cho asset VRoid. Nâng cấp danh tính ảo của bạn hôm nay."
                />
              </p>
              <div className="flex gap-4">
                {[1, 2, 3].map(i => <div key={i} className="w-10 h-10 bg-gray-800 hover:bg-anime-red transition-colors rounded-full flex items-center justify-center cursor-pointer border-2 border-transparent hover:border-white">
                    <div className="w-4 h-4 bg-white rounded-full" />
                  </div>)}
              </div>
            </div>

            <div>
              <h4 className="font-black text-anime-yellow uppercase tracking-wider mb-6">
                <IntlText en="Shop" ja="ショップ" vi="Cửa hàng" />
              </h4>
              <ul className="space-y-3 font-bold text-gray-400">
                <li className="hover:text-white cursor-pointer">
                  <IntlText en="New Arrivals" ja="新着" vi="Hàng mới về" />
                </li>
                <li className="hover:text-white cursor-pointer">
                  <IntlText en="Best Sellers" ja="売れ筋" vi="Bán chạy" />
                </li>
                <li className="hover:text-white cursor-pointer"><IntlText en="Creators" ja="クリエイター" vi="Creator" /></li>
                <li className="hover:text-white cursor-pointer"><IntlText en="Deals" ja="お得情報" vi="Ưu đãi" /></li>
              </ul>
            </div>

            <div>
              <h4 className="font-black text-anime-blue uppercase tracking-wider mb-6">
                <IntlText en="Stay Tuned" ja="最新情報をチェック" vi="Theo dõi cập nhật" />
              </h4>
              <div className="flex">
                <input type="email" placeholder="Email..." className="bg-gray-800 border-2 border-gray-700 text-white px-4 py-2 w-full focus:outline-none focus:border-anime-yellow" />
                <button className="bg-anime-yellow text-black p-2 border-2 border-anime-yellow hover:bg-yellow-400">
                  <Mail className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t-2 border-gray-800 text-center text-gray-500 font-bold text-sm">
            <IntlText en="© 2026 V-MARKET. All rights reserved. Stay tuned." ja="© 2026 V-MARKET. 無断転載禁止。お楽しみに。" vi="© 2026 V-MARKET. Bảo lưu mọi quyền. Hãy theo dõi." />
          </div>
        </div>
      </footer>
    </div>;
}
