import React from 'react'
import Container from '../layout/Container'
import { ArrowTopRightOnSquareIcon, ChatBubbleLeftIcon } from '@heroicons/react/24/outline'

const projects = [
  {
    title: 'Krypton',
    description: 'A website built for selling Fortnite accounts, serving over 1,000 active users.',
    image: 'https://cdn.discordapp.com/banners/1289622222989824053/a_ddda7f376a300324bd09d6424c77878e.gif?size=240', // You'll need to add this image to your public/images folder
    tags: ['Next.js', 'Tailwind CSS', 'Discord Integration'],
    liveUrl: 'https://krypt0n.net',
    discordUrl: 'https://discord.gg/dmas',
  }
]

export default function Projects() {
  return (
    <div className="relative min-h-screen pt-16 sm:pt-20 pb-12 sm:pb-16 bg-black overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 to-black" />
      
      {/* Animated shapes - made smaller and more subtle */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-1/4 w-72 h-72 bg-purple-500/5 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob" />
        <div className="absolute -bottom-1/4 -left-1/4 w-72 h-72 bg-blue-500/5 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-2000" />
      </div>

      <Container>
        <div className="relative z-10 max-w-xl mx-auto text-center mb-10 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-white text-glow">
            Featured Project
          </h1>
          <p className="text-gray-300 text-base sm:text-lg">
            Check out my latest work
          </p>
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden
                         transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:shadow-xl"
            >
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="p-5 sm:p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl sm:text-2xl font-bold text-white">{project.title}</h3>
                  <span className="px-3 py-0.5 bg-green-500/20 text-green-400 rounded-full text-sm">
                    1,000+ Users
                  </span>
                </div>
                
                <p className="text-gray-300 text-base sm:text-lg mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm bg-white/10 text-gray-300 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 flex-col sm:flex-row">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-white text-black rounded-lg 
                             hover:bg-gray-100 transition-all duration-300 font-medium"
                  >
                    <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                    Visit Website
                  </a>
                  <a
                    href={project.discordUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-white/10 rounded-lg text-white 
                             hover:bg-white/20 transition-colors font-medium"
                  >
                    <ChatBubbleLeftIcon className="w-4 h-4" />
                    Join Discord
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* Minimal grid overlay - made more subtle */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:64px_64px]" />
    </div>
  )
} 