import VideoPlayerForm from '../../components/VideoPlayerForm/VideoPlayerForm';

export default function Video() {
  const handleSave = (videoUrl: string) => {
    console.log('Video URL saved:', videoUrl);
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-purple-50/30 to-blue-50/30 flex items-center justify-center p-6">
      <div className="relative z-10 w-full">
        <VideoPlayerForm onSave={handleSave} isLoading={false} />
      </div>
    </div>
  );
}
