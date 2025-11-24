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

  return <VideoPlayerForm onSave={handleSave} />;
}
