import React, { useState } from "react";
import { SocialLoginButtons } from "./SocialLoginButtons";
import { FormDivider } from "./FormDivider";

export const SignupForm = ({ onSubmit, onToggleForm }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    onSubmit(formData);
  };

  return (
    <div style={{ padding: '60px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div style={{ marginBottom: '35px' }}>
        <h2 style={{ fontSize: '32px', fontWeight: '700', color: '#1a1a1a', margin: '0 0 10px 0' }}>Create Account</h2>
        <p style={{ fontSize: '15px', color: '#666' }}>
          Already have an account?{' '}
          <a href="#" onClick={(e) => { e.preventDefault(); onToggleForm(); }} style={{ color: '#39DB4A', textDecoration: 'none', fontWeight: '600' }}>
            Sign in
          </a>
        </p>
      </div>

      <SocialLoginButtons onGoogleLogin={() => console.log('G-Login')} onAppleLogin={() => console.log('A-Login')} />
      <FormDivider text="Or sign up with email" />

      <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
          <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} style={{ padding: '14px', borderRadius: '12px', border: '2px solid #e8e8e8' }} />
          <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} style={{ padding: '14px', borderRadius: '12px', border: '2px solid #e8e8e8' }} />
        </div>
        <input type="email" name="email" placeholder="Email Address" onChange={handleChange} style={{ padding: '14px', borderRadius: '12px', border: '2px solid #e8e8e8' }} />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} style={{ padding: '14px', borderRadius: '12px', border: '2px solid #e8e8e8' }} />
        <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} style={{ padding: '14px', borderRadius: '12px', border: '2px solid #e8e8e8' }} />
        
        <button
          onClick={handleSubmit}
          style={{ background: '#39DB4A', color: 'white', padding: '16px', borderRadius: '12px', border: 'none', fontWeight: '700', cursor: 'pointer' }}
        >
          Create Account
        </button>
      </div>
    </div>
  );
};

export default SignupForm;