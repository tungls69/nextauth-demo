/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    "API_URL": "http://localhost:5000/api",
    "MONGO_URL": "mongodb://demousr:demopwd@localhost:27017/db_demo?retryWrites=true&w=majority&authSource=db_demo",
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig