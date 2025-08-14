'use client'

import { useState, useEffect } from 'react'

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('about')
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  return (
    <section id="about" className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 py-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className={`relative transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
          }`}>
            <img src="./images/character3.png" alt="Zentha" className="w-full h-full object-contain" />
          </div>
          {/* right Content */}
          <div className={`space-y-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
          }`}>
            <div className="space-y-6">
              <h2 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-blue-400 to-pink-500 bg-clip-text text-transparent">
                  About Zentha
                </span>
              </h2>
              <p className="text-2xl lg:text-3xl text-white/90 font-medium">
                Revolutionary Gaming Ecosystem
              </p>
            </div>

            <div className="space-y-6 text-lg text-white/80 leading-relaxed">
              <p>
                Zentha is a groundbreaking cryptocurrency project that combines the excitement of gaming 
                with the power of blockchain technology. Our ecosystem creates a seamless bridge between 
                traditional gaming and the future of digital assets.
              </p>
              <p>
                Built on cutting-edge blockchain infrastructure, Zentha offers gamers and investors alike 
                the opportunity to participate in a revolutionary platform that rewards skill, strategy, 
                and community engagement.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 pt-8">
              <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">50M+</div>
                <div className="text-white/70">Tokens Sold</div>
              </div>
              <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center">
                <div className="text-3xl font-bold text-pink-400 mb-2">100K+</div>
                <div className="text-white/70">Community Members</div>
              </div>
            </div>
          </div>

          {/* Right Content - Gaming Character */}
          
        </div>

        {/* Bottom Features */}
        <div className={`mt-20 grid md:grid-cols-3 gap-8 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}>
          <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center hover:bg-black/30 transition-all duration-300 transform hover:scale-105">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Lightning Fast</h3>
            <p className="text-white/70">Built on high-performance blockchain technology for instant transactions</p>
          </div>

          <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center hover:bg-black/30 transition-all duration-300 transform hover:scale-105">
            <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Secure & Safe</h3>
            <p className="text-white/70">Advanced security protocols ensure your assets are always protected</p>
          </div>

          <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center hover:bg-black/30 transition-all duration-300 transform hover:scale-105">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Community Driven</h3>
            <p className="text-white/70">Join thousands of gamers and investors in our growing ecosystem</p>
          </div>
        </div>
      </div>
    </section>
  )
}
