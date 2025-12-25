import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MangaButton } from '../components/ui/MangaButton';
import { MangaInput } from '../components/ui/MangaInput';
import { Mail, Lock, Sparkles, Zap, ArrowLeft } from 'lucide-react';
import { IntlText } from '../i18n';

export function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => setIsLoading(false), 1500);
  };

  return (
    <div className="min-h-screen w-full bg-[#FFA502] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle, #000 2px, transparent 2.5px)',
        backgroundSize: '24px 24px'
      }}></div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 text-black animate-bounce hidden md:block">
        <Sparkles size={48} strokeWidth={3} />
      </div>
      <div className="absolute bottom-10 right-10 text-black animate-pulse hidden md:block">
        <Zap size={48} strokeWidth={3} />
      </div>

      {/* Main Card */}
      <div className="w-full max-w-md bg-white border-4 border-black rounded-xl shadow-[12px_12px_0px_0px_#000] relative z-10 overflow-hidden">
        {/* Card Header */}
        <div className="bg-[#FF4757] p-6 border-b-4 border-black text-center relative">
          <div className="absolute top-2 right-2 text-white/30">
            <Sparkles size={64} />
          </div>
          <h1 className="text-4xl font-black text-white uppercase italic tracking-tighter drop-shadow-[2px_2px_0px_#000]">
            <IntlText en="Welcome Back!" ja="お帰りなさい！" vi="Chào mừng trở lại!" />
          </h1>
          <p className="text-white font-bold mt-2 text-sm">
            <IntlText en="Login to access your VRoid collection" ja="ログインしてVRoidコレクションにアクセス" vi="Đăng nhập để truy cập bộ sưu tập VRoid" />
          </p>
        </div>

        <div className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <MangaInput
              label="Email Address"
              type="email"
              placeholder="abc@example.com"
              value={formData.email}
              onChange={e => setFormData({
                ...formData,
                email: e.target.value
              })}
              icon={<Mail size={20} strokeWidth={3} />}
              required
            />

            <div className="space-y-1">
              <MangaInput
                label="Password"
                type="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={e => setFormData({
                  ...formData,
                  password: e.target.value
                })}
                icon={<Lock size={20} strokeWidth={3} />}
                required
              />
              <div className="flex justify-end">
                <Link to="/forgot-password" className="text-sm font-bold text-[#3742FA] hover:underline decoration-2">
                  <IntlText en="Forgot Password?" ja="パスワードをお忘れですか？" vi="Quên mật khẩu?" />
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-2 mb-4">
              <div className="relative flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  className="peer h-6 w-6 appearance-none border-4 border-black rounded bg-white checked:bg-[#3742FA] checked:border-black transition-all cursor-pointer"
                />
                <svg className="absolute w-4 h-4 text-white pointer-events-none hidden peer-checked:block left-1 top-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <label htmlFor="remember" className="font-bold text-sm cursor-pointer select-none">
                <IntlText en="Remember me" ja="ログイン情報を保存" vi="Ghi nhớ tôi" />
              </label>
            </div>

            <MangaButton variant="primary" className="w-full text-xl py-4" type="submit">
              {isLoading ? (
                <IntlText en="LOADING..." ja="読み込み中..." vi="Đang tải..." />
              ) : (
                <IntlText en="LOGIN NOW!" ja="今すぐログイン!" vi="Đăng nhập ngay!" />
              )}
            </MangaButton>

            <div className="relative flex py-2 items-center">
              <div className="flex-grow border-t-4 border-black"></div>
              <span className="flex-shrink mx-4 text-black font-black text-sm">
                <IntlText en="OR LOGIN WITH" ja="または以下でログイン" vi="Hoặc đăng nhập với" />
              </span>
              <div className="flex-grow border-t-4 border-black"></div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => window.location.href = 'http://localhost:3001/api/auth/facebook'}
                className="flex items-center justify-center gap-2 p-3 border-4 border-black rounded-lg bg-[#1877F2] hover:bg-[#166FE5] text-white transition-all font-black shadow-[4px_4px_0px_0px_#000] hover:shadow-[6px_6px_0px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px]"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <span className="hidden sm:inline">FACEBOOK</span>
              </button>
              <button
                type="button"
                onClick={() => window.location.href = 'http://localhost:3001/api/auth/google'}
                className="flex items-center justify-center gap-2 p-3 border-4 border-black rounded-lg bg-white hover:bg-gray-50 transition-all font-black shadow-[4px_4px_0px_0px_#000] hover:shadow-[6px_6px_0px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px]"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                <span className="hidden sm:inline">GOOGLE</span>
              </button>
            </div>
          </form>

          <div className="mt-8 text-center">
            <p className="font-bold text-sm">
              <IntlText en="Don't have an account?" ja="アカウントをお持ちでないですか？" vi="Bạn chưa có tài khoản?" />{' '}
              <Link to="/register" className="text-[#FF4757] underline decoration-4 decoration-[#FF4757] underline-offset-2 hover:text-black hover:decoration-black transition-all">
                <IntlText en="REGISTER HERE" ja="こちらで登録" vi="Đăng ký tại đây" />
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Return to Main Page - Outside the card */}
      <Link
        to="/"
        className="fixed bottom-8 left-8 flex items-center gap-2 text-black font-black hover:text-white transition-all group z-20"
      >
        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" strokeWidth={3} />
        <span className="text-sm uppercase tracking-wide">
          <IntlText en="Return to Main Page" ja="メインページに戻る" vi="Quay lại trang chính" />
        </span>
      </Link>
    </div>
  );
}