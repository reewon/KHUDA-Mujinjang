
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Shirt, Package, ShoppingBag, Coat } from 'lucide-react';

const Index = () => {
  const categories = [
    { id: 'tops', name: '상의', icon: Shirt, items: 5 },
    { id: 'bottoms', name: '하의', icon: Package, items: 3 },
    { id: 'shoes', name: '신발', icon: ShoppingBag, items: 4 },
    { id: 'outerwear', name: '아우터', icon: Coat, items: 2 },
  ];

  return (
    <div className="min-h-screen bg-yellow-50 p-6">
      {/* Header with Hanger Logo */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
          <div className="w-8 h-8 border-2 border-amber-600 rounded-t-full border-b-0 relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-amber-600 rounded-full -mt-1"></div>
          </div>
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">My Closet</h1>
        <p className="text-gray-600">나만의 스타일을 찾아보세요</p>
      </div>

      {/* Category Grid */}
      <div className="grid grid-cols-2 gap-6 max-w-md mx-auto mb-12">
        {categories.map((category) => (
          <Link 
            key={category.id} 
            to={`/closet/${category.id}`}
            className="block"
          >
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <category.icon className="w-8 h-8 text-gray-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">{category.name}</h3>
              <p className="text-sm text-gray-500">{category.items}개 아이템</p>
            </div>
          </Link>
        ))}
      </div>

      {/* AI Recommendation Button */}
      <div className="text-center">
        <Link to="/ai-recommendation">
          <Button 
            size="lg" 
            className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg"
          >
            AI 코디 추천
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Index;
