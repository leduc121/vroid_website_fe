import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { MangaButton } from '../components/ui/MangaButton';
import { MangaInput } from '../components/ui/MangaInput';
import { Trash2, CreditCard, Wallet, Lock, CheckCircle } from 'lucide-react';
export function CheckoutPage() {
  const [step, setStep] = useState(1); // 1: Cart, 2: Shipping, 3: Payment
  // Mock cart items
  const cartItems = [{
    id: 1,
    name: 'Cyber Punk Jacket',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=200',
    quantity: 1
  }, {
    id: 2,
    name: 'Neon Street Pants',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=200',
    quantity: 2
  }];
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const tax = subtotal * 0.1;
  const total = subtotal + tax;
  return <div className="min-h-screen flex flex-col font-sans text-anime-black bg-gray-50">
      <Header />

      <main className="flex-grow py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter mb-12 text-center drop-shadow-[2px_2px_0px_rgba(0,0,0,1)] text-white" style={{
          textShadow: '4px 4px 0 #000'
        }}>
            Checkout
          </h1>

          {/* Progress Steps */}
          <div className="flex justify-center mb-12">
            <div className="flex items-center">
              {[{
              num: 1,
              label: 'Cart'
            }, {
              num: 2,
              label: 'Details'
            }, {
              num: 3,
              label: 'Payment'
            }].map((s, idx) => <Fragment key={s.num}>
                  <div className={`flex flex-col items-center relative z-10`}>
                    <div className={`w-10 h-10 rounded-full border-4 border-anime-black flex items-center justify-center font-black text-lg transition-colors ${step >= s.num ? 'bg-anime-yellow text-black' : 'bg-white text-gray-300'}`}>
                      {step > s.num ? <CheckCircle className="w-6 h-6" /> : s.num}
                    </div>
                    <span className={`mt-2 font-bold uppercase text-xs ${step >= s.num ? 'text-black' : 'text-gray-400'}`}>
                      {s.label}
                    </span>
                  </div>
                  {idx < 2 && <div className={`w-24 h-1 border-t-4 border-anime-black mx-2 -mt-6 transition-opacity ${step > s.num ? 'opacity-100' : 'opacity-20'}`} />}
                </Fragment>)}
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content Area */}
            <div className="lg:col-span-2 space-y-8">
              {/* Step 1: Cart Review */}
              {step === 1 && <div className="bg-white border-4 border-anime-black p-6 shadow-pop-lg">
                  <h2 className="text-2xl font-black uppercase tracking-tighter mb-6 flex items-center gap-3">
                    <span className="w-8 h-8 bg-anime-blue border-3 border-anime-black inline-block" />
                    Review Cart
                  </h2>

                  <div className="space-y-6">
                    {cartItems.map(item => <div key={item.id} className="flex gap-4 border-b-2 border-gray-100 pb-6 last:border-0 last:pb-0">
                        <div className="w-24 h-24 bg-gray-100 border-3 border-anime-black flex-shrink-0">
                          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-grow">
                          <div className="flex justify-between items-start">
                            <h3 className="font-black text-lg uppercase">
                              {item.name}
                            </h3>
                            <button className="text-gray-400 hover:text-anime-red transition-colors">
                              <Trash2 className="w-5 h-5" />
                            </button>
                          </div>
                          <p className="text-anime-red font-black text-xl mt-1">
                            ${item.price}
                          </p>

                          <div className="flex items-center gap-3 mt-4">
                            <span className="text-xs font-bold uppercase text-gray-500">
                              Qty:
                            </span>
                            <div className="flex items-center border-2 border-anime-black bg-white h-8">
                              <button className="px-2 hover:bg-gray-100 border-r-2 border-anime-black font-bold">
                                -
                              </button>
                              <span className="px-3 font-bold text-sm">
                                {item.quantity}
                              </span>
                              <button className="px-2 hover:bg-gray-100 border-l-2 border-anime-black font-bold">
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>)}
                  </div>
                </div>}

              {/* Step 2: Details */}
              {step === 2 && <div className="bg-white border-4 border-anime-black p-6 shadow-pop-lg">
                  <h2 className="text-2xl font-black uppercase tracking-tighter mb-6 flex items-center gap-3">
                    <span className="w-8 h-8 bg-anime-red border-3 border-anime-black inline-block" />
                    Billing Details
                  </h2>

                  <div className="grid md:grid-cols-2 gap-6">
                    <MangaInput label="First Name" placeholder="John" />
                    <MangaInput label="Last Name" placeholder="Doe" />
                    <div className="md:col-span-2">
                      <MangaInput label="Email Address" type="email" placeholder="john@example.com" />
                    </div>
                    <div className="md:col-span-2">
                      <MangaInput label="Street Address" placeholder="123 Anime St" />
                    </div>
                    <MangaInput label="City" placeholder="Tokyo" />
                    <MangaInput label="Postal Code" placeholder="100-0001" />
                    <div className="md:col-span-2">
                      <MangaInput label="Country" placeholder="Japan" />
                    </div>
                  </div>
                </div>}

              {/* Step 3: Payment */}
              {step === 3 && <div className="bg-white border-4 border-anime-black p-6 shadow-pop-lg">
                  <h2 className="text-2xl font-black uppercase tracking-tighter mb-6 flex items-center gap-3">
                    <span className="w-8 h-8 bg-anime-yellow border-3 border-anime-black inline-block" />
                    Payment Method
                  </h2>

                  <div className="space-y-4 mb-8">
                    <label className="flex items-center gap-4 p-4 border-3 border-anime-black cursor-pointer hover:bg-gray-50 transition-colors">
                      <input type="radio" name="payment" className="w-5 h-5 accent-anime-black" defaultChecked />
                      <CreditCard className="w-6 h-6" />
                      <span className="font-bold text-lg">Credit Card</span>
                    </label>
                    <label className="flex items-center gap-4 p-4 border-3 border-anime-black cursor-pointer hover:bg-gray-50 transition-colors">
                      <input type="radio" name="payment" className="w-5 h-5 accent-anime-black" />
                      <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xs">
                        P
                      </div>
                      <span className="font-bold text-lg">PayPal</span>
                    </label>
                    <label className="flex items-center gap-4 p-4 border-3 border-anime-black cursor-pointer hover:bg-gray-50 transition-colors">
                      <input type="radio" name="payment" className="w-5 h-5 accent-anime-black" />
                      <Wallet className="w-6 h-6" />
                      <span className="font-bold text-lg">
                        V-Wallet Balance ($145.02)
                      </span>
                    </label>
                  </div>

                  <div className="p-4 bg-gray-50 border-3 border-anime-black border-dashed">
                    <div className="flex items-center gap-2 text-sm font-bold text-gray-500 mb-4">
                      <Lock className="w-4 h-4" />
                      Secure Encrypted Payment
                    </div>
                    <div className="space-y-4">
                      <MangaInput label="Card Number" placeholder="0000 0000 0000 0000" icon={<CreditCard size={20} />} />
                      <div className="grid grid-cols-2 gap-4">
                        <MangaInput label="Expiry" placeholder="MM/YY" />
                        <MangaInput label="CVC" placeholder="123" />
                      </div>
                    </div>
                  </div>
                </div>}

              {/* Navigation Buttons */}
              <div className="flex justify-between pt-4">
                {step > 1 ? <MangaButton variant="outline" onClick={() => setStep(step - 1)}>
                    Back
                  </MangaButton> : <Link to="/shop">
                    <MangaButton variant="outline">
                      Continue Shopping
                    </MangaButton>
                  </Link>}

                {step < 3 ? <MangaButton variant="primary" onClick={() => setStep(step + 1)}>
                    Next Step
                  </MangaButton> : <MangaButton variant="accent" size="lg" className="px-12">
                    Pay ${total.toFixed(2)}
                  </MangaButton>}
              </div>
            </div>

            {/* Order Summary Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white border-4 border-anime-black p-6 shadow-pop sticky top-24">
                <h3 className="text-xl font-black uppercase tracking-tighter mb-6 border-b-4 border-anime-black pb-4">
                  Order Summary
                </h3>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between font-bold text-gray-600">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-bold text-gray-600">
                    <span>Tax (10%)</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-bold text-gray-600">
                    <span>Shipping</span>
                    <span className="text-green-600">FREE</span>
                  </div>
                </div>

                <div className="flex justify-between font-black text-2xl border-t-4 border-anime-black pt-4 mb-8">
                  <span>Total</span>
                  <span className="text-anime-red">${total.toFixed(2)}</span>
                </div>

                <div className="bg-yellow-50 border-2 border-anime-yellow p-3 text-sm font-bold text-yellow-800 mb-4">
                  🎉 You saved $15.00 on shipping!
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>;
}