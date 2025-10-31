/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // penting: ubah jadi static export
  basePath: '/portofolio-next', // nama repo kamu
  images: { unoptimized: true }, // agar image tetap muncul
};

export default nextConfig;
