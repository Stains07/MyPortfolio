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
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

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

  // Fixed: Run only once on mount to set default to 'about'
  useEffect(() => {
    if (!activeSection) {
      setActiveSection('about');
    }
  }, []); // Empty dependency array ensures it runs once

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
        className="fixed-top"
        style={{
          background: 'linear-gradient(90deg, #3c4149ff 0%, #323233ff 50%, #26406cff 100%)',
          borderBottom: '1px solid rgba(255,255,255,0.2)',
          padding: '0.48rem 0',
          zIndex: 1002
        }}
      >
        <div className="container d-flex justify-content-end align-items-center flex-wrap gap-2">
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
                background: 'rgba(255,255,255,0.15)',
                borderRadius: '50%',
                padding: '0.3rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
                textDecoration: 'none',
                fontSize: '0.7rem',
                border: `1px solid ${social.color}30`,
                position: 'relative',
                boxShadow: `0 0 8px ${social.color}50` // Always glow
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
        className="navbar navbar-expand-md fixed-top mt-5"
        style={{
          top: '-.6rem',
          backdropFilter: 'blur(20px)',
          background: isScrolled 
            ? 'rgba(20, 21, 23, 0.95)' // Lighter blue gradient base
            : 'linear-gradient(90deg, #343840ff 0%, #2c2c2eff 50%, #213557ff 100%)',
          zIndex: 1001,
          borderBottom: '1px solid rgba(21, 20, 20, 0.2)',
          transition: 'all 0.3s ease'
        }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container">
          {/* Logo/Name Section */}
          <motion.div
            className="navbar-brand"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              style={{
                width: '49.5px',
                height: '49.5px',
                borderRadius: '50%',
                background: 'linear-gradient(45deg, #2f3144ff, #3760e8ff)',
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
                background: '#eff6ff', // Lighter background
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#1e40af',
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

          {/* Mobile Toggle Button */}
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{
              background: 'rgba(255,255,255,0.15)',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: '11px',
              padding: '0.66rem',
              color: 'white',
              fontSize: '1.32rem'
            }}
          >
            {isMobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>

          {/* Navigation Items */}
          <AnimatePresence>
            <div className={`collapse navbar-collapse ${isMobileMenuOpen ? 'show' : ''}`} id="navbarNav">
              <ul className="navbar-nav mx-auto">
                {navItems.map((label) => (
                  <li key={label} className="nav-item">
                    <motion.button
                      className="nav-link btn"
                      style={{
                        color: activeSection === label.toLowerCase() ? 'white' : '#dbeafe',
                        fontWeight: 500,
                        padding: '0.66rem 1.32rem',
                        background: activeSection === label.toLowerCase() 
                          ? 'linear-gradient(45deg, rgba(59, 130, 246, 0.25), rgba(99, 102, 241, 0.25))' 
                          : 'transparent',
                        border: activeSection === label.toLowerCase() 
                          ? '1px solid rgba(59, 130, 246, 0.4)'
                          : '1px solid transparent',
                        fontSize: '0.836rem',
                        borderRadius: '13.2px',
                        position: 'relative',
                        overflow: 'hidden',
                        transition: 'all 0.3s ease'
                      }}
                      whileHover={{ 
                        scale: 1.08,
                        color: 'white',
                        background: 'rgba(59, 130, 246, 0.2)',
                        boxShadow: '0 0 22px rgba(59, 130, 246, 0.3)',
                        border: '1px solid rgba(59, 130, 246, 0.3)'
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
                            background: 'linear-gradient(45deg, rgba(59, 130, 246, 0.3), rgba(99, 102, 241, 0.3))',
                            borderRadius: '13.2px',
                            zIndex: -1
                          }}
                          layoutId="activeSection"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                      {label}
                    </motion.button>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatePresence>
        </div>
      </motion.nav>

      {/* Spacer for fixed navbar */}
      <div style={{ height: '7.5rem' }} />
    </>
  );
};

export default Navbar;