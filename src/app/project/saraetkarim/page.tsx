'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const HashAcademyProject = () => {
  // Project images for navigation
  const projectImages = [
    {
      id: 1,
      src: '/saraetkarim.png',
      alt: 'Sara Et Karim Main Website',
      title: 'Main Website'
    },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? projectImages.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === projectImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Main Content */}
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          
          {/* Intro block */}
          <motion.div
            className="mb-20 flex flex-col xl:flex-row items-start gap-12 xl:gap-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              marginTop: 'clamp(60px, 10vw, 80px)',
              paddingLeft: 'clamp(20px, 5vw, 104px)',
              paddingRight: 'clamp(20px, 5vw, 104px)',
            }}
          >
            {/* Left Side - Text Content */}
            <div className="flex-1 xl:max-w-lg">
              <h1
                style={{
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontStyle: 'normal',
                  fontWeight: 600,
                  fontSize: 'clamp(28px, 5vw, 44px)',
                  lineHeight: 'clamp(36px, 6vw, 56px)',
                  color: '#0C0C0C',
                  marginBottom: 'clamp(20px, 3vw, 32px)',
                }}
              >
                <span style={{ whiteSpace: 'nowrap' }}>UI/UX Designer</span><br />
                @ <span 
                  className="relative inline-block"
                  style={{
                    background: 'linear-gradient(transparent 60%, #FFC9F0 60%, #FFC9F0 90%, transparent 90%)'
                  }}
                >
                  Sara Et Karim
                </span>
              </h1>
              
              <p
                style={{
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontSize: 'clamp(16px, 2.5vw, 20px)',
                  lineHeight: 'clamp(24px, 4vw, 32px)',
                  color: '#0C0C0C',
                  fontWeight: 400,
                }}
              >
                A cozy café website rebranded and redesigned to reflect the founders’ authentic story, showcase their services, and create a warm, welcoming digital experience.
              </p>
            </div>

            {/* Right Side - PC Mockup with Scrollable Screen */}
            <div className="flex-1 flex flex-col items-center gap-6 ml-0 xl:ml-[clamp(20px,4vw,60px)]">
              {/* PC Mockup */}
              <div className="relative flex-shrink-0">
               <div className="relative mx-auto" style={{ width: 'min(92vw, 385px)', aspectRatio: '385 / 321' }}>
                  {/* PC Frame (on top of the screen content) */}
                  <Image src="/pc.svg" fill sizes="(max-width: 768px) 92vw, 385px" 
                    className="object-contain z-10 pointer-events-none"
                    alt="Computer monitor frame"
                  />
                  
                  {/* Scrollable Screen Content — fills screen area edge-to-edge */}
                  <div 
                    className="absolute overflow-hidden z-0"
                    style={{
                      top: '8.4%',
                      left: '7.6%',
                      right: '6.8%',
                      bottom: '29.4%',
                      borderRadius: '3px',
                      background: '#000',
                      boxShadow: 'inset 0 2px 6px rgba(0,0,0,0.3)',
                    }}
                  >
                    <div 
                      className="w-full h-full overflow-y-auto bg-white pc-screen"
                    >
                      <Image
                        src="/saraetkarim.png"
                        alt="Sara Et Karim website interface - scrollable"
                        width={1600}
                        height={1200}
                        sizes="(max-width: 768px) 92vw, 425px"
                        className="w-full h-auto block object-top"
                        priority={false}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Scroll Indicator (kept) */}
              <div className="flex-shrink-0 flex flex-row items-end justify-center md:justify-end w-full mt-5">
                <div className="flex flex-col items-center">
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, repeatType: 'loop', ease: 'easeInOut' }}
                    className="mb-3"
                  >
                    <Image
                      src="/arrow-3.svg"
                      alt="Arrow pointing to PC screen"
                      width={64}
                      height={59}
                    />
                  </motion.div>
                  <p
                    style={{
                      fontFamily: 'Inter',
                      fontStyle: 'normal',
                      fontWeight: 400,
                      fontSize: '24px',
                      lineHeight: '140%',
                      color: '#0C0C0C',
                      textAlign: 'center',
                    }}
                  >
                    You can scroll
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Overview Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{
              paddingLeft: 'clamp(20px, 5vw, 104px)',
              paddingRight: 'clamp(20px, 2vw, 20px)', // Minimal right padding on large screens
            }}
          >
            {/* Overview Title */}
            <div>
              <span
                className="inline-block px-3 py-2"
                style={{
                  fontFamily: 'Handlee, cursive',
                  fontStyle: 'normal',
                  fontWeight: 700,
                  fontSize: 'clamp(24px, 4vw, 32px)',
                  lineHeight: 'clamp(32px, 5vw, 40px)',
                  color: '#0C0C0C',
                  background: '#FFC9F0',
                }}
              >
                Overview
              </span>
            </div>

            {/* Overview Content */}
            <div className="max-w-4xl" style={{ marginTop: '16px' }}>
              <p
                style={{
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontSize: 'clamp(16px, 2.2vw, 18px)',
                  lineHeight: 'clamp(24px, 3.5vw, 28px)',
                  color: '#0C0C0C',
                  marginBottom: 'clamp(20px, 3vw, 32px)',
                  fontWeight: 400,
                }}
              >
                I worked as the UI/UX Designer for the Sara Et Karim café website, focusing on rebranding the site to better capture the café’s identity. My work combined fresh visual design with user-centered improvements in structure and navigation, ensuring the brand feels both personal and professional.
              </p>
              
              <div
                style={{
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontSize: 'clamp(16px, 2.2vw, 18px)',
                  lineHeight: 'clamp(24px, 3.5vw, 28px)',
                  color: '#0C0C0C',
                  fontWeight: 400,
                  marginBottom: 'clamp(40px, 5vw, 60px)',
                }}
              >
                <strong>The goal:</strong> elevate the café’s digital presence through modern design, storytelling, and easy user flows.
              </div>

              {/* The Problem and My Role - Side by side on large screens */}
              <div className="flex flex-col xl:flex-row xl:gap-40 xl:items-start">
                {/* The Problem Section */}
                <div className="mb-12 xl:mb-0 xl:flex-1">
                  <h3
                    className="inline-block px-3 py-2"
                    style={{
                      fontFamily: 'Handlee, cursive',
                      fontStyle: 'normal',
                      fontWeight: 700,
                      fontSize: 'clamp(20px, 3.5vw, 28px)',
                      lineHeight: 'clamp(28px, 4.5vw, 36px)',
                      color: '#0C0C0C',
                      background: '#FFC9F0',
                    }}
                  >
                    The Problem
                  </h3>
                  
                  <div className="space-y-6" style={{ marginTop: '16px' }}>
                    <p
                      style={{
                        fontFamily: 'Inter, system-ui, sans-serif',
                        fontSize: 'clamp(16px, 2.2vw, 18px)',
                        lineHeight: 'clamp(24px, 3.5vw, 28px)',
                        color: '#0C0C0C',
                        fontWeight: 400,
                      }}
                    >
                      The original site lacked visual consistency, personality, and clarity. Important sections like the founders’ story and the menu weren’t highlighted effectively, and the design didn’t deliver the warm, authentic feel of the café.
                    </p>
                  </div>
                </div>

                {/* My Role Section */}
                <div className="xl:flex-1" style={{ marginRight: 'clamp(-10px, -2vw, -20px)' }}>
                  <h3
                    className="inline-block px-3 py-2"
                    style={{
                      fontFamily: 'Handlee, cursive',
                      fontStyle: 'normal',
                      fontWeight: 700,
                      fontSize: 'clamp(20px, 3.5vw, 28px)',
                      lineHeight: 'clamp(28px, 4.5vw, 36px)',
                      color: '#0C0C0C',
                      background: '#FFC9F0',
                    }}
                  >
                    My Role
                  </h3>
                  
                  <div className="space-y-6" style={{ marginTop: '16px' }}>
                    <p
                      style={{
                        fontFamily: 'Inter, system-ui, sans-serif',
                        fontSize: 'clamp(16px, 2.2vw, 18px)',
                        lineHeight: 'clamp(24px, 3.5vw, 28px)',
                        color: '#0C0C0C',
                        fontWeight: 400,
                        marginBottom: 'clamp(24px, 3.5vw, 32px)',
                      }}
                    >
                     As <strong>UI/UX Designer</strong>, I focused on the full rebrand and user experience overhaul:
                    </p>
                    
                    <div className="space-y-4">
                      <div style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: 'clamp(16px, 2.2vw, 18px)', lineHeight: 'clamp(24px, 3.5vw, 28px)', color: '#0C0C0C', fontWeight: 400 }}>
                         🎨 <strong>Rebranding –</strong> Developed a new design system with warm tones, elegant typography, and a modern aesthetic.
                      </div>
                      <div style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: 'clamp(16px, 2.2vw, 18px)', lineHeight: 'clamp(24px, 3.5vw, 28px)', color: '#0C0C0C', fontWeight: 400 }}>
                         📱 <strong>Responsive Design –</strong> Created layouts optimized for mobile, tablet, and desktop.
                      </div>
                      <div style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: 'clamp(16px, 2.2vw, 18px)', lineHeight: 'clamp(24px, 3.5vw, 28px)', color: '#0C0C0C', fontWeight: 400 }}>
                         🍰 <strong>Menu Experience –</strong> Designed an engaging and stylish way to explore popular menu items.
                      </div>
                      <div style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: 'clamp(16px, 2.2vw, 18px)', lineHeight: 'clamp(24px, 3.5vw, 28px)', color: '#0C0C0C', fontWeight: 400 }}>
                         🖼 <strong>Storytelling Focus –</strong> Built dedicated sections to share the café’s history and values.
                      </div>
                      <div style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: 'clamp(16px, 2.2vw, 18px)', lineHeight: 'clamp(24px, 3.5vw, 28px)', color: '#0C0C0C', fontWeight: 400 }}>
                         ♿ <strong>Accessibility & Usability –</strong>  Improved readability, contrast, and navigation clarity.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Project Gallery Section (Second PC) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-20"
            style={{
              paddingLeft: 'clamp(20px, 5vw, 104px)',
              paddingRight: 'clamp(20px, 2vw, 20px)',
            }}
          >
            {/* Project Gallery with Navigation */}
            <div className="flex flex-col items-center">
              <div className="relative flex items-center justify-center w-full overflow-visible">
                {/* Responsive wrapper for PC + arrows */}
                <div
                  className="relative mx-auto"
                  style={{
                    width: 'min(92vw, 700px)',   // responsive max width
                    aspectRatio: '7 / 6',        // keep the original frame ratio
                  }}
                >
                    {/* LEFT ARROW — spaced out a bit more */}
                    <button
                      onClick={goToPrevious}
                      aria-label="Previous project"
                      className="absolute z-20 transition-opacity duration-200 hover:opacity-80 top-1/2 -translate-y-1/2 left-[-16px] md:left-[-110px]"
                    >
                      <Image
                        src="/switch-arrow-left.svg"
                        alt="Previous project"
                        width={53}
                        height={48}
                        className="w-[28px] md:w-[53px] h-auto"
                      />
                    </button>

                    {/* PC FRAME on top */}
                    <Image
                      src="/pc.svg"
                      alt="Computer monitor frame"
                      fill
                      sizes="(max-width: 768px) 92vw, 700px"
                      className="object-contain z-10 pointer-events-none"
                      priority={false}
                    />

                    {/* INNER SCROLLABLE SCREEN — covers the whole screen area edge-to-edge */}
                    <div
                      className="absolute overflow-hidden z-0"
                      style={{
                        top: '8.4%',
                        left: '7.6%',
                        right: '7%',
                        bottom: '29.4%',
                        borderRadius: '3px',
                        background: '#000',
                        boxShadow: 'inset 0 2px 6px rgba(0,0,0,0.3)',
                      }}
                    >
                      <div className="w-full h-full overflow-y-auto bg-white pc-screen">
                        <Image
                          src={projectImages[currentImageIndex].src}
                          alt={projectImages[currentImageIndex].alt}
                          width={1600}
                          height={1200}
                          sizes="(max-width: 768px) 80vw, 620px"
                          className="w-full h-auto block object-top"
                        />
                      </div>
                    </div>

                    {/* RIGHT ARROW — spaced out a bit more */}
                    <button
                      onClick={goToNext}
                      aria-label="Next project"
                      className="absolute z-20 transition-opacity duration-200 hover:opacity-80 top-1/2 -translate-y-1/2 right-[-16px] md:right-[-110px]"
                    >
                      <Image
                        src="/switch-arrow-right.svg"
                        alt="Next project"
                        width={53}
                        height={48}
                        className="w-[28px] md:w-[53px] h-auto"
                      />
                    </button>
                </div>
              </div>

              {/* Scroll Indicator for Gallery PC (kept) */}
              <div className="flex-shrink-0 flex flex-row items-end justify-end w-full mt-6 md:-mt-14">
                <div className="flex flex-col items-center">
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, repeatType: 'loop', ease: 'easeInOut' }}
                    className="mb-3"
                  >
                    <Image
                      src="/arrow-3.svg"
                      alt="Arrow pointing to PC screen"
                      width={64}
                      height={59}
                    />
                  </motion.div>
                  <p
                    style={{
                      fontFamily: 'Inter',
                      fontStyle: 'normal',
                      fontWeight: 400,
                      fontSize: '20px',
                      lineHeight: '140%',
                      color: '#0C0C0C',
                      textAlign: 'center',
                    }}
                  >
                    You can scroll
                  </p>
                </div>
              </div>

              {/* Horizontal Line */}
              <div className="mt-12 w-full">
                <div 
                  className="h-1 bg-black"
                  style={{ width: '100%', marginLeft: 'auto', marginRight: 'auto' }}
                />
              </div>
            </div>
          </motion.div>

          {/* Duration and Tools Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-20"
            style={{
              paddingLeft: 'clamp(20px, 5vw, 104px)',
              paddingRight: 'clamp(20px, 2vw, 20px)',
            }}
          >
            {/* Duration and Tools - Side by side */}
            <div className="flex flex-col xl:flex-row xl:gap-40 xl:items-start mb-16">
              {/* Duration Section */}
              <div className="mb-12 xl:mb-0 xl:flex-1">
                <h3
                  className="inline-block px-3 py-2"
                  style={{
                    fontFamily: 'Handlee, cursive',
                    fontStyle: 'normal',
                    fontWeight: 700,
                    fontSize: 'clamp(20px, 3.5vw, 28px)',
                    lineHeight: 'clamp(28px, 4.5vw, 36px)',
                    color: '#0C0C0C',
                    background: '#FFC9F0',
                  }}
                >
                  Duration
                </h3>
                
                <div>
                  <div
                    className="flex items-center justify-start text-[#555151]"
                    style={{
                      fontFamily: 'Inter, system-ui, sans-serif',
                      fontSize: 'clamp(20px, 3vw, 24px)',
                      lineHeight: 'clamp(28px, 4vw, 32px)',
                      fontWeight: 400,
                      marginTop: '16px',
                    }}
                  >
                    <span className="text-[#555151] mr-3 text-4xl">•</span>
                    2 months
                  </div>
                </div>
              </div>

              {/* Tools Section */}
              <div className="xl:flex-1" style={{ marginRight: 'clamp(-10px, -2vw, -20px)' }}>
                <h3
                  className="inline-block px-3 py-2"
                  style={{
                    fontFamily: 'Handlee, cursive',
                    fontStyle: 'normal',
                    fontWeight: 700,
                    fontSize: 'clamp(20px, 3.5vw, 28px)',
                    lineHeight: 'clamp(28px, 4.5vw, 36px)',
                    color: '#0C0C0C',
                    background: '#FFC9F0',
                  }}
                >
                  Tools
                </h3>
                
                <div style={{ marginTop: '16px' }}>
                  {['Figma', 'Adobe Illustrator', 'Photoshop', 'Visual Studio Code'].map((tool) => (
                    <div
                      key={tool}
                      className="flex items-center justify-start text-[#555151]"
                      style={{
                        fontFamily: 'Inter, system-ui, sans-serif',
                        fontSize: 'clamp(20px, 3vw, 24px)',
                        lineHeight: 'clamp(28px, 4vw, 32px)',
                        fontWeight: 400,
                      }}
                    >
                      <span className="text-[#555151] mr-3 text-4xl">•</span>
                      {tool}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Second Horizontal Line */}
            <div className="w-full">
              <div 
                className="h-1 bg-black"
                style={{
                  width: '100%',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
              />
            </div>
          </motion.div>

          {/* Fonts and Colors Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-20"
            style={{
              paddingLeft: 'clamp(20px, 5vw, 104px)',
              paddingRight: 'clamp(20px, 2vw, 20px)',
            }}
          >
            {/* Fonts and Colors - Side by side */}
            <div className="flex flex-col xl:flex-row xl:gap-40 xl:items-start mb-16">
              {/* Colors Section */}
              <div className="mb-12 xl:mb-0 xl:flex-1">
                <h3
                  className="inline-block px-3 py-2"
                  style={{
                    fontFamily: 'Handlee, cursive',
                    fontStyle: 'normal',
                    fontWeight: 700,
                    fontSize: 'clamp(20px, 3.5vw, 28px)',
                    lineHeight: 'clamp(28px, 4.5vw, 36px)',
                    color: '#0C0C0C',
                    background: '#FFC9F0',
                  }}
                >
                  Colors
                </h3>
                
                <div style={{ marginTop: '16px' }}>
                  <Image
                    src="/saraetkarim-colors.png"
                    alt="Sara Et Karim Color Palette"
                    width={300}
                    height={100}
                    className="w-full max-w-xs"
                    style={{
                      objectFit: 'contain',
                    }}
                  />
                </div>
              </div>

              {/* Fonts Section */}
              <div className="xl:flex-1" style={{ marginRight: 'clamp(-10px, -2vw, -20px)' }}>
                <h3
                  className="inline-block px-3 py-2"
                  style={{
                    fontFamily: 'Handlee, cursive',
                    fontStyle: 'normal',
                    fontWeight: 700,
                    fontSize: 'clamp(20px, 3.5vw, 28px)',
                    lineHeight: 'clamp(28px, 4.5vw, 36px)',
                    color: '#0C0C0C',
                    background: '#FFC9F0',
                  }}
                >
                  Fonts
                </h3>
                
                <div style={{ marginTop: '16px' }}>
                  <Image
                    src="/saraetkarim-fonts.png"
                    alt="Sara Et Karim Typography"
                    width={300}
                    height={100}
                    className="w-full max-w-xs"
                    style={{
                      objectFit: 'contain',
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Third Horizontal Line */}
            <div className="w-full">
              <div 
                className="h-1 bg-black"
                style={{
                  width: '100%',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
              />
            </div>
          </motion.div>

          {/* Live Demo Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="mt-20"
            style={{
              paddingLeft: 'clamp(20px, 5vw, 104px)',
              paddingRight: 'clamp(20px, 2vw, 20px)',
            }}
          >
            {/* Get in touch Section */}
            <div className="flex flex-col items-start mt-12 mb-8">
              <Image
                src="/Vector.png"
                alt="Serena logo"
                width={48}
                height={48}
                style={{
                  width: '48px',
                  height: '48px',
                  objectFit: 'contain',
                  marginBottom: '12px',
                }}
              />
              <div className="flex items-center">
                <span
                  className="inline-block px-3 py-2"
                  style={{
                    fontFamily: 'Handlee, cursive',
                    fontStyle: 'normal',
                    fontWeight: 700,
                    fontSize: 'clamp(20px, 3.5vw, 28px)',
                    lineHeight: 'clamp(28px, 4.5vw, 36px)',
                    color: '#0C0C0C',
                    background: '#FFE68C',
                  }}
                >
                  Get in touch:
                </span>
                <span
                  style={{
                    fontFamily: 'Handlee, cursive',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    fontSize: 'clamp(20px, 3.5vw, 28px)',
                    lineHeight: 'clamp(28px, 4.5vw, 36px)',
                    color: '#0C0C0C',
                    marginLeft: '8px',
                  }}
                >
                  Serenaxtech@gmail.com
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </main>
  );
};

export default HashAcademyProject;
