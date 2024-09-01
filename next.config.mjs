// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     images:{
//         remotePatterns:[
//             {
//                 protocol:'https',
//                 hostname:'img'
//             }
//         ]
//     }
// };

// export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      serverActions: {},  // Should be an object
      serverComponentsExternalPackages: ["mongoose"],
    },
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "img.clerk.com",
        },
        {
          protocol: "https",
          hostname: "images.clerk.dev",
        },
        {
          protocol: "https",
          hostname: "uploadthing.com",
        },
        {
          protocol: "https",
          hostname: "placehold.co",
        },
      ],
    },
    typescript: {
      ignoreBuildErrors: true,  // Correctly placed at root level
    },
  };
  
  export default nextConfig;
  