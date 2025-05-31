
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Neo-brutalism specific colors
				'neo-black': '#000000',
				'neo-white': '#FFFFFF',
				'neo-red': '#FF3A29',
				'neo-yellow': '#FFE14D',
				'neo-blue': '#0037FF',
				// Dark mode neo-brutalism colors - Updated for better visibility
				'neo-dark-bg': '#0B1120',
				'neo-dark-blue-bg': '#0A1428',
				'neo-dark-blue-deep': '#061024',
				'neo-dark-blue-box': '#112136',
				'neo-dark-box': '#112136', // Added the missing color definition here
				'neo-dark-blue-text': '#B8C7E0',
				'neo-dark-blue-accent': '#2563EB',
				'neo-dark-border': '#1F2937',
				'neo-dark-red': '#FF5340',
				'neo-dark-yellow': '#FFE86B',
				'neo-dark-blue': '#4471FF',
				'neo-dark-text': '#E5E7EB', // Added the missing color definition here
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' },
				},
				'glitch': {
					'0%': { 
						transform: 'translate(0)',
						textShadow: '0 0 transparent'
					},
					'2%': { 
						transform: 'translate(-3px, 2px)',
						textShadow: '2px 0 #ff3a29'
					},
					'4%': { 
						transform: 'translate(3px, -2px)',
						textShadow: '-2px 0 #0037ff'
					},
					'6%': { 
						transform: 'translate(0)',
						textShadow: '0 0 transparent'
					},
					'8%': { 
						transform: 'translate(-2px, 1px)',
						textShadow: '1px 0 #ff3a29, -1px 0 #0037ff'
					},
					'10%': { 
						transform: 'translate(2px, -1px)',
						textShadow: '-1px 0 #ff3a29, 1px 0 #0037ff'
					},
					'12%': { 
						transform: 'translate(0)',
						textShadow: '0 0 transparent'
					},
					'100%': { 
						transform: 'translate(0)',
						textShadow: '0 0 transparent'
					},
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'glitch': 'glitch 2.5s ease-in-out infinite',
			},
			fontFamily: {
				'display': ['Space Grotesk', 'sans-serif'],
				'body': ['Inter', 'sans-serif'],
			},
			boxShadow: {
				'neo': '5px 5px 0px 0px #000000',
				'neo-lg': '8px 8px 0px 0px #000000',
				'neo-dark': '5px 5px 0px 0px #1F2937',
				'neo-dark-lg': '8px 8px 0px 0px #1F2937',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
