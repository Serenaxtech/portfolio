'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const Projects = () => {
  const router = useRouter();
  
  const projects = [
    {
      id: 1,
      title: 'Comprehensive Cybersecurity Training Platform',
      category: 'Leading Product Strategy',
      image: '/project-1.jpg', // Placeholder for cybersecurity dashboard mockup
      tag: 'Hash'
    },
    {
      id: 2,
      title: 'Master Cybersecurity with Hash',
      category: 'Leading Product Strategy',
      image: '/project-2.jpg',
      tag: 'UI/UX'
    }
  ]

  return (
    <section
      className="relative w-full bg-white py-8 sm:py-12 lg:py-20 xl:py-20"
      style={{ overflow: 'visible' }}
    >
      {/* Responsive container for small/medium screens */}
      <div className="xl:hidden container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-8 sm:mb-12 lg:mb-16 relative">
          
          {/* Left Side - Featured Projects Title and Description */}
          <div className="flex-1 mb-8 lg:mb-0">
            <motion.div
              className="mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span 
                className="inline-block text-[#0C0C0C] px-2"
                style={{
                  background: '#FFC9F0',
                  fontFamily: 'Handlee, cursive',
                  fontSize: 'clamp(24px, 4vw, 35px)',
                  lineHeight: '1.35',
                  fontWeight: 700,
                  color: '#0C0C0C',
                  whiteSpace: 'nowrap',
                }}
              >
                Featured Projects
              </span>
            </motion.div>

            <motion.div
              className="hidden sm:block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <p 
                className="text-[#0C0C0C] max-w-xs m-0"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: 'clamp(18px, 3vw, 24px)',
                  lineHeight: '140%',
                  fontWeight: 400,
                }}
              >
                Have designed<br />more than 20 projects
              </p>
            </motion.div>
          </div>

          {/* Arrow - visible on all screens */}
          <motion.div
            className="absolute"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            style={{
              left: 'clamp(120px, 12vw, 200px)',
              top: 'clamp(60px, 8vw, 70px)',
              width: 'clamp(50px, 6vw, 95px)',
              height: 'clamp(30px, 4vw, 55px)',
              transform: 'rotate(-139.34deg)',
            }}
          >
            <Image
              src="/arrow.png"
              alt="Arrow pointing to description"
              fill
              className="object-contain"
            />
          </motion.div>
        </div>

        {/* Project Cards - Responsive Grid for small/medium screens */}
        <div className="xl:hidden grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-12 sm:mb-16 lg:mb-20">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="relative cursor-pointer w-full max-w-md mx-auto md:max-w-none bg-white border-3 border-black rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1
              }}
              viewport={{ once: true }}
              onClick={() => {
                if (project.id === 1) {
                  router.push('/project/hashacademy');
                } else if (project.id === 2) {
                  router.push('/project/saraetkarim');
                } else {
                  console.log(`Navigate to project ${project.id}`);
                }
              }}
              style={{
                minHeight: 'clamp(380px, 50vw, 454px)',
                background: '#FFFFFF',
                border: '3px solid #000000',
                borderRadius: '6px',
              }}
            >
              {/* Project Image */}
              <div 
                className="w-full p-4"
                style={{
                  height: 'clamp(280px, 32vw, 300px)',
                }}
              >
                {project.id === 1 ? (
                  // First card - Hash Academy image
                  <div className="w-full h-full rounded overflow-hidden relative">
                    <Image
                      src="/hash-main.png"
                      alt="Hash Academy - Master Cybersecurity with Hash"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 466px"
                    />
                  </div>
                ) : project.id === 2 ? (
                  // Second card - Sara Et Karim image
                  <div className="w-full h-full rounded overflow-hidden relative">
                    <Image
                      src="/saraetkarim-card.png"
                      alt="Sara Et Karim - Cozy Café Website"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 466px"
                    />
                  </div>
                ) : (
                  // Other cards - placeholder
                  <div 
                    className="w-full h-full rounded flex items-center justify-center"
                    style={{
                      background: 'url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDI1IiBoZWlnaHQ9IjMyMCIgdmlld0JveD0iMCAwIDQyNSAzMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MjUiIGhlaWdodD0iMzIwIiBmaWxsPSIjMUExQTFBIi8+CjxyZWN0IHg9IjE2MCIgeT0iMTIwIiB3aWR0aD0iMTA1IiBoZWlnaHQ9IjgwIiBmaWxsPSIjMzMzIi8+CjxjaXJjbGUgY3g9IjIxMiIgY3k9IjE0MCIgcj0iMTAiIGZpbGw9IiM2NjYiLz4KPHBhdGggZD0ibTE2NSAxNzAgMTUtMTUgMTUgMTUgMzAtMzAiIHN0cm9rZT0iIzY2NiIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsPSJub25lIi8+CjwvZz4KPC9zdmc+)',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  >
                    {/* Placeholder content */}
                    <div className="text-center text-white text-sm opacity-60">
                      <div className="mb-2">📊</div>
                      <div>Project Screenshot</div>
                      <div className="text-xs mt-1">Cybersecurity Dashboard</div>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Section - Strategy Text and Hash Comment */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                
                {/* Project-specific Text */}
                <div className="flex-1 pr-4">
                  <p 
                    className="text-[#0C0C0C] m-0"
                    style={{
                      fontFamily: 'Handlee, cursive',
                      fontSize: 'clamp(18px, 3.5vw, 28px)',
                      lineHeight: '1.2',
                      fontWeight: 700,
                      color: '#0C0C0C',
                    }}
                  >
                    {project.id === 1 ? 'Leading Product Strategy' : 'Sara Et Karim Rebranding'}
                  </p>
                </div>

                {/* Project-specific Comment Bubble with Cursor */}
                <div className="relative flex-shrink-0">
                  {/* Cursor SVG - pointing from left edge of comment to image */}
                  <div 
                    className="absolute z-10"
                    style={{
                      left: 'clamp(-25px, -4vw, -20px)',
                      top: 'clamp(-15px, -2vw, -10px)',
                      transform: 'rotate(-8deg)',
                    }}
                  >
                    <Image
                      src="/Cursor.svg"
                      alt="Cursor"
                      width={20}
                      height={22}
                      className="object-contain"
                    />
                  </div>

                  {/* Comment Bubble - rectangular left, rounded right */}
                  <div 
                    className="flex items-center justify-center relative"
                    style={{
                      width: 'clamp(60px, 10vw, 100px)',
                      height: 'clamp(28px, 5vw, 40px)',
                      background: '#F072CD',
                      border: '2px solid #DB4A90',
                      boxShadow: '3px 3px 10px rgba(247, 144, 9, 0.16)',
                      borderRadius: '0px 25px 25px 25px',
                    }}
                  >
                    <span 
                      className="text-white font-semibold text-center"
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: 'clamp(12px, 2vw, 18px)',
                      }}
                    >
                      {project.id === 1 ? 'Hash' : 'UI/UX'}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Original container for large screens */}
      <div
        className="hidden xl:block relative mx-auto min-h-[640px] pb-24"
        style={{ width: 'min(1249px, 90vw)' }}
      >
        {/* Featured Projects Title - Original positioning for large screens */}
        <motion.div
          className="absolute"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{
            left: '0px',
            top: '0px',
            width: '256px',
            height: '47px',
          }}
        >
          <span 
            className="inline-block text-[#0C0C0C]"
            style={{
              background: '#FFC9F0',
              fontFamily: 'Handlee, cursive',
              fontSize: '35px',
              lineHeight: '47px',
              fontWeight: 700,
              color: '#0C0C0C',
              padding: '0 8px',
              whiteSpace: 'nowrap',
            }}
          >
            Featured Projects
          </span>
        </motion.div>

        {/* Arrow - Original positioning */}
        <motion.div
          className="absolute"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          style={{
            left: '167.59px',
            top: '71.62px',
            width: '95px',
            height: '55px',
            transform: 'rotate(-139.34deg)',
          }}
        >
          <Image
            src="/arrow.png"
            alt="Arrow pointing to description"
            fill
            className="object-contain"
          />
        </motion.div>

        {/* Have designed text - Original positioning */}
        <motion.div
          className="absolute"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          style={{
            left: '3px',
            top: '181px',
            width: '253px',
            height: '68px',
          }}
        >
          <p 
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '24px',
              lineHeight: '140%',
              color: '#0C0C0C',
              fontWeight: 400,
              margin: 0,
            }}
          >
            Have designed<br />more than 20 projects
          </p>
        </motion.div>

        {/* Project Cards - Original Absolute Positioning for Large Screens */}
        <div className="relative" style={{ minHeight: '550px' }}>
          {projects.map((project, index) => {
            const positions = [
              { left: '293px', top: '48px' },    // Card 1
              { left: '783px', top: '48px' }     // Card 2
            ];

            return (
              <motion.div
                key={project.id}
                className="absolute cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1
                }}
                viewport={{ once: true }}
                onClick={() => {
                  if (project.id === 1) {
                    router.push('/project/hashacademy');
                  } else if (project.id === 2) {
                    router.push('/project/saraetkarim');
                  } else {
                    console.log(`Navigate to project ${project.id}`);
                  }
                }}
                style={{
                  left: positions[index].left,
                  top: positions[index].top,
                  width: '466px',
                  height: '454px',
                  background: '#FFFFFF',
                  border: '3px solid #000000',
                  borderRadius: '6px',
                }}
              >
                {/* Project Image */}
                <div 
                  className="absolute"
                  style={{
                    left: '18px',
                    top: '19px',
                    width: '425px',
                    height: '320px',
                    borderRadius: '4px',
                    overflow: 'hidden',
                  }}
                >
                  {project.id === 1 ? (
                    // First card - Hash Academy image
                    <Image
                      src="/hash-main.png"
                      alt="Hash Academy - Master Cybersecurity with Hash"
                      fill
                      className="object-cover"
                      sizes="425px"
                    />
                  ) : project.id === 2 ? (
                    // Second card - Sara Et Karim image
                    <Image
                      src="/saraetkarim-card.png"
                      alt="Sara Et Karim - Cozy Café Website"
                      fill
                      className="object-cover"
                      sizes="425px"
                    />
                  ) : (
                    // Other cards - placeholder
                    <div 
                      className="w-full h-full"
                      style={{
                        background: 'url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDI1IiBoZWlnaHQ9IjMyMCIgdmlld0JveD0iMCAwIDQyNSAzMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MjUiIGhlaWdodD0iMzIwIiBmaWxsPSIjMUExQTFBIi8+CjxyZWN0IHg9IjE2MCIgeT0iMTIwIiB3aWR0aD0iMTA1IiBoZWlnaHQ9IjgwIiBmaWxsPSIjMzMzIi8+CjxjaXJjbGUgY3g9IjIxMiIgY3k9IjE0MCIgcj0iMTAiIGZpbGw9IiM2NjYiLz4KPHBhdGggZD0ibTE2NSAxNzAgMTUtMTUgMTUgMTUgMzAtMzAiIHN0cm9rZT0iIzY2NiIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsPSJub25lIi8+CjwvZz4KPC9zdmc+)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                    >
                      {/* Placeholder content */}
                      <div className="w-full h-full flex items-center justify-center bg-gray-900 text-white text-sm opacity-60 rounded">
                        <div className="text-center">
                          <div className="mb-2">📊</div>
                          <div>Project Screenshot</div>
                          <div className="text-xs mt-1">Cybersecurity Dashboard</div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Project-specific Text */}
                <div 
                  className="absolute flex items-center justify-start text-[#0C0C0C]"
                  style={{
                    left: '45px',
                    top: '370px',
                    width: '227px',
                    height: '56px',
                    fontFamily: 'Handlee, cursive',
                    fontSize: '28px',
                    lineHeight: '100%',
                    fontWeight: 700,
                    color: '#0C0C0C',
                  }}
                >
                  {project.id === 1 ? (
                    <>
                      Leading Product <br />
                      Strategy
                    </>
                  ) : (
                    <>
                      Sara Et Karim <br />
                      Rebranding
                    </>
                  )}
                </div>

                {/* Project-specific Comment Bubble with Cursor */}
                <div 
                  className="absolute"
                  style={{
                    left: '280px',
                    top: '350px',
                    width: '140px',
                    height: '80px',
                  }}
                >
                  {/* Cursor SVG */}
                  <div 
                    className="absolute z-10"
                    style={{
                      left: '-5px',
                      top: '5px',
                      transform: 'rotate(-8deg)',
                    }}
                  >
                    <Image
                      src="/Cursor.svg"
                      alt="Cursor"
                      width={24}
                      height={26}
                      className="object-contain"
                    />
                  </div>

                  {/* Comment Bubble */}
                  <div 
                    className="absolute"
                    style={{
                      left: '15px',
                      top: '20px',
                      width: '100px',
                      height: '40px',
                      background: '#F072CD',
                      border: '2px solid #DB4A90',
                      boxShadow: '3px 3px 10px rgba(247, 144, 9, 0.16)',
                      borderRadius: '0px 25px 25px 25px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                    }}
                  >
                    <span 
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '18px',
                        fontWeight: 600,
                        color: '#FFFFFF',
                        textAlign: 'center',
                      }}
                    >
                      {project.id === 1 ? 'Hash' : 'UI/UX'}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* See More Section - Original Absolute Positioning for Large Screens */}
        <motion.div 
          className="absolute cursor-pointer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          onClick={() => {
            router.push('/portfolio');
          }}
          style={{
            left: '526px', // Start from center of left card (293px + 466px/2 = 526px)
            top: '540px',  // moved up a bit to reduce required container height
            width: '490px', // Span to center of right card (1016px - 526px = 490px)
            height: '47px',
          }}
        >
          {/* Background line crossing through */}
          <div 
            className="absolute"
            style={{
              left: '0px',
              top: '50%',
              width: '100%',
              height: '3px',
              background: '#000000',
              transform: 'translateY(-50%)',
              zIndex: 1,
            }}
          />
          
          {/* Text with background - centered on the line */}
          <div 
            className="absolute flex items-center justify-center text-[#0C0C0C]"
            style={{
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              background: '#FFC9F0',
              boxShadow: '1px 1px 11.2px rgba(0, 0, 0, 0.08)',
              fontFamily: 'Handlee, cursive',
              fontSize: '35px',
              lineHeight: '47px',
              fontWeight: 700,
              textAlign: 'center',
              color: '#0C0C0C',
              whiteSpace: 'nowrap',
              paddingLeft: '8px',
              paddingRight: '8px',
              zIndex: 2,
            }}
          >
            See more..
          </div>
        </motion.div>
      </div>

      {/* See More Section - Responsive for small/medium screens */}
      <div className="xl:hidden container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div 
          className="relative flex items-center justify-center cursor-pointer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          onClick={() => {
            router.push('/portfolio');
          }}
        >
          {/* Background line crossing through */}
          <div 
            className="absolute inset-0 flex items-center"
            style={{
              zIndex: 1,
            }}
          >
            <div 
              className="w-full bg-black"
              style={{
                height: '3px',
              }}
            />
          </div>
          
          {/* Text with background - centered on the line */}
          <div 
            className="relative flex items-center justify-center text-[#0C0C0C] px-4"
            style={{
              background: '#FFC9F0',
              boxShadow: '1px 1px 11.2px rgba(0, 0, 0, 0.08)',
              fontFamily: 'Handlee, cursive',
              fontSize: 'clamp(20px, 4vw, 35px)',
              lineHeight: '1.35',
              fontWeight: 700,
              textAlign: 'center',
              color: '#0C0C0C',
              whiteSpace: 'nowrap',
              zIndex: 2,
            }}
          >
            See more..
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
