import { BrowserRouter, Route, Routes } from 'react-router';
import { Layout } from '@/components';
import { Gif, Home, Video } from '@/pages';

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
