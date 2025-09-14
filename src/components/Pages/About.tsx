import { Link } from 'react-router-dom';

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">О нас</h1>
      
      <p className="text-lg text-gray-700 leading-relaxed mb-8">
        Мы — команда энтузиастов, создающих удобные и доступные онлайн-магазины для каждого. 
        Наша миссия — сделать покупки простыми, прозрачными и приятными.
      </p>

      <p className="text-lg text-gray-700 leading-relaxed mb-8">
        С 2023 года мы помогаем тысячам клиентов находить качественные товары по справедливым ценам. 
        Мы не просто продаем — мы заботимся о том, чтобы каждый заказ приносил радость.
      </p>

      <div className="bg-gray-50 p-8 rounded-xl mt-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Наши ценности</h2>
        <ul className="space-y-3 text-gray-700">
          <li>✅ Честные цены — без скрытых переплат</li>
          <li>✅ Быстрая доставка — до 3 дней по России</li>
          <li>✅ Качественная поддержка — всегда на связи</li>
          <li>✅ Экологичная упаковка — меньше пластика</li>
        </ul>
      </div>

      <div className="mt-12 text-center">
        <Link to="/" onClick={() => {window.scrollTo(0, 0);}} className="text-blue-600 hover:text-blue-800 font-medium underline">
          ← Вернуться на главную
        </Link>
      </div>
    </div>
  );
}