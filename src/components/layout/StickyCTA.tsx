import React from 'react';
import { PhoneCall, MessageCircle } from 'lucide-react';

export default function StickyCTA() {
  return (
    <div style={{
      position: 'fixed',
      bottom: '0',
      left: '0',
      width: '100%',
      backgroundColor: '#1E3A8A', // Dark blue
      color: '#fff',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '12px',
      zIndex: 9999,
      boxShadow: '0 -4px 10px rgba(0, 0, 0, 0.1)',
      gap: '16px'
    }}>
      <span style={{ fontSize: '1rem', fontWeight: 600, display: 'none', '@media (min-width: 768px)': { display: 'inline' } } as any}>
        Need Immediate Security Assistance?
      </span>
      
      <div style={{ display: 'flex', gap: '12px' }}>
        <a 
          href="tel:+919415610453" 
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '8px', 
            backgroundColor: '#ffffff', 
            color: '#1E3A8A', 
            padding: '8px 16px', 
            borderRadius: '24px',
            textDecoration: 'none',
            fontWeight: 700,
            fontSize: '0.9rem'
          }}
        >
          <PhoneCall size={16} />
          Call Now
        </a>
        
        <a 
          href="https://wa.me/919415610453" 
          target="_blank"
          rel="noopener noreferrer"
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '8px', 
            backgroundColor: '#25D366', 
            color: '#ffffff', 
            padding: '8px 16px', 
            borderRadius: '24px',
            textDecoration: 'none',
            fontWeight: 700,
            fontSize: '0.9rem'
          }}
        >
          <MessageCircle size={16} />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
