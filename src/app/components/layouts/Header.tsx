import { useState } from "react";
import { Link, useLocation } from "react-router";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Features", path: "/features" },
    { label: "About", path: "/about" },
    { label: "Pricing", path: "/pricing" },
    { label: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header style={{
      backgroundColor: "#FFFFFF",
      borderBottom: "1px solid #E5E7EB",
      position: "sticky",
      top: 0,
      zIndex: 1000,
    }}>
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "0 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "72px",
      }}>
        {/* Logo */}
        <Link to="/" style={{ textDecoration: "none" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
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
            <span style={{
              fontSize: "20px",
              fontWeight: "700",
              color: "#111827",
              letterSpacing: "-0.3px",
            }}>
              NexaFlow
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }} className="desktop-nav">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              style={{
                textDecoration: "none",
                padding: "8px 16px",
                borderRadius: "6px",
                fontSize: "15px",
                fontWeight: isActive(link.path) ? "600" : "400",
                color: isActive(link.path) ? "#1A56DB" : "#374151",
                backgroundColor: isActive(link.path) ? "#EFF6FF" : "transparent",
                transition: "none",
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }} className="desktop-nav">
          <Link to="/login" style={{ textDecoration: "none" }}>
            <button style={{
              padding: "9px 20px",
              fontSize: "15px",
              fontWeight: "500",
              color: "#374151",
              backgroundColor: "#FFFFFF",
              border: "1px solid #D1D5DB",
              borderRadius: "6px",
              cursor: "pointer",
            }}>
              Log In
            </button>
          </Link>
          <Link to="/signup" style={{ textDecoration: "none" }}>
            <button style={{
              padding: "9px 20px",
              fontSize: "15px",
              fontWeight: "500",
              color: "#FFFFFF",
              backgroundColor: "#1A56DB",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
            }}>
              Get Started
            </button>
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "4px",
          }}
          className="mobile-menu-btn"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            {mobileOpen ? (
              <path d="M18 6L6 18M6 6L18 18" stroke="#374151" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M3 12H21M3 6H21M3 18H21" stroke="#374151" strokeWidth="2" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div style={{
          borderTop: "1px solid #E5E7EB",
          backgroundColor: "#FFFFFF",
          padding: "16px 24px",
        }} className="mobile-nav">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileOpen(false)}
              style={{
                display: "block",
                textDecoration: "none",
                padding: "12px 0",
                fontSize: "15px",
                fontWeight: isActive(link.path) ? "600" : "400",
                color: isActive(link.path) ? "#1A56DB" : "#374151",
                borderBottom: "1px solid #F3F4F6",
              }}
            >
              {link.label}
            </Link>
          ))}
          <div style={{ marginTop: "16px", display: "flex", flexDirection: "column", gap: "10px" }}>
            <Link to="/login" onClick={() => setMobileOpen(false)} style={{ textDecoration: "none" }}>
              <button style={{
                width: "100%",
                padding: "10px",
                fontSize: "15px",
                fontWeight: "500",
                color: "#374151",
                backgroundColor: "#FFFFFF",
                border: "1px solid #D1D5DB",
                borderRadius: "6px",
                cursor: "pointer",
              }}>
                Log In
              </button>
            </Link>
            <Link to="/signup" onClick={() => setMobileOpen(false)} style={{ textDecoration: "none" }}>
              <button style={{
                width: "100%",
                padding: "10px",
                fontSize: "15px",
                fontWeight: "500",
                color: "#FFFFFF",
                backgroundColor: "#1A56DB",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
              }}>
                Get Started
              </button>
            </Link>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
        @media (min-width: 769px) {
          .mobile-nav { display: none !important; }
        }
      `}</style>
    </header>
  );
}
