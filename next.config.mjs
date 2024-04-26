/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: "/api/login",
                destination: "http://localhost:8080/login",
            }
        ]
    }
};

export default nextConfig;
