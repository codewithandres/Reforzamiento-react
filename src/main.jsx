import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter, Route, Routes } from 'react-router';
import { Post } from './hooks/02-useEffect/Post.jsx';
import { User } from './hooks/02-useEffect/User.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='post' element={<Post />} />
        {/* <Route path='user' element={<User />} /> */}
        <Route path='users:id' element={<User />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
