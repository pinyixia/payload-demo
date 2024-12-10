import { withPayload } from '@payloadcms/next/withPayload'

import redirects from './redirects.js'

const NEXT_PUBLIC_SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      ...[NEXT_PUBLIC_SERVER_URL /* 'https://example.com' */].map((item) => {
        const url = new URL(item)

        return {
          hostname: url.hostname,
          protocol: url.protocol.replace(':', ''),
        }
      }),
    ],
  },
  reactStrictMode: true,
  redirects,
  // webpack: (config, options) => {
  //   config.module.rules.push({
  //     test: /\.less$/,
  //     use: [
  //       {
  //         loader: 'style-loader', // 将 CSS 插入到 DOM 中
  //       },
  //       {
  //         loader: 'css-loader', // 解析 CSS
  //         options: { importLoaders: 1 },
  //       },
  //       {
  //         loader: 'less-loader', // 编译 Less 文件为 CSS
  //         options: {
  //           lessOptions: {
  //             javascriptEnabled: true, // 如果使用 Ant Design，需要开启
  //           },
  //         },
  //       },
  //     ]
  //   })
 
  //   return config
  // },
}

export default withPayload(nextConfig)
