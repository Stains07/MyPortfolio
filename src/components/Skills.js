// components/Skills.js
import React from 'react';
import { motion } from 'framer-motion';

const Skills = ({ profileData, colors }) => {
  return (
    <>
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
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
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
    </>
  );
};

export default Skills;