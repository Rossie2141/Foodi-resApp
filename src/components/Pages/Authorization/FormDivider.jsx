import React from "react";

export const FormDivider = ({ text }) => (
  <div style={{
    display: 'flex',
    alignItems: 'center',
    margin: '25px 0',
    color: '#999',
    fontSize: '14px'
  }}>
    <div style={{ flex: 1, height: '1px', background: '#e8e8e8' }} />
    <span style={{ padding: '0 15px' }}>{text}</span>
    <div style={{ flex: 1, height: '1px', background: '#e8e8e8' }} />
  </div>
);