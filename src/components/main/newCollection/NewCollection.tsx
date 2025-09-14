import { useState, useEffect } from "react"
import { Card } from './card';
import type { Product } from '../../types/CardDataType';
import { Link } from "react-router-dom";

const useAdaptiveCardSize = () => {
    const [cardWidth, setCardWidth] = useState(400);
    const [gap, setGap] = useState(20);

    useEffect(() => {
        const updateSizes = () => {
            if (window.innerWidth < 640) {
                setCardWidth(300);
                setGap(12);
            } else {
                setCardWidth(400);
                setGap(20);
            }
        };

        updateSizes();
        window.addEventListener('resize', updateSizes);
        return () => window.removeEventListener('resize', updateSizes);
    }, []);

    return { cardWidth, gap };
};

interface SliderProps {
    items: Product[];
    itemsPerSlide?: number;
}

const NewCollection = ({ items, itemsPerSlide = 3 }: SliderProps) => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const totalItems = items.filter(item => item.isNew === true).length;
    const maxIndex = Math.max(0, totalItems - itemsPerSlide);

    const { cardWidth, gap } = useAdaptiveCardSize();
    
    const next = () => {
        if (currentIndex < maxIndex) {
            setCurrentIndex((prev) => prev + 1);
        }
    };

    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prev) => prev - 1);
        }
    };


    return (
        <div className="flex max-xl:flex-col mt-25 lg:px-12.5 max-lg:px-2">
            <div className="uppercase text-5xl flex h-128 xl:w-130 max-xl:h-auto max-xl:mb-4 flex-col justify-between mr-15">
                <div>
                    <p>New</p>
                    <p>Collection</p>
                    <p className="text-[16px] textv2 mt-3">summer</p>
                    <p className="text-[16px] textv2">2024</p>
                </div>
                <div className="textv2 text-[16px] max-xl:hidden">
                    <Link to="/shop" className="mr-8 bg-[url(./pngshki/Vector1.png)] bg-no-repeat bg-[length:30px] bg-[position:calc(90%+8px)_center]
                                bg-[#D9D9D9] max-w-66,25 pl-4 pb-2 pr-20 pt-3 mt-4">Go To Shop</Link>
                    <button className="w-10 h-10 text-2xl border-1 mr-2 hover:scale-110 transition-[1]"
                        onClick={prev}
                        disabled={currentIndex === 0}>{'<'}</button>
                    <button className="w-10 h-10 text-2xl border-1 hover:scale-110 transition-[1]"
                        onClick={next}
                        disabled={currentIndex >= maxIndex}>{'>'}</button>
                </div>
            </div>
            <div className="w-full overflow-hidden flex">
                <div style={{
                    display: 'flex',
                    transition: 'transform 0.5s ease',
                    transform: `translateX(-${currentIndex * (cardWidth + gap)}px)`,
                    width: `${(100 * totalItems) / itemsPerSlide}%`,
                    gap: `${gap}px`,
                }}>
                    {items.filter(item => item.isNew === true).map((item) => (
                        <div
                            key={item.id}
                            style={{
                                flex: `0 0 ${cardWidth}px`,
                                padding: '0 10px',
                            }}
                        >
                            <Card product={item} />
                        </div>
                    ))}
                </div>
            </div>
            <div className="textv2 text-[16px] xl:hidden pt-4">
                <Link to="/e-commerce/shop" className="mr-8 bg-[url(./pngshki/Vector1.png)] bg-no-repeat bg-[length:30px] bg-[position:calc(90%+8px)_center]
                                bg-[#D9D9D9] max-w-66,25 pl-4 pb-2 pr-20 pt-3 mt-4">Go To Shop</Link>
                <button className="w-10 h-10 text-2xl border-1 mr-2 hover:scale-110 transition-[1]"
                    onClick={prev}
                    disabled={currentIndex === 0}>{'<'}</button>
                <button className="w-10 h-10 text-2xl border-1 hover:scale-110 transition-[1]"
                    onClick={next}
                    disabled={currentIndex >= maxIndex}>{'>'}</button>
            </div>
        </div>
    )
}

export default NewCollection