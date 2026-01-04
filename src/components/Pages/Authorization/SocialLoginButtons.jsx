import React from "react";
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';

export const SocialLoginButtons = ({ onGoogleLogin, onAppleLogin }) => (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    marginBottom: '30px'
  }}>
    <button
      onClick={onGoogleLogin}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '12px',
        padding: '14px',
        border: '2px solid #e8e8e8',
        borderRadius: '12px',
        background: 'white',
        cursor: 'pointer',
        transition: 'all 0.3s',
        fontWeight: '600',
        fontSize: '15px',
        color: '#333'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = '#39DB4A';
        e.currentTarget.style.background = '#f8fff9';
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = '0 4px 12px rgba(57,219,74,0.15)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = '#e8e8e8';
        e.currentTarget.style.background = 'white';
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      <span style={{ fontSize: '22px' }}><GoogleIcon/></span>
      <span>Continue with Google</span>
    </button>
    
    <button
      onClick={onAppleLogin}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '12px',
        padding: '14px',
        border: '2px solid #e8e8e8',
        borderRadius: '12px',
        background: 'white',
        cursor: 'pointer',
        transition: 'all 0.3s',
        fontWeight: '600',
        fontSize: '15px',
        color: '#333'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = '#39DB4A';
        e.currentTarget.style.background = '#f8fff9';
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = '0 4px 12px rgba(57,219,74,0.15)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = '#e8e8e8';
        e.currentTarget.style.background = 'white';
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      <span style={{ fontSize: '22px' }}><AppleIcon/></span>
      <span>Continue with Apple</span>
    </button>
  </div>
);