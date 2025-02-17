import React from 'react'
import Container from '../layout/Container'
import { CodeBracketIcon, PaintBrushIcon, BoltIcon } from '@heroicons/react/24/outline'

const features = [
  {
    title: 'Clean Code',
    description: 'Write maintainable, scalable code that follows best practices and modern standards.',
    icon: CodeBracketIcon,
  },
  {
    title: 'Beautiful Design',
    description: 'Create stunning user interfaces with attention to detail and modern aesthetics.',
    icon: PaintBrushIcon,
  },
  {
    title: 'Lightning Fast',
    description: 'Optimize performance for the best possible user experience.',
    icon: BoltIcon,
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Crafted with Excellence
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our approach combines technical expertise with creative design to deliver exceptional results.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="group p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 mb-4 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
} 