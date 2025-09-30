// components/Projects.js
import React from 'react';
import { motion } from 'framer-motion';
import { AiOutlineRobot } from 'react-icons/ai';

const Projects = ({ profileData, colors }) => {
  return (
    <>
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
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '1.5rem' 
      }}>
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
              whileHover={{ scale: 1.05 }}
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
    </>
  );
};

export default Projects;