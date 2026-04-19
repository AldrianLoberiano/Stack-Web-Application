import { Link } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

// --- HERO SECTION ---
function HeroSection() {
  return (
    <section style={{ backgroundColor: "#FFFFFF", padding: "80px 24px 64px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "64px",
          alignItems: "center",
        }} className="hero-grid">
          {/* Left: Text */}
          <div>
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "#EFF6FF",
              border: "1px solid #BFDBFE",
              borderRadius: "100px",
              padding: "6px 14px",
              marginBottom: "24px",
            }}>
              <div style={{ width: "8px", height: "8px", backgroundColor: "#1A56DB", borderRadius: "50%" }} />
              <span style={{ fontSize: "13px", fontWeight: "500", color: "#1A56DB" }}>
                New: AI-Powered Automation is here
              </span>
            </div>

            <h1 style={{
              fontSize: "52px",
              fontWeight: "700",
              color: "#111827",
              lineHeight: "1.15",
              letterSpacing: "-1px",
              marginBottom: "20px",
            }}>
              Streamline Your<br />
              <span style={{ color: "#1A56DB" }}>Business Workflows</span><br />
              Effortlessly
            </h1>

            <p style={{
              fontSize: "18px",
              color: "#6B7280",
              lineHeight: "1.7",
              marginBottom: "36px",
              maxWidth: "480px",
            }}>
              NexaFlow brings your team, tools, and processes into one intelligent platform — helping you automate repetitive tasks and focus on what matters most.
            </p>

            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <Link to="/signup" style={{ textDecoration: "none" }}>
                <button style={{
                  padding: "14px 28px",
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#FFFFFF",
                  backgroundColor: "#1A56DB",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}>
                  Start for Free
                </button>
              </Link>
              <Link to="/features" style={{ textDecoration: "none" }}>
                <button style={{
                  padding: "14px 28px",
                  fontSize: "16px",
                  fontWeight: "500",
                  color: "#374151",
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #D1D5DB",
                  borderRadius: "8px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="#374151" strokeWidth="2" />
                    <path d="M10 8L16 12L10 16V8Z" fill="#374151" />
                  </svg>
                  Watch Demo
                </button>
              </Link>
            </div>

            <div style={{ marginTop: "48px", display: "flex", alignItems: "center", gap: "24px" }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    border: "2px solid #FFFFFF",
                    marginLeft: i === 1 ? 0 : "-10px",
                    backgroundColor: ["#DBEAFE", "#FEE2E2", "#D1FAE5", "#FEF3C7", "#EDE9FE"][i - 1],
                    overflow: "hidden",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}>
                    <span style={{ fontSize: "12px", fontWeight: "600", color: "#374151" }}>
                      {["A", "B", "C", "D", "E"][i - 1]}
                    </span>
                  </div>
                ))}
              </div>
              <div>
                <div style={{ display: "flex", gap: "2px" }}>
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#F59E0B">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                    </svg>
                  ))}
                </div>
                <p style={{ fontSize: "13px", color: "#6B7280", margin: "2px 0 0" }}>
                  Trusted by <strong style={{ color: "#111827" }}>10,000+</strong> teams worldwide
                </p>
              </div>
            </div>
          </div>

          {/* Right: Dashboard Image */}
          <div style={{ position: "relative" }}>
            <div style={{
              borderRadius: "12px",
              overflow: "hidden",
              border: "1px solid #E5E7EB",
              backgroundColor: "#F9FAFB",
            }}>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzb2Z0d2FyZSUyMGRhc2hib2FyZCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzc2NTc5NDg2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="NexaFlow Dashboard"
                style={{ width: "100%", display: "block", height: "380px", objectFit: "cover" }}
              />
            </div>

            {/* Floating Stat Card 1 */}
            <div style={{
              position: "absolute",
              bottom: "-20px",
              left: "-24px",
              backgroundColor: "#FFFFFF",
              border: "1px solid #E5E7EB",
              borderRadius: "10px",
              padding: "14px 18px",
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}>
              <div style={{
                width: "40px",
                height: "40px",
                backgroundColor: "#DCFCE7",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#16A34A">
                  <path d="M22 12H18L15 21L9 3L6 12H2" stroke="#16A34A" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <p style={{ fontSize: "18px", fontWeight: "700", color: "#111827", margin: 0 }}>+48%</p>
                <p style={{ fontSize: "12px", color: "#6B7280", margin: 0 }}>Productivity Boost</p>
              </div>
            </div>

            {/* Floating Stat Card 2 */}
            <div style={{
              position: "absolute",
              top: "-16px",
              right: "-16px",
              backgroundColor: "#FFFFFF",
              border: "1px solid #E5E7EB",
              borderRadius: "10px",
              padding: "14px 18px",
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}>
              <div style={{
                width: "40px",
                height: "40px",
                backgroundColor: "#DBEAFE",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1A56DB" strokeWidth="2">
                  <path d="M17 21V19C17 16.791 15.209 15 13 15H5C2.791 15 1 16.791 1 19V21" strokeLinecap="round" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21V19C23 17.405 21.929 16.057 20.5 15.5" strokeLinecap="round" />
                  <path d="M16 3.13C17.437 3.63 18.5 4.978 18.5 6.575C18.5 8.172 17.437 9.52 16 10.02" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <p style={{ fontSize: "18px", fontWeight: "700", color: "#111827", margin: 0 }}>10K+</p>
                <p style={{ fontSize: "12px", color: "#6B7280", margin: 0 }}>Active Users</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .hero-grid h1 { font-size: 36px !important; }
        }
      `}</style>
    </section>
  );
}

// --- TRUSTED BY SECTION ---
function TrustedBySection() {
  const companies = ["Stripe", "Notion", "Figma", "Slack", "Vercel", "GitHub", "Linear", "Loom"];

  return (
    <section style={{ backgroundColor: "#F9FAFB", padding: "48px 24px", borderTop: "1px solid #E5E7EB", borderBottom: "1px solid #E5E7EB" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
        <p style={{ fontSize: "14px", color: "#9CA3AF", fontWeight: "500", letterSpacing: "0.5px", textTransform: "uppercase", marginBottom: "32px" }}>
          Trusted by 500+ companies worldwide
        </p>
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "48px",
          alignItems: "center",
        }}>
          {companies.map((company) => (
            <span key={company} style={{
              fontSize: "18px",
              fontWeight: "700",
              color: "#D1D5DB",
              letterSpacing: "-0.5px",
            }}>
              {company}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- FEATURES SECTION ---
function FeaturesSection() {
  const features = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A56DB" strokeWidth="2">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M2 17L12 22L22 17" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M2 12L12 17L22 12" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: "Workflow Automation",
      description: "Build powerful automated workflows with our drag-and-drop builder. No coding required — connect your apps and automate tasks in minutes.",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A56DB" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 9H21" />
          <path d="M9 21V9" />
        </svg>
      ),
      title: "Team Collaboration",
      description: "Invite your entire team, assign roles, and collaborate in real-time. Everyone stays aligned with shared workspaces and live activity feeds.",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A56DB" strokeWidth="2">
          <path d="M18 20V10" strokeLinecap="round" />
          <path d="M12 20V4" strokeLinecap="round" />
          <path d="M6 20V14" strokeLinecap="round" />
        </svg>
      ),
      title: "Advanced Analytics",
      description: "Gain deep insights into your team's performance with detailed reports, custom dashboards, and real-time data visualization tools.",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A56DB" strokeWidth="2">
          <path d="M12 22S8 18 8 12V5L12 3L16 5V12C16 18 12 22 12 22Z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: "Enterprise Security",
      description: "Bank-grade encryption, SSO, 2FA, audit logs, and compliance tools keep your data safe and your organization secure at every level.",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A56DB" strokeWidth="2">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.07 4.93A10 10 0 0 0 4.93 19.07" strokeLinecap="round" />
          <path d="M4.93 4.93A10 10 0 0 1 19.07 19.07" strokeLinecap="round" />
        </svg>
      ),
      title: "1,000+ Integrations",
      description: "Connect with your favorite tools — Slack, Salesforce, Jira, Google Workspace, and hundreds more apps your team already uses daily.",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A56DB" strokeWidth="2">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: "AI Assistant",
      description: "Let our built-in AI suggest optimizations, summarize reports, auto-classify tasks, and help your team work smarter, not harder.",
    },
  ];

  return (
    <section style={{ backgroundColor: "#FFFFFF", padding: "96px 24px" }}>
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
            Features
          </span>
          <h2 style={{ fontSize: "40px", fontWeight: "700", color: "#111827", marginBottom: "16px", letterSpacing: "-0.5px" }}>
            Everything your team needs
          </h2>
          <p style={{ fontSize: "18px", color: "#6B7280", maxWidth: "560px", margin: "0 auto", lineHeight: "1.6" }}>
            A complete platform designed to help modern teams move faster and accomplish more together.
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "32px",
        }} className="features-grid">
          {features.map((feature) => (
            <div key={feature.title} style={{
              padding: "32px",
              border: "1px solid #E5E7EB",
              borderRadius: "12px",
              backgroundColor: "#FFFFFF",
            }}>
              <div style={{
                width: "48px",
                height: "48px",
                backgroundColor: "#EFF6FF",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "20px",
              }}>
                {feature.icon}
              </div>
              <h3 style={{ fontSize: "18px", fontWeight: "600", color: "#111827", marginBottom: "10px" }}>
                {feature.title}
              </h3>
              <p style={{ fontSize: "15px", color: "#6B7280", lineHeight: "1.6" }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) { .features-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 640px) { .features-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}

// --- HOW IT WORKS SECTION ---
function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Connect Your Tools",
      description: "Link your existing apps and services in seconds. NexaFlow integrates with 1,000+ tools your team already uses.",
    },
    {
      number: "02",
      title: "Build Your Workflow",
      description: "Use our intuitive drag-and-drop builder to create custom workflows. Set triggers, conditions, and actions effortlessly.",
    },
    {
      number: "03",
      title: "Automate & Scale",
      description: "Activate your workflows and let NexaFlow handle the rest. Monitor performance and scale as your business grows.",
    },
  ];

  return (
    <section style={{ backgroundColor: "#F9FAFB", padding: "96px 24px", borderTop: "1px solid #E5E7EB" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px",
          alignItems: "center",
        }} className="how-it-works-grid">
          {/* Left */}
          <div>
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
              How It Works
            </span>
            <h2 style={{ fontSize: "40px", fontWeight: "700", color: "#111827", marginBottom: "16px", letterSpacing: "-0.5px", lineHeight: "1.2" }}>
              Up and running<br />in minutes
            </h2>
            <p style={{ fontSize: "18px", color: "#6B7280", lineHeight: "1.7", marginBottom: "40px" }}>
              Getting started with NexaFlow is simple. Follow these three steps and transform how your team works.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
              {steps.map((step) => (
                <div key={step.number} style={{ display: "flex", gap: "20px" }}>
                  <div style={{
                    flexShrink: 0,
                    width: "48px",
                    height: "48px",
                    backgroundColor: "#1A56DB",
                    borderRadius: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}>
                    <span style={{ fontSize: "14px", fontWeight: "700", color: "#FFFFFF" }}>{step.number}</span>
                  </div>
                  <div>
                    <h4 style={{ fontSize: "17px", fontWeight: "600", color: "#111827", marginBottom: "6px" }}>
                      {step.title}
                    </h4>
                    <p style={{ fontSize: "15px", color: "#6B7280", lineHeight: "1.6", margin: 0 }}>
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: "40px" }}>
              <Link to="/features" style={{ textDecoration: "none" }}>
                <button style={{
                  padding: "12px 24px",
                  fontSize: "15px",
                  fontWeight: "600",
                  color: "#FFFFFF",
                  backgroundColor: "#1A56DB",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}>
                  Learn More
                </button>
              </Link>
            </div>
          </div>

          {/* Right: Image */}
          <div>
            <div style={{
              borderRadius: "12px",
              overflow: "hidden",
              border: "1px solid #E5E7EB",
            }}>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1590650589327-3f67c43ad8a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG9mZmljZSUyMHdvcmt8ZW58MXx8fHwxNzc2NTc5NDg2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Team collaborating"
                style={{ width: "100%", display: "block", height: "420px", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) { .how-it-works-grid { grid-template-columns: 1fr !important; gap: 48px !important; } }
      `}</style>
    </section>
  );
}

// --- STATS SECTION ---
function StatsSection() {
  const stats = [
    { value: "10,000+", label: "Active Teams" },
    { value: "500M+", label: "Tasks Automated" },
    { value: "99.9%", label: "Uptime SLA" },
    { value: "48%", label: "Avg. Time Saved" },
  ];

  return (
    <section style={{ backgroundColor: "#1A56DB", padding: "80px 24px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "32px",
          textAlign: "center",
        }} className="stats-grid">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p style={{ fontSize: "44px", fontWeight: "700", color: "#FFFFFF", margin: "0 0 8px", letterSpacing: "-1px" }}>
                {stat.value}
              </p>
              <p style={{ fontSize: "16px", color: "#BFDBFE", margin: 0 }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) { .stats-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 400px) { .stats-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}

// --- TESTIMONIALS SECTION ---
function TestimonialsSection() {
  const testimonials = [
    {
      quote: "NexaFlow completely transformed how our marketing team operates. We've automated 80% of our repetitive reporting tasks and freed up hours every week.",
      name: "Sarah Johnson",
      role: "VP of Marketing, TechCorp",
      avatar: "https://images.unsplash.com/photo-1689600944138-da3b150d9cb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGJ1c2luZXNzJTIwcHJvZmVzc2lvbmFsJTIwaGVhZHNob3R8ZW58MXx8fHwxNzc2NTc5NDkxfDA&ixlib=rb-4.1.0&q=80&w=200",
    },
    {
      quote: "The analytics dashboard alone is worth the subscription. We can see exactly where bottlenecks are and fix them before they become problems.",
      name: "Marcus Rivera",
      role: "CTO, Finwave Solutions",
      avatar: "https://images.unsplash.com/photo-1762522927402-f390672558d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwcm9mZXNzaW9uYWwlMjBjb3Jwb3JhdGUlMjBoZWFkc2hvdHxlbnwxfHx8fDE3NzY1Nzk0OTF8MA&ixlib=rb-4.1.0&q=80&w=200",
    },
    {
      quote: "Onboarding new team members used to take days. With NexaFlow's structured workflows and clear role assignments, we've cut that down to just hours.",
      name: "Priya Patel",
      role: "Head of Operations, Growthly",
      avatar: "https://images.unsplash.com/photo-1737574821698-862e77f044c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFydHVwJTIwZW50cmVwcmVuZXVyJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzc2NTc5NDg5fDA&ixlib=rb-4.1.0&q=80&w=200",
    },
  ];

  return (
    <section style={{ backgroundColor: "#FFFFFF", padding: "96px 24px" }}>
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
            Testimonials
          </span>
          <h2 style={{ fontSize: "40px", fontWeight: "700", color: "#111827", marginBottom: "16px", letterSpacing: "-0.5px" }}>
            Loved by teams everywhere
          </h2>
          <p style={{ fontSize: "18px", color: "#6B7280" }}>
            See what our customers have to say about NexaFlow.
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "28px",
        }} className="testimonials-grid">
          {testimonials.map((t) => (
            <div key={t.name} style={{
              border: "1px solid #E5E7EB",
              borderRadius: "12px",
              padding: "32px",
              backgroundColor: "#FFFFFF",
            }}>
              {/* Stars */}
              <div style={{ display: "flex", gap: "4px", marginBottom: "20px" }}>
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#F59E0B">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                  </svg>
                ))}
              </div>

              <p style={{ fontSize: "15px", color: "#374151", lineHeight: "1.7", marginBottom: "24px" }}>
                "{t.quote}"
              </p>

              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{ width: "44px", height: "44px", borderRadius: "50%", overflow: "hidden", flexShrink: 0 }}>
                  <ImageWithFallback
                    src={t.avatar}
                    alt={t.name}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
                <div>
                  <p style={{ fontSize: "15px", fontWeight: "600", color: "#111827", margin: 0 }}>{t.name}</p>
                  <p style={{ fontSize: "13px", color: "#6B7280", margin: 0 }}>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) { .testimonials-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 640px) { .testimonials-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}

// --- CTA SECTION ---
function CTASection() {
  return (
    <section style={{ backgroundColor: "#111827", padding: "96px 24px" }}>
      <div style={{
        maxWidth: "700px",
        margin: "0 auto",
        textAlign: "center",
      }}>
        <h2 style={{ fontSize: "44px", fontWeight: "700", color: "#FFFFFF", marginBottom: "20px", letterSpacing: "-0.5px", lineHeight: "1.2" }}>
          Ready to transform<br />your workflow?
        </h2>
        <p style={{ fontSize: "18px", color: "#9CA3AF", marginBottom: "40px", lineHeight: "1.7" }}>
          Join 10,000+ teams already using NexaFlow. Start your 14-day free trial — no credit card required.
        </p>
        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link to="/contact" style={{ textDecoration: "none" }}>
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
              Start Free Trial
            </button>
          </Link>
          <Link to="/contact" style={{ textDecoration: "none" }}>
            <button style={{
              padding: "14px 32px",
              fontSize: "16px",
              fontWeight: "500",
              color: "#FFFFFF",
              backgroundColor: "transparent",
              border: "1px solid #374151",
              borderRadius: "8px",
              cursor: "pointer",
            }}>
              Talk to Sales
            </button>
          </Link>
        </div>
        <p style={{ fontSize: "14px", color: "#6B7280", marginTop: "20px" }}>
          14-day free trial · No credit card required · Cancel anytime
        </p>
      </div>
    </section>
  );
}

// --- HOME PAGE ---
export function Home() {
  return (
    <>
      <HeroSection />
      <TrustedBySection />
      <FeaturesSection />
      <HowItWorksSection />
      <StatsSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
