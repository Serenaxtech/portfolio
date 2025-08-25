'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative w-full h-screen bg-white flex items-center justify-center overflow-hidden -mt-[4.5rem] pt-[4.5rem] lg:mt-0 lg:pt-0">
      {/* width container */}
      <div className="w-full max-w-[1308px] px-3 sm:px-4 md:px-6 lg:px-8">
        {/* row - responsive layout keeping avatar and text side by side */}
        <div className="flex items-center justify-center lg:justify-start gap-3 xs:gap-4 sm:gap-6 md:gap-10 lg:gap-16 xl:gap-20 ml-2 sm:ml-4 lg:ml-16">
          
          {/* ================= Avatar + glow ================= */}
          <motion.div
            className="relative shrink-0 mr-2 sm:mr-4 md:mr-6 lg:mr-12 xl:mr-20"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{
              width: 'clamp(160px, 25vw, 433px)',
              height: 'clamp(160px, 25vw, 433px)',
            }}
          >
            {/* pink radial glow */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                background:
                  'radial-gradient(50% 50% at 50% 50%, #FFC9F0 24.04%, rgba(255,201,240,0) 100%)',
              }}
              animate={{ scale: [1, 1.02, 1], rotate: [0, 1, -1, 0] }}
              transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse' }}
            />

            {/* inner soft white ellipse */}
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{
                width: '75%',
                height: '68%',
                background:
                  'radial-gradient(50% 50% at 50% 50%, #FFFFFF 0%, rgba(255, 201, 240, 0) 100%)',
                borderRadius: '50%',
              }}
            />

            {/* avatar image */}
            <motion.div
              className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
              style={{ width: '72%', height: '72%' }}
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 280 }}
            >
              <div
                className="h-full w-full"
                style={{
                  backgroundImage: 'url(/me.png)', // make sure /public/me.png exists
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  borderRadius: '12px',
                }}
              />
            </motion.div>

            {/* curved arrow pointing to text (desktop+) */}
            <motion.img
              src="/Arrow 1.png"
              alt=""
              className="pointer-events-none absolute hidden md:block"
              style={{
                top: '20%',
                right: 'clamp(-30%, -24%, -20%)',
                width: 'clamp(80px, 10vw, 220px)',
                transform: 'rotate(-6deg)',
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.45 }}
            />
          </motion.div>

          {/* ================= Text ================= */}
          <motion.div
            className="min-w-0 flex-1 max-w-full sm:max-w-none"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
          >
            {/* Hello! I'm Serena */}
            <p
              className="mb-2 sm:mb-3 font-normal text-zinc-900"
              style={{
                fontFamily: 'Preahvihear, system-ui, sans-serif',
                fontSize: 'clamp(16px, 4vw, 36px)',
                lineHeight: '1.4',
                letterSpacing: '-0.02em',
              }}
            >
              Hello! I&apos;m <span className="text-[#ED13B0]">Serena</span>
            </p>

            {/* A Designer who (underlined) */}
            <p
              className="mb-4 sm:mb-6 underline decoration-black/90"
              style={{
                fontFamily: 'Preahvihear, system-ui, sans-serif',
                fontSize: 'clamp(10px, 2.5vw, 19px)',
                lineHeight: 'clamp(20px, 4vw, 34px)',
                letterSpacing: '0.02em',
              }}
            >
              A Designer who
            </p>

            {/* Headline */}
            <div className="max-w-full sm:max-w-[386px]">
              <h1
                className="mb-2 font-normal text-zinc-900"
                style={{
                  fontFamily: 'Preahvihear, system-ui, sans-serif',
                  fontSize: 'clamp(20px, 6vw, 50px)',
                  lineHeight: 'clamp(28px, 8vw, 63px)',
                  letterSpacing: '0.02em',
                }}
              >
                Judges a book
                <br />
                by its{' '}
                <span className="relative inline-block">
                  <span className="text-[#ED13B0]">cover</span>
                  {/* thin oval around "cover" */}
                  <svg
                    className="pointer-events-none absolute inset-0 -translate-y-[0.15em] scale-110 -rotate-6"
                    viewBox="0 0 120 50"
                    preserveAspectRatio="none"
                  >
                    <ellipse
                      cx="60"
                      cy="30"
                      rx="58"
                      ry="18"
                      fill="none"
                      stroke="black"
                      strokeWidth="0.5"
                    />
                  </svg>
                </span>
                ...
              </h1>
            </div>

            {/* Caption */}
            <p
              className="mt-3 sm:mt-4 text-zinc-800/90 pr-2 sm:pr-0"
              style={{
                fontFamily: 'Preahvihear, system-ui, sans-serif',
                fontSize: 'clamp(10px, 2vw, 13px)',
                lineHeight: 'clamp(16px, 3vw, 23px)',
                letterSpacing: '0.02em',
              }}
            >
              Because if the cover does not impress you what else can?
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
