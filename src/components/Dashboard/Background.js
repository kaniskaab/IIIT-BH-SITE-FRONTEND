import React from 'react';
import video from '../../img/drone-vid.mp4';

const VideoComponent = () => {
  return (
    <div className="h-screen w-1/2">
      <video className="h-screen w-full object-cover" autoPlay muted loop>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoComponent;


