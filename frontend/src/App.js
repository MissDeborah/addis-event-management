import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/')
      .then(response => response.text())
      .then(data => setMessage(data))
      .catch(error => console.error('Error fetching from backend:', error));
  }, []);

  return (
    <div>
      <h1>MERN Project</h1>
      <p>Backend Message: {message}</p>
    </div>
  );
}

export default App;

