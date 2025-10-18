// About.js
import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiPhone, FiFacebook, FiInstagram, FiGithub, FiTwitter,
  FiLinkedin, FiMail, FiFileText, FiMapPin, FiChevronLeft, FiChevronRight
} from 'react-icons/fi';
import { AiOutlineRobot, AiOutlineCode, AiOutlineCloudServer, AiOutlineBarChart } from 'react-icons/ai';
import { BsSkype } from 'react-icons/bs';
import { SiOpenai, SiTensorflow, SiPytorch, SiHuggingface } from 'react-icons/si';

// Replace these with your actual images
import img1 from './images/My_img1.png';
import img2 from './images/My_img1.png';
import img3 from './images/Stains_img2.png';
import img4 from './images/My_img1.png';
import img5 from './images/My_img1.png';

const About = ({ profileData = {} }) => {
  // Slides: 1 => Social (default), 0 => About
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // ensure we only run the initial stagger once
  const [initialPlayed, setInitialPlayed] = useState(false);
  useEffect(() => {
    // mark initial animation as played after a short delay
    const t = setTimeout(() => setInitialPlayed(true), 1400);
    return () => clearTimeout(t);
  }, []);

  // images array (use at least 3 images)
  const images = [img1, img2, img3, img4, img5].filter(Boolean);

  // socialLinks (order & icons/colors as requested)
  const socialLinks = [
    { icon: <FiPhone />, label: 'WhatsApp', link: profileData.personal?.whatsapp || 'https://wa.me/919074472372', color: '#54e946ff' },
    { icon: <FiFacebook />, label: 'Facebook', link: profileData.personal?.facebook || 'https://www.facebook.com/share/1YAGuNAJqb/', color: '#1877f2' },
    { icon: <FiInstagram />, label: 'Instagram', link: profileData.personal?.instagram || 'https://www.instagram.com/stains07?igsh=NWZkZmVlMDJpNWZn', color: '#e44040ff' },
    { icon: <FiGithub />, label: 'GitHub', link: profileData.personal?.github || 'https://github.com/stainsdas', color: '#000000' },
    { icon: <FiTwitter />, label: 'X', link: profileData.personal?.x || 'https://x.com/stainsdas', color: '#6e5494' },
    { icon: <FiLinkedin />, label: 'LinkedIn', link: profileData.personal?.linkedin || 'https://linkedin.com/in/stains-das-74b641263', color: '#00fbffff' },
    { icon: <BsSkype />, label: 'Skype', link: 'skype:Stains07?chat', color: '#01bbffff' },
    { icon: <FiMail />, label: 'Email', link: `mailto:${profileData.personal?.email || 'stainsdas007@gmail.com'}`, color: '#cf6b3dff' },
    { icon: <FiFileText />, label: 'Resume', link: profileData.personal?.resume || 'https://example.com/stainsdas-resume.pdf', color: '#d6eb6eff' }
  ];

  // 9 features for About slide with only titles (removed desc), and colorful icons
  const features = [
    { icon: <AiOutlineRobot style={{ color: '#ff6b6b' }} />, title: 'AI Development' },
    { icon: <AiOutlineCode style={{ color: '#4ecdc4' }} />, title: 'Machine Learning' },
    { icon: <SiOpenai style={{ color: '#45b7d1' }} />, title: 'LLM' },
    { icon: <SiHuggingface style={{ color: '#ff9f1c' }} />, title: 'Gemini / Hugging Face' },
    { icon: <SiOpenai style={{ color: '#2ec4b6' }} />, title: 'GenAI' },
    { icon: <AiOutlineCloudServer style={{ color: '#e71d36' }} />, title: 'Frameworks' },
    { icon: <SiTensorflow style={{ color: '#ffbf69' }} />, title: 'Deep Learning' },
    { icon: <SiPytorch style={{ color: '#cbf3f0' }} />, title: 'Neural Networks' },
    { icon: <AiOutlineBarChart style={{ color: '#f25f5c' }} />, title: 'Data Science' }
  ];

  // Slide auto-rotation (30s)
  useEffect(() => {
    const id = setInterval(() => {
      setCurrentSlide(prev => (prev === 0 ? 1 : 0));
    }, 30000);
    return () => clearInterval(id);
  }, []);

  // image rotation every 20s
  useEffect(() => {
    if (!images.length) return;
    const id = setInterval(() => {
      setCurrentImageIndex(prev => (prev + 1) % images.length);
    }, 20000);
    return () => clearInterval(id);
  }, [images.length]);

  // handlers
  const goNextSlide = () => setCurrentSlide(prev => (prev === 0 ? 1 : 0));
  const goPrevSlide = () => setCurrentSlide(prev => (prev === 0 ? 1 : 0)); // toggles since there are only 2 slides
  const goNextImage = () => setCurrentImageIndex(prev => (prev + 1) % images.length);
  const goPrevImage = () => setCurrentImageIndex(prev => (prev - 1 + images.length) % images.length);

  // motion variants
  const containerVar = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { when: 'beforeChildren', staggerChildren: 0.06 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.35 } }
  };
  const itemVar = {
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.45 } }
  };

  const itemNoStagger = {
    initial: { opacity: 1, y: 0 },
    animate: { opacity: 1, y: 0 }
  };

  const personal = profileData.personal || {};

  return (
    <div className="about-root">
      <h2 className="about-title">About Me</h2>

      {/* prev/next arrows */}
      <button className="nav-arrow left" onClick={goPrevSlide} aria-label="previous slide"><FiChevronLeft size={18} /></button>
      <button className="nav-arrow right" onClick={goNextSlide} aria-label="next slide"><FiChevronRight size={18} /></button>

      <div className="carousel-wrapper">
        <AnimatePresence mode="wait">
          {/* Social Slide (default when currentSlide === 1) */}
          {currentSlide === 1 && (
            <motion.section
              key="social"
              className="slide social-slide"
              variants={containerVar}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <motion.div className="social-left" variants={initialPlayed ? itemNoStagger : itemVar}>
                <div className="image-card">
                  <button className="img-nav img-prev" onClick={goPrevImage} aria-label="previous image"><FiChevronLeft size={12} /></button>
                  <button className="img-nav img-next" onClick={goNextImage} aria-label="next image"><FiChevronRight size={12} /></button>

                  <AnimatePresence mode="wait">
                    <motion.img
                      key={`social-img-${currentImageIndex}`}
                      src={images[currentImageIndex]}
                      alt={`profile-${currentImageIndex}`}
                      initial={{ opacity: 0, scale: 1.04 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.5 }}
                      className="profile-image"
                      loading="lazy"
                    />
                  </AnimatePresence>

                  <div className="indicators">
                    {images.map((_, idx) => (
                      <button
                        key={idx}
                        className={`dot ${idx === currentImageIndex ? 'active' : ''}`}
                        onClick={() => setCurrentImageIndex(idx)}
                        aria-label={`show image ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>

                <p className="lead-text">Let's connect and discuss innovative AI solutions, potential collaborations, or just share ideas about technology and machine learning!</p>
              </motion.div>

              <motion.div className="social-right" variants={initialPlayed ? itemNoStagger : itemVar}>
                <h3 className="section-title">Connect with Me on Social Media</h3>
                <p className="section-sub">Stay updated with my latest projects, thoughts on AI/ML, and professional journey. Feel free to reach out!</p>

                <div className="social-grid">
                  {socialLinks.map((s, i) => (
                    <a
                      key={s.label}
                      className="social-card"
                      href={s.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ borderColor: s.color }}
                    >
                      <span className="social-icon" style={{ color: s.color }}>{s.icon}</span>
                      <span className="social-label">{s.label}</span>
                    </a>
                  ))}
                </div>
              </motion.div>
            </motion.section>
          )}

          {/* About + Skills Slide */}
          {currentSlide === 0 && (
            <motion.section
              key="about"
              className="slide about-slide"
              variants={containerVar}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <motion.div className="about-left" variants={initialPlayed ? itemNoStagger : itemVar}>
                <div className="image-card">
                  <button className="img-nav img-prev" onClick={goPrevImage} aria-label="previous image"><FiChevronLeft size={12} /></button>
                  <button className="img-nav img-next" onClick={goNextImage} aria-label="next image"><FiChevronRight size={12} /></button>

                  <AnimatePresence mode="wait">
                    <motion.img
                      key={`about-img-${currentImageIndex}`}
                      src={images[currentImageIndex]}
                      alt={`profile-${currentImageIndex}`}
                      initial={{ opacity: 0, scale: 1.04 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.5 }}
                      className="profile-image"
                    />
                  </AnimatePresence>
                </div>

                <div className="personal-block">
                  <h1 className="name">{personal.name || 'STAINS DAS'}</h1>
                  <div className="role-pill">
                    <AiOutlineRobot style={{ marginRight: 8 }} />
                    <span>AI & ML Engineer</span>
                  </div>
                  {/* <p className="location"><FiMapPin style={{ marginRight: 6 }} />{personal.location || 'Kerala, India'}</p> */}
                </div>
              </motion.div>

              <motion.div className="about-right" variants={initialPlayed ? itemNoStagger : itemVar}>
                <h3 className="section-title">Key Technologies & Expertise</h3>

                <div className="features-grid">
                  {features.map((f, idx) => (
                    <div className="feature-card" key={f.title}>
                      <div className="feature-icon">{f.icon}</div>
                      <div>
                        <div className="feature-title">{f.title}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="about-text-end">
                  Hello! I'm Stains Das, an Artificial Intelligence and Machine Learning Engineer from Kerala, India. I'm passionate about building intelligent solutions that solve real-world problems. With expertise in AI/ML, full-stack development, and data science, I create innovative projects that make a difference.
                </p>
              </motion.div>
            </motion.section>
          )}
        </AnimatePresence>

        {/* indicators */}
        <div className="slide-indicators">
          {[0, 1].map(i => (
            <button
              key={i}
              className={`indicator ${currentSlide === i ? 'active' : ''}`}
              onClick={() => setCurrentSlide(i)}
              aria-label={`go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        :global(.about-root) { box-sizing: border-box; }
        .about-root {
          border-radius: 18px;
          min-height: calc(100vh - 7.5rem);
          padding: 18px;
          display: flex;
          flex-direction: column;
          align-items: center;
          max-width: 1600px; /* Increased width */
          margin: -6rem auto;
          background: linear-gradient(135deg, #161515ff 0%, #2d323bff 100%);
          color: #e6eefc;
          position: relative;
        }

        .about-title {
          font-size: clamp(1.5rem, 3vw, 2rem);
          font-weight: 600;
          margin-bottom: 12px;
          background: linear-gradient(45deg, #e0e7ff 30%, #818cf8 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-align: center;
        }

        .nav-arrow {
          position: absolute;
          top: 44%;
          background: rgba(15,23,42,0.9);
          border: 1px solid #6366f1;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #e0e7ff;
          cursor: pointer;
          z-index: 50;
        }
        .nav-arrow.left { left: 10px; }
        .nav-arrow.right { right: 10px; }

        .carousel-wrapper { width: 100%; max-width: 1500px; /* Increased width */ }

        .slide { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; align-items: start; padding: 10px; }

        /* Social Slide tweaks (use same grid but different proportions) */
        .social-slide { grid-template-columns: 1fr 1.2fr; }

        .image-card {
          position: relative;
          width: 100%;
          max-width: 360px;
          border-radius: 12px;
          overflow: hidden;
          background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
          box-shadow: 0 8px 28px rgba(0,0,0,0.35);
          margin: 0 auto;
        }

        .profile-image {
          width: 100%;
          height: 300px;
          object-fit: cover;
          display: block;
        }

        .img-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: rgba(15,23,42,0.85);
          border: 1px solid #6366f1;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #e0e7ff;
          z-index: 6;
          cursor: pointer;
        }
        .img-prev { left: 10px; }
        .img-next { right: 10px; }

        .indicators {
          position: absolute;
          bottom: 10px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 8px;
          z-index: 7;
        }
        .dot {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          border: none;
          background: rgba(255,255,255,0.35);
          cursor: pointer;
        }
        .dot.active { background: #6366f1; }

        .lead-text {
          color: #bfcbe0;
          font-size: 0.95rem;
          text-align: center;
          margin-top: 12px;
        }

        .social-right { display: flex; flex-direction: column; gap: 10px; }
        .section-title { font-size: 1.2rem; font-weight: 600; text-align: center; background: linear-gradient(45deg,#6366f1,#8b5cf6); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .section-sub { color: #a7b4c8; text-align: center; margin-bottom: 6px; }

        .social-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }
        .social-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 12px;
          border-radius: 10px;
          text-decoration: none;
          color: #e2e8f0;
          background: linear-gradient(135deg, rgba(15,23,42,0.86), rgba(30,41,59,0.56));
          border: 2px solid transparent;
          transition: transform 0.18s ease, box-shadow 0.18s ease;
          min-height: 84px;
          position: relative;
          overflow: hidden;
        }
        .social-card::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 60%);
          opacity: 0;
          transition: opacity 0.3s ease;
          animation: glow-move 4s linear infinite;
        }
        .social-card:hover::before {
          opacity: 1;
        }
        .social-card:hover { transform: translateY(-6px); box-shadow: 0 8px 20px rgba(0,0,0,0.45); }
        .social-icon { font-size: 1.25rem; margin-bottom: 6px; z-index: 1; }
        .social-label { font-size: 0.86rem; font-weight: 600; z-index: 1; }

        @keyframes glow-move {
          0% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(20%, 20%) rotate(45deg); }
          50% { transform: translate(40%, 40%) rotate(90deg); }
          75% { transform: translate(20%, 20%) rotate(135deg); }
          100% { transform: translate(0, 0) rotate(180deg); }
        }

        /* About slide */
        .about-left { display: flex; flex-direction: column; gap: 12px; align-items: stretch; }
        .personal-block { padding: 6px 2px; }
        .name { font-size: clamp(1.1rem, 2.4vw, 1.6rem); margin: 0 0 6px 170px; font-weight: 700; background: linear-gradient(45deg,#6366f1,#8b5cf6); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .role-pill { display:inline-flex; align-items:center; gap:8px; background: linear-gradient(45deg, rgba(99,102,241,0.12), rgba(139,92,246,0.08)); padding:6px 10px; border-radius: 10px; margin-bottom: 10px; margin-left: 150px; border: 1px solid rgba(99,102,241,0.08); }
        .about-text-end { color: #bfcbe0; line-height: 1.45; margin-top: 20px; }
        // .location { color: #94a3b8; margin-top: 8px; display: flex; align-items: center; }

        .about-right { display: flex; flex-direction: column; gap: 12px; justify-content: space-between; min-height: 400px; }
        .features-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; }
        .feature-card {
          display: flex; gap: 8px; align-items: center; padding: 8px;
          border-radius: 8px; background: rgba(15,23,42,0.5);
          border: 1px solid rgba(99,102,241,0.06);
          min-height: 60px;
          transition: transform 0.18s ease, box-shadow 0.18s ease;
        }
        .feature-card:hover { transform: translateY(-6px); box-shadow: 0 8px 20px rgba(0,0,0,0.45); }
        .feature-icon { background: linear-gradient(45deg,#6366f1,#8b5cf6); padding: 6px; border-radius: 5px; min-width: 36px; min-height: 36px; display: flex; align-items: center; justify-content: center; }
        .feature-title { color: #e6eefc; font-weight: 700; font-size: 0.9rem; }

        .slide-indicators { display: flex; justify-content: center; gap: 8px; margin-top: 12px; }
        .indicator { width: 10px; height: 10px; border-radius: 50%; background: #475569; border: none; cursor: pointer; }
        .indicator.active { background: #6366f1; }

        /* Responsive */
        @media (max-width: 920px) {
          .slide { grid-template-columns: 1fr !important; }
          .social-slide { grid-template-columns: 1fr !important; }
          .profile-image { height: 260px; object-fit: cover; }
          .social-grid { grid-template-columns: repeat(3, 1fr); }
          .features-grid { grid-template-columns: repeat(2, 1fr); }
          .carousel-wrapper { max-width: 100%; padding: 0 10px; }
          .about-right { min-height: auto; }
        }

        @media (max-width: 600px) {
          .profile-image { height: 180px; object-fit: contain; }
          .image-card { max-width: 260px; }
          .social-grid { grid-template-columns: repeat(2, 1fr); }
          .features-grid { grid-template-columns: 1fr; }
          .feature-card { min-height: 50px; }
          .feature-title { font-size: 0.8rem; }
          .about-text-end { font-size: 0.9rem; }
        }

        @media (max-width: 420px) {
          .profile-image { height: 150px; object-fit: contain; }
          .image-card { max-width: 220px; }
          .features-grid { grid-template-columns: 1fr; }
          .social-grid { grid-template-columns: 1fr; }
          .nav-arrow { width: 32px; height: 32px; }
          .feature-title { font-size: 0.75rem; }
          .about-text-end { font-size: 0.85rem; }
        }
      `}</style>
    </div>
  );
};

export default About;