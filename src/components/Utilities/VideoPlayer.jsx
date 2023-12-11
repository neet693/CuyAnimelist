"use client";

import YouTube from "react-youtube";
import { XSquare } from "@phosphor-icons/react";
import { useState } from "react";

const VideoPlayer = (youtubeId) => {
  const option = { width: "300", height: "250" };
  const [isOpen, setIsOpen] = useState(true);
  const handleVideoPlayer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const Player = () => {
    return (
      <div className="fixed bottom-2 right-2">
        <button
          onClick={handleVideoPlayer}
          className="text-warna-primary float-right"
        >
          <XSquare size={32} />
        </button>
        <YouTube
          videoId={youtubeId}
          onReady={(event) => event.target.pauseVideo()}
          opts={option}
          onError={() => alert("Video Sepertinya Rusak, Coba Anime lainnya")}
        />
      </div>
    );
  };

  const BtnOpenPlayer = () => {
    return (
      <button
        onClick={handleVideoPlayer}
        className="rounded fixed bottom-5 right-5 w-32 bg-warna-primary text-warna-dark text-xl hover:bg-warna-accent transition-all shadow-xl"
      >
        Tonton Video Player
      </button>
    );
  };

  return isOpen ? <Player /> : <BtnOpenPlayer />;
};
export default VideoPlayer;
