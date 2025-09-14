import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Searching() {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/e-commerce/shop?search=${encodeURIComponent(search.trim())}`);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8">
      <section className="mb-8 text-center md:text-left">
        <p className="inline-block text-sm md:text-base font-medium text-gray-700 uppercase tracking-wide">
          <button
            type="button"
            onClick={() => {navigate('/e-commerce/shop?gender=man');
              window.scrollTo(0, 0);}
            }
            className="hover:text-blue-600 hover:underline underline-offset-2 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1"
          >
            man
          </button>
        </p>
        <span className="mx-2 text-gray-400 hidden md:inline">|</span>
        <p className="inline-block text-sm md:text-base font-medium text-gray-700 uppercase tracking-wide">
          <button
            type="button"
            onClick={() => {navigate('/e-commerce/shop?gender=woman');
              window.scrollTo(0, 0);}
            }
            className="hover:text-blue-600 hover:underline underline-offset-2 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1"
          >
            women
          </button>
        </p>
      </section>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto md:mx-0">
        <div className="relative">
          <input
            type="search"
            name="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search products..."
            aria-label="Поиск товаров"
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-sm bg-white shadow-sm transition-colors"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </form>
    </div>
  );
}