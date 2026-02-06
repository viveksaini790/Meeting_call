// import React, { useEffect, useRef } from 'react'
// import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
// import { useParams } from 'react-router-dom'
// useRef
// const Room = () => {
//     const {id} = useParams();
//     const meetingRef = useRef(null);
// useEffect(()=>{
// if(meetingRef.current){
//     const meeting=(element)=>{
//          const appID = 1678291218;
//       const serverSecret = "304f0204be3fdd9c98a49b1e55f228e9";
//       const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest
//       (appID, serverSecret, id, Date.now().toString(),"vivek saini");


//      // Create instance object from Kit Token.
//       const zp = ZegoUIKitPrebuilt.create(kitToken);
//        zp.joinRoom({
//         container: element,
//         sharedLinks: [
//           {
//             name: 'Personal link',
//             url: `http://localhost:5173/room/${id}`,
           
//           },
//         ],
//         scenario: {
//           mode: ZegoUIKitPrebuilt.OneONoneCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
//         },
//       });
//     }
//     meeting(meetingRef.current)
// }

// },[])
    
//   return (
//     <div>Room
//         <div ref={meetingRef}> </div>
//     </div>
//   )
// }

// export default Room

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

    const appID = 1678291218;
    const serverSecret = "304f0204be3fdd9c98a49b1e55f228e9";

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

