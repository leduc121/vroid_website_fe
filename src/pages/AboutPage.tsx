import React from 'react';
import { Header } from '../components/Header';
import { MangaButton } from '../components/ui/MangaButton';
import { Users, Globe, Zap, Heart } from 'lucide-react';
export function AboutPage() {
  return <div className="min-h-screen flex flex-col font-sans text-anime-black bg-gray-50">
    <Header />

    <main className="flex-grow">
      {/* Hero Section */}
      <section className="bg-anime-black text-white py-24 relative overflow-hidden border-b-4 border-anime-black">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'radial-gradient(circle, #fff 2px, transparent 2.5px)',
          backgroundSize: '24px 24px'
        }}></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <span className="inline-block bg-anime-yellow text-black font-black px-4 py-1 transform -rotate-2 mb-6 border-2 border-white shadow-[4px_4px_0px_0px_#fff]">
            EST. 2025
          </span>
          <h1 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter mb-8 leading-none">
            Empowering <span className="text-anime-red">Virtual</span>{' '}
            Creativity
          </h1>
          <p className="text-xl md:text-2xl font-bold text-gray-300 max-w-2xl mx-auto leading-relaxed">
            We're building the ultimate marketplace for VTubers, creators, and
            digital artists to share their passion with the world.
          </p>
        </div>
      </section>

      {/* Mission Stats */}
      <section className="py-16 bg-white border-b-4 border-anime-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[{
              label: 'Active Creators',
              value: '10K+',
              icon: Users,
              color: 'bg-anime-blue'
            }, {
              label: 'Assets Sold',
              value: '1M+',
              icon: Zap,
              color: 'bg-anime-red'
            }, {
              label: 'Countries',
              value: '50+',
              icon: Globe,
              color: 'bg-anime-yellow'
            }].map((stat, idx) => {
              const Icon = stat.icon;
              return <div key={idx} className="bg-white border-4 border-anime-black p-8 shadow-pop hover:-translate-y-2 transition-transform duration-300">
                <div className={`w-16 h-16 ${stat.color} border-3 border-anime-black flex items-center justify-center mb-6`}>
                  <Icon className="w-8 h-8 text-white stroke-[3]" />
                </div>
                <h3 className="text-5xl font-black mb-2">{stat.value}</h3>
                <p className="text-xl font-bold text-gray-500 uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>;
            })}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-anime-yellow border-b-4 border-anime-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border-4 border-anime-black p-8 md:p-12 shadow-pop-lg relative">
            <div className="absolute -top-6 -left-6 bg-anime-red text-white font-black px-6 py-2 border-4 border-anime-black transform -rotate-3 text-xl">
              OUR STORY
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-4xl font-black uppercase italic tracking-tighter">
                  From Fans to Founders
                </h2>
                <p className="text-lg font-medium leading-relaxed">
                  V-Market started as a small Discord server where VTuber
                  enthusiasts shared textures and assets. We realized the
                  community needed a dedicated platform that understood the
                  unique culture of virtual avatars.
                </p>
                <p className="text-lg font-medium leading-relaxed">
                  Today, we're proud to host thousands of talented artists who
                  make a living doing what they love. Our mission is simple:
                  make the metaverse more colorful, one texture at a time.
                </p>
                <MangaButton variant="primary" size="lg">
                  Join Our Team
                </MangaButton>
              </div>
              <div className="relative">
                <div className="aspect-video bg-gray-200 border-4 border-anime-black shadow-pop relative overflow-hidden group">
                  <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800" alt="Team working" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                  <div className="absolute inset-0 bg-anime-blue mix-blend-multiply opacity-20 group-hover:opacity-0 transition-opacity"></div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-anime-red border-4 border-anime-black rounded-full z-10"></div>
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-anime-yellow border-4 border-anime-black transform rotate-45 z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black uppercase italic tracking-tighter mb-16 inline-block border-b-8 border-anime-yellow pb-2">
            Core Values
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            {[{
              title: 'Community First',
              desc: 'We build for the creators, by the creators. Every feature is designed to help artists thrive.'
            }, {
              title: 'Bold Creativity',
              desc: 'We celebrate unique styles and unconventional ideas. Normal is boring.'
            }, {
              title: 'Transparent Trust',
              desc: 'No hidden fees, no shady algorithms. Just a fair marketplace for everyone.'
            }].map((val, idx) => <div key={idx} className="relative group">
              <div className="absolute inset-0 bg-anime-black transform translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform"></div>
              <div className="relative bg-white border-4 border-anime-black p-8 h-full">
                <h3 className="text-2xl font-black uppercase mb-4">
                  {val.title}
                </h3>
                <p className="font-medium text-gray-600">{val.desc}</p>
              </div>
            </div>)}
          </div>
        </div>
      </section>
    </main>
  </div>;
}