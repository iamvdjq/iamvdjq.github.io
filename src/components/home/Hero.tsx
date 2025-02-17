import React from 'react'
import Container from '../layout/Container'
import { CodeBracketIcon, CommandLineIcon, CubeIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Hero() {
  const router = useRouter()

  return (
    <div className="relative min-h-screen flex items-center bg-black overflow-hidden">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 to-black" />
      
      {/* Minimal dark grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:72px_72px]" />

      {/* Accent lines */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent top-1/3 -translate-y-1/2 transform -rotate-3" />
        <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent top-2/3 -translate-y-1/2 transform rotate-3" />
      </div>

      <Container>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          {/* Pre-title */}
          <span className="text-gray-500 tracking-widest uppercase text-sm mb-8 animate-fade-in">
            Welcome to my portfolio
          </span>

          {/* Main title */}
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold leading-none mb-4 tracking-tight">
            I am
            <span className="relative inline-block ml-4">
              <span className="relative z-10 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
                vdjq
              </span>
              <div className="absolute inset-0 bg-gray-800/20 transform -skew-x-12 rounded-lg" />
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mb-12 animate-fade-in-up">
            Advanced in creating websites, aswell as many programming languages.
          </p>
          
          {/* Skills */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mb-12 w-full max-w-2xl">
            {[
              { icon: CodeBracketIcon, text: 'Websites' },
              { icon: CommandLineIcon, text: 'API' },
              { icon: CubeIcon, text: 'Databases' },
              { icon: CubeIcon, text: 'Programming Languages' },
            ].map((skill) => (
              <div 
                key={skill.text} 
                className="group flex items-center space-x-2 text-gray-500 hover:text-gray-300 transition-all duration-300
                         px-4 py-2 rounded-lg hover:bg-white/5 backdrop-blur-sm"
              >
                <skill.icon className="w-5 h-5 transition-transform group-hover:scale-110 group-hover:rotate-3" />
                <span className="text-sm whitespace-nowrap">{skill.text}</span>
              </div>
            ))}
          </div>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto">
            <Link 
              href="/projects"
              className="px-8 py-3 bg-white text-black rounded-lg hover:bg-gray-100 transition-all duration-300
                         hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transform hover:-translate-y-0.5">
              View Projects
            </Link>
            <Link 
              href="/contact"
              className="px-8 py-3 border border-gray-800 text-white rounded-lg 
                         hover:border-gray-600 transition-all duration-300
                         hover:shadow-[0_0_15px_rgba(255,255,255,0.05)] transform hover:-translate-y-0.5
                         hover:bg-white/5">
              Contact Me
            </Link>
          </div>
        </div>
      </Container>
    </div>
  )
} 