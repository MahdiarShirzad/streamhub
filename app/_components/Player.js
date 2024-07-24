import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

export default function Player({ src }) {
  return (
    <div className="fixed bottom-4 w-full ">
      <AudioPlayer
        autoPlay
        src={src}
        onPlay={(e) => console.log("onPlay")}
        // other props here
      />
    </div>
  );
}
