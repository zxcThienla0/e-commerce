import { Link } from "react-router-dom";

export default function FAQPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Частые вопросы</h1>

      <div className="space-y-8">
        {[
          {
            q: "Как узнать статус заказа?",
            a: "Вы получите SMS и email с трек-номером после оформления. Также его можно посмотреть в личном кабинете."
          },
          {
            q: "Можно ли изменить адрес доставки после оформления?",
            a: "Да, если заказ ещё не отправлен. Обратитесь в поддержку через чат или телефон — мы поможем."
          },
          {
            q: "Какие способы оплаты доступны?",
            a: "Банковской картой, наличными при получении, Apple Pay, Google Pay и через СБП (Система быстрых платежей)."
          },
          {
            q: "Есть ли скидки и акции?",
            a: "Да! Подпишитесь на наш Telegram-канал или рассылку — там публикуются эксклюзивные предложения и купоны."
          },
          {
            q: "Работаете ли вы за пределами России?",
            a: "Сейчас мы доставляем только по территории Российской Федерации. Планируем расширение в 2025 году."
          },
          {
            q: "Как связаться с поддержкой?",
            a: "Напишите нам на support@yourshop.com или позвоните: +7 (999) 123-45-67 (понедельник–воскресенье, 9:00–21:00)."
          }
        ].map((item, index) => (
          <div key={index} className="border-b border-gray-200 pb-6 last:border-0">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">{item.q}</h2>
            <p className="text-gray-700">{item.a}</p>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Link to="/e-commerce/" onClick={() => {window.scrollTo(0, 0);}} className="text-blue-600 hover:text-blue-800 font-medium underline">
          ← Вернуться на главную
        </Link>
      </div>
    </div>
  );
}