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
    
    // Premium particle system
    const canvas = canvasRef.current
    if (canvas) {
      const ctx = canvas.getContext('2d')
      let particles = []
      
      const initCanvas = () => {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
        
        particles = []
        for (let i = 0; i < 80; i++) {
          particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            size: Math.random() * 3 + 1,
            opacity: Math.random() * 0.6 + 0.2,
            color: `hsl(${220 + Math.random() * 60}, 70%, 60%)`
          })
        }
      }
      
      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        
        particles.forEach((particle, index) => {
          particle.x += particle.vx
          particle.y += particle.vy
          
          if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
          if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1
          
          // Draw particle
          ctx.beginPath()
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
          ctx.fillStyle = particle.color + Math.floor(particle.opacity * 255).toString(16).padStart(2, '0')
          ctx.fill()
          
          // Connect nearby particles
          particles.forEach((otherParticle, otherIndex) => {
            if (index !== otherIndex) {
              const dx = particle.x - otherParticle.x
              const dy = particle.y - otherParticle.y
              const distance = Math.sqrt(dx * dx + dy * dy)
              
              if (distance < 120) {
                ctx.beginPath()
                ctx.moveTo(particle.x, particle.y)
                ctx.lineTo(otherParticle.x, otherParticle.y)
                ctx.strokeStyle = particle.color + Math.floor(0.1 * (1 - distance / 120) * 255).toString(16).padStart(2, '0')
                ctx.lineWidth = 1
                ctx.stroke()
              }
            }
          })
        })
        
        animationRef.current = requestAnimationFrame(animate)
      }
      
      initCanvas()
      animate()
      
      window.addEventListener('resize', initCanvas)
      window.addEventListener('mousemove', handleMouseMove)
      
      return () => {
        window.removeEventListener('resize', initCanvas)
        window.removeEventListener('mousemove', handleMouseMove)
        if (animationRef.current) cancelAnimationFrame(animationRef.current)
      }
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
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 pt-20 w-[90%] mx-auto">
      {/* Premium Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{ zIndex: 1 }}
      />
      
      {/* Professional Background Elements */}
      <div className="absolute inset-0" style={{ zIndex: 2 }}>
        {/* Premium Gradient Orbs */}
        <div 
          className="absolute w-[800px] h-[800px] bg-gradient-to-r from-blue-500/10 via-purple-500/8 to-pink-500/10 rounded-full blur-3xl"
          style={{
            top: '10%',
            left: '10%',
            transform: `translate(${(mousePosition.x - 50) * 0.02}px, ${(mousePosition.y - 50) * 0.02}px)`
          }}
        />
        <div 
          className="absolute w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/8 via-blue-500/6 to-purple-500/8 rounded-full blur-3xl"
          style={{
            bottom: '10%',
            right: '10%',
            transform: `translate(${(mousePosition.x - 50) * -0.015}px, ${(mousePosition.y - 50) * -0.015}px)`
          }}
        />
        
        {/* Floating Corporate Elements */}
        <div className="absolute top-20 left-20 w-12 h-12 border border-blue-400/20 rounded-lg rotate-45 animate-pulse" style={{ animationDuration: '4s' }}></div>
        <div className="absolute bottom-32 right-32 w-8 h-8 border border-purple-400/20 rounded-full animate-pulse" style={{ animationDuration: '3s' }}></div>
        <div className="absolute top-1/3 right-20 w-6 h-6 bg-cyan-400/20 rounded-full animate-pulse" style={{ animationDuration: '5s' }}></div>
      </div>

      <div className="max-w-8xl mx-auto w-full grid lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Content - Professional Hero Text */}
        <div className={`lg:col-span-7 space-y-8 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
        }`}>
          {/* Executive Badge */}
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-xl border border-blue-400/20 rounded-full px-6 py-3">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-blue-200 font-semibold text-sm">ENTERPRISE GAMING PLATFORM • LIVE</span>
          </div>

          {/* Professional Title */}
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-7xl xl:text-8xl font-bold leading-[0.9] text-white">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
                ZENTHA
              </span>
              <br />
              <span className="text-slate-200 text-4xl lg:text-5xl xl:text-6xl font-light">
                Gaming Ecosystem
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-slate-300 font-medium leading-relaxed max-w-2xl">
              The world's first comprehensive blockchain gaming platform connecting 
              <span className="text-blue-400 font-semibold"> 500,000+ gamers</span> with 
              <span className="text-purple-400 font-semibold"> next-generation experiences</span>
            </p>
          </div>

          {/* Professional CTA Section */}
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40">
                <span className="flex items-center space-x-2">
                  <span>Launch Platform</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
              <button className="px-8 py-4 border-2 border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white font-bold rounded-xl transition-all duration-300 backdrop-blur-sm hover:bg-white/5">
                View Documentation
              </button>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex items-center space-x-8 text-sm text-slate-400">
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Audited Smart Contracts</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Enterprise Security</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>24/7 Support</span>
              </div>
            </div>
          </div>

                  </div>

        {/* Right Side - Professional Dashboard */}
        <div className={`lg:col-span-5 relative flex justify-center items-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
        }`}>
          
          {/* Executive Analytics Dashboard */}
          <img src="./images/hero.png" alt="Zentha" className="w-3/5 h-full object-contain" />
        </div>
      </div>

      {/* Professional Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
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
