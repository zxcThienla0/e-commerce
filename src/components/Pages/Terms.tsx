import { Link } from "react-router-dom";

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Условия использования сайта</h1>

      <div className="prose prose-lg text-gray-700 space-y-6">
        <p>
          Используя сайт YourShop, вы соглашаетесь с условиями настоящих Правил.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900">1. Общие положения</h2>
        <p>
          Сайт предназначен исключительно для личного пользования. Любое коммерческое использование запрещено.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900">2. Заказы</h2>
        <p>
          Все заказы считаются заключёнными с момента подтверждения оплаты. Мы оставляем за собой право отказать в оформлении заказа без объяснения причин.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900">3. Ответственность</h2>
        <p>
          Мы не несём ответственность за повреждение товара при транспортировке, если оно вызвано действиями третьих лиц (перевозчиков).
        </p>

        <h2 className="text-2xl font-semibold text-gray-900">4. Интеллектуальная собственность</h2>
        <p>
          Все материалы сайта (тексты, изображения, логотипы) являются интеллектуальной собственностью OurShop. Копирование запрещено.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900">5. Изменения</h2>
        <p>
          Мы можем вносить изменения в условия без предварительного уведомления. Актуальная версия всегда доступна на этой странице.
        </p>

        <p className="text-sm text-gray-500 mt-8">
          Последнее обновление: {new Date().toLocaleDateString('ru-RU')}
        </p>
      </div>

      <div className="mt-12 text-center">
        <Link to="/e-commerce/" onClick={() => {window.scrollTo(0, 0);}} className="text-blue-600 hover:text-blue-800 font-medium underline">
          ← Вернуться на главную
        </Link>
      </div>
    </div>
  );
}