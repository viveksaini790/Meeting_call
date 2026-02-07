

import React, { useRef } from "react";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useParams } from "react-router-dom";

const Room = () => {
  const { id } = useParams();
  const meetingRef = useRef(null);
  const joinedRef = useRef(false);

  const joinMeeting = () => {
    if (!meetingRef.current) return;
    if (joinedRef.current) return;

    joinedRef.current = true;

    const appID = 1631062563;
    const serverSecret = "6cf4438d6a2282d25d5766a25626d328";

    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      id,
      Date.now().toString(),
      "Vivek Saini"
    );

    const zp = ZegoUIKitPrebuilt.create(kitToken);

    zp.joinRoom({
      container: meetingRef.current,
      scenario: {
        mode: ZegoUIKitPrebuilt.OneONoneCall,
      },
      turnOnCameraWhenJoining: true,
      turnOnMicrophoneWhenJoining: true,
    });
  };

  return (
    <div>
      <h2>Room ID: {id}</h2>

      <button onClick={joinMeeting}>
        Join Meeting
      </button>

      <div
        ref={meetingRef}
        style={{ width: "80vw", height: "80vh" }}
      />
    </div>
  );
};

export default Room;

