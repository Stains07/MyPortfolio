import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiLinkedin, FiMail, FiPhone, FiGithub, FiFacebook, FiInstagram, FiTwitter, FiFileText, FiMapPin, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { AiOutlineRobot, AiOutlineCode, AiOutlineCloudServer, AiOutlineBarChart } from 'react-icons/ai';

// Import your images - replace with actual imports
import img1 from './images/My_img1.png';
import img2 from './images/My_img1.png';
import img3 from './images/My_img1.png';
import img4 from './images/My_img1.png';
import img5 from './images/My_img1.png';

const About = ({ profileData, colors }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [img1, img2, img3, img4, img5];
  const socialLinks = [
    { icon: <FiLinkedin />, label: 'LinkedIn', link: profileData.personal.linkedin },
    { icon: <FiMail />, label: 'Email', link: `mailto:${profileData.personal.email || 'stainsdas007@gmail.com'}` },
    { icon: <FiPhone />, label: 'WhatsApp', link: profileData.personal.whatsapp },
    { icon: <FiGithub />, label: 'GitHub', link: profileData.personal.github },
    { icon: <FiFacebook />, label: 'Facebook', link: profileData.personal.facebook },
    { icon: <FiInstagram />, label: 'Instagram', link: profileData.personal.instagram },
    { icon: <FiTwitter />, label: 'X', link: profileData.personal.x },
    { icon: <FiFileText />, label: 'Resume', link: profileData.personal.resume }
  ];

  const skills = [
    { icon: <AiOutlineRobot />, title: "AI Development", desc: "Building intelligent systems and neural networks" },
    { icon: <AiOutlineCode />, title: "Machine Learning", desc: "Creating predictive models and algorithms" },
    { icon: <AiOutlineCloudServer />, title: "Deep Learning", desc: "Advanced neural network architectures" },
    { icon: <AiOutlineBarChart />, title: "Data Science", desc: "Extracting insights from complex datasets" }
  ];

  // Auto-rotate images every 4 seconds
  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    // Auto-rotate slides every 5 seconds
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 2);
    }, 5000);

    return () => {
      clearInterval(imageInterval);
      clearInterval(slideInterval);
    };
  }, [images.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % 2);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + 2) % 2);
  const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div style={{
      minHeight: 'calc(100vh - 7.5rem)', // Adjusted to fit below navbar
      padding: '1rem',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      maxWidth: '1200px',
      margin: '0 auto',
      '@media (max-width: 768px)': {
        minHeight: 'calc(100vh - 6.5rem)'
      }
    }}>
      <h2 style={{
        fontSize: 'clamp(2rem, 4vw, 2.5rem)',
        fontWeight: 700,
        marginBottom: '1.5rem',
        background: 'linear-gradient(45deg, #e0e7ff 30%, #818cf8 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        textAlign: 'center'
      }}>
        About Me
      </h2>

      <div style={{ 
        position: 'relative', 
        overflow: 'hidden',
        maxWidth: '100%'
      }}>
        {/* Navigation Arrows for Slides */}
        <button
          onClick={prevSlide}
          style={{
            position: 'absolute',
            left: '5px',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'rgba(15,23,42,0.9)',
            border: '1px solid #6366f1',
            borderRadius: '50%',
            width: '30px',
            height: '30px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#e0e7ff',
            cursor: 'pointer',
            zIndex: 10,
            '@media (max-width: 768px)': {
              width: '25px',
              height: '25px'
            }
          }}
        >
          <FiChevronLeft />
        </button>
        
        <button
          onClick={nextSlide}
          style={{
            position: 'absolute',
            right: '5px',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'rgba(15,23,42,0.9)',
            border: '1px solid #6366f1',
            borderRadius: '50%',
            width: '30px',
            height: '30px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#e0e7ff',
            cursor: 'pointer',
            zIndex: 10,
            '@media (max-width: 768px)': {
              width: '25px',
              height: '25px'
            }
          }}
        >
          <FiChevronRight />
        </button>

        <AnimatePresence mode='wait'>
          {currentSlide === 0 && (
            <motion.div
              key="slide1"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1.5rem', // Reduced gap for compactness
                alignItems: 'center',
                padding: '1rem',
                '@media (max-width: 768px)': {
                  gridTemplateColumns: '1fr'
                }
              }}
            >
              {/* Image Slideshow */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
                style={{
                  position: 'relative',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  maxWidth: '350px', // Reduced size for compactness
                  margin: '0 auto'
                }}
              >
                <div style={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: '350px',
                  borderRadius: '15px',
                  overflow: 'hidden',
                  boxShadow: '0 10px 30px rgba(99, 102, 241, 0.3)'
                }}>
                  {/* Image Navigation Arrows */}
                  <button
                    onClick={prevImage}
                    style={{
                      position: 'absolute',
                      left: '10px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      background: 'rgba(15,23,42,0.8)',
                      border: '1px solid #6366f1',
                      borderRadius: '50%',
                      width: '25px',
                      height: '25px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#e0e7ff',
                      cursor: 'pointer',
                      zIndex: 2,
                      '@media (max-width: 768px)': {
                        width: '20px',
                        height: '20px'
                      }
                    }}
                  >
                    <FiChevronLeft size={12} />
                  </button>
                  
                  <button
                    onClick={nextImage}
                    style={{
                      position: 'absolute',
                      right: '10px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      background: 'rgba(15,23,42,0.8)',
                      border: '1px solid #6366f1',
                      borderRadius: '50%',
                      width: '25px',
                      height: '25px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#e0e7ff',
                      cursor: 'pointer',
                      zIndex: 2,
                      '@media (max-width: 768px)': {
                        width: '20px',
                        height: '20px'
                      }
                    }}
                  >
                    <FiChevronRight size={12} />
                  </button>

                  <AnimatePresence mode='wait'>
                    <motion.img
                      key={currentImageIndex}
                      src={images[currentImageIndex]}
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.5 }}
                      style={{
                        width: '100%',
                        height: '250px', // Reduced height for compactness
                        objectFit: 'cover',
                        display: 'block'
                      }}
                      alt={`Profile ${currentImageIndex + 1}`}
                    />
                  </AnimatePresence>

                  {/* Image Indicators */}
                  <div style={{
                    position: 'absolute',
                    bottom: '10px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    gap: '5px',
                    zIndex: 2
                  }}>
                    {images.map((_, index) => (
                      <div
                        key={index}
                        style={{
                          width: '8px',
                          height: '8px',
                          borderRadius: '50%',
                          background: currentImageIndex === index ? '#6366f1' : 'rgba(255,255,255,0.5)',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease'
                        }}
                        onClick={() => setCurrentImageIndex(index)}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Profile Details */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                style={{
                  textAlign: 'left',
                  maxWidth: '100%'
                }}
              >
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  style={{ 
                    fontSize: 'clamp(1.5rem, 3vw, 2rem)', 
                    fontWeight: 700, 
                    color: '#e0e7ff', 
                    marginBottom: '0.5rem' 
                  }}
                >
                  {profileData.personal.name}
                </motion.h3>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    background: 'linear-gradient(45deg, rgba(99,102,241,0.2), rgba(139,92,246,0.2))',
                    borderRadius: '20px',
                    padding: '0.5rem 1rem',
                    border: '1px solid rgba(99,102,241,0.3)',
                    boxShadow: '0 0 20px rgba(99,102,241,0.4)',
                    marginBottom: '1rem',
                    backdropFilter: 'blur(10px)'
                  }}
                >
                  <AiOutlineRobot style={{ marginRight: '0.5rem', color: '#818cf8', fontSize: '1.2rem' }} />
                  <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>AI & ML Engineer</span>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  style={{ 
                    color: '#94a3b8', 
                    fontSize: 'clamp(0.9rem, 2vw, 1rem)', 
                    lineHeight: 1.6, 
                    marginBottom: '1.5rem' 
                  }}
                >
                  {profileData.personal.objective}
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  style={{ 
                    color: '#94a3b8', 
                    fontSize: '0.9rem', 
                    display: 'flex', 
                    alignItems: 'center', 
                    marginBottom: '1.5rem' 
                  }}
                >
                  <FiMapPin style={{ marginRight: '0.5rem', color: '#818cf8' }} />
                  {profileData.personal.location}
                </motion.p>

                {/* Skills Grid */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '0.6rem', // Reduced gap for compactness
                  '@media (max-width: 768px)': {
                    gridTemplateColumns: '1fr'
                  }
                }}>
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.title}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                      style={{
                        background: 'rgba(15,23,42,0.6)',
                        borderRadius: '10px',
                        padding: '0.6rem', // Reduced padding for compactness
                        border: '1px solid rgba(99,102,241,0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.4rem'
                      }}
                      whileHover={{ scale: 1.03, borderColor: '#6366f1' }}
                    >
                      <div style={{
                        background: 'linear-gradient(45deg, #6366f1, #8b5cf6)',
                        borderRadius: '6px', // Reduced radius
                        padding: '0.3rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        {skill.icon}
                      </div>
                      <div>
                        <div style={{ color: '#e0e7ff', fontWeight: 600, fontSize: '0.75rem' }}> // Reduced font size
                          {skill.title}
                        </div>
                        <div style={{ color: '#94a3b8', fontSize: '0.65rem' }}> // Reduced font size
                          {skill.desc}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}

          {currentSlide === 1 && (
            <motion.div
              key="slide2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1.5rem', // Reduced gap for compactness
                alignItems: 'center',
                padding: '1rem',
                '@media (max-width: 768px)': {
                  gridTemplateColumns: '1fr'
                }
              }}
            >
              {/* Image Slideshow for Second Slide */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
                style={{
                  position: 'relative',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  maxWidth: '350px', // Reduced size for compactness
                  margin: '0 auto'
                }}
              >
                <div style={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: '350px',
                  borderRadius: '15px',
                  overflow: 'hidden',
                  boxShadow: '0 10px 30px rgba(236, 72, 153, 0.3)'
                }}>
                  <AnimatePresence mode='wait'>
                    <motion.img
                      key={currentImageIndex}
                      src={images[currentImageIndex]}
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.5 }}
                      style={{
                        width: '100%',
                        height: '250px', // Reduced height for compactness
                        objectFit: 'cover',
                        display: 'block'
                      }}
                      alt={`Profile ${currentImageIndex + 1}`}
                    />
                  </AnimatePresence>
                </div>
              </motion.div>

              {/* Social Links Grid */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '0.8rem', // Reduced gap for compactness
                  '@media (max-width: 768px)': {
                    gridTemplateColumns: '1fr'
                  }
                }}
              >
                {socialLinks.map(({ icon, label, link }, index) => (
                  <motion.a
                    key={label}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    style={{
                      background: 'linear-gradient(135deg, rgba(15,23,42,0.8), rgba(30,41,59,0.6))',
                      borderRadius: '10px', // Reduced radius
                      padding: '0.8rem 0.4rem', // Reduced padding
                      border: `1px solid ${colors[index % colors.length].color}`,
                      boxShadow: `0 4px 15px ${colors[index % colors.length].color}40`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexDirection: 'column',
                      textDecoration: 'none',
                      color: '#e2e8f0',
                      transition: 'all 0.3s ease',
                      textAlign: 'center',
                      backdropFilter: 'blur(10px)',
                      '@media (max-width: 768px)': {
                        padding: '0.6rem 0.3rem'
                      }
                    }}
                    whileHover={{ 
                      scale: 1.05, 
                      boxShadow: `0 6px 20px ${colors[index % colors.length].color}60`,
                      y: -2
                    }}
                  >
                    <span style={{ 
                      fontSize: '1.3rem', // Slightly reduced
                      marginBottom: '0.3rem', 
                      color: colors[index % colors.length].color 
                    }}>
                      {icon}
                    </span>
                    <span style={{ fontSize: '0.75rem', fontWeight: 600 }}> // Reduced font size
                      {label}
                    </span>
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Slide Indicators */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '0.5rem',
          marginTop: '1rem'
        }}>
          {[0, 1].map((index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                border: 'none',
                background: currentSlide === index ? '#6366f1' : '#475569',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            />
          ))}
        </div>
      </div>

      {/* Responsive Media Queries */}
      <style jsx>{`
        @media (max-width: 768px) {
          div > div > div {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
          }
          
          button[style*="position: absolute"] {
            width: 25px !important;
            height: 25px !important;
          }
          
          div[style*="grid-template-columns: repeat(2, 1fr)"] {
            grid-template-columns: 1fr !important;
          }
          
          div[style*="max-width: 350px"] img {
            height: 200px !important; // Further reduced for small screens
          }
        }
        
        @media (max-width: 480px) {
          div > div {
            padding: 0.5rem !important;
          }
          
          div[style*="max-width: 350px"] {
            max-width: 250px !important;
          }
          
          div[style*="max-width: 350px"] img {
            height: 150px !important; // Further reduced for very small screens
          }
        }
      `}</style>
    </div>
  );
};

export default About;