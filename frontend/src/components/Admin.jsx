import React, { useEffect, useState } from "react";

const AdminMessages = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/messages")
      .then((response) => response.json())
      .then((data) => setMessages(data))
      .catch((error) => console.error("Error fetching messages:", error));
  }, []);

  return (
    <div>
      <h2>Contact Messages</h2>
      <ul>
        {messages.map((msg, index) => (
          <li key={index}>
            <strong>{msg.firstName} {msg.lastName}</strong> ({msg.email}):
            <p>{msg.message}</p>
            <span>Phone: {msg.phoneNumber}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminMessages;
