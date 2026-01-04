import React, { useState } from "react";
import { SocialLoginButtons } from "./SocialLoginButtons";
import { FormDivider } from "./FormDivider";

export const LoginForm = ({ onSubmit, onToggleForm, onForgotPassword }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: false
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
    onSubmit(formData);
  };

  return (
    <div style={{ padding: '60px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div style={{ marginBottom: '35px' }}>
        <h2 style={{ fontSize: '32px', fontWeight: '700', color: '#1a1a1a', margin: '0 0 10px 0' }}>Sign In</h2>
        <p style={{ fontSize: '15px', color: '#666' }}>
          Don't have an account?{' '}
          <a href="#" onClick={(e) => { e.preventDefault(); onToggleForm(); }} style={{ color: '#39DB4A', textDecoration: 'none', fontWeight: '600' }}>
            Sign up
          </a>
        </p>
      </div>

      <SocialLoginButtons onGoogleLogin={() => console.log('G-Login')} onAppleLogin={() => console.log('A-Login')} />
      <FormDivider text="Or continue with email" />

      <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label style={{ fontSize: '14px', fontWeight: '600', color: '#333', marginBottom: '8px' }}>Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
            required
            style={{ padding: '14px 18px', border: '2px solid #e8e8e8', borderRadius: '12px', fontSize: '15px', outline: 'none' }}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label style={{ fontSize: '14px', fontWeight: '600', color: '#333', marginBottom: '8px' }}>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
            style={{ padding: '14px 18px', border: '2px solid #e8e8e8', borderRadius: '12px', fontSize: '15px', outline: 'none' }}
          />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <input type="checkbox" name="remember" id="remember" checked={formData.remember} onChange={handleChange} />
          <label htmlFor="remember" style={{ fontSize: '14px', color: '#666', cursor: 'pointer' }}>Remember me</label>
        </div>

        <button
          onClick={handleSubmit}
          style={{ background: '#39DB4A', color: 'white', padding: '16px', borderRadius: '12px', border: 'none', fontWeight: '700', cursor: 'pointer' }}
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default LoginForm;