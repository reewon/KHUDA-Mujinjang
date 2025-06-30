
import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Upload, Camera } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const RegisterClothes = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>('');

  const categoryNames = {
    'tops': '상의',
    'bottoms': '하의',
    'shoes': '신발',
    'outerwear': '아우터'
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  const handleRegister = () => {
    if (!selectedFile) {
      toast({
        title: "이미지를 선택해주세요",
        description: "옷 이미지를 업로드해야 등록할 수 있습니다.",
        variant: "destructive"
      });
      return;
    }

    // TODO: 실제로는 여기서 배경 제거 API를 호출하고 옷장에 추가
    toast({
      title: "옷이 등록되었습니다!",
      description: "새로운 옷이 옷장에 추가되었습니다.",
    });

    navigate(`/closet/${category}`);
  };

  return (
    <div className="min-h-screen bg-yellow-50 p-6">
      {/* Header */}
      <div className="flex items-center mb-8">
        <Link to={`/closet/${category}`}>
          <Button variant="ghost" size="sm" className="mr-4">
            <ArrowLeft className="w-4 h-4" />
          </Button>
        </Link>
        <h1 className="text-2xl font-bold text-gray-800">
          {categoryNames[category as keyof typeof categoryNames]} 등록
        </h1>
      </div>

      {/* Upload Area */}
      <div className="max-w-md mx-auto">
        <div className="bg-white rounded-2xl p-8 shadow-sm text-center mb-6">
          {previewUrl ? (
            <div className="mb-6">
              <img 
                src={previewUrl} 
                alt="Preview" 
                className="w-48 h-48 object-cover rounded-lg mx-auto mb-4"
              />
              <p className="text-sm text-gray-600">미리보기</p>
            </div>
          ) : (
            <div className="mb-6">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="w-12 h-12 text-gray-400" />
              </div>
              <p className="text-gray-600 mb-2">옷 사진을 업로드해주세요</p>
              <p className="text-sm text-gray-400">배경이 자동으로 제거됩니다</p>
            </div>
          )}

          <input
            type="file"
            accept="image/*"
            onChange={handleFileSelect}
            className="hidden"
            id="file-upload"
          />
          <label htmlFor="file-upload">
            <Button variant="outline" className="w-full mb-4" asChild>
              <span>
                <Upload className="w-4 h-4 mr-2" />
                이미지 선택
              </span>
            </Button>
          </label>

          <Button 
            onClick={handleRegister}
            className="w-full bg-amber-500 hover:bg-amber-600 text-white"
            disabled={!selectedFile}
          >
            옷장에 등록하기
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RegisterClothes;
