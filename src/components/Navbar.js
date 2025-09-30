import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiLinkedin, 
  FiMail, 
  FiPhone, 
  FiGithub,
  FiFacebook,
  FiInstagram,
  FiFileText,
  FiX,
  FiMenu
} from 'react-icons/fi';
import { FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

const Navbar = ({ activeSection, setActiveSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = ['About', 'Technologies', 'Skills', 'Projects', 'Contact'];

  const profileData = {
    name: "STAINS DAS",
    location: "Kerala, India",
    phone: "+91 9074472372",
    whatsapp: "https://wa.me/919074472372",
    email: "stainsdas007@gmail.com",
    linkedin: "https://linkedin.com/in/stains-das-74b641263",
    facebook: "https://www.facebook.com/share/1YAGuNAJqb/",
    instagram: "https://www.instagram.com/stains07?igsh=NWZkZmVlMDJpNWZn",
    x: "https://x.com/stainsdas",
    github: "https://github.com/stainsdas",
    resume: "https://example.com/stainsdas-resume.pdf",
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!activeSection) {
      setActiveSection('about');
    }
  }, [activeSection, setActiveSection]);

  const socialIcons = [
    { 
      icon: <FiLinkedin />, 
      link: profileData.linkedin,
      color: '#0077b5',
      glow: '0 0 12px rgba(0, 119, 181, 0.7)',
      label: 'LinkedIn'
    },
    { 
      icon: <FaFacebookF />, 
      link: profileData.facebook,
      color: '#1877f2',
      glow: '0 0 12px rgba(24, 119, 242, 0.7)',
      label: 'Facebook'
    },
    { 
      icon: <FaInstagram />, 
      link: profileData.instagram,
      color: '#e4405f',
      glow: '0 0 12px rgba(228, 64, 95, 0.7)',
      label: 'Instagram'
    },
    { 
      icon: <FaXTwitter />, 
      link: profileData.x,
      color: '#000000',
      glow: '0 0 12px rgba(0, 0, 0, 0.7)',
      label: 'X'
    },
    { 
      icon: <FiGithub />, 
      link: profileData.github,
      color: '#6e5494',
      glow: '0 0 12px rgba(110, 84, 148, 0.7)',
      label: 'GitHub'
    },
    { 
      icon: <FiMail />, 
      link: `mailto:${profileData.email}`,
      color: '#ea4335',
      glow: '0 0 12px rgba(234, 67, 53, 0.7)',
      label: 'Email'
    },
    { 
      icon: <FiPhone />, 
      link: profileData.whatsapp,
      color: '#25d366',
      glow: '0 0 12px rgba(37, 211, 102, 0.7)',
      label: 'WhatsApp'
    },
    { 
      icon: <FiFileText />, 
      link: profileData.resume,
      color: '#ff6b35',
      glow: '0 0 12px rgba(255, 107, 53, 0.7)',
      label: 'Resume'
    }
  ];

  const handleNavClick = (section) => {
    setActiveSection(section.toLowerCase());
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Social Media Bar */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -50, opacity: 0 }}
        transition={{ duration: 0.3 }}
        style={{
          background: 'linear-gradient(90deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
          padding: '0.48rem 0',
          position: 'fixed',
          top: 0,
          width: '100%',
          zIndex: 1002
        }}
      >
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 0.8rem',
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '0.64rem',
          '@media (max-width: 768px)': {
            justifyContent: 'center'
          }
        }}>
          {socialIcons.map((social, index) => (
            <motion.a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ 
                scale: 1.2, 
                boxShadow: social.glow,
                y: -2
              }}
              whileTap={{ scale: 0.9 }}
              style={{
                color: social.color,
                background: 'rgba(255,255,255,0.1)',
                borderRadius: '50%',
                padding: '0.3rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
                textDecoration: 'none',
                fontSize: '0.7rem',
                border: `1px solid ${social.color}20`,
                position: 'relative'
              }}
              title={social.label}
            >
              {social.icon}
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileHover={{ opacity: 1, y: 0 }}
                style={{
                  position: 'absolute',
                  bottom: '-1.6rem',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: 'rgba(0,0,0,0.8)',
                  color: 'white',
                  padding: '0.24rem 0.48rem',
                  borderRadius: '4px',
                  fontSize: '0.56rem',
                  whiteSpace: 'nowrap',
                  pointerEvents: 'none'
                }}
              >
                {social.label}
              </motion.span>
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Main Navigation Bar */}
      <motion.nav
        style={{
          position: 'fixed',
          top: '2.5rem',
          width: '100%',
          backdropFilter: 'blur(20px)',
          background: isScrolled 
            ? 'rgba(15, 23, 42, 0.95)' 
            : 'rgba(15, 23, 42, 0.8)',
          zIndex: 1001,
          borderBottom: '1px solid rgba(255,255,255,0.1)',
          padding: '0.88rem 0',
          transition: 'all 0.3s ease'
        }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1.1rem'
        }}>
          {/* Logo/Name Section */}
          <motion.div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.1rem'
            }}
            whileHover={{ scale: 1.05 }}
          >
            {/* Profile Image */}
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              style={{
                width: '49.5px',
                height: '49.5px',
                borderRadius: '50%',
                background: 'linear-gradient(45deg, #8b5cf6, #3b82f6)',
                padding: '2px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <div style={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                background: '#0f172a',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 'bold',
                fontSize: '0.88rem',
                backgroundImage: 'url("/api/placeholder/40/40")',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}>
                SD
              </div>
            </motion.div>
          </motion.div>

          {/* Desktop Navigation - Hidden on mobile */}
          <div style={{ 
            display: 'flex',
            gap: '1.65rem',
            alignItems: 'center',
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            '@media (max-width: 768px)': {
              display: 'none'
            }
          }}>
            {navItems.map((label) => (
              <motion.button
                key={label}
                style={{
                  color: activeSection === label.toLowerCase() ? 'white' : '#94a3b8',
                  fontWeight: 500,
                  padding: '0.66rem 1.32rem',
                  background: activeSection === label.toLowerCase() 
                    ? 'linear-gradient(45deg, rgba(99, 102, 241, 0.15), rgba(168, 85, 247, 0.15))' 
                    : 'transparent',
                  border: activeSection === label.toLowerCase() 
                    ? '1px solid rgba(99, 102, 241, 0.3)'
                    : '1px solid transparent',
                  cursor: 'pointer',
                  fontSize: '0.836rem',
                  borderRadius: '13.2px',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease'
                }}
                whileHover={{ 
                  scale: 1.08,
                  color: 'white',
                  background: 'rgba(99, 102, 241, 0.1)',
                  boxShadow: '0 0 22px rgba(99, 102, 241, 0.2)',
                  border: '1px solid rgba(99, 102, 241, 0.2)'
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleNavClick(label)}
              >
                {activeSection === label.toLowerCase() && (
                  <motion.div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(45deg, rgba(99, 102, 241, 0.2), rgba(168, 85, 247, 0.2))',
                      borderRadius: '13.2px',
                      zIndex: -1
                    }}
                    layoutId="activeSection"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                {label}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            style={{
              display: 'none',
              background: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: '11px',
              padding: '0.66rem',
              color: 'white',
              cursor: 'pointer',
              fontSize: '1.32rem',
              '@media (max-width: 768px)': {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }
            }}
            whileHover={{ 
              scale: 1.1,
              background: 'rgba(99, 102, 241, 0.2)',
              boxShadow: '0 0 16.5px rgba(99, 102, 241, 0.4)'
            }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FiX /> : <FiMenu />}
          </motion.button>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                background: 'rgba(15, 23, 42, 0.98)',
                backdropFilter: 'blur(20px)',
                borderTop: '1px solid rgba(255,255,255,0.1)',
                padding: '1.65rem',
                position: 'absolute',
                top: '100%',
                left: 0,
                right: 0,
                zIndex: 1000,
                boxShadow: '0 11px 33px rgba(0,0,0,0.3)'
              }}
            >
              {/* Navigation Items */}
              <div style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '0.88rem', 
                marginBottom: '1.65rem' 
              }}>
                {navItems.map((label) => (
                  <motion.button
                    key={label}
                    style={{
                      color: activeSection === label.toLowerCase() ? 'white' : '#94a3b8',
                      fontWeight: 500,
                      padding: '1.1rem 1.32rem',
                      background: activeSection === label.toLowerCase() 
                        ? 'linear-gradient(45deg, rgba(99, 102, 241, 0.15), rgba(168, 85, 247, 0.15))' 
                        : 'rgba(255,255,255,0.05)',
                      border: activeSection === label.toLowerCase() 
                        ? '1px solid rgba(99, 102, 241, 0.3)'
                        : '1px solid rgba(255,255,255,0.1)',
                      cursor: 'pointer',
                      fontSize: '0.88rem',
                      borderRadius: '13.2px',
                      textAlign: 'left',
                      transition: 'all 0.3s ease'
                    }}
                    whileHover={{ 
                      scale: 1.02,
                      color: 'white',
                      background: 'rgba(99, 102, 241, 0.1)',
                      boxShadow: '0 0 16.5px rgba(99, 102, 241, 0.3)'
                    }}
                    onClick={() => handleNavClick(label)}
                  >
                    {label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Spacer for fixed navbar */}
      <div style={{ 
        height: '7.5rem',
        transition: 'height 0.3s ease',
        '@media (max-width: 768px)': {
          height: '6.5rem'
        }
      }} />
    </>
  );
};

export default Navbar;