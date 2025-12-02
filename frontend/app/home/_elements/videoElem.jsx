"use client";

import React, { useRef, useState, useEffect, useContext } from "react";
import { LanguageContext } from "../../../context/LanguageContext.jsx";

function VideoElem() {
  const { t } = useContext(LanguageContext);
  const videoRef = useRef(null);
  
  // Initialize state from localStorage
  const [muted, setMuted] = useState(() => {
    try {
      const saved = localStorage.getItem("video-muted");
      return saved !== null ? saved === "1" : true;
    } catch (e) {
      return true;
    }
  });
  
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

  // Cinematic preset: darker, higher contrast, slight warm tone
  const legacyFilter = "contrast(1.18) brightness(0.58) saturate(1.06) sepia(0.06)";

  // Try to autoplay with sound on mount (best-effort). If blocked, fall back to muted and show controls.
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    v.volume = volume;
    v.muted = muted;

    // Attempt autoplay
    const playPromise = v.play();
    if (playPromise && playPromise.then) {
      playPromise
        .then(() => {
          if (!muted) {
            setAutoplaySucceeded(true);
          }
        })
        .catch(() => {
          // Autoplay blocked
          v.play().catch(() => {});
        });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // keep video muted/volume in sync when user changes controls
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = muted;
    v.volume = volume;
    try {
      localStorage.setItem("video-volume", String(volume));
      localStorage.setItem("video-muted", muted ? "1" : "0");
    } catch (e) {}
  }, [muted, volume]);

  function handleToggleMute() {
    const v = videoRef.current;
    if (!v) return;
    const willMute = !muted;
    v.muted = willMute;
    setMuted(willMute);
    if (!willMute) {
      // user unmuted — try to play with sound
      v.play().catch(() => {});
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
        muted={muted}
        playsInline
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
          className={`w-10 h-10 flex items-center justify-center rounded-full ml-2 ${useLegacyFilter ? 'bg-white bg-opacity-20 text-white' : 'bg-white bg-opacity-6 text-gray-200'} shadow-lg transition-transform duration-200 ease-in-out transform hover:scale-105 btn-press`}
          aria-label={t("video.toggleFilter")}
          title={t("video.toggleFilter")}
        >
          {/* simple filter icon */}
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h18M6 12h12M10 19h4" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default VideoElem;
