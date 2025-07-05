import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['firebasestorage.googleapis.com']
  }
};



export default nextConfig;

// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   images: {
//     domains: ["firebasestorage.googleapis.com"],
//   },
//   async headers() {
//     return [
//       {
//         source: "/(.*)",
//         headers: [
//           {
//             key: "Cross-Origin-Opener-Policy",
//             value: "same-origin-allow-popups",
//           },
//           {
//             key: "Referrer-Policy",
//             value: "no-referrer-when-downgrade",
//           },
//         ],
//       },
//     ];
//   },
// };

// export default nextConfig;

