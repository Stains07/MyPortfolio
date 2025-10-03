import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiLinkedin, FiMail, FiPhone, FiGithub, FiFacebook, FiInstagram, FiTwitter, FiFileText, FiMapPin, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { AiOutlineRobot, AiOutlineCode, AiOutlineCloudServer, AiOutlineBarChart } from 'react-icons/ai';
import { BsSkype } from 'react-icons/bs';

// Import your images - replace with actual paths
import img1 from './images/My_img1.png';
import img2 from './images/My_img1.png';
import img3 from './images/Stains_img2.png';
import img4 from './images/My_img1.png';
import img5 from './images/My_img1.png';

const About = ({ profileData }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [img1, img2, img3, img4, img5];
  const socialLinks = [
    { icon: <FiLinkedin />, label: 'LinkedIn', link: profileData.personal.linkedin || 'https://linkedin.com/in/stains-das-74b641263' },
    { icon: <FiMail />, label: 'Email', link: `mailto:${profileData.personal.email || 'stainsdas007@gmail.com'}` },
    { icon: <FiPhone />, label: 'WhatsApp', link: profileData.personal.whatsapp || 'https://wa.me/919074472372' },
    { icon: <FiGithub />, label: 'GitHub', link: profileData.personal.github || 'https://github.com/stainsdas' },
    { icon: <FiFacebook />, label: 'Facebook', link: profileData.personal.facebook || 'https://www.facebook.com/share/1YAGuNAJqb/' },
    { icon: <FiInstagram />, label: 'Instagram', link: profileData.personal.instagram || 'https://www.instagram.com/stains07?igsh=NWZkZmVlMDJpNWZn' },
    { icon: <FiTwitter />, label: 'X', link: profileData.personal.x || 'https://x.com/stainsdas' },
    { icon: <FiFileText />, label: 'Resume', link: profileData.personal.resume || 'https://example.com/stainsdas-resume.pdf' },
    { icon: <BsSkype />, label: 'Skype', link: 'skype:Stains07?chat' }
  ];

  const skills = [
    { icon: <AiOutlineRobot />, title: "AI Development", desc: "Building intelligent systems and neural networks" },
    { icon: <AiOutlineCode />, title: "Machine Learning", desc: "Creating predictive models and algorithms" },
    { icon: <AiOutlineCloudServer />, title: "Deep Learning", desc: "Advanced neural network architectures" },
    { icon: <AiOutlineBarChart />, title: "Data Science", desc: "Extracting insights from complex datasets" }
  ];

  const colors = [
    { color: '#0077b5' },
    { color: '#1877f2' },
    { color: '#e4405f' },
    { color: '#000000' },
    { color: '#6e5494' },
    { color: '#ea4335' },
    { color: '#25d366' },
    { color: '#ff6b35' },
    { color: '#00aff0' } // Color for Skype
  ];

  // Auto-rotate images every 20 seconds
  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 20000);

    // Auto-rotate slides every 20 seconds
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 2);
    }, 20000);

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
      borderRadius: '30px',
      minHeight: 'calc(100vh - 7.5rem)',
      padding: '1rem',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      maxWidth: '1200px',
      margin: '-6rem auto',
      marginLeft: '-60px',
      marginRight: '-60px',
      background: 'linear-gradient(135deg, #161515ff 0%, #2d323bff 100%)',
    }}>
      <h2 style={{
        fontSize: 'clamp(1.5rem, 3vw, 2rem)',
        fontWeight: 500,
        marginBottom: '1rem',
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
        maxWidth: '100%',
        height: 'auto'
      }}>
        {/* Navigation Arrows for Slides */}
        <button
          onClick={prevSlide}
          style={{
            position: 'absolute',
            left: '5px',
            top: '40%',
            transform: 'translateY(-50%)',
            background: 'rgba(15,23,42,0.9)',
            border: '1px solid #6366f1',
            borderRadius: '50%',
            width: '25px',
            height: '25px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#e0e7ff',
            cursor: 'pointer',
            zIndex: 10,
          }}
        >
          <FiChevronLeft size={14} />
        </button>
        
        <button
          onClick={nextSlide}
          style={{
            position: 'absolute',
            right: '5px',
            top: '40%',
            transform: 'translateY(-50%)',
            background: 'rgba(15,23,42,0.9)',
            border: '1px solid #6366f1',
            borderRadius: '50%',
            width: '25px',
            height: '25px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#e0e7ff',
            cursor: 'pointer',
            zIndex: 10,
          }}
        >
          <FiChevronRight size={14} />
        </button>

        <AnimatePresence mode='wait'>
          {currentSlide === 0 && (
            <motion.div
              key="slide1"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1.5rem',
                padding: '0.5rem',
                maxWidth: '100%',
                height: '100%',
                alignItems: 'start'
              }}
            >
              {/* Left Column: Image at Top with Content Below */}
              <div style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '1rem',
                height: '100%'
              }}>
                {/* Image Slideshow at Top */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  style={{
                    position: 'relative',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    maxWidth: '280px',
                    margin: '0 auto'
                  }}
                >
                  <div style={{
                    position: 'relative',
                    width: '100%',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    boxShadow: '0 8px 25px rgba(99, 102, 241, 0.25)'
                  }}>
                    {/* Image Navigation Arrows */}
                    <button
                      onClick={prevImage}
                      style={{
                        position: 'absolute',
                        left: '8px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        background: 'rgba(15,23,42,0.8)',
                        border: '1px solid #6366f1',
                        borderRadius: '50%',
                        width: '20px',
                        height: '20px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#e0e7ff',
                        cursor: 'pointer',
                        zIndex: 2,
                      }}
                    >
                      <FiChevronLeft size={10} />
                    </button>
                    
                    <button
                      onClick={nextImage}
                      style={{
                        position: 'absolute',
                        right: '8px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        background: 'rgba(15,23,42,0.8)',
                        border: '1px solid #6366f1',
                        borderRadius: '50%',
                        width: '20px',
                        height: '20px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#e0e7ff',
                        cursor: 'pointer',
                        zIndex: 2,
                      }}
                    >
                      <FiChevronRight size={10} />
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
                          height: '180px',
                          objectFit: 'cover',
                          display: 'block'
                        }}
                        alt={`Profile ${currentImageIndex + 1}`}
                      />
                    </AnimatePresence>

                    {/* Image Indicators */}
                    <div style={{
                      position: 'absolute',
                      bottom: '8px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      display: 'flex',
                      gap: '4px',
                      zIndex: 2
                    }}>
                      {images.map((_, index) => (
                        <div
                          key={index}
                          style={{
                            width: '6px',
                            height: '6px',
                            borderRadius: '50%',
                            background: currentImageIndex === index ? '#6366f1' : 'rgba(255,255,255,0.4)',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease'
                          }}
                          onClick={() => setCurrentImageIndex(index)}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Content Below Image */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  style={{
                    textAlign: 'left',
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start'
                  }}
                >
                  <motion.h1
                    initial={{ opacity: 0, y: -15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    style={{ 
                      fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)', 
                      fontWeight: 700, 
                      background: 'linear-gradient(45deg, #6366f1, #8b5cf6)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      marginBottom: '0.3rem' 
                    }}
                  >
                    {profileData.personal.name || 'STAINS DAS'}
                  </motion.h1>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    style={{
                      background: 'linear-gradient(45deg, rgba(99,102,241,0.15), rgba(139,92,246,0.15))',
                      borderRadius: '12px',
                      padding: '0.2rem 0.6rem',
                      display: 'inline-flex',
                      alignItems: 'center',
                      border: '1px solid rgba(99,102,241,0.25)',
                      boxShadow: '0 0 12px rgba(99,102,241,0.2)',
                      marginBottom: '0.8rem',
                      backdropFilter: 'blur(6px)'
                    }}
                  >
                    <AiOutlineRobot style={{ marginRight: '0.4rem', color: '#818cf8', fontSize: '0.9rem' }} />
                    <span style={{ fontWeight: 600, fontSize: '0.7rem' }}>AI & ML Engineer</span>
                  </motion.div>

                  <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    style={{ 
                      color: '#94a3b8', 
                      fontSize: 'clamp(0.65rem, 1.1vw, 0.75rem)', 
                      lineHeight: 1.3, 
                      marginBottom: '0.8rem' 
                    }}
                  >
                    Hello! I'm Stains Das, an Artificial Intelligence and Machine Learning Engineer from Kerala, India. I'm passionate about building intelligent solutions that solve real-world problems. With expertise in AI/ML, full-stack development, and data science, I create innovative projects that make a difference. When not coding, I enjoy exploring new technologies and contributing to open-source communities.
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    style={{ 
                      color: '#94a3b8', 
                      fontSize: '0.7rem', 
                      display: 'flex', 
                      alignItems: 'center',
                      marginBottom: '0.8rem' 
                    }}
                  >
                    <FiMapPin style={{ marginRight: '0.4rem', color: '#818cf8' }} />
                    {profileData.personal.location || 'Kerala, India'}
                  </motion.p>
                </motion.div>
              </div>

              {/* Right Column: Skills Boxes */}
              <div style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '0.5rem', 
                height: '100%'
              }}>
                <motion.h3
                  initial={{ opacity: 0, y: -15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  style={{ 
                    fontSize: 'clamp(1rem, 2vw, 1.2rem)', 
                    fontWeight: 600, 
                    background: 'linear-gradient(45deg, #6366f1, #8b5cf6)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    marginBottom: '0.5rem',
                    textAlign: 'center'
                  }}
                >
                  Key Technologies & Expertise
                </motion.h3>

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                  gap: '0.5rem',
                  flex: 1,
                  overflowY: 'auto',
                  paddingRight: '0.2rem'
                }}>
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.title}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      style={{
                        background: 'rgba(15,23,42,0.5)',
                        borderRadius: '8px',
                        padding: '0.4rem',
                        border: '1px solid rgba(99,102,241,0.15)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.3rem',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                      }}
                      whileHover={{ scale: 1.04, borderColor: '#6366f1', boxShadow: '0 4px 12px rgba(99,102,241,0.3)' }}
                    >
                      <div style={{
                        background: 'linear-gradient(45deg, #6366f1, #8b5cf6)',
                        borderRadius: '4px',
                        padding: '0.2rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        minWidth: '20px'
                      }}>
                        {skill.icon}
                      </div>
                      <div>
                        <div style={{ color: '#e0e7ff', fontWeight: 600, fontSize: '0.7rem' }}>
                          {skill.title}
                        </div>
                        <div style={{ color: '#94a3b8', fontSize: '0.6rem', lineHeight: 1.2 }}>
                          {skill.desc}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {currentSlide === 1 && (
            <motion.div
              key="slide2"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 2fr',
                alignItems: 'start',
                gap: '1rem',
                padding: '0.5rem',
                maxWidth: '100%',
              }}
            >
              {/* Image Slideshow on Left Top */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
                style={{
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  width: '100%',
                  maxWidth: '300px',
                  margin: '0 auto'
                }}
              >
                <div style={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: '300px',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0 8px 25px rgba(236, 72, 153, 0.25)'
                }}>
                  {/* Image Navigation Arrows */}
                  <button
                    onClick={prevImage}
                    style={{
                      position: 'absolute',
                      left: '8px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      background: 'rgba(15,23,42,0.8)',
                      border: '1px solid #6366f1',
                      borderRadius: '50%',
                      width: '20px',
                      height: '20px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#e0e7ff',
                      cursor: 'pointer',
                      zIndex: 2,
                    }}
                  >
                    <FiChevronLeft size={10} />
                  </button>
                  
                  <button
                    onClick={nextImage}
                    style={{
                      position: 'absolute',
                      right: '8px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      background: 'rgba(15,23,42,0.8)',
                      border: '1px solid #6366f1',
                      borderRadius: '50%',
                      width: '20px',
                      height: '20px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#e0e7ff',
                      cursor: 'pointer',
                      zIndex: 2,
                    }}
                  >
                    <FiChevronRight size={10} />
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
                        height: '200px',
                        objectFit: 'cover',
                        display: 'block'
                      }}
                      alt={`Profile ${currentImageIndex + 1}`}
                    />
                  </AnimatePresence>

                  {/* Image Indicators */}
                  <div style={{
                    position: 'absolute',
                    bottom: '8px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    gap: '4px',
                    zIndex: 2
                  }}>
                    {images.map((_, index) => (
                      <div
                        key={index}
                        style={{
                          width: '6px',
                          height: '6px',
                          borderRadius: '50%',
                          background: currentImageIndex === index ? '#6366f1' : 'rgba(255,255,255,0.4)',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease'
                        }}
                        onClick={() => setCurrentImageIndex(index)}
                      />
                    ))}
                  </div>
                </div>

                {/* Content below image */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  style={{ 
                    color: '#94a3b8', 
                    fontSize: 'clamp(0.8rem, 1.5vw, 0.9rem)', 
                    lineHeight: 1.5, 
                    marginTop: '1rem',
                    textAlign: 'center'
                  }}
                >
                  Let's connect and discuss innovative AI solutions, potential collaborations, or just share ideas about technology and machine learning!
                </motion.p>
              </motion.div>

              {/* Social Links on Right */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem'
                }}
              >
                <motion.h3
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  style={{ 
                    fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)', 
                    fontWeight: 600, 
                    background: 'linear-gradient(45deg, #6366f1, #8b5cf6)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    marginBottom: '0.5rem',
                    textAlign: 'center'
                  }}
                >
                  Connect with Me on Social Media
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  style={{ 
                    color: '#94a3b8', 
                    fontSize: '0.9rem', 
                    lineHeight: 1.5, 
                    marginBottom: '1rem',
                    textAlign: 'center'
                  }}
                >
                  Stay updated with my latest projects, thoughts on AI/ML, and professional journey. Feel free to reach out for collaborations or discussions!
                </motion.p>

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '0.6rem',
                  width: '100%',
                }}>
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
                        borderRadius: '8px',
                        padding: '0.6rem',
                        border: `1px solid ${colors[index % colors.length].color}`,
                        boxShadow: `0 3px 12px ${colors[index % colors.length].color}30`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        textDecoration: 'none',
                        color: '#e2e8f0',
                        transition: 'all 0.3s ease',
                        textAlign: 'center',
                        backdropFilter: 'blur(8px)',
                        height: '80px'
                      }}
                      whileHover={{ 
                        scale: 1.05, 
                        boxShadow: `0 5px 18px ${colors[index % colors.length].color}50`,
                        y: -2
                      }}
                    >
                      <span style={{ 
                        fontSize: '1.2rem', 
                        marginBottom: '0.3rem', 
                        color: colors[index % colors.length].color 
                      }}>
                        {icon}
                      </span>
                      <span style={{ fontSize: '0.75rem', fontWeight: 600 }}>
                        {label}
                      </span>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Slide Indicators */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '0.4rem',
          marginTop: '0.8rem'
        }}>
          {[0, 1].map((index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              style={{
                width: '8px',
                height: '8px',
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
          }
          
          button[style*="position: absolute"] {
            width: 20px !important;
            height: 20px !important;
          }
          
          div[style*="grid-template-columns: repeat(3, 1fr)"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          
          div[style*="max-width: 300px"] img {
            height: 180px !important;
          }
          
          div[style*="grid-template-columns: repeat(auto-fit, minmax(140px, 1fr))"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        
        @media (max-width: 480px) {
          div > div {
            padding: 0.3rem !important;
          }
          
          div[style*="max-width: 300px"] {
            max-width: 250px !important;
          }
          
          div[style*="max-width: 300px"] img {
            height: 150px !important;
          }
          
          div[style*="grid-template-columns: repeat(3, 1fr)"] {
            grid-template-columns: 1fr !important;
          }
          
          div[style*="grid-template-columns: repeat(auto-fit, minmax(140px, 1fr))"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};

export default About;