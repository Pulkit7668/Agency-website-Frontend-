'use client';

import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause, Volume2, VolumeX, Maximize } from 'lucide-react';

// Client videos with your video
const clientVideos = [
  {
    id: 1,
    clientName: 'Rahul Sharma',
    company: 'Tech Startup India',
    videoUrl: '/v1.mp4',
  },
  {
    id: 2,
    clientName: 'Priya Verma',
    company: 'Digital Agency Pro',
    videoUrl: '/v1.mp4',
  },
  {
    id: 3,
    clientName: 'Arun Patel',
    company: 'E-commerce Solutions',
    videoUrl: '/v1.mp4',
  },
  {
    id: 4,
    clientName: 'Neha Singh',
    company: 'Design Studio Plus',
    videoUrl: '/v1.mp4',
  },
  {
    id: 5,
    clientName: 'Vikram Kumar',
    company: 'Cloud Solutions Ltd',
    videoUrl: '/v1.mp4',
  },
];

export function ClientVideos() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});
  const autoScrollIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-scroll effect (stops on hover)
  useEffect(() => {
    if (!isHovering) {
      autoScrollIntervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === clientVideos.length - 1 ? 0 : prevIndex + 1
        );
      }, 6000);
    }

    return () => {
      if (autoScrollIntervalRef.current) clearInterval(autoScrollIntervalRef.current);
    };
  }, [isHovering]);

  // Auto-play and mute videos
  useEffect(() => {
    const currentVideo = videoRefs.current[clientVideos[currentIndex].id];
    if (currentVideo) {
      currentVideo.muted = true;
      currentVideo.autoplay = true;
      currentVideo.play().catch(() => {
        // Handle autoplay rejection gracefully
      });
    }
  }, [currentIndex]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? clientVideos.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === clientVideos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const togglePlay = () => {
    const video = videoRefs.current[clientVideos[currentIndex].id];
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    const video = videoRefs.current[clientVideos[currentIndex].id];
    if (video) {
      video.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleFullscreen = () => {
    const video = videoRefs.current[clientVideos[currentIndex].id];
    if (video && video.parentElement) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        video.parentElement.requestFullscreen();
      }
    }
  };

  const getVideoPosition = (index: number) => {
    const diff = (index - currentIndex + clientVideos.length) % clientVideos.length;
    if (diff === 0) return 'center';
    if (diff === 1 || diff === clientVideos.length - 1) return diff === 1 ? 'right' : 'left';
    return 'hidden';
  };

  return (
    <section id="reviews" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-linear-to-b from-background to-background/50">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-0 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl opacity-50 animate-float"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl opacity-50 animate-bounce-slow" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 animate-slide-up">
          <span className="inline-block px-4 py-2 glass rounded-full text-xs sm:text-sm font-medium text-accent mb-4 animate-slide-down hover:scale-105 transition-transform">
            Client Reviews
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6 text-balance">
            What Our <span className="bg-linear-to-r from-blue-500 to-cyan-400 text-transparent bg-clip-text animate-pulse-slow">Clients</span> Say
          </h2>
          <p className="text-sm sm:text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto text-balance">
            Watch real testimonials from our satisfied clients about their experience working with us.
          </p>
        </div>

        {/* 3D Carousel Container */}
        <div
          className="relative"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Videos Container */}
          <div className="relative h-96 flex items-center justify-center perspective">
            {clientVideos.map((video, index) => {
              const position = getVideoPosition(index);
              let transformClass = '';

              if (position === 'center') {
                transformClass = 'scale-100 z-10 opacity-100';
              } else if (position === 'right') {
                transformClass = 'scale-75 -right-8 sm:-right-10 lg:-right-12 opacity-60 sm:opacity-70';
              } else if (position === 'left') {
                transformClass = 'scale-75 -left-8 sm:-left-10 lg:-left-12 opacity-60 sm:opacity-70';
              } else {
                transformClass = 'hidden';
              }

              return (
                <div
                  key={video.id}
                  className={`absolute w-48 sm:w-64 lg:w-80 transition-all duration-500 ease-out ${transformClass}`}
                  style={{
                    perspective: '1000px',
                    transform:
                      position === 'center'
                        ? 'rotateY(0deg) translateZ(0)'
                        : position === 'right'
                          ? 'rotateY(-25deg) translateZ(-100px)'
                          : position === 'left'
                            ? 'rotateY(25deg) translateZ(-100px)'
                            : 'hidden',
                  }}
                >
                  {/* Video Card */}
                  <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl bg-black h-80 sm:h-96 group">
                    {/* Video Element */}
                    <video
                      ref={(el) => {
                        if (el) videoRefs.current[video.id] = el;
                      }}
                      src={video.videoUrl}
                      className="w-full h-full object-cover"
                      muted
                      autoPlay
                      loop
                      crossOrigin="anonymous"
                    />

                    {/* Custom Controls */}
                    {position === 'center' && (
                      <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex items-center justify-between gap-2">
                          {/* Play/Pause Button */}
                          <button
                            onClick={togglePlay}
                            className="p-2 hover:bg-white/20 rounded-lg transition-all"
                            aria-label={isPlaying ? 'Pause' : 'Play'}
                          >
                            {isPlaying ? (
                              <Pause size={20} className="text-white" />
                            ) : (
                              <Play size={20} className="text-white" />
                            )}
                          </button>

                          {/* Volume Button */}
                          <button
                            onClick={toggleMute}
                            className="p-2 hover:bg-white/20 rounded-lg transition-all"
                            aria-label={isMuted ? 'Unmute' : 'Mute'}
                          >
                            {isMuted ? (
                              <VolumeX size={20} className="text-white" />
                            ) : (
                              <Volume2 size={20} className="text-white" />
                            )}
                          </button>

                          {/* Fullscreen Button */}
                          <button
                            onClick={toggleFullscreen}
                            className="p-2 hover:bg-white/20 rounded-lg transition-all ml-auto"
                            aria-label="Fullscreen"
                          >
                            <Maximize size={20} className="text-white" />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Client Info Below Video */}
                  {position === 'center' && (
                    <div className="text-center mt-4">
                      <h3 className="text-lg sm:text-xl font-semibold text-white mb-1">
                        {video.clientName}
                      </h3>
                      <p className="text-white/80 text-sm sm:text-base">{video.company}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Navigation Buttons - Bottom Centered */}
        <div className="flex items-center justify-center gap-4 mt-8 sm:mt-12 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <button
                onClick={goToPrevious}
                className="p-2 glass rounded-full text-foreground hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                aria-label="Previous services"
            >
                <ChevronLeft size={24} className="hover:rotate-180 transition-transform duration-300" />
            </button>
        
            {/* Indicators */}
            <div className="flex gap-2">
                {clientVideos.map((_, index) => (
                <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`rounded-full transition-all duration-300 hover:scale-125 ${
                    index === currentIndex
                        ? 'bg-accent w-8 h-2'
                        : 'bg-foreground/30 w-2 h-2 hover:bg-foreground/50'
                    }`}
                    aria-label={`Go to video ${index + 1}`}
                />
                ))}
            </div>
        
            <button
                onClick={goToNext}
                className="p-2 glass rounded-full text-foreground hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                aria-label="Next services"
            >
                <ChevronRight size={24} className="hover:rotate-180 transition-transform duration-300" />
            </button>
        </div>
      </div>
    </section>
  );
}