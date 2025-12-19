import React, { useState } from 'react';
import { Header } from '../components/Header';
import { MangaButton } from '../components/ui/MangaButton';
import { MangaInput } from '../components/ui/MangaInput';
import { Mail, Phone, MapPin, MessageSquare, Send } from 'lucide-react';
export function ContactPage() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => setFormStatus('success'), 1500);
  };
  return <div className="min-h-screen flex flex-col font-sans text-anime-black bg-gray-50">
      <Header />

      <main className="flex-grow py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-black uppercase italic tracking-tighter mb-6 drop-shadow-[3px_3px_0px_rgba(0,0,0,1)] text-white" style={{
            textShadow: '4px 4px 0 #000'
          }}>
              Get In Touch
            </h1>
            <p className="text-xl font-bold text-gray-600 max-w-2xl mx-auto">
              Have a question about your order? Want to partner with us? We're
              here to help!
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info Cards */}
            <div className="lg:col-span-1 space-y-6">
              {[{
              icon: Mail,
              title: 'Email Us',
              info: 'support@v-market.com',
              color: 'bg-anime-blue'
            }, {
              icon: Phone,
              title: 'Call Us',
              info: '+1 (555) 123-4567',
              color: 'bg-anime-red'
            }, {
              icon: MapPin,
              title: 'Visit Us',
              info: 'Akihabara, Tokyo, Japan',
              color: 'bg-anime-yellow'
            }].map((item, idx) => {
              const Icon = item.icon;
              return <div key={idx} className="bg-white border-4 border-anime-black p-6 shadow-pop flex items-center gap-6 group hover:-translate-x-2 transition-transform">
                    <div className={`w-14 h-14 ${item.color} border-3 border-anime-black flex items-center justify-center flex-shrink-0 group-hover:rotate-12 transition-transform`}>
                      <Icon className="w-7 h-7 text-white stroke-[3]" />
                    </div>
                    <div>
                      <h3 className="font-black uppercase text-sm text-gray-400 mb-1">
                        {item.title}
                      </h3>
                      <p className="font-bold text-lg">{item.info}</p>
                    </div>
                  </div>;
            })}

              <div className="bg-anime-black text-white p-8 border-4 border-anime-black shadow-pop mt-8">
                <h3 className="font-black uppercase text-xl mb-4 text-anime-yellow">
                  Support Hours
                </h3>
                <ul className="space-y-2 font-bold text-gray-300">
                  <li className="flex justify-between">
                    <span>Mon - Fri</span>
                    <span>9:00 - 18:00 JST</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sat</span>
                    <span>10:00 - 15:00 JST</span>
                  </li>
                  <li className="flex justify-between text-anime-red">
                    <span>Sun</span>
                    <span>Closed</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white border-4 border-anime-black p-8 md:p-12 shadow-pop-lg relative overflow-hidden">
                {/* Decorative background pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gray-100 rounded-full -translate-y-1/2 translate-x-1/2 z-0"></div>

                <div className="relative z-10">
                  <h2 className="text-3xl font-black uppercase tracking-tighter mb-8 flex items-center gap-3">
                    <MessageSquare className="w-8 h-8" />
                    Send a Message
                  </h2>

                  {formStatus === 'success' ? <div className="bg-green-50 border-4 border-green-500 p-8 text-center animate-bounce-in">
                      <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-black">
                        <Send className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-black uppercase mb-2">
                        Message Sent!
                      </h3>
                      <p className="font-bold text-gray-600 mb-6">
                        We'll get back to you within 24 hours.
                      </p>
                      <MangaButton variant="outline" onClick={() => setFormStatus('idle')}>
                        Send Another
                      </MangaButton>
                    </div> : <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <MangaInput label="Your Name" placeholder="Senpai" required />
                        <MangaInput label="Email Address" type="email" placeholder="hello@example.com" required />
                      </div>

                      <MangaInput label="Subject" placeholder="Order Inquiry / Partnership / Other" required />

                      <div>
                        <label className="block text-sm font-black uppercase tracking-wider mb-2 text-anime-black ml-1">
                          Message
                        </label>
                        <textarea className="w-full p-4 bg-white text-black font-bold border-4 border-anime-black rounded-lg focus:outline-none focus:border-anime-blue focus:shadow-[4px_4px_0px_0px_#3742FA] placeholder:text-gray-400 placeholder:font-normal transition-all duration-200 min-h-[150px] resize-y" placeholder="How can we help you today?" required></textarea>
                      </div>

                      <div className="flex justify-end">
                        <MangaButton variant="primary" size="lg" className="w-full md:w-auto" disabled={formStatus === 'submitting'}>
                          {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                        </MangaButton>
                      </div>
                    </form>}
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-24 max-w-4xl mx-auto">
            <h2 className="text-3xl font-black uppercase tracking-tighter text-center mb-12">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {[{
              q: 'How do I download my purchased assets?',
              a: 'Once purchased, assets are immediately available in your Profile > Purchases tab. You can download them anytime.'
            }, {
              q: 'Can I use these assets for commercial VTubing?',
              a: 'Yes! Most assets come with a commercial license. Check the specific product details for license information.'
            }, {
              q: 'Do you offer refunds?',
              a: "Due to the digital nature of our products, we generally don't offer refunds unless the file is corrupted or not as described."
            }].map((faq, idx) => <div key={idx} className="bg-white border-3 border-anime-black p-6 hover:bg-gray-50 transition-colors">
                  <h3 className="text-lg font-black uppercase mb-2 flex items-start gap-3">
                    <span className="text-anime-red">Q.</span>
                    {faq.q}
                  </h3>
                  <p className="font-medium text-gray-600 pl-8 border-l-4 border-gray-200 ml-1">
                    {faq.a}
                  </p>
                </div>)}
            </div>
          </div>
        </div>
      </main>
    </div>;
}