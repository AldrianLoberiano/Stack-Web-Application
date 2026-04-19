import { Link } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const mainFeatures = [
  {
    tag: "Automation",
    title: "Build workflows that work for you",
    description: "Design powerful, multi-step automation workflows with our visual builder. Trigger actions based on events, schedules, or conditions — without writing a single line of code.",
    bullets: [
      "Drag-and-drop workflow builder",
      "1,000+ pre-built integrations",
      "Custom conditional logic",
      "Real-time execution monitoring",
    ],
    img: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzb2Z0d2FyZSUyMGRhc2hib2FyZCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzc2NTc5NDg2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    imgLeft: false,
  },
  {
    tag: "Collaboration",
    title: "Keep your entire team aligned",
    description: "Real-time collaboration tools designed for modern teams. Assign tasks, track progress, comment directly on work, and never lose context again.",
    bullets: [
      "Shared team workspaces",
      "Role-based access control",
      "Live activity feeds",
      "In-context comments & mentions",
    ],
    img: "https://images.unsplash.com/photo-1590650589327-3f67c43ad8a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG9mZmljZSUyMHdvcmt8ZW58MXx8fHwxNzc2NTc5NDg2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    imgLeft: true,
  },
  {
    tag: "Analytics",
    title: "Data-driven decisions at your fingertips",
    description: "Gain complete visibility into your team's operations with customizable dashboards, detailed reports, and actionable insights that help you optimize performance.",
    bullets: [
      "Custom dashboard builder",
      "Real-time performance metrics",
      "Exportable CSV & PDF reports",
      "Trend analysis & forecasting",
    ],
    img: "https://images.unsplash.com/photo-1763038311036-6d18805537e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwYnVzaW5lc3MlMjBncm93dGglMjBjaGFydHxlbnwxfHx8fDE3NzY1Nzk0ODl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    imgLeft: false,
  },
];

const additionalFeatures = [
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1A56DB" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7C7 4.239 9.239 2 12 2C14.761 2 17 4.239 17 7V11" strokeLinecap="round" /></svg>,
    title: "SSO & 2FA",
    description: "Enterprise-grade authentication with Single Sign-On and two-factor support.",
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1A56DB" strokeWidth="2"><path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" /><path d="M22 6L12 13L2 6" /></svg>,
    title: "Smart Notifications",
    description: "Receive relevant updates via email, Slack, or in-app — no more notification overload.",
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1A56DB" strokeWidth="2"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>,
    title: "REST & GraphQL API",
    description: "Full-featured API with webhooks, SDKs, and comprehensive documentation.",
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1A56DB" strokeWidth="2"><circle cx="12" cy="12" r="3" /><path d="M19.07 4.93A10 10 0 0 0 4.93 19.07M4.93 4.93A10 10 0 0 1 19.07 19.07" strokeLinecap="round" /></svg>,
    title: "1,000+ Integrations",
    description: "Connect with Slack, Salesforce, Google Workspace, Jira, and hundreds more.",
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1A56DB" strokeWidth="2"><path d="M14 2H6C4.897 2 4 2.897 4 4V20C4 21.103 4.897 22 6 22H18C19.103 22 20 21.103 20 20V8L14 2Z" /><path d="M14 2V8H20" /></svg>,
    title: "Audit Logs",
    description: "Complete activity logs for compliance and security monitoring across your organization.",
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1A56DB" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21H16M12 17V21" /></svg>,
    title: "Mobile App",
    description: "Full-featured iOS and Android apps so your team can work from anywhere.",
  },
];

export function Features() {
  return (
    <>
      {/* Hero */}
      <section style={{ backgroundColor: "#F9FAFB", padding: "80px 24px 64px", borderBottom: "1px solid #E5E7EB" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto", textAlign: "center" }}>
          <span style={{
            display: "inline-block",
            padding: "4px 14px",
            backgroundColor: "#EFF6FF",
            color: "#1A56DB",
            fontSize: "13px",
            fontWeight: "600",
            borderRadius: "100px",
            marginBottom: "16px",
          }}>
            Features
          </span>
          <h1 style={{ fontSize: "48px", fontWeight: "700", color: "#111827", marginBottom: "20px", letterSpacing: "-0.5px", lineHeight: "1.2" }}>
            Everything you need to run your business
          </h1>
          <p style={{ fontSize: "18px", color: "#6B7280", lineHeight: "1.7", marginBottom: "36px" }}>
            NexaFlow provides all the tools your team needs to automate, collaborate, and analyze — in one unified platform.
          </p>
          <Link to="/pricing" style={{ textDecoration: "none" }}>
            <button style={{
              padding: "14px 32px",
              fontSize: "16px",
              fontWeight: "600",
              color: "#FFFFFF",
              backgroundColor: "#1A56DB",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}>
              View Pricing
            </button>
          </Link>
        </div>
      </section>

      {/* Main Feature Sections */}
      {mainFeatures.map((feature) => (
        <section key={feature.title} style={{ backgroundColor: "#FFFFFF", padding: "96px 24px", borderBottom: "1px solid #E5E7EB" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "80px",
              alignItems: "center",
              direction: feature.imgLeft ? "rtl" : "ltr",
            }} className="feature-detail-grid">
              <div style={{ direction: "ltr" }}>
                <span style={{
                  display: "inline-block",
                  padding: "4px 14px",
                  backgroundColor: "#EFF6FF",
                  color: "#1A56DB",
                  fontSize: "13px",
                  fontWeight: "600",
                  borderRadius: "100px",
                  marginBottom: "16px",
                }}>
                  {feature.tag}
                </span>
                <h2 style={{ fontSize: "36px", fontWeight: "700", color: "#111827", marginBottom: "16px", letterSpacing: "-0.5px", lineHeight: "1.2" }}>
                  {feature.title}
                </h2>
                <p style={{ fontSize: "17px", color: "#6B7280", lineHeight: "1.8", marginBottom: "28px" }}>
                  {feature.description}
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px", display: "flex", flexDirection: "column", gap: "12px" }}>
                  {feature.bullets.map((bullet) => (
                    <li key={bullet} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      <div style={{
                        width: "20px",
                        height: "20px",
                        backgroundColor: "#DCFCE7",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="3">
                          <path d="M20 6L9 17L4 12" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <span style={{ fontSize: "15px", color: "#374151" }}>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{ direction: "ltr" }}>
                <div style={{ borderRadius: "12px", overflow: "hidden", border: "1px solid #E5E7EB" }}>
                  <ImageWithFallback
                    src={feature.img}
                    alt={feature.title}
                    style={{ width: "100%", display: "block", height: "360px", objectFit: "cover" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Additional Features Grid */}
      <section style={{ backgroundColor: "#F9FAFB", padding: "96px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <span style={{
              display: "inline-block",
              padding: "4px 14px",
              backgroundColor: "#EFF6FF",
              color: "#1A56DB",
              fontSize: "13px",
              fontWeight: "600",
              borderRadius: "100px",
              marginBottom: "16px",
            }}>
              And More
            </span>
            <h2 style={{ fontSize: "40px", fontWeight: "700", color: "#111827", marginBottom: "16px", letterSpacing: "-0.5px" }}>
              Packed with powerful features
            </h2>
            <p style={{ fontSize: "18px", color: "#6B7280" }}>
              Everything you need, nothing you don't.
            </p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
          }} className="additional-features-grid">
            {additionalFeatures.map((feat) => (
              <div key={feat.title} style={{
                padding: "28px",
                border: "1px solid #E5E7EB",
                borderRadius: "12px",
                backgroundColor: "#FFFFFF",
                display: "flex",
                gap: "16px",
              }}>
                <div style={{
                  width: "44px",
                  height: "44px",
                  backgroundColor: "#EFF6FF",
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}>
                  {feat.icon}
                </div>
                <div>
                  <h4 style={{ fontSize: "16px", fontWeight: "600", color: "#111827", marginBottom: "6px" }}>
                    {feat.title}
                  </h4>
                  <p style={{ fontSize: "14px", color: "#6B7280", lineHeight: "1.6", margin: 0 }}>
                    {feat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 1024px) { .additional-features-grid { grid-template-columns: repeat(2, 1fr) !important; } .feature-detail-grid { grid-template-columns: 1fr !important; direction: ltr !important; gap: 48px !important; } }
          @media (max-width: 640px) { .additional-features-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "#1A56DB", padding: "80px 24px" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "40px", fontWeight: "700", color: "#FFFFFF", marginBottom: "20px", letterSpacing: "-0.5px" }}>
            Start using NexaFlow today
          </h2>
          <p style={{ fontSize: "17px", color: "#BFDBFE", marginBottom: "36px", lineHeight: "1.7" }}>
            Try all features free for 14 days. No credit card required.
          </p>
          <Link to="/contact" style={{ textDecoration: "none" }}>
            <button style={{
              padding: "14px 32px",
              fontSize: "16px",
              fontWeight: "600",
              color: "#1A56DB",
              backgroundColor: "#FFFFFF",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}>
              Get Started Free
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}
