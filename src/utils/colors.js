// colors.js - Color configuration for the restaurant app

export const colors = {
  // Primary Colors
  primary: {
    green: '#39DB4A',      // Main green brand color
    greenLight: '#E8F8EA', // Light green background
    greenDark: '#2BC139',  // Darker green for hover states
  },
  
  // Neutral Colors
  neutral: {
    white: '#FFFFFF',
    black: '#000000',
    gray50: '#F9FAFB',
    gray100: '#F3F4F6',
    gray200: '#E5E7EB',
    gray300: '#D1D5DB',
    gray400: '#9CA3AF',
    gray500: '#6B7280',
    gray600: '#4B5563',
    gray700: '#374151',
    gray800: '#1F2937',
    gray900: '#111827',
  },
  
  // Accent Colors
  accent: {
    red: '#FF6868',        // For labels/tags
    redLight: '#FFE5E5',   // Light red background
    yellow: '#FFD700',     // For star ratings
    orange: '#FF8C00',     // Secondary accent
  },
  
  // Text Colors
  text: {
    primary: '#2E2E2E',    // Main headings
    secondary: '#555555',  // Body text
    tertiary: '#808080',   // Light text/descriptions
    white: '#FFFFFF',      // White text on dark backgrounds
  },
  
  // Background Colors
  background: {
    main: '#FFFFFF',
    light: '#F9FAFB',
    card: '#FFFFFF',
    overlay: 'rgba(0, 0, 0, 0.5)',
  },
  
  // Border Colors
  border: {
    light: '#E5E7EB',
    medium: '#D1D5DB',
    dark: '#9CA3AF',
  },
  
  // Status Colors
  status: {
    success: '#39DB4A',
    warning: '#FFD700',
    error: '#FF6868',
    info: '#3B82F6',
  },
};

// Helper function to get color
export const getColor = (path) => {
  const keys = path.split('.');
  let value = colors;
  
  for (const key of keys) {
    value = value[key];
    if (!value) return null;
  }
  
  return value;
};

export default colors;