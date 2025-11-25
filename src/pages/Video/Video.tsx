import { useEffect, useState } from 'react';
import { VideoPlayer, VideoPlayerForm } from '@/components';

export const Video = () => {
  const stored = localStorage.getItem('videoData');
  const parsed = stored ? JSON.parse(stored) : null;

  const [videoUrl, setVideoUrl] = useState(parsed?.url || null);
  const [startTime, setStartTime] = useState(0);

  useEffect(() => {
    if (!parsed?.savedAt) return;

    const now = Date.now();
    const elapsedSeconds = Math.floor((now - parsed.savedAt) / 1000);
    setStartTime(elapsedSeconds);
  }, []);

  if (!videoUrl) {
    return (
      <VideoPlayerForm
        onSave={(url: string) => {
          const saveData = {
            url,
            savedAt: Date.now(),
          };
          localStorage.setItem('videoData', JSON.stringify(saveData));
          setVideoUrl(url);
        }}
      />
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 via-purple-50/30 to-blue-50/30 p-6">
      <div className="relative z-10 w-full">
        <VideoPlayer videoUrl={videoUrl} startTime={startTime} />
      </div>
    </div>
  );
};
