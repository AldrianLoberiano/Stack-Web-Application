import { useState } from "react";

const contactInfo = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1A56DB" strokeWidth="2">
        <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" />
        <path d="M22 6L12 13L2 6" />
      </svg>
    ),
    label: "Email",
    value: "hello@nexaflow.io",
    sub: "We'll respond within 24 hours",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1A56DB" strokeWidth="2">
        <path d="M22 16.92V19.92C22.0011 20.483 21.7654 21.0218 21.3443 21.3985C20.9232 21.7752 20.3558 21.9537 19.79 21.9C16.6585 21.5613 13.6697 20.4794 11.07 18.75C8.65073 17.1693 6.60489 15.1234 5.02398 12.704C3.28946 10.0925 2.20718 7.0891 1.87398 3.942C1.81995 3.37859 1.99726 2.81393 2.37168 2.39437C2.74611 1.97481 3.28028 1.79535 3.84198 1.8H6.83998C7.88041 1.78949 8.76791 2.50226 8.94998 3.528C9.1085 4.44879 9.37089 5.35059 9.73098 6.214C9.98942 6.83654 9.84022 7.5499 9.35898 8.019L8.08898 9.289C9.5136 11.9063 11.6977 14.0904 14.315 15.515L15.585 14.245C16.0541 13.7638 16.7675 13.6146 17.39 13.873C18.2533 14.2331 19.155 14.4955 20.076 14.654C21.1131 14.8383 21.8337 15.7418 21.8 16.8L22 16.92Z" />
      </svg>
    ),
    label: "Phone",
    value: "+1 (555) 000-0000",
    sub: "Mon–Fri, 9am–6pm EST",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1A56DB" strokeWidth="2">
        <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.613 3.948 5.325 5.636 3.636C7.325 1.948 9.613 1 12 1C14.387 1 16.675 1.948 18.364 3.636C20.052 5.325 21 7.613 21 10Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: "Office",
    value: "340 Pine Street, Suite 800",
    sub: "San Francisco, CA 94104",
  },
];

export function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    subject: "General Inquiry",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submission
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      {/* Hero */}
      <section style={{ backgroundColor: "#F9FAFB", padding: "80px 24px 64px", borderBottom: "1px solid #E5E7EB" }}>
        <div style={{ maxWidth: "640px", margin: "0 auto", textAlign: "center" }}>
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
            Contact
          </span>
          <h1 style={{ fontSize: "48px", fontWeight: "700", color: "#111827", marginBottom: "20px", letterSpacing: "-0.5px" }}>
            Get in Touch
          </h1>
          <p style={{ fontSize: "18px", color: "#6B7280", lineHeight: "1.7" }}>
            Have a question or want to see a demo? Our team is here to help.
          </p>
        </div>
      </section>

      {/* Contact Cards + Form */}
      <section style={{ backgroundColor: "#FFFFFF", padding: "80px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            gap: "64px",
            alignItems: "start",
          }} className="contact-grid">
            {/* Left: Info */}
            <div>
              <h2 style={{ fontSize: "28px", fontWeight: "700", color: "#111827", marginBottom: "12px" }}>
                Contact Information
              </h2>
              <p style={{ fontSize: "15px", color: "#6B7280", marginBottom: "36px", lineHeight: "1.6" }}>
                Reach out through any of the channels below, or fill out the form and we'll get back to you shortly.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
                {contactInfo.map((info) => (
                  <div key={info.label} style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                    <div style={{
                      width: "48px",
                      height: "48px",
                      backgroundColor: "#EFF6FF",
                      borderRadius: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}>
                      {info.icon}
                    </div>
                    <div>
                      <p style={{ fontSize: "13px", fontWeight: "600", color: "#6B7280", margin: "0 0 2px", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                        {info.label}
                      </p>
                      <p style={{ fontSize: "16px", fontWeight: "600", color: "#111827", margin: "0 0 2px" }}>
                        {info.value}
                      </p>
                      <p style={{ fontSize: "13px", color: "#9CA3AF", margin: 0 }}>
                        {info.sub}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social */}
              <div style={{ marginTop: "48px" }}>
                <p style={{ fontSize: "14px", fontWeight: "600", color: "#374151", marginBottom: "16px" }}>
                  Follow us
                </p>
                <div style={{ display: "flex", gap: "12px" }}>
                  {["Twitter", "LinkedIn", "GitHub"].map((social) => (
                    <a
                      key={social}
                      href="#"
                      style={{
                        padding: "8px 16px",
                        border: "1px solid #E5E7EB",
                        borderRadius: "6px",
                        fontSize: "14px",
                        color: "#374151",
                        textDecoration: "none",
                        fontWeight: "500",
                      }}
                    >
                      {social}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div style={{ border: "1px solid #E5E7EB", borderRadius: "16px", padding: "40px", backgroundColor: "#FFFFFF" }}>
              {submitted ? (
                <div style={{ textAlign: "center", padding: "40px 0" }}>
                  <div style={{
                    width: "64px",
                    height: "64px",
                    backgroundColor: "#DCFCE7",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 20px",
                  }}>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2.5">
                      <path d="M20 6L9 17L4 12" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 style={{ fontSize: "24px", fontWeight: "700", color: "#111827", marginBottom: "12px" }}>
                    Message Sent!
                  </h3>
                  <p style={{ fontSize: "16px", color: "#6B7280", lineHeight: "1.6", marginBottom: "28px" }}>
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setFormData({ firstName: "", lastName: "", email: "", company: "", subject: "General Inquiry", message: "" }); }}
                    style={{
                      padding: "12px 24px",
                      fontSize: "15px",
                      fontWeight: "600",
                      color: "#FFFFFF",
                      backgroundColor: "#1A56DB",
                      border: "none",
                      borderRadius: "8px",
                      cursor: "pointer",
                    }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <h3 style={{ fontSize: "22px", fontWeight: "700", color: "#111827", marginBottom: "28px" }}>
                    Send us a message
                  </h3>
                  <form onSubmit={handleSubmit}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" }} className="form-name-grid">
                      <div>
                        <label style={{ display: "block", fontSize: "14px", fontWeight: "500", color: "#374151", marginBottom: "6px" }}>
                          First Name <span style={{ color: "#EF4444" }}>*</span>
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                          placeholder="John"
                          style={{
                            width: "100%",
                            padding: "10px 14px",
                            fontSize: "15px",
                            color: "#111827",
                            backgroundColor: "#F9FAFB",
                            border: "1px solid #E5E7EB",
                            borderRadius: "8px",
                            boxSizing: "border-box",
                            outline: "none",
                          }}
                        />
                      </div>
                      <div>
                        <label style={{ display: "block", fontSize: "14px", fontWeight: "500", color: "#374151", marginBottom: "6px" }}>
                          Last Name <span style={{ color: "#EF4444" }}>*</span>
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                          placeholder="Doe"
                          style={{
                            width: "100%",
                            padding: "10px 14px",
                            fontSize: "15px",
                            color: "#111827",
                            backgroundColor: "#F9FAFB",
                            border: "1px solid #E5E7EB",
                            borderRadius: "8px",
                            boxSizing: "border-box",
                            outline: "none",
                          }}
                        />
                      </div>
                    </div>

                    <div style={{ marginBottom: "16px" }}>
                      <label style={{ display: "block", fontSize: "14px", fontWeight: "500", color: "#374151", marginBottom: "6px" }}>
                        Email Address <span style={{ color: "#EF4444" }}>*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@company.com"
                        style={{
                          width: "100%",
                          padding: "10px 14px",
                          fontSize: "15px",
                          color: "#111827",
                          backgroundColor: "#F9FAFB",
                          border: "1px solid #E5E7EB",
                          borderRadius: "8px",
                          boxSizing: "border-box",
                          outline: "none",
                        }}
                      />
                    </div>

                    <div style={{ marginBottom: "16px" }}>
                      <label style={{ display: "block", fontSize: "14px", fontWeight: "500", color: "#374151", marginBottom: "6px" }}>
                        Company
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Acme Inc."
                        style={{
                          width: "100%",
                          padding: "10px 14px",
                          fontSize: "15px",
                          color: "#111827",
                          backgroundColor: "#F9FAFB",
                          border: "1px solid #E5E7EB",
                          borderRadius: "8px",
                          boxSizing: "border-box",
                          outline: "none",
                        }}
                      />
                    </div>

                    <div style={{ marginBottom: "16px" }}>
                      <label style={{ display: "block", fontSize: "14px", fontWeight: "500", color: "#374151", marginBottom: "6px" }}>
                        Subject
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        style={{
                          width: "100%",
                          padding: "10px 14px",
                          fontSize: "15px",
                          color: "#111827",
                          backgroundColor: "#F9FAFB",
                          border: "1px solid #E5E7EB",
                          borderRadius: "8px",
                          boxSizing: "border-box",
                          outline: "none",
                          appearance: "none",
                        }}
                      >
                        <option>General Inquiry</option>
                        <option>Sales</option>
                        <option>Technical Support</option>
                        <option>Billing</option>
                        <option>Partnership</option>
                      </select>
                    </div>

                    <div style={{ marginBottom: "28px" }}>
                      <label style={{ display: "block", fontSize: "14px", fontWeight: "500", color: "#374151", marginBottom: "6px" }}>
                        Message <span style={{ color: "#EF4444" }}>*</span>
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Tell us how we can help..."
                        style={{
                          width: "100%",
                          padding: "10px 14px",
                          fontSize: "15px",
                          color: "#111827",
                          backgroundColor: "#F9FAFB",
                          border: "1px solid #E5E7EB",
                          borderRadius: "8px",
                          boxSizing: "border-box",
                          outline: "none",
                          resize: "vertical",
                          fontFamily: "inherit",
                          lineHeight: "1.5",
                        }}
                      />
                    </div>

                    <button
                      type="submit"
                      style={{
                        width: "100%",
                        padding: "13px",
                        fontSize: "16px",
                        fontWeight: "600",
                        color: "#FFFFFF",
                        backgroundColor: "#1A56DB",
                        border: "none",
                        borderRadius: "8px",
                        cursor: "pointer",
                      }}
                    >
                      Send Message
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 768px) { .contact-grid { grid-template-columns: 1fr !important; } .form-name-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      {/* Map Placeholder */}
      <section style={{ backgroundColor: "#F9FAFB", borderTop: "1px solid #E5E7EB" }}>
        <div style={{
          height: "300px",
          backgroundColor: "#E5E7EB",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
          <div style={{ textAlign: "center" }}>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="1.5" style={{ marginBottom: "12px" }}>
              <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.613 3.948 5.325 5.636 3.636C7.325 1.948 9.613 1 12 1C14.387 1 16.675 1.948 18.364 3.636C20.052 5.325 21 7.613 21 10Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <p style={{ fontSize: "15px", color: "#9CA3AF", margin: 0 }}>340 Pine Street, Suite 800 · San Francisco, CA 94104</p>
          </div>
        </div>
      </section>
    </>
  );
}
