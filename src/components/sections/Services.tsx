'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Services() {
  return (
    <section className="relative w-full py-20 lg:py-32 bg-white" style={{ overflow: 'visible' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* What I do - Header */}
        <motion.div 
          className="flex justify-start mb-16 lg:mb-20 px-4 sm:px-8 lg:px-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="relative">
            <span
              className="inline-block text-[#0C0C0C] text-center whitespace-nowrap font-bold bg-[#FFC9F0] px-4 py-2"
              style={{
                fontFamily: 'Handlee, cursive',
                fontSize: 'clamp(22px, 2.8vw, 32px)',
                lineHeight: '1.3',
                fontWeight: 700,
                borderRadius: '8px',
              }}
            >
              What i do?
            </span>
            
            {/* Curved Arrow pointing to content */}
            <motion.div
              className="absolute -bottom-30 -left-8 hidden sm:block"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true }}
              style={{
                transform: 'translateX(-50%) rotate(25deg)',
                transformOrigin: 'center top',
                width: 'clamp(70px, 8vw, 120px)',
                height: 'clamp(60px, 7vw, 140px)',
              }}
            >
              <Image
                src="/arrow-2.svg"
                alt="Arrow pointing to cards"
                fill
                className="object-contain"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Mobile Cards - Stacked Layout */}
        <div className="block md:hidden space-y-8 px-4" style={{ overflow: 'visible' }}>
          
          {/* User Research Design Card - Yellow */}
              <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            style={{ overflow: 'visible' }}
          >
            <div 
              className="relative p-6 mx-auto max-w-sm"
              style={{
                background: '#FFE68C',
                border: '3px solid #EECD56',
                boxShadow: '3px 3px 15px rgba(255, 230, 140, 0.13)',
                borderRadius: '8px',
                height: '240px',
                overflow: 'visible',
              }}
            >
              {/* Pen/Paper Label */}
              <div 
                className="absolute text-[#0C0C0C]"
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '0px',
                  gap: '10px',
                  top: '40px',
                  right: '-35px',
                  width: '120px',
                  height: '50px',
                  background: '#9DDCFF',
                  boxShadow: '1px 1px 11.2px rgba(0, 0, 0, 0.08)',
                  fontFamily: 'Handlee, cursive',
                  fontSize: '16px',
                  fontWeight: 700,
                  textAlign: 'center',
                }}
              >
                Pen/Paper
              </div>
              
              {/* Pencil Icon */}
              <div 
                className="absolute top-6 left-6"
                style={{
                  width: '40px',
                  height: '45px',
                  transform: 'rotate(-2deg)',
                }}
              >
                <Image
                  src="/pen.svg"
                  alt="Pen icon"
                  fill
                  className="object-contain"
                />
              </div>
              
              {/* Title */}
              <div 
                className="absolute"
                style={{
                  top: '140px',
                  left: '24px',
                  width: '200px',
                }}
              >
                <h3 
                  className="text-[#000000] leading-tight"
                  style={{
                    fontFamily: 'Inter, system-ui, sans-serif',
                    fontWeight: 500,
                    fontSize: '20px',
                    lineHeight: '26px',
                  }}
                >
                  User Research<br />Design
                </h3>
              </div>
            </div>
          </motion.div>

                    {/* UI & Product Design Card - Blue */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
            style={{ overflow: 'visible' }}
          >
            <div 
              className="relative p-6 mx-auto max-w-sm"
              style={{
                background: '#9DDCFF',
                border: '3px solid #5AB5E8',
                boxShadow: '3px 3px 15px rgba(157, 220, 255, 0.15)',
                borderRadius: '8px',
                height: '240px',
                overflow: 'visible',
              }}
            >
              {/* Figma Label */}
              <div 
                className="absolute text-[#0C0C0C]"
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '0px',
                  gap: '10px',
                  top: '-2px',
                  right: '-30px',
                  width: '70px',
                  height: '50px',
                  background: '#FFC9F0',
                  boxShadow: '1px 1px 11.2px rgba(0, 0, 0, 0.08)',
                  fontFamily: 'Handlee, cursive',
                  fontSize: '16px',
                  fontWeight: 700,
                  textAlign: 'center',
                }}
              >
                Figma
              </div>
              
              {/* Eye Icon */}
              <div 
                className="absolute top-6 left-6"
                style={{
                  width: '50px',
                  height: '45px',
                  transform: 'rotate(5deg)',
                }}
              >
                <Image
                  src="/eye.svg"
                  alt="Eye icon"
                  fill
                  className="object-contain"
                />
              </div>
              
              {/* Title */}
              <div 
                className="absolute"
                style={{
                  top: '140px',
                  left: '24px',
                  width: '200px',
                }}
              >
                <h3 
                  className="text-[#000000] leading-tight"
                  style={{
                    fontFamily: 'Inter, system-ui, sans-serif',
                    fontWeight: 500,
                    fontSize: '20px',
                    lineHeight: '26px',
                  }}
                >
                  UI & Product<br />Design
                </h3>
              </div>
            </div>
                    </motion.div>
                    
          {/* Development Card - Pink */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div 
              className="relative p-6 mx-auto max-w-sm"
              style={{
                background: '#FFC9F0',
                border: '5px solid #F384D4',
                boxShadow: '5px 5px 20px rgba(255, 201, 240, 0.13)',
                borderRadius: '8px',
                height: '240px',
                overflow: 'visible',
              }}
            >
                            {/* Webflow Label */}
              <div 
                className="absolute text-[#0C0C0C]"
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '0px',
                  gap: '10px',
                  top: '40px',
                  right: '-35px',
                  width: '90px',
                  height: '50px',
                  background: '#FFE68C',
                  boxShadow: '1px 1px 11.2px rgba(0, 0, 0, 0.08)',
                  fontFamily: 'Handlee, cursive',
                  fontSize: '16px',
                  fontWeight: 700,
                  textAlign: 'center',
                }}
              >
                Webflow
              </div>

              {/* Star Icon */}
              <div 
                className="absolute top-6 left-6"
                style={{
                  width: '50px',
                  height: '50px',
                  transform: 'rotate(10deg)',
                }}
              >
                <Image
                  src="/star.svg"
                  alt="Star icon"
                  fill
                  className="object-contain"
                />
                  </div>

                            {/* Title */}
              <div 
                className="absolute"
                style={{
                  top: '120px',
                  left: '24px',
                  width: '200px',
                }}
              >
                <h3 
                  className="text-[#000000] leading-tight"
                  style={{
                    fontFamily: 'Inter, system-ui, sans-serif',
                    fontWeight: 500,
                    fontSize: '20px',
                    lineHeight: '26px',
                    transform: 'rotate(0deg)',
                  }}
                >
                  Development
                    </h3>
                  </div>
            </div>
          </motion.div>
        </div>

        {/* Desktop Cards - Overlapping Layout */}
        <div className="hidden md:block" style={{ overflow: 'visible' }}>
          <div className="relative flex justify-center items-center min-h-[500px] lg:min-h-[600px]" style={{ overflow: 'visible' }}>
            
            {/* User Research Design Card - Yellow (Left) */}
                  <motion.div 
              className="absolute z-10"
              initial={{ opacity: 0, x: -100, rotate: -10 }}
              whileInView={{ opacity: 1, x: 0, rotate: -4 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              style={{
                left: 'clamp(-40px, -3vw, -20px)',
                top: 'clamp(40px, 5vw, 60px)',
                transform: 'rotate(-4deg)',
                overflow: 'visible',
              }}
            >
              <div
                className="relative p-8"
                style={{
                  width: 'clamp(280px, 32vw, 380px)',
                  height: 'clamp(360px, 40vw, 480px)',
                  background: '#FFE68C',
                  border: '5px solid #EECD56',
                  boxShadow: '5px 5px 20px rgba(255, 230, 140, 0.13)',
                  borderRadius: '8px',
                  overflow: 'visible',
                }}
              >
                {/* Pen/Paper Label */}
                <div 
                  className="absolute text-[#0C0C0C]"
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '0px',
                    gap: '10px',
                    top: 'clamp(60px, 7vw, 86px)',
                    right: 'clamp(-40px, -4vw, -30px)',
                    width: 'clamp(120px, 14vw, 146px)',
                    height: 'clamp(50px, 6vw, 60px)',
                    background: '#9DDCFF',
                    boxShadow: '1px 1px 11.2px rgba(0, 0, 0, 0.08)',
                    fontFamily: 'Handlee, cursive',
                    fontSize: 'clamp(18px, 2.2vw, 32px)',
                    fontWeight: 700,
                    textAlign: 'center',
                  }}
                >
                  Pen/Paper
                </div>
                
                {/* Pencil Icon */}
                <div 
                  className="absolute"
                  style={{
                    top: 'clamp(120px, 15vw, 170px)',
                    left: 'clamp(40px, 5vw, 55px)',
                    width: 'clamp(40px, 5vw, 49px)',
                    height: 'clamp(45px, 6vw, 55px)',
                    transform: 'rotate(-3deg)',
                  }}
                >
                  <Image
                    src="/pen.svg"
                    alt="Pen icon"
                    fill
                    className="object-contain"
                  />
                </div>
                
                {/* Title */}
                <div 
                  className="absolute"
                  style={{
                    top: 'clamp(200px, 24vw, 280px)',
                    left: 'clamp(40px, 5vw, 55px)',
                    width: 'clamp(220px, 25vw, 289px)',
                  }}
                >
                  <h3
                    className="text-[#000000] leading-tight"
                    style={{
                      fontFamily: 'Inter, system-ui, sans-serif',
                      fontWeight: 500,
                      fontSize: 'clamp(24px, 3vw, 36px)',
                      lineHeight: 'clamp(28px, 3.5vw, 44px)',
                    }}
                  >
                    User Research<br />Design
                  </h3>
                </div>
              </div>
            </motion.div>

                        {/* UI & Product Design Card - Blue (Center) */}
            <motion.div
              className="relative z-20"
              initial={{ opacity: 0, y: 100, rotate: 10 }}
              whileInView={{ opacity: 1, y: 0, rotate: 5.5 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              style={{
                transform: 'rotate(5.5deg)',
              }}
            >
              <div
                className="relative p-8"
                style={{
                  width: 'clamp(300px, 34vw, 400px)',
                  height: 'clamp(360px, 40vw, 480px)',
                  background: '#9DDCFF',
                  border: '5px solid #5AB5E8',
                  boxShadow: '5px 5px 20px rgba(157, 220, 255, 0.15)',
                  borderRadius: '8px',
                  overflow: 'visible',
                }}
              >
                {/* Figma Label */}
                <div 
                  className="absolute text-[#0C0C0C]"
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '0px',
                    gap: '10px',
                    top: '-2px',
                    right: 'clamp(-35px, -4vw, -25px)',
                    width: 'clamp(70px, 8vw, 90px)',
                    height: 'clamp(50px, 6vw, 60px)',
                    background: '#FFC9F0',
                    boxShadow: '1px 1px 11.2px rgba(0, 0, 0, 0.08)',
                    fontFamily: 'Handlee, cursive',
                    fontSize: 'clamp(18px, 2.2vw, 32px)',
                    fontWeight: 700,
                    textAlign: 'center',
                  }}
                >
                  Figma
                </div>
                
                {/* Eye Icon */}
                <div 
                  className="absolute"
                  style={{
                    top: 'clamp(120px, 15vw, 170px)',
                    left: 'clamp(40px, 5vw, 55px)',
                    width: 'clamp(60px, 7vw, 75px)',
                    height: 'clamp(50px, 6vw, 65px)',
                    transform: 'rotate(5deg)',
                  }}
                >
                  <Image
                    src="/eye.svg"
                    alt="Eye icon"
                    fill
                    className="object-contain"
                  />
                </div>
                
                {/* Title */}
                <div 
                  className="absolute"
                  style={{
                    top: 'clamp(200px, 24vw, 280px)',
                    left: 'clamp(40px, 5vw, 55px)',
                    width: 'clamp(220px, 25vw, 289px)',
                  }}
                >
                  <h3
                    className="text-[#000000] leading-tight"
                    style={{
                      fontFamily: 'Inter, system-ui, sans-serif',
                      fontWeight: 500,
                      fontSize: 'clamp(24px, 3vw, 36px)',
                      lineHeight: 'clamp(28px, 3.5vw, 44px)',
                    }}
                  >
                    UI & Product<br />Design
                  </h3>
                </div>
              </div>
                  </motion.div>

            {/* Development Card - Pink (Right) */}
            <motion.div
              className="absolute z-10"
              initial={{ opacity: 0, x: 100, rotate: 10 }}
              whileInView={{ opacity: 1, x: 0, rotate: -5 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              style={{
                right: 'clamp(-40px, -3vw, -20px)',
                top: 'clamp(40px, 5vw, 60px)',
                transform: 'rotate(-5deg)',
                overflow: 'visible',
              }}
            >
              <div
                className="relative p-8"
                style={{
                  width: 'clamp(280px, 32vw, 380px)',
                  height: 'clamp(360px, 40vw, 452px)',
                  background: '#FFC9F0',
                  border: '5px solid #F384D4',
                  boxShadow: '5px 5px 20px rgba(255, 201, 240, 0.13)',
                  borderRadius: '8px',
                  overflow: 'visible',
                }}
              >
                {/* Webflow Label */}
                <div 
                  className="absolute text-[#0C0C0C]"
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '0px',
                    gap: '10px',
                    top: 'clamp(60px, 7vw, 86px)',
                    right: 'clamp(-40px, -4vw, -30px)',
                    width: 'clamp(80px, 9vw, 100px)',
                    height: 'clamp(50px, 6vw, 60px)',
                    background: '#FFE68C',
                    boxShadow: '1px 1px 11.2px rgba(0, 0, 0, 0.08)',
                    fontFamily: 'Handlee, cursive',
                    fontSize: 'clamp(18px, 2.2vw, 32px)',
                    fontWeight: 700,
                    textAlign: 'center',
                  }}
                >
                  Webflow
                </div>

                {/* Star Icon */}
                <div 
                  className="absolute"
                  style={{
                    top: 'clamp(120px, 15vw, 170px)',
                    left: 'clamp(40px, 5vw, 55px)',
                    width: 'clamp(50px, 6vw, 65px)',
                    height: 'clamp(50px, 6vw, 65px)',
                    transform: 'rotate(10deg)',
                  }}
                >
                  <Image
                    src="/star.svg"
                    alt="Star icon"
                    fill
                    className="object-contain"
                  />
                </div>

                {/* Title */}
                <div 
                  className="absolute"
                  style={{
                    top: 'clamp(200px, 24vw, 280px)',
                    left: 'clamp(40px, 5vw, 55px)',
                    width: 'clamp(220px, 25vw, 289px)',
                  }}
                >
                  <h3 
                    className="text-[#000000] leading-tight"
                    style={{
                      fontFamily: 'Inter, system-ui, sans-serif',
                      fontWeight: 500,
                      fontSize: 'clamp(24px, 3vw, 36px)',
                      lineHeight: 'clamp(28px, 3.6vw, 44px)',
                      transform: 'rotate(0deg)',
                    }}
                  >
                    Development
                  </h3>
                </div>
              </div>
              </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
