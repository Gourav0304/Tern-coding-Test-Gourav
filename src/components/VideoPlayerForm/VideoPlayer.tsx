import { useState } from 'react';
import { Edit } from 'lucide-react';
import { validateYoutubeUrl } from '../../utils/validateYoutubeUrl';
import { extractVideoId } from '../../utils/extractVideoId';

const VideoPlayer = ({
  videoUrl,
  startTime = 0,
}: {
  videoUrl: string;
  startTime?: number;
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newUrl, setNewUrl] = useState(videoUrl);
  const [error, setError] = useState('');

  const handleSave = () => {
    setError('');

    if (!validateYoutubeUrl(newUrl)) {
      setError('Please enter a valid YouTube video URL');
      return;
    }
    const updatedData = {
      url: newUrl,
      savedAt: Date.now(),
    };

    localStorage.setItem('videoData', JSON.stringify(updatedData));
    window.location.reload();
  };

  const videoId = extractVideoId(videoUrl);

  if (!videoId && !isEditing) {
    return (
      <div className="p-6 text-center">
        <p className="text-red-500">Invalid YouTube video URL</p>
      </div>
    );
  }

  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&start=${startTime}`;

  return (
    <div className="w-full max-w-5xl mx-auto space-y-6">
      <button
        onClick={() => setIsEditing(true)}
        className="border-purple-200 text-purple-600 hover:bg-purple-50 hover:border-purple-300 transition-all flex items-center gap-2 border font-medium px-4 py-2 rounded-lg"
      >
        <Edit className="w-4 h-4" />
        Edit URL
      </button>

      {isEditing && (
        <div className="bg-white p-4 rounded-xl shadow-md space-y-4">
          <input
            type="text"
            value={newUrl}
            onChange={(e) => setNewUrl(e.target.value)}
            className="w-full border rounded-lg px-3 py-2"
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <div className="flex gap-3">
            <button
              onClick={handleSave}
              className="bg-purple-600 text-white px-4 py-2 rounded-lg"
            >
              Save
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
      <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
        <iframe
          width="100%"
          height="100%"
          src={embedUrl}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0"
        ></iframe>
      </div>
    </div>
  );
};

export default VideoPlayer;
