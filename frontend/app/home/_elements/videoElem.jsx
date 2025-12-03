"use client";

import React, { useRef, useState, useEffect, useContext } from "react";
import { LanguageContext } from "../../../context/LanguageContext.jsx";

function VideoElem() {
  const { t } = useContext(LanguageContext);
  const videoRef = useRef(null);
  
  // Initialize state - always start muted for autoplay
  const [muted, setMuted] = useState(true);
  
  const [volume, setVolume] = useState(() => {
    try {
      const saved = localStorage.getItem("video-volume");
      return saved !== null ? Number(saved) : 0.5;
    } catch (e) {
      return 0.5;
    }
  });
  
  const [useLegacyFilter, setUseLegacyFilter] = useState(() => {
    try {
      const saved = localStorage.getItem("video-legacy-filter");
      return saved !== null ? saved === "1" : true;
    } catch (e) {
      return true;
    }
  });
  
  const [autoplaySucceeded, setAutoplaySucceeded] = useState(false);
  const [isVideoReady, setIsVideoReady] = useState(false);

  // Cinematic preset: darker, higher contrast, slight warm tone
  const legacyFilter = "contrast(1.18) brightness(0.58) saturate(1.06) sepia(0.06)";

  // Try to autoplay with sound on mount (best-effort). If blocked, fall back to muted and show controls.
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    v.volume = volume;
    
    // Handler for when video can play
    const handleCanPlay = () => {
      setIsVideoReady(true);
      
      // Force muted for reliable autoplay
      v.muted = true;
      
      // Multiple attempts to ensure playback
      const attemptPlay = () => {
        const playPromise = v.play();
        if (playPromise && playPromise.then) {
          playPromise
            .then(() => {
              setAutoplaySucceeded(true);
            })
            .catch((error) => {
              console.warn('Autoplay attempt failed:', error);
              // Retry after a short delay
              setTimeout(() => {
                v.play().catch(() => {
                  console.warn('Retry also failed');
                });
              }, 500);
            });
        }
      };
      
      attemptPlay();
    };

    const handleLoadedData = () => {
      // Video data is loaded, try to play
      handleCanPlay();
    };

    // Add multiple event listeners for reliability
    v.addEventListener('canplay', handleCanPlay);
    v.addEventListener('loadeddata', handleLoadedData);
    
    // Force load
    v.load();
    
    // If video is already loaded, trigger immediately
    if (v.readyState >= 2) {
      setTimeout(handleCanPlay, 100);
    }

    return () => {
      v.removeEventListener('canplay', handleCanPlay);
      v.removeEventListener('loadeddata', handleLoadedData);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // keep video muted/volume in sync when user changes controls
  useEffect(() => {
    const v = videoRef.current;
    if (!v || !isVideoReady) return;
    v.muted = muted;
    v.volume = volume;
    try {
      localStorage.setItem("video-volume", String(volume));
    } catch (e) {}
  }, [muted, volume, isVideoReady]);

  function handleToggleMute() {
    const v = videoRef.current;
    if (!v) return;
    const willMute = !muted;
    v.muted = willMute;
    setMuted(willMute);
    if (!willMute && v.paused) {
      // user unmuted and video is paused — try to play with sound
      v.play().catch(() => {
        // If play fails, mute it again
        v.muted = true;
        setMuted(true);
      });
    }
  }

  function handleVolumeChange(e) {
    const val = Number(e.target.value);
    setVolume(val);
  }

  function handleToggleFilter() {
    const next = !useLegacyFilter;
    setUseLegacyFilter(next);
    try {
      localStorage.setItem("video-legacy-filter", next ? "1" : "0");
    } catch (e) {}
  }

  return (
    <div className="absolute top-0 left-0 w-full h-full">
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        id="video"
        style={{ filter: useLegacyFilter ? legacyFilter : "none", transition: 'filter 300ms ease, opacity 300ms ease' }}
      >
        <source src="/api/v1/resources/files/video/kek.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Controls panel */}
      <div className="absolute bottom-6 left-6 flex items-center space-x-3 z-50">
        <button
          type="button"
          onClick={handleToggleMute}
          className="w-12 h-12 flex items-center justify-center rounded-full bg-white bg-opacity-20 hover:bg-opacity-40 text-white shadow-lg backdrop-blur-md transition-transform duration-200 ease-in-out transform hover:scale-105 btn-press"
          aria-label={muted ? t("video.unmute") : t("video.mute")}
        >
          {muted ? (
            // muted icon
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5v14l-5-5H2V10h2l5-5z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 9l4 4m0 0l-4 4m4-4H9" />
            </svg>
          ) : (
            // sound icon
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5L6 9H2v6h4l5 4V5z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 9a3 3 0 010 6" />
            </svg>
          )}
        </button>

        <div className="flex items-center bg-black bg-opacity-40 px-3 py-2 rounded shadow-md transition-colors duration-200">
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
            className="w-40"
            aria-label={t("video.volume")}
          />
        </div>

        <button
          type="button"
          onClick={handleToggleFilter}
          className="w-12 h-12 flex items-center justify-center rounded-full bg-white bg-opacity-20 hover:bg-opacity-40 text-white shadow-lg backdrop-blur-md transition-all duration-200 ease-in-out transform hover:scale-105"
          aria-label={t("video.toggleFilter")}
          title={t("video.toggleFilter")}
        >
          {useLegacyFilter ? (
            // Filter ON icon - more contrast/brightness
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          ) : (
            // Filter OFF icon - simple circle
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}

export default VideoElem;
