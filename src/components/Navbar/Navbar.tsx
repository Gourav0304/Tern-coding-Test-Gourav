import { TvMinimalPlay, ImageIcon, HomeIcon } from 'lucide-react';
import { Link, useLocation } from 'react-router';
import clsx from 'clsx';

const navItems = [
  { name: 'Home', icon: HomeIcon, path: '/' },
  { name: 'Video', icon: TvMinimalPlay, path: '/video' },
  { name: 'GIF', icon: ImageIcon, path: '/gif' },
];

export const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-linear-to-r from-purple-600 to-blue-600 p-2 rounded-lg">
              <TvMinimalPlay className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-linear-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              VideoPlayer
            </span>
          </Link>

          <div className="flex items-center gap-2">
            {navItems.map(({ name, icon: Icon, path }) => {
              const isActive = location.pathname === path;

              return (
                <Link
                  key={path}
                  to={path}
                  className={clsx(
                    'flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300',
                    isActive
                      ? 'bg-linear-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                      : 'text-gray-600 hover:bg-gray-100'
                  )}
                >
                  <Icon className="w-4 h-4" />
                  <span className="font-medium hidden sm:inline">{name}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};
