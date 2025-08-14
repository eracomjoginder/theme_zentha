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

        {/* Roadmap Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-600"></div>

          {/* Roadmap Items */}
          <div className="space-y-16">
            {roadmapItems.map((item, index) => (
              <div
                key={index}
                className={`relative transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Timeline Node */}
                <div className={`absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-r ${getStatusColor(item.status)} rounded-full flex items-center justify-center shadow-lg z-10`}>
                  {getStatusIcon(item.status)}
                </div>

                {/* Content Card */}
                <div className={`relative ${index % 2 === 0 ? 'lg:mr-auto lg:pr-16' : 'lg:ml-auto lg:pl-16'}`}>
                  <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-black/30 transition-all duration-300 transform hover:scale-105 max-w-lg">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 px-4 py-2 rounded-full">
                        <span className="text-blue-400 font-semibold">{item.phase}</span>
                      </div>
                      <span className="text-white/60 text-sm">{item.period}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>

                    {/* Items List */}
                    <ul className="space-y-3">
                      {item.items.map((listItem, itemIndex) => (
                        <li key={itemIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-white/80 text-sm leading-relaxed">{listItem}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Status Badge */}
                    <div className="mt-6">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                        item.status === 'completed' ? 'bg-green-500/20 text-green-400' :
                        item.status === 'in-progress' ? 'bg-blue-500/20 text-blue-400' :
                        'bg-gray-500/20 text-gray-400'
                      }`}>
                        {item.status.replace('-', ' ').toUpperCase()}
                      </span>
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
