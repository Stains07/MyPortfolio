// MyPortfolio.js
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiDatabase, FiCloud, FiGithub } from 'react-icons/fi';
import { AiOutlineRobot } from 'react-icons/ai';
import { SiPython, SiReact, SiDjango, SiMysql, SiNumpy } from 'react-icons/si';

// Import Components
import Navbar from './components/Navbar';
import Home from './components/Technologies';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [slideIndex, setSlideIndex] = useState(0);

  // Your existing data objects (profileData, colors, slides) remain the same
  const profileData = {
    personal: {
      name: "STAINS DAS",
      location: "Kerala, India",
      linkedin: "https://linkedin.com/in/stains-das-74b641263",
      whatsapp: "https://wa.me/919074472372",
      facebook: "https://www.facebook.com/share/1YAGuNAJqb/",
      instagram: "https://www.instagram.com/stains07?igsh=NWZkZmVlMDJpNWZn",
      x: "https://x.com/stainsdas",
      github: "https://github.com/stainsdas",
      resume: "https://example.com/stainsdas-resume.pdf",
      objective: "I am an Artificial Intelligence and Machine Learning Engineer passionate about building intelligent solutions. With expertise in AI/ML and full-stack development, I create innovative projects that solve real-world problems.",
      about: "I am Stains Das, an AI and ML Engineer based in Kerala, India. I hold a B.E. in Computer Science from Mar Ephraem College of Engineering (2018-2022). My passion lies in leveraging AI and machine learning to develop cutting-edge solutions, complemented by my skills in full-stack development using modern technologies like React and Django."
    },
    skills: {
      'Programming': [
        { name: 'Python', icon: <SiPython /> },
        { name: 'C#', icon: <FiCode /> },
        { name: 'C', icon: <FiCode /> },
        { name: 'C++', icon: <FiCode /> }
      ],
      'Frontend': [
        { name: 'React', icon: <SiReact /> },
        { name: 'JavaScript', icon: <FiCode /> },
        { name: 'HTML5', icon: <FiCode /> },
        { name: 'CSS3', icon: <FiCode /> },
        { name: 'Tailwind', icon: <FiCode /> }
      ],
      'Backend': [
        { name: 'Django', icon: <SiDjango /> },
        { name: 'REST APIs', icon: <FiCloud /> },
        { name: 'Node.js', icon: <FiCode /> },
        { name: 'JWT Auth', icon: <FiCode /> }
      ],
      'Database': [
        { name: 'MySQL', icon: <SiMysql /> },
        { name: 'Oracle', icon: <FiDatabase /> },
        { name: 'MS SQL', icon: <FiDatabase /> }
      ],
      'AI/ML': [
        { name: 'TensorFlow', icon: <FiCode /> },
        { name: 'Scikit-learn', icon: <FiCode /> },
        { name: 'Pandas', icon: <FiCode /> },
        { name: 'NumPy', icon: <SiNumpy /> }
      ],
      'Others': [
        { name: 'Postman', icon: <FiCode /> },
        { name: 'GitHub', icon: <FiGithub /> },
        { name: 'Docker', icon: <FiCode /> },
        { name: 'Git', icon: <FiCode /> },
        { name: 'CI/CD', icon: <FiCode /> },
        { name: 'Agile/Scrum', icon: <FiCode /> }
      ]
    },
    projects: [
      { title: "Clinic Management System", tech: ["React", "Django", "MySQL"], description: "Role-based system with real-time appointment scheduling", link: "https://cmsproject-mu.vercel.app/" },
      { title: "Network Anomaly Detection", tech: ["Python", "ML"], description: "ML-powered security system", link: "https://example.com/network-anomaly" },
      { title: "E-Commerce Platform", tech: ["React", "Node.js"], description: "Online shopping platform", link: "https://example.com/ecommerce" },
      { title: "Weather App", tech: ["React", "API"], description: "Real-time weather updates", link: "https://example.com/weather" },
      { title: "Task Manager", tech: ["Django", "PostgreSQL"], description: "Task tracking application", link: "https://example.com/task-manager" },
      { title: "Chat Application", tech: ["Node.js", "Socket.io"], description: "Real-time messaging app", link: "https://example.com/chat-app" }
    ],
    contact: { linkedin: "https://linkedin.com/in/stains-das-74b641263", whatsapp: "https://wa.me/919074472372", x: "https://x.com/stainsdas" }
  };

  const colors = [
    { color: '#EF4444', gradient: 'linear-gradient(45deg, #ef4444, #f87171)' },
    { color: '#10B981', gradient: 'linear-gradient(45deg, #10b981, #34d399)' },
    { color: '#3B82F6', gradient: 'linear-gradient(45deg, #3b82f6, #60a5fa)' },
    { color: '#F59E0B', gradient: 'linear-gradient(45deg, #f59e0b, #fbbf24)' },
    { color: '#8B5CF6', gradient: 'linear-gradient(45deg, #8b5cf6, #a78bfa)' },
    { color: '#EC4899', gradient: 'linear-gradient(45deg, #ec4899, #f472b6)' }
  ];

  const slides = [
    {
      title: "Artificial Intelligence & Machine Learning",
      icon: <AiOutlineRobot />,
      color: colors[0].color,
      description: "Harnessing the power of AI and ML to create intelligent systems that learn, adapt, and solve complex real-world problems efficiently.",
      points: [
        "Deep Learning: Building neural networks for advanced pattern recognition.",
        "NLP: Enabling machines to understand and generate human language.",
        "Computer Vision: Developing systems for image and video analysis.",
        "Reinforcement Learning: Creating agents that optimize decision-making."
      ],
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485"
    },
    // ... other slides data (same as your original)
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const SectionContainer = ({ children, id }) => (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        background: 'linear-gradient(145deg, rgba(16,18,27,0.8) 0%, rgba(32,34,46,0.6) 100%)',
        backdropFilter: 'blur(12px)',
        borderRadius: '20px',
        boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
        padding: '2rem',
        marginBottom: '2rem',
        marginTop: '-35px',
      }}
    >
      {children}
    </motion.div>
  );

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'home':
        return <Home slideIndex={slideIndex} setSlideIndex={setSlideIndex} slides={slides} />;
      case 'about':
        return <About profileData={profileData} colors={colors} />;
      case 'skills':
        return <Skills profileData={profileData} colors={colors} />;
      case 'projects':
        return <Projects profileData={profileData} colors={colors} />;
      case 'contact':
        return <Contact profileData={profileData} colors={colors} />;
      default:
        return <Home slideIndex={slideIndex} setSlideIndex={setSlideIndex} slides={slides} />;
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: 'radial-gradient(circle at top, #0f172a 0%, #020617 100%)', color: '#e2e8f0', fontFamily: "'Inter', sans-serif" }}>
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main style={{ paddingTop: '80px', maxWidth: '1200px', margin: '0 auto', padding: '6rem 2rem 2rem' }}>
        <SectionContainer>
          {renderActiveSection()}
        </SectionContainer>
      </main>
    </div>
  );
};

export default Portfolio;