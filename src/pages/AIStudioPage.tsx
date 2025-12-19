import React, { useState } from 'react';
import { Header } from '../components/Header';
import { MangaButton } from '../components/ui/MangaButton';
import { Sparkles, Download, AlertCircle, Loader2 } from 'lucide-react';
import { IntlText } from '../i18n';
const assetTypes = ['Shirt', 'Blazer', 'Coat', 'Skirt', 'Dress', 'Shoes', 'Accessories', 'Hair'];
export function AIStudioPage() {
  const [prompt, setPrompt] = useState('');
  const [selectedAsset, setSelectedAsset] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState('');
  const [error, setError] = useState('');
  const [stylePreset, setStylePreset] = useState('Anime');
  const [colorScheme, setColorScheme] = useState<'red' | 'blue' | 'yellow'>('blue');
  const [publishMessage, setPublishMessage] = useState('');
  const handleGenerate = async () => {
    if (!prompt || !selectedAsset) {
      setError('Please enter a prompt and select an asset type');
      return;
    }
    setError('');
    setIsGenerating(true);
    // Simulate API call
    setTimeout(() => {
      setIsGenerating(false);
      setGeneratedImage('https://images.unsplash.com/photo-1558769132-cb1aea1c8f86?w=600');
    }, 3000);
  };
  const handlePublishToShop = () => {
    if (!generatedImage) {
      setPublishMessage('Generate an asset first');
      return;
    }
    const imageColorClass = colorScheme === 'red' ? 'bg-anime-red' : colorScheme === 'blue' ? 'bg-anime-blue' : 'bg-anime-yellow';
    const shadowColor = colorScheme;
    const newAsset = {
      id: Date.now(),
      title: `${selectedAsset} - ${stylePreset}`,
      price: '$14.99',
      image: generatedImage,
      category: selectedAsset || 'Others',
      author: 'AI Studio',
      imageColor: imageColorClass,
      shadowColor,
      tag: 'AI'
    };
    try {
      const existing = localStorage.getItem('generatedAssets');
      const arr = existing ? JSON.parse(existing) : [];
      const next = Array.isArray(arr) ? [...arr, newAsset] : [newAsset];
      localStorage.setItem('generatedAssets', JSON.stringify(next));
      setPublishMessage('Published to Shop! Check Shop page');
    } catch {
      setPublishMessage('Failed to publish to Shop');
    }
  };
  return <div className="min-h-screen flex flex-col font-sans text-anime-black bg-gray-50">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-anime-red via-anime-blue to-anime-yellow py-16 border-b-4 border-anime-black relative overflow-hidden">
          <div className="absolute inset-0 bg-halftone-red opacity-10" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-white border-4 border-anime-black flex items-center justify-center shadow-pop-lg">
                <Sparkles className="w-8 h-8 text-anime-yellow fill-current" />
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-white uppercase italic tracking-tighter drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
                <IntlText en="AI Studio!" ja="AIスタジオ！" vi="AI Studio!" />
              </h1>
            </div>
            <p className="text-xl text-white font-bold max-w-2xl">
              <IntlText
                en="Generate custom VRoid assets with AI. Describe your vision and watch it come to life!"
                ja="AIでオリジナルのVRoidアセットを生成。あなたのイメージを形にしよう！"
                vi="Tạo asset VRoid tùy chỉnh bằng AI. Mô tả ý tưởng và xem nó thành hiện thực!"
              />
            </p>
          </div>
        </section>

        {/* Generator Interface */}
        <section className="py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Input Panel */}
              <div className="bg-white border-4 border-anime-black p-8 shadow-pop-lg">
                <h2 className="text-3xl font-black uppercase tracking-tighter mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 bg-anime-red border-3 border-anime-black inline-block" />
                  <IntlText en="Create" ja="作成" vi="Tạo" />
                </h2>

                <div className="space-y-6">
                  {/* Prompt Input */}
                  <div>
                    <label className="block text-sm font-black uppercase tracking-wider mb-2">
                      <IntlText en="Describe Your Asset" ja="アセットの説明" vi="Mô tả asset của bạn" />
                    </label>
                    <textarea value={prompt} onChange={e => setPrompt(e.target.value)} placeholder="E.g., A futuristic cyberpunk jacket with neon blue accents..." className="w-full h-32 px-4 py-3 border-4 border-anime-black font-bold focus:outline-none focus:shadow-pop-yellow transition-shadow resize-none" />
                  </div>

                  {/* Style Preset */}
                  <div>
                    <label className="block text-sm font-black uppercase tracking-wider mb-3">
                      <IntlText en="Style Preset" ja="スタイルプリセット" vi="Phong cách" />
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {['Anime', 'Cyberpunk', 'Kawaii', 'Gothic'].map(p => (
                        <button
                          key={p}
                          onClick={() => setStylePreset(p)}
                          className={`px-4 py-3 font-bold uppercase tracking-wider border-3 border-anime-black transition-all ${stylePreset === p ? 'bg-anime-yellow text-black shadow-pop' : 'bg-white text-black hover:bg-gray-100'}`}
                        >
                          {p}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Asset Type Selection */}
                  <div>
                    <label className="block text-sm font-black uppercase tracking-wider mb-3">
                      <IntlText en="Asset Type" ja="アセットの種類" vi="Loại asset" />
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {assetTypes.map(type => <button key={type} onClick={() => setSelectedAsset(type)} className={`px-4 py-3 font-bold uppercase tracking-wider border-3 border-anime-black transition-all ${selectedAsset === type ? 'bg-anime-blue text-white shadow-pop' : 'bg-white text-black hover:bg-gray-100'}`}>
                          {type}
                        </button>)}
                    </div>
                  </div>

                  {/* Color Scheme */}
                  <div>
                    <label className="block text-sm font-black uppercase tracking-wider mb-3">
                      <IntlText en="Color Scheme" ja="配色" vi="Bảng màu" />
                    </label>
                    <div className="flex gap-3">
                      {(['red','blue','yellow'] as const).map(c => (
                        <button
                          key={c}
                          onClick={() => setColorScheme(c)}
                          className={`w-10 h-10 border-4 border-anime-black ${c === 'red' ? 'bg-anime-red' : c === 'blue' ? 'bg-anime-blue' : 'bg-anime-yellow'} ${colorScheme === c ? 'ring-4 ring-black' : ''}`}
                          aria-label={c}
                          title={c}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Error Message */}
                  {error && <div className="bg-anime-red border-3 border-anime-black p-4 flex items-center gap-3">
                      <AlertCircle className="w-5 h-5 text-white flex-shrink-0" />
                      <p className="text-white font-bold">{error}</p>
                  </div>}

                  {/* Generate Button */}
                  <MangaButton variant="primary" size="lg" onClick={handleGenerate} disabled={isGenerating} className="w-full">
                    {isGenerating ? <>
                        <Loader2 className="w-5 h-5 animate-spin mr-2" />
                        <IntlText en="Generating..." ja="生成中..." vi="Đang tạo..." />
                      </> : <>
                        <Sparkles className="w-5 h-5 mr-2 fill-current" />
                        <IntlText en="Generate Asset" ja="アセットを生成" vi="Tạo asset" />
                      </>}
                  </MangaButton>
                </div>
              </div>

              {/* Preview Panel */}
              <div className="bg-white border-4 border-anime-black p-8 shadow-pop-lg">
                <h2 className="text-3xl font-black uppercase tracking-tighter mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 bg-anime-yellow border-3 border-anime-black inline-block" />
                  <IntlText en="Preview" ja="プレビュー" vi="Xem trước" />
                </h2>

                <div className="aspect-square bg-gray-100 border-4 border-anime-black flex items-center justify-center relative overflow-hidden">
                  {isGenerating ? <div className="text-center">
                      <Loader2 className="w-16 h-16 animate-spin text-anime-blue mx-auto mb-4" />
                      <p className="font-black uppercase text-gray-500">
                        <IntlText en="Creating Magic..." ja="魔法を作成中..." vi="Đang tạo phép thuật..." />
                      </p>
                    </div> : generatedImage ? <img src={generatedImage} alt="Generated asset" className="w-full h-full object-cover" /> : <div className="text-center p-8">
                      <Sparkles className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                      <p className="font-black uppercase text-gray-400">
                        <IntlText en="Your creation will appear here" ja="生成結果はここに表示されます" vi="Sản phẩm của bạn sẽ xuất hiện tại đây" />
                      </p>
                    </div>}
                </div>

                {generatedImage && !isGenerating && <div className="mt-6 space-y-3">
                    <MangaButton variant="accent" size="lg" className="w-full">
                      <Download className="w-5 h-5 mr-2" />
                      <IntlText en="Download Asset" ja="アセットをダウンロード" vi="Tải asset" />
                    </MangaButton>
                    <MangaButton variant="secondary" size="md" className="w-full" onClick={handlePublishToShop}>
                      <IntlText en="Publish to Shop" ja="ショップに公開" vi="Đăng lên Shop" />
                    </MangaButton>
                    {publishMessage && <p className="text-center font-bold text-sm">{publishMessage}</p>}
                  </div>}
              </div>
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="bg-anime-yellow py-16 border-y-4 border-anime-black">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-3xl font-black uppercase tracking-tighter mb-6">
              <IntlText en="How It Works" ja="使い方" vi="Cách hoạt động" />
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[{
              num: '1',
              text: 'Describe your vision in the prompt'
            }, {
              num: '2',
              text: 'Select the asset type template'
            }, {
              num: '3',
              text: 'Generate and download your asset'
            }].map(step => <div key={step.num} className="bg-white border-4 border-anime-black p-6 shadow-pop">
                <div className="w-16 h-16 bg-anime-red border-3 border-anime-black flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-black text-white">
                    {step.num}
                  </span>
                </div>
                <p className="font-bold">
                  <IntlText
                    en={step.text}
                    ja={step.num === '1' ? 'プロンプトでイメージを説明' : step.num === '2' ? 'アセットタイプのテンプレートを選択' : '生成してアセットをダウンロード'}
                    vi={step.num === '1' ? 'Mô tả ý tưởng trong prompt' : step.num === '2' ? 'Chọn template loại asset' : 'Gen và tải asset'}
                  />
                </p>
              </div>)}
            </div>
          </div>
        </section>
      </main>
    </div>;
}
