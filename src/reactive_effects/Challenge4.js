import { useState, useEffect } from 'react';

function ChatRoom({ roomId, isEncrypted }) {
  useEffect(() => {
    const connection = isEncrypted ? createEncryptedConnection(roomId) : createUnencryptedConnection(roomId);
    connection.connect();
    return () => connection.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [roomId, isEncrypted]);

  return <h1>Welcome to the {roomId} room!</h1>;
}

function createEncryptedConnection(roomId) {
  // A real implementation would actually connect to the server
  return {
    connect() {
      console.log('✅ 🔐 Connecting to "' + roomId + '... (encrypted)');
    },
    disconnect() {
      console.log('❌ 🔐 Disconnected from "' + roomId + '" room (encrypted)');
    }
  };
}

function createUnencryptedConnection(roomId) {
  // A real implementation would actually connect to the server
  return {
    connect() {
      console.log('✅ Connecting to "' + roomId + '... (unencrypted)');
    },
    disconnect() {
      console.log('❌ Disconnected from "' + roomId + '" room (unencrypted)');
    }
  };
}


export default function App() {
  const [roomId, setRoomId] = useState('general');
  const [isEncrypted, setIsEncrypted] = useState(false);
  return (
    <>
      <label>
        Choose the chat room:{' '}
        <select
          value={roomId}
          onChange={e => setRoomId(e.target.value)}
        >
          <option value="general">general</option>
          <option value="travel">travel</option>
          <option value="music">music</option>
        </select>
      </label>
      <label>
        <input
          type="checkbox"
          checked={isEncrypted}
          onChange={e => setIsEncrypted(e.target.checked)}
        />
        Enable encryption
      </label>
      <hr />
      <ChatRoom
        roomId={roomId}
        isEncrypted={isEncrypted}
      />
    </>
  );
}
