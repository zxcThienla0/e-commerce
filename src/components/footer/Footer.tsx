import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-[#3a3a3a50] text-black py-12 px-4 sm:px-6 lg:px-8 mt-16">
            <div className="container mx-auto max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                    <div>
                        <h3 className="text-black text-lg font-bold mb-4">YourShop</h3>
                        <p className="text-sm text-gray-700">
                            Качественные товары по выгодным ценам.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-black text-sm font-semibold mb-4">Информация</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/about" onClick={() => {window.scrollTo(0, 0)}} className="hover:text-white transition-colors">О нас</Link></li>
                            <li><Link to="/shipping" onClick={() => {window.scrollTo(0, 0)}} className="hover:text-white transition-colors">Доставка</Link></li>
                            <li><Link to="/returns" onClick={() => {window.scrollTo(0, 0)}} className="hover:text-white transition-colors">Возврат</Link></li>
                            <li><Link to="/faq" onClick={() => {window.scrollTo(0, 0)}} className="hover:text-white transition-colors">Частые вопросы</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-black text-sm font-semibold mb-4">Контакты</h4>
                        <ul className="space-y-2 text-sm">
                            <li>📧 example@yourshop.com</li>
                            <li>📞 +7 (999) 123-45-67</li>
                            <li>📍 Москва, Россия</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-black text-sm font-semibold mb-4">Мы в соцсетях</h4>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-700 hover:text-white transition-colors">
                                Instagram
                            </a>
                            <a href="#" className="text-gray-700 hover:text-white transition-colors">
                                Telegram
                            </a>
                            <a href="#" className="text-gray-700 hover:text-white transition-colors">
                                VK
                            </a>
                        </div>
                    </div>

                </div>

                <div className="border-t border-black mt-12 pt-8 text-center text-sm text-gray-700">
                    © {new Date().getFullYear()} YourShop. Все права защищены.
                    <br />
                    <span className="mt-2 block">
                        <Link to="/privacy" onClick={() => {window.scrollTo(0, 0)}} className="hover:text-white underline">Политика конфиденциальности</Link> •
                        <Link to="/terms" onClick={() => {window.scrollTo(0, 0)}} className="hover:text-white underline ml-2">Условия использования</Link>
                    </span>
                </div>

                <div className="border-t border-black mt-12 pt-8 text-center text-xs text-gray-700">
                    <p>Технологии: React • TypeScript • Tailwind CSS • React Hook Form • Axios</p>
                </div>
            </div>
        </footer>
    );
}