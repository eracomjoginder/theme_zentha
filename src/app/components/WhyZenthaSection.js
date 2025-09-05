'use client'

import { useState, useEffect } from 'react'

export default function WhyZenthaSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeFeature, setActiveFeature] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('why-zentha')
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  // Auto-rotate active feature every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveFeature(prev => (prev + 1) % keyFeatures.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const keyFeatures = [
    {
      id: 1,
      title: "Gameplay Comes First",
      description: "AAA-quality graphics and immersive gameplay",
      image: "./images/character1.png",
      color: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      id: 2,
      title: "True Ownership",
      description: "Trade, upgrade, or sell — without limits",
      image: "./images/character2.png",
      color: "from-blue-500 to-blue-500",
      bgGradient: "from-blue-500/20 to-blue-500/20"
    },
    {
      id: 3,
      title: "One Universe, Many Games",
      description: "Multiple interconnected titles under one ecosystem",
      image: "./images/character3.png",
      color: "from-green-500 to-emerald-500",
      bgGradient: "from-green-500/20 to-emerald-500/20"
    },
    {
      id: 4,
      title: "Fair, Transparent, and Player-Friendly",
      description: "Earn rewards by playing and contributing",
      image: "./images/character4.png",
      color: "from-yellow-500 to-orange-500",
      bgGradient: "from-yellow-500/20 to-orange-500/20"
    }
  ]

  const comparisonData = [
    {
      feature: "Ownership",
      traditional: { text: "Centralized", icon: "❌", color: "text-red-400" },
      zentha: { text: "Truly Yours", icon: "✅", color: "text-green-400" }
    },
    {
      feature: "Interoperability",
      traditional: { text: "Single Game", icon: "❌", color: "text-red-400" },
      zentha: { text: "Cross-Game Use", icon: "✅", color: "text-green-400" }
    },
    {
      feature: "Trade & Earn",
      traditional: { text: "Limited or None", icon: "❌", color: "text-red-400" },
      zentha: { text: "Open Marketplace", icon: "✅", color: "text-green-400" }
    },
    {
      feature: "Legacy",
      traditional: { text: "Temporary", icon: "❌", color: "text-red-400" },
      zentha: { text: "Permanent Proof", icon: "✅", color: "text-green-400" }
    }
  ]

  const nftBenefits = [
    "OWN YOUR CHARACTERS, SKINS, LANDS, AND GEAR",
    "TRADE OR RENT ASSETS FOR REAL VALUE",
    "CUSTOMIZE & SHOWCASE YOUR IDENTITY",
    "EARN FROM SKILL, EFFORT, AND RARITY",
    "BUILD A LEGACY INSIDE THE ZENTHA UNIVERSE"
  ]

  return (
    <section id="why-zentha" className="min-h-screen relative overflow-hidden px-4 sm:px-6 lg:px-8 py-12 sm:py-12 lg:py-20">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 bg-gradient-to-r from-blue-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-80 lg:w-80 h-64 sm:h-80 lg:h-80 bg-gradient-to-r from-blue-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-8 sm:mb-12 lg:mb-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}>
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/10 to-blue-500/10 backdrop-blur-xl border border-blue-400/20 rounded-full px-3 sm:px-4 lg:px-6 py-2 sm:py-3 mb-4 sm:mb-6">
            <span className="text-blue-200 font-semibold text-xs sm:text-sm lg:text-base">WHY ZENTHA STANDS OUT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-500 bg-clip-text text-transparent">
              Why Zentha Stands Out
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed px-4">
            A true evolution in gaming – not just another crypto project.
          </p>
        </div>

        {/* Key Features Grid */}
        <div className={`mb-12 sm:mb-16 lg:mb-20 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
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
                {/* Feature Image */}
                <div className="relative mb-4 sm:mb-6">
                  <div className="w-full h-24 sm:h-32 lg:h-40 bg-gradient-to-br from-black/40 to-black/60 rounded-lg sm:rounded-xl overflow-hidden">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-contain transform hover:scale-110 transition-transform duration-500"
                    />
                  </div>
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

        {/* Comparison Table */}
        <div className={`mb-12 sm:mb-16 lg:mb-20 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}>
          <div className="bg-gradient-to-r from-blue-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 border border-white/10">
            <div className="text-center mb-6 sm:mb-8 lg:mb-12">
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
                  Why NFTs Matter in Zentha
                </span>
              </h3>
            </div>

            {/* Comparison Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="text-left py-3 sm:py-4 px-2 sm:px-4 text-white/80 font-semibold text-sm sm:text-base">Feature</th>
                    <th className="text-left py-3 sm:py-4 px-2 sm:px-4 text-red-400 font-semibold text-sm sm:text-base">Traditional Games</th>
                    <th className="text-left py-3 sm:py-4 px-2 sm:px-4 text-green-400 font-semibold text-sm sm:text-base">Zentha NFTs</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr key={row.feature} className="border-b border-white/10 hover:bg-white/5 transition-colors duration-300">
                      <td className="py-3 sm:py-4 px-2 sm:px-4 text-white font-medium text-sm sm:text-base">{row.feature}</td>
                      <td className="py-3 sm:py-4 px-2 sm:px-4">
                        <div className="flex items-center space-x-1 sm:space-x-2">
                          <span className="text-lg sm:text-2xl">{row.traditional.icon}</span>
                          <span className={`font-medium text-xs sm:text-sm ${row.traditional.color}`}>
                            {row.traditional.text}
                          </span>
                        </div>
                      </td>
                      <td className="py-3 sm:py-4 px-2 sm:px-4">
                        <div className="flex items-center space-x-1 sm:space-x-2">
                          <span className="text-lg sm:text-2xl">{row.zentha.icon}</span>
                          <span className={`font-medium text-xs sm:text-sm ${row.zentha.color}`}>
                            {row.zentha.text}
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* NFT Benefits Section */}
        <div className={`mb-12 sm:mb-16 lg:mb-20 transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}>
          <div className="bg-gradient-to-r from-blue-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 border border-white/10">
            <div className="text-center mb-6 sm:mb-8 lg:mb-12">
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
                  NFTs Empower You To:
                </span>
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {nftBenefits.map((benefit, index) => (
                <div
                  key={benefit}
                  className="bg-black/20 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/10 hover:bg-black/30 transition-all duration-300 transform hover:scale-105"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-blue-500 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-xs sm:text-sm flex-shrink-0 mt-1">
                      {index + 1}
                    </div>
                    <p className="text-white font-semibold text-xs sm:text-sm lg:text-base leading-relaxed">
                      {benefit}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        

    
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-10 sm:right-20 w-12 h-12 sm:w-16 sm:h-16 border border-blue-500/30 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
      <div className="absolute bottom-20 left-10 sm:left-20 w-8 h-8 sm:w-12 sm:h-12 border border-blue-500/30 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
      <div className="absolute top-1/2 right-1/3 w-6 h-6 sm:w-8 sm:h-8 bg-blue-500/30 rounded-lg animate-bounce"></div>
    </section>
  )
}
