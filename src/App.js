import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('https://randomuser.me/api/?page=1&results=1&seed=abc')
      .then(response => response.json())
      .then(data => setUser(data.results[0]));
  }, []);

  if (!user) return <div className="text-center text-gray-500">Loading...</div>;

  const ResponsiveImage = ({ picture }) => {
    return (
      <div className="flex justify-center items-center mb-5 h-full">
        <div className="flex flex-col items-center"> {/* Added this div to center images */}
          <img
            src={picture.thumbnail}
            alt="User  "
            className="block md:hidden w-16 h-16 rounded-full border-2 border-gray-300 shadow-lg"
          />
          <img
            src={picture.medium}
            alt="User  "
            className="hidden md:block lg:hidden w-32 h-32 rounded-full border-2 border-gray-300 shadow-lg"
          />
          <img
            src={picture.large}
            alt="User  "
            className="hidden lg:block w-48 h-48 rounded-full border-2 border-gray-300 shadow-lg"
          />
        </div>
      </div>
    );
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-gray-800 to-gray-900">
      <div className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl flex transition-transform transform hover:scale-105 hover:shadow-2xl">
        <div className="flex-shrink-0 p-1 md:p-5 flex ml-4 md:ml-5 ">
          <ResponsiveImage picture={user.picture} />
        </div>
        <div className="flex-grow p-4 flex flex-col justify-center ">
          <h2 className="font-bold text-2xl md:text-4xl lg:text-5xl text-white">{` ${user.name.first} ${user.name.last}`}</h2>
          <p className="text-gray-400 text-1xl md:text-2xl lg:text-3xl mt-0 md:mt-2 lg:mt-3">
            <span className="font-semibold">Gender:</span> {user.gender}
          </p>
          <p className="text-gray-400 text-1xl md:text-2xl lg:text-3xl mt-0 md:mt-2 lg:mt-3 ">
            <span className="font-semibold">Phone:</span> {user.phone}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;