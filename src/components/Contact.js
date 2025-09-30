// components/Contact.js
import React from 'react';
import { motion } from 'framer-motion';
import { FiLinkedin, FiPhone, FiTwitter } from 'react-icons/fi';

const Contact = ({ profileData, colors }) => {
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
        Contact & Socials
      </h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
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
    </>
  );
};

export default Contact;