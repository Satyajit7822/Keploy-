import { useState } from 'react';
import Navbar from './components/Navbar';
import AuthPage from './components/AuthPage';
import MainContent from './components/MainContent';
import { AuthContext } from './context/AuthContext';

function App() {
  const [auth, setAuth] = useState(null);

  const login = (token, user) => {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    setAuth({ token, user });
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setAuth(null);
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          {!auth ? <AuthPage /> : <MainContent />}
        </div>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
