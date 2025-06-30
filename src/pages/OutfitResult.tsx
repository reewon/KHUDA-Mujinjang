
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Plus, X } from 'lucide-react';

const OutfitResult = () => {
  const location = useLocation();
  const { style } = location.state || {};
  
  const [outfitItems, setOutfitItems] = useState({
    tops: { id: 1, name: '블랙 크롭 탑', image: '/lovable-uploads/06cdaa0f-bf3e-4421-a39f-1c2791956792.png', position: { x: 150, y: 50 } },
    bottoms: { id: 2, name: '블랙 와이드 팬츠', image: '/lovable-uploads/06cdaa0f-bf3e-4421-a39f-1c2791956792.png', position: { x: 150, y: 200 } },
    outerwear: { id: 3, name: '레더 재킷', image: '/lovable-uploads/06cdaa0f-bf3e-4421-a39f-1c2791956792.png', position: { x: 100, y: 30 } },
    shoes: { id: 4, name: '첼시 부츠', image: '/lovable-uploads/06cdaa0f-bf3e-4421-a39f-1c2791956792.png', position: { x: 150, y: 350 } }
  });

  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleRemoveItem = (category: string) => {
    setOutfitItems(prev => ({
      ...prev,
      [category]: null
    }));
  };

  const handleItemClick = (category: string) => {
    setSelectedItem(selectedItem === category ? null : category);
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
          {style && `${style} 스타일`} 코디 추천
        </h1>
      </div>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Outfit Display Area */}
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-800 mb-6 text-center">추천 코디</h2>
          
          <div className="relative w-full h-96 bg-gray-50 rounded-lg overflow-hidden">
            {Object.entries(outfitItems).map(([category, item]) => 
              item && (
                <div
                  key={category}
                  className={`absolute cursor-pointer transition-all ${
                    selectedItem === category ? 'ring-2 ring-amber-500 ring-offset-2' : ''
                  }`}
                  style={{ 
                    left: item.position.x, 
                    top: item.position.y,
                    width: '80px',
                    height: '80px'
                  }}
                  onClick={() => handleItemClick(category)}
                >
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover rounded-lg shadow-sm"
                  />
                </div>
              )
            )}
          </div>
        </div>

        {/* Controls Panel */}
        <div className="space-y-6">
          {/* Current Items */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">현재 아이템</h3>
            <div className="space-y-3">
              {Object.entries(outfitItems).map(([category, item]) => (
                <div key={category} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                      {item ? (
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded-lg" />
                      ) : (
                        <Plus className="w-6 h-6 text-gray-400" />
                      )}
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">
                        {{
                          tops: '상의',
                          bottoms: '하의',
                          shoes: '신발',
                          outerwear: '아우터'
                        }[category]}
                      </p>
                      {item && <p className="text-sm text-gray-500">{item.name}</p>}
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    {item ? (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleRemoveItem(category)}
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    ) : (
                      <Button variant="outline" size="sm">
                        <Plus className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <Button className="w-full bg-amber-500 hover:bg-amber-600 text-white">
              다른 코디 추천받기
            </Button>
            <Button variant="outline" className="w-full">
              코디 저장하기
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutfitResult;
