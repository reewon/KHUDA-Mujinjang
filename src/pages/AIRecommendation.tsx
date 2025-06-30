
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const AIRecommendation = () => {
  const navigate = useNavigate();
  const [selectedStyle, setSelectedStyle] = useState('');
  const [selectedItems, setSelectedItems] = useState({
    tops: null,
    bottoms: null,
    shoes: null,
    outerwear: null
  });

  const styles = [
    { id: 'casual', name: '캐주얼' },
    { id: 'street', name: '스트릿' },
    { id: 'sporty', name: '스포티' },
    { id: 'minimal', name: '미니멀' }
  ];

  const handleStyleSelect = (styleId: string) => {
    setSelectedStyle(styleId);
  };

  const handleComplete = () => {
    if (!selectedStyle) {
      alert('스타일을 선택해주세요!');
      return;
    }
    
    navigate('/outfit-result', { 
      state: { 
        style: selectedStyle, 
        selectedItems 
      } 
    });
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
        <h1 className="text-2xl font-bold text-gray-800">AI 코디 추천</h1>
      </div>

      <div className="max-w-md mx-auto">
        {/* Style Selection */}
        <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">스타일 선택 *</h2>
          <div className="grid grid-cols-2 gap-3">
            {styles.map((style) => (
              <Button
                key={style.id}
                variant={selectedStyle === style.id ? "default" : "outline"}
                onClick={() => handleStyleSelect(style.id)}
                className={selectedStyle === style.id ? "bg-amber-500 hover:bg-amber-600" : ""}
              >
                {style.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Optional Item Selection */}
        <div className="bg-white rounded-2xl p-6 shadow-sm mb-8">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">내 상품 코디</h2>
          <p className="text-sm text-gray-500 mb-4">(선택사항) 포함하고 싶은 아이템을 선택하세요</p>
          
          <div className="space-y-4">
            {Object.entries({
              tops: '상의',
              bottoms: '하의', 
              shoes: '신발',
              outerwear: '아우터'
            }).map(([key, name]) => (
              <div key={key} className="flex items-center justify-between p-3 border rounded-lg">
                <span className="text-gray-700">{name}</span>
                <Button variant="outline" size="sm">
                  선택하기
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Complete Button */}
        <Button 
          onClick={handleComplete}
          className="w-full bg-amber-500 hover:bg-amber-600 text-white py-3 rounded-full text-lg font-semibold"
          disabled={!selectedStyle}
        >
          코디 추천받기
        </Button>
      </div>
    </div>
  );
};

export default AIRecommendation;
