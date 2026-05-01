import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { Building2, ChevronLeft, ChevronRight, PartyPopper, Rocket, Zap } from "lucide-react";
import { useAuth } from "../context/AuthContext";

export function SignUp() {
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    company: "",
    plan: "starter",
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState(1);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }
    setIsLoading(true);
    setError("");
    const result = await signup(form);
    setIsLoading(false);
    if (result.success) {
      navigate("/dashboard");
    } else {
      setError(result.message);
    }
  };

  const plans = [
    { value: "starter", label: "Starter", desc: "Free · Up to 5 users", Icon: Rocket },
    { value: "pro", label: "Pro", desc: "$29/mo · Unlimited users", Icon: Zap },
    { value: "enterprise", label: "Enterprise", desc: "Custom pricing", Icon: Building2 },
  ];

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
      }} className="signup-left-panel">
        <div style={{ position: "absolute", top: "-80px", right: "-80px", width: "320px", height: "320px", background: "rgba(255,255,255,0.05)", borderRadius: "50%" }} />
        <div style={{ position: "absolute", bottom: "-60px", left: "-60px", width: "240px", height: "240px", background: "rgba(255,255,255,0.05)", borderRadius: "50%" }} />

        <Link to="/" style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "10px", marginBottom: "64px" }}>
          <div style={{ width: "40px", height: "40px", backgroundColor: "rgba(255,255,255,0.2)", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="22" height="22" viewBox="0 0 20 20" fill="none">
              <path d="M10 2L18 7V13L10 18L2 13V7L10 2Z" fill="#FFFFFF" />
            </svg>
          </div>
          <span style={{ fontSize: "22px", fontWeight: "700", color: "#FFFFFF" }}>NexaFlow</span>
        </Link>

        <h2 style={{ fontSize: "36px", fontWeight: "700", color: "#FFFFFF", lineHeight: "1.2", marginBottom: "20px" }}>
          Start automating<br />your workflows today
        </h2>
        <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.75)", lineHeight: "1.7", maxWidth: "360px", marginBottom: "40px" }}>
          Join 10,000+ teams already using NexaFlow to move faster and accomplish more.
        </p>

        {/* Feature bullets */}
        {[
          "Drag-and-drop workflow builder",
          "1,000+ app integrations",
          "Real-time analytics dashboard",
          "Enterprise-grade security",
        ].map((f) => (
          <div key={f} style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "14px" }}>
            <div style={{ width: "20px", height: "20px", backgroundColor: "rgba(255,255,255,0.2)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                <path d="M2 6L5 9L10 3" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span style={{ fontSize: "14px", color: "rgba(255,255,255,0.85)" }}>{f}</span>
          </div>
        ))}
      </div>

      {/* Right Panel — Form */}
      <div style={{ flex: "1", display: "flex", alignItems: "center", justifyContent: "center", padding: "48px 24px", overflowY: "auto" }}>
        <div style={{ width: "100%", maxWidth: "460px" }}>
          <h1 style={{ fontSize: "28px", fontWeight: "700", color: "#111827", marginBottom: "8px" }}>
            Create your account
          </h1>
          <p style={{ fontSize: "15px", color: "#6B7280", marginBottom: "32px" }}>
            Already have an account?{" "}
            <Link to="/login" style={{ color: "#1A56DB", fontWeight: "600", textDecoration: "none" }}>Sign in</Link>
          </p>

          {/* Step indicator */}
          <div style={{ display: "flex", gap: "8px", marginBottom: "32px" }}>
            {[1, 2].map(s => (
              <div key={s} style={{
                height: "4px",
                flex: 1,
                borderRadius: "4px",
                backgroundColor: step >= s ? "#1A56DB" : "#E5E7EB",
                transition: "background-color 0.3s",
              }} />
            ))}
          </div>

          {error && (
            <div style={{ padding: "12px 16px", backgroundColor: "#FEF2F2", border: "1px solid #FECACA", borderRadius: "8px", marginBottom: "20px", display: "flex", alignItems: "center", gap: "8px" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8v4M12 16h.01" strokeLinecap="round" />
              </svg>
              <span style={{ fontSize: "14px", color: "#DC2626" }}>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit}>
            {step === 1 && (
              <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "14px", fontWeight: "500", color: "#374151", marginBottom: "6px" }}>First name</label>
                    <input
                      id="signup-firstname"
                      type="text"
                      name="firstName"
                      value={form.firstName}
                      onChange={handleChange}
                      required
                      placeholder="John"
                      style={{ width: "100%", padding: "11px 14px", fontSize: "15px", color: "#111827", backgroundColor: "#FFFFFF", border: "1px solid #D1D5DB", borderRadius: "8px", outline: "none", boxSizing: "border-box" }}
                      onFocus={e => e.target.style.borderColor = "#1A56DB"}
                      onBlur={e => e.target.style.borderColor = "#D1D5DB"}
                    />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: "14px", fontWeight: "500", color: "#374151", marginBottom: "6px" }}>Last name</label>
                    <input
                      id="signup-lastname"
                      type="text"
                      name="lastName"
                      value={form.lastName}
                      onChange={handleChange}
                      required
                      placeholder="Doe"
                      style={{ width: "100%", padding: "11px 14px", fontSize: "15px", color: "#111827", backgroundColor: "#FFFFFF", border: "1px solid #D1D5DB", borderRadius: "8px", outline: "none", boxSizing: "border-box" }}
                      onFocus={e => e.target.style.borderColor = "#1A56DB"}
                      onBlur={e => e.target.style.borderColor = "#D1D5DB"}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "14px", fontWeight: "500", color: "#374151", marginBottom: "6px" }}>Work email</label>
                  <input
                    id="signup-email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="you@company.com"
                    style={{ width: "100%", padding: "11px 14px", fontSize: "15px", color: "#111827", backgroundColor: "#FFFFFF", border: "1px solid #D1D5DB", borderRadius: "8px", outline: "none", boxSizing: "border-box" }}
                    onFocus={e => e.target.style.borderColor = "#1A56DB"}
                    onBlur={e => e.target.style.borderColor = "#D1D5DB"}
                  />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "14px", fontWeight: "500", color: "#374151", marginBottom: "6px" }}>Password</label>
                  <input
                    id="signup-password"
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    required
                    placeholder="At least 6 characters"
                    style={{ width: "100%", padding: "11px 14px", fontSize: "15px", color: "#111827", backgroundColor: "#FFFFFF", border: "1px solid #D1D5DB", borderRadius: "8px", outline: "none", boxSizing: "border-box" }}
                    onFocus={e => e.target.style.borderColor = "#1A56DB"}
                    onBlur={e => e.target.style.borderColor = "#D1D5DB"}
                  />
                </div>

                <button
                  type="button"
                  onClick={() => {
                    if (!form.firstName || !form.lastName || !form.email || !form.password) {
                      setError("Please fill in all fields.");
                      return;
                    }
                    if (form.password.length < 6) {
                      setError("Password must be at least 6 characters.");
                      return;
                    }
                    setError("");
                    setStep(2);
                  }}
                  style={{ width: "100%", padding: "12px", fontSize: "15px", fontWeight: "600", color: "#FFFFFF", backgroundColor: "#1A56DB", border: "none", borderRadius: "8px", cursor: "pointer" }}
                >
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                    Continue
                    <ChevronRight size={16} />
                  </span>
                </button>
              </div>
            )}

            {step === 2 && (
              <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                <div>
                  <label style={{ display: "block", fontSize: "14px", fontWeight: "500", color: "#374151", marginBottom: "6px" }}>Company name <span style={{ color: "#9CA3AF" }}>(optional)</span></label>
                  <input
                    id="signup-company"
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Acme Inc."
                    style={{ width: "100%", padding: "11px 14px", fontSize: "15px", color: "#111827", backgroundColor: "#FFFFFF", border: "1px solid #D1D5DB", borderRadius: "8px", outline: "none", boxSizing: "border-box" }}
                    onFocus={e => e.target.style.borderColor = "#1A56DB"}
                    onBlur={e => e.target.style.borderColor = "#D1D5DB"}
                  />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "14px", fontWeight: "500", color: "#374151", marginBottom: "10px" }}>Choose your plan</label>
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    {plans.map(p => {
                      const PlanIcon = p.Icon;
                      return (
                      <label key={p.value} style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "14px",
                        padding: "14px 16px",
                        border: `2px solid ${form.plan === p.value ? "#1A56DB" : "#E5E7EB"}`,
                        borderRadius: "10px",
                        backgroundColor: form.plan === p.value ? "#EFF6FF" : "#FFFFFF",
                        cursor: "pointer",
                        transition: "all 0.15s",
                      }}>
                        <input
                          type="radio"
                          name="plan"
                          value={p.value}
                          checked={form.plan === p.value}
                          onChange={handleChange}
                          style={{ display: "none" }}
                        />
                        <div style={{ color: "#374151", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <PlanIcon size={18} />
                        </div>
                        <div style={{ flex: 1 }}>
                          <p style={{ fontSize: "14px", fontWeight: "600", color: "#111827", margin: 0 }}>{p.label}</p>
                          <p style={{ fontSize: "13px", color: "#6B7280", margin: 0 }}>{p.desc}</p>
                        </div>
                        {form.plan === p.value && (
                          <div style={{ width: "20px", height: "20px", backgroundColor: "#1A56DB", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                              <path d="M2 6L5 9L10 3" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </div>
                        )}
                      </label>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "12px" }}>
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    style={{ flex: "0 0 auto", padding: "12px 20px", fontSize: "15px", fontWeight: "500", color: "#374151", backgroundColor: "#FFFFFF", border: "1px solid #D1D5DB", borderRadius: "8px", cursor: "pointer" }}
                  >
                    ← Back
                  </button>
                  <button
                    id="signup-submit"
                    type="submit"
                    disabled={isLoading}
                    style={{ flex: 1, padding: "12px", fontSize: "15px", fontWeight: "600", color: "#FFFFFF", backgroundColor: isLoading ? "#6B9FE8" : "#1A56DB", border: "none", borderRadius: "8px", cursor: isLoading ? "not-allowed" : "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}
                  >
                    {isLoading ? (
                      <>
                        <div style={{ width: "16px", height: "16px", border: "2px solid rgba(255,255,255,0.4)", borderTopColor: "#fff", borderRadius: "50%", animation: "spin 0.8s linear infinite" }} />
                        Creating account...
                      </>
                    ) : "Create Account 🎉"}
                  </button>
                </div>
              </div>
            )}
          </form>

          <p style={{ fontSize: "13px", color: "#9CA3AF", marginTop: "24px", textAlign: "center" }}>
            By signing up, you agree to our{" "}
            <a href="#" style={{ color: "#6B7280", textDecoration: "underline" }}>Terms of Service</a>
            {" "}and{" "}
            <a href="#" style={{ color: "#6B7280", textDecoration: "underline" }}>Privacy Policy</a>
          </p>
        </div>
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @media (max-width: 768px) { .signup-left-panel { display: none !important; } }
      `}</style>
    </div>
  );
}
