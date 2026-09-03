export default {
    content: ['./index.html', './src/**/*.{ts,tsx}'],
    theme: {
        extend: {}
    },
    plugins: [require('daisyui')],
    daisyui: {
        themes: [
            {
                light: {
                    'color-scheme': 'light',
                    'primary': '#4f46e5',
                    'primary-content': '#ffffff',
                    'secondary': '#0284c7',
                    'accent': '#0d9488',
                    'neutral': '#1e293b',
                    'neutral-content': '#f8fafc',
                    'base-100': '#ffffff',
                    'base-200': '#f8fafc',
                    'base-300': '#e2e8f0',
                    'base-content': '#0f172a',
                    'info': '#38bdf8',
                    'success': '#22c55e',
                    'warning': '#f59e0b',
                    'error': '#ef4444'
                },
                dark: {
                    'color-scheme': 'dark',
                    'primary': '#818cf8',
                    'primary-content': '#0f172a',
                    'secondary': '#38bdf8',
                    'accent': '#2dd4bf',
                    'neutral': '#1e293b',
                    'neutral-content': '#f8fafc',
                    'base-100': '#0f172a',
                    'base-200': '#090d16',
                    'base-300': '#1e293b',
                    'base-content': '#f8fafc',
                    'info': '#38bdf8',
                    'success': '#22c55e',
                    'warning': '#f59e0b',
                    'error': '#ef4444'
                }
            }
        ]
    }
};

