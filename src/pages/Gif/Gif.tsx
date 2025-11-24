import { ArrowLeft, Laugh } from 'lucide-react';
import { useNavigate } from 'react-router';

const Gif = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/video');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-purple-50/30 to-blue-50/30 p-3">
      <div className="relative z-10 w-full max-w-xl mx-auto">
        <div className="p-8 shadow-2xl border-0 bg-white/80 backdrop-blur-sm rounded-xl">
          <div className="text-center mb-2">
            <div className="flex justify-center mb-4">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-4 rounded-full">
                <Laugh className="w-8 h-8 text-white" />
              </div>
            </div>

            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-1">
              Time for a Laugh!
            </h1>

            <p className="text-gray-500">While you're here, enjoy this gem</p>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-xl mb-6 relative">
            <img
              src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDY2ZWNtNGk3aWpzZXBsdmM5dHRid3BwbGx6YW1ybXBtcm00Zm9udCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/JIX9t2j0ZTN9S/giphy.gif"
              alt="Funny cat doing calculations"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
          </div>

          <div className="space-y-4">
            <p className="text-center text-gray-600 italic text-md">
              "Me trying to figure out which YouTube video to watch next..."
            </p>

            <button
              onClick={handleBack}
              className="w-full h-12 bg-gradient-to-r rounded-full flex items-center justify-center from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Video
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gif;
