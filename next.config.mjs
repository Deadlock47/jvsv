import { withNextVideo } from "next-video/process";
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['localhost','pics.dmm.co.jp','t3.ftcdn.net']
    }
}

export default withNextVideo(nextConfig);