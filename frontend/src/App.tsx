import Header from './components/Header';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import Chat from './pages/chat';
import Login from './pages/Login';
import Signup from './pages/signup';
import NotFound from './pages/Notfound';
import './App.css';
import { useauth } from './context/authcontex';
function App() {
  const auth = useauth();
  //console.log(useauth()?.isLoggedIn)

  return (
  <main>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      {auth?.isLoggedIn && auth.user && (<Route path="/chat" element={<Chat />} />)}
      <Route path="*" element={<NotFound />} />
    </Routes>
    <footer/>
  </main>
  );
}

export default App
