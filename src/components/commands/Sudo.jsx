import React, { useEffect, useRef } from 'react';
import CRTgif from '../../assets/CRT.gif';

const Sudo = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const enterFullscreen = () => {
      if (containerRef.current) {
        if (containerRef.current.requestFullscreen) {
          containerRef.current.requestFullscreen();
        } else if (containerRef.current.mozRequestFullScreen) {
          containerRef.current.mozRequestFullScreen();
        } else if (containerRef.current.webkitRequestFullscreen) {
          containerRef.current.webkitRequestFullscreen();
        } else if (containerRef.current.msRequestFullscreen) {
          containerRef.current.msRequestFullscreen();
        }
      }
    };

    enterFullscreen();

    return () => {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    };
  }, []);

  return (
    <div
      className="w-full h-full flex items-center justify-center overflow-hidden"
      ref={containerRef}
    >
      <img
        src={CRTgif}
        alt="Fullscreen GIF"
        className="w-full h-full  animate-none"
      />
    </div>
  );
};

export default Sudo;
