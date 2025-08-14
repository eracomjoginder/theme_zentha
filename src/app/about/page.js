'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Navigation from '../components/Navigation'
import SharedFooter from '../components/SharedFooter'

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#1a1a2e] to-[#16213e] relative overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a2e] to-[#16213e]"></div>
        {/* Animated Stars */}
        {Array.from({ length: 50 }, (_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-16 h-16 border border-blue-500/30 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
        <div className="absolute bottom-20 right-20 w-12 h-12 border border-purple-500/30 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
        <div className="absolute top-1/2 left-1/2 w-8 h-8 bg-pink-500/30 rounded-lg animate-bounce"></div>
      </div>

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <div className="relative z-10 pt-32">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}>
            <h1 className="text-6xl lg:text-7xl font-bold leading-tight mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-pink-500 bg-clip-text text-transparent">
                About Zentha
              </span>
            </h1>
            <p className="text-2xl lg:text-3xl text-white/90 font-medium max-w-3xl mx-auto">
              Revolutionary Gaming Ecosystem
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Left Content */}
            <div className={`space-y-8 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
            }`}>
              <div className="space-y-6">
                <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-white">
                  Our Mission
                </h2>
                <p className="text-xl text-white/80 leading-relaxed">
                  Zentha is a groundbreaking cryptocurrency project that combines the excitement of gaming 
                  with the power of blockchain technology. Our ecosystem creates a seamless bridge between 
                  traditional gaming and the future of digital assets.
                </p>
              </div>

              <div className="space-y-6 text-lg text-white/80 leading-relaxed">
                <p>
                  Built on cutting-edge blockchain infrastructure, Zentha offers gamers and investors alike 
                  the opportunity to participate in a revolutionary platform that rewards skill, strategy, 
                  and community engagement.
                </p>
                <p>
                  We envision a future where gaming and finance are seamlessly integrated, creating new 
                  opportunities for players to earn while they play and for investors to participate in 
                  the gaming economy.
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
            <div className={`relative transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
            }`}>
              <div className="relative mx-auto w-full max-w-md lg:max-w-lg xl:max-w-xl">
                {/* Character Container */}
                <div className="relative w-full aspect-[3/4]">
                  {/* Main Character Image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img 
                      src="/images/character1.png" 
                      alt="Zentha Gaming Character" 
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Floating Particles Overlay */}
                  <div className="absolute inset-0 pointer-events-none">
                    {Array.from({ length: 20 }, (_, i) => (
                      <div
                        key={i}
                        className="absolute w-2 h-2 bg-blue-400 rounded-full animate-pulse"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                          animationDelay: `${Math.random() * 2}s`,
                          animationDuration: `${2 + Math.random() * 2}s`
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className={`grid md:grid-cols-3 gap-8 mb-20 transition-all duration-1000 delay-500 ${
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

          {/* CTA Section */}
          <div className={`text-center transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}>
            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10 max-w-2xl mx-auto">
              <h3 className="text-3xl font-bold text-white mb-4">
                Ready to Join the Revolution?
              </h3>
              <p className="text-white/80 mb-8 text-lg">
                Be part of the future of gaming and blockchain technology
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white font-bold rounded-xl transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/50">
                  Back to Home
                </Link>
                <Link href="/contact" className="px-8 py-4 border border-white/30 hover:border-white/50 text-white font-bold rounded-xl transition-all duration-300 backdrop-blur-sm hover:bg-white/10">
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Shared Footer */}
      <SharedFooter />
    </main>
  )
}
