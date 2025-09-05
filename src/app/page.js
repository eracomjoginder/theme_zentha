'use client'

import { useState, useEffect } from 'react'
import Navigation from './components/Navigation'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import NFTSection from './components/NFTSection'
import PlayToOwnSection from './components/PlayToOwnSection'
import WhyZenthaSection from './components/WhyZenthaSection'
import ContactSection from './components/ContactSection'
import BackgroundEffects from './components/BackgroundEffects'
import SharedFooter from './components/SharedFooter'
import "@fontsource/parkinsans";          // Defaults to weight 400
import "@fontsource/parkinsans/500.css";

export default function Home() {
  const [currentSection, setCurrentSection] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)

  const sections = [
    { id: 'hero', component: HeroSection },
    { id: 'about', component: AboutSection },
    { id: 'why-zentha', component: WhyZenthaSection },
    { id: 'nft-section', component: NFTSection },
    { id: 'play-to-own', component: PlayToOwnSection },
    { id: 'contact', component: ContactSection }
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (!isScrolling) {
        setIsScrolling(true)
        setTimeout(() => setIsScrolling(false), 100)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isScrolling])

  const nextSection = () => {
    if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1)
      scrollToSection(currentSection + 1)
    }
  }

  const prevSection = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1)
      scrollToSection(currentSection - 1)
    }
  }

  const scrollToSection = (sectionIndex) => {
    const element = document.getElementById(sections[sectionIndex].id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const goToSection = (sectionIndex) => {
    setCurrentSection(sectionIndex)
    scrollToSection(sectionIndex)
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#1a1a2e] to-[#16213e] relative overflow-hidden">
      <BackgroundEffects />
      <Navigation currentSection={currentSection} totalSections={sections.length} onSectionChange={goToSection} />
      <div className="relative z-10">
        {sections.map((section, index) => (
          <div key={section.id} id={section.id}>
            <section.component />
          </div>
        ))}
      </div>

  
      {/* Scroll to Top Button */}
      <button
        onClick={() => goToSection(0)}
        className="fixed bottom-6 right-6 z-40 w-12 h-12 bg-black/20 backdrop-blur-sm border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-black/40 transition-all duration-300"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>

      {/* Shared Footer */}
      <SharedFooter />
    </main>
  )
}
