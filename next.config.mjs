/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "content.healinghubhomoeopathicclinic.com",
        port: "",
        pathname: "/**",
      },
    ],
  },

  turbopack: {
    rules: {
      "*.mp4": {
        type: "asset",
      },
      "*.svg": {
        type: "asset",
      },
      "*.png": {
        type: "asset",
      },
      "*.jpg": {
        type: "asset",
      },
      "*.jpeg": {
        type: "asset",
      },
      "*.webp": {
        type: "asset",
      },
    },
  },

  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.(mp4|webm|ogg|swf|ogv)$/,
      type: "asset/resource",
      generator: {
        filename: "static/media/[hash][ext][query]",
      },
    });

    return config;
  },
};

export default nextConfig;

import('@opennextjs/cloudflare').then(m => m.initOpenNextCloudflareForDev());
