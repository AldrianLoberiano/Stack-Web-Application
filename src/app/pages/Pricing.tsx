import { useState } from "react";
import { Link } from "react-router";

const plans = [
  {
    name: "Starter",
    monthlyPrice: 0,
    yearlyPrice: 0,
    description: "Perfect for individuals and small teams getting started.",
    color: "#374151",
    cta: "Get Started Free",
    ctaBg: "#FFFFFF",
    ctaColor: "#374151",
    ctaBorder: "1px solid #D1D5DB",
    features: [
      "Up to 3 team members",
      "5 active workflows",
      "100 automation runs/month",
      "Basic analytics",
      "Email support",
      "2 integrations",
    ],
    notIncluded: [
      "Advanced analytics",
      "Priority support",
      "SSO & SAML",
      "Custom integrations",
    ],
  },
  {
    name: "Pro",
    monthlyPrice: 29,
    yearlyPrice: 23,
    description: "For growing teams that need more power and flexibility.",
    color: "#1A56DB",
    popular: true,
    cta: "Start Free Trial",
    ctaBg: "#1A56DB",
    ctaColor: "#FFFFFF",
    ctaBorder: "none",
    features: [
      "Up to 25 team members",
      "Unlimited workflows",
      "10,000 automation runs/month",
      "Advanced analytics & reports",
      "Priority email & chat support",
      "100+ integrations",
      "Custom branding",
      "Audit logs",
    ],
    notIncluded: [
      "SSO & SAML",
      "Dedicated account manager",
    ],
  },
  {
    name: "Enterprise",
    monthlyPrice: 99,
    yearlyPrice: 79,
    description: "For large organizations with advanced security and compliance needs.",
    color: "#374151",
    cta: "Contact Sales",
    ctaBg: "#111827",
    ctaColor: "#FFFFFF",
    ctaBorder: "none",
    features: [
      "Unlimited team members",
      "Unlimited workflows",
      "Unlimited automation runs",
      "Advanced analytics & reporting",
      "Dedicated account manager",
      "1,000+ integrations",
      "Custom integrations & API",
      "SSO, SAML & 2FA",
      "SLA & uptime guarantee",
      "Custom data retention",
    ],
    notIncluded: [],
  },
];

const faqs = [
  {
    q: "Can I change my plan later?",
    a: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect on your next billing cycle.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and bank transfers for Enterprise plans.",
  },
  {
    q: "Is there a free trial?",
    a: "Yes! All paid plans include a 14-day free trial with full access to all features. No credit card required.",
  },
  {
    q: "What happens when I exceed automation runs?",
    a: "You'll receive a notification when you're approaching your limit. You can upgrade your plan or purchase additional runs.",
  },
  {
    q: "Do you offer discounts for nonprofits?",
    a: "Yes, we offer 50% off for registered nonprofit organizations. Contact our sales team to apply.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Absolutely. You can cancel your subscription at any time with no cancellation fees. Your data is yours.",
  },
];

export function Pricing() {
  const [isYearly, setIsYearly] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* Hero */}
      <section style={{ backgroundColor: "#F9FAFB", padding: "80px 24px 0", borderBottom: "none" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>
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
            Pricing
          </span>
          <h1 style={{ fontSize: "48px", fontWeight: "700", color: "#111827", marginBottom: "20px", letterSpacing: "-0.5px", lineHeight: "1.2" }}>
            Simple, transparent pricing
          </h1>
          <p style={{ fontSize: "18px", color: "#6B7280", marginBottom: "36px", lineHeight: "1.7" }}>
            Choose the plan that fits your team. Start free, scale as you grow.
          </p>

          {/* Toggle */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginBottom: "56px" }}>
            <span style={{ fontSize: "15px", color: isYearly ? "#6B7280" : "#111827", fontWeight: isYearly ? "400" : "600" }}>
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              style={{
                width: "52px",
                height: "28px",
                backgroundColor: isYearly ? "#1A56DB" : "#D1D5DB",
                border: "none",
                borderRadius: "100px",
                cursor: "pointer",
                position: "relative",
                padding: 0,
              }}
            >
              <div style={{
                width: "22px",
                height: "22px",
                backgroundColor: "#FFFFFF",
                borderRadius: "50%",
                position: "absolute",
                top: "3px",
                left: isYearly ? "27px" : "3px",
              }} />
            </button>
            <span style={{ fontSize: "15px", color: isYearly ? "#111827" : "#6B7280", fontWeight: isYearly ? "600" : "400" }}>
              Yearly
              <span style={{
                display: "inline-block",
                marginLeft: "8px",
                padding: "2px 8px",
                backgroundColor: "#DCFCE7",
                color: "#16A34A",
                fontSize: "12px",
                fontWeight: "600",
                borderRadius: "100px",
              }}>
                Save 20%
              </span>
            </span>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section style={{ backgroundColor: "#F9FAFB", padding: "0 24px 96px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
            alignItems: "start",
          }} className="pricing-grid">
            {plans.map((plan) => (
              <div key={plan.name} style={{
                border: plan.popular ? `2px solid #1A56DB` : "1px solid #E5E7EB",
                borderRadius: "16px",
                backgroundColor: "#FFFFFF",
                overflow: "hidden",
                position: "relative",
              }}>
                {plan.popular && (
                  <div style={{
                    backgroundColor: "#1A56DB",
                    padding: "6px",
                    textAlign: "center",
                  }}>
                    <span style={{ fontSize: "13px", fontWeight: "600", color: "#FFFFFF" }}>
                      Most Popular
                    </span>
                  </div>
                )}
                <div style={{ padding: "32px" }}>
                  <h3 style={{ fontSize: "22px", fontWeight: "700", color: "#111827", marginBottom: "8px" }}>
                    {plan.name}
                  </h3>
                  <p style={{ fontSize: "14px", color: "#6B7280", marginBottom: "24px", lineHeight: "1.5" }}>
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div style={{ marginBottom: "28px" }}>
                    <div style={{ display: "flex", alignItems: "baseline", gap: "4px" }}>
                      <span style={{ fontSize: "14px", color: "#6B7280" }}>$</span>
                      <span style={{ fontSize: "48px", fontWeight: "700", color: "#111827", lineHeight: "1" }}>
                        {plan.monthlyPrice === 0 ? "0" : isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                      </span>
                      {plan.monthlyPrice > 0 && (
                        <span style={{ fontSize: "14px", color: "#6B7280" }}>/month</span>
                      )}
                    </div>
                    {isYearly && plan.monthlyPrice > 0 && (
                      <p style={{ fontSize: "13px", color: "#6B7280", marginTop: "4px" }}>
                        Billed annually (${plan.yearlyPrice * 12}/year)
                      </p>
                    )}
                    {plan.monthlyPrice === 0 && (
                      <p style={{ fontSize: "14px", color: "#6B7280", marginTop: "4px" }}>Free forever</p>
                    )}
                  </div>

                  <Link to="/contact" style={{ textDecoration: "none", display: "block" }}>
                    <button style={{
                      width: "100%",
                      padding: "12px",
                      fontSize: "15px",
                      fontWeight: "600",
                      color: plan.ctaColor,
                      backgroundColor: plan.ctaBg,
                      border: plan.ctaBorder,
                      borderRadius: "8px",
                      cursor: "pointer",
                      marginBottom: "28px",
                    }}>
                      {plan.cta}
                    </button>
                  </Link>

                  <div style={{ borderTop: "1px solid #F3F4F6", paddingTop: "24px" }}>
                    <p style={{ fontSize: "13px", fontWeight: "600", color: "#374151", marginBottom: "16px", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                      What's included
                    </p>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
                      {plan.features.map((feature) => (
                        <li key={feature} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                          <div style={{
                            width: "18px",
                            height: "18px",
                            backgroundColor: "#DCFCE7",
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                            marginTop: "1px",
                          }}>
                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="3">
                              <path d="M20 6L9 17L4 12" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </div>
                          <span style={{ fontSize: "14px", color: "#374151", lineHeight: "1.5" }}>{feature}</span>
                        </li>
                      ))}
                      {plan.notIncluded.map((feature) => (
                        <li key={feature} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                          <div style={{
                            width: "18px",
                            height: "18px",
                            backgroundColor: "#F3F4F6",
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                            marginTop: "1px",
                          }}>
                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="3">
                              <path d="M18 6L6 18M6 6L18 18" strokeLinecap="round" />
                            </svg>
                          </div>
                          <span style={{ fontSize: "14px", color: "#9CA3AF", lineHeight: "1.5" }}>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 1024px) { .pricing-grid { grid-template-columns: 1fr !important; max-width: 480px; margin: 0 auto; } }
        `}</style>
      </section>

      {/* Feature Comparison Banner */}
      <section style={{ backgroundColor: "#EFF6FF", padding: "48px 24px", borderTop: "1px solid #BFDBFE", borderBottom: "1px solid #BFDBFE" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "24px", flexWrap: "wrap" }}>
          <div>
            <h3 style={{ fontSize: "22px", fontWeight: "700", color: "#111827", marginBottom: "8px" }}>
              Not sure which plan is right for you?
            </h3>
            <p style={{ fontSize: "16px", color: "#6B7280", margin: 0 }}>
              Talk to our team and we'll help you choose the best fit for your business.
            </p>
          </div>
          <Link to="/contact" style={{ textDecoration: "none" }}>
            <button style={{
              padding: "12px 28px",
              fontSize: "15px",
              fontWeight: "600",
              color: "#FFFFFF",
              backgroundColor: "#1A56DB",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              whiteSpace: "nowrap",
            }}>
              Talk to Sales
            </button>
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ backgroundColor: "#FFFFFF", padding: "96px 24px" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <h2 style={{ fontSize: "40px", fontWeight: "700", color: "#111827", marginBottom: "16px", letterSpacing: "-0.5px" }}>
              Frequently Asked Questions
            </h2>
            <p style={{ fontSize: "17px", color: "#6B7280" }}>
              Everything you need to know about NexaFlow pricing.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{
                borderBottom: "1px solid #E5E7EB",
              }}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "20px 0",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                    gap: "16px",
                  }}
                >
                  <span style={{ fontSize: "16px", fontWeight: "600", color: "#111827" }}>{faq.q}</span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#6B7280"
                    strokeWidth="2"
                    style={{ flexShrink: 0, transform: openFaq === i ? "rotate(180deg)" : "none" }}
                  >
                    <path d="M6 9L12 15L18 9" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                {openFaq === i && (
                  <div style={{ paddingBottom: "20px" }}>
                    <p style={{ fontSize: "15px", color: "#6B7280", lineHeight: "1.7", margin: 0 }}>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
