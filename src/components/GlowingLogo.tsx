"use client";

import Image from "next/image";

interface GlowingLogoProps {
  size?: "small" | "medium" | "large" | "hero";
  className?: string;
}

export default function GlowingLogo({ size = "medium", className = "" }: GlowingLogoProps) {
  const sizeClasses = {
    small: "w-20 h-20",
    medium: "w-32 h-32", 
    large: "w-48 h-48",
    hero: "w-64 h-64 md:w-80 md:h-80"
  };

  return (
    <div className="relative">
      {/* Neon glow effects */}
      <div className={`absolute inset-0 rounded-full ${sizeClasses[size]} ${className}`}>
        {/* Outer glow */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 blur-xl opacity-60 animate-pulse"></div>
        {/* Middle glow */}
        <div className="absolute inset-2 rounded-full bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 blur-lg opacity-40 animate-pulse"></div>
      </div>
      
      {/* Main logo container */}
      <div className={`relative ${sizeClasses[size]} ${className}`}>
        <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
          <Image
            src="/samgyupsal-classic.jpg"
            alt="3 Little Pigs Samgyupsal - Korean BBQ Restaurant"
            fill
            className="object-cover"
            priority
          />
          {/* Inner neon border */}
          <div className="absolute inset-0 rounded-full border-2 border-white/30 opacity-60"></div>
        </div>
      </div>
    </div>
  );
}