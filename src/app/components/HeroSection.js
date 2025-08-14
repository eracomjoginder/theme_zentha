'use client'

import { useState, useEffect } from 'react'

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 pt-28">
      {/* Space Background with Stars */}
      <div className="absolute inset-0">
        {/* Starry Background */}
        {Array.from({ length: 200 }, (_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
              opacity: 0.3 + Math.random() * 0.7
            }}
          />
        ))}
        
        {/* Nebulae/Gas Clouds */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto w-[90%] grid lg:grid-cols-2  items-center relative z-10">
        {/* Left Content - Text and ICO Info */}
        <div className={`space-y-8 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
        }`}>
          {/* Main Title */}
          <div className="space-y-4">
            <h1 className="text-6xl lg:text-8xl font-bold leading-tight text-white">
              <span className="bg-gradient-to-r from-blue-400 to-pink-500 bg-clip-text text-transparent">
                ZENTHA
              </span>
            </h1>
            <h2 className="text-4xl lg:text-6xl font-bold text-white">
              Cryptocurrency ICO
            </h2>
            <p className="text-2xl lg:text-3xl text-white/90 font-medium">
              Do not miss it!
            </p>
          </div>

          {/* ICO Progress Section */}
          <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="space-y-6">
              {/* Current Donation */}
              <div className="flex justify-between items-center">
                <span className="text-white/80 text-lg">Current donation:</span>
                <span className="text-white text-2xl font-bold">$5,440</span>
              </div>
              
              {/* Total Amount */}
              <div className="flex justify-between items-center">
                <span className="text-white/80 text-lg">Total amount of donations:</span>
                <span className="text-white text-2xl font-bold">$15,000</span>
              </div>
              
              {/* Progress Bar */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-white text-lg">Total $5,440</span>
                  <span className="text-white/60 text-sm">$15,000</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-4">
                  <div 
                    className="bg-gradient-to-r from-pink-500 to-purple-600 h-4 rounded-full transition-all duration-1000"
                    style={{ width: `${(5440 / 15000) * 100}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs text-white/60">
                  <span>0</span>
                  <span>$15,000</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <button className="px-12 py-5 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white font-bold rounded-2xl transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/50 text-xl">
            Join Pre-ICO
          </button>
        </div>

        {/* Right Side - Mobile App Interface */}
        <div className={`relative flex justify-end items-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
        }`}>
          {/* Mobile Phone Frame */}
          <img src="./images/hero.png" alt="Zentha" className="w-4/6 h-full object-contain" />
        </div>
      </div>

      

      <style jsx>{`
        @keyframes donut {
          0% { stroke-dashoffset: 251.2; }
          100% { stroke-dashoffset: 0; }
        }
        .animate-donut {
          animation: donut 2s ease-out forwards;
        }
      `}</style>
    </section>
  )
}
