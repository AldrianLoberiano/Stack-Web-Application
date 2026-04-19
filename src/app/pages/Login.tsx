import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";

export function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    const result = await login(form.email, form.password);
    setIsLoading(false);
    if (result.success) {
      navigate("/dashboard");
    } else {
      setError(result.message);
    }
  };

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      backgroundColor: "#F9FAFB",
      fontFamily: "'Inter', -apple-system, sans-serif",
    }}>
      {/* Left Panel */}
      <div style={{
        flex: "1",
        background: "linear-gradient(135deg, #1A56DB 0%, #1e40af 50%, #0f2d6b 100%)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "64px",
        position: "relative",
        overflow: "hidden",
      }} className="login-left-panel">
        {/* Background decoration */}
        <div style={{
          position: "absolute",
          top: "-80px",
          right: "-80px",
          width: "320px",
          height: "320px",
          background: "rgba(255,255,255,0.05)",
          borderRadius: "50%",
        }} />
        <div style={{
          position: "absolute",
          bottom: "-60px",
          left: "-60px",
          width: "240px",
          height: "240px",
          background: "rgba(255,255,255,0.05)",
          borderRadius: "50%",
        }} />

        {/* Logo */}
        <Link to="/" style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "10px", marginBottom: "64px" }}>
          <div style={{
            width: "40px",
            height: "40px",
            backgroundColor: "rgba(255,255,255,0.2)",
            borderRadius: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
            <svg width="22" height="22" viewBox="0 0 20 20" fill="none">
              <path d="M10 2L18 7V13L10 18L2 13V7L10 2Z" fill="#FFFFFF" />
            </svg>
          </div>
          <span style={{ fontSize: "22px", fontWeight: "700", color: "#FFFFFF" }}>NexaFlow</span>
        </Link>

        <h2 style={{ fontSize: "36px", fontWeight: "700", color: "#FFFFFF", lineHeight: "1.2", marginBottom: "20px" }}>
          Welcome back to<br />your workspace
        </h2>
        <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.75)", lineHeight: "1.7", maxWidth: "360px" }}>
          Thousands of teams use NexaFlow to automate their workflows and collaborate more efficiently.
        </p>

        {/* Testimonial */}
        <div style={{
          marginTop: "48px",
          padding: "24px",
          background: "rgba(255,255,255,0.1)",
          borderRadius: "12px",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255,255,255,0.15)",
        }}>
          <div style={{ display: "flex", gap: "4px", marginBottom: "12px" }}>
            {[1,2,3,4,5].map(i => (
              <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#FCD34D">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
            ))}
          </div>
          <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.9)", lineHeight: "1.6", margin: "0 0 16px" }}>
            "NexaFlow cut our workflow setup time by 70%. It's the backbone of our operations now."
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div style={{
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              backgroundColor: "#DBEAFE",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
              <span style={{ fontSize: "14px", fontWeight: "600", color: "#1A56DB" }}>MR</span>
            </div>
            <div>
              <p style={{ fontSize: "13px", fontWeight: "600", color: "#fff", margin: 0 }}>Marcus Rivera</p>
              <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.6)", margin: 0 }}>CTO, Finwave Solutions</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel — Form */}
      <div style={{
        flex: "1",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "48px 24px",
      }}>
        <div style={{ width: "100%", maxWidth: "420px" }}>
          <h1 style={{ fontSize: "28px", fontWeight: "700", color: "#111827", marginBottom: "8px" }}>
            Sign in to your account
          </h1>
          <p style={{ fontSize: "15px", color: "#6B7280", marginBottom: "36px" }}>
            Don't have an account?{" "}
            <Link to="/signup" style={{ color: "#1A56DB", fontWeight: "600", textDecoration: "none" }}>
              Sign up for free
            </Link>
          </p>

          {error && (
            <div style={{
              padding: "12px 16px",
              backgroundColor: "#FEF2F2",
              border: "1px solid #FECACA",
              borderRadius: "8px",
              marginBottom: "20px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8v4M12 16h.01" strokeLinecap="round" />
              </svg>
              <span style={{ fontSize: "14px", color: "#DC2626" }}>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div>
              <label style={{ display: "block", fontSize: "14px", fontWeight: "500", color: "#374151", marginBottom: "6px" }}>
                Email address
              </label>
              <input
                id="login-email"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="you@company.com"
                style={{
                  width: "100%",
                  padding: "11px 14px",
                  fontSize: "15px",
                  color: "#111827",
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #D1D5DB",
                  borderRadius: "8px",
                  outline: "none",
                  boxSizing: "border-box",
                  transition: "border-color 0.15s",
                }}
                onFocus={e => e.target.style.borderColor = "#1A56DB"}
                onBlur={e => e.target.style.borderColor = "#D1D5DB"}
              />
            </div>

            <div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                <label style={{ fontSize: "14px", fontWeight: "500", color: "#374151" }}>
                  Password
                </label>
                <a href="#" style={{ fontSize: "13px", color: "#1A56DB", textDecoration: "none" }}>
                  Forgot password?
                </a>
              </div>
              <input
                id="login-password"
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                required
                placeholder="••••••••"
                style={{
                  width: "100%",
                  padding: "11px 14px",
                  fontSize: "15px",
                  color: "#111827",
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #D1D5DB",
                  borderRadius: "8px",
                  outline: "none",
                  boxSizing: "border-box",
                }}
                onFocus={e => e.target.style.borderColor = "#1A56DB"}
                onBlur={e => e.target.style.borderColor = "#D1D5DB"}
              />
            </div>

            <button
              id="login-submit"
              type="submit"
              disabled={isLoading}
              style={{
                width: "100%",
                padding: "12px",
                fontSize: "15px",
                fontWeight: "600",
                color: "#FFFFFF",
                backgroundColor: isLoading ? "#6B9FE8" : "#1A56DB",
                border: "none",
                borderRadius: "8px",
                cursor: isLoading ? "not-allowed" : "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                transition: "background-color 0.15s",
              }}
            >
              {isLoading ? (
                <>
                  <div style={{
                    width: "16px",
                    height: "16px",
                    border: "2px solid rgba(255,255,255,0.4)",
                    borderTopColor: "#fff",
                    borderRadius: "50%",
                    animation: "spin 0.8s linear infinite",
                  }} />
                  Signing in...
                </>
              ) : "Sign in"}
            </button>
          </form>

          <div style={{ marginTop: "32px", textAlign: "center" }}>
            <p style={{ fontSize: "13px", color: "#9CA3AF" }}>
              By signing in, you agree to our{" "}
              <a href="#" style={{ color: "#6B7280", textDecoration: "underline" }}>Terms</a>
              {" "}and{" "}
              <a href="#" style={{ color: "#6B7280", textDecoration: "underline" }}>Privacy Policy</a>
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @media (max-width: 768px) { .login-left-panel { display: none !important; } }
      `}</style>
    </div>
  );
}
