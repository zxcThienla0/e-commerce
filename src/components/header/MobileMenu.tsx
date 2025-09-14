import { Link } from 'react-router-dom';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div
        className="absolute inset-0 bg-[#4242424d] bg-opacity-50 transition-opacity"
        onClick={onClose}
      />

      <div className="absolute left-0 top-0 h-full w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out">
        <div className="flex justify-end p-4">
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
            aria-label="Закрыть меню"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <nav className="px-6 py-8 space-y-6">
          <Link
            to="/e-commerce/"
            onClick={onClose}
            className="block text-lg font-medium text-gray-800 hover:text-blue-600 transition-colors"
          >
            Home
          </Link>

          <Link
            to="/e-commerce/shop"
            onClick={onClose}
            className="block text-lg font-medium text-gray-800 hover:text-blue-600 transition-colors"
          >
            Catalog
          </Link>
        </nav>

        <div className="px-6 pt-8 border-t border-gray-100">
          <button className="w-full py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition">
            Войти
          </button>
        </div>
      </div>
    </div>
  );
}