import { useEffect, useRef } from "react";

const configuration = {
  iceServers: [{ urls: "stun:stun.l.google.com:19302" }],
};

export const useWebRTC = (onDataReceived: (data: unknown) => void) => {
  const peerConnection = useRef<RTCPeerConnection | null>(null);
  const dataChannel = useRef<RTCDataChannel | null>(null);

  useEffect(() => {
    peerConnection.current = new RTCPeerConnection(configuration);
    dataChannel.current =
      peerConnection.current.createDataChannel("timerChannel");

    dataChannel.current.onmessage = (event) => {
      onDataReceived(JSON.parse(event.data));
    };

    peerConnection.current.onicecandidate = (event) => {
      if (event.candidate) {
        // In a real-world scenario, you'd send this candidate to the other peer
        console.log("New ICE candidate:", JSON.stringify(event.candidate));
      }
    };

    peerConnection.current
      .createOffer()
      .then((offer) => peerConnection.current!.setLocalDescription(offer))
      .then(() => {
        // In a real-world scenario, you'd send this offer to the other peer
        console.log(
          "Offer created:",
          JSON.stringify(peerConnection.current!.localDescription)
        );
      });

    return () => {
      if (peerConnection.current) {
        peerConnection.current.close();
      }
    };
  }, [onDataReceived]);

  const sendData = (data: unknown) => {
    if (dataChannel.current?.readyState === "open") {
      dataChannel.current.send(JSON.stringify(data));
    }
  };

  return { sendData };
};
