import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    experimental : {
        serverActions : {
            bodySizeLimit : "1000mb"
        }
    },
    images : {
        remotePatterns : [{hostname : "cdn.prod.website-files.com"},{hostname : "app.riverside.fm"}, {hostname : "image.mux.com"}]
    }
};

export default nextConfig;
