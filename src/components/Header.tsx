import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Search, Zap, Globe } from 'lucide-react';
import { FaUser, FaSignOutAlt } from 'react-icons/fa';
import { MangaButton } from './ui/MangaButton';
import { IntlText, useI18n } from '../i18n';

interface User {
  id: string;
  email: string;
  name?: string;
  role: string;
}

export function Header() {
  const { lang, setLang } = useI18n();
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const languages = [
    { code: 'en', label: 'EN', flag: '🇬🇧' },
    { code: 'ja', label: '日本語', flag: '🇯🇵' },
    { code: 'vi', label: 'VI', flag: '🇻🇳' }
  ];

  useEffect(() => {
    // Check if user is logged in
    const token = localStorage.getItem('token');
    if (token) {
      // Fetch user profile
      fetch('http://localhost:3001/api/auth/profile', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
        .then(res => res.json())
        .then(data => setUser(data))
        .catch(() => {
          // Token invalid, clear it
          localStorage.removeItem('token');
        });
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
    setShowDropdown(false);
    navigate('/login');
  };

  const getInitials = (name?: string, email?: string) => {
    if (name) {
      return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
    }
    if (email) {
      return email[0].toUpperCase();
    }
    return 'U';
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b-4 border-anime-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="flex-shrink-0 flex items-center"
          >
            <Link to="/">
              <div className="bg-anime-red text-white px-4 py-2 transform -skew-x-12 border-4 border-anime-black shadow-pop-blue">
                <span className="block transform skew-x-12 font-black text-2xl tracking-tighter">
                  V-MARKET
                  <span className="text-anime-yellow">!</span>
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-1 flex-shrink">
            {[
              { k: 'Shop', path: '/shop' },
              { k: 'AI Studio', path: '/ai-studio' },
              { k: 'About', path: '/about' },
              { k: 'Contact', path: '/contact' }
            ].map(({ k, path }, i) => (
              <Link key={k} to={path}>
                <motion.div
                  initial={{ y: -50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="px-3 py-2 font-bold text-sm text-anime-black hover:text-anime-blue hover:bg-yellow-100 border-2 border-transparent hover:border-anime-black hover:shadow-pop-red transition-all transform hover:-rotate-2 rounded-sm whitespace-nowrap"
                >
                  <IntlText
                    en={k}
                    ja={k === 'Shop' ? 'ショップ' : k === 'AI Studio' ? 'AIスタジオ' : k === 'About' ? '概要' : 'お問い合わせ'}
                    vi={k === 'Shop' ? 'Cửa hàng' : k === 'AI Studio' ? 'AI Studio' : k === 'About' ? 'Giới thiệu' : 'Liên hệ'}
                  />
                </motion.div>
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-3 flex-shrink-0">
            {/* Search Bar */}
            <motion.div
              className="hidden md:flex relative"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
            >
              <input
                type="text"
                placeholder={lang === 'ja' ? '検索...' : lang === 'vi' ? 'Tìm kiếm...' : 'Search...'}
                className="w-48 pl-4 pr-10 py-2 border-3 border-anime-black font-bold focus:outline-none focus:shadow-pop-yellow transition-shadow"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-anime-black" />
            </motion.div>

            {/* User Avatar or Login Button */}
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="flex items-center gap-2 px-3 py-2 border-3 border-anime-black bg-anime-red font-black text-white hover:bg-red-600 shadow-pop-sm hover:shadow-pop-blue transition-all"
                >
                  <div className="w-8 h-8 bg-white rounded-full border-2 border-anime-black flex items-center justify-center font-black text-anime-red text-sm">
                    {getInitials(user.name, user.email)}
                  </div>
                  <span className="hidden sm:inline text-sm">
                    {user.name || user.email.split('@')[0]}
                  </span>
                </button>

                {/* Dropdown Menu */}
                {showDropdown && (
                  <>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="fixed inset-0 z-40"
                      onClick={() => setShowDropdown(false)}
                    />
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 mt-2 w-64 bg-white border-4 border-anime-black shadow-pop-blue z-50"
                    >
                      <div className="p-4 border-b-4 border-anime-black bg-anime-red">
                        <p className="font-black text-white text-sm">LOGGED IN AS</p>
                        <p className="font-bold text-white truncate">{user.email}</p>
                        {user.name && (
                          <p className="font-bold text-white/80 text-sm">{user.name}</p>
                        )}
                      </div>

                      <div className="p-2">
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 }}
                        >
                          <Link
                            to="/profile"
                            onClick={() => setShowDropdown(false)}
                            className="flex items-center gap-3 p-3 rounded hover:bg-yellow-100 transition-colors font-bold group"
                          >
                            <FaUser className="text-anime-red group-hover:scale-110 transition-transform" />
                            <span>PROFILE SETTINGS</span>
                          </Link>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.15 }}
                        >
                          <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={handleLogout}
                            className="w-full flex items-center gap-3 p-3 rounded hover:bg-red-50 transition-colors font-bold text-red-600 group"
                          >
                            <motion.div
                              animate={{ rotate: [0, -10, 10, -10, 0] }}
                              transition={{ duration: 0.5 }}
                              className="group-hover:animate-pulse"
                            >
                              <FaSignOutAlt className="group-hover:scale-110 transition-transform" />
                            </motion.div>
                            <span>LOGOUT</span>
                          </motion.button>
                        </motion.div>
                      </div>
                    </motion.div>
                  </>
                )}
              </div>
            ) : (
              <Link to="/login">
                <MangaButton variant="accent" size="sm" className="hidden sm:flex items-center gap-2">
                  <Zap className="w-4 h-4 fill-current" />
                  <span>
                    <IntlText en="Login" ja="ログイン" vi="Đăng nhập" />
                  </span>
                </MangaButton>
              </Link>
            )}

            {/* Shopping Cart */}
            <Link to="/cart">
              <MangaButton variant="secondary" size="sm" className="relative">
                <ShoppingCart className="w-5 h-5" />
                <span className="absolute -top-3 -right-3 bg-anime-red text-white text-xs font-black w-6 h-6 flex items-center justify-center rounded-full border-2 border-anime-black">
                  0
                </span>
              </MangaButton>
            </Link>

            {/* Language Switcher */}
            <div className="relative">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-2 px-3 py-2 border-3 border-anime-black bg-anime-yellow font-black text-anime-black hover:bg-yellow-300 shadow-pop-sm hover:shadow-pop-blue transition-all"
                aria-label="Language"
              >
                <Globe className="w-5 h-5" />
                <span className="text-sm">
                  {languages.find(l => l.code === lang)?.flag}
                </span>
                <span className="hidden sm:inline text-sm">
                  {languages.find(l => l.code === lang)?.label}
                </span>
                <motion.span
                  animate={{ rotate: isLangOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-xs"
                >
                  ▼
                </motion.span>
              </motion.button>

              <AnimatePresence>
                {isLangOpen && (
                  <>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="fixed inset-0 z-40"
                      onClick={() => setIsLangOpen(false)}
                    />
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 mt-2 w-40 bg-white border-4 border-anime-black shadow-pop-blue z-50"
                    >
                      {languages.map((language, index) => (
                        <motion.button
                          key={language.code}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          onClick={() => {
                            setLang(language.code as 'en' | 'ja' | 'vi');
                            setIsLangOpen(false);
                          }}
                          className={`w-full flex items-center gap-3 px-4 py-3 font-bold text-left transition-all border-b-2 border-anime-black last:border-b-0 ${lang === language.code
                            ? 'bg-anime-yellow text-anime-black'
                            : 'bg-white text-anime-black hover:bg-anime-blue hover:text-white'
                            }`}
                        >
                          <span className="text-xl">{language.flag}</span>
                          <span className="text-sm">{language.label}</span>
                          {lang === language.code && (
                            <motion.span
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="ml-auto text-anime-red text-lg"
                            >
                              ✓
                            </motion.span>
                          )}
                        </motion.button>
                      ))}
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
