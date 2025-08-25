'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState<'success' | 'error'>('success');

  const showToastMessage = (message: string, type: 'success' | 'error') => {
    setToastMessage(message);
    setToastType(type);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 4000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      showToastMessage('Please fill in all fields', 'error');
      return;
    }
    setSubmitStatus('loading');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
        }),
      });
      const result = await response.json();
      if (response.ok) {
        showToastMessage('Message sent successfully', 'success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        console.error('Server error:', result.error);
        showToastMessage('Failed to send message. Please try again later', 'error');
      }
    } catch (error) {
      console.error('Network error:', error);
      showToastMessage('Something went wrong. Please try again', 'error');
    } finally {
      setSubmitStatus('idle');
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="relative w-full bg-white py-2 lg:py-4" style={{ overflow: 'visible' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start min-h-[500px] lg:min-h-[400px]">
          
          {/* Left Contact Section */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="mb-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span 
                className="inline-block text-[#0C0C0C]"
                style={{
                  background: '#FFC9F0',
                  fontFamily: 'Handlee, cursive',
                  fontSize: 'clamp(24px, 3vw, 32px)',
                  fontWeight: 700,
                  color: '#0C0C0C',
                }}
              >
                Contact here
              </span>
            </motion.div>

            {/* Arrow */}
            <motion.div
              className="absolute top-16 left-44"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              style={{
                width: 'clamp(50px, 6vw, 65px)',
                height: 'clamp(40px, 5vw, 50px)',
                transform: 'rotate(-25deg)',
              }}
            >
              <Image
                src="/arrow.png"
                alt="Arrow pointing from contact here to project text"
                fill
                className="object-contain"
              />
            </motion.div>

            {/* Project Text */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <p 
                style={{
                  maxWidth: '253px',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: 'clamp(18px, 2.5vw, 24px)',
                  lineHeight: '140%',
                  color: '#0C0C0C',
                  fontWeight: 400,
                }}
              >
                Have a project idea? just say me Hi.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Form Section */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-8 lg:space-y-12">
              
              {/* Name Field */}
              <div className="relative">
                <div className="flex items-center gap-4">
                  <div 
                    className="flex items-center justify-center text-[#0C0C0C] flex-shrink-0"
                    style={{
                      width: 'clamp(80px, 10vw, 83px)',
                      height: '43px',
                      background: '#FFC9F0',
                      boxShadow: '1px 1px 11.2px rgba(0, 0, 0, 0.08)',
                      fontFamily: 'Handlee, cursive',
                      fontSize: 'clamp(18px, 3vw, 32px)',
                      lineHeight: '43px',
                      fontWeight: 700,
                      textAlign: 'center',
                      borderLeft: '3px solid #0C0C0C',
                    }}
                  >
                    Name
                  </div>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="Serena"
                    className="flex-1 bg-transparent border-none outline-none"
                    style={{
                      fontFamily: 'Handlee, cursive',
                      fontSize: 'clamp(18px, 2.5vw, 28px)',
                      lineHeight: '140%',
                      color: '#0C0C0C',
                      fontWeight: 400,
                    }}
                  />
                </div>
                <div 
                  className="mt-2"
                  style={{
                    width: '100%',
                    height: '2px',
                    background: '#000000',
                    transform: 'rotate(0.22deg)',
                  }}
                />
              </div>

              {/* Email Field */}
              <div className="relative">
                <div className="flex items-center gap-4">
                  <div 
                    className="flex items-center justify-center text-[#0C0C0C] flex-shrink-0"
                    style={{
                      width: 'clamp(100px, 15vw, 140px)',
                      height: '43px',
                      background: '#FFE68C',
                      boxShadow: '1px 1px 11.2px rgba(0, 0, 0, 0.08)',
                      fontFamily: 'Handlee, cursive',
                      fontSize: 'clamp(16px, 2.5vw, 32px)',
                      lineHeight: '43px',
                      fontWeight: 700,
                      textAlign: 'center',
                      borderLeft: '3px solid #0C0C0C',
                    }}
                  >
                    Your email
                  </div>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="Serenaxtech@gmail.com"
                    className="flex-1 bg-transparent border-none outline-none"
                    style={{
                      fontFamily: 'Handlee, cursive',
                      fontSize: 'clamp(18px, 2.5vw, 28px)',
                      lineHeight: '140%',
                      color: '#0C0C0C',
                      fontWeight: 400,
                    }}
                  />
                </div>
                <div 
                  className="mt-2"
                  style={{
                    width: '100%',
                    height: '2px',
                    background: '#000000',
                    transform: 'rotate(0.56deg)',
                  }}
                />
              </div>

              {/* Project Field */}
              <div className="relative">
                <div className="flex items-center gap-4">
                  <div 
                    className="flex items-center justify-center text-[#0C0C0C] flex-shrink-0"
                    style={{
                      width: 'clamp(120px, 18vw, 190px)',
                      height: '43px',
                      background: '#9DDCFF',
                      boxShadow: '1px 1px 11.2px rgba(0, 0, 0, 0.08)',
                      fontFamily: 'Handlee, cursive',
                      fontSize: 'clamp(14px, 2.2vw, 32px)',
                      lineHeight: '43px',
                      fontWeight: 700,
                      textAlign: 'center',
                      borderLeft: '3px solid #0C0C0C',
                    }}
                  >
                    About Project
                  </div>
                  <textarea
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="I want to discuss you about ......."
                    rows={1}
                    className="flex-1 bg-transparent border-none outline-none resize-none"
                    style={{
                      fontFamily: 'Handlee, cursive',
                      fontSize: 'clamp(18px, 2.5vw, 28px)',
                      lineHeight: '140%',
                      color: '#0C0C0C',
                      fontWeight: 400,
                    }}
                  />
                </div>
                <div 
                  className="mt-1"
                  style={{
                    width: '100%',
                    height: '2px',
                    background: '#000000',
                  }}
                />
              </div>

              {/* Send Button */}
              <div className="flex justify-end pt-4">
                <motion.button
                  type="submit"
                  disabled={submitStatus === 'loading'}
                  className="flex items-center justify-center"
                  whileHover={submitStatus === 'loading' ? {} : { scale: 1.05 }}
                  whileTap={submitStatus === 'loading' ? {} : { scale: 0.95 }}
                  style={{
                    width: 'clamp(160px, 20vw, 203px)',
                    height: 'clamp(50px, 8vw, 70px)',
                    background: '#0C0C0C',
                    boxShadow: '3px 3px 12px rgba(0, 0, 0, 0.12)',
                    transform: 'rotate(1.29deg)',
                    cursor: submitStatus === 'loading' ? 'not-allowed' : 'pointer',
                    opacity: submitStatus === 'loading' ? 0.7 : 1,
                  }}
                >
                  <span 
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: 'clamp(18px, 2.5vw, 24px)',
                      lineHeight: '140%',
                      color: '#FFFFFF',
                      fontWeight: 600,
                      transform: 'rotate(-1.29deg)',
                    }}
                  >
                    Send Here
                  </span>
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            className="fixed top-8 right-8 z-50 max-w-sm"
            initial={{ opacity: 0, x: 100, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 100, scale: 0.8 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            style={{
              background: toastType === 'success' ? '#9DDCFF' : '#FFC9F0',
              border: '2px solid #0C0C0C',
              borderRadius: '8px',
              padding: '16px 40px 16px 20px',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
            }}
          >
            <p
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '16px',
                fontWeight: 500,
                color: '#0C0C0C',
                margin: 0,
                lineHeight: '1.4',
                paddingRight: '8px',
              }}
            >
              {toastMessage}
            </p>
            
            {/* Close button */}
            <button
              onClick={() => setShowToast(false)}
              style={{
                position: 'absolute',
                top: '50%',
                right: '12px',
                transform: 'translateY(-50%)',
                background: 'none',
                border: 'none',
                fontSize: '20px',
                fontWeight: 'bold',
                color: '#0C0C0C',
                cursor: 'pointer',
                padding: '4px',
                width: '24px',
                height: '24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%',
                transition: 'background-color 0.2s ease',
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLButtonElement).style.backgroundColor = 'rgba(12, 12, 12, 0.1)';
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLButtonElement).style.backgroundColor = 'transparent';
              }}
            >
              ×
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;
