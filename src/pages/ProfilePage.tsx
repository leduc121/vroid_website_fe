import React, { useState } from 'react';
import { Header } from '../components/Header';
import { MangaButton } from '../components/ui/MangaButton';
import { MangaInput } from '../components/ui/MangaInput';
import { User, ShoppingBag, Download, Wallet, Settings, CreditCard, History } from 'lucide-react';
const tabs = [{
  id: 'profile',
  label: 'Profile',
  icon: User
}, {
  id: 'cart',
  label: 'Cart',
  icon: ShoppingBag
}, {
  id: 'purchases',
  label: 'Purchases',
  icon: Download
}, {
  id: 'wallet',
  label: 'Wallet',
  icon: Wallet
}];
const mockPurchases = [{
  id: 1,
  name: 'Cyber Punk Jacket',
  date: '2024-01-15',
  price: 29.99,
  image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=200'
}, {
  id: 2,
  name: 'Neon Street Pants',
  date: '2024-01-10',
  price: 24.99,
  image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=200'
}];
const mockTransactions = [{
  id: 1,
  type: 'Purchase',
  amount: -29.99,
  date: '2024-01-15',
  desc: 'Cyber Punk Jacket'
}, {
  id: 2,
  type: 'Deposit',
  amount: 100.0,
  date: '2024-01-14',
  desc: 'Wallet Top-up'
}, {
  id: 3,
  type: 'Purchase',
  amount: -24.99,
  date: '2024-01-10',
  desc: 'Neon Street Pants'
}];
export function ProfilePage() {
  const [activeTab, setActiveTab] = useState('profile');
  return <div className="min-h-screen flex flex-col font-sans text-anime-black bg-gray-50">
      <Header />

      <main className="flex-grow py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Profile Header */}
          <div className="bg-anime-blue border-4 border-anime-black p-8 mb-8 shadow-pop-lg">
            <div className="flex items-center gap-6">
              <div className="w-24 h-24 bg-white border-4 border-anime-black flex items-center justify-center shadow-pop">
                <User className="w-12 h-12 text-anime-blue" />
              </div>
              <div>
                <h1 className="text-4xl font-black text-white uppercase tracking-tighter mb-2">
                  VTuber_Pro
                </h1>
                <p className="text-white font-bold">
                  Member since January 2024
                </p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-1">
              <nav className="bg-white border-4 border-anime-black p-4 shadow-pop space-y-2">
                {tabs.map(tab => {
                const Icon = tab.icon;
                return <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`w-full flex items-center gap-3 px-4 py-3 font-bold uppercase tracking-wider border-3 border-anime-black transition-all ${activeTab === tab.id ? 'bg-anime-yellow text-black shadow-pop-sm' : 'bg-white text-black hover:bg-gray-100'}`}>
                      <Icon className="w-5 h-5" />
                      {tab.label}
                    </button>;
              })}
              </nav>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              {activeTab === 'profile' && <div className="bg-white border-4 border-anime-black p-8 shadow-pop-lg">
                  <h2 className="text-3xl font-black uppercase tracking-tighter mb-6 flex items-center gap-3">
                    <span className="w-8 h-8 bg-anime-red border-3 border-anime-black inline-block" />
                    Personal Information
                  </h2>

                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <MangaInput label="Username" defaultValue="VTuber_Pro" />
                      <MangaInput label="Email" defaultValue="vtuber@example.com" />
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <MangaInput label="Phone" defaultValue="+84 123 456 789" />
                      <MangaInput label="Language" defaultValue="English" />
                    </div>
                    <MangaButton variant="primary" size="lg">
                      <Settings className="w-5 h-5 mr-2" />
                      Update Profile
                    </MangaButton>
                  </div>
                </div>}

              {activeTab === 'cart' && <div className="bg-white border-4 border-anime-black p-8 shadow-pop-lg">
                  <h2 className="text-3xl font-black uppercase tracking-tighter mb-6 flex items-center gap-3">
                    <span className="w-8 h-8 bg-anime-blue border-3 border-anime-black inline-block" />
                    Shopping Cart
                  </h2>

                  <div className="text-center py-12">
                    <ShoppingBag className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <p className="font-black uppercase text-gray-400 mb-6">
                      Your cart is empty
                    </p>
                    <MangaButton variant="primary" size="lg">
                      Start Shopping
                    </MangaButton>
                  </div>
                </div>}

              {activeTab === 'purchases' && <div className="bg-white border-4 border-anime-black p-8 shadow-pop-lg">
                  <h2 className="text-3xl font-black uppercase tracking-tighter mb-6 flex items-center gap-3">
                    <span className="w-8 h-8 bg-anime-yellow border-3 border-anime-black inline-block" />
                    My Purchases
                  </h2>

                  <div className="space-y-4">
                    {mockPurchases.map(purchase => <div key={purchase.id} className="flex items-center gap-4 p-4 border-3 border-anime-black hover:shadow-pop transition-shadow">
                        <img src={purchase.image} alt={purchase.name} className="w-20 h-20 object-cover border-3 border-anime-black" />
                        <div className="flex-grow">
                          <h3 className="font-black text-lg">
                            {purchase.name}
                          </h3>
                          <p className="text-sm text-gray-600 font-bold">
                            Purchased: {purchase.date}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-black text-xl text-anime-red">
                            ${purchase.price}
                          </p>
                          <MangaButton variant="accent" size="sm" className="mt-2">
                            <Download className="w-4 h-4 mr-1" />
                            Download
                          </MangaButton>
                        </div>
                      </div>)}
                  </div>
                </div>}

              {activeTab === 'wallet' && <div className="space-y-6">
                  {/* Balance Card */}
                  <div className="bg-anime-red border-4 border-anime-black p-8 shadow-pop-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-white font-bold uppercase tracking-wider mb-2">
                          Current Balance
                        </p>
                        <p className="text-5xl font-black text-white">
                          $145.02
                        </p>
                      </div>
                      <Wallet className="w-16 h-16 text-white" />
                    </div>
                    <div className="mt-6 flex gap-3">
                      <MangaButton variant="accent" size="md">
                        <CreditCard className="w-4 h-4 mr-2" />
                        Add Funds
                      </MangaButton>
                      <MangaButton variant="outline" size="md">
                        Withdraw
                      </MangaButton>
                    </div>
                  </div>

                  {/* Transaction History */}
                  <div className="bg-white border-4 border-anime-black p-8 shadow-pop-lg">
                    <h2 className="text-3xl font-black uppercase tracking-tighter mb-6 flex items-center gap-3">
                      <History className="w-8 h-8" />
                      Transaction History
                    </h2>

                    <div className="space-y-3">
                      {mockTransactions.map(tx => <div key={tx.id} className="flex items-center justify-between p-4 border-3 border-anime-black">
                          <div>
                            <p className="font-black">{tx.desc}</p>
                            <p className="text-sm text-gray-600 font-bold">
                              {tx.date}
                            </p>
                          </div>
                          <p className={`font-black text-xl ${tx.amount > 0 ? 'text-green-600' : 'text-anime-red'}`}>
                            {tx.amount > 0 ? '+' : ''}$
                            {Math.abs(tx.amount).toFixed(2)}
                          </p>
                        </div>)}
                    </div>
                  </div>
                </div>}
            </div>
          </div>
        </div>
      </main>
    </div>;
}