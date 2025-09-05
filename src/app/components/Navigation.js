'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

export default function Navigation({ currentSection, totalSections, onSectionChange }) {
  const [isVisible, setIsVisible] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500)
    return () => clearTimeout(timer)
  }, [])

  const navItems = [
    { name: 'Home', section: 0, href: '/' },
    { name: 'About', section: 1, href: '/about' },
    { name: 'Contact', section: 9, href: '/contact' }
  ]

  // Check if we're on the homepage
  const isHomePage = pathname === '/'
  
  // Check if onSectionChange is available (homepage only)
  const canChangeSection = isHomePage && onSectionChange

  const handleNavClick = (e, item) => {
    // On homepage, the Home link scrolls to section
    if (canChangeSection && item.href === '/') {
      e.preventDefault()
      onSectionChange(item.section)
      return
    }

    // For all other links, ensure navigation happens programmatically
    // This covers cases where an overlay or custom handler interferes
    if (item.href && typeof item.href === 'string') {
      e.preventDefault()
      setIsMobileMenuOpen(false)
      router.push(item.href)
    }
  }

  return (
    <nav className={`backdrop-blur-sm fixed top-0 left-0 right-0 z-[100] pointer-events-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 sm:space-x-3 hover:opacity-80 transition-opacity duration-300">
            <img src="./images/logo/logo.png" alt="Zentha" className="w-auto h-10 sm:w-22 sm:h-14" />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`transition-colors duration-300 text-sm xl:text-base ${
                  pathname === item.href ? 'text-blue-400 font-semibold' : 'text-white/80 hover:text-white'
                }`}
                onClick={(e) => handleNavClick(e, item)}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Telegram Access Element */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              <a
                href="#"
                className="group relative flex items-center space-x-2 sm:space-x-3 px-3 sm:px-4 py-2 sm:py-2.5 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border border-blue-400/30 hover:border-blue-400/50 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
              >
                {/* Telegram Icon */}
                <div className="relative">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                  {/* Pulsing Ring */}
                  <div className="absolute inset-0 w-5 h-5 sm:w-6 sm:h-6 border-2 border-blue-400/50 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                {/* Text */}
                <div className="hidden sm:block">
                  <div className="text-xs sm:text-sm font-medium text-white/90 group-hover:text-white transition-colors duration-300">
                    Tap Telegram
                  </div>
                  <div className="text-xs text-blue-300/80 group-hover:text-blue-200 transition-colors duration-300">
                    to access app
                  </div>
                </div>
                
                {/* Mobile Text */}
                <div className="sm:hidden text-xs font-medium text-white/90 group-hover:text-white transition-colors duration-300">
                  Telegram
                </div>
                
                {/* Animated Arrow */}
                <div className="hidden sm:block opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:translate-x-1">
                  <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-white hover:text-blue-400 transition-colors duration-300"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-black/90 backdrop-blur-md border-b border-white/10">
          <div className="px-4 sm:px-6 py-4 sm:py-6 space-y-3 sm:space-y-4 h-[100vh]">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block transition-colors duration-300 py-2 text-sm sm:text-base ${
                  pathname === item.href ? 'text-blue-400 font-semibold' : 'text-white/80 hover:text-white'
                }`}
                onClick={() => {
                  // No event available here because of inline function,
                  // switch to programmatic navigation for consistency
                  setIsMobileMenuOpen(false)
                  router.push(item.href)
                }}
              >
                {item.name}
              </Link>
            ))}
            {/* Mobile Telegram Access Element */}
            <div className="pt-3 sm:pt-4">
              <a
                href="#"
                className="group relative flex items-center justify-center space-x-3 px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border border-blue-400/30 hover:border-blue-400/50 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
              >
                {/* Telegram Icon */}
                <div className="relative">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                  {/* Pulsing Ring */}
                  <div className="absolute inset-0 w-6 h-6 sm:w-7 sm:h-7 border-2 border-blue-400/50 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                {/* Text */}
                <div className="text-center">
                  <div className="text-sm sm:text-base font-medium text-white/90 group-hover:text-white transition-colors duration-300">
                    Tap Telegram
                  </div>
                  <div className="text-xs sm:text-sm text-blue-300/80 group-hover:text-blue-200 transition-colors duration-300">
                    to access app
                  </div>
                </div>
                
                {/* Animated Arrow */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:translate-x-1">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
