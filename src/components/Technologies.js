// components/Home.js
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AiOutlineRobot } from 'react-icons/ai';
import { SiPython, SiReact, SiDjango } from 'react-icons/si';
import { FiBarChart2, FiDatabase, FiCloud } from 'react-icons/fi';

const Home = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  // Full slides data from old code (all 7 slides)
  const slides = [
    {
      title: "Artificial Intelligence & Machine Learning",
      icon: <AiOutlineRobot />,
      color: '#EF4444',
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
      color: '#10B981',
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
      color: '#3B82F6',
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
      color: '#F59E0B',
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
      color: '#8B5CF6',
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
      color: '#EC4899',
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
      color: '#EF4444',
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

  return (
    <div style={{ 
      marginTop: '3rem',
      padding: '1rem',
      maxWidth: '1200px',
      margin: '0 auto'
    }}>
      <h3 style={{
        marginTop: '-50px',
        fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
        fontWeight: 700,
        marginBottom: '2rem',
        background: 'linear-gradient(45deg, #e0e7ff 30%, #818cf8 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        textAlign: 'center'
      }}>
        Technologies I Work With
      </h3>
      
      <div style={{ 
        position: 'relative', 
        overflow: 'hidden', 
        borderRadius: '15px', 
        minHeight: '400px'
      }}>
        <AnimatePresence>
          <motion.div
            key={slideIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.7, ease: 'easeInOut' }}
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              background: 'rgba(15,23,42,0.6)',
              padding: '1.5rem',
              borderRadius: '15px',
              border: `1px solid ${slides[slideIndex].color}`,
              boxShadow: `0 0 20px ${slides[slideIndex].color}`,
              minHeight: '350px',
              gap: '1.5rem'
            }}
            className="tech-slide-container"
          >
            {/* Image Section - First on mobile */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              style={{
                flex: '0 0 auto',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
              className="tech-image-container"
            >
              <img
                src={slides[slideIndex].image}
                alt={slides[slideIndex].title}
                style={{ 
                  width: '100%',
                  maxWidth: '350px',
                  height: '250px',
                  borderRadius: '10px', 
                  objectFit: 'cover', 
                  border: `2px solid ${slides[slideIndex].color}` 
                }}
                className="tech-image"
              />
            </motion.div>

            {/* Content Section */}
            <div style={{ 
              flex: 1, 
              display: 'flex', 
              flexDirection: 'column',
              justifyContent: 'center'
            }} className="tech-content">
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                marginBottom: '1rem',
                flexWrap: 'wrap',
                gap: '0.5rem'
              }}>
                <span style={{ 
                  fontSize: 'clamp(2rem, 4vw, 2.5rem)', 
                  color: slides[slideIndex].color 
                }}>
                  {slides[slideIndex].icon}
                </span>
                <h3 style={{ 
                  fontSize: 'clamp(1.3rem, 3vw, 1.8rem)', 
                  fontWeight: 600, 
                  color: '#e0e7ff',
                  margin: 0
                }}>
                  {slides[slideIndex].title}
                </h3>
              </div>
              
              <p style={{ 
                color: '#94a3b8', 
                marginBottom: '1rem', 
                fontSize: 'clamp(0.9rem, 2vw, 1.1rem)', 
                lineHeight: 1.6 
              }}>
                {slides[slideIndex].description}
              </p>
              
              <ul style={{ 
                listStyle: 'none', 
                padding: 0,
                margin: 0
              }}>
                {slides[slideIndex].points.map((point, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    style={{ 
                      display: 'flex', 
                      alignItems: 'flex-start', 
                      marginBottom: '0.5rem', 
                      fontSize: 'clamp(0.8rem, 2vw, 1rem)',
                      lineHeight: 1.4
                    }}
                  >
                    <span style={{ 
                      color: slides[slideIndex].color, 
                      marginRight: '0.5rem',
                      flexShrink: 0,
                      marginTop: '0.2rem'
                    }}>•</span>
                    <span style={{ color: '#cbd5e1' }}>{point}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>
        
        {/* Slide Indicators */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '0.5rem', 
          marginTop: '1.5rem',
          flexWrap: 'wrap'
        }}>
          {slides.map((_, idx) => (
            <button
              key={idx}
              style={{
                width: 'clamp(8px, 2vw, 12px)',
                height: 'clamp(8px, 2vw, 12px)',
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

      {/* Responsive CSS */}
      <style jsx>{`
        @media (max-width: 768px) {
          .tech-slide-container {
            flex-direction: column !important;
            text-align: center;
            padding: 1rem !important;
            gap: 1rem !important;
          }
          
          .tech-image-container {
            order: -1;
            width: 100%;
          }
          
          .tech-image {
            max-width: 280px !important;
            height: 180px !important;
          }
          
          .tech-content {
            text-align: center;
          }
          
          .tech-content > div {
            justify-content: center;
          }
        }
        
        @media (max-width: 480px) {
          .tech-slide-container {
            padding: 0.8rem !important;
            min-height: 300px !important;
          }
          
          .tech-image {
            max-width: 250px !important;
            height: 150px !important;
          }
          
          h2 {
            margin-top: -30px !important;
            margin-bottom: 1.5rem !important;
          }
        }
        
        @media (max-width: 360px) {
          .tech-image {
            max-width: 220px !important;
            height: 130px !important;
          }
          
          .tech-slide-container {
            min-height: 280px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;