// Tailwind CSS extension (add to your tailwind.config.js inside module.exports.theme.extend)
module.exports = {
  theme: {
    extend: {
      colors: {
        'gradient-left': '#283593',
        'gradient-center': '#5e35b1',
        'gradient-right': '#d81b60',
        'accent-yellow': '#ffce00',
        'main-bg': '#ffffff',
        'pattern-bg': '#f5f5fa',
        'grey-text': '#e2e2e0',
        'text-on-primary': '#ffffff',
        'border': '#e9ecef',
        dark: {
          'main-bg': '#1a1a1a',
          'pattern-bg': '#24233a',
          'border': '#404040',
          'grey-text': '#bbb9be'
        }
      },
      fontFamily: {
        base: ['Helvetica Neue', 'Arial', 'sans-serif']
      },
      fontWeight: {
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        md: '1rem',
        lg: '1.25rem',
        xl: '2rem'
      },
      letterSpacing: {
        base: '0.01em',
        wide: '0.06em'
      },
      spacing: {
        0: '0rem',
        1: '0.25rem',
        2: '0.5rem',
        3: '0.75rem',
        4: '1rem',
        5: '1.25rem',
        6: '1.5rem',
        8: '2rem',
        10: '2.5rem',
        12: '3rem',
        16: '4rem'
      },
      borderRadius: {
        sm: '4px',
        md: '8px',
        lg: '1.5rem'
      },
      boxShadow: {
        md: '0 2px 8px 0 rgba(40, 53, 147, 0.10)'
      }
    }
  }
};
