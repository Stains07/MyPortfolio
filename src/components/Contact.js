// components/Contact.js
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiLinkedin, 
  FiPhone, 
  FiTwitter, 
  FiMail, 
  FiGithub,
  FiFacebook,
  FiInstagram,
  FiFileText,
  FiMapPin
} from 'react-icons/fi';
import { BsSkype } from 'react-icons/bs';

const Contact = ({ profileData }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(null);

  // All social media handles with enhanced data
  const socialHandles = [
    { 
      icon: <FiLinkedin />, 
      label: 'LinkedIn', 
      value: 'stains-das', 
      link: profileData?.personal?.linkedin || 'https://linkedin.com/in/stains-das-74b641263',
      color: '#0077b5',
      description: 'Professional network and career updates'
    },
    { 
      icon: <FiPhone />, 
      label: 'WhatsApp', 
      value: '+91 9074472372', 
      link: profileData?.personal?.whatsapp || 'https://wa.me/919074472372',
      color: '#25d366',
      description: 'Quick chat and instant messaging'
    },
    { 
      icon: <FiTwitter />, 
      label: 'X (Twitter)', 
      value: '@stainsdas', 
      link: profileData?.personal?.x || 'https://x.com/stainsdas',
      color: '#000000',
      description: 'Tech thoughts and quick updates'
    },
    { 
      icon: <FiMail />, 
      label: 'Email', 
      value: 'stainsdas007@gmail.com', 
      link: `mailto:${profileData?.personal?.email || 'stainsdas007@gmail.com'}`,
      color: '#ea4335',
      description: 'Professional inquiries and collaborations'
    },
    { 
      icon: <FiGithub />, 
      label: 'GitHub', 
      value: 'stainsdas', 
      link: profileData?.personal?.github || 'https://github.com/stainsdas',
      color: '#6e5494',
      description: 'Open-source projects and code repositories'
    },
    { 
      icon: <FiFacebook />, 
      label: 'Facebook', 
      value: 'Stains Das', 
      link: profileData?.personal?.facebook || 'https://www.facebook.com/share/1YAGuNAJqb/',
      color: '#1877f2',
      description: 'Social connections and updates'
    },
    { 
      icon: <FiInstagram />, 
      label: 'Instagram', 
      value: '@stains07', 
      link: profileData?.personal?.instagram || 'https://www.instagram.com/stains07?igsh=NWZkZmVlMDJpNWZn',
      color: '#e4405f',
      description: 'Behind the scenes and personal moments'
    },
    { 
      icon: <FiFileText />, 
      label: 'Resume', 
      value: 'Download CV', 
      link: profileData?.personal?.resume || 'https://example.com/stainsdas-resume.pdf',
      color: '#ff6b35',
      description: 'Professional experience and skills'
    },
    { 
      icon: <BsSkype />, 
      label: 'Skype', 
      value: 'Stains07', 
      link: 'skype:Stains07?chat',
      color: '#00aff0',
      description: 'Voice and video calls'
    },
    { 
      icon: <FiMapPin />, 
      label: 'Location', 
      value: 'Kerala, India', 
      link: '#',
      color: '#8b5cf6',
      description: 'Based in God\'s Own Country'
    }
  ];

  // Split into two slides for better organization
  const slide1 = socialHandles.slice(0, 5);
  const slide2 = socialHandles.slice(5);
  const slides = [slide1, slide2];

  // Auto-rotate slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardHoverVariants = {
    initial: { scale: 1, y: 0 },
    hover: { 
      scale: 1.05, 
      y: -8,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <div style={{
      padding: '2rem 1rem',
      maxWidth: '1200px',
      margin: '0 auto',
      minHeight: '80vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }}>
      {/* Animated Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ textAlign: 'center', marginBottom: '3rem' }}
      >
        <h2 style={{
          fontSize: 'clamp(2rem, 5vw, 3.5rem)',
          fontWeight: 800,
          marginBottom: '1rem',
          background: 'linear-gradient(45deg, #e0e7ff 20%, #818cf8 40%, #6366f1 60%, #8b5cf6 80%, #ec4899 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundSize: '200% 200%',
          animation: 'gradientShift 3s ease infinite'
        }}>
          Let's Connect & Collaborate
        </h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          style={{
            color: '#94a3b8',
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: 1.6
          }}
        >
          Reach out for collaborations, discussions about AI/ML, or just to say hello! 
          I'm always excited to connect with fellow tech enthusiasts.
        </motion.p>
      </motion.div>

      {/* Slideshow Container */}
      <div style={{ 
        position: 'relative', 
        overflow: 'hidden',
        marginBottom: '2rem'
      }}>
        {/* Navigation Arrows */}
        <button
          onClick={() => setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length)}
          style={{
            position: 'absolute',
            left: '10px',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'rgba(15,23,42,0.9)',
            border: '1px solid #6366f1',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#e0e7ff',
            cursor: 'pointer',
            zIndex: 10,
            fontSize: '1.2rem'
          }}
        >
          ‹
        </button>
        
        <button
          onClick={() => setCurrentSlide(prev => (prev + 1) % slides.length)}
          style={{
            position: 'absolute',
            right: '10px',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'rgba(15,23,42,0.9)',
            border: '1px solid #6366f1',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#e0e7ff',
            cursor: 'pointer',
            zIndex: 10,
            fontSize: '1.2rem'
          }}
        >
          ›
        </button>

<AnimatePresence mode='wait'>
  <motion.div
    key={currentSlide}
    initial={{ opacity: 0, x: 100 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -100 }}
    transition={{ duration: 0.7, ease: "easeInOut" }}
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '1.5rem',
      padding: '2rem'
    }}
  >
    {slides[currentSlide].map((social, index) => (
      <motion.a
        key={social.label}
        href={social.link}
        target="_blank"
        rel="noopener noreferrer"
        variants={itemVariants}
        custom={index}
        initial="hidden"
        animate="visible"
        onMouseEnter={() => setIsHovered(social.label)}
        onMouseLeave={() => setIsHovered(null)}
        style={{
          background: `linear-gradient(135deg, rgba(15,23,42,0.8), ${social.color}20)`,
          borderRadius: '20px',
          padding: '2rem 1.5rem',
          border: `2px solid ${social.color}40`,
          textDecoration: 'none',
          color: '#e2e8f0',
          position: 'relative',
          overflow: 'hidden',
          backdropFilter: 'blur(10px)',
          minHeight: '180px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          transition: 'all 0.3s ease'
        }}
        whileHover={{ 
          scale: 1.05, 
          y: -8,
          transition: {
            duration: 0.3,
            ease: "easeOut"
          }
        }}
      >
        {/* Animated Background Glow */}
        <motion.div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `radial-gradient(circle at center, ${social.color}15, transparent 70%)`,
            opacity: 0
          }}
          animate={{
            opacity: isHovered === social.label ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Icon with Pulse Animation */}
        <motion.div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            marginBottom: '1rem',
            position: 'relative',
            zIndex: 2
          }}
        >
          <motion.span
            style={{ 
              fontSize: '2.5rem',
              color: social.color,
              background: 'rgba(15,23,42,0.6)',
              borderRadius: '12px',
              padding: '0.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {social.icon}
          </motion.span>
          <div>
            <h3 style={{ 
              fontSize: '1.3rem', 
              fontWeight: 700, 
              margin: 0,
              background: `linear-gradient(45deg, ${social.color}, #e0e7ff)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              {social.label}
            </h3>
          </div>
        </motion.div>

        {/* Value with Typewriter Effect */}
        <motion.p
          style={{ 
            fontSize: '1.1rem', 
            fontWeight: 600, 
            margin: '0.5rem 0',
            color: '#e0e7ff',
            position: 'relative',
            zIndex: 2
          }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 + 0.5 }}
        >
          {social.value}
        </motion.p>

        {/* Description */}
        <motion.p
          style={{ 
            fontSize: '0.9rem', 
            color: '#94a3b8',
            margin: 0,
            lineHeight: 1.4,
            position: 'relative',
            zIndex: 2
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.1 + 0.7 }}
        >
          {social.description}
        </motion.p>

        {/* Hover Border Effect */}
        <motion.div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            border: `2px solid ${social.color}`,
            borderRadius: '20px',
            opacity: 0
          }}
          animate={{
            opacity: isHovered === social.label ? 0.3 : 0
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.a>
    ))}
  </motion.div>
</AnimatePresence>
        {/* Slide Indicators */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '0.8rem',
          marginTop: '2rem'
        }}>
          {slides.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentSlide(index)}
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                border: 'none',
                background: currentSlide === index ? '#6366f1' : '#475569',
                cursor: 'pointer',
                position: 'relative'
              }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              {currentSlide === index && (
                <motion.div
                  style={{
                    position: 'absolute',
                    top: '-3px',
                    left: '-3px',
                    right: '-3px',
                    bottom: '-3px',
                    border: '2px solid #6366f1',
                    borderRadius: '50%'
                  }}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        style={{
          textAlign: 'center',
          marginTop: '2rem',
          padding: '2rem',
          background: 'linear-gradient(135deg, rgba(99,102,241,0.1), rgba(139,92,246,0.1))',
          borderRadius: '20px',
          border: '1px solid rgba(99,102,241,0.2)'
        }}
      >
        <motion.p
          style={{
            fontSize: '1.2rem',
            color: '#e0e7ff',
            marginBottom: '1rem',
            fontWeight: 600
          }}
        >
          Ready to start a conversation?
        </motion.p>
        <motion.p
          style={{
            color: '#94a3b8',
            fontSize: '1rem',
            margin: 0
          }}
        >
          Don't hesitate to reach out through any of the platforms above. I typically respond within 24 hours!
        </motion.p>
      </motion.div>

      {/* Global Styles */}
      <style jsx>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @media (max-width: 768px) {
          div > div > div {
            grid-template-columns: 1fr !important;
            padding: 1rem !important;
          }
          
          button[style*="position: absolute"] {
            width: 35px !important;
            height: 35px !important;
            font-size: 1rem !important;
          }
        }
        
        @media (max-width: 480px) {
          div[style*="padding: 2rem 1rem"] {
            padding: 1rem 0.5rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Contact;