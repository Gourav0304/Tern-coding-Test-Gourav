import { useEffect, useState } from 'react';
import VideoPlayer from '../../components/VideoPlayerForm/VideoPlayer';
import VideoPlayerForm from '../../components/VideoPlayerForm/VideoPlayerForm';

export default function Video() {
  const stored = localStorage.getItem('videoData');
  const parsed = stored ? JSON.parse(stored) : null;

  const [videoUrl, setVideoUrl] = useState(parsed?.url || null);
  const [startTime, setStartTime] = useState(0);

  // Compute elapsed time
  useEffect(() => {
    if (!parsed?.savedAt) return;

    const now = Date.now();
    const elapsedSeconds = Math.floor((now - parsed.savedAt) / 1000);

    setStartTime(elapsedSeconds);
  }, []);

  if (!videoUrl) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-purple-50/30 to-blue-50/30 flex items-center justify-center p-6">
        <div className="relative z-10 w-full">
          <VideoPlayerForm
            onSave={(url) => {
              const saveData = {
                url,
                savedAt: Date.now(),
              };
              localStorage.setItem('videoData', JSON.stringify(saveData));
              setVideoUrl(url);
            }}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-purple-50/30 to-blue-50/30 p-6">
      <div className="relative z-10 w-full">
        <VideoPlayer videoUrl={videoUrl} startTime={startTime} />
      </div>
    </div>
  );
}
