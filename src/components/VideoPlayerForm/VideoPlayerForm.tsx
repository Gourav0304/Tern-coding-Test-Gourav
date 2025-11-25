import { useState, type FormEvent } from 'react';
import { TvMinimalPlay, Sparkles } from 'lucide-react';
import { validateYoutubeUrl } from '../../utils/validateYoutubeUrl';

interface VideoPlayerFormProps {
  onSave: (url: string) => void;
}

const VideoPlayerForm = ({ onSave }: VideoPlayerFormProps) => {
  const [videoUrl, setVideoUrl] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    if (!videoUrl.trim()) {
      setError('Please enter a YouTube video URL');
      return;
    }

    if (!validateYoutubeUrl(videoUrl)) {
      setError('Please enter a valid YouTube video URL');
      return;
    }

    onSave(videoUrl);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 via-purple-50/30 to-blue-50/30 flex items-center justify-center p-6">
      <div className="relative z-10 w-full">
        <div className="w-full max-w-2xl mx-auto">
          <div className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm rounded-xl">
            <div className="text-center pb-4 p-6">
              <div className="flex justify-center mb-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-linear-to-r from-purple-600 to-blue-600 rounded-full blur-xl opacity-50" />
                  <div className="relative bg-linear-to-r from-purple-600 to-blue-600 p-4 rounded-full">
                    <TvMinimalPlay className="w-10 h-10 text-white" />
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold bg-linear-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                YouTube Video Player
              </h2>

              <p className="text-gray-500 mt-2">
                Enter a YouTube video URL to get started
              </p>
            </div>

            <div className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label
                    htmlFor="videoUrl"
                    className="text-sm font-medium text-gray-700"
                  >
                    YouTube Video URL
                  </label>

                  <div className="relative">
                    <input
                      id="videoUrl"
                      type="text"
                      value={videoUrl}
                      onChange={(e) => setVideoUrl(e.target.value)}
                      placeholder="https://www.youtube.com/watch?v=..."
                      className="w-full h-12 px-4 pr-10 border border-gray-200 rounded-lg focus:border-purple-500 focus:ring-purple-500 transition-all"
                    />

                    <Sparkles className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-400" />
                  </div>

                  {error && <p className="text-red-500 text-sm">{error}</p>}

                  <p className="text-xs text-gray-400 mt-1">
                    Supported formats: youtube.com/watch?v=... or youtu.be/...
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full h-12 bg-linear-to-r from-purple-600 to-blue-600 
                    hover:from-purple-700 hover:to-blue-700 text-white font-medium 
                    shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg"
                >
                  Save Video
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayerForm;
