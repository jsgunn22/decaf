import { colors, fontFamily, fontSize, screens, opacity } from './config';

const tailwindcss = {
    prefix: 'tw-',
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
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
