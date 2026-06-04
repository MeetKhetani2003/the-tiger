'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Loader2, ArrowRight } from 'lucide-react';
import { servicesData } from '@/data/servicesData';
import { upCities } from '@/data/citiesData';

interface ContactFormProps {
  defaultService?: string;
  defaultCity?: string;
  isMini?: boolean;
}

export default function ContactForm({ defaultService = '', defaultCity = '', isMini = false }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: defaultService,
    city: defaultCity,
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[0-9\s-]{10,15}$/.test(formData.phone.replace(/\s+/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.service) newErrors.service = 'Please select a service';
    if (!formData.city) newErrors.city = 'Please select a location';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate server response
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Save lead locally to demonstrate working functionality
    try {
      const existingLeads = JSON.parse(localStorage.getItem('mss_leads') || '[]');
      existingLeads.push({ ...formData, date: new Date().toISOString() });
      localStorage.setItem('mss_leads', JSON.stringify(existingLeads));
    } catch (err) {
      console.error('Failed to save lead', err);
    }

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          padding: isMini ? '32px 16px' : '48px 32px',
          backgroundColor: 'var(--color-cards)',
          border: '1px solid var(--color-border)',
          borderRadius: '12px',
          boxShadow: 'var(--gold-glow)'
        }}
      >
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '72px',
          height: '72px',
          borderRadius: '50%',
          backgroundColor: 'rgba(252, 202, 9, 0.1)',
          color: 'var(--color-primary-blue)',
          marginBottom: '24px'
        }}>
          <ShieldCheck size={40} />
        </div>
        <h3 style={{ fontSize: '1.75rem', fontFamily: 'var(--font-heading)', marginBottom: '16px', color: '#fff' }}>
          Assessment Initiated!
        </h3>
        <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6', marginBottom: '24px', fontSize: '1.05rem', maxWidth: '400px' }}>
          Thank you, <strong>{formData.name}</strong>. Our command center operators have received your request for <strong>{formData.service}</strong> in <strong>{formData.city}</strong>.
        </p>
        <div style={{
          backgroundColor: 'var(--color-bg-secondary)',
          padding: '16px 24px',
          borderRadius: '8px',
          border: '1px solid var(--color-border)',
          marginBottom: '24px',
          fontSize: '0.95rem',
          color: 'var(--color-text)',
          textAlign: 'left',
          width: '100%',
          maxWidth: '400px'
        }}>
          ⏱️ <strong>Guaranteed Response:</strong> Our duty consultant will call you at <strong>{formData.phone}</strong> in under 2 hours.
        </div>
        <button 
          onClick={() => {
            setIsSubmitted(false);
            setFormData({ name: '', email: '', phone: '', service: defaultService, city: defaultCity, message: '' });
          }}
          className="btn btn-outline"
          style={{ padding: '12px 24px', fontSize: '0.95rem' }}
        >
          Submit Another Request
        </button>
      </motion.div>
    );
  }

  return (
    <form 
      onSubmit={handleSubmit}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        padding: isMini ? '24px 20px' : '40px',
        backgroundColor: 'var(--color-cards)',
        border: '1px solid var(--color-border)',
        borderRadius: '12px',
        boxShadow: isMini ? 'var(--shadow-sm)' : 'var(--shadow-md)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Visual Accent */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        height: '4px',
        width: '100%',
        background: 'linear-gradient(90deg, var(--color-primary-blue), var(--color-secondary-blue))'
      }} />

      <div>
        <h3 style={{ fontSize: isMini ? '1.35rem' : '1.75rem', fontFamily: 'var(--font-heading)', color: '#fff', marginBottom: '8px' }}>
          {isMini ? 'Quick Quote' : 'Request Security Consultation'}
        </h3>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', margin: 0 }}>
          {isMini ? 'Get rates for your city instantly.' : 'Complete the form for a free physical threat audit.'}
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {/* Name input */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text)' }}>Full Name *</label>
          <input 
            type="text" 
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            style={{
              padding: '12px 16px',
              backgroundColor: 'var(--color-bg-secondary)',
              border: `1px solid ${errors.name ? 'var(--color-secondary-blue)' : 'var(--color-border)'}`,
              borderRadius: '6px',
              color: 'var(--color-text)',
              fontSize: '0.95rem',
              outline: 'none',
              transition: 'border-color 0.3s'
            }}
          />
          {errors.name && <span style={{ color: 'var(--color-secondary-blue)', fontSize: '0.8rem' }}>{errors.name}</span>}
        </div>

        {/* Contact group - Phone & Email */}
        <div style={{ display: 'grid', gridTemplateColumns: isMini ? '1fr' : '1fr 1fr', gap: '16px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text)' }}>Phone Number *</label>
            <input 
              type="tel" 
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 XXXXX XXXXX"
              style={{
                padding: '12px 16px',
                backgroundColor: 'var(--color-bg-secondary)',
                border: `1px solid ${errors.phone ? 'var(--color-secondary-blue)' : 'var(--color-border)'}`,
                borderRadius: '6px',
                color: 'var(--color-text)',
                fontSize: '0.95rem',
                outline: 'none',
                transition: 'border-color 0.3s'
              }}
            />
            {errors.phone && <span style={{ color: 'var(--color-secondary-blue)', fontSize: '0.8rem' }}>{errors.phone}</span>}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text)' }}>Email Address (Optional)</label>
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="name@company.com"
              style={{
                padding: '12px 16px',
                backgroundColor: 'var(--color-bg-secondary)',
                border: `1px solid ${errors.email ? 'var(--color-secondary-blue)' : 'var(--color-border)'}`,
                borderRadius: '6px',
                color: 'var(--color-text)',
                fontSize: '0.95rem',
                outline: 'none',
                transition: 'border-color 0.3s'
              }}
            />
            {errors.email && <span style={{ color: 'var(--color-secondary-blue)', fontSize: '0.8rem' }}>{errors.email}</span>}
          </div>
        </div>

        {/* Dropdowns group - Service & City */}
        <div style={{ display: 'grid', gridTemplateColumns: isMini ? '1fr' : '1fr 1fr', gap: '16px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text)' }}>Required Service *</label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              style={{
                padding: '12px 16px',
                backgroundColor: 'var(--color-bg-secondary)',
                border: `1px solid ${errors.service ? 'var(--color-secondary-blue)' : 'var(--color-border)'}`,
                borderRadius: '6px',
                color: 'var(--color-text)',
                fontSize: '0.95rem',
                outline: 'none',
                transition: 'border-color 0.3s'
              }}
            >
              <option value="">Select Service</option>
              {servicesData.map((s) => (
                <option key={s.id} value={s.title}>{s.title}</option>
              ))}
              <option value="Other">Other / Integrated Services</option>
            </select>
            {errors.service && <span style={{ color: 'var(--color-secondary-blue)', fontSize: '0.8rem' }}>{errors.service}</span>}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text)' }}>Deployment City *</label>
            <select
              name="city"
              value={formData.city}
              onChange={handleChange}
              style={{
                padding: '12px 16px',
                backgroundColor: 'var(--color-bg-secondary)',
                border: `1px solid ${errors.city ? 'var(--color-secondary-blue)' : 'var(--color-border)'}`,
                borderRadius: '6px',
                color: 'var(--color-text)',
                fontSize: '0.95rem',
                outline: 'none',
                transition: 'border-color 0.3s'
              }}
            >
              <option value="">Select City</option>
              {upCities.map((c) => (
                <option key={c.slug} value={c.name}>{c.name}</option>
              ))}
              <option value="Outside UP">Other City (Outside UP)</option>
            </select>
            {errors.city && <span style={{ color: 'var(--color-secondary-blue)', fontSize: '0.8rem' }}>{errors.city}</span>}
          </div>
        </div>

        {/* Message */}
        {!isMini && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text)' }}>Additional Requirements</label>
            <textarea 
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Provide context regarding risk level, quantity of guards, or premise size..."
              rows={4}
              style={{
                padding: '12px 16px',
                backgroundColor: 'var(--color-bg-secondary)',
                border: '1px solid var(--color-border)',
                borderRadius: '6px',
                color: 'var(--color-text)',
                fontSize: '0.95rem',
                outline: 'none',
                transition: 'border-color 0.3s',
                resize: 'vertical'
              }}
            />
          </div>
        )}
      </div>

      <button 
        type="submit"
        disabled={isSubmitting}
        className="btn btn-primary"
        style={{
          width: '100%',
          padding: '14px',
          fontSize: '1rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          marginTop: '8px'
        }}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="animate-spin" size={20} />
            Liaising Command Center...
          </>
        ) : (
          <>
            {isMini ? 'Get Quick Quote' : 'Request Security Consultation'}
            <ArrowRight size={18} />
          </>
        )}
      </button>

      {/* Trust Badges inside Form */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingTop: '16px',
        borderTop: '1px solid var(--color-border)',
        fontSize: '0.75rem',
        color: 'var(--color-text-muted)'
      }}>
        <span>🛡️ PSARA Compliant</span>
        <span>⭐ 4.7 Google Rating</span>
        <span>⏱️ 2h Callback Guarantee</span>
      </div>
    </form>
  );
}
