'use client'

import { useState, useEffect, useRef } from 'react'

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [currentMetric, setCurrentMetric] = useState(0)
  const canvasRef = useRef(null)
  const animationRef = useRef(null)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)                                                 
    
    // Mouse tracking for parallax effects
    const handleMouseMove = (e) => {
      setMousePosition({ 
        x: (e.clientX / window.innerWidth) * 100, 
        y: (e.clientY / window.innerHeight) * 100 
      })
    }
    
    // Metric rotation
    const metricTimer = setInterval(() => {
      setCurrentMetric(prev => (prev + 1) % 4)
    }, 3000)
    
          // Removed particle system for cleaner background
      window.addEventListener('mousemove', handleMouseMove)
      
      return () => {
        window.removeEventListener('mousemove', handleMouseMove)
      }

    return () => {
      clearTimeout(timer)
      clearInterval(metricTimer)
    }
  }, [])

  const metrics = [
    { label: 'Market Cap', value: '$2.5B', change: '+24.5%', icon: '📈' },
    { label: 'Active Users', value: '500K+', change: '+89.2%', icon: '👥' },
    { label: 'Total Volume', value: '$125M', change: '+156%', icon: '💎' },
    { label: 'Games Listed', value: '250+', change: '+45.8%', icon: '🎮' }
  ]

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8 pt-20 pb-8">
      {/* Background GIF */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero-bg.gif" 
          alt="Hero Background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16 items-center relative z-10">
        {/* Left Content - Professional Hero Text */}
        <div className={`space-y-4 sm:space-y-6 lg:space-y-8 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
        }`}>
          {/* Executive Badge */}
          <div className="inline-flex items-center space-x-2 sm:space-x-3 bg-gradient-to-r from-blue-500/10 to-blue-500/10 backdrop-blur-xl border border-blue-400/20 rounded-full px-3 sm:px-4 lg:px-6 py-2 sm:py-3">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-blue-200 font-semibold text-xs sm:text-sm lg:text-base">ENTERPRISE GAMING PLATFORM • LIVE</span>
          </div>

          {/* Professional Title */}
          <div className="space-y-3 sm:space-y-4 lg:space-y-6">
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.9] text-white">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                ZENTHA
              </span>
              <br />
              <span className="text-slate-200 text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light">
                Gaming Ecosystem
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 font-medium leading-relaxed max-w-2xl">
              The world's first comprehensive blockchain gaming platform connecting 
              <span className="text-blue-400 font-semibold"> 500,000+ gamers</span> with 
              <span className="text-blue-400 font-semibold"> next-generation experiences</span>
            </p>
          </div>

          {/* Professional CTA Section */}
          <div className="space-y-4 sm:space-y-6">
            
            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-6 lg:space-x-8 text-sm text-slate-400">
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-xs sm:text-sm">Audited Smart Contracts</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-xs sm:text-sm">Enterprise Security</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-xs sm:text-sm">24/7 Support</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Professional Dashboard */}
        <div className={`lg:flex-1 relative mt-6 sm:mt-8 lg:mt-0 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
        }`}>
          
          {/* Responsive Analytics Dashboard */}
          <div className="flex justify-center">
            <img src="./images/hero.png" alt="Zentha Platform" className="max-w-[310px] h-auto object-contain" />
          </div>
        </div>
      </div>

      {/* Professional Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-slate-400 text-sm font-medium">Explore Platform</span>
          <div className="w-6 h-10 border-2 border-slate-500 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-slate-400 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  )
}


