import { Link } from "react-router-dom";

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Политика конфиденциальности</h1>

      <div className="prose prose-lg text-gray-700 space-y-6">
        <p>
          Настоящая Политика конфиденциальности определяет порядок сбора, хранения и использования персональных данных пользователей сайта YourShop.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900">1. Сбор данных</h2>
        <p>
          Мы собираем следующие данные: имя, email, телефон, адрес доставки, история заказов. Эти данные необходимы для обработки заказа и связи с вами.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900">2. Цель обработки</h2>
        <p>
          Персональные данные используются исключительно для выполнения договора купли-продажи, отправки товаров, предоставления сервиса поддержки и информирования о новых акциях (с вашего согласия).
        </p>

        <h2 className="text-2xl font-semibold text-gray-900">3. Хранение данных</h2>
        <p>
          Данные хранятся до момента вашего запроса на удаление. После удаления они не могут быть восстановлены.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900">4. Ваши права</h2>
        <p>
          Вы имеете право:
          <ul className="list-disc pl-6 mt-2">
            <li>Запросить доступ к своим данным</li>
            <li>Изменить или удалить их</li>
            <li>Отказаться от маркетинговых рассылок</li>
          </ul>
        </p>

        <h2 className="text-2xl font-semibold text-gray-900">5. Контакты</h2>
        <p>
          По всем вопросам обращайтесь: <strong>support@yourshop.com</strong>
        </p>

        <p className="text-sm text-gray-500 mt-8">
          Последнее обновление: {new Date().toLocaleDateString('ru-RU')}
        </p>
      </div>

      <div className="mt-12 text-center">
        <Link to="/" onClick={() => {window.scrollTo(0, 0);}} className="text-blue-600 hover:text-blue-800 font-medium underline">
          ← Вернуться на главную
        </Link>
      </div>
    </div>
  );
}