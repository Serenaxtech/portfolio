'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { PieChart } from 'react-minimal-pie-chart';

export default function About() {
  return (
    <section id="about" className="relative w-full py-20 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Think of me as - Header */}
        <motion.div
          className="flex justify-start mb-16 lg:mb-20 px-4 sm:px-8 lg:px-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="relative">
            <span
              className="inline-block text-[#0C0C0C] text-center whitespace-nowrap font-bold bg-[#FFC9F0] px-2 py-1"
              style={{
                fontFamily: 'Handlee, cursive',
                fontSize: 'clamp(22px, 2.8vw, 32px)',
                lineHeight: '1.3',
                fontWeight: 700,
              }}
            >
              💡Think of me as
            </span>
            
{/* Curved Arrow pointing to content */}
            <motion.div
              className="absolute -bottom-12 left-1/2 sm:-bottom-15"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true }}
              style={{
                transform: 'translateX(-50%) rotate(25deg)',
                transformOrigin: 'center top',
                width: 'clamp(40px, 5vw, 80px)',
                height: 'clamp(30px, 4vw, 60px)',
              }}
            >
              <Image
                src="/arrow.png"
                alt="Arrow pointing to pie chart"
                fill
                className="object-contain"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Main Content Container */}
        <div className="space-y-8">
          
          {/* Pie Chart - Top on small screens */}
          <motion.div
            className="flex justify-center items-center lg:hidden"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              {/* Pie Chart Container */}
              <div
                className="relative p-6"
                style={{
                  width: 'clamp(280px, 70vw, 360px)',
                  height: 'clamp(280px, 70vw, 360px)',
                }}
              >
                {/* React Minimal Pie Chart */}
                <PieChart
                  data={[
                    { 
                      title: 'Coder', 
                      value: 30, 
                      color: '#F5C2E7',
                    },
                    { 
                      title: 'Designer', 
                      value: 70, 
                      color: '#B565A7',
                    },
                  ]}
                  startAngle={-90}
                  lineWidth={100}
                  paddingAngle={2}
                  segmentsShift={1}
                  radius={40}
                  animate
                  animationDuration={800}
                  style={{
                    width: '100%',
                    height: '100%',
                  }}
                />
                
                {/* Custom Labels Positioned on Chart */}
                <div
                  className="absolute text-white text-center pointer-events-none"
                  style={{
                    fontFamily: 'Handlee, cursive',
                    fontSize: 'clamp(16px, 4vw, 24px)',
                    lineHeight: 'clamp(22px, 5vw, 32px)',
                    fontWeight: 400,
                    left: '35%',
                    top: '60%',
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  Designer
                </div>
                
                <div
                  className="absolute text-[#251C1C] text-center pointer-events-none"
                  style={{
                    fontFamily: 'Handlee, cursive',
                    fontSize: 'clamp(16px, 4vw, 24px)',
                    lineHeight: 'clamp(22px, 5vw, 32px)',
                    fontWeight: 400,
                    left: '65%',
                    top: '35%',
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  Coder
                </div>
              </div>
            </div>
          </motion.div>

          {/* Table Layout for Small Screens */}
          <motion.div
            className="lg:hidden overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="w-full max-w-4xl mx-auto px-4 sm:px-6">
              <div className="grid grid-cols-2 gap-6 sm:gap-10 md:gap-12">
                
                {/* Part Designer Column */}
                <div className="text-left">
                  <h3
                    className="text-[#0C0C0C] mb-4"
                    style={{
                      fontFamily: 'Preahvihear, system-ui, sans-serif',
                      fontSize: 'clamp(18px, 5vw, 24px)',
                      lineHeight: 'clamp(24px, 6vw, 32px)',
                      fontWeight: 400,
                    }}
                  >
                    Part <span 
                      className="relative inline-block"
                      style={{
                        background: 'linear-gradient(transparent 60%, #FFC9F0 60%, #FFC9F0 90%, transparent 90%)'
                      }}
                    >
                      Designer
                    </span>
                  </h3>
                  
                  <ul
                    className="space-y-2 text-[#555151]"
                    style={{
                      fontFamily: 'Inter, system-ui, sans-serif',
                      fontSize: 'clamp(12px, 3.5vw, 16px)',
                      lineHeight: 'clamp(16px, 4.5vw, 22px)',
                      fontWeight: 400,
                    }}
                  >
                    <li className="flex items-center justify-start">
                      <span className="text-[#555151] mr-2 text-xl">•</span>
                      UI Design
                    </li>
                    <li className="flex items-center justify-start">
                      <span className="text-[#555151] mr-2 text-xl">•</span>
                      UX Design
                    </li>
                    <li className="flex items-center justify-start">
                      <span className="text-[#555151] mr-2 text-xl">•</span>
                      Design Systems
                    </li>
                    <li className="flex items-center justify-start">
                      <span className="text-[#555151] mr-2 text-xl">•</span>
                      Interaction Design
                    </li>
                    <li className="flex items-center justify-start">
                      <span className="text-[#555151] mr-2 text-xl">•</span>
                      Motion Design
                    </li>
                  </ul>
                </div>

                {/* Part Coder Column */}
                <div className="text-left">
                  <h3
                    className="text-[#0C0C0C] mb-4"
                    style={{
                      fontFamily: 'Preahvihear, system-ui, sans-serif',
                      fontSize: 'clamp(18px, 5vw, 24px)',
                      lineHeight: 'clamp(24px, 6vw, 32px)',
                      fontWeight: 400,
                    }}
                  >
                    Part <span 
                      className="relative inline-block"
                      style={{
                        background: 'linear-gradient(transparent 60%, #FFC9F0 60%, #FFC9F0 90%, transparent 90%)'
                      }}
                    >
                      Coder
                    </span>
                  </h3>
                  
                  <ul
                    className="space-y-2 text-[#555151]"
                    style={{
                      fontFamily: 'Inter, system-ui, sans-serif',
                      fontSize: 'clamp(12px, 3.5vw, 16px)',
                      lineHeight: 'clamp(16px, 4.5vw, 22px)',
                      fontWeight: 400,
                    }}
                  >
                    <li className="flex items-center justify-start">
                      <span className="text-[#555151] mr-2 text-xl">•</span>
                      React.js
                    </li>
                    <li className="flex items-center justify-start">
                      <span className="text-[#555151] mr-2 text-xl">•</span>
                      Next.js
                    </li>
                    <li className="flex items-center justify-start">
                      <span className="text-[#555151] mr-2 text-xl">•</span>
                      TypeScript
                    </li>
                    <li className="flex items-center justify-start">
                      <span className="text-[#555151] mr-2 text-xl">•</span>
                      TailwindCSS
                    </li>
                    <li className="flex items-center justify-start">
                      <span className="text-[#555151] mr-2 text-xl">•</span>
                      REST / GraphQL
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Desktop Layout - Hidden on small screens */}
          <div className="hidden lg:grid grid-cols-3 gap-12 items-center">
            
            {/* Left Side - Part Designer */}
            <motion.div
              className="text-left flex flex-col items-start"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative mb-8">
                <h3
                  className="text-[#0C0C0C] mb-2"
                  style={{
                    fontFamily: 'Preahvihear, system-ui, sans-serif',
                    fontSize: 'clamp(26px, 2.8vw, 36px)',
                    lineHeight: 'clamp(38px, 4.2vw, 60px)',
                    fontWeight: 400,
                  }}
                >
                  Part <span 
                    className="relative inline-block"
                    style={{
                      background: 'linear-gradient(transparent 60%, #FFC9F0 60%, #FFC9F0 90%, transparent 90%)'
                    }}
                  >
                    Designer
                  </span>
                </h3>
              </div>
              
              <ul
                className="space-y-1 text-[#555151] flex flex-col items-start"
                style={{
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontSize: 'clamp(20px, 2.2vw, 28px)',
                  lineHeight: 'clamp(28px, 2.8vw, 36px)',
                  fontWeight: 400,
                }}
              >
                <li className="flex items-center justify-start">
                  <span className="text-[#555151] mr-3 text-4xl">•</span>
                  UI Design
                </li>
                <li className="flex items-center justify-start">
                  <span className="text-[#555151] mr-3 text-4xl">•</span>
                  UX Design
                </li>
                <li className="flex items-center justify-start">
                  <span className="text-[#555151] mr-3 text-4xl">•</span>
                  Design Systems
                </li>
                <li className="flex items-center justify-start">
                  <span className="text-[#555151] mr-3 text-4xl">•</span>
                  Interaction Design
                </li>
                <li className="flex items-center justify-start">
                  <span className="text-[#555151] mr-3 text-4xl">•</span>
                  Motion Design
                </li>
              </ul>
            </motion.div>

            {/* Center - Pie Chart */}
            <motion.div
              className="flex justify-center items-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                {/* Pie Chart Container */}
                <div
                  className="relative p-8"
                  style={{
                    width: 'clamp(400px, 45vw, 520px)',
                    height: 'clamp(400px, 45vw, 520px)',
                  }}
                >
                  {/* React Minimal Pie Chart */}
                  <PieChart
                    data={[
                      { 
                        title: 'Coder', 
                        value: 30, 
                        color: '#F5C2E7',
                      },
                      { 
                        title: 'Designer', 
                        value: 70, 
                        color: '#B565A7',
                      },
                    ]}
                    startAngle={-90}
                    lineWidth={100}
                    paddingAngle={2}
                    segmentsShift={1}
                    radius={40}
                    animate
                    animationDuration={800}
                    style={{
                      width: '100%',
                      height: '100%',
                    }}
                  />
                  
                  {/* Custom Labels Positioned on Chart */}
                  <div
                    className="absolute text-white text-center pointer-events-none"
                    style={{
                      fontFamily: 'Handlee, cursive',
                      fontSize: 'clamp(20px, 2.5vw, 32px)',
                      lineHeight: 'clamp(28px, 3.5vw, 43px)',
                      fontWeight: 400,
                      left: '35%',
                      top: '60%',
                      transform: 'translate(-50%, -50%)',
                    }}
                  >
                    Designer
                  </div>
                  
                  <div
                    className="absolute text-[#251C1C] text-center pointer-events-none"
                    style={{
                      fontFamily: 'Handlee, cursive',
                      fontSize: 'clamp(20px, 2.5vw, 32px)',
                      lineHeight: 'clamp(28px, 3.5vw, 43px)',
                      fontWeight: 400,
                      left: '65%',
                      top: '35%',
                      transform: 'translate(-50%, -50%)',
                    }}
                  >
                    Coder
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Part Coder */}
            <motion.div
              className="text-left flex flex-col items-start"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative mb-8">
                <h3
                  className="text-[#0C0C0C] mb-2"
                  style={{
                    fontFamily: 'Preahvihear, system-ui, sans-serif',
                    fontSize: 'clamp(26px, 2.8vw, 36px)',
                    lineHeight: 'clamp(38px, 4.2vw, 60px)',
                    fontWeight: 400,
                  }}
                >
                  Part <span 
                    className="relative inline-block"
                    style={{
                      background: 'linear-gradient(transparent 60%, #FFC9F0 60%, #FFC9F0 90%, transparent 90%)'
                    }}
                  >
                    Coder
                  </span>
                </h3>
              </div>
              
              <ul
                className="space-y-1 text-[#555151] flex flex-col items-start"
                style={{
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontSize: 'clamp(20px, 2.2vw, 28px)',
                  lineHeight: 'clamp(28px, 2.8vw, 36px)',
                  fontWeight: 400,
                }}
              >
                <li className="flex items-center justify-start">
                  <span className="text-[#555151] mr-3 text-4xl">•</span>
                  React.js
                </li>
                <li className="flex items-center justify-start">
                  <span className="text-[#555151] mr-3 text-4xl">•</span>
                  Next.js
                </li>
                <li className="flex items-center justify-start">
                  <span className="text-[#555151] mr-3 text-4xl">•</span>
                  TypeScript
                </li>
                <li className="flex items-center justify-start">
                  <span className="text-[#555151] mr-3 text-4xl">•</span>
                  TailwindCSS
                </li>
                <li className="flex items-center justify-start">
                  <span className="text-[#555151] mr-3 text-4xl">•</span>
                  REST / GraphQL
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
