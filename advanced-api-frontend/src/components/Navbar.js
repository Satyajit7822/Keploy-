import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

function Navbar() {
  const { auth, logout } = useContext(AuthContext);

  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Advanced API Store</h1>
        {auth && (
          <div className="flex items-center space-x-4">
            <span>Welcome, {auth.user.username}</span>
            <button onClick={logout} className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded">
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
