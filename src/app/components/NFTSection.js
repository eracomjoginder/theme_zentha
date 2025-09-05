'use client'

import { useState, useEffect } from 'react';
import heroIcon from '../../../public/images/icons/super-power.png';
import controllerIcon2 from '../../../public/images/icons/controller.png';
import weaponIcon from '../../../public/images/icons/cross-swords.png';
import landIcon from '../../../public/images/icons/castle.png';
import trophyIcon from '../../../public/images/icons/trophy.png';
import tradingIcon from '../../../public/images/icons/loop-arrow.png';
import diamondIcon from '../../../public/images/icons/diamond.png';
import linkIcon from '../../../public/images/icons/link.png';
import statsIcon from '../../../public/images/icons/statistics.png';


export default function NFTSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeNFT, setActiveNFT] = useState(0)

  // Helper function to render icons (either emoji strings or imported images)
  const renderIcon = (icon, className = "w-6 h-6 sm:w-8 sm:h-8") => {
    if (typeof icon === 'string') {
      return icon
    } else {
      return <img src={icon.src} alt="NFT Icon" className={className} />
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('nft-section')
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  // Auto-rotate active NFT every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveNFT(prev => (prev + 1) % nftTypes.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nftTypes = [
    {
      id: 1,
      title: "Playable NFTs",
      subtitle: "Your Heroes, Your Rules",
      description: "Unlock and level up unique NFT avatars with distinct abilities. Customize appearance, gear, and traits. Use across multiple Zentha titles – RPG, PvP Arena, Open World, etc. Trade or lend your character NFTs to other players.",
      features: [
        "Unlock and level up unique NFT avatars with distinct abilities",
        "Customize appearance, gear, and traits",
        "Use across multiple Zentha titles – RPG, PvP Arena, Open World, etc",
        "Trade or lend your character NFTs to other players"
      ],
      image: "./images/character1.png",
      color: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-500/20 to-cyan-500/20",
      icon: heroIcon
    },
    {
      id: 2,
      title: "Weapon & Gear NFTs",
      subtitle: "Battle-Tested and Rare",
      description: "Weapons evolve based on your gameplay (XP, wins, battles). Unique skins, emblems, power-ups and attributes. Legendary weapons become collectables with real-world value. Some NFTs are only winnable through elite tournaments or quests.",
      features: [
        "Weapons evolve based on your gameplay (XP, wins, battles)",
        "Unique skins, emblems, power-ups and attributes",
        "Legendary weapons become collectables with real-world value",
        "Some NFTs are only winnable through elite tournaments or quests"
      ],
      image: "./images/character2.png",
      color: "from-blue-500 to-blue-500",
      bgGradient: "from-blue-500/20 to-blue-500/20",
      icon: weaponIcon
    },
    {
      id: 3,
      title: "Land NFTs",
      subtitle: "Build, Control, and Monetize",
      description: "Own land in the Zentha Metaverse. Host activities like tournaments, build training camps, shops, or guild HQs. Rent land to players or developers. Land scarcity ensures long-term value in the game economy.",
      features: [
        "Own land in the Zentha Metaverse",
        "Host activities like tournaments, build training camps, shops, or guild HQs",
        "Rent land to players or developers",
        "Land scarcity ensures long-term value in the game economy"
      ],
      image: "./images/character3.png",
      color: "from-blue-500 to-emerald-500",
      bgGradient: "from-blue-500/20 to-emerald-500/20",
      icon: landIcon
    },
    {
      id: 4,
      title: "Guild & Trophy NFTs",
      subtitle: "Proof of Legacy",
      description: "Earn NFT trophies for top leaderboard ranks, victories, and achievements. Mintable badges and clan emblems for guild-based identity. Provides a permanent on-chain history of player milestones in Zentha.",
      features: [
        "Earn NFT trophies for top leaderboard ranks, victories, and achievements",
        "Mintable badges and clan emblems for guild-based identity",
        "Provides a permanent on-chain history of player milestones in Zentha"
      ],
      image: "./images/character4.png",
      color: "from-yellow-500 to-orange-500",
      bgGradient: "from-yellow-500/20 to-orange-500/20",
      icon: trophyIcon
    }
  ]

  const marketplaceFeatures = [
    {
      title: "In-Game Trading",
      description: "Features in-game, gasless, and real-time trading of NFT assets",
      icon: tradingIcon
    },
    {
      title: "Rare Items",
      description: "Players can buy, sell, or auction rare gear, characters, and cosmetics",
      icon: diamondIcon
    },
    {
      title: "Full Integration",
      description: "The marketplace is fully integrated into gameplay, requiring no outside platforms",
      icon: linkIcon
    },
    {
      title: "Player-Driven",
      description: "Pricing and demand are player-driven, not studio-controlled",
      icon: statsIcon
    }
  ]

  return (
    <section id="nft-section" className="min-h-screen relative overflow-hidden px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
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
            <div className="text-xl sm:text-2xl">{renderIcon(controllerIcon2, "w-5 h-5 sm:w-6 sm:h-6")}</div>
            <span className="text-blue-200 font-semibold text-xs sm:text-sm lg:text-base">NFT GAMING ASSETS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-500 bg-clip-text text-transparent">
              NFTs in Zentha:
            </span>
            <br />
            <span className="text-white">Game Assets, Reimagined</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed px-4">
            In Zentha, NFTs aren't hype — they're the foundation of your in-game identity, power, and legacy.
          </p>
        </div>

        {/* Main NFT Layout - Restructured */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          {/* Top Row - Two Main NFT Types */}
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-12 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}>
            {/* Playable NFTs Card */}
            <div
              className={`relative p-4 sm:p-6 lg:p-8 rounded-2xl border cursor-pointer transition-all duration-500 transform hover:scale-105 ${
                activeNFT === 0
                  ? `bg-gradient-to-r ${nftTypes[0].bgGradient} border-white/30 shadow-2xl`
                  : 'bg-black/20 border-white/10 hover:bg-black/30'
              }`}
              onClick={() => setActiveNFT(0)}
            >
              <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-6">
                <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${nftTypes[0].color} rounded-xl flex items-center justify-center text-2xl sm:text-3xl shadow-lg flex-shrink-0`}>
                  {renderIcon(nftTypes[0].icon)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 mb-2">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">{nftTypes[0].title}</h3>
                    <span className="px-2 sm:px-3 py-1 bg-white/10 rounded-full text-xs sm:text-sm text-white/80 self-start sm:self-center">
                      {nftTypes[0].subtitle}
                    </span>
                  </div>
                  <p className="text-white/70 text-sm sm:text-base mb-4 leading-relaxed">
                    {nftTypes[0].description}
                  </p>
                  <div className="space-y-2">
                    {nftTypes[0].features.map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-white/80 text-xs sm:text-sm leading-relaxed">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Animated Border */}
              {activeNFT === 0 && (
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
              )}
            </div>

            {/* Weapon & Gear NFTs Card */}
            <div
              className={`relative p-4 sm:p-6 lg:p-8 rounded-2xl border cursor-pointer transition-all duration-500 transform hover:scale-105 ${
                activeNFT === 1
                  ? `bg-gradient-to-r ${nftTypes[1].bgGradient} border-white/30 shadow-2xl`
                  : 'bg-black/20 border-white/10 hover:bg-black/30'
              }`}
              onClick={() => setActiveNFT(1)}
            >
              <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-6">
                <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${nftTypes[1].color} rounded-xl flex items-center justify-center text-2xl sm:text-3xl shadow-lg flex-shrink-0`}>
                  {renderIcon(nftTypes[1].icon)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 mb-2">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">{nftTypes[1].title}</h3>
                    <span className="px-2 sm:px-3 py-1 bg-white/10 rounded-full text-xs sm:text-sm text-white/80 self-start sm:self-center">
                      {nftTypes[1].subtitle}
                    </span>
                  </div>
                  <p className="text-white/70 text-sm sm:text-base mb-4 leading-relaxed">
                    {nftTypes[1].description}
                  </p>
                  <div className="space-y-2">
                    {nftTypes[1].features.map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-white/80 text-xs sm:text-sm leading-relaxed">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Animated Border */}
              {activeNFT === 1 && (
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
              )}
            </div>
          </div>

          {/* Center - Large NFT Visual */}
          <div className={`relative mb-8 sm:mb-12 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}>
            {/* Main NFT Display */}
            <div className={`relative bg-gradient-to-br ${nftTypes[activeNFT].bgGradient} backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 xl:p-12 border border-white/20 overflow-hidden max-w-4xl mx-auto`}>
              {/* NFT Badge */}
              <div className="absolute top-2 sm:top-4 right-2 sm:right-4 z-20">
                <span className="px-2 sm:px-3 py-1 bg-white/10 border border-white/20 rounded-full text-white/80 text-xs sm:text-sm">NFT</span>
              </div>
              
              {/* NFT Card Visual */}
              <div className="relative z-10 text-center">
                <div className="relative mx-auto w-48 h-60 sm:w-64 sm:h-80 md:w-80 md:h-96 lg:w-96 lg:h-[28rem]">
                  {/* NFT Card Frame */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-xl sm:rounded-2xl border-2 border-blue-400/50 p-2 sm:p-4">
                    <div className="w-full h-full bg-gradient-to-br from-black/40 to-black/60 rounded-lg sm:rounded-xl p-2 sm:p-4">
                      {/* Character Image */}
                      <div className="w-full h-3/4 mb-2 sm:mb-4">
                        <img
                          src={nftTypes[activeNFT].image}
                          alt={nftTypes[activeNFT].title}
                          className="w-full h-full object-contain transform hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      
                      {/* NFT Info */}
                      <div className="h-1/4 flex flex-col justify-between">
                        <div className="text-center">
                          <div className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-1">
                            {nftTypes[activeNFT].title.toUpperCase()}
                          </div>
                          <div className="text-xs sm:text-sm text-blue-400">
                            #{Math.floor(Math.random() * 9999) + 1}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating Particles */}
                  <div className="absolute inset-0 pointer-events-none">
                    {Array.from({ length: 15 }, (_, i) => (
                      <div
                        key={i}
                        className={`absolute w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r ${nftTypes[activeNFT].color} rounded-full animate-pulse`}
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

              {/* Background Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${nftTypes[activeNFT].color} opacity-20 blur-3xl`}></div>
            </div>

            {/* NFT Selector Dots */}
            <div className="flex justify-center space-x-2 sm:space-x-3 mt-4 sm:mt-6">
              {nftTypes.map((_, index) => (
                <button
                  key={index}
                  className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                    activeNFT === index
                      ? `bg-gradient-to-r ${nftTypes[index].color} shadow-lg`
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                  onClick={() => setActiveNFT(index)}
                />
              ))}
            </div>
          </div>

          {/* Bottom Row - Additional NFT Types */}
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}>
            {/* Land NFTs Card */}
            <div
              className={`relative p-6 sm:p-8 rounded-2xl border cursor-pointer transition-all duration-500 transform hover:scale-105 ${
                activeNFT === 2
                  ? `bg-gradient-to-r ${nftTypes[2].bgGradient} border-white/30 shadow-2xl`
                  : 'bg-black/20 border-white/10 hover:bg-black/30'
              }`}
              onClick={() => setActiveNFT(2)}
            >
              <div className="flex items-start space-x-4 sm:space-x-6">
                <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${nftTypes[2].color} rounded-xl flex items-center justify-center text-2xl sm:text-3xl shadow-lg`}>
                  {renderIcon(nftTypes[2].icon)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-white">{nftTypes[2].title}</h3>
                    <span className="px-3 py-1 bg-white/10 rounded-full text-xs sm:text-sm text-white/80">
                      {nftTypes[2].subtitle}
                    </span>
                  </div>
                  <p className="text-white/70 text-sm sm:text-base mb-4 leading-relaxed">
                    {nftTypes[2].description}
                  </p>
                  <div className="space-y-2">
                    {nftTypes[2].features.map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-white/80 text-xs sm:text-sm leading-relaxed">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Animated Border */}
              {activeNFT === 2 && (
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
              )}
            </div>

            {/* Guild & Trophy NFTs Card */}
            <div
              className={`relative p-6 sm:p-8 rounded-2xl border cursor-pointer transition-all duration-500 transform hover:scale-105 ${
                activeNFT === 3
                  ? `bg-gradient-to-r ${nftTypes[3].bgGradient} border-white/30 shadow-2xl`
                  : 'bg-black/20 border-white/10 hover:bg-black/30'
              }`}
              onClick={() => setActiveNFT(3)}
            >
              <div className="flex items-start space-x-4 sm:space-x-6">
                <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${nftTypes[3].color} rounded-xl flex items-center justify-center text-2xl sm:text-3xl shadow-lg`}>
                  {renderIcon(nftTypes[3].icon)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-white">{nftTypes[3].title}</h3>
                    <span className="px-3 py-1 bg-white/10 rounded-full text-xs sm:text-sm text-white/80">
                      {nftTypes[3].subtitle}
                    </span>
                  </div>
                  <p className="text-white/70 text-sm sm:text-base mb-4 leading-relaxed">
                    {nftTypes[3].description}
                  </p>
                  <div className="space-y-2">
                    {nftTypes[3].features.map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-white/80 text-xs sm:text-sm leading-relaxed">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Animated Border */}
              {activeNFT === 3 && (
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
              )}
            </div>
          </div>
        </div>

        {/* NFT Marketplace Section */}
        <div className={`transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}>
          <div className="bg-gradient-to-r from-blue-500/20 to-blue-500/20 backdrop-blur-sm rounded-3xl p-8 sm:p-12 border border-white/10">
            <div className="text-center mb-8 sm:mb-12">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
                  NFT Marketplace
                </span>
              </h3>
              <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto">
                Player Economy at Work
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {marketplaceFeatures.map((feature, index) => (
                <div
                  key={feature.title}
                  className="bg-black/20 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center hover:bg-black/30 transition-all duration-300 transform hover:scale-105"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="text-4xl mb-4">{renderIcon(feature.icon, "w-8 h-8 mx-auto")}</div>
                  <h4 className="text-xl font-bold text-white mb-3">{feature.title}</h4>
                  <p className="text-white/70 text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        
      </div>

      {/* Floating NFT Elements */}
      <div className="absolute top-20 right-10 sm:right-20 w-12 h-12 sm:w-16 sm:h-16 border border-blue-500/30 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
      <div className="absolute bottom-20 left-10 sm:left-20 w-8 h-8 sm:w-12 sm:h-12 border border-blue-500/30 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
      <div className="absolute top-1/2 right-1/3 w-6 h-6 sm:w-8 sm:h-8 bg-cyan-500/30 rounded-lg animate-bounce"></div>
    </section>
  )
}
