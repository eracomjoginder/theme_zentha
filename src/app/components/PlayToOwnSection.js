'use client'

import { useState, useEffect } from 'react'
import Image from "next/image";
import Link from 'next/link'
import controllerIcon from '../../../public/images/icons/controller.png'
import trophyIcon from '../../../public/images/icons/trophy.png'
import diamondIcon from '../../../public/images/icons/diamond.png'
import rocketIcon from '../../../public/images/icons/rocket.png'
import superPowerIcon from '../../../public/images/icons/super-power.png'
import statisticsIcon from '../../../public/images/icons/statistics.png'
import targetIcon from '../../../public/images/icons/target.png'
import calendarIcon from '../../../public/images/icons/calendar.png'
export default function PlayToOwnSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeStep, setActiveStep] = useState(0)

  // Helper function to render icons (either emoji strings or imported images)
  const renderIcon = (icon, className = "w-6 h-6 sm:w-8 sm:h-8") => {
    if (typeof icon === 'string') {
      return icon
    } else {
      return <Image src={icon.src} alt="Icon" className={className} width={500} height={500} />
    }
  }

  const playSteps = [
    {
      id: 1,
      title: "Play the Game",
      description: "Complete daily quests, win matches, level up your character, and participate in events to earn Free Points.",
      icon: controllerIcon,
      color: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-500/20 to-cyan-500/20",
      features: [
        "Complete daily quests",
        "Win matches and tournaments",
        "Level up your character",
        "Participate in special events"
      ]
    },
    {
      id: 2,
      title: "Earn More by Winning",
      description: "Compete in PvP, guild wars, or leaderboard challenges to earn bonus points faster.",
      icon: trophyIcon,
      color: "from-blue-500 to-blue-500",
      bgGradient: "from-blue-500/20 to-blue-500/20",
      features: [
        "PvP competitions",
        "Guild wars and battles",
        "Leaderboard challenges",
        "Elite tournaments"
      ]
    },
    {
      id: 3,
      title: "Redeem NFTs with Free Points",
      description: "Use Free Points to redeem NFTs – no crypto, just gameplay.",
      icon: diamondIcon,
      color: "from-blue-500 to-emerald-500",
      bgGradient: "from-blue-500/20 to-emerald-500/20",
      features: [
        "Redeem character NFTs",
        "Get weapon and gear NFTs",
        "Acquire land NFTs",
        "No cryptocurrency required"
      ]
    },
    {
      id: 4,
      title: "No Crypto Needed",
      description: "Beginners can enjoy Zentha without spending real money or crypto. All they need is time, skill, and consistency.",
      icon: rocketIcon,
      color: "from-yellow-500 to-orange-500",
      bgGradient: "from-yellow-500/20 to-orange-500/20",
      features: [
        "No real money investment",
        "No cryptocurrency knowledge needed",
        "Just time, skill, and consistency",
        "Perfect for beginners"
      ]
    }
  ]

  const benefits = [
    {
      title: "Effort = Ownership",
      description: "Your gaming skills directly translate to NFT ownership",
      icon: superPowerIcon
    },
    {
      title: "No Financial Barrier",
      description: "Start playing without any upfront investment",
      icon: rocketIcon
    },
    {
      title: "Skill-Based Rewards",
      description: "Better players earn more valuable NFTs",
      icon: statisticsIcon
    },
    {
      title: "True Gaming Economy",
      description: "Earn through gameplay, not spending",
      icon: diamondIcon
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('play-to-own')
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  // Auto-rotate active step every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep(prev => (prev + 1) % playSteps.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [playSteps.length])

  return (
    <section id="play-to-own" className="min-h-screen relative overflow-hidden px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
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
            <div className="text-xl sm:text-2xl">{renderIcon(targetIcon, "w-5 h-5 sm:w-6 sm:h-6")}</div>
            <span className="text-blue-200 font-semibold text-xs sm:text-sm lg:text-base">PLAY TO OWN</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-500 bg-clip-text text-transparent">
              Buy NFTs with Free Points
            </span>
            <br />
            <span className="text-white">Play More, Own More</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed px-4">
            In Zentha, effort = ownership. No money? No problem.
          </p>
        </div>

        {/* How It Works Section */}
        <div className={`mb-12 sm:mb-16 lg:mb-20 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}>
          <div className="text-center mb-6 sm:mb-8 lg:mb-12">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
                How It Works
              </span>
            </h3>
          </div>

          {/* Steps Flow */}
          <div className="relative">
            {/* Steps Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 relative z-10">
              {playSteps.map((step, index) => (
                <div
                  key={step.id}
                  className={`relative p-4 sm:p-6 lg:p-8 rounded-2xl border transition-all duration-500 transform hover:scale-105 cursor-pointer ${
                    activeStep === index
                      ? `bg-gradient-to-r ${step.bgGradient} border-white/30 shadow-2xl`
                      : 'bg-black/20 border-white/10 hover:bg-black/30'
                  }`}
                  onClick={() => setActiveStep(index)}
                >
                  {/* Step Number */}
                  <div className="absolute -top-3 sm:-top-4 -left-3 sm:-left-4 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-blue-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm">
                    {step.id}
                  </div>

                  {/* Icon */}
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 ${step.color} rounded-xl sm:rounded-2xl flex items-center justify-center text-2xl sm:text-3xl lg:text-4xl mx-auto mb-4 sm:mb-6 shadow-lg`}>
                    {renderIcon(step.icon, "w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12")}
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4">
                      {step.title}
                    </h4>
                    <p className="text-white/70 text-xs sm:text-sm lg:text-base mb-4 sm:mb-6 leading-relaxed">
                      {step.description}
                    </p>
                    
                    {/* Features List */}
                    <div className="space-y-1.5 sm:space-y-2">
                      {step.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-xs sm:text-sm text-white/80">
                          <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-blue-400 rounded-full flex-shrink-0"></div>
                          <span className="text-xs sm:text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Animated Border */}
                  {activeStep === index && (
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className={`mb-12 sm:mb-16 lg:mb-20 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}>
          <div className="bg-gradient-to-r from-blue-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 border border-white/10">
            <div className="text-center mb-6 sm:mb-8 lg:mb-12">
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
                  Why Free Points Matter
                </span>
              </h3>
              <p className="text-base sm:text-lg lg:text-xl text-white/80 max-w-3xl mx-auto px-4">
                Experience true gaming freedom without financial barriers
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={benefit.title}
                  className="bg-black/20 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/10 text-center hover:bg-black/30 transition-all duration-300 transform hover:scale-105"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{renderIcon(benefit.icon, "w-8 h-8  mx-auto sm:w-10 sm:h-10")}</div>
                  <h4 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">{benefit.title}</h4>
                  <p className="text-white/70 text-xs sm:text-sm leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Example Section */}
        <div className={`mb-12 sm:mb-16 lg:mb-20 transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}>
          <div className="bg-gradient-to-r from-blue-500/20 via-blue-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 border border-white/10">
            <div className="text-center mb-6 sm:mb-8 lg:mb-12">
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-500 bg-clip-text text-transparent">
                  Example Journey
                </span>
              </h3>
              <p className="text-base sm:text-lg lg:text-xl text-white/80 max-w-3xl mx-auto px-4">
                See how a new player can earn their first NFT
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
              {/* Week 1 */}
              <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/10">
                <div className="text-center mb-4 sm:mb-6">
                                     <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center text-xl sm:text-2xl mx-auto mb-3 sm:mb-4">
                     {renderIcon(calendarIcon, "w-6 h-6 sm:w-8 sm:h-8")}
                   </div>
                  <h4 className="text-xl sm:text-2xl font-bold text-white mb-2">Week 1</h4>
                  <p className="text-blue-400 font-semibold text-sm sm:text-base">New Player</p>
                </div>
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-white/80 text-sm sm:text-base">Daily Quests</span>
                    <span className="text-green-400 font-semibold text-sm sm:text-base">+50 Points</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80 text-sm sm:text-base">First Wins</span>
                    <span className="text-green-400 font-semibold text-sm sm:text-base">+100 Points</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80 text-sm sm:text-base">Level Up</span>
                    <span className="text-green-400 font-semibold text-sm sm:text-base">+200 Points</span>
                  </div>
                  <div className="border-t border-white/10 pt-2 sm:pt-3 mt-3 sm:mt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-semibold text-sm sm:text-base">Total</span>
                      <span className="text-blue-400 font-bold text-base sm:text-lg">350 Points</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Week 2-3 */}
              <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10">
                <div className="text-center mb-6">
                                     <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4">
                     {renderIcon(trophyIcon, "w-8 h-8")}
                   </div>
                  <h4 className="text-2xl font-bold text-white mb-2">Week 2-3</h4>
                  <p className="text-blue-400 font-semibold">Competitive Player</p>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">PvP Matches</span>
                    <span className="text-blue-400 font-semibold">+500 Points</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Tournament Wins</span>
                    <span className="text-blue-400 font-semibold">+800 Points</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Guild Activities</span>
                    <span className="text-blue-400 font-semibold">+300 Points</span>
                  </div>
                  <div className="border-t border-white/10 pt-3 mt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-semibold">Total</span>
                      <span className="text-blue-400 font-bold text-lg">1,600 Points</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Week 4+ */}
              <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10">
                <div className="text-center mb-6">
                                     <div className="w-16 h-16 to-emerald-500 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4">
                     {renderIcon(diamondIcon, "w-8 h-8")}
                   </div>
                  <h4 className="text-2xl font-bold text-white mb-2">Week 4+</h4>
                  <p className="text-blue-400 font-semibold">NFT Owner</p>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Elite Tournaments</span>
                    <span className="text-blue-400 font-semibold">+1,200 Points</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Leaderboard Top 100</span>
                    <span className="text-blue-400 font-semibold">+2,000 Points</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Special Events</span>
                    <span className="text-blue-400 font-semibold">+500 Points</span>
                  </div>
                  <div className="border-t border-white/10 pt-3 mt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-semibold">Total</span>
                      <span className="text-blue-400 font-bold text-lg">3,700 Points</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-8 sm:mt-12">
              <div className="bg-gradient-to-r from-blue-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl p-6 border border-white/10 max-w-2xl mx-auto">
                <h4 className="text-2xl font-bold text-white mb-2">First NFT Unlocked!</h4>
                <p className="text-white/80">
                  With 3,700+ points, you can now redeem your first character NFT and start building your collection.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className={`text-center transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}>
          <div className="bg-gradient-to-r from-blue-500/20 via-blue-500/20 to-blue-500/20 backdrop-blur-sm rounded-3xl p-8 sm:p-12 border border-white/10 max-w-4xl mx-auto">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Start Your Journey Today
            </h3>
            <p className="text-lg sm:text-xl text-white/80 mb-8 sm:mb-10 max-w-2xl mx-auto">
              No money needed, no crypto knowledge required. Just pure gaming skill and dedication.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <Link href="/" className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-blue-600 hover:from-blue-500 hover:to-blue-500 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40 text-sm sm:text-base">
                    <span className="flex items-center justify-center space-x-2">
                      <span>Start playing free</span>
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  </Link>
                  <Link href="/about" className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white font-bold rounded-xl transition-all duration-300 backdrop-blur-sm hover:bg-white/5 text-sm sm:text-base">
                    Learn More
                  </Link>
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
