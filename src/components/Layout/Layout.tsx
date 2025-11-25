import { Outlet } from 'react-router';
import Navbar from '../Navbar/Navbar';

const Layout = () => (
  <div className="min-h-screen bg-linear-to-br from-gray-50 via-purple-50/30 to-blue-50/30">
    <Navbar />
    <main className="pt-20 pb-16">
      <Outlet />
    </main>
  </div>
);

export default Layout;
