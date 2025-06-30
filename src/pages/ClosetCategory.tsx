
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Plus } from 'lucide-react';

const ClosetCategory = () => {
  const { category } = useParams();
  const [items, setItems] = useState([
    { id: 1, name: '블랙 크롭 탑', image: '/placeholder.svg' },
    { id: 2, name: '데님 팬츠', image: '/placeholder.svg' },
    { id: 3, name: '화이트 티셔츠', image: '/placeholder.svg' },
  ]);

  const categoryNames = {
    'tops': '상의',
    'bottoms': '하의',
    'shoes': '신발',
    'outerwear': '아우터'
  };

  return (
    <div className="min-h-screen bg-yellow-50 p-6">
      {/* Header */}
      <div className="flex items-center mb-8">
        <Link to="/">
          <Button variant="ghost" size="sm" className="mr-4">
            <ArrowLeft className="w-4 h-4" />
          </Button>
        </Link>
        <h1 className="text-2xl font-bold text-gray-800">
          {categoryNames[category as keyof typeof categoryNames]} 옷장
        </h1>
      </div>

      {/* Items Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
        {items.map((item) => (
          <div key={item.id} className="bg-white rounded-xl p-4 shadow-sm">
            <div className="aspect-square bg-gray-100 rounded-lg mb-3 flex items-center justify-center">
              <img 
                src={item.image} 
                alt={item.name}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <p className="text-sm font-medium text-gray-800 text-center">{item.name}</p>
          </div>
        ))}
      </div>

      {/* Register Button */}
      <div className="text-center">
        <Link to={`/register-clothes/${category}`}>
          <Button 
            className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-full"
          >
            <Plus className="w-4 h-4 mr-2" />
            내 옷 등록
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ClosetCategory;
