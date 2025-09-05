'use client'

import { useState, useEffect, useRef } from 'react'

export default function ReferralSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [hoveredCard, setHoveredCard] = useState(null)
  const characterRef = useRef(null)
  const trophyRef = useRef(null)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    
    return () => {
      clearTimeout(timer)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  useEffect(() => {
    if (characterRef.current && isHovering) {
      const character = characterRef.current
      const rect = character.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      
      const handleMouseMove = (e) => {
        const deltaX = e.clientX - centerX
        const deltaY = e.clientY - centerY
        const angleX = deltaY * 0.02
        const angleY = deltaX * 0.02
        
        character.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.05)`
      }
      
      window.addEventListener('mousemove', handleMouseMove)
      return () => window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [isHovering])

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        {/* Animated Reward Rings */}
        {Array.from({ length: 8 }, (_, i) => (
          <div
            key={i}
            className="absolute w-full h-full border border-yellow-500/20 rounded-full animate-ping"
            style={{
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${3 + i * 0.5}s`,
              transform: `scale(${1 + i * 0.15})`,
              opacity: 0.08 - i * 0.008
            }}
          />
        ))}
        
        {/* Floating Reward Particles */}
        {Array.from({ length: 25 }, (_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.15}s`,
              animationDuration: `${1.2 + Math.random() * 1.8}s`,
              filter: 'blur(0.5px)',
              boxShadow: `0 0 ${15 + Math.random() * 20}px rgba(251, 191, 36, 0.6)`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-3 gap-8 items-center relative z-10">
        {/* Enhanced Left Section - Main Title and Trophy */}
        <div className={`space-y-8 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
        }`}>
          {/* Enhanced Main Title */}
          <div className="text-center lg:text-left">
            <h2 className="text-5xl lg:text-6xl font-bold leading-tight mb-6 relative">
              <span className="bg-gradient-to-r from-blue-500 via-blue-500 to-blue-500 bg-clip-text text-transparent animate-pulse-glow relative">
                Referral Reward
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-blue-500 to-blue-500 bg-clip-text text-transparent opacity-20 blur-sm transform translate-y-1">
                  Referral Reward
                </div>
              </span>
            </h2>
          </div>

          {/* Enhanced Trophy Container */}
          <div className="relative flex justify-center lg:justify-start group">
            <div ref={trophyRef} className="relative w-48 h-48 transform hover:scale-110 transition-all duration-500 cursor-pointer">
              {/* Enhanced Trophy Base */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full shadow-lg group-hover:shadow-2xl group-hover:shadow-yellow-500/50 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-500 rounded-full animate-pulse"></div>
              </div>
              
              {/* Enhanced Trophy Body */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-20 h-32 bg-gradient-to-b from-yellow-300 to-yellow-500 rounded-t-full group-hover:from-yellow-200 group-hover:to-yellow-400 transition-all duration-500">
                {/* Enhanced Trophy Handle */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-8 bg-gradient-to-b from-yellow-400 to-yellow-500 rounded-t-full group-hover:from-yellow-300 group-hover:to-yellow-400 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-400 rounded-t-full animate-pulse"></div>
                </div>
                
                {/* Enhanced Trophy Shield */}
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg group-hover:from-blue-500 group-hover:to-blue-600 transition-all duration-500">
                  <div className="absolute inset-1 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:from-blue-400 group-hover:to-blue-500 transition-all duration-500">
                    <div className="w-4 h-4 bg-white rounded-full animate-pulse group-hover:scale-125 transition-transform duration-500">
                      <div className="absolute inset-0 bg-white rounded-full animate-ping"></div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-500 rounded-lg animate-ping opacity-50"></div>
                </div>
              </div>

              {/* Enhanced Floating Tokens */}
              {Array.from({ length: 8 }, (_, i) => (
                <div
                  key={i}
                  className="absolute w-4 h-6 bg-gradient-to-b from-yellow-400 to-yellow-500 rounded-sm animate-float group-hover:scale-125 transition-transform duration-500"
                  style={{
                    left: `${20 + (i * 12)}%`,
                    bottom: `${10 + (i * 5)}%`,
                    animationDelay: `${i * 0.2}s`,
                    animationDuration: `${3 + Math.random() * 2}s`,
                    filter: 'blur(0.5px)',
                    boxShadow: `0 0 ${10 + Math.random() * 10}px rgba(251, 191, 36, 0.6)`
                  }}
                />
              ))}

              {/* Enhanced Background Number */}
              <div className="absolute -top-20 -right-20 w-32 h-32 text-blue-500/20 text-8xl font-bold animate-pulse group-hover:text-blue-400/30 transition-colors duration-500">
                21
                <div className="absolute inset-0 text-blue-400/10 text-8xl font-bold animate-ping" style={{ animationDelay: '0.5s' }}>
                  21
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Middle Section - First Reward Card */}
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}>
          <div 
            className="relative p-8 bg-gradient-to-br from-blue-900/60 to-blue-800/40 backdrop-blur-md border border-blue-500/60 rounded-2xl shadow-2xl hover:scale-110 transition-all duration-500 group cursor-pointer overflow-hidden"
            onMouseEnter={() => setHoveredCard('first')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Enhanced Border Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-blue-500/30 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            
            {/* Content */}
            <div className="relative z-10 text-center space-y-4">
              <div className="text-6xl font-bold text-white mb-2 group-hover:text-blue-200 transition-colors duration-500">$10</div>
              <div className="text-lg font-semibold text-white/90 uppercase tracking-wider group-hover:text-blue-200 transition-colors duration-500">Reward</div>
              <div className="text-white/80 group-hover:text-white/90 transition-colors duration-300">for achieving</div>
              <div className="text-3xl font-bold text-white uppercase tracking-wider group-hover:text-blue-200 transition-colors duration-500">7 Direct</div>
              <div className="text-3xl font-bold text-white uppercase tracking-wider group-hover:text-blue-200 transition-colors duration-500">Referrals</div>
              <div className="text-white/80 group-hover:text-white/90 transition-colors duration-300">within 7 days.</div>
            </div>

            {/* Enhanced Floating Elements */}
            <div className="absolute top-4 right-4 w-3 h-3 bg-blue-400 rounded-full animate-ping group-hover:scale-150 transition-transform duration-300">
              <div className="absolute inset-0 bg-blue-300 rounded-full animate-ping" style={{ animationDelay: '0.2s' }}></div>
            </div>
            <div className="absolute bottom-4 left-4 w-2 h-2 bg-blue-400 rounded-full animate-ping group-hover:scale-150 transition-transform duration-300" style={{ animationDelay: '0.5s' }}>
              <div className="absolute inset-0 bg-blue-300 rounded-full animate-ping" style={{ animationDelay: '0.7s' }}></div>
            </div>
          </div>
        </div>

        {/* Enhanced Right Section - Second Reward Card */}
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}>
          <div 
            className="relative p-8 bg-gradient-to-br from-orange-900/60 to-yellow-800/40 backdrop-blur-md border border-orange-500/60 rounded-2xl shadow-2xl hover:scale-110 transition-all duration-500 group cursor-pointer overflow-hidden"
            onMouseEnter={() => setHoveredCard('second')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Enhanced Border Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/30 to-yellow-500/30 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            
            {/* Content */}
            <div className="relative z-10 text-center space-y-4">
              <div className="text-white/90 group-hover:text-orange-200 transition-colors duration-300">If</div>
              <div className="text-3xl font-bold text-white uppercase tracking-wider group-hover:text-orange-200 transition-colors duration-500">14 Direct</div>
              <div className="text-3xl font-bold text-white uppercase tracking-wider group-hover:text-orange-200 transition-colors duration-500">Referrals</div>
              <div className="text-white/80 group-hover:text-white/90 transition-colors duration-300">are achieved in</div>
              <div className="text-white/90 group-hover:text-orange-200 transition-colors duration-300">7 days,</div>
              <div className="text-white/80 group-hover:text-white/90 transition-colors duration-300">income is</div>
              <div className="text-4xl font-bold text-yellow-400 uppercase tracking-wider animate-pulse group-hover:text-yellow-300 transition-colors duration-500 group-hover:scale-110 transition-transform duration-300">Doubled</div>
              <div className="text-white/80 group-hover:text-white/90 transition-colors duration-300">and so on</div>
            </div>

            {/* Enhanced Floating Elements */}
            <div className="absolute top-4 right-4 w-3 h-3 bg-orange-400 rounded-full animate-ping group-hover:scale-150 transition-transform duration-300">
              <div className="absolute inset-0 bg-orange-300 rounded-full animate-ping" style={{ animationDelay: '0.2s' }}></div>
            </div>
            <div className="absolute bottom-4 left-4 w-2 h-2 bg-yellow-400 rounded-full animate-ping group-hover:scale-150 transition-transform duration-300" style={{ animationDelay: '0.5s' }}>
              <div className="absolute inset-0 bg-yellow-300 rounded-full animate-ping" style={{ animationDelay: '0.7s' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Bottom Gaming Character */}
      <div 
        ref={characterRef}
        className={`absolute bottom-20 right-20 transition-all duration-1000 cursor-pointer ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className="relative w-32 h-40 transform hover:scale-125 transition-all duration-500">
          {/* Enhanced Character */}
          <div className="relative z-10">
            {/* Enhanced Character Head */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-24 bg-gradient-to-b from-blue-700 to-blue-800 rounded-t-full">
              {/* Enhanced Glowing Visor */}
              <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-16 h-8 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full animate-pulse shadow-lg shadow-orange-500/50 group-hover:shadow-orange-400/70 transition-all duration-500">
                <div className="absolute inset-1 bg-gradient-to-r from-orange-400 to-orange-300 rounded-full animate-ping"></div>
                <div className="absolute inset-2 bg-gradient-to-r from-orange-300 to-orange-200 rounded-full animate-ping" style={{ animationDelay: '0.3s' }}></div>
              </div>
            </div>

            {/* Enhanced Character Body */}
            <div className="absolute top-24 left-1/2 transform -translate-x-1/2 w-24 h-32 bg-gradient-to-b from-blue-800 to-blue-900 rounded-t-full">
              {/* Enhanced Circuit Lines */}
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-blue-400 to-blue-300 rounded-full animate-pulse"></div>
              <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-blue-400 to-blue-300 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>
              <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-14 h-1 bg-gradient-to-r from-blue-400 to-blue-300 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></div>
            </div>

            {/* Enhanced Wires/Tubes */}
            <div className="absolute top-16 -left-2 w-1 h-8 bg-gradient-to-b from-blue-400 to-blue-300 rounded-full animate-pulse group-hover:scale-150 transition-transform duration-300"></div>
            <div className="absolute top-20 -right-2 w-1 h-6 bg-gradient-to-b from-blue-400 to-blue-300 rounded-full animate-pulse group-hover:scale-150 transition-transform duration-300" style={{ animationDelay: '0.4s' }}></div>
          </div>

          {/* Enhanced Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/30 to-blue-500/30 rounded-full blur-2xl animate-pulse group-hover:opacity-80 transition-opacity duration-500"></div>
        </div>
      </div>

      {/* Enhanced Decorative Elements */}
      <div className="absolute top-20 left-20 w-20 h-20 border border-blue-500/40 rounded-full animate-spin hover:scale-150 transition-all duration-500" style={{ animationDuration: '20s' }}>
        <div className="absolute inset-4 border border-blue-400/30 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
        <div className="absolute inset-8 border border-blue-300/20 rounded-full animate-spin" style={{ animationDuration: '10s' }}></div>
      </div>
      
      <div className="absolute top-40 right-40 w-16 h-16 border border-blue-500/40 rounded-full animate-spin hover:scale-150 transition-all duration-500" style={{ animationDuration: '15s', animationDirection: 'reverse' }}>
        <div className="absolute inset-3 border border-blue-400/30 rounded-full animate-spin" style={{ animationDuration: '12s' }}></div>
      </div>
      
      <div className="absolute bottom-40 left-40 w-24 h-24 border border-blue-500/40 rounded-full animate-spin hover:scale-150 transition-all duration-500" style={{ animationDuration: '25s' }}>
        <div className="absolute inset-4 border border-blue-400/30 rounded-full animate-spin" style={{ animationDuration: '18s', animationDirection: 'reverse' }}></div>
      </div>

      {/* Enhanced Energy Field Lines */}
      <div className="absolute inset-0">
        {Array.from({ length: 6 }, (_, i) => (
          <div
            key={i}
            className="absolute w-full h-px bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent animate-pulse"
            style={{
              top: `${(i + 1) * 16.67}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${2 + i * 0.5}s`,
              transform: `rotate(${i * 30}deg)`
            }}
          />
        ))}
      </div>

      {/* Enhanced Holographic Rings */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        {Array.from({ length: 4 }, (_, i) => (
          <div
            key={i}
            className="absolute border border-yellow-500/20 rounded-full animate-ping"
            style={{
              width: `${150 + i * 80}px`,
              height: `${150 + i * 80}px`,
              animationDelay: `${i * 0.4}s`,
              animationDuration: `${2.5 + i * 0.5}s`
            }}
          />
        ))}
      </div>
    </section>
  )
}
