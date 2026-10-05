"use client";

import React, { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";

interface WebkitWindow extends Window {
  webkitAudioContext?: typeof AudioContext;
}

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscillatorRef = useRef<OscillatorNode | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const filterNodeRef = useRef<BiquadFilterNode | null>(null);

  const toggleSound = () => {
    if (!isPlaying) {
      try {
        const win = window as unknown as WebkitWindow;
        const AudioCtx = window.AudioContext || win.webkitAudioContext;
        if (!AudioCtx) return;
        const ctx = new AudioCtx();
        audioCtxRef.current = ctx;

        // Create ambient binaural harmonic drone
        const osc1 = ctx.createOscillator();
        const osc2 = ctx.createOscillator();
        const gain = ctx.createGain();
        const filter = ctx.createBiquadFilter();

        osc1.type = "sine";
        osc1.frequency.setValueAtTime(55, ctx.currentTime); // Low A

        osc2.type = "triangle";
        osc2.frequency.setValueAtTime(110.2, ctx.currentTime); // Harmonic detune

        filter.type = "lowpass";
        filter.frequency.setValueAtTime(450, ctx.currentTime);

        gain.gain.setValueAtTime(0.001, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.04, ctx.currentTime + 2.5);

        osc1.connect(filter);
        osc2.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);

        osc1.start();
        osc2.start();

        oscillatorRef.current = osc1;
        gainNodeRef.current = gain;
        filterNodeRef.current = filter;

        setIsPlaying(true);
      } catch (e) {
        console.warn("WebAudio ambient drone initialization error:", e);
      }
    } else {
      if (gainNodeRef.current && audioCtxRef.current) {
        gainNodeRef.current.gain.exponentialRampToValueAtTime(0.0001, audioCtxRef.current.currentTime + 0.8);
        setTimeout(() => {
          audioCtxRef.current?.close();
          audioCtxRef.current = null;
          setIsPlaying(false);
        }, 850);
      } else {
        setIsPlaying(false);
      }
    }
  };

  useEffect(() => {
    return () => {
      audioCtxRef.current?.close();
    };
  }, []);

  return (
    <button
      onClick={toggleSound}
      title={isPlaying ? "Mute Ambient Sound" : "Enable Ambient Spatial Drone"}
      className="group relative flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 backdrop-blur-md text-xs font-mono text-white/80 transition-all duration-300 hover:border-amber-400/40 hover:bg-amber-400/10 hover:text-white"
    >
      <div className="flex items-center gap-1">
        {isPlaying ? (
          <>
            <span className="h-2 w-0.5 bg-amber-400 animate-pulse" />
            <span className="h-3 w-0.5 bg-amber-300 animate-pulse delay-75" />
            <span className="h-1.5 w-0.5 bg-amber-400 animate-pulse delay-150" />
            <Volume2 className="w-3.5 h-3.5 text-amber-400 ml-1" />
          </>
        ) : (
          <VolumeX className="w-3.5 h-3.5 text-white/50 group-hover:text-amber-300" />
        )}
      </div>
      <span className="hidden sm:inline text-[11px] tracking-wider uppercase">
        {isPlaying ? "AUDIO: AMBIENT" : "SOUND: OFF"}
      </span>
    </button>
  );
}
