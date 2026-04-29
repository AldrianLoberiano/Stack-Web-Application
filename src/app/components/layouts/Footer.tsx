import { Link } from "react-router";

export function Footer() {
  const footerSections = [
    {
      title: "Product",
      links: [
        { label: "Features", path: "/features" },
        { label: "Pricing", path: "/pricing" },
        { label: "Changelog", path: "/" },
        { label: "Roadmap", path: "/" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", path: "/about" },
        { label: "Blog", path: "/" },
        { label: "Careers", path: "/" },
        { label: "Press", path: "/" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Documentation", path: "/" },
        { label: "API Reference", path: "/" },
        { label: "Community", path: "/" },
        { label: "Support", path: "/contact" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", path: "/" },
        { label: "Terms of Service", path: "/" },
        { label: "Cookie Policy", path: "/" },
        { label: "GDPR", path: "/" },
      ],
    },
  ];

  return (
    <footer style={{ backgroundColor: "#111827", color: "#FFFFFF" }}>
      {/* Main Footer */}
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "64px 24px 48px",
      }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: "32px",
        }} className="footer-grid">
          {/* Brand Column */}
          <div style={{ gridColumn: "span 1" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
              <div style={{
                width: "36px",
                height: "36px",
                backgroundColor: "#1A56DB",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 2L18 7V13L10 18L2 13V7L10 2Z" fill="#FFFFFF" />
                </svg>
              </div>
              <span style={{ fontSize: "18px", fontWeight: "700", color: "#FFFFFF" }}>NexaFlow</span>
            </div>
            <p style={{ fontSize: "14px", color: "#9CA3AF", lineHeight: "1.6", marginBottom: "24px" }}>
              Empowering businesses with intelligent workflow automation and seamless collaboration tools.
            </p>
            <div style={{ display: "flex", gap: "16px" }}>
              {/* Twitter/X */}
              <a href="#" style={{ color: "#9CA3AF", textDecoration: "none" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="#" style={{ color: "#9CA3AF", textDecoration: "none" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              {/* GitHub */}
              <a href="#" style={{ color: "#9CA3AF", textDecoration: "none" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Link Columns */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 style={{ fontSize: "14px", fontWeight: "600", color: "#FFFFFF", marginBottom: "16px", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                {section.title}
              </h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.path} style={{ textDecoration: "none", fontSize: "14px", color: "#9CA3AF" }}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ borderTop: "1px solid #1F2937" }}>
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "20px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "12px",
        }}>
          <p style={{ fontSize: "14px", color: "#6B7280", margin: 0 }}>
            © 2026 NexaFlow, Inc. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "24px" }}>
            <a href="#" style={{ fontSize: "14px", color: "#6B7280", textDecoration: "none" }}>Privacy</a>
            <a href="#" style={{ fontSize: "14px", color: "#6B7280", textDecoration: "none" }}>Terms</a>
            <a href="#" style={{ fontSize: "14px", color: "#6B7280", textDecoration: "none" }}>Sitemap</a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
