import React, { useState } from "react";

// Contact Hero Component
export const ContactHero = () => (
  <section style={{
    background: 'linear-gradient(135deg, #f8fff9 0%, #ffffff 100%)',
    padding: '80px 80px 60px',
    textAlign: 'center'
  }}>
    <h1 style={{
      fontSize: '56px',
      marginBottom: '20px',
      color: '#1a1a1a',
      margin: '0 0 20px 0'
    }}>Get in Touch</h1>
    <p style={{
      fontSize: '20px',
      color: '#666',
      maxWidth: '700px',
      margin: '0 auto',
      lineHeight: '1.6'
    }}>Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible</p>
  </section>
);

// Contact Form Component
export const ContactForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    if (formData.firstName && formData.lastName && formData.email && formData.subject && formData.message) {
      onSubmit(formData);
    }
  };

  return (
    <div style={{
      background: 'white',
      borderRadius: '24px',
      padding: '40px',
      boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
      height: 'fit-content'
    }}>
      <div style={{ marginBottom: '30px' }}>
        <h2 style={{
          fontSize: '32px',
          color: '#1a1a1a',
          marginBottom: '10px',
          margin: '0 0 10px 0'
        }}>Send us a Message</h2>
        <p style={{
          fontSize: '16px',
          color: '#666',
          lineHeight: '1.6'
        }}>Fill out the form below and our team will get back to you within 24 hours</p>
      </div>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '20px'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label style={{
              fontSize: '14px',
              fontWeight: '600',
              color: '#333',
              marginBottom: '8px'
            }}>First Name *</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="John"
              style={{
                padding: '14px 18px',
                border: '2px solid #e8e8e8',
                borderRadius: '12px',
                fontSize: '15px',
                outline: 'none',
                transition: 'all 0.3s'
              }}
              onFocus={(e) => e.target.style.borderColor = '#39DB4A'}
              onBlur={(e) => e.target.style.borderColor = '#e8e8e8'}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label style={{
              fontSize: '14px',
              fontWeight: '600',
              color: '#333',
              marginBottom: '8px'
            }}>Last Name *</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Doe"
              style={{
                padding: '14px 18px',
                border: '2px solid #e8e8e8',
                borderRadius: '12px',
                fontSize: '15px',
                outline: 'none',
                transition: 'all 0.3s'
              }}
              onFocus={(e) => e.target.style.borderColor = '#39DB4A'}
              onBlur={(e) => e.target.style.borderColor = '#e8e8e8'}
            />
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '20px'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label style={{
              fontSize: '14px',
              fontWeight: '600',
              color: '#333',
              marginBottom: '8px'
            }}>Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              style={{
                padding: '14px 18px',
                border: '2px solid #e8e8e8',
                borderRadius: '12px',
                fontSize: '15px',
                outline: 'none',
                transition: 'all 0.3s'
              }}
              onFocus={(e) => e.target.style.borderColor = '#39DB4A'}
              onBlur={(e) => e.target.style.borderColor = '#e8e8e8'}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label style={{
              fontSize: '14px',
              fontWeight: '600',
              color: '#333',
              marginBottom: '8px'
            }}>Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+1 234 567 8900"
              style={{
                padding: '14px 18px',
                border: '2px solid #e8e8e8',
                borderRadius: '12px',
                fontSize: '15px',
                outline: 'none',
                transition: 'all 0.3s'
              }}
              onFocus={(e) => e.target.style.borderColor = '#39DB4A'}
              onBlur={(e) => e.target.style.borderColor = '#e8e8e8'}
            />
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label style={{
            fontSize: '14px',
            fontWeight: '600',
            color: '#333',
            marginBottom: '8px'
          }}>Subject *</label>
          <select
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            style={{
              padding: '14px 18px',
              border: '2px solid #e8e8e8',
              borderRadius: '12px',
              fontSize: '15px',
              outline: 'none',
              transition: 'all 0.3s'
            }}
            onFocus={(e) => e.target.style.borderColor = '#39DB4A'}
            onBlur={(e) => e.target.style.borderColor = '#e8e8e8'}
          >
            <option value="">Select a subject</option>
            <option value="general">General Inquiry</option>
            <option value="order">Order Support</option>
            <option value="catering">Catering Services</option>
            <option value="feedback">Feedback</option>
            <option value="partnership">Partnership</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label style={{
            fontSize: '14px',
            fontWeight: '600',
            color: '#333',
            marginBottom: '8px'
          }}>Message *</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us what's on your mind..."
            style={{
              padding: '14px 18px',
              border: '2px solid #e8e8e8',
              borderRadius: '12px',
              fontSize: '15px',
              outline: 'none',
              transition: 'all 0.3s',
              resize: 'vertical',
              minHeight: '120px',
              fontFamily: 'inherit'
            }}
            onFocus={(e) => e.target.style.borderColor = '#39DB4A'}
            onBlur={(e) => e.target.style.borderColor = '#e8e8e8'}
          />
        </div>

        <button
          onClick={handleSubmit}
          style={{
            background: '#39DB4A',
            color: 'white',
            padding: '16px',
            borderRadius: '15px',
            border: 'none',
            fontWeight: '700',
            fontSize: '17px',
            cursor: 'pointer',
            transition: 'all 0.3s',
            marginTop: '10px'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#2ec93e';
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 8px 20px rgba(57,219,74,0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = '#39DB4A';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          Send Message
        </button>
      </div>
    </div>
  );
};

// Info Card Component
export const InfoCard = ({ icon, title, details, gradient }) => (
  <div style={{
    background: 'white',
    borderRadius: '24px',
    padding: '35px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
    transition: 'all 0.3s'
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = 'translateY(-5px)';
    e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.12)';
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = 'translateY(0)';
    e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
  }}>
    <div style={{
      width: '70px',
      height: '70px',
      background: gradient,
      borderRadius: '18px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '32px',
      marginBottom: '20px'
    }}>
      {icon}
    </div>
    <h3 style={{
      fontSize: '20px',
      fontWeight: '700',
      color: '#1a1a1a',
      marginBottom: '10px'
    }}>{title}</h3>
    <div style={{
      fontSize: '15px',
      color: '#666',
      lineHeight: '1.7'
    }}>
      {details}
    </div>
  </div>
);

// Contact Info Section Component
export const ContactInfoSection = () => (
  <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '30px',
    marginBottom: '60px'
  }}>
    <InfoCard
      icon="📍"
      title="Visit Us"
      gradient="linear-gradient(135deg, #e8f5e9, #c8e6c9)"
      details={
        <>
          123 Food Street, Culinary District<br />
          New York, NY 10001<br />
          United States
        </>
      }
    />
    <InfoCard
      icon="📞"
      title="Call Us"
      gradient="linear-gradient(135deg, #fff8e1, #ffecb3)"
      details={
        <>
          Main: <a href="tel:+12345678900" style={{ color: '#39DB4A', textDecoration: 'none', fontWeight: '600' }}>+1 (234) 567-8900</a><br />
          Support: <a href="tel:+12345678901" style={{ color: '#39DB4A', textDecoration: 'none', fontWeight: '600' }}>+1 (234) 567-8901</a><br />
          Mon-Sun: 9:00 AM - 11:00 PM
        </>
      }
    />
    <InfoCard
      icon="✉️"
      title="Email Us"
      gradient="linear-gradient(135deg, #fce4ec, #f8bbd0)"
      details={
        <>
          General: <a href="mailto:info@poodie.com" style={{ color: '#39DB4A', textDecoration: 'none', fontWeight: '600' }}>info@poodie.com</a><br />
          Support: <a href="mailto:support@poodie.com" style={{ color: '#39DB4A', textDecoration: 'none', fontWeight: '600' }}>support@poodie.com</a><br />
          Catering: <a href="mailto:catering@poodie.com" style={{ color: '#39DB4A', textDecoration: 'none', fontWeight: '600' }}>catering@poodie.com</a>
        </>
      }
    />
    <InfoCard
      icon="⏰"
      title="Business Hours"
      gradient="linear-gradient(135deg, #e3f2fd, #bbdefb)"
      details={
        <>
          Monday - Friday: 9:00 AM - 11:00 PM<br />
          Saturday: 10:00 AM - 12:00 AM<br />
          Sunday: 10:00 AM - 10:00 PM
        </>
      }
    />
  </div>
);

// Map Section Component
export const MapSection = () => (
  <section style={{
    margin: '60px 80px 0',
    background: 'white',
    borderRadius: '24px',
    padding: '40px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
  }}>
    <div style={{
      marginBottom: '30px',
      textAlign: 'center'
    }}>
      <h2 style={{
        fontSize: '32px',
        color: '#1a1a1a',
        marginBottom: '10px',
        margin: '0 0 10px 0'
      }}>Find Us on the Map</h2>
      <p style={{
        fontSize: '16px',
        color: '#666'
      }}>Located in the heart of the city, easy to reach and plenty of parking available</p>
    </div>
    <div style={{
      width: '100%',
      height: '400px',
      background: 'linear-gradient(135deg, #e8f5e9, #f1f8e9)',
      borderRadius: '16px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '80px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      🗺️
    </div>
  </section>
);

// FAQ Item Component
export const FAQItem = ({ question, answer }) => (
  <div style={{
    background: 'white',
    borderRadius: '16px',
    padding: '25px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.06)',
    transition: 'all 0.3s'
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = 'translateY(-3px)';
    e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.1)';
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = 'translateY(0)';
    e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.06)';
  }}>
    <h3 style={{
      fontSize: '18px',
      fontWeight: '700',
      color: '#1a1a1a',
      marginBottom: '10px',
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    }}>
      <span style={{ color: '#39DB4A', fontSize: '20px' }}>❓</span>
      {question}
    </h3>
    <p style={{
      fontSize: '15px',
      color: '#666',
      lineHeight: '1.7'
    }}>{answer}</p>
  </div>
);

// FAQ Section Component
export const FAQSection = () => {
  const faqs = [
    {
      question: "What are your delivery hours?",
      answer: "We deliver from 9:00 AM to 11:00 PM daily. Orders placed after 10:30 PM will be delivered the next day."
    },
    {
      question: "How can I track my order?",
      answer: "You'll receive a tracking link via SMS and email once your order is confirmed. You can also track it in real-time through our app."
    },
    {
      question: "Do you offer catering services?",
      answer: "Yes! We provide catering services for events of all sizes. Contact us at catering@poodie.com for custom quotes and menu options."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, debit cards, PayPal, Apple Pay, Google Pay, and cash on delivery."
    },
    {
      question: "Can I modify my order after placing it?",
      answer: "Orders can be modified within 5 minutes of placing. Contact our support team immediately if you need to make changes."
    },
    {
      question: "What is your refund policy?",
      answer: "If you're not satisfied with your order, contact us within 24 hours and we'll issue a full refund or replacement."
    }
  ];

  return (
    <section style={{ margin: '60px 80px 0' }}>
      <div style={{
        textAlign: 'center',
        marginBottom: '40px'
      }}>
        <h2 style={{
          fontSize: '32px',
          color: '#1a1a1a',
          marginBottom: '10px',
          margin: '0 0 10px 0'
        }}>Frequently Asked Questions</h2>
        <p style={{
          fontSize: '16px',
          color: '#666'
        }}>Quick answers to common questions</p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
        gap: '25px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </section>
  );
};

// Social Media Section Component
export const SocialSection = () => (
  <section style={{
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    margin: '60px 80px 0',
    padding: '50px',
    borderRadius: '24px',
    textAlign: 'center',
    color: 'white'
  }}>
    <h2 style={{
      fontSize: '32px',
      marginBottom: '15px',
      margin: '0 0 15px 0'
    }}>Follow Us on Social Media</h2>
    <p style={{
      fontSize: '16px',
      opacity: 0.95,
      marginBottom: '30px'
    }}>Stay connected and get the latest updates on new dishes, offers, and events</p>
    <div style={{
      display: 'flex',
      gap: '20px',
      justifyContent: 'center'
    }}>
      {['📘', '📸', '🐦', '📺', '💼'].map((icon, index) => (
        <div
          key={index}
          style={{
            width: '60px',
            height: '60px',
            background: 'rgba(255,255,255,0.2)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '28px',
            cursor: 'pointer',
            transition: 'all 0.3s'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'white';
            e.currentTarget.style.transform = 'translateY(-5px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          {icon}
        </div>
      ))}
    </div>
  </section>
);

// Main Contact Page Component
export default function ContactPage() {
  const handleFormSubmit = (formData) => {
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: '#ffffff',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
    }}>
      <ContactHero />
      
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '60px 80px 40px'
      }}>
        <ContactInfoSection />
        <ContactForm onSubmit={handleFormSubmit} />
      </div>

      <MapSection />
      <FAQSection />
      <SocialSection />
    </div>
  );
}