'use client'

import { useState, useEffect } from 'react'

export default function RoadmapSection() {
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

    const element = document.getElementById('roadmap')
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  const roadmapItems = [
    {
      phase: "Phase 1",
      title: "Foundation & Launch",
      period: "Q1 2024",
      status: "completed",
      items: [
        "Project conceptualization and team formation",
        "Smart contract development and security audits",
        "Token generation event and ICO launch",
        "Community building and marketing campaigns"
      ]
    },
    {
      phase: "Phase 2",
      title: "Platform Development",
      period: "Q2 2024",
      status: "in-progress",
      items: [
        "Core platform architecture development",
        "Wallet integration and security implementation",
        "Beta testing with community members",
        "Partnership development with gaming studios"
      ]
    },
    {
      phase: "Phase 3",
      title: "Beta Launch",
      period: "Q3 2024",
      status: "upcoming",
      items: [
        "Public beta platform release",
        "First gaming integrations",
        "NFT marketplace beta",
        "Staking mechanism activation"
      ]
    },
    {
      phase: "Phase 4",
      title: "Full Platform",
      period: "Q4 2024",
      status: "upcoming",
      items: [
        "Full platform launch with all features",
        "Mobile app release",
        "Advanced AI gaming features",
        "Cross-chain bridge implementation"
      ]
    },
    {
      phase: "Phase 5",
      title: "Expansion",
      period: "2025",
      status: "upcoming",
      items: [
        "Global expansion and localization",
        "Advanced DeFi features",
        "Metaverse integration",
        "Enterprise partnerships"
      ]
    }
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'from-green-500 to-green-600'
      case 'in-progress':
        return 'from-blue-500 to-purple-600'
      case 'upcoming':
        return 'from-gray-500 to-gray-600'
      default:
        return 'from-gray-500 to-gray-600'
    }
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return (
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        )
      case 'in-progress':
        return (
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )
      case 'upcoming':
        return (
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        )
      default:
        return null
    }
  }

  return (
    <section id="roadmap" className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 py-20">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}>
          <h2 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-pink-500 bg-clip-text text-transparent">
              Development Roadmap
            </span>
          </h2>
          <p className="text-2xl lg:text-3xl text-white/90 font-medium max-w-3xl mx-auto">
            Our journey to revolutionize the gaming and blockchain industry
          </p>
        </div>

        {/* Professional Roadmap Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Central Timeline Spine */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full">
            <div className="w-full h-full bg-gradient-to-b from-blue-600 via-purple-600 to-pink-600 shadow-lg shadow-blue-500/20"></div>
            <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-blue-600 via-purple-600 to-pink-600 blur-sm opacity-30"></div>
          </div>

          {/* Professional Roadmap Cards */}
          <div className="space-y-24">
            {roadmapItems.map((item, index) => (
              <div
                key={index}
                className={`relative transition-all duration-1000 ease-out ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Premium Timeline Node */}
                <div className={`absolute left-1/2 transform -translate-x-1/2 w-20 h-20 bg-gradient-to-r ${getStatusColor(item.status)} rounded-2xl flex items-center justify-center shadow-2xl shadow-blue-500/30 z-20 border-4 border-white/10`}>
                  <div className="relative">
                    {getStatusIcon(item.status)}
                    <div className="absolute inset-0 bg-white/10 rounded-lg"></div>
                  </div>
                </div>

                {/* Professional Card Layout */}
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 0 ? '' : 'lg:flex-row-reverse'
                }`}>
                  
                  {/* Content Side */}
                  <div className={`${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12 lg:order-2'}`}>
                    <div className="bg-gradient-to-br from-slate-900/90 via-slate-800/80 to-slate-900/90 backdrop-blur-2xl rounded-3xl p-8 border border-slate-700/50 shadow-2xl shadow-black/20 hover:shadow-blue-500/10 transition-all duration-500 hover:border-slate-600/50">
                      
                      {/* Card Header */}
                      <div className="flex items-center justify-between mb-6">
                        <div className={`bg-gradient-to-r ${getStatusColor(item.status)} px-6 py-3 rounded-2xl shadow-lg`}>
                          <span className="text-white font-bold text-lg">{item.phase}</span>
                        </div>
                        <div className="text-right">
                          <div className="text-slate-400 text-sm font-medium">Target</div>
                          <div className="text-white font-semibold">{item.period}</div>
                        </div>
                      </div>

                      {/* Title with Emphasis */}
                      <h3 className="text-3xl font-bold text-white mb-6 leading-tight">
                        {item.title}
                      </h3>

                      {/* Professional Deliverables List */}
                      <div className="space-y-4 mb-8">
                        <h4 className="text-slate-300 font-semibold text-sm uppercase tracking-wider">Key Deliverables</h4>
                        <div className="grid gap-3">
                          {item.items.map((listItem, itemIndex) => (
                            <div key={itemIndex} className="flex items-start space-x-4 group">
                              <div className={`w-6 h-6 rounded-lg bg-gradient-to-r ${getStatusColor(item.status)} flex items-center justify-center mt-0.5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                              <span className="text-slate-200 leading-relaxed font-medium">{listItem}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Status & Progress */}
                      <div className="flex items-center justify-between">
                        <div className={`px-4 py-2 rounded-xl text-sm font-bold border ${
                          item.status === 'completed' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30' :
                          item.status === 'in-progress' ? 'bg-blue-500/10 text-blue-400 border-blue-500/30' :
                          'bg-slate-500/10 text-slate-400 border-slate-500/30'
                        }`}>
                          {item.status === 'completed' ? '✓ COMPLETED' :
                           item.status === 'in-progress' ? '⚡ IN PROGRESS' :
                           '⏳ UPCOMING'}
                        </div>
                        
                        {item.status === 'completed' && (
                          <div className="text-emerald-400 text-sm font-semibold">100%</div>
                        )}
                        {item.status === 'in-progress' && (
                          <div className="text-blue-400 text-sm font-semibold">75%</div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Visual Side */}
                  <div className={`${index % 2 === 0 ? 'lg:pl-12' : 'lg:pr-12 lg:order-1'}`}>
                    <div className="relative">
                      {/* Main Visual Container */}
                      <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/30 shadow-2xl">
                        
                        {/* Phase Indicator */}
                        <div className="text-center mb-6">
                          <div className={`w-24 h-24 mx-auto bg-gradient-to-r ${getStatusColor(item.status)} rounded-3xl flex items-center justify-center shadow-2xl mb-4`}>
                            <span className="text-4xl font-bold text-white">{index + 1}</span>
                          </div>
                          <h4 className="text-xl font-bold text-white">{item.title}</h4>
                        </div>

                        {/* Professional Metrics */}
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-slate-800/50 rounded-2xl p-4 text-center border border-slate-700/30">
                            <div className="text-2xl font-bold text-white mb-1">
                              {item.status === 'completed' ? '100%' :
                               item.status === 'in-progress' ? '75%' : '0%'}
                            </div>
                            <div className="text-slate-400 text-sm">Progress</div>
                          </div>
                          <div className="bg-slate-800/50 rounded-2xl p-4 text-center border border-slate-700/30">
                            <div className="text-2xl font-bold text-white mb-1">{item.items.length}</div>
                            <div className="text-slate-400 text-sm">Deliverables</div>
                          </div>
                        </div>

                        {/* Progress Bar */}
                        <div className="mt-6">
                          <div className="bg-slate-700/50 rounded-full h-3 overflow-hidden">
                            <div 
                              className={`h-full bg-gradient-to-r ${getStatusColor(item.status)} transition-all duration-1000 ease-out rounded-full`}
                              style={{ 
                                width: item.status === 'completed' ? '100%' :
                                       item.status === 'in-progress' ? '75%' : '0%',
                                transitionDelay: `${index * 200 + 500}ms`
                              }}
                            ></div>
                          </div>
                        </div>
                      </div>

                      {/* Connecting Line to Next Phase */}
                      {index < roadmapItems.length - 1 && (
                        <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-12 w-1 h-12 bg-gradient-to-b from-blue-500/50 to-transparent"></div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className={`mt-20 text-center transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}>
          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10 max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Stay Updated on Our Progress
            </h3>
            <p className="text-white/80 mb-8 text-lg">
              Follow our development journey and be the first to know about new features
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white font-bold rounded-xl transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/50">
                Join Community
              </button>
              <button className="px-8 py-4 border border-white/30 hover:border-white/50 text-white font-bold rounded-xl transition-all duration-300 backdrop-blur-sm hover:bg-white/10">
                Subscribe to Updates
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-16 h-16 border border-purple-500/30 rounded-full animate-spin" style={{ animationDuration: '25s' }}></div>
      <div className="absolute bottom-20 left-20 w-12 h-12 border border-pink-500/30 rounded-full animate-spin" style={{ animationDuration: '18s', animationDirection: 'reverse' }}></div>
      <div className="absolute top-1/3 left-1/3 w-8 h-8 bg-blue-500/30 rounded-lg animate-bounce"></div>
    </section>
  )
}
