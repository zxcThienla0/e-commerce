import { Link } from "react-router-dom";

export default function ShippingPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Доставка</h1>

      <div className="space-y-8 text-gray-700 text-lg">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Стоимость доставки</h2>
          <p>• Бесплатная доставка при заказе от <strong>3 000 ₽</strong></p>
          <p>• При заказе ниже — <strong>299 ₽</strong> по всей России</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Сроки доставки</h2>
          <p>• Москва, Санкт-Петербург — <strong>1–2 дня</strong></p>
          <p>• Другие города — <strong>3–7 дней</strong></p>
          <p>• Склады по всей стране — гарантируем точность сроков</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Как получить заказ?</h2>
          <p>Вы можете выбрать:</p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Курьерская доставка до двери</li>
            <li>Пункт выдачи (ПВЗ) — более 10 000 точек по РФ</li>
            <li>Почта России (для удалённых регионов)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Отслеживание</h2>
          <p>После оформления заказа вы получите SMS и email с трек-номером. 
             Отследить статус можно в личном кабинете или на сайте перевозчика.</p>
        </section>
      </div>

      <div className="mt-12 text-center">
        <Link to="/" onClick={() => {window.scrollTo(0, 0);}} className="text-blue-600 hover:text-blue-800 font-medium underline">
          ← Вернуться на главную
        </Link>
      </div>
    </div>
  );
}