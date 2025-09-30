import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiCode, FiDatabase, FiCloud, FiLogOut, FiSearch, FiFileText, FiPhone, FiMapPin, FiFacebook, FiInstagram, FiTwitter, FiBarChart2 } from 'react-icons/fi';
import { AiOutlineRobot } from 'react-icons/ai';
import { SiPython, SiReact, SiDjango, SiMysql, SiNumpy } from 'react-icons/si';
import StainsPhoto from './images/Stains_Photo.jpeg';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [slideIndex, setSlideIndex] = useState(0);

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
    {
      title: "Python Programming",
      icon: <SiPython />,
      color: colors[1].color,
      description: "A versatile language driving innovation in AI, web development, automation, and data science with its simplicity and robust libraries.",
      points: [
        "Data Analysis: Leveraging Pandas and NumPy for insights.",
        "Web Scraping: Extracting data with BeautifulSoup and Scrapy.",
        "Automation: Streamlining tasks with scripts and bots.",
        "Machine Learning: Implementing models with Scikit-learn."
      ],
      image: "https://img.freepik.com/premium-photo/blue-snake-with-yellow-tail-is-black-background-with-text-blue-snake_1348187-22919.jpg?ga=GA1.1.152689599.1735543703&semt=ais_hybrid&w=740"
    },
    {
      title: "React Development",
      icon: <SiReact />,
      color: colors[2].color,
      description: "Crafting dynamic, responsive, and scalable user interfaces for modern web applications using React's component-based architecture.",
      points: [
        "Components: Reusable UI building blocks for modularity.",
        "State Management: Efficient data handling with Hooks and Redux.",
        "Routing: Seamless navigation with React Router.",
        "Performance: Optimizing with memoization and lazy loading."
      ],
      image: "https://img.freepik.com/premium-photo/react-js-programming-language-with-laptop-code-script-screen_1020200-5413.jpg?uid=R181032132&ga=GA1.1.152689599.1735543703&semt=ais_hybrid&w=740"
    },
    {
      title: "Power BI",
      icon: <FiBarChart2 />,
      color: colors[3].color,
      description: "Transforming raw data into interactive dashboards and insightful visualizations to empower data-driven decision-making.",
      points: [
        "Data Modeling: Structuring data for efficient analysis.",
        "Dashboards: Creating interactive reports for stakeholders.",
        "DAX Queries: Advanced calculations for complex metrics.",
        "Real-Time Analytics: Monitoring live data streams."
      ],
      image: "https://cdn.dribbble.com/userupload/14499051/file/original-3f03072ec3d19b3f4b86f52d6c3338d5.png?format=webp&resize=700x525&vertical=center"
    },
    {
      title: "Data Science",
      icon: <FiDatabase />,
      color: colors[4].color,
      description: "Extracting actionable insights from complex datasets using statistical methods, machine learning, and visualization techniques.",
      points: [
        "Statistical Analysis: Uncovering trends and correlations.",
        "Predictive Modeling: Forecasting with ML algorithms.",
        "Data Cleaning: Ensuring data quality and consistency.",
        "Visualization: Communicating insights with Matplotlib and Seaborn."
      ],
      image: "https://cdn.pixabay.com/photo/2024/04/18/06/43/artificial-intelligence-8703605_1280.jpg"
    },
    {
      title: "REST APIs",
      icon: <FiCloud />,
      color: colors[5].color,
      description: "Designing and deploying scalable, secure APIs to enable seamless communication between applications and services.",
      points: [
        "CRUD Operations: Building robust endpoints for data management.",
        "Authentication: Securing APIs with JWT and OAuth.",
        "Rate Limiting: Ensuring performance under high traffic.",
        "Documentation: Creating clear API specs with Swagger."
      ],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa"
    },
    {
      title: "Django Framework",
      icon: <SiDjango />,
      color: colors[0].color,
      description: "Developing secure, scalable, and rapid web applications using Django's powerful backend framework and ORM capabilities.",
      points: [
        "ORM: Simplifying database interactions with models.",
        "Authentication: Built-in user management and security.",
        "Admin Panel: Rapid prototyping with Django Admin.",
        "REST Framework: Building APIs with DRF for integration."
      ],
      image: "https://images.pexels.com/photos/6963944/pexels-photo-6963944.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
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

  return (
    <div style={{ minHeight: '100vh', background: 'radial-gradient(circle at top, #0f172a 0%, #020617 100%)', color: '#e2e8f0', fontFamily: "'Inter', sans-serif" }}>
      {/* Navigation */}
      <nav style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        backdropFilter: 'blur(12px)',
        zIndex: 1000,
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        padding: '1rem 0'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1rem'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '12px',
            padding: '0.5rem 1rem'
          }}>
            <FiSearch style={{ marginRight: '0.5rem', color: '#94a3b8' }} />
            <input
              type="text"
              placeholder="Search..."
              style={{ background: 'transparent', border: 'none', color: '#e2e8f0', outline: 'none' }}
            />
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((label) => (
              <a
                key={label}
                href="#"
                style={{
                  color: activeSection === label.toLowerCase() ? 'white' : '#94a3b8',
                  fontWeight: 600,
                  textDecoration: 'none',
                  padding: '0.5rem 1rem'
                }}
                onClick={() => setActiveSection(label.toLowerCase())}
              >
                {label}
              </a>
            ))}
          </div>
          <button
            style={{
              padding: '0.5rem 1rem',
              borderRadius: '12px',
              background: 'linear-gradient(45deg, #8B0000, #A52A2A)',
              border: 'none',
              color: 'white',
              fontWeight: 600
            }}
            onClick={() => alert('Logged out')}
          >
            <FiLogOut style={{ marginRight: '0.5rem' }} /> Logout
          </button>
        </div>
      </nav>

      <main style={{ paddingTop: '80px', maxWidth: '1200px', margin: '0 auto', padding: '6rem 2rem 2rem' }}>
        {/* Home Section */}
        {activeSection === 'home' && (
          <SectionContainer>
            <div style={{ marginTop: '3rem' }}>
              <h2 style={{
                marginTop:'-50px',
                fontSize: '2.5rem',
                fontWeight: 700,
                marginBottom: '2rem',
                background: 'linear-gradient(45deg, #e0e7ff 30%, #818cf8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textAlign: 'center'
              }}>
                Technologies I Work With
              </h2>
              <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '15px', minHeight: '500px'}}>
                <AnimatePresence>
                  <motion.div
                    key={slideIndex}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.7, ease: 'easeInOut' }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      background: 'rgba(15,23,42,0.6)',
                      padding: '2.5rem',
                      borderRadius: '15px',
                      border: `1px solid ${slides[slideIndex].color}`,
                      boxShadow: `0 0 20px ${slides[slideIndex].color}`,
                      minHeight: '400px',
                    }}
                  >
                    <div style={{ flex: 1, paddingRight: '2rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
                        <span style={{ fontSize: '2.5rem', marginRight: '1rem', color: slides[slideIndex].color }}>{slides[slideIndex].icon}</span>
                        <h3 style={{ fontSize: '1.8rem', fontWeight: 600, color: '#e0e7ff' }}>
                          {slides[slideIndex].title}
                        </h3>
                      </div>
                      <p style={{ color: '#94a3b8', marginBottom: '1.5rem', fontSize: '1.1rem', lineHeight: 1.6 }}>
                        {slides[slideIndex].description}
                      </p>
                      <ul style={{ listStyle: 'none', padding: 0 }}>
                        {slides[slideIndex].points.map((point, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            style={{ display: 'flex', alignItems: 'center', marginBottom: '0.75rem', fontSize: '1rem' }}
                          >
                            <span style={{ color: slides[slideIndex].color, marginRight: '0.5rem' }}>•</span>
                            <span>{point}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                    <motion.img
                      src={slides[slideIndex].image}
                      alt={slides[slideIndex].title}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.7 }}
                      style={{ width: '400px', height: '300px', borderRadius: '10px', objectFit: 'cover', border: `2px solid ${slides[slideIndex].color}` }}
                    />
                  </motion.div>
                </AnimatePresence>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '1.5rem' }}>
                  {slides.map((_, idx) => (
                    <button
                      key={idx}
                      style={{
                        width: '12px',
                        height: '12px',
                        borderRadius: '50%',
                        background: idx === slideIndex ? slides[slideIndex].color : '#94a3b8',
                        border: 'none',
                        cursor: 'pointer',
                        transition: 'background 0.3s'
                      }}
                      onClick={() => setSlideIndex(idx)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </SectionContainer>
        )}

        {/* About Section */}
        {activeSection === 'about' && (
          <SectionContainer>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: 700,
              marginBottom: '1.5rem',
              background: 'linear-gradient(45deg, #e0e7ff 30%, #818cf8 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textAlign: 'center'
            }}>
              About Me
            </h2>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              style={{
                display: 'flex',
                gap: '2rem',
                alignItems: 'flex-start',
                flexWrap: 'wrap'
              }}
            >
              {/* Left Side: Profile Details */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                style={{
                  flex: '1 1 40%',
                  minWidth: '300px',
                  textAlign: 'left'
                }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  style={{
                    display: 'inline-block',
                    background: 'linear-gradient(45deg,rgb(224, 224, 228), #8b5cf6)',
                    borderRadius: '50%',
                    padding: '0.5rem',
                    marginBottom: '1rem'
                  }}
                >
                <img src={StainsPhoto}
                    style={{
                        width: '150px',
                        height: '150px',
                        borderRadius: '50%',
                        border: '3px solid #0f172a'
                    }}
                    alt="Profile"
                    />
                </motion.div>
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  style={{ fontSize: '1.8rem', fontWeight: 600, color: '#e0e7ff', marginBottom: '0.5rem' }}
                >
                  {profileData.personal.name}
                </motion.h3>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    background: 'rgba(15,23,42,0.6)',
                    borderRadius: '12px',
                    padding: '0.4rem 0.8rem',
                    border: '1px solid rgba(99,102,241,0.2)',
                    boxShadow: '0 0 12px rgba(99,102,241,0.5)',
                    marginBottom: '1rem'
                  }}
                >
                  <AiOutlineRobot style={{ marginRight: '0.4rem', color: '#818cf8', fontSize: '1.2rem' }} /> AI & ML Engineer
                </motion.div>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  style={{ color: '#94a3b8', fontSize: '1rem', lineHeight: 1.6, marginBottom: '1rem' }}
                >
                  {profileData.personal.objective}
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1 }}
                  style={{ color: '#94a3b8', fontSize: '1rem', display: 'flex', alignItems: 'center' }}
                >
                  <FiMapPin style={{ marginRight: '0.4rem' }} />
                  {profileData.personal.location}
                </motion.p>
              </motion.div>

              {/* Right Side: Social/Contact Boxes */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                style={{
                  flex: '1 1 50%',
                  minWidth: '300px',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '1rem'
                }}
              >
                {[
                  { icon: <FiLinkedin />, label: 'LinkedIn', link: profileData.personal.linkedin },
                  { icon: <FiMail />, label: 'Email', link: `mailto:${profileData.personal.email || 'stainsdas007@gmail.com'}` },
                  { icon: <FiPhone />, label: 'WhatsApp', link: profileData.personal.whatsapp },
                  { icon: <FiGithub />, label: 'GitHub', link: profileData.personal.github },
                  { icon: <FiFacebook />, label: 'Facebook', link: profileData.personal.facebook },
                  { icon: <FiInstagram />, label: 'Instagram', link: profileData.personal.instagram },
                  { icon: <FiTwitter />, label: 'X', link: profileData.personal.x },
                  { icon: <FiFileText />, label: 'Resume', link: profileData.personal.resume }
                ].map(({ icon, label, link }, index) => (
                  <motion.a
                    key={label}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    style={{
                      background: 'rgba(15,23,42,0.6)',
                      borderRadius: '12px',
                      padding: '1rem',
                      border: `1px solid ${colors[index % colors.length].color}`,
                      boxShadow: `0 0 12px ${colors[index % colors.length].color}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexDirection: 'column',
                      textDecoration: 'none',
                      color: '#e2e8f0',
                      transition: 'all 0.3s ease',
                      textAlign: 'center'
                    }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <span style={{ fontSize: '1.2rem', marginBottom: '0.3rem' }}>{icon}</span>
                    <span style={{ fontSize: '0.8rem' }}>{label}</span>
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </SectionContainer>
        )}

        {/* Skills Section */}
        {activeSection === 'skills' && (
          <SectionContainer>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: 700,
              marginBottom: '2rem',
              background: 'linear-gradient(45deg, #e0e7ff 30%, #818cf8 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textAlign: 'center',
            marginTop: '-10px',

            }}>
              Technical Skills
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1.5rem'
            }}>
              {Object.entries(profileData.skills).map(([category, skills], index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  style={{
                    background: 'rgba(15,23,42,0.6)',
                    backdropFilter: 'blur(12px)',
                    borderRadius: '15px',
                    padding: '1.5rem',
                    border: `1px solid ${colors[index % colors.length].color}`,
                    boxShadow: `0 0 20px ${colors[index % colors.length].color}`,
                    transition: 'all 0.3s ease',

                  }}
                >
                  <h3 style={{
                    fontSize: '1.25rem',
                    fontWeight: 600,
                    marginBottom: '1rem',
                    color: colors[index % colors.length].color
                  }}>
                    {category}
                  </h3>
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.5rem'
                  }}>
                    {skills.map(skill => (
                      <span
                        key={skill.name}
                        style={{
                          background: 'rgba(99,102,241,0.1)',
                          padding: '0.5rem 1rem',
                          borderRadius: '20px',
                          fontSize: '0.9rem',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem'
                        }}
                      >
                        {skill.icon && <span style={{ color: colors[index % colors.length].color }}>{skill.icon}</span>}
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </SectionContainer>
        )}

        {/* Projects Section */}
        {activeSection === 'projects' && (
          <SectionContainer>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: 700,
              marginBottom: '2rem',
              background: 'linear-gradient(45deg, #e0e7ff 30%, #818cf8 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textAlign: 'center'
            }}>
              Projects
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
              {profileData.projects.map((project, index) => {
                const { color } = colors[index % colors.length];
                return (
                  <motion.a
                    key={project.title}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      background: 'rgba(15,23,42,0.6)',
                      borderRadius: '15px',
                      padding: '0.75rem 1rem',
                      border: `1px solid ${color}`,
                      boxShadow: `0 0 15px ${color}`,
                      transition: 'all 0.3s ease',
                      color: '#e2e8f0',
                      textDecoration: 'none'
                    }}
                  >
                    <div style={{ marginRight: '0.75rem' }}>
                      <AiOutlineRobot style={{ fontSize: '1.5rem', color }} />
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1rem', fontWeight: 600, margin: 0 }}>{project.title}</h3>
                      <p style={{ fontSize: '0.85rem', color: '#94a3b8', margin: 0 }}>{project.description}</p>
                    </div>
                    <span style={{ marginLeft: 'auto' }}>→</span>
                  </motion.a>
                );
              })}
            </div>
          </SectionContainer>
        )}

        {/* Contact Section */}
        {activeSection === 'contact' && (
          <SectionContainer>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: 700,
              marginBottom: '2rem',
              background: 'linear-gradient(45deg, #e0e7ff 30%, #818cf8 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textAlign: 'center'
            }}>
              Contact & Socials
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1.5rem'
            }}>
              {[
                { icon: <FiLinkedin />, label: 'LinkedIn', value: '/stains-das', link: profileData.contact.linkedin },
                { icon: <FiPhone />, label: 'WhatsApp', value: '+91 9074472372', link: profileData.contact.whatsapp },
                { icon: <FiTwitter />, label: 'X', value: '@stainsdas', link: profileData.contact.x }
              ].map(({ icon, label, value, link }, index) => (
                <motion.a
                  key={label}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: 'rgba(15,23,42,0.6)',
                    borderRadius: '15px',
                    padding: '1.5rem',
                    border: `1px solid ${colors[index % colors.length].color}`,
                    boxShadow: `0 0 15px ${colors[index % colors.length].color}`,
                    textDecoration: 'none',
                    color: '#e2e8f0',
                    transition: 'all 0.3s ease'
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                    <span style={{ fontSize: '1.5rem' }}>{icon}</span>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 600 }}>{label}</h3>
                  </div>
                  <p style={{ margin: 0, color: '#94a3b8' }}>{value}</p>
                </motion.a>
              ))}
            </div>
          </SectionContainer>
        )}
      </main>
    </div>
  );
};

export default Portfolio;