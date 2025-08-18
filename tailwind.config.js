module.exports = {
  content: [
    "./pages/*.{html,js}",
    "./index.html",
    "./js/*.js",
    "./components/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        primary: {
          DEFAULT: "#2563EB", // blue-600
          50: "#EFF6FF", // blue-50
          100: "#DBEAFE", // blue-100
          500: "#3B82F6", // blue-500
          600: "#2563EB", // blue-600
          700: "#1D4ED8", // blue-700
        },
        // Secondary Colors
        secondary: {
          DEFAULT: "#64748B", // slate-500
          100: "#F1F5F9", // slate-100
          200: "#E2E8F0", // slate-200
          400: "#94A3B8", // slate-400
          500: "#64748B", // slate-500
          600: "#475569", // slate-600
        },
        // Accent Colors
        accent: {
          DEFAULT: "#059669", // emerald-600
          50: "#ECFDF5", // emerald-50
          100: "#D1FAE5", // emerald-100
          500: "#10B981", // emerald-500
          600: "#059669", // emerald-600
        },
        // Background Colors
        background: "#FAFBFC", // custom off-white
        surface: "#FFFFFF", // white
        // Text Colors
        text: {
          primary: "#1E293B", // slate-800
          secondary: "#64748B", // slate-500
        },
        // Status Colors
        success: {
          DEFAULT: "#10B981", // emerald-500
          50: "#ECFDF5", // emerald-50
          100: "#D1FAE5", // emerald-100
        },
        warning: {
          DEFAULT: "#F59E0B", // amber-500
          50: "#FFFBEB", // amber-50
          100: "#FEF3C7", // amber-100
        },
        error: {
          DEFAULT: "#EF4444", // red-500
          50: "#FEF2F2", // red-50
          100: "#FEE2E2", // red-100
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        inter: ['Inter', 'sans-serif'],
        jetbrains: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      },
      boxShadow: {
        'card': '0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.06)',
        'interactive': '0 4px 6px rgba(0,0,0,0.07), 0 2px 4px rgba(0,0,0,0.06)',
        'floating': '0 10px 25px rgba(0,0,0,0.1), 0 4px 10px rgba(0,0,0,0.05)',
      },
      borderRadius: {
        'DEFAULT': '8px',
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      animation: {
        'shimmer': 'shimmer 2s infinite linear',
        'fade-in-up': 'fadeInUp 0.3s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
        'progress-ring': 'progressRing 1s ease-out',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDuration: {
        '150': '150ms',
        '300': '300ms',
      },
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.hover-lift': {
          transition: 'all 150ms cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            transform: 'translateY(-2px)',
          },
        },
        '.glass-effect': {
          'backdrop-filter': 'blur(10px)',
          background: 'rgba(255, 255, 255, 0.8)',
        },
        '.text-balance': {
          'text-wrap': 'balance',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}