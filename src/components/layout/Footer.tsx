'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="relative w-full bg-white">
      {/* Divider Line */}
      <div className="w-full h-1 bg-black"/>

      {/* Footer Bottom */}
      <div className="bg-white py-6 sm:py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Main Footer Container */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-8">
            
            {/* Logo Section */}
            <motion.div 
              className="flex items-center gap-2 flex-shrink-0"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Vector Logo */}
              <div className="relative flex-shrink-0" style={{ width: '48px', height: '48px' }}>
                <Image
                  src="/Vector.png"
                  alt="Serena Logo"
                  fill
                  className="object-contain"
                />
              </div>
              
              {/* Serena Text */}
              <div
                className="flex items-center justify-center px-3 py-1"
                style={{
                  fontFamily: 'Handlee, cursive',
                  fontSize: 'clamp(20px, 3vw, 32px)',
                  color: '#0C0C0C',
                  textAlign: 'center',
                  minWidth: 'clamp(80px, 15vw, 104px)',
                  height: 'clamp(36px, 8vw, 48px)',
                }}
              >
                Serena
              </div>
            </motion.div>

            {/* Social Links Section */}
            <motion.div 
              className="flex flex-wrap items-center justify-center sm:justify-end gap-3 sm:gap-4 lg:gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {[
                { name: 'Behance', width: '95px', url: 'https://www.behance.net/serenaridany' },
                { name: 'Github', width: '75px', url: 'https://github.com/Serenaxtech' },
                { name: 'LinkedIn', width: '80px', url: 'https://www.linkedin.com/in/serena-ridany/' },
                { name: 'Instagram', width: '100px', url: 'https://www.instagram.com/serenaxtech/' }
              ].map((social, index) => (
                <Link
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <motion.div
                    className="flex items-center justify-center text-white cursor-pointer border border-white"
                    whileHover={{ y: -2, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                    style={{
                      width: `clamp(${parseInt(social.width) * 0.75}px, ${social.width}, ${social.width})`,
                      height: 'clamp(32px, 6vw, 43px)',
                      background: '#0C0C0C',
                      boxShadow: '1px 1px 11.2px rgba(0, 0, 0, 0.08)',
                      fontFamily: 'Handlee, cursive',
                      fontSize: 'clamp(14px, 2.2vw, 24px)',
                      fontWeight: 400,
                      textAlign: 'center',
                    }}
                  >
                    {social.name}
                  </motion.div>
                </Link>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;