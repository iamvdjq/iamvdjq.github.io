import React, { useState } from 'react'
import Container from '../layout/Container'
import { 
  CodeBracketIcon,
  CommandLineIcon,
  GlobeAltIcon,
  CubeIcon,
  PaintBrushIcon,
  BoltIcon,
  CogIcon,
  BeakerIcon,
  DocumentTextIcon,
  CircleStackIcon
} from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

const skills = [
  {
    name: 'Python',
    level: 90,
    icon: CommandLineIcon,
    category: 'Backend',
    description: 'Automation, Data Science, Web Backend'
  },
  {
    name: 'HTML/JS/CSS',
    level: 85,
    icon: GlobeAltIcon,
    category: 'Frontend',
    description: 'Web Development, Responsive Design'
  },
  {
    name: 'Go',
    level: 80,
    icon: BoltIcon,
    category: 'Backend',
    description: 'High-Performance Systems, Microservices'
  },
  {
    name: 'PHP',
    level: 75,
    icon: CodeBracketIcon,
    category: 'Backend',
    description: 'Web Applications, CMS Development'
  },
  {
    name: 'Tailwind',
    level: 95,
    icon: PaintBrushIcon,
    category: 'Frontend',
    description: 'Modern UI Design, Rapid Prototyping'
  },
  {
    name: 'Node.js',
    level: 85,
    icon: CubeIcon,
    category: 'Backend',
    description: 'Server-side JavaScript, API Development'
  },
  {
    name: 'C/C++/C#',
    level: 80,
    icon: CogIcon,
    category: 'Systems',
    description: 'System Programming, Game Development'
  },
  {
    name: 'Ruby',
    level: 70,
    icon: BeakerIcon,
    category: 'Backend',
    description: 'Web Applications, Scripting'
  },
  {
    name: 'TypeScript',
    level: 90,
    icon: DocumentTextIcon,
    category: 'Frontend',
    description: 'Type-Safe JavaScript, Modern Web Apps'
  },
  {
    name: 'SQL',
    level: 85,
    icon: CircleStackIcon,
    category: 'Database',
    description: 'Database Design, Query Optimization'
  }
]

const categories = ['Frontend', 'Backend', 'Systems', 'Database']

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('Frontend')
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  return (
    <div className="relative min-h-screen pt-24 pb-16 bg-black overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 to-black" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
      
      {/* Ambient light */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-zinc-800/20 rounded-full filter blur-[128px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-zinc-800/20 rounded-full filter blur-[128px]" />

      <Container>
        <div className="relative z-10">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              My skills
            </h1>
            <p className="text-zinc-400 text-xl max-w-2xl mx-auto">
              The skills I've collected along the years of coding.
            </p>
          </motion.div>

          {/* Category Navigation */}
          <div className="flex justify-center gap-4 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300
                  ${activeCategory === category 
                    ? 'bg-zinc-800 text-white shadow-lg shadow-black/50'
                    : 'bg-zinc-900/50 text-zinc-400 hover:bg-zinc-800/50'}`}
              >
                {category}
              </motion.button>
            ))}
          </div>

          {/* Skills Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
          >
            {skills
              .filter((skill) => skill.category === activeCategory)
              .map((skill) => (
                <motion.div
                  layout
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.02 }}
                  onHoverStart={() => setHoveredSkill(skill.name)}
                  onHoverEnd={() => setHoveredSkill(null)}
                  className={`relative p-6 rounded-xl backdrop-blur-sm border transition-all duration-300
                    ${hoveredSkill === skill.name 
                      ? 'bg-zinc-800/50 border-zinc-700 shadow-xl' 
                      : 'bg-zinc-900/30 border-zinc-800'}`}
                >
                  {/* Skill Header */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-zinc-800">
                      <skill.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
                      <p className="text-sm text-zinc-400">{skill.description}</p>
                    </div>
                  </div>

                  {/* Skill Level */}
                  <div className="mt-4">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-zinc-400">Proficiency</span>
                      <span className="text-sm text-white">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-zinc-800/50 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full bg-zinc-700"
                      />
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -bottom-1 -right-1 w-24 h-24 bg-gradient-to-br from-transparent to-zinc-800/10 rounded-br-xl" />
                </motion.div>
              ))}
          </motion.div>
        </div>
      </Container>
    </div>
  )
} 