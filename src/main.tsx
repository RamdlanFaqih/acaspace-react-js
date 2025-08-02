import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import './App.css'
import App from './pages/App'
import Login from './pages/Login/Login'
import Detail from './pages/Detail'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import Profile from './pages/Profile/Profile'
import ProtectedRoute from './hooks/ProtectedRoute'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/login' element={<Login />} />
      <Route path='/detail' element={
        <ProtectedRoute>
          <Detail />
        </ProtectedRoute>
      } />
      <Route path='/profile' element={<Profile />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>,
)
