import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'


const Footer = ({ count = 12 }) => {
  return (
    <div>
        <div className="footer-bouncing-balls">
      {[...Array(count)].map((_, i) => (
        <div
          key={i}
          className="bouncing-ball"
          style={{
            left: `${i * (100 / count)}%`,
            animationDelay: `${i * 0.18}s`
          }}
        ></div>
      ))}
    </div>
  );

      <body class="bg-black min-h-screen flex flex-col">
    <div class="flex-grow"></div>
    <footer class="bg-animated cyber-grid relative overflow-hidden">
        <div class="container mx-auto px-4 py-12">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="text-center md:text-left">
                    <h3 class="text-2xl font-bold text-white neon-text mb-4">BRAMHA GRC CREATION</h3>
                    <p class="text-cyan-300">ALL GRC PRODUCTS</p>
                </div>
                <div class="text-center">
                    <h4 class="text-xl font-bold text-white mb-4">Quick Links</h4>
                    <ul class="space-y-2">
                        <li><a href="#" class="text-cyan-300 hover:text-white transition-colors duration-300">Home</a></li>
                        <li><a href="#" class="text-cyan-300 hover:text-white transition-colors duration-300">Services</a></li>
                        <li><a href="#" class="text-cyan-300 hover:text-white transition-colors duration-300">About</a></li>
                        <li><a href="#" class="text-cyan-300 hover:text-white transition-colors duration-300">Contact</a></li>
                    </ul>
                </div>
                <div class="text-center md:text-right">
                    <h4 class="text-xl font-bold text-white mb-4">Stay Connected</h4>
                    <div class="flex justify-center md:justify-end space-x-4">
                        <a href="#" class="text-cyan-300 hover:text-white transition-colors duration-300"><i class="fab fa-facebook-f text-2xl"></i></a>
                        <a href="#" class="text-cyan-300 hover:text-white transition-colors duration-300"><i class="fab fa-twitter text-2xl"></i></a>
                        <a href="#" class="text-cyan-300 hover:text-white transition-colors duration-300"><i class="fab fa-instagram text-2xl"></i></a>
                        <a href="#" class="text-cyan-300 hover:text-white transition-colors duration-300"><i class="fab fa-linkedin-in text-2xl"></i></a>
                    </div>
                </div>
            </div>
            <div class="mt-8 pt-8 border-t border-cyan-800">
                <p class="text-center text-cyan-300">&copy; 2025 BRAMHA GRC CREATION. All rights reserved.</p>
            </div>
        </div>
        <div class="absolute inset-0 pointer-events-none neon-border"></div>
    </footer>
</body>
    </div>
  )
}

export default Footer