// import path from 'path';
import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true, // ✅ Enables built-in SSR for styled-components
  },
  trailingSlash: true,
  // webpack: (config) => {
  //   config.resolve.alias = {
  //     ...(config.resolve.alias || {}),
  //     '@': path.resolve(__dirname, 'src'),
  //   };
  //   return config;
  // },

};

export default nextConfig;
