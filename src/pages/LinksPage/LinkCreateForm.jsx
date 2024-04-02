import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LinkCreationForm() {
  const [url, setUrl] = useState('');
  const [title, setTitle] = useState('');
  const [customBackHalf, setCustomBackHalf] = useState('');
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1); // Moves one step back in the history stack
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would typically send the data to a server or process it further
    console.log({ url, title, customBackHalf });
    // QR Code generation logic would also be triggered here
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 flex flex-col pt-24 pb-24 justify-center items-center w-full h-full ">
      <div className='w-3/4'> 
        <label htmlFor="destinationUrl" className="block text-sm font-medium text-gray-700">Destination</label>
        <input
          type="url"
          id="destinationUrl"
          placeholder="https://example.com/my-long-url"
          required
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
        />
      </div>
      <div className='w-3/4'> 
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title (optional)</label>
        <input
          type="text"
          id="title"
          placeholder="Your title here"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
        />
      </div>
      <div className='w-3/4'> 
        <label htmlFor="customBackHalf" className="block text-sm font-medium text-gray-700">Custom back-half (optional)</label>
        <input
          type="text"
          id="customBackHalf"
          placeholder="llnjhii"
          value={customBackHalf}
          onChange={(e) => setCustomBackHalf(e.target.value)}
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
        />
      </div>
      <div>
      <button onClick={goBack} className="px-4 py-2 text-indigo-500 bg-white rounded-md">Cancel</button>
        <button  type="submit" onSubmit={handleSubmit} className="px-4 py-2 bg-indigo-500 text-white rounded-md"> Create</button>
        
      </div>
    </form>
  );
}

export default LinkCreationForm;
