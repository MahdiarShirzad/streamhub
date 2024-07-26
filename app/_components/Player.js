import Image from "next/image";
import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

export default function Player({ music }) {
  // console.log(src/);
  return (
    <div className="fixed bottom-4 w-full z-[1000] flex">
      <AudioPlayer
        autoPlay
        src={music.link}
        onPlay={(e) => console.log("onPlay")}
        // other props here
      />
    </div>
  );
}
