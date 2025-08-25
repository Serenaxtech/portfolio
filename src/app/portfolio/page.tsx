'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import React from 'react';

const PortfolioPage = () => {
  const topRow = [
    { id: 'cyber', title: 'Cybersecurity Website', image: '/hashacademy.co.png' },
    { id: 'organizers', title: 'Hash Organizers', image: '/organizershashacademy.co.png' },
    { id: 'coffee', title: 'Coffee Shop Website (Sara et Karim)', image: '/saraetkarim.png' },
    { id: 'portfolio', title: 'Portfolio Website', image: '/portfolio-project.png' },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Header />

      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Title */}
          <motion.div
            className="relative mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              marginTop: 'clamp(60px, 10vw, 80px)',
              paddingLeft: 'clamp(20px, 5vw, 104px)',
            }}
          >
            <h1
              style={{
                width: 'clamp(400px, 80vw, 735px)',
                height: 'clamp(50px, 10vw, 67px)',
                fontFamily: 'Inter, system-ui, sans-serif',
                fontWeight: 600,
                fontSize: 'clamp(36px, 7.5vw, 55px)',
                lineHeight: 'clamp(50px, 10vw, 67px)',
                color: '#0C0C0C',
                textAlign: 'left',
                margin: 0,
                display: 'flex',
                alignItems: 'center',
              }}
            >
              Other{' '}
              <span
                className="relative inline-block ml-2"
                style={{
                  background:
                    'linear-gradient(transparent 60%, #FFC9F0 60%, #FFC9F0 90%, transparent 90%)',
                }}
              >
                Creative Outlets
              </span>
            </h1>
          </motion.div>

          {/* Section tag */}
          <div className="mb-12" style={{ paddingLeft: 'clamp(20px, 5vw, 104px)' }}>
            <span
              className="inline-block px-3 py-2"
              style={{
                fontFamily: 'Handlee, cursive',
                fontWeight: 700,
                fontSize: 'clamp(24px, 4vw, 32px)',
                lineHeight: 'clamp(32px, 5vw, 40px)',
                color: '#0C0C0C',
                background: '#FFC9F0',
              }}
            >
              Web Design
            </span>
          </div>

          {/* GRID: 4 columns on lg+, 2 on sm, 1 on xs */}
          <div
            className="mb-6"
            style={{
              paddingLeft: 'clamp(20px, 5vw, 104px)',
              paddingRight: 'clamp(20px, 5vw, 104px)',
            }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Row 1: four tiles */}
              {topRow.map((item) => (
                <div key={item.id} className="w-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                  />
                </div>
              ))}

              {/* Row 2: e-commerce spans columns 1–3 on lg */}
              <div className="col-span-1 sm:col-span-2 lg:col-span-3">
                <Image
                  src="/ecommerce-project.png"
                  alt="E-commerce Project"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>

              {/* Row 2: furniture starts directly under Portfolio (column 4 on lg) */}
              <div className="col-span-1 sm:col-span-2 lg:col-span-1 lg:col-start-4 lg:row-start-2">
                <Image
                  src="/furniture-superfast-shop-project.png"
                  alt="Furniture Superfast Shop"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
            </div>
          </div>

          {/* ======================= */}
          {/* Graphic & digital design */}
          {/* ======================= */}
          <div className="mt-16 mb-12" style={{ paddingLeft: 'clamp(20px, 5vw, 104px)' }}>
            <span
              className="inline-block px-3 py-2"
              style={{
                fontFamily: 'Handlee, cursive',
                fontWeight: 700,
                fontSize: 'clamp(24px, 4vw, 32px)',
                lineHeight: 'clamp(32px, 5vw, 40px)',
                color: '#0C0C0C',
                background: '#FFC9F0',
              }}
            >
              Graphic and digital design.
            </span>
          </div>

          {/* Graphic Design Section - Responsive */}
          <div
            className="mb-6"
            style={{
              paddingLeft: 'clamp(20px, 5vw, 104px)',
              paddingRight: 'clamp(20px, 5vw, 104px)',
            }}
          >
            {/* Desktop Layout (lg and up) */}
            <div className="hidden lg:grid gap-6 lg:grid-cols-[auto_auto] items-start"
              style={
                {
                  ['--s' as string]: '271px',
                  ['--g' as string]: '1.5rem',
                } as React.CSSProperties
              }
            >
              {/* Devathon (natural) */}
              <div>
                <Image
                  src="/devathon-design.png"
                  alt="Devathon Poster"
                  width={0}
                  height={0}
                  sizes="(min-width:1024px) 300px, 90vw"
                  style={{ width: 'auto', height: 'auto', maxWidth: '100%', display: 'block' }}
                />
              </div>

              {/* Right group */}
              <div style={{ width: 'calc(var(--s) * 2.5 + var(--g))' }}>
                <div
                  className="grid"
                  style={{
                    gridTemplateColumns: 'calc(var(--s) * 1.5) var(--s)',
                    gridTemplateRows: 'repeat(4, var(--s))',
                    columnGap: 'var(--g)',
                    rowGap: 'var(--g)',
                  }}
                >
                  {/* Poster (spans rows 1–2) */}
                  <div
                    className="relative bg-white"
                    style={{
                      gridColumn: 1,
                      gridRow: '1 / span 2',
                      width: 'calc(var(--s) * 1.5)',
                      height: 'calc(var(--s) * 2 + var(--g))',
                    }}
                  >
                    <Image
                      src="/poster-design.png"
                      alt="Graphic Design Course Poster"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>

                  {/* LCC */}
                  <div className="relative overflow-hidden" style={{ gridColumn: 2, gridRow: 1, width: 'var(--s)', height: 'var(--s)' }}>
                    <Image src="/lcc-logo-design.png" alt="LCC Logo" fill style={{ objectFit: 'cover' }} />
                  </div>

                  {/* Qibla */}
                  <div className="relative overflow-hidden" style={{ gridColumn: 2, gridRow: 2, width: 'var(--s)', height: 'var(--s)' }}>
                    <Image src="/logo-1-design.png" alt="Muslims Qibla" fill style={{ objectFit: 'cover' }} />
                  </div>

                  {/* Post - centered under the poster */}
                  <div className="relative overflow-hidden flex items-center justify-center" style={{ 
                    gridColumn: 1, 
                    gridRow: 3, 
                    width: 'var(--s)', 
                    height: 'var(--s)',
                    transform: 'translateX(calc(var(--s) * 0.25))'
                  }}>
                    <Image src="/post-design.png" alt="Explain to a kid API" fill style={{ objectFit: 'cover' }} />
                  </div>

                  {/* Hash (#) */}
                  <div className="relative overflow-hidden flex items-center justify-center" style={{ gridColumn: 2, gridRow: 3, width: 'var(--s)', height: 'var(--s)' }}>
                    <Image src="/hash-logo-design.png" alt="Hash Logo (#)" fill style={{ objectFit: 'cover' }} />
                  </div>

                  {/* Hash Organizer - centered under the poster */}
                  <div className="relative overflow-hidden flex items-center justify-center" style={{ 
                    gridColumn: 1, 
                    gridRow: 4, 
                    width: 'var(--s)', 
                    height: 'var(--s)',
                    transform: 'translateX(calc(var(--s) * 0.25))'
                  }}>
                    <Image src="/hashorganizers-logo-design.png" alt="Hash Organizer" fill style={{ objectFit: 'cover' }} />
                  </div>

                  {/* Hashers */}
                  <div className="relative overflow-hidden flex items-center justify-center" style={{ gridColumn: 2, gridRow: 4, width: 'var(--s)', height: 'var(--s)' }}>
                    <Image src="/hashers-logo.png" alt="Hashers" fill style={{ objectFit: 'cover' }} />
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Layout (below lg) */}
            <div className="lg:hidden space-y-6">
              {/* Devathon */}
              <div className="w-full">
                <Image
                  src="/devathon-design.png"
                  alt="Devathon Poster"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>

              {/* Poster */}
              <div className="w-full">
                <Image
                  src="/poster-design.png"
                  alt="Graphic Design Course Poster"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>

              {/* Grid of smaller items */}
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square relative overflow-hidden">
                  <Image src="/lcc-logo-design.png" alt="LCC Logo" fill style={{ objectFit: 'cover' }} />
                </div>
                <div className="aspect-square relative overflow-hidden">
                  <Image src="/logo-1-design.png" alt="Muslims Qibla" fill style={{ objectFit: 'cover' }} />
                </div>
                <div className="aspect-square relative overflow-hidden">
                  <Image src="/post-design.png" alt="Explain to a kid API" fill style={{ objectFit: 'cover' }} />
                </div>
                <div className="aspect-square relative overflow-hidden">
                  <Image src="/hash-logo-design.png" alt="Hash Logo (#)" fill style={{ objectFit: 'cover' }} />
                </div>
                <div className="aspect-square relative overflow-hidden">
                  <Image src="/hashorganizers-logo-design.png" alt="Hash Organizer" fill style={{ objectFit: 'cover' }} />
                </div>
                <div className="aspect-square relative overflow-hidden">
                  <Image src="/hashers-logo.png" alt="Hashers" fill style={{ objectFit: 'cover' }} />
                </div>
              </div>
            </div>
          </div>
          {/* ===== end Graphic & digital design ===== */}
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default PortfolioPage;
