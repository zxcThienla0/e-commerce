import { useCart } from '../cart/CartContext';
import { Link } from 'react-router-dom';

interface CartDrawerProps {
  onClose: () => void;
}

export default function CartDrawer({ onClose }: CartDrawerProps) {
  const { cartItems, removeFromCart, updateQuantity, totalPrice } = useCart();

  return (
    <div
      className="fixed inset-0 z-50 flex"
      aria-labelledby="cart-drawer-title"
    >
      <div
        className="absolute inset-0 bg-[#3d3d3d54] transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        className="relative w-full max-w-md bg-white shadow-xl transform transition-transform duration-300 ease-in-out md:max-w-lg lg:max-w-xl"
        role="dialog"
        aria-modal="true"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-3 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          aria-label="Закрыть корзину"
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

        <div className="p-6 pb-4 mb-4">
          <h2 id="cart-drawer-title" className="text-2xl font-bold text-gray-900">
            Корзина
          </h2>
        </div>

        <div className="overflow-y-auto max-h-100 px-6 pb-6">
          {cartItems.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              <p className="text-lg">Ваша корзина пуста</p>
              <p className="mt-2 text-sm">Добавьте товары, чтобы оформить заказ</p>
            </div>
          ) : (
            <ul className="space-y-4">
              {cartItems.map((item) => (
                <li
                  key={item.id}
                  className="flex max-sm:flex-col items-start gap-4 border-b border-gray-100 pb-4 last:border-b-0"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                  />

                  <div className="flex-1 min-w-30">
                    <h3 className="font-medium text-gray-900 text-sm leading-tight line-clamp-2 pl-2">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-gray-600 pl-2">
                      {item.price.toLocaleString()} ₽ × {item.quantity}
                    </p>
                  </div>
                  <div className="flex flex-col sm:items-end space-y-2 pt-2">
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                        disabled={item.quantity <= 1}
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-blue-500"
                        aria-label={`Уменьшить количество ${item.title}`}
                      >
                        −
                      </button>

                      <span className="w-8 text-center text-sm font-medium">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        aria-label={`Увеличить количество ${item.title}`}
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-xs text-red-500 hover:text-red-700 font-medium underline"
                      aria-label={`Удалить ${item.title} из корзины`}
                    >
                      Удалить
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="border-t border-gray-200 px-6 py-6 bg-gray-50">
          <div className="flex justify-between items-center mb-6">
            <span className="text-lg font-semibold text-gray-900">Итого:</span>
            <span className="text-xl font-bold text-gray-900">
              {totalPrice.toLocaleString()} ₽
            </span>
          </div>

          <Link
            to="/cart"
            onClick={onClose}
            className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-medium text-base hover:bg-blue-700 transition-colors mb-4"
          >
            Оформить заказ
          </Link>

          <button
            onClick={onClose}
            className="w-full py-3 text-gray-600 text-center border border-gray-300 rounded-lg font-medium hover:bg-gray-50 transition-colors"
          >
            Продолжить покупки
          </button>
        </div>
      </div>
    </div>
  );
}