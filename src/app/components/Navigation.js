'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation({ currentSection, totalSections, onSectionChange }) {
  const [isVisible, setIsVisible] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500)
    return () => clearTimeout(timer)
  }, [])

  const navItems = [
    { name: 'Home', section: 0, href: '/' },
    { name: 'About', section: 1, href: '/about' },
    { name: 'Contact', section: 5, href: '/contact' }
  ]

  // Check if we're on the homepage
  const isHomePage = pathname === '/'
  
  // Check if onSectionChange is available (homepage only)
  const canChangeSection = isHomePage && onSectionChange

  const handleNavClick = (item) => {
    if (canChangeSection && item.href === '/') {
      onSectionChange(item.section)
    }
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-300">
            <img src="./images/logo/logo.png" alt="Zentha" className="w-22 h-10" />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`transition-colors duration-300 ${
                  pathname === item.href ? 'text-blue-400 font-semibold' : 'text-white/80 hover:text-white'
                }`}
                onClick={() => handleNavClick(item)}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <button className="px-6 py-2 border border-white/30 hover:border-white/50 text-white font-medium rounded-lg transition-all duration-300 backdrop-blur-sm hover:bg-white/10">
                Connect Wallet
              </button>
              <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white font-medium rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/50">
                Join Pre-ICO
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center text-white hover:text-blue-400 transition-colors duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          <div className="px-6 py-6 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block transition-colors duration-300 py-2 ${
                  pathname === item.href ? 'text-blue-400 font-semibold' : 'text-white/80 hover:text-white'
                }`}
                onClick={() => {
                  setIsMobileMenuOpen(false)
                  handleNavClick(item)
                }}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 space-y-3">
              <button className="w-full px-6 py-3 border border-white/30 hover:border-white/50 text-white font-medium rounded-lg transition-all duration-300 backdrop-blur-sm hover:bg-white/10">
                Connect Wallet
              </button>
              <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white font-medium rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/50">
                Join Pre-ICO
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
