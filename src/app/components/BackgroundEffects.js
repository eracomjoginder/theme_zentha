'use client'

import { useEffect, useState } from 'react'

export default function BackgroundEffects() {
  const [particles, setParticles] = useState([])

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = Array.from({ length: 150 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 0.5,
        speed: Math.random() * 0.3 + 0.1,
        opacity: Math.random() * 0.4 + 0.2,
        color: ['#ffffff', '#87ceeb', '#dda0dd', '#98fb98'][Math.floor(Math.random() * 4)],
        twinkle: Math.random() > 0.5
      }))
      setParticles(newParticles)
    }

    generateParticles()

    const interval = setInterval(() => {
      setParticles(prev => prev.map(particle => ({
        ...particle,
        y: particle.y <= -5 ? 105 : particle.y - particle.speed,
        opacity: particle.twinkle ? 0.2 + Math.sin(Date.now() * 0.001 + particle.id) * 0.3 : particle.opacity
      })))
    }, 100)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Space Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a2e] to-[#16213e]"></div>

      {/* Animated Stars */}
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute rounded-full animate-pulse"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
            opacity: particle.opacity,
            animationDelay: `${particle.id * 0.1}s`,
            animationDuration: `${2 + Math.random() * 3}s`,
            filter: 'blur(0.2px)',
            boxShadow: `0 0 ${particle.size * 3}px ${particle.color}`
          }}
        />
      ))}

      {/* Nebulae/Gas Clouds */}
      <div className="absolute top-1/4 left-1/4 w-[800px] h-[600px] bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[500px] bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 w-[700px] h-[400px] bg-pink-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>

      {/* Shooting Stars */}
      {Array.from({ length: 8 }, (_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full animate-ping"
          style={{
            left: `${20 + i * 10}%`,
            top: `${10 + i * 8}%`,
            animationDelay: `${i * 3}s`,
            animationDuration: '4s',
            filter: 'blur(0.5px)',
            boxShadow: '0 0 10px white'
          }}
        />
      ))}

      {/* Cosmic Dust */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }, (_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px'
        }} />
      </div>

      {/* Aurora Effect */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-green-500/10 via-transparent to-transparent animate-pulse" style={{ animationDuration: '8s' }}></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-blue-500/10 via-transparent to-transparent animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }}></div>

      {/* Floating Cosmic Elements */}
      <div className="absolute top-1/3 right-1/4 w-16 h-16 border border-blue-500/20 rounded-full animate-spin" style={{ animationDuration: '30s' }}></div>
      <div className="absolute bottom-1/3 left-1/4 w-12 h-12 border border-purple-500/20 rounded-full animate-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }}></div>
      <div className="absolute top-2/3 left-2/3 w-20 h-20 border border-pink-500/20 rounded-full animate-spin" style={{ animationDuration: '35s' }}></div>

      {/* Energy Field Lines */}
      <div className="absolute inset-0">
        {Array.from({ length: 6 }, (_, i) => (
          <div
            key={i}
            className="absolute w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent animate-pulse"
            style={{
              top: `${(i + 1) * 16.67}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: '4s'
            }}
          />
        ))}
      </div>

      {/* Holographic Rings */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        {Array.from({ length: 3 }, (_, i) => (
          <div
            key={i}
            className="absolute border border-blue-500/10 rounded-full animate-ping"
            style={{
              width: `${300 + i * 200}px`,
              height: `${300 + i * 200}px`,
              animationDelay: `${i * 2}s`,
              animationDuration: `${6 + i * 2}s`
            }}
          />
        ))}
      </div>
    </div>
  )
}
