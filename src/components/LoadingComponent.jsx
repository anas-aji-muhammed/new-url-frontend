// LoadingComponent.js
import React from 'react';

const LoadingComponent = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="p-5 rounded-full bg-white">
        Loading...
      </div>
    </div>
  );
};

export default LoadingComponent;
