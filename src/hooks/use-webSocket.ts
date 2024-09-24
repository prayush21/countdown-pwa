import { useEffect, useState } from "react";

export const useWebSocket = (onMessage: (message: string) => void) => {
  const [ws, setWs] = useState<WebSocket | null>(null);

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:3000/api/ws");
    setWs(socket);

    socket.onmessage = (event) => {
      const message = JSON.parse(event.data);
      onMessage(message);
    };

    socket.onclose = () => {
      console.log("WebSocket connection closed");
    };

    return () => {
      socket.close();
    };
  }, [onMessage]);

  const sendMessage = (data: string) => {
    if (ws && ws.readyState === WebSocket.OPEN) {
      ws.send(JSON.stringify(data));
    }
  };

  return { sendMessage };
};
