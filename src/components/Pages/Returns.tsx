
import { Link } from "react-router-dom";

export default function ReturnsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Возврат и обмен</h1>

      <div className="space-y-8 text-gray-700 text-lg">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Право на возврат</h2>
          <p>Согласно закону «О защите прав потребителей», вы имеете право вернуть товар в течение <strong>14 дней</strong> с момента получения, если он не подошёл по размеру, цвету, форме или другим характеристикам.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Условия возврата</h2>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Товар должен быть в неповреждённом виде, с ярлыками и упаковкой</li>
            <li>Не принимаются товары личного пользования (нижнее бельё, маски, наушники)</li>
            <li>Наличие чека не обязательно — достаточно номера заказа</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Как оформить возврат?</h2>
          <ol className="list-decimal pl-6 space-y-2 mt-2">
            <li>Зайдите в личный кабинет → «Мои заказы»</li>
            <li>Выберите нужный товар и нажмите «Запросить возврат»</li>
            <li>Прикрепите фото товара (если требуется)</li>
            <li>Мы отправим вам этикетку для отправки</li>
            <li>После проверки — возврат средств на карту в течение 5–10 дней</li>
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Обмен</h2>
          <p>Обмен возможен только на аналогичный товар. Если нужного размера нет — мы вернём деньги.</p>
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