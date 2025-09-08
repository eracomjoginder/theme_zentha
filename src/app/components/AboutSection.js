'use client'

import { useState, useEffect } from 'react'
import Image from "next/image";
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
    <section id="about" className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col-reverse lg:flex-row gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Content - Image */}
          <div className={`lg:flex-1 relative transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
          }`}>
            <Image 
              src="/images/character3.png" 
              alt="Zentha" 
              width={500}
              height={500}
              className="w-full max-w-[400px] sm:max-w-[500px] lg:max-w-none h-auto object-contain mx-auto lg:mx-0" 
            />
          </div>
          
          {/* Right Content - Text */}
          <div className={`lg:flex-1 space-y-6 sm:space-y-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
          }`}>
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
                  About Zentha
                </span>
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/90 font-medium">
                Revolutionary Gaming Ecosystem
              </p>
            </div>

            <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-white/80 leading-relaxed">
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
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-6 sm:pt-8">
              <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/10 text-center flex-1">
                <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-2">50M+</div>
                <div className="text-white/70 text-sm sm:text-base">Tokens Sold</div>
              </div>
              <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/10 text-center flex-1">
                <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-2">100K+</div>
                <div className="text-white/70 text-sm sm:text-base">Community Members</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Features */}
        <div className={`mt-12 sm:mt-16 lg:mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}>
          <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10 text-center hover:bg-black/30 transition-all duration-300 transform hover:scale-105">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Lightning Fast</h3>
            <p className="text-white/70 text-sm sm:text-base">Built on high-performance blockchain technology for instant transactions</p>
          </div>

          <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10 text-center hover:bg-black/30 transition-all duration-300 transform hover:scale-105">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Secure & Safe</h3>
            <p className="text-white/70 text-sm sm:text-base">Advanced security protocols ensure your assets are always protected</p>
          </div>

          <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10 text-center hover:bg-black/30 transition-all duration-300 transform hover:scale-105">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Community Driven</h3>
            <p className="text-white/70 text-sm sm:text-base">Join thousands of gamers and investors in our growing ecosystem</p>
          </div>
        </div>
      </div>
    </section>
  )
}
