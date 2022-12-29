/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			boxShadow: {
				card: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
				dropdown: 'rgba(0, 0, 0, 0.16) 0px 1px 4px;',
			},
		},
	},
	plugins: [],
};
