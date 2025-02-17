import React, { useState, useEffect } from 'react'
import Container from './Container'
import Link from 'next/link'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'
    }`}>
      <Container>
        <div className="flex items-center justify-between h-16">
          <span className="text-2xl font-bold text-white">
            vdjq
          </span>
          
          <div className="hidden md:flex space-x-8">
            <NavLink href="/#about">About</NavLink>
            <NavLink href="/#skills">Skills</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </div>
        </div>
      </Container>
    </nav>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link 
      href={href}
      className="text-gray-400 hover:text-white transition-colors duration-200"
    >
      {children}
    </Link>
  )
} 