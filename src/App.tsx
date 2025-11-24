import { BrowserRouter, Route, Routes } from 'react-router';
import Home from './pages/Home/Home';
import Video from './pages/Video/Video';
import Gif from './pages/Gif/Gif';
import Layout from './components/Layout/Layout';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/video" element={<Video />} />
          <Route path="/gif" element={<Gif />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
