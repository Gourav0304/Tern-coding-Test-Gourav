import { Edit, Clock, Calendar } from 'lucide-react';

export default function VideoPlayer({
  videoUrl,
  startTime = 0,
}: {
  videoUrl: string;
  startTime?: number;
}) {
  const extractVideoId = (url: string) => {
    const patterns = [
      /(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/,
      /youtube\.com\/embed\/([a-zA-Z0-9_-]{11})/,
    ];

    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match) return match[1];
    }
    return null;
  };

  const videoId = extractVideoId(videoUrl);

  if (!videoId) {
    return (
      <div className="p-6 text-center">
        <p className="text-red-500">Invalid YouTube video URL</p>
      </div>
    );
  }

  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&start=${startTime}`;
  return (
    <div className="w-full max-w-5xl mx-auto space-y-6">
      <div className="p-4 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-gray-600">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">
                {/* Saved: {format(new Date(savedAt), 'MMM d, yyyy h:mm a')} */}
              </span>
            </div>
            <div className="flex items-center gap-2 text-purple-600 font-medium">
              <Clock className="w-4 h-4" />
              <span className="text-sm">
                {/* Starting at: {formatTime(currentTime)} */}
              </span>
            </div>
          </div>
          <button
            // onClick={onEdit}
            className="border-purple-200 text-purple-600 hover:bg-purple-50 hover:border-purple-300 transition-all"
          >
            <Edit className="w-4 h-4 mr-2" />
            Edit URL
          </button>
        </div>
      </div>

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
}
