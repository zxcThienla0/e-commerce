import { useCart } from "./CartContext";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useState } from "react";
import type { CartItem } from '../types/CardItems';

interface OrderFormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  paymentMethod: "card" | "cash";
}

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, totalPrice } = useCart();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<OrderFormData>({
    defaultValues: {
      paymentMethod: "card",
    },
  });

  const onSubmit: SubmitHandler<OrderFormData> = async (data) => {
    if (cartItems.length === 0) {
      alert("Ваша корзина пуста!");
      return;
    }

    console.log("Заказ оформлен:", { items: cartItems, ...data, totalPrice });


    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="max-w-4xl mx-auto p-4 sm:p-6 md:p-8 min-h-screen">
        <div className="bg-green-50 border border-green-200 text-green-800 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-2">✅ Заказ успешно оформлен!</h2>
          <p className="mb-4">Спасибо за покупку. Наш менеджер свяжется с вами в ближайшее время.</p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md"
          >
            Вернуться к корзине
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6 min-h-100">
      <h1 className="text-3xl font-bold mb-8 text-center">🛒 Оформление заказа</h1>

      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Товары в корзине</h2>
        {cartItems.length === 0 ? (
          <p className="text-gray-500">Ваша корзина пуста.</p>
        ) : (
          <div className="space-y-4">
            {cartItems.map((item: CartItem) => (
              <div
                key={item.id}
                className="flex max-sm:flex-col items-center justify-between p-4 bg-gray-50 rounded-lg mb-4"
              >
                <div className="flex sm:flex-row items-start space-y-2 sm:space-y-0 sm:space-x-4 w-50%">
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-16 h-16 object-cover rounded sm:w-20 sm:h-20"
                    />
                  )}
                  <div>
                    <h3 className="font-medium text-sm sm:text-base line-clamp-2 pl-2">{item.title}</h3>
                    <p className="text-gray-600 text-xs sm:text-sm pl-2">Цена: {item.price} ₽</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-3 mt-2 sm:mt-0">
                  <div className="flex items-center space-x-2">
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                      className="px-2 py-1 bg-gray-200 text-gray-700 rounded text-sm hover:bg-gray-300 transition"
                    >
                      −
                    </button>
                    <span className="w-8 text-center font-medium">{item.quantity}</span>
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-2 py-1 bg-gray-200 text-gray-700 rounded text-sm hover:bg-gray-300 transition"
                    >
                      +
                    </button>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeFromCart(item.id)}
                    className="ml-2 text-red-500 hover:text-red-700 text-sm font-medium"
                  >
                    Удалить
                  </button>
                  <div className="font-bold text-lg mt-1 sm:mt-0">
                    {(item.price * item.quantity).toLocaleString()}₽
                  </div>
                </div>
              </div>
            ))}
            <div className="text-right mt-4">
              <p className="text-xl font-bold">Итого: {totalPrice.toLocaleString()} ₽</p>
            </div>
          </div>
        )}
      </div>

      {cartItems.length > 0 && (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white p-6 rounded-lg shadow-md space-y-6"
        >
          <h2 className="text-2xl font-semibold">Данные для доставки</h2>

          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Имя и фамилия *
            </label>
            <input
              id="name"
              {...register("name", { required: "Это поле обязательно" })}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.name ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
                }`}
              placeholder="Иван Иванов"
            />
            {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email *
            </label>
            <input
              id="email"
              type="email"
              {...register("email", {
                required: "Это поле обязательно",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Введите корректный email",
                },
              })}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.email ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
                }`}
              placeholder="example@mail.com"
            />
            {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Телефон *
            </label>
            <input
              id="phone"
              {...register("phone", { required: "Это поле обязательно" })}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.phone ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
                }`}
              placeholder="+7 (999) 123-45-67"
            />
            {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>}
          </div>

          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
              Адрес доставки *
            </label>
            <textarea
              id="address"
              {...register("address", { required: "Это поле обязательно" })}
              rows={3}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.address
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-blue-500"
                }`}
              placeholder="г. Москва, ул. Ленина, д. 10, кв. 5"
            ></textarea>
            {errors.address && <p className="mt-1 text-sm text-red-500">{errors.address.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Способ оплаты</label>
            <div className="space-y-3">
              <label className="flex items-center">
                <input
                  type="radio"
                  value="card"
                  {...register("paymentMethod")}
                  className="mr-2"
                />
                Банковской картой онлайн
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  value="cash"
                  {...register("paymentMethod")}
                  className="mr-2"
                />
                Наличными при получении
              </label>
            </div>
          </div>

          <div className="flex justify-between items-center pt-4 border-t">
            <p className="text-xl font-bold">К оплате: {totalPrice.toLocaleString()} ₽</p>
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white px-8 py-3 rounded-md font-medium transition"
            >
              {isSubmitting ? "Отправка..." : "Оформить заказ"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}