import type { Product } from '../../types/CardDataType';
import cartIcon from '../../../../pngshki/cart.png';
import { useCart } from '../../cart/CartContext';
import { useState } from 'react';
import { createPortal } from 'react-dom';

interface CardProps {
  product: Product;
}

export const Card: React.FC<CardProps> = ({ product }) => {
  const { title, price, image, size, gender } = product;
  const { addToCart } = useCart();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="group flex flex-col bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
        <div className="relative overflow-hidden bg-gray-50 aspect-square"
          onClick={() => setIsModalOpen(true)}>

          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />

          <button
            className="absolute top-3 right-3 p-2 bg-white bg-opacity-90 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
            onClick={(e) => {
              e.stopPropagation();
              addToCart(product);
            }}
            aria-label="Добавить в корзину"
          >
            <img src={cartIcon} alt="Добавить в корзину" className="w-5 h-5" />
          </button>
        </div>

        <div className="p-4 flex-1 flex flex-col">
          <h3 className="text-sm font-medium text-gray-900 line-clamp-2 mb-1">
            {title}
          </h3>
          <p className="text-base font-bold text-gray-900 mb-2">
            {price.toLocaleString()} ₽
          </p>

          {(gender || size?.length) && (
            <div className="flex flex-wrap gap-1 mt-auto pt-2 border-t border-gray-100">
              {gender && (
                <span className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-600">
                  {gender === 'man' ? 'Мужской' : gender === 'woman' ? 'Женский' : 'Унисекс'}
                </span>
              )}
              {size && size.length > 0 && (
                <span className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-600">
                  {size.map((s) => (
                    <span
                      key={s}
                      className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-600"
                    >
                      {s}
                    </span>
                  ))}
                </span>
              )}
            </div>
          )}
        </div>
      </div>

      {isModalOpen &&
        createPortal(
          <div
            className="fixed inset-0 bg-[#46464696] z-50 flex items-center justify-center p-4"
            onClick={() => setIsModalOpen(false)}
            aria-modal="true"
            role="dialog"
            aria-labelledby="product-detail-title"
          >
            <div
              className="bg-white rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto transform transition-all duration-300 scale-100"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors z-10"
                  aria-label="Закрыть"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-500"
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

                <div className="w-full h-64 bg-gray-50 rounded-lg flex items-center justify-center mb-6 overflow-hidden">
                  <img
                    src={image}
                    alt={title}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                <h2 id="product-detail-title" className="text-2xl font-bold text-gray-900 mb-2">
                  {title}
                </h2>
                <p className="text-2xl font-bold text-gray-900 mb-4">
                  {price.toLocaleString()} ₽
                </p>

                {gender && (
                  <p className="text-gray-700 mb-2">
                    <strong className="text-gray-600">Пол:</strong>{' '}
                    {gender === 'man' ? 'Мужской' : gender === 'woman' ? 'Женский' : 'Унисекс'}
                  </p>
                )}

                {size && size.length > 0 && (
                  <div className="flex flex-wrap gap-1 mt-2 pt-2 border-t border-gray-100 mb-4">
                    {size.map((s) => (
                      <span
                        key={s}
                        className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-600"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                )}

                <button
                  className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition flex items-center justify-center gap-2 font-medium"
                  onClick={() => {
                    addToCart(product);
                    setIsModalOpen(false);
                  }}
                >
                  Добавить в корзину
                </button>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
};