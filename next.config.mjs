/** @type {import('next').NextConfig} */
const securityHeaders = [
  // 1. Content Security Policy (CSP): Prevents XSS, code injection, clickjacking
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https:",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com data:",
      "img-src 'self' data: https: blob:",
      "media-src 'self' data: https: blob:",
      "connect-src 'self' https:",
      "frame-src 'self' https://maps.google.com https://www.google.com https://*.google.com",
      "frame-ancestors 'none'",
      "form-action 'self' https://zalo.me https://chat.zalo.me",
      "base-uri 'self'",
    ].join("; "),
  },
  // 2. Clickjacking Defense: completely forbids embedding in <iframe>
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  // 3. MIME-Sniffing Defense: prevents browser from guessing MIME types
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  // 4. Referrer Policy: protects user query privacy
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  // 5. Strict Transport Security (HSTS): forces HTTPS for 2 years
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  // 6. Permissions Policy: restricts camera, mic, geolocation, payments
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
  },
  // 7. Legacy XSS Filter protection
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
  // 8. DNS prefetch control
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
];

const nextConfig = {
  // Strip 'X-Powered-By: Next.js' header to hide framework footprint from automated attackers
  poweredByHeader: false,
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
      {
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/videos/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
