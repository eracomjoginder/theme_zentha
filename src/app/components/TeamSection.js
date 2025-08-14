'use client'

import { useState, useEffect } from 'react'

export default function TeamSection() {
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

    const element = document.getElementById('team')
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  const teamMembers = [
    {
      name: "Alex Chen",
      role: "CEO & Founder",
      image: "/api/placeholder/200/200",
      bio: "Blockchain veteran with 8+ years in DeFi and gaming. Former CTO at major gaming studio.",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "Sarah Kim",
      role: "CTO",
      image: "/api/placeholder/200/200",
      bio: "Full-stack developer specializing in blockchain infrastructure and smart contracts.",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "Marcus Rodriguez",
      role: "Head of Gaming",
      image: "/api/placeholder/200/200",
      bio: "Game design expert with experience at AAA studios. Passionate about blockchain gaming.",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "Elena Petrov",
      role: "Head of Marketing",
      image: "/api/placeholder/200/200",
      bio: "Marketing strategist with deep understanding of crypto communities and user acquisition.",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "David Park",
      role: "Lead Developer",
      image: "/api/placeholder/200/200",
      bio: "Frontend specialist focused on creating intuitive user experiences for DeFi applications.",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "Lisa Thompson",
      role: "Community Manager",
      image: "/api/placeholder/200/200",
      bio: "Community building expert with experience managing large-scale crypto communities.",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    }
  ]

  return (
    <section id="team" className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 py-20">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}>
          <h2 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-pink-500 bg-clip-text text-transparent">
              Meet Our Team
            </span>
          </h2>
          <p className="text-2xl lg:text-3xl text-white/90 font-medium max-w-3xl mx-auto">
            The brilliant minds behind Zentha's revolutionary platform
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`bg-black/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-black/30 transition-all duration-500 transform hover:scale-105 group ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Profile Image */}
              <div className="relative mb-6">
                <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-4xl font-bold text-white mb-4">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="absolute inset-0 w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              </div>

              {/* Member Info */}
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-blue-400 font-semibold mb-4">{member.role}</p>
                <p className="text-white/70 text-sm leading-relaxed mb-6">
                  {member.bio}
                </p>

                {/* Social Links */}
                <div className="flex justify-center space-x-4">
                  <a href={member.social.linkedin} className="w-10 h-10 bg-blue-500/20 hover:bg-blue-500/40 rounded-lg flex items-center justify-center text-blue-400 hover:text-blue-300 transition-all duration-300 transform hover:scale-110">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a href={member.social.twitter} className="w-10 h-10 bg-blue-500/20 hover:bg-blue-500/40 rounded-lg flex items-center justify-center text-blue-400 hover:text-blue-300 transition-all duration-300 transform hover:scale-110">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                  <a href={member.social.github} className="w-10 h-10 bg-gray-500/20 hover:bg-gray-500/40 rounded-lg flex items-center justify-center text-gray-400 hover:text-gray-300 transition-all duration-300 transform hover:scale-110">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Join Team CTA */}
        <div className={`text-center transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}>
          <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10 max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Want to Join Our Team?
            </h3>
            <p className="text-white/80 mb-8 text-lg">
              We're always looking for talented individuals who are passionate about blockchain, gaming, and innovation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white font-bold rounded-xl transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/50">
                View Open Positions
              </button>
              <button className="px-8 py-4 border border-white/30 hover:border-white/50 text-white font-bold rounded-xl transition-all duration-300 backdrop-blur-sm hover:bg-white/10">
                Send Application
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-16 h-16 border border-blue-500/30 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
      <div className="absolute bottom-20 right-20 w-12 h-12 border border-purple-500/30 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
      <div className="absolute top-1/2 right-1/3 w-8 h-8 bg-pink-500/30 rounded-lg animate-bounce"></div>
    </section>
  )
}
