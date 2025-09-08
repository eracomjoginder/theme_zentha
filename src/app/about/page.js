'use client'

import { useState, useEffect } from 'react'
import Image from "next/image";
import Link from 'next/link'
import Navigation from '../components/Navigation'
import SharedFooter from '../components/SharedFooter'
import controllerIcon1 from '../../../public/images/icons/controller.png'
import superPowerIcon from '../../../public/images/icons/super-power.png'
import rocketIcon from '../../../public/images/icons/rocket.png'
import statisticsIcon from '../../../public/images/icons/statistics.png'
import linkIcon from '../../../public/images/icons/link.png'

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeFeature, setActiveFeature] = useState(0)

  // Helper function to render icons (either emoji strings or imported images)
  const renderIcon = (icon, className = "w-6 h-6 sm:w-8 sm:h-8") => {
    if (typeof icon === 'string') {
      return icon
    } else {
      return <Image src={icon.src} alt="Icon" className={className} width={500} height={500}/>
    }
  }

  useEffect(() => {
    setIsVisible(true)
    
    // Auto-rotate features
    const timer = setInterval(() => {
      setActiveFeature(prev => (prev + 1) % 5)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  const keyFeatures = [
    {
      id: 1,
      title: "AAA-Quality Gaming",
      description: "Fast, competitive, and skill-based games across multiple genres",
      icon: controllerIcon1,
      color: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      id: 2,
      title: "Real Ownership",
      description: "Skins, weapons, avatars, and lands are truly yours",
      icon: superPowerIcon,
      color: "from-blue-500 to-blue-500",
      bgGradient: "from-blue-500/20 to-blue-500/20"
    },
    {
      id: 3,
      title: "One Universe",
      description: "All games are connected, with assets usable across titles",
      icon: rocketIcon,
      color: "from-green-500 to-emerald-500",
      bgGradient: "from-green-500/20 to-emerald-500/20"
    },
    {
      id: 4,
      title: "Fair & Rewarding",
      description: "Earn through skill, not spending",
      icon: statisticsIcon,
      color: "from-yellow-500 to-orange-500",
      bgGradient: "from-yellow-500/20 to-orange-500/20"
    },
    {
      id: 5,
      title: "Effortless Blockchain Integration",
      description: "No crypto knowledge needed",
      icon: linkIcon,
      color: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-500/20 to-pink-500/20"
    }
  ]

  

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#1a1a2e] to-[#16213e] relative overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden non-interactive-overlay">
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
        <div className="absolute bottom-20 right-20 w-12 h-12 border border-blue-500/30 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
        <div className="absolute top-1/2 left-1/2 w-8 h-8 bg-blue-500/30 rounded-lg animate-bounce"></div>
      </div>

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <div className="relative z-10 pt-20 sm:pt-24 lg:pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className={`text-center mb-12 sm:mb-16 lg:mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}>
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/10 to-blue-500/10 backdrop-blur-xl border border-blue-400/20 rounded-full px-3 sm:px-4 lg:px-6 py-2 sm:py-3 mb-4 sm:mb-6">
              <div className="text-xl sm:text-2xl">{renderIcon(rocketIcon, "w-5 h-5 sm:w-6 sm:h-6")}</div>
              <span className="text-blue-200 font-semibold text-xs sm:text-sm lg:text-base">ABOUT ZENTHA</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                Introduction to Zentha
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/90 font-medium max-w-4xl mx-auto px-4 italic">
              Redefining Gaming Through Ownership, Freedom & Fun
            </p>
          </div>

          {/* Introduction Section */}
          <div className={`mb-12 sm:mb-16 lg:mb-20 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}>
            <div className="bg-gradient-to-r from-blue-500/10 to-blue-500/10 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 border border-white/10">
              <div className="text-center mb-6 sm:mb-8">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                  <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
                    What Makes Zentha Special?
                  </span>
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-4xl mx-auto px-4">
                  Zentha is a next-generation gaming platform where immersive gameplay meets real-world value. 
                  Designed by gamers, for gamers, Zentha combines high-quality games, player-owned assets, 
                  and community-driven progression – all wrapped in one powerful ecosystem.
                </p>
              </div>
            </div>
          </div>

          {/* Key Features Section */}
          <div className={`mb-12 sm:mb-16 lg:mb-20 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {keyFeatures.map((feature, index) => (
                <div
                  key={feature.id}
                  className={`relative p-4 sm:p-6 lg:p-8 rounded-2xl border transition-all duration-500 transform hover:scale-105 cursor-pointer ${
                    activeFeature === index
                      ? `bg-gradient-to-r ${feature.bgGradient} border-white/30 shadow-2xl`
                      : 'bg-black/20 border-white/10 hover:bg-black/30'
                  }`}
                  onClick={() => setActiveFeature(index)}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Feature Icon */}
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 ${feature.color} rounded-xl sm:rounded-2xl flex items-center justify-center text-2xl sm:text-3xl mx-auto mb-4 sm:mb-6 shadow-lg`}>
                    {renderIcon(feature.icon, "w-6 h-6 sm:w-8 sm:h-8")}
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-white/70 text-xs sm:text-sm lg:text-base leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  {/* Animated Border */}
                  {activeFeature === index && (
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mission & Vision Section */}
          <div className={`grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-12 sm:mb-16 lg:mb-20 transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}>
            {/* Left Content */}
            <div className={`space-y-6 sm:space-y-8 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
            }`}>
              <div className="space-y-4 sm:space-y-6">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white">
                  <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
                    Our Mission
                  </span>
                </h2>
                <p className="text-lg sm:text-xl text-white/80 leading-relaxed">
                  Zentha is a revolutionary gaming ecosystem crafted by passionate developers, designers, 
                  and players who believe in one mission:
                </p>
              </div>

              <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-white/80 leading-relaxed">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p>
                    <strong className="text-white">To return power, ownership, and real-world value back to the players.</strong>
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p>
                    In an era where traditional games lock players into closed systems, Zentha opens the gates 
                    to limitless gameplay, community-driven development, and rewarding progression.
                  </p>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 sm:gap-6 pt-6 sm:pt-8">
                <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/10 text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-2">50M+</div>
                  <div className="text-white/70 text-sm sm:text-base">Tokens Sold</div>
                </div>
                <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/10 text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-2">100K+</div>
                  <div className="text-white/70 text-sm sm:text-base">Community Members</div>
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
                    <Image 
                      src="/images/character1.png" 
                      alt="Zentha Gaming Character" 
                      className="w-full h-full object-contain"
                      width={500}
                      height={500}  
                    />
                  </div>

                  {/* Floating Particles Overlay */}
                  <div className="absolute inset-0 pointer-events-none">
                    {Array.from({ length: 20 }, (_, i) => (
                      <div
                        key={i}
                        className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full animate-pulse"
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



          {/* Core Values Section */}
          <div className={`mb-12 sm:mb-16 lg:mb-20 transition-all duration-1000 delay-900 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}>
            <div className="bg-gradient-to-r from-blue-500/10 to-blue-500/10 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 border border-white/10">
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                  <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
                    Our Core Values
                  </span>
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto px-4">
                  The principles that guide everything we do at Zentha
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center hover:bg-black/30 transition-all duration-300 transform hover:scale-105">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Lightning Fast</h3>
                  <p className="text-white/70 text-sm sm:text-base">Built on high-performance blockchain technology for instant transactions</p>
                </div>

                <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center hover:bg-black/30 transition-all duration-300 transform hover:scale-105">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Secure & Safe</h3>
                  <p className="text-white/70 text-sm sm:text-base">Advanced security protocols ensure your assets are always protected</p>
                </div>

                <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center hover:bg-black/30 transition-all duration-300 transform hover:scale-105 sm:col-span-2 lg:col-span-1">
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
          </div>

          {/* CTA Section */}
          <div className={`text-center mb-20 transition-all duration-1000 delay-1100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}>
            <div className="bg-gradient-to-r from-blue-500/10 to-blue-500/10 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 border border-white/10">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
                  <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
                    Ready to Join the Revolution?
                  </span>
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-white/80 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                  Start your journey with Zentha today and experience the future of gaming where ownership, freedom, and fun come together
                </p>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                  <Link href="/" className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-blue-600 hover:from-blue-500 hover:to-blue-500 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40 text-sm sm:text-base">
                    <span className="flex items-center justify-center space-x-2">
                      <span>Get Started</span>
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  </Link>
                  <Link href="/contact" className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white font-bold rounded-xl transition-all duration-300 backdrop-blur-sm hover:bg-white/5 text-sm sm:text-base">
                    Contact Us
                  </Link>
                </div>
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
