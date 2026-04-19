import { Link } from "react-router";

export function NotFound() {
  return (
    <section style={{ backgroundColor: "#F9FAFB", padding: "120px 24px", textAlign: "center" }}>
      <div style={{ maxWidth: "500px", margin: "0 auto" }}>
        <p style={{ fontSize: "120px", fontWeight: "700", color: "#E5E7EB", margin: "0 0 16px", lineHeight: "1" }}>
          404
        </p>
        <h1 style={{ fontSize: "32px", fontWeight: "700", color: "#111827", marginBottom: "16px" }}>
          Page not found
        </h1>
        <p style={{ fontSize: "17px", color: "#6B7280", marginBottom: "36px", lineHeight: "1.7" }}>
          Sorry, we couldn't find the page you're looking for. It may have been moved or doesn't exist.
        </p>
        <Link to="/" style={{ textDecoration: "none" }}>
          <button style={{
            padding: "13px 28px",
            fontSize: "16px",
            fontWeight: "600",
            color: "#FFFFFF",
            backgroundColor: "#1A56DB",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}>
            Go Back Home
          </button>
        </Link>
      </div>
    </section>
  );
}
