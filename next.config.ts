// import path from 'path';
import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true, // ✅ Enables built-in SSR for styled-components
  },
  trailingSlash: true,
};

export default nextConfig;
