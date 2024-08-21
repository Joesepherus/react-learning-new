import { useEffect } from 'react';
import { createConnection } from './Chat.js';

export default function ChatRoom() {
  // To help you spot bugs quickly, in development React remounts every component once immediately after its initial mount.
  // In production, you would only see "✅ Connecting..." printed once. 
  // Remounting components only happens in development to help you find Effects that need cleanup
  useEffect(() => {
    const connection = createConnection();
    connection.connect();

    return () => {
      connection.disconnect();
    };
  }, []);
  return <h1>Welcome to the chat!</h1>;
}
