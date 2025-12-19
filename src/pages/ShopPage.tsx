import React, { useState } from 'react';
import { Header } from '../components/Header';
import { ProductCard } from '../components/ProductCard';
import { MangaButton } from '../components/ui/MangaButton';
import { Filter, Grid, List } from 'lucide-react';
import { IntlText } from '../i18n';
const categories = ['All', 'Tops', 'Bottoms', 'Dress', 'Accessories', 'Shoes', 'Others'];
type ShopProduct = {
  id: number;
  title: string;
  price: string;
  image: string;
  category: string;
  author: string;
  imageColor: string;
  shadowColor: 'red' | 'blue' | 'yellow';
  tag?: string;
};
const mockProducts: ShopProduct[] = [{
  id: 1,
  title: 'Cyber Punk Jacket',
  price: '$29.99',
  image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400',
  category: 'Tops',
  author: 'V-Style',
  imageColor: 'bg-anime-blue',
  shadowColor: 'red'
}, {
  id: 2,
  title: 'Neon Street Pants',
  price: '$24.99',
  image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400',
  category: 'Bottoms',
  author: 'UrbanNinja',
  imageColor: 'bg-anime-yellow',
  shadowColor: 'blue'
}, {
  id: 3,
  title: 'Holographic Dress',
  price: '$39.99',
  image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400',
  category: 'Dress',
  author: 'GlitchFashion',
  imageColor: 'bg-anime-red',
  shadowColor: 'yellow'
}, {
  id: 4,
  title: 'LED Sneakers',
  price: '$34.99',
  image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=400',
  category: 'Shoes',
  author: 'Kicks',
  imageColor: 'bg-green-500',
  shadowColor: 'red'
}, {
  id: 5,
  title: 'Tech Visor',
  price: '$19.99',
  image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400',
  category: 'Accessories',
  author: 'FutureGear',
  imageColor: 'bg-purple-500',
  shadowColor: 'blue'
}, {
  id: 6,
  title: 'Anime Hoodie',
  price: '$27.99',
  image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400',
  category: 'Tops',
  author: 'OtakuWear',
  imageColor: 'bg-pink-500',
  shadowColor: 'yellow'
}];
export function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [products, setProducts] = useState<ShopProduct[]>(mockProducts);

  React.useEffect(() => {
    try {
      const stored = localStorage.getItem('generatedAssets');
      const parsed: unknown = stored ? JSON.parse(stored) : [];
      const mapped: ShopProduct[] = Array.isArray(parsed)
        ? parsed.map((g: Record<string, unknown>) => ({
            id: typeof g.id === 'number' ? (g.id as number) : Date.now(),
            title: typeof g.title === 'string' ? g.title : 'Generated Asset',
            price: typeof g.price === 'string' ? g.price : '$0.00',
            image: typeof g.image === 'string' ? g.image : '',
            category: typeof g.category === 'string' ? g.category : 'Others',
            author: typeof g.author === 'string' ? g.author : 'AI Studio',
            imageColor: typeof g.imageColor === 'string' ? g.imageColor : 'bg-anime-blue',
            shadowColor: (g.shadowColor as 'red' | 'blue' | 'yellow') ?? ('red' as const),
            tag: 'AI'
          }))
        : [];
      setProducts([...mockProducts, ...mapped]);
    } catch {
      setProducts(mockProducts);
    }
  }, []);

  const filteredProducts = selectedCategory === 'All' ? products : products.filter(p => p.category === selectedCategory);
  return <div className="min-h-screen flex flex-col font-sans text-anime-black bg-gray-50">
      <Header />

      <main className="flex-grow">
        {/* Hero Banner */}
        <section className="bg-anime-blue py-16 border-b-4 border-anime-black relative overflow-hidden">
          <div className="absolute inset-0 bg-halftone-blue opacity-20" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h1 className="text-5xl md:text-7xl font-black text-white uppercase italic tracking-tighter drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] mb-4">
              <IntlText en="VRoid Shop!" ja="VRoidショップ！" vi="Cửa hàng VRoid!" />
            </h1>
            <p className="text-xl text-white font-bold max-w-2xl">
              <IntlText
                en="Discover thousands of premium VRoid assets. Level up your virtual avatar today!"
                ja="高品質なVRoidアセットを数多く発見。あなたのバーチャルアバターを今すぐ強化しよう！"
                vi="Khám phá hàng loạt asset VRoid cao cấp. Nâng cấp avatar ảo của bạn ngay hôm nay!"
              />
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="bg-white border-b-4 border-anime-black sticky top-20 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-wrap gap-3">
              {categories.map(category => <button key={category} onClick={() => setSelectedCategory(category)} className={`px-6 py-2 font-black uppercase tracking-wider border-3 border-anime-black transition-all ${selectedCategory === category ? 'bg-anime-yellow text-black shadow-pop' : 'bg-white text-black hover:bg-gray-100'}`}>
                  <IntlText
                    en={category}
                    ja={category === 'All' ? 'すべて' : category === 'Tops' ? 'トップス' : category === 'Bottoms' ? 'ボトムス' : category === 'Dress' ? 'ドレス' : category === 'Accessories' ? 'アクセサリー' : category === 'Shoes' ? 'シューズ' : 'その他'}
                    vi={category === 'All' ? 'Tất cả' : category === 'Tops' ? 'Áo' : category === 'Bottoms' ? 'Quần' : category === 'Dress' ? 'Váy' : category === 'Accessories' ? 'Phụ kiện' : category === 'Shoes' ? 'Giày' : 'Khác'}
                  />
                </button>)}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-anime-red border-3 border-anime-black flex items-center justify-center shadow-pop-sm">
                  <span className="text-white font-black text-xl">
                    {filteredProducts.length}
                  </span>
                </div>
                <h2 className="text-3xl font-black uppercase tracking-tighter">
                  {selectedCategory === 'All' ? (
                    <IntlText en="All Products" ja="すべての商品" vi="Tất cả sản phẩm" />
                  ) : (
                    <IntlText
                      en={selectedCategory}
                      ja={selectedCategory === 'Tops' ? 'トップス' : selectedCategory === 'Bottoms' ? 'ボトムス' : selectedCategory === 'Dress' ? 'ドレス' : selectedCategory === 'Accessories' ? 'アクセサリー' : selectedCategory === 'Shoes' ? 'シューズ' : 'その他'}
                      vi={selectedCategory === 'Tops' ? 'Áo' : selectedCategory === 'Bottoms' ? 'Quần' : selectedCategory === 'Dress' ? 'Váy' : selectedCategory === 'Accessories' ? 'Phụ kiện' : selectedCategory === 'Shoes' ? 'Giày' : 'Khác'}
                    />
                  )}
                </h2>
              </div>

              <div className="hidden md:flex gap-2">
                <button className="p-2 border-3 border-anime-black bg-white hover:bg-anime-yellow transition-colors">
                  <Grid className="w-5 h-5" />
                </button>
                <button className="p-2 border-3 border-anime-black bg-white hover:bg-anime-yellow transition-colors">
                  <List className="w-5 h-5" />
                </button>
                <button className="p-2 border-3 border-anime-black bg-white hover:bg-anime-yellow transition-colors">
                  <Filter className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.map(product => <ProductCard key={product.id} {...product} />)}
            </div>

            {/* Load More */}
            <div className="mt-12 text-center">
              <MangaButton variant="primary" size="lg">
                Load More Products
              </MangaButton>
            </div>
          </div>
        </section>
      </main>
    </div>;
}
