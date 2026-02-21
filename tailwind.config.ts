import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: '#6366f1',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				surface: {
					DEFAULT: '#0d0f14',
					2: '#111318',
					3: '#161920',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				inter: ['var(--font-inter)', 'sans-serif'],
				interBold: ['var(--font-inter-bold)', 'sans-serif'],
			},
			boxShadow: {
				'glow-sm': '0 0 12px rgba(99, 102, 241, 0.2)',
				'glow': '0 0 20px rgba(99, 102, 241, 0.3)',
				'glow-lg': '0 0 35px rgba(99, 102, 241, 0.45)',
				'glow-xl': '0 0 60px rgba(99, 102, 241, 0.5)',
			},
			keyframes: {
				fadeInUp: {
					'0%': { opacity: '0', transform: 'translateY(28px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				fadeInLeft: {
					'0%': { opacity: '0', transform: 'translateX(-28px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' },
				},
				fadeInRight: {
					'0%': { opacity: '0', transform: 'translateX(28px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' },
				},
				float: {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-12px)' },
				},
				'glow-pulse': {
					'0%, 100%': { boxShadow: '0 0 20px rgba(99,102,241,0.3)' },
					'50%': { boxShadow: '0 0 40px rgba(99,102,241,0.6)' },
				},
				shimmer: {
					'0%': { backgroundPosition: '-200% center' },
					'100%': { backgroundPosition: '200% center' },
				},
			},
			animation: {
				'fade-in-up': 'fadeInUp 0.7s ease forwards',
				'fade-in-left': 'fadeInLeft 0.75s ease forwards',
				'fade-in-right': 'fadeInRight 0.75s ease forwards',
				'float': 'float 6s ease-in-out infinite',
				'glow-pulse': 'glow-pulse 2.5s ease-in-out infinite',
				'shimmer': 'shimmer 3s linear infinite',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
