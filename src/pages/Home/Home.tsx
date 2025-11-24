import { useNavigate } from 'react-router';
import VideoPlayerForm from '../../components/VideoPlayerForm/VideoPlayerForm';

export default function Home() {
  const navigate = useNavigate();

  const handleSave = (videoUrl: string) => {
    const saveData = {
      url: videoUrl,
      savedAt: Date.now(),
    };
    localStorage.setItem('videoData', JSON.stringify(saveData));
    navigate('/video');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-purple-50/30 to-blue-50/30 flex items-center justify-center p-6">
      <div className="relative z-10 w-full">
        <VideoPlayerForm onSave={handleSave} />
      </div>
    </div>
  );
}
