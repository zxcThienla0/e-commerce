import { useState, useMemo, useEffect } from 'react';
import type { Product } from '../../types/CardDataType';
import { Card } from '../newCollection/card';
import { useSearchParams } from 'react-router-dom';

interface CatalogProps {
  items: Product[];
}

export default function Catalog({ items }: CatalogProps) {
  const [searchParams] = useSearchParams();
  const urlSearch = searchParams.get('search');
  const urlGender = searchParams.get('gender') as '' | 'man' | 'woman' | null;

  const [filters, setFilters] = useState({
    gender: '' as '' | 'man' | 'woman',
    size: '' as '' | 'S' | 'M' | 'L' | 'XL',
    minPrice: 0,
    maxPrice: 10000,
    title: urlSearch || '',
  });

  const [tempMin, setTempMin] = useState<string>(filters.minPrice.toString());
  const [tempMax, setTempMax] = useState<string>(filters.maxPrice.toString());

  useEffect(() => {
    setTempMin(filters.minPrice.toString());
    setTempMax(filters.maxPrice.toString());
  }, [filters.minPrice, filters.maxPrice]);

  useEffect(() => {
    if (urlGender === 'man' || urlGender === 'woman' || urlGender === null) {
      setFilters(prev => ({
        ...prev,
        gender: urlGender ?? '',
      }));
    }
  }, [urlGender]);

  const filteredItems = useMemo(() => {
    return items.filter(item => {
      if (filters.gender && item.gender !== filters.gender) return false;
      if (filters.size && (!item.size || !item.size.includes(filters.size))) return false;
      if (item.price < filters.minPrice || item.price > filters.maxPrice) return false;
      if (filters.title && !item.title.toLowerCase().includes(filters.title.toLowerCase())) return false;
      return true;
    });
  }, [items, filters]);

  const resetFilters = () => {
    setFilters({
      gender: '',
      size: '',
      minPrice: 0,
      maxPrice: 10000,
      title: '',
    });
  };

  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row gap-8">
        <aside className="lg:w-64 flex-shrink-0">
          <h3 className="text-lg font-bold mb-6 text-gray-900">Фильтры</h3>

          <div className="mb-6">
            <h4 className="font-medium text-sm text-gray-700 mb-3">Пол</h4>
            <div className="space-y-2">
              {(['', 'man', 'woman'] as const).map(gender => (
                <label
                  key={gender}
                  className={`flex items-center p-3 rounded-lg cursor-pointer border transition-all ${
                    filters.gender === gender
                      ? 'border-blue-600 bg-blue-50 text-blue-700'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <input
                    type="radio"
                    name="gender"
                    value={gender}
                    checked={filters.gender === gender}
                    onChange={(e) =>
                      setFilters(prev => ({
                        ...prev,
                        gender: e.target.value as '' | 'man' | 'woman',
                      }))
                    }
                    className="sr-only"
                  />
                  <span className="text-sm">
                    {gender === '' ? 'Все' : gender === 'man' ? 'Мужское' : 'Женское'}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h4 className="font-medium text-sm text-gray-700 mb-3">Размер</h4>
            <div className="flex flex-wrap gap-2">
              {(['', 'S', 'M', 'L', 'XL'] as const).map(size => (
                <label
                  key={size}
                  className={`inline-flex items-center px-3 py-2 rounded-full text-xs cursor-pointer border transition-all ${
                    filters.size === size
                      ? 'border-blue-600 bg-blue-50 text-blue-700'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <input
                    type="radio"
                    name="size"
                    value={size}
                    checked={filters.size === size}
                    onChange={(e) =>
                      setFilters(prev => ({
                        ...prev,
                        size: e.target.value as '' | 'S' | 'M' | 'L' | 'XL',
                      }))
                    }
                    className="sr-only"
                  />
                  <span>{size || 'Все'}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h4 className="font-medium text-sm text-gray-700 mb-3">Цена</h4>
            <div className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="number"
                  placeholder="От"
                  min="0"
                  max={filters.maxPrice}
                  value={tempMin}
                  onChange={(e) => setTempMin(e.target.value)}
                  onBlur={(e) => {
                    const value = e.target.value === '' ? 0 : Math.max(0, Number(e.target.value));
                    setFilters(prev => ({ ...prev, minPrice: value }));
                    setTempMin(value.toString());
                  }}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <input
                  type="number"
                  placeholder="До"
                  min={filters.minPrice}
                  max="10000"
                  value={tempMax}
                  onChange={(e) => setTempMax(e.target.value)}
                  onBlur={(e) => {
                    const value = e.target.value === '' ? 10000 : Math.max(0, Number(e.target.value));
                    setFilters(prev => ({ ...prev, maxPrice: value }));
                    setTempMax(value.toString());
                  }}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <p className="text-xs text-gray-500">Цена от 0 до 10 000 ₽</p>
            </div>
          </div>

          <button
            onClick={resetFilters}
            className="text-sm text-blue-600 hover:text-blue-800 underline font-medium"
          >
            Сбросить все фильтры
          </button>
        </aside>

        <main className="flex-1">
          <div className="relative mb-6">
            <input
              type="search"
              placeholder="Найти товар..."
              value={filters.title}
              onChange={(e) =>
                setFilters(prev => ({
                  ...prev,
                  title: e.target.value,
                }))
              }
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            Товары ({filteredItems.length})
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredItems.length === 0 ? (
              <div className="col-span-full text-center py-16 text-gray-500">
                <p className="text-lg">Нет товаров по заданным фильтрам</p>
                <p className="mt-2 text-sm">Попробуйте изменить параметры поиска</p>
              </div>
            ) : (
              filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="transform transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg"
                >
                  <Card product={item} />
                </div>
              ))
            )}
          </div>
        </main>
      </div>
    </div>
  );
}