import { useState, useEffect } from "react";
import { Card } from './newCollection/card';
import type { Product } from '../types/CardDataType';
import { useNavigate } from 'react-router-dom';

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

const ManCollection = ({ items, itemsPerSlide = 3 }: SliderProps) => {

  const navigate = useNavigate();

  const { cardWidth, gap } = useAdaptiveCardSize();

  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = 6;
  const maxIndex = Math.max(0, totalItems - itemsPerSlide);

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
    <div className="mt-15 lg:px-12.5 max-lg:px-2">
      <div className="flex justify-between mb-4 items-baseline-last">
        <div className="uppercase text-5xl">
          <p>Man</p>
          <p>Shirt</p>
        </div>
        <button onClick={() => {
          navigate('/e-commerce/shop?gender=man');
          window.scrollTo(0, 0);
        }} className="text-[#5E5E5E] hover:opacity-75 transition-[0.3s]">See all</button>
      </div>
      <div style={{
        display: 'flex',
        overflow: 'hidden',
        width: '100%',
      }}>
        <div style={{
          display: 'flex',
          transition: 'transform 0.5s ease',
          transform: `translateX(-${currentIndex * (cardWidth + gap)}px)`,
          width: `${(100 * totalItems) / itemsPerSlide}%`,
          gap: `${gap}px`,
        }}>
          {items.filter(item => item.gender === "man").slice(0, 7).map((item) => (
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
      <div className="textv2 text-[16px] flex justify-center mt-4">
        <button className="w-10 h-11 text-2xl border-1 mr-2 hover:scale-110 transition-[1]"
          onClick={prev}
          disabled={currentIndex === 0}>{'<'}</button>
        <button className="w-10 h-11 text-2xl border-1 hover:scale-110 transition-[1]"
          onClick={next}
          disabled={currentIndex >= maxIndex}>{'>'}</button>
      </div>
    </div>
  )
}

export default ManCollection;