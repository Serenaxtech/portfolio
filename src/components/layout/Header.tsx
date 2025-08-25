'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isHeroInView, setIsHeroInView] = useState(true)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  useEffect(() => {
    const heroSection = document.querySelector('#home')
    
    if (!heroSection) {
      // If no hero section found, keep navbar visible (fallback for other pages)
      setIsHeroInView(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeroInView(entry.isIntersecting)
        // Close mobile menu when hero section is not in view
        if (!entry.isIntersecting && isMobileMenuOpen) {
          setIsMobileMenuOpen(false)
        }
      },
      {
        threshold: 0.1, // Show navbar when 10% of hero section is visible
        rootMargin: '-10px 0px 0px 0px' // Small offset from top
      }
    )

    observer.observe(heroSection)

    return () => observer.disconnect()
  }, [isMobileMenuOpen])

  // Also check if we're on a page without hero section (like portfolio page)
  useEffect(() => {
    const checkCurrentPage = () => {
      const heroSection = document.querySelector('#home')
      if (!heroSection) {
        // On pages without hero section (like /portfolio), always show navbar
        setIsHeroInView(true)
      }
    }
    
    // Check immediately and after a short delay to ensure DOM is ready
    checkCurrentPage()
    const timer = setTimeout(checkCurrentPage, 100)
    
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isHeroInView && (
        <motion.header
          className="fixed top-0 left-0 w-full bg-transparent z-50"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
        >
      {/* Mobile Header Layout */}
      <div className="lg:hidden flex items-center justify-between px-4 sm:px-6 py-4">
        {/* Mobile Logo */}
        <motion.div
          className="flex items-center"
          whileHover={{ scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 400 }}
        >
          <Link href="/" aria-label="Home" className="flex items-center">
            <Image
              src="/Vector.png"
              alt="Serena Logo"
              width={45}
              height={44}
              className="w-[45px] h-[44px] sm:w-[50px] sm:h-[49px]"
              style={{ objectFit: 'contain' }}
              priority
            />
          </Link>
        </motion.div>

        {/* Mobile menu button */}
        <motion.button
          className="w-10 h-10 flex items-center justify-center z-20"
          onClick={toggleMobileMenu}
          whileTap={{ scale: 0.95 }}
          aria-label="Toggle mobile menu"
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            <motion.span
              className="w-5 h-0.5 bg-gray-900 block transition-all duration-300"
              animate={isMobileMenuOpen ? { rotate: 45, y: 2 } : { rotate: 0, y: -2 }}
            />
            <motion.span
              className="w-5 h-0.5 bg-gray-900 block transition-all duration-300"
              animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            />
            <motion.span
              className="w-5 h-0.5 bg-gray-900 block transition-all duration-300"
              animate={isMobileMenuOpen ? { rotate: -45, y: -2 } : { rotate: 0, y: 2 }}
            />
          </div>
        </motion.button>
      </div>

      {/* Desktop Navbar - responsive Figma positioning */}
      <div
        className="absolute overflow-hidden hidden lg:block"
        style={{
          width: 'min(1307.46px, calc(100vw - 32px))',
          height: 'clamp(50px, 6vw, 57px)',
          left: 'clamp(16px, 5.73vw, 75px)',
          top: 'clamp(20px, 4vw, 43px)',
        }}
      >
        {/* Desktop Logo - positioned absolutely */}
        <motion.div
          className="absolute"
          whileHover={{ scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 400 }}
          style={{
            width: 'clamp(140px, 12.9vw, 169px)',
            height: 'clamp(45px, 5.5vw, 57px)',
            left: '0px',
            top: '0px',
          }}
        >
          <Link href="/" aria-label="Home">
            {/* Vector - logo image */}
            <div
              style={{
                position: 'absolute',
                width: 'clamp(45px, 4.4vw, 58px)',
                height: 'clamp(44px, 4.35vw, 57px)',
                left: '0px',
                top: '0px',
              }}
            >
              <Image
                src="/Vector.png"
                alt="Serena Logo"
                width={58}
                height={57}
                style={{ objectFit: 'contain', width: '100%', height: '100%' }}
                priority
              />
            </div>
          </Link>
        </motion.div>

        {/* Desktop Buttons Container - Only visible on lg+ screens */}
        <motion.div
          className="absolute flex flex-row justify-center items-center isolate"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          style={{
            gap: 'clamp(60px, 12.1vw, 159px)',
            width: 'clamp(300px, 46.8vw, 612.96px)',
            height: 'clamp(40px, 3.75vw, 49px)',
            left: 'clamp(50%, calc(50% - 612.96px/2 + 335.25px), calc(50% - 300px/2 + 160px))',
            top: 'clamp(3px, 0.38vw, 5px)',
          }}
        >
          {/* Rectangle 24 - Pink accent */}
          <div
            style={{
              position: 'absolute',
              width: 'clamp(60px, 6.57vw, 86px)',
              height: 'clamp(8px, 0.76vw, 10px)',
              left: 'clamp(80%, 40.04vw, 524.5px)',
              top: 'clamp(22px, 2.14vw, 28px)',
              background: '#FFC9F0',
              flex: 'none',
              order: 0,
              flexGrow: 0,
              zIndex: 0,
            }}
          />

          {/* Frame 3 - spacing element */}
          <div
            className="flex-none"
            style={{
              width: 'clamp(80px, 10.45vw, 136.96px)',
              height: 'clamp(40px, 3.75vw, 49px)',
              order: 1,
              zIndex: 1,
            }}
          />

          {/* Frame 14 - Navigation Items */}
          <div
            className="flex flex-row items-start justify-between flex-none"
            style={{
              width: 'clamp(200px, 24.2vw, 317px)',
              height: 'clamp(24px, 2.21vw, 29px)',
              order: 2,
              zIndex: 2,
            }}
          >
            <NavLink href="/#home" width="clamp(50px, 5.12vw, 67px)">Resume</NavLink>
            <NavLink href="/#about" width="clamp(70px, 7.41vw, 97px)">Portfolio</NavLink>
            <NavLink href="/#contact" width="clamp(65px, 6.79vw, 89px)">Hire Me</NavLink>
          </div>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-sm shadow-lg lg:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <nav className="px-6 py-8 space-y-6">
              <MobileNavLink href="/#home" onClick={() => setIsMobileMenuOpen(false)}>Resume</MobileNavLink>
              <MobileNavLink href="/#about" onClick={() => setIsMobileMenuOpen(false)}>Portfolio</MobileNavLink>
              <MobileNavLink href="/#contact" onClick={() => setIsMobileMenuOpen(false)}>Hire Me</MobileNavLink>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
        </motion.header>
      )}
    </AnimatePresence>
  )
}

interface NavLinkProps {
  href: string
  children: React.ReactNode
  width: string
  onClick?: () => void
}

const NavLink = ({ href, children, width, onClick }: NavLinkProps) => {
  return (
    <motion.div
      whileHover={{ y: -1 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      style={{
        width: width,
        height: 'clamp(24px, 2.21vw, 29px)',
        flex: 'none',
        flexGrow: 0,
      }}
    >
      <Link
        href={href}
        onClick={onClick}
        style={{
          fontFamily: 'Inter, system-ui, sans-serif',
          fontStyle: 'normal',
          fontWeight: 400,
          fontSize: 'clamp(18px, 1.83vw, 24px)',
          lineHeight: 'clamp(22px, 2.21vw, 29px)',
          color: children === 'Portfolio' || children === 'Hire Me' ? '#0C0C0C' : '#000000',
          textDecoration: 'none',
        }}
      >
        {children}
      </Link>
    </motion.div>
  )
}

interface MobileNavLinkProps {
  href: string
  children: React.ReactNode
  onClick?: () => void
}

const MobileNavLink = ({ href, children, onClick }: MobileNavLinkProps) => {
  return (
    <motion.div
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
    >
      <Link
        href={href}
        onClick={onClick}
        className="block text-2xl font-normal py-3 border-b border-gray-200 last:border-b-0"
        style={{
          fontFamily: 'Inter, system-ui, sans-serif',
          fontStyle: 'normal',
          fontWeight: 400,
          color: children === 'Portfolio' || children === 'Hire Me' ? '#0C0C0C' : '#000000',
          textDecoration: 'none',
        }}
      >
        {children}
      </Link>
    </motion.div>
  )
}

export default Header
