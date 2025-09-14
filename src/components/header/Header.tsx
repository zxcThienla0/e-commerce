import { useState } from 'react';
import { useCart } from '../cart/CartContext';
import MobileMenu from './MobileMenu';
import { Link } from 'react-router-dom';

import navBtn from '../../../pngshki/Group36.png';
import Logo from '../../../pngshki/Group53.png';
import Favorite from '../../../pngshki/Group8.png';
import Corzina from '../../../pngshki/Group7.png';
import Accaunt from '../../../pngshki/Group6.png';
import CartDrawer from './CartDrawer';

export default function Header() {
  const { totalItems } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-6 md:space-x-8 order-0 md:order-0">
          <button
            className="md:hidden w-8 h-8 flex items-center justify-center"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Открыть меню"
          >
            <img src={navBtn} alt="Открыть меню" className="w-full h-auto object-contain" />
          </button>

          <div className="hidden md:flex items-center space-x-6 text-sm font-medium text-gray-700">
            <Link to="/" className="hover:text-blue-600 hover:underline underline-offset-2 transition-colors">
              Home
            </Link>
            <Link to="/shop" className="hover:text-blue-600 hover:underline underline-offset-2 transition-colors">
              Catalog
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-center md:order-1 max-sm:hidden">
          <Link to="/e-commerce/">
            <img src={Logo} alt="Логотип магазина" className="w-10 h-10 md:w-10 md:h-10 hover:scale-110 transition-transform duration-300" />
          </Link>
        </div>

        <div className="flex items-center space-x-4 md:space-x-6 order-2 md:order-2">
          <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
            <img src={Favorite} alt="Избранное" className="w-8 h-8 md:w-10 md:h-10" />
          </button>

          <button
            type="button"
            className="relative p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Открыть корзину"
            onClick={() => setIsCartOpen(prev => !prev)}
          >
            <img src={Corzina} alt="Корзина" className="w-8 h-8 md:w-10 md:h-10" />

            {totalItems > 0 && (
              <span
                className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center"
              >
                {totalItems}
              </span>
            )}
          </button>

          <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
            <img src={Accaunt} alt="Аккаунт" className="w-8 h-8 md:w-10 md:h-10" />
          </button>
        </div>
      </div>

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      {isCartOpen && <CartDrawer onClose={() => setIsCartOpen(false)} />}
    </header>
  );
}