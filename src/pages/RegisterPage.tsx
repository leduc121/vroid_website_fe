import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MangaButton } from '../components/ui/MangaButton';
import { MangaInput } from '../components/ui/MangaInput';
import { Mail, Lock, User, Phone, Star, ArrowRight } from 'lucide-react';
import { IntlText } from '../i18n';
export function RegisterPage() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    terms: false
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords don't match!";
    }
    if (formData.password.length < 8) {
      newErrors.password = 'Must be at least 8 chars!';
    }
    if (!formData.terms) {
      newErrors.terms = 'Required!';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // Handle registration
      console.log('Registering...', formData);
    }
  };
  return <div className="min-h-screen w-full bg-[#3742FA] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
      backgroundImage: 'linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000), linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000)',
      backgroundSize: '40px 40px',
      backgroundPosition: '0 0, 20px 20px'
    }}></div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFA502] rounded-full border-4 border-black -translate-y-1/2 translate-x-1/2 hidden md:block"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#FF4757] rotate-45 border-4 border-black translate-y-1/2 -translate-x-1/2 hidden md:block"></div>

      {/* Main Card */}
      <div className="w-full max-w-2xl bg-white border-4 border-black rounded-xl shadow-[12px_12px_0px_0px_#000] relative z-10 overflow-hidden flex flex-col md:flex-row">
        {/* Left Side - Visual (Desktop only) */}
        <div className="hidden md:flex w-1/3 bg-[#FF4757] border-r-4 border-black flex-col items-center justify-center p-6 text-center text-white">
          <Star size={64} fill="white" stroke="black" strokeWidth={3} className="mb-4 animate-spin-slow" />
          <h2 className="text-3xl font-black uppercase italic leading-tight drop-shadow-[2px_2px_0px_#000]">
            <IntlText en="Join the Squad!" ja="仲間に入ろう！" vi="Tham gia đội ngũ!" />
          </h2>
          <p className="mt-4 font-bold text-sm">
            <IntlText en="Create, Share, and Sell your VRoid masterpieces." ja="VRoid作品を作成・共有・販売しよう。" vi="Tạo, chia sẻ và bán các tác phẩm VRoid của bạn." />
          </p>
          <div className="mt-8 p-4 bg-white text-black border-4 border-black rounded-lg -rotate-3 shadow-[4px_4px_0px_0px_#000]">
            <p className="font-black text-xs">"Best platform for VTubers!"</p>
            <p className="text-xs mt-1 font-bold">- User123</p>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="flex-1 p-8">
          <div className="mb-6 md:hidden text-center">
            <h1 className="text-3xl font-black text-[#FF4757] uppercase italic">
              <IntlText en="Join the Squad!" ja="仲間に入ろう！" vi="Tham gia đội ngũ!" />
            </h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <MangaInput label="Username" placeholder="CoolUser123" value={formData.username} onChange={e => setFormData({
              ...formData,
              username: e.target.value
            })} icon={<User size={20} strokeWidth={3} />} required />
              <MangaInput label="Phone (Optional)" placeholder="+84 999 999 999" value={formData.phone} onChange={e => setFormData({
              ...formData,
              phone: e.target.value
            })} icon={<Phone size={20} strokeWidth={3} />} />
            </div>

            <MangaInput label="Email Address" type="email" placeholder="abc@example.com" value={formData.email} onChange={e => setFormData({
            ...formData,
            email: e.target.value
          })} icon={<Mail size={20} strokeWidth={3} />} required />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <MangaInput label="Password" type="password" placeholder="••••••••" value={formData.password} onChange={e => setFormData({
              ...formData,
              password: e.target.value
            })} error={errors.password} icon={<Lock size={20} strokeWidth={3} />} required />
              <MangaInput label="Confirm Password" type="password" placeholder="••••••••" value={formData.confirmPassword} onChange={e => setFormData({
              ...formData,
              confirmPassword: e.target.value
            })} error={errors.confirmPassword} icon={<Lock size={20} strokeWidth={3} />} required />
            </div>

            <div className="flex items-start gap-2 pt-2">
              <div className="relative flex items-center mt-1">
                <input type="checkbox" id="terms" checked={formData.terms} onChange={e => setFormData({
                ...formData,
                terms: e.target.checked
              })} className={`peer h-6 w-6 appearance-none border-4 border-black rounded bg-white checked:bg-[#FFA502] checked:border-black transition-all cursor-pointer ${errors.terms ? 'border-[#FF4757]' : ''}`} />
                <svg className="absolute w-4 h-4 text-black pointer-events-none hidden peer-checked:block left-1 top-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <label htmlFor="terms" className="font-bold text-sm cursor-pointer select-none leading-tight">
                <IntlText en="I agree to the " ja="私は以下に同意します: " vi="Tôi đồng ý với " />
                <a href="#" className="text-[#3742FA] underline">
                  <IntlText en="Terms of Service" ja="利用規約" vi="Điều khoản dịch vụ" />
                </a>{' '}
                <IntlText en="and " ja="および " vi="và " />
                <a href="#" className="text-[#3742FA] underline">
                  <IntlText en="Privacy Policy" ja="プライバシーポリシー" vi="Chính sách bảo mật" />
                </a>
              </label>
            </div>
            {errors.terms && <p className="text-[#FF4757] text-xs font-black uppercase">
                {errors.terms}
              </p>}

            <MangaButton variant="accent" className="w-full text-xl py-4 mt-4 group" type="submit">
              <span className="flex items-center justify-center gap-2">
                <IntlText en="CREATE ACCOUNT" ja="アカウント作成" vi="Tạo tài khoản" />{' '}
                <ArrowRight className="group-hover:translate-x-1 transition-transform" strokeWidth={3} />
              </span>
            </MangaButton>
          </form>

          <div className="mt-6 text-center">
            <p className="font-bold text-sm">
              <IntlText en="Already have an account?" ja="すでにアカウントをお持ちですか？" vi="Bạn đã có tài khoản?" />{' '}
              <Link to="/login" className="text-[#3742FA] underline decoration-4 decoration-[#3742FA] underline-offset-2 hover:text-black hover:decoration-black transition-all">
                <IntlText en="LOGIN HERE" ja="こちらでログイン" vi="Đăng nhập tại đây" />
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>;
}
