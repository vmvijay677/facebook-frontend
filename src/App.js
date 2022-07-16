import './App.css';
import Auth from './Pages/Auth/Auth';
import Home from './Pages/Home/Home';
import Profile from './Pages/Profile/Profile';
import { Navigate, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

function App() {
  const user = useSelector((state) => state.authReducer.authData);

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={user ? <Navigate to='home' /> : <Navigate to='auth' />} />
        <Route path='/home' element={user ? <Home /> : <Navigate to='../auth' />} />
        <Route path='/auth' element={user ? <Navigate to='../home' /> : <Auth />} />
        <Route path='/profile/:id' element={user ? <Profile /> : <Navigate to='../auth' />} />
      </Routes>
    </div>
  );
}

export default App;
