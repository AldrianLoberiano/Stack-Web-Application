import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Link } from "react-router";

const teamMembers = [
  {
    name: "Alex Chen",
    role: "CEO & Co-Founder",
    bio: "Previously VP of Product at Stripe. Passionate about making enterprise software more human.",
    img: "https://images.unsplash.com/photo-1737574821698-862e77f044c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFydHVwJTIwZW50cmVwcmVuZXVyJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzc2NTc5NDg5fDA&ixlib=rb-4.1.0&q=80&w=400",
  },
  {
    name: "Sarah Johnson",
    role: "CTO & Co-Founder",
    bio: "Former Staff Engineer at Notion. Loves building systems that scale and teams that thrive.",
    img: "https://images.unsplash.com/photo-1689600944138-da3b150d9cb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGJ1c2luZXNzJTIwcHJvZmVzc2lvbmFsJTIwaGVhZHNob3R8ZW58MXx8fHwxNzc2NTc5NDkxfDA&ixlib=rb-4.1.0&q=80&w=400",
  },
  {
    name: "Marcus Rivera",
    role: "Head of Design",
    bio: "Award-winning designer with 12+ years crafting intuitive digital experiences for global teams.",
    img: "https://images.unsplash.com/photo-1762522927402-f390672558d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwcm9mZXNzaW9uYWwlMjBjb3Jwb3JhdGUlMjBoZWFkc2hvdHxlbnwxfHx8fDE3NzY1Nzk0OTF8MA&ixlib=rb-4.1.0&q=80&w=400",
  },
];

const values = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A56DB" strokeWidth="2">
        <path d="M12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22Z" />
        <path d="M12 8V12L14 14" strokeLinecap="round" />
      </svg>
    ),
    title: "Speed First",
    description: "We believe in shipping fast, learning quickly, and iterating continuously to serve our users better.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A56DB" strokeWidth="2">
        <path d="M17 21V19C17 16.791 15.209 15 13 15H5C2.791 15 1 16.791 1 19V21" strokeLinecap="round" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21V19C23 17.405 21.929 16.057 20.5 15.5" strokeLinecap="round" />
        <path d="M16 3.13C17.437 3.63 18.5 4.978 18.5 6.575C18.5 8.172 17.437 9.52 16 10.02" strokeLinecap="round" />
      </svg>
    ),
    title: "People Matter",
    description: "Our team and our customers are at the core of every decision we make. We build with empathy.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A56DB" strokeWidth="2">
        <path d="M12 22S8 18 8 12V5L12 3L16 5V12C16 18 12 22 12 22Z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Radical Transparency",
    description: "We communicate openly — with our team, our investors, and our customers. No hidden agendas.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A56DB" strokeWidth="2">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Excellence",
    description: "We hold ourselves to the highest standards of craft — in code, in design, and in customer service.",
  },
];

export function About() {
  return (
    <>
      {/* Page Hero */}
      <section style={{ backgroundColor: "#F9FAFB", padding: "80px 24px 64px", borderBottom: "1px solid #E5E7EB" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
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
            About Us
          </span>
          <h1 style={{ fontSize: "48px", fontWeight: "700", color: "#111827", marginBottom: "20px", letterSpacing: "-0.5px", lineHeight: "1.2" }}>
            We're building the future of work
          </h1>
          <p style={{ fontSize: "18px", color: "#6B7280", lineHeight: "1.7" }}>
            NexaFlow was founded in 2021 with a simple mission: make teams more productive by eliminating the busywork that gets in the way of meaningful work.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section style={{ backgroundColor: "#FFFFFF", padding: "96px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "center",
          }} className="about-mission-grid">
            <div>
              <h2 style={{ fontSize: "40px", fontWeight: "700", color: "#111827", marginBottom: "20px", letterSpacing: "-0.5px", lineHeight: "1.2" }}>
                Our Mission
              </h2>
              <p style={{ fontSize: "17px", color: "#6B7280", lineHeight: "1.8", marginBottom: "20px" }}>
                We believe that great work happens when people have the right tools. Too many teams spend their time managing work instead of actually doing it — caught in endless meetings, status updates, and manual handoffs.
              </p>
              <p style={{ fontSize: "17px", color: "#6B7280", lineHeight: "1.8", marginBottom: "32px" }}>
                NexaFlow changes that. We bring together workflow automation, real-time collaboration, and powerful analytics into a single, intuitive platform that helps teams focus on what they do best.
              </p>
              <div style={{ display: "flex", gap: "32px" }}>
                <div>
                  <p style={{ fontSize: "36px", fontWeight: "700", color: "#1A56DB", margin: "0 0 4px" }}>2021</p>
                  <p style={{ fontSize: "14px", color: "#6B7280", margin: 0 }}>Founded</p>
                </div>
                <div>
                  <p style={{ fontSize: "36px", fontWeight: "700", color: "#1A56DB", margin: "0 0 4px" }}>80+</p>
                  <p style={{ fontSize: "14px", color: "#6B7280", margin: 0 }}>Team Members</p>
                </div>
                <div>
                  <p style={{ fontSize: "36px", fontWeight: "700", color: "#1A56DB", margin: "0 0 4px" }}>12</p>
                  <p style={{ fontSize: "14px", color: "#6B7280", margin: 0 }}>Countries</p>
                </div>
              </div>
            </div>
            <div>
              <div style={{ borderRadius: "12px", overflow: "hidden", border: "1px solid #E5E7EB" }}>
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1763038311036-6d18805537e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwYnVzaW5lc3MlMjBncm93dGglMjBjaGFydHxlbnwxfHx8fDE3NzY1Nzk0ODl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Company growth"
                  style={{ width: "100%", display: "block", height: "380px", objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 768px) { .about-mission-grid { grid-template-columns: 1fr !important; gap: 48px !important; } }
        `}</style>
      </section>

      {/* Values Section */}
      <section style={{ backgroundColor: "#F9FAFB", padding: "96px 24px", borderTop: "1px solid #E5E7EB" }}>
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
              Our Values
            </span>
            <h2 style={{ fontSize: "40px", fontWeight: "700", color: "#111827", marginBottom: "16px", letterSpacing: "-0.5px" }}>
              What we stand for
            </h2>
            <p style={{ fontSize: "18px", color: "#6B7280" }}>
              These principles guide everything we do at NexaFlow.
            </p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "28px",
          }} className="values-grid">
            {values.map((value) => (
              <div key={value.title} style={{
                padding: "32px 24px",
                border: "1px solid #E5E7EB",
                borderRadius: "12px",
                backgroundColor: "#FFFFFF",
                textAlign: "center",
              }}>
                <div style={{
                  width: "52px",
                  height: "52px",
                  backgroundColor: "#EFF6FF",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 20px",
                }}>
                  {value.icon}
                </div>
                <h3 style={{ fontSize: "17px", fontWeight: "600", color: "#111827", marginBottom: "10px" }}>
                  {value.title}
                </h3>
                <p style={{ fontSize: "14px", color: "#6B7280", lineHeight: "1.6", margin: 0 }}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 1024px) { .values-grid { grid-template-columns: repeat(2, 1fr) !important; } }
          @media (max-width: 640px) { .values-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      {/* Team Section */}
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
              The Team
            </span>
            <h2 style={{ fontSize: "40px", fontWeight: "700", color: "#111827", marginBottom: "16px", letterSpacing: "-0.5px" }}>
              Meet the founders
            </h2>
            <p style={{ fontSize: "18px", color: "#6B7280" }}>
              The people behind NexaFlow.
            </p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "32px",
            maxWidth: "900px",
            margin: "0 auto",
          }} className="team-grid">
            {teamMembers.map((member) => (
              <div key={member.name} style={{
                border: "1px solid #E5E7EB",
                borderRadius: "12px",
                overflow: "hidden",
                backgroundColor: "#FFFFFF",
              }}>
                <div style={{ height: "240px", overflow: "hidden" }}>
                  <ImageWithFallback
                    src={member.img}
                    alt={member.name}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
                <div style={{ padding: "24px" }}>
                  <h3 style={{ fontSize: "18px", fontWeight: "600", color: "#111827", marginBottom: "4px" }}>
                    {member.name}
                  </h3>
                  <p style={{ fontSize: "14px", color: "#1A56DB", fontWeight: "500", marginBottom: "12px" }}>
                    {member.role}
                  </p>
                  <p style={{ fontSize: "14px", color: "#6B7280", lineHeight: "1.6", margin: 0 }}>
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 768px) { .team-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      {/* Join CTA */}
      <section style={{ backgroundColor: "#F9FAFB", padding: "80px 24px", borderTop: "1px solid #E5E7EB" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "36px", fontWeight: "700", color: "#111827", marginBottom: "16px", letterSpacing: "-0.5px" }}>
            Join our growing team
          </h2>
          <p style={{ fontSize: "17px", color: "#6B7280", marginBottom: "32px", lineHeight: "1.7" }}>
            We're always looking for talented people to join us. Check out our open positions.
          </p>
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
              View Open Roles
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}
