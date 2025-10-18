// About.js
import React, { useEffect, useState } from 'react';
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
  const [currentSlide, setCurrentSlide] = useState(1); // Start with Social Media
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [reappearKey, setReappearKey] = useState(0); // used to replay animations every 15s

  // images array (use at least 3 images)
  const images = [img1, img2, img3, img4, img5].filter(Boolean);

  // socialLinks (order & icons/colors as requested)
  const socialLinks = [
    { icon: <FiPhone />, label: 'WhatsApp', link: profileData.personal?.whatsapp || 'https://wa.me/919074472372', color: '#25d366' },
    { icon: <FiFacebook />, label: 'Facebook', link: profileData.personal?.facebook || 'https://www.facebook.com/share/1YAGuNAJqb/', color: '#1877f2' },
    { icon: <FiInstagram />, label: 'Instagram', link: profileData.personal?.instagram || 'https://www.instagram.com/stains07?igsh=NWZkZmVlMDJpNWZn', color: '#e4409aff' },
    { icon: <FiLinkedin />, label: 'LinkedIn', link: profileData.personal?.linkedin || 'https://linkedin.com/in/stains-das-74b641263', color: '#0077b5' },
    { icon: <FiGithub />, label: 'GitHub', link: profileData.personal?.github || 'https://github.com/stainsdas', color: '#000000' },
    { icon: <BsSkype />, label: 'Skype', link: 'skype:Stains07?chat', color: '#3ac1f2ff' },
    { icon: <FiMail />, label: 'Email', link: `mailto:${profileData.personal?.email || 'stainsdas007@gmail.com'}`, color: '#ea4335' },
    { icon: <FiTwitter />, label: 'X', link: profileData.personal?.x || 'https://x.com/stainsdas', color: '#6e5494' },
    { icon: <FiFileText />, label: 'Resume', link: profileData.personal?.resume || 'https://example.com/stainsdas-resume.pdf', color: '#f6906bff' },
  ];

  // 9 features for About slide with small descriptions
  const features = [
    { icon: <AiOutlineRobot style={{ color: '#ff6b6b' }} />, title: 'AI Development', desc: 'Building intelligent systems and neural networks' },
    { icon: <AiOutlineCode style={{ color: '#4ecdc4' }} />, title: 'Machine Learning', desc: 'Creating predictive models and algorithms' },
    { icon: <SiOpenai style={{ color: '#45b7d1' }} />, title: 'LLM', desc: 'Large language model integrations' },
    { icon: <SiHuggingface style={{ color: '#ff9f1c' }} />, title: 'Gemini / Hugging Face', desc: 'Working with large model ecosystems' },
    { icon: <SiOpenai style={{ color: '#2ec4b6' }} />, title: 'GenAI', desc: 'Generative AI solutions & pipelines' },
    { icon: <AiOutlineCloudServer style={{ color: '#e71d36' }} />, title: 'Frameworks', desc: 'TensorFlow / PyTorch / FastAPI / Flask' },
    { icon: <SiTensorflow style={{ color: '#ffbf69' }} />, title: 'Deep Learning', desc: 'CNNs, RNNs, transformers and architectures' },
    { icon: <SiPytorch style={{ color: '#cbf3f0' }} />, title: 'Neural Networks', desc: 'Custom model design & training' },
    { icon: <AiOutlineBarChart style={{ color: '#f25f5c' }} />, title: 'Data Science', desc: 'EDA, feature engineering & model evaluation' }
  ];

  // Slide auto-rotation (30s)
  useEffect(() => {
    const id = setInterval(() => {
      setCurrentSlide(prev => (prev === 1 ? 0 : 1));
    }, 30000);
    return () => clearInterval(id);
  }, []);

  // Re-trigger animation every 15s
  useEffect(() => {
    const reappearInterval = setInterval(() => {
      setReappearKey(prev => prev + 1);
    }, 15000);
    return () => clearInterval(reappearInterval);
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
  const goNextSlide = () => setCurrentSlide(prev => (prev === 1 ? 0 : 1));
  const goPrevSlide = () => setCurrentSlide(prev => (prev === 1 ? 0 : 1));
  const goNextImage = () => setCurrentImageIndex(prev => (prev + 1) % images.length);
  const goPrevImage = () => setCurrentImageIndex(prev => (prev - 1 + images.length) % images.length);

  const personal = profileData.personal || {};

  return (
    <div className="about-root">
      <h2 className="about-title">About Me</h2>

      {/* prev/next arrows */}
      <button className="nav-arrow left" onClick={goPrevSlide} aria-label="previous slide"><FiChevronLeft size={18} /></button>
      <button className="nav-arrow right" onClick={goNextSlide} aria-label="next slide"><FiChevronRight size={18} /></button>

      <div className="carousel-wrapper">
        <AnimatePresence mode="wait">
          {/* Social Slide (currentSlide === 1) */}
          {currentSlide === 1 && (
            <motion.section
              key={`social-${reappearKey}`}
              className="slide social-slide"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div className="social-left" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6 }}>
                <div className="image-card">
                  <button className="img-nav img-prev" onClick={goPrevImage} aria-label="previous image"><FiChevronLeft size={12} /></button>
                  <button className="img-nav img-next" onClick={goNextImage} aria-label="next image"><FiChevronRight size={12} /></button>

                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentImageIndex}
                      src={images[currentImageIndex]}
                      alt={`profile-${currentImageIndex}`}
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
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

              <motion.div className="social-right" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
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

          {/* About Slide (currentSlide === 0) */}
          {currentSlide === 0 && (
            <motion.section
              key={`about-${reappearKey}`}
              className="slide about-slide"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div className="about-left" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6 }}>
                <div className="image-card">
                  <button className="img-nav img-prev" onClick={goPrevImage} aria-label="previous image"><FiChevronLeft size={12} /></button>
                  <button className="img-nav img-next" onClick={goNextImage} aria-label="next image"><FiChevronRight size={12} /></button>

                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentImageIndex}
                      src={images[currentImageIndex]}
                      alt={`profile-${currentImageIndex}`}
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
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

                <div className="personal-block">
                  <h1 className="name">{personal.name || 'STAINS DAS'}</h1>
                  <div className="role-pill">
                    <AiOutlineRobot style={{ marginRight: 8 }} />
                    <span>AI & ML Engineer</span>
                  </div>
                  <p className="about-text">
                    Hello! I'm Stains Das, an Artificial Intelligence and Machine Learning Engineer from Kerala, India. I'm passionate about building intelligent solutions that solve real-world problems. With expertise in AI/ML, full-stack development, and data science, I create innovative projects that make a difference.
                  </p>
                  <p className="location"><FiMapPin style={{ marginRight: 6 }} />{personal.location || 'Kerala, India'}</p>
                </div>
              </motion.div>

              <motion.div className="about-right" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
                <h3 className="section-title">Key Technologies & Expertise</h3>

                <div className="features-grid">
                  {features.map((f, idx) => (
                    <div className="feature-card" key={f.title}>
                      <div className="feature-icon">{f.icon}</div>
                      <div>
                        <div className="feature-title">{f.title}</div>
                        <div className="feature-desc">{f.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
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
        .about-root {
          border-radius: 30px;
          min-height: calc(100vh - 7.5rem);
          padding: 1rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          max-width: 1200px;
          margin: -6rem auto;
          margin-left: -60px;
          margin-right: -60px;
          background: linear-gradient(135deg, #161515ff 0%, #2d323bff 100%);
          color: #e6eefc;
          position: relative;
        }

        .about-title {
          font-size: clamp(1.5rem, 3vw, 2rem);
          font-weight: 500;
          margin-bottom: 1rem;
          background: linear-gradient(45deg, #e0e7ff 30%, #818cf8 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-align: center;
        }

        .nav-arrow {
          position: absolute;
          top: 40%;
          transform: translateY(-50%);
          background: rgba(15,23,42,0.9);
          border: 1px solid #6366f1;
          border-radius: 50%;
          width: 25px;
          height: 25px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #e0e7ff;
          cursor: pointer;
          z-index: 10;
        }
        .nav-arrow.left { left: 5px; }
        .nav-arrow.right { right: 5px; }

        .carousel-wrapper { width: 100%; max-width: 1100px; margin: 0 auto; }

        .slide { display: grid; grid-template-columns: 1fr 2fr; gap: 1rem; align-items: start; padding: 0.5rem; }

        .image-card {
          position: relative;
          width: 100%;
          max-width: 300px;
          border-radius: 12px;
          overflow: hidden;
          margin: 0 auto;
        }

        .profile-image {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }

        .img-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(15,23,42,0.85);
          border: 1px solid #6366f1;
          border-radius: 50%;
          width: 25px;
          height: 25px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #e0e7ff;
          cursor: pointer;
          z-index: 6;
        }
        .img-prev { left: 10px; }
        .img-next { right: 10px; }

        .indicators {
          position: absolute;
          bottom: 10px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 6px;
          z-index: 7;
        }
        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255,255,255,0.35);
          cursor: pointer;
        }
        .dot.active { background: #6366f1; }

        .lead-text {
          color: #94a3b8;
          font-size: clamp(0.8rem, 1.5vw, 0.9rem);
          line-height: 1.5;
          margin-top: 1rem;
          text-align: center;
        }

        .social-right, .about-right { display: flex; flex-direction: column; gap: 0.5rem; }
        .section-title {
          font-size: clamp(1.2rem, 2.5vw, 1.5rem);
          font-weight: 600;
          background: linear-gradient(45deg, #6366f1, #8b5cf6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 0.5rem;
          text-align: center;
        }
        .section-sub {
          color: #94a3b8;
          font-size: 0.9rem;
          line-height: 1.5;
          margin-bottom: 1rem;
          text-align: center;
        }

        .social-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.6rem; }
        .features-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.6rem; }
        .social-card {
          background: linear-gradient(135deg, rgba(15,23,42,0.8), rgba(30,41,59,0.6));
          border-radius: 8px;
          padding: 0.6rem;
          border: 1px solid transparent;
          box-shadow: 0 3px 12px rgba(0,0,0,0.1);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: #e2e8f0;
          text-decoration: none;
          transition: all 0.3s ease;
          height: 80px;
          position: relative;
          overflow: hidden;
        }
        .social-card:hover {
          transform: scale(1.05);
          box-shadow: 0 5px 18px rgba(0,0,0,0.2);
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
        @keyframes glow-move {
          0% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(20%, 20%) rotate(45deg); }
          50% { transform: translate(40%, 40%) rotate(90deg); }
          75% { transform: translate(20%, 20%) rotate(135deg); }
          100% { transform: translate(0, 0) rotate(180deg); }
        }
        .social-icon { font-size: 1.2rem; margin-bottom: 0.3rem; z-index: 1; }
        .social-label { font-size: 0.75rem; font-weight: 600; z-index: 1; }

        .about-left { display: flex; flex-direction: column; align-items: center; }
        .name {
          font-size: clamp(1.1rem, 2.4vw, 1.6rem);
          font-weight: 700;
          background: linear-gradient(45deg, #6366f1, #8b5cf6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin: 0.5rem 0 0.3rem;
        }
        .role-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: linear-gradient(45deg, rgba(99,102,241,0.12), rgba(139,92,246,0.08));
          padding: 0.4rem 0.8rem;
          border-radius: 10px;
          margin-bottom: 0.5rem;
          border: 1px solid rgba(99,102,241,0.08);
        }
        .about-text {
          color: #bfcbe0;
          font-size: 0.9rem;
          line-height: 1.45;
          text-align: center;
          margin-bottom: 0.5rem;
        }
        .location { color: #94a3b8; display: flex; align-items: center; gap: 0.4rem; font-size: 0.9rem; }

        .feature-card {
          background: rgba(15,23,42,0.5);
          border-radius: 8px;
          padding: 0.6rem;
          border: 1px solid rgba(99,102,241,0.06);
          display: flex;
          gap: 0.6rem;
          align-items: center;
          transition: all 0.3s ease;
        }
        .feature-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 5px 18px rgba(0,0,0,0.2);
        }
        .feature-icon {
          background: linear-gradient(45deg, #6366f1, #8b5cf6);
          padding: 0.5rem;
          border-radius: 6px;
          min-width: 36px;
          min-height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .feature-title { color: #e6eefc; font-weight: 700; font-size: 0.9rem; }
        .feature-desc { color: #aab7ca; font-size: 0.75rem; margin-top: 0.2rem; }

        .slide-indicators { display: flex; justify-content: center; gap: 8px; margin-top: 12px; }
        .indicator { width: 8px; height: 8px; border-radius: 50%; background: #475569; cursor: pointer; }
        .indicator.active { background: #6366f1; }

        /* Responsive */
        @media (max-width: 920px) {
          .slide { grid-template-columns: 1fr; }
          .social-slide { grid-template-columns: 1fr; }
          .features-grid { grid-template-columns: repeat(2, 1fr); }
          .image-card { max-width: 300px; }
          .profile-image { height: 200px; }
        }

        @media (max-width: 600px) {
          .social-grid { grid-template-columns: repeat(3, 1fr); gap: 0.4rem; }
          .social-card { padding: 0.4rem; height: 60px; }
          .social-icon { font-size: 1rem; margin-bottom: 0.2rem; }
          .social-label { font-size: 0.65rem; }
          .features-grid { grid-template-columns: 1fr; }
          .image-card { max-width: 260px; }
          .profile-image { height: 180px; }
          .feature-desc { font-size: 0.7rem; }
        }

        @media (max-width: 420px) {
          .social-grid { grid-template-columns: repeat(3, 1fr); gap: 0.3rem; }
          .social-card { padding: 0.3rem; height: 50px; }
          .social-icon { font-size: 0.9rem; margin-bottom: 0.1rem; }
          .social-label { font-size: 0.6rem; }
          .image-card { max-width: 220px; }
          .profile-image { height: 150px; }
          .nav-arrow { width: 32px; height: 32px; }
        }
      `}</style>
    </div>
  );
};

export default About;