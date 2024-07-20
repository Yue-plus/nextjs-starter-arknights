const isProd = process.env.NODE_ENV === 'production'
/**
 *  https://nextjs.org/docs/app/api-reference/next-config-js
 *  @type {import('next').NextConfig}
 */
const nextConfig = {
    output: "export",
    assetPrefix: isProd ? "/nextjs-starter-arknights" : "",
};

export default nextConfig;
