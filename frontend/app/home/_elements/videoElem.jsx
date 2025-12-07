"use client";

import React, { useRef, useState, useEffect, useContext } from "react";
import { LanguageContext } from "../../../context/LanguageContext.jsx";

function VideoElem() {
  const { t } = useContext(LanguageContext);
  const videoRef = useRef(null);

  // Инициализация состояния - всегда начинаем с выключенным звуком для автовоспроизведения
  const [muted, setMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  const [volume, setVolume] = useState(() => {
    try {
      const saved = localStorage.getItem("video-volume");
      if (saved !== null) {
        const parsed = Number(saved);
        // Валидация: число должно быть в диапазоне 0-1 и не NaN
        if (!isNaN(parsed) && parsed >= 0 && parsed <= 1) {
          return parsed;
        }
        // Если значение некорректное, удаляем и используем по умолчанию
        localStorage.removeItem("video-volume");
      }
      return 0.5;
    } catch (e) {
      return 0.5;
    }
  });

  const [isVideoReady, setIsVideoReady] = useState(false);

  // Кинематографический пресет: темнее, выше контраст, легкий теплый тон
  const legacyFilter = "contrast(1.18) brightness(0.58) saturate(1.06) sepia(0.06)";

  // Попытка автовоспроизведения со звуком при монтировании. Если заблокировано, откатываемся к muted и показываем контролы.
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    v.volume = volume;

    // Обработчик когда видео готово к воспроизведению
    const handleCanPlay = () => {
      setIsVideoReady(true);

      // Принудительно выключаем звук для надежного автовоспроизведения
      v.muted = true;

      // Проверяем сохраненное состояние воспроизведения
      let shouldPlay = true;
      try {
        const saved = localStorage.getItem("video-playing");
        // Валидация: только 'true' или 'false'
        if (saved === "true") {
          shouldPlay = true;
        } else if (saved === "false") {
          shouldPlay = false;
        } else if (saved !== null) {
          // Некорректное значение - удаляем
          localStorage.removeItem("video-playing");
          shouldPlay = true;
        }
      } catch (e) {
        shouldPlay = true;
      }

      // Если пользователь остановил видео, не запускаем его
      if (!shouldPlay) {
        setIsPlaying(false);
        return;
      }

      // Множественные попытки для обеспечения воспроизведения
      const attemptPlay = () => {
        const playPromise = v.play();
        if (playPromise && playPromise.then) {
          playPromise
            .then(() => {
              // Autoplay succeeded
              setIsPlaying(true);
            })
            .catch((error) => {
              console.warn("Попытка автовоспроизведения не удалась:", error);
              // Повторная попытка после короткой задержки
              setTimeout(() => {
                v.play().catch(() => {
                  console.warn("Повторная попытка также не удалась");
                  setIsPlaying(false);
                });
              }, 500);
            });
        }
      };

      attemptPlay();
    };

    const handleLoadedData = () => {
      // Данные видео загружены, пытаемся воспроизвести
      handleCanPlay();
    };

    // Добавляем множественные обработчики событий для надежности
    v.addEventListener("canplay", handleCanPlay);
    v.addEventListener("loadeddata", handleLoadedData);

    // Слушатели для синхронизации состояния isPlaying с реальным состоянием видео
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    
    v.addEventListener("play", handlePlay);
    v.addEventListener("pause", handlePause);

    // Принудительная загрузка
    v.load();

    // Если видео уже загружено, запускаем немедленно
    if (v.readyState >= 2) {
      setTimeout(handleCanPlay, 100);
    }

    return () => {
      v.removeEventListener("canplay", handleCanPlay);
      v.removeEventListener("loadeddata", handleLoadedData);
      v.removeEventListener("play", handlePlay);
      v.removeEventListener("pause", handlePause);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Синхронизация muted/volume при изменении пользователем
  useEffect(() => {
    const v = videoRef.current;
    if (!v || !isVideoReady) return;
    v.muted = muted;
    v.volume = volume;
    try {
      localStorage.setItem("video-volume", String(volume));
    } catch (e) {
      // Ignore localStorage errors
    }
  }, [muted, volume, isVideoReady]);

  // Сохранение состояния воспроизведения в localStorage
  useEffect(() => {
    if (!isVideoReady) return;
    try {
      localStorage.setItem("video-playing", String(isPlaying));
    } catch (e) {
      // Ignore localStorage errors
    }
  }, [isPlaying, isVideoReady]);

  function handleToggleMute() {
    const v = videoRef.current;
    if (!v) return;
    const willMute = !muted;
    v.muted = willMute;
    setMuted(willMute);
    if (!willMute && v.paused) {
      // пользователь включил звук и видео на паузе — пытаемся воспроизвести со звуком
      v.play().catch(() => {
        // Если воспроизведение не удалось, выключаем звук снова
        v.muted = true;
        setMuted(true);
      });
    }
  }

  function handleVolumeChange(e) {
    const val = Number(e.target.value);
    setVolume(val);
  }

  function handleTogglePlayPause() {
    const v = videoRef.current;
    if (!v) return;
    
    if (v.paused) {
      v.play().catch(() => {
        console.warn("Не удалось воспроизвести видео");
      });
    } else {
      v.pause();
    }
  }

  return (
    <div className="absolute top-0 left-0 w-full h-full">
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        loop
        muted
        playsInline
        preload="auto"
        id="video"
        style={{ filter: legacyFilter, transition: "filter 300ms ease, opacity 300ms ease" }}
      >
        <source src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/video/kek.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Панель управления */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 sm:bottom-6 sm:left-6 sm:translate-x-0 flex items-center space-x-2 sm:space-x-3 z-50">
        <button
          type="button"
          onClick={handleToggleMute}
          className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white bg-opacity-20 hover:bg-opacity-40 text-white shadow-lg backdrop-blur-md transition-transform duration-200 ease-in-out transform hover:scale-105"
          aria-label={muted ? t("video.unmute") : t("video.mute")}
        >
          {muted ? (
            // иконка без звука
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 sm:w-6 sm:h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5v14l-5-5H2V10h2l5-5z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 9l4 4m0 0l-4 4m4-4H9" />
            </svg>
          ) : (
            // иконка со звуком
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 sm:w-6 sm:h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5L6 9H2v6h4l5 4V5z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 9a3 3 0 010 6" />
            </svg>
          )}
        </button>

        <div className="flex items-center bg-black bg-opacity-40 px-2 py-1 sm:px-3 sm:py-2 rounded shadow-md transition-colors duration-200">
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
            className="w-40 sm:w-40"
            aria-label={t("video.volume")}
          />
        </div>

        <button
          type="button"
          onClick={handleTogglePlayPause}
          className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white bg-opacity-20 hover:bg-opacity-40 text-white shadow-lg backdrop-blur-md transition-all duration-200 ease-in-out transform hover:scale-105"
          aria-label={!isPlaying ? t("video.play") || "Play" : t("video.pause") || "Pause"}
          title={!isPlaying ? t("video.play") || "Play" : t("video.pause") || "Pause"}
        >
          {!isPlaying ? (
            // Иконка плея (когда видео на паузе)
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 sm:w-6 sm:h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          ) : (
            // Иконка паузы (когда видео играет)
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 sm:w-6 sm:h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}

export default VideoElem;
