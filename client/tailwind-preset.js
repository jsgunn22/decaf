import { colors, fontFamily, fontSize, screens, opacity } from './config';

const tailwindcss = {
    content: ['./src/**/*.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        colors,
        fontFamily,
        fontSize,
        screens,
        opacity,
        extend: {},
    },
    plugins: [],
};

export default tailwindcss;
