import React from "react";

function VideoElem() {
  return (
    <video
      className="absolute top-0 left-0 w-full h-full object-cover"
      autoPlay
      loop
      muted
      id="video"
    >
      <source src="/api/v1/resources/files/video/kek.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}

export default VideoElem;
