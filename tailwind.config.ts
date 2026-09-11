import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bull: {
          yellow: '#F5C542',
          ink: '#2B2B2B',
          // 支撑色：由主色推导，用于悬停、边框与深色背景
          amber: '#E0A92B',
          cream: '#FDF6E3',
          slate: '#6B6B6B',
        },
      },
      fontFamily: {
        sans: [
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'PingFang SC',
          'Hiragino Sans GB',
          'Microsoft YaHei',
          'sans-serif',
        ],
      },
      maxWidth: {
        shell: '72rem',
      },
    },
  },
  plugins: [],
};

export default config;
