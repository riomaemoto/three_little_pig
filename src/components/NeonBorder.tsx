"use client";

import { ReactNode } from "react";

interface NeonBorderProps {
  children: ReactNode;
  color?: "pink" | "blue" | "green" | "yellow" | "red" | "purple";
  animate?: boolean;
  className?: string;
}

export default function NeonBorder({ 
  children, 
  color = "pink", 
  animate = false,
  className = "" 
}: NeonBorderProps) {
  const borderStyles = {
    pink: {
      border: "border-pink-400",
      glow: "shadow-[0_0_25px_rgba(236,72,153,0.8),inset_0_0_25px_rgba(236,72,153,0.2)]",
      beforeGlow: "before:shadow-[0_0_40px_rgba(236,72,153,0.6)]"
    },
    blue: {
      border: "border-blue-400", 
      glow: "shadow-[0_0_25px_rgba(59,130,246,0.8),inset_0_0_25px_rgba(59,130,246,0.2)]",
      beforeGlow: "before:shadow-[0_0_40px_rgba(59,130,246,0.6)]"
    },
    green: {
      border: "border-green-400",
      glow: "shadow-[0_0_25px_rgba(34,197,94,0.8),inset_0_0_25px_rgba(34,197,94,0.2)]", 
      beforeGlow: "before:shadow-[0_0_40px_rgba(34,197,94,0.6)]"
    },
    yellow: {
      border: "border-yellow-400",
      glow: "shadow-[0_0_25px_rgba(250,204,21,0.8),inset_0_0_25px_rgba(250,204,21,0.2)]",
      beforeGlow: "before:shadow-[0_0_40px_rgba(250,204,21,0.6)]"
    },
    red: {
      border: "border-red-400",
      glow: "shadow-[0_0_25px_rgba(239,68,68,0.8),inset_0_0_25px_rgba(239,68,68,0.2)]",
      beforeGlow: "before:shadow-[0_0_40px_rgba(239,68,68,0.6)]"
    },
    purple: {
      border: "border-purple-400",
      glow: "shadow-[0_0_25px_rgba(168,85,247,0.8),inset_0_0_25px_rgba(168,85,247,0.2)]",
      beforeGlow: "before:shadow-[0_0_40px_rgba(168,85,247,0.6)]"
    }
  };

  const style = borderStyles[color];
  const animationClass = animate ? "animate-[pulse_3s_ease-in-out_infinite]" : "";

  return (
    <div 
      className={`
        relative 
        border-4 
        ${style.border} 
        ${style.glow} 
        ${animationClass}
        rounded-2xl 
        ${className}
        before:content-[''] 
        before:absolute 
        before:inset-0 
        before:rounded-2xl 
        before:border-4 
        before:${style.border} 
        ${style.beforeGlow}
        before:opacity-75
        before:animate-[pulse_4s_ease-in-out_infinite]
        after:content-['']
        after:absolute
        after:inset-0
        after:rounded-2xl
        after:border-4
        after:border-transparent
        after:bg-gradient-to-r
        after:from-transparent
        after:via-yellow-400
        after:to-transparent
        after:animate-[spin_6s_linear_infinite]
        after:opacity-60
        after:blur-sm
      `}
      style={{
        background: `conic-gradient(from 0deg, transparent, ${color === 'yellow' ? 'rgba(250,204,21,0.3)' : 'rgba(236,72,153,0.3)'}, transparent)`
      }}
    >
      {/* Moving glow spot */}
      <div 
        className="absolute inset-0 rounded-2xl opacity-80"
        style={{
          background: `conic-gradient(from 0deg, transparent 0deg, transparent 80deg, ${color === 'yellow' ? 'rgba(250,204,21,0.8)' : 'rgba(236,72,153,0.8)'} 90deg, ${color === 'yellow' ? 'rgba(250,204,21,0.4)' : 'rgba(236,72,153,0.4)'} 100deg, transparent 120deg, transparent 360deg)`,
          animation: 'spin 8s linear infinite'
        }}
      />
      
      {/* Inner content with padding */}
      <div className="relative z-10 p-4">
        {children}
      </div>
    </div>
  );
}