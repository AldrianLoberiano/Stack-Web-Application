import { useState } from "react";
import { Bell, CheckCircle2, CreditCard, Lock, User } from "lucide-react";
import { useAuth } from "../../context/AuthContext";

const planFeatures: Record<string, string[]> = {
  starter: ["Up to 5 users", "10 active workflows", "Basic analytics", "Email support"],
  pro: ["Unlimited users", "Unlimited workflows", "Advanced analytics", "Priority support", "Custom integrations"],
  enterprise: ["Everything in Pro", "Dedicated account manager", "Custom SLA", "SSO & SAML", "On-premise deployment"],
};

const planPrices: Record<string, string> = {
  starter: "Free",
  pro: "$29/month",
  enterprise: "Custom",
};

const notificationItems = [
  { key: "projectUpdates", label: "Project updates", desc: "Get notified when projects are updated" },
  { key: "taskAssignments", label: "Task assignments", desc: "When someone assigns you a task" },
  { key: "teamMentions", label: "Team mentions", desc: "When someone mentions you in a comment" },
  { key: "weeklyDigest", label: "Weekly digest", desc: "A weekly summary of your workspace activity" },
  { key: "marketingEmails", label: "Marketing emails", desc: "Product news, tips, and updates from NexaFlow" },
];

export function Settings() {
  const { user } = useAuth();

  const [profile, setProfile] = useState({
    firstName: user?.firstName || "",
    lastName: user?.lastName || "",
    email: user?.email || "",
    company: user?.company || "",
  });

  const [passwords, setPasswords] = useState({
    current: "",
    newPass: "",
    confirm: "",
  });

  const [profileSaved, setProfileSaved] = useState(false);
  const [passwordSaved, setPasswordSaved] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [activeTab, setActiveTab] = useState<"profile" | "security" | "plan" | "notifications">("profile");
  const [notifs, setNotifs] = useState<Record<string, boolean>>({
    projectUpdates: true,
    taskAssignments: true,
    teamMentions: true,
    weeklyDigest: false,
    marketingEmails: false,
  });

  const handleProfileSave = (e: React.FormEvent) => {
    e.preventDefault();
    setProfileSaved(true);
    setTimeout(() => setProfileSaved(false), 2500);
  };

  const handlePasswordSave = (e: React.FormEvent) => {
    e.preventDefault();
    setPasswordError("");
    if (passwords.newPass.length < 6) {
      setPasswordError("New password must be at least 6 characters.");
      return;
    }
    if (passwords.newPass !== passwords.confirm) {
      setPasswordError("Passwords do not match.");
      return;
    }
    setPasswordSaved(true);
    setPasswords({ current: "", newPass: "", confirm: "" });
    setTimeout(() => setPasswordSaved(false), 2500);
  };

  const tabs = [
    { id: "profile", label: "Profile", Icon: User },
    { id: "security", label: "Security", Icon: Lock },
    { id: "plan", label: "Plan & Billing", Icon: CreditCard },
    { id: "notifications", label: "Notifications", Icon: Bell },
  ] as const;

  return (
    <div>
      <div style={{ marginBottom: "24px" }}>
        <h1 style={{ fontSize: "22px", fontWeight: "700", color: "#111827", margin: "0 0 4px" }}>Settings</h1>
        <p style={{ fontSize: "14px", color: "#6B7280", margin: 0 }}>Manage your account and preferences</p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "220px 1fr", gap: "24px", alignItems: "start" }} className="settings-grid">
        {/* Sidebar Tabs */}
        <div style={{ backgroundColor: "#FFFFFF", border: "1px solid #E5E7EB", borderRadius: "12px", padding: "8px", display: "flex", flexDirection: "column", gap: "2px" }}>
          {tabs.map(tab => (
            (() => {
              const TabIcon = tab.Icon;
              return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "10px 14px",
                borderRadius: "8px",
                fontSize: "14px",
                fontWeight: activeTab === tab.id ? "600" : "500",
                color: activeTab === tab.id ? "#1A56DB" : "#6B7280",
                backgroundColor: activeTab === tab.id ? "#EFF6FF" : "transparent",
                border: "none",
                cursor: "pointer",
                textAlign: "left",
                width: "100%",
              }}
            >
              <TabIcon size={16} />
              {tab.label}
            </button>
              );
            })()
          ))}
        </div>

        {/* Content Panel */}
        <div style={{ backgroundColor: "#FFFFFF", border: "1px solid #E5E7EB", borderRadius: "12px", overflow: "hidden" }}>
          {/* Profile Tab */}
          {activeTab === "profile" && (
            <div>
              <div style={{ padding: "24px", borderBottom: "1px solid #F3F4F6" }}>
                <h2 style={{ fontSize: "16px", fontWeight: "700", color: "#111827", margin: "0 0 4px" }}>Profile Information</h2>
                <p style={{ fontSize: "13px", color: "#6B7280", margin: 0 }}>Update your personal details</p>
              </div>

              {/* Avatar */}
              <div style={{ padding: "24px", borderBottom: "1px solid #F3F4F6", display: "flex", alignItems: "center", gap: "20px" }}>
                <div style={{ width: "72px", height: "72px", borderRadius: "50%", backgroundColor: "#1A56DB", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontSize: "26px", fontWeight: "700", color: "#FFFFFF" }}>
                    {profile.firstName[0]}{profile.lastName[0]}
                  </span>
                </div>
                <div>
                  <button style={{ padding: "8px 16px", fontSize: "13px", fontWeight: "600", color: "#1A56DB", backgroundColor: "#EFF6FF", border: "1px solid #BFDBFE", borderRadius: "8px", cursor: "pointer", marginRight: "8px" }}>
                    Upload Photo
                  </button>
                  <button style={{ padding: "8px 16px", fontSize: "13px", color: "#6B7280", backgroundColor: "#F9FAFB", border: "1px solid #E5E7EB", borderRadius: "8px", cursor: "pointer" }}>
                    Remove
                  </button>
                </div>
              </div>

              <form onSubmit={handleProfileSave} style={{ padding: "24px", display: "flex", flexDirection: "column", gap: "16px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }} className="form-grid-2">
                  <div>
                    <label style={{ display: "block", fontSize: "13px", fontWeight: "500", color: "#374151", marginBottom: "6px" }}>First Name</label>
                    <input
                      id="settings-firstname"
                      type="text"
                      value={profile.firstName}
                      onChange={e => setProfile({ ...profile, firstName: e.target.value })}
                      style={{ width: "100%", padding: "10px 14px", fontSize: "14px", border: "1px solid #D1D5DB", borderRadius: "8px", outline: "none", boxSizing: "border-box" }}
                      onFocus={e => e.target.style.borderColor = "#1A56DB"}
                      onBlur={e => e.target.style.borderColor = "#D1D5DB"}
                    />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: "13px", fontWeight: "500", color: "#374151", marginBottom: "6px" }}>Last Name</label>
                    <input
                      id="settings-lastname"
                      type="text"
                      value={profile.lastName}
                      onChange={e => setProfile({ ...profile, lastName: e.target.value })}
                      style={{ width: "100%", padding: "10px 14px", fontSize: "14px", border: "1px solid #D1D5DB", borderRadius: "8px", outline: "none", boxSizing: "border-box" }}
                      onFocus={e => e.target.style.borderColor = "#1A56DB"}
                      onBlur={e => e.target.style.borderColor = "#D1D5DB"}
                    />
                  </div>
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "13px", fontWeight: "500", color: "#374151", marginBottom: "6px" }}>Email Address</label>
                  <input
                    id="settings-email"
                    type="email"
                    value={profile.email}
                    onChange={e => setProfile({ ...profile, email: e.target.value })}
                    style={{ width: "100%", padding: "10px 14px", fontSize: "14px", border: "1px solid #D1D5DB", borderRadius: "8px", outline: "none", boxSizing: "border-box" }}
                    onFocus={e => e.target.style.borderColor = "#1A56DB"}
                    onBlur={e => e.target.style.borderColor = "#D1D5DB"}
                  />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "13px", fontWeight: "500", color: "#374151", marginBottom: "6px" }}>Company <span style={{ color: "#9CA3AF" }}>(optional)</span></label>
                  <input
                    id="settings-company"
                    type="text"
                    value={profile.company}
                    onChange={e => setProfile({ ...profile, company: e.target.value })}
                    placeholder="Your company name"
                    style={{ width: "100%", padding: "10px 14px", fontSize: "14px", border: "1px solid #D1D5DB", borderRadius: "8px", outline: "none", boxSizing: "border-box" }}
                    onFocus={e => e.target.style.borderColor = "#1A56DB"}
                    onBlur={e => e.target.style.borderColor = "#D1D5DB"}
                  />
                </div>

                {profileSaved && (
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", padding: "12px", backgroundColor: "#DCFCE7", border: "1px solid #BBF7D0", borderRadius: "8px" }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2"><path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    <span style={{ fontSize: "13px", color: "#16A34A", fontWeight: "600" }}>Profile updated successfully!</span>
                  </div>
                )}

                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <button id="save-profile-btn" type="submit" style={{ padding: "10px 20px", fontSize: "14px", fontWeight: "600", color: "#FFFFFF", backgroundColor: "#1A56DB", border: "none", borderRadius: "8px", cursor: "pointer" }}>
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Security Tab */}
          {activeTab === "security" && (
            <div>
              <div style={{ padding: "24px", borderBottom: "1px solid #F3F4F6" }}>
                <h2 style={{ fontSize: "16px", fontWeight: "700", color: "#111827", margin: "0 0 4px" }}>Security</h2>
                <p style={{ fontSize: "13px", color: "#6B7280", margin: 0 }}>Manage your password and account security</p>
              </div>
              <form onSubmit={handlePasswordSave} style={{ padding: "24px", display: "flex", flexDirection: "column", gap: "16px" }}>
                <h3 style={{ fontSize: "14px", fontWeight: "600", color: "#374151", margin: 0 }}>Change Password</h3>
                {["current", "newPass", "confirm"].map((field) => (
                  <div key={field}>
                    <label style={{ display: "block", fontSize: "13px", fontWeight: "500", color: "#374151", marginBottom: "6px" }}>
                      {field === "current" ? "Current Password" : field === "newPass" ? "New Password" : "Confirm New Password"}
                    </label>
                    <input
                      id={`settings-${field}`}
                      type="password"
                      value={passwords[field as keyof typeof passwords]}
                      onChange={e => setPasswords({ ...passwords, [field]: e.target.value })}
                      placeholder="••••••••"
                      style={{ width: "100%", padding: "10px 14px", fontSize: "14px", border: "1px solid #D1D5DB", borderRadius: "8px", outline: "none", boxSizing: "border-box" }}
                      onFocus={e => e.target.style.borderColor = "#1A56DB"}
                      onBlur={e => e.target.style.borderColor = "#D1D5DB"}
                    />
                  </div>
                ))}

                {passwordError && (
                  <div style={{ padding: "10px 14px", backgroundColor: "#FEF2F2", border: "1px solid #FECACA", borderRadius: "8px" }}>
                    <span style={{ fontSize: "13px", color: "#DC2626" }}>{passwordError}</span>
                  </div>
                )}
                {passwordSaved && (
                    <span style={{ fontSize: "13px", color: "#16A34A", fontWeight: "600" }}>✅ Password updated successfully!</span>
                  </div>
                )}

                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <button id="save-password-btn" type="submit" style={{ padding: "10px 20px", fontSize: "14px", fontWeight: "600", color: "#FFFFFF", backgroundColor: "#1A56DB", border: "none", borderRadius: "8px", cursor: "pointer" }}>
                    Update Password
                  </button>
                </div>
              </form>

              {/* Danger zone */}
              <div style={{ margin: "0 24px 24px", padding: "20px", border: "1px solid #FECACA", borderRadius: "10px", backgroundColor: "#FFF5F5" }}>
                <h3 style={{ fontSize: "14px", fontWeight: "700", color: "#DC2626", margin: "0 0 8px" }}>Danger Zone</h3>
                <p style={{ fontSize: "13px", color: "#6B7280", margin: "0 0 12px" }}>Once you delete your account, there is no going back.</p>
                <button style={{ padding: "8px 16px", fontSize: "13px", fontWeight: "600", color: "#DC2626", backgroundColor: "#FFFFFF", border: "1px solid #FECACA", borderRadius: "8px", cursor: "pointer" }}>
                  Delete Account
                </button>
              </div>
            </div>
          )}

          {/* Plan Tab */}
          {activeTab === "plan" && (
            <div>
              <div style={{ padding: "24px", borderBottom: "1px solid #F3F4F6" }}>
                <h2 style={{ fontSize: "16px", fontWeight: "700", color: "#111827", margin: "0 0 4px" }}>Plan & Billing</h2>
                <p style={{ fontSize: "13px", color: "#6B7280", margin: 0 }}>Manage your subscription</p>
              </div>
              <div style={{ padding: "24px" }}>
                {/* Current Plan */}
                <div style={{ padding: "20px", border: "2px solid #1A56DB", borderRadius: "12px", marginBottom: "24px", backgroundColor: "#EFF6FF" }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "12px" }}>
                    <div>
                      <p style={{ fontSize: "12px", color: "#1A56DB", fontWeight: "600", textTransform: "uppercase", letterSpacing: "0.5px", margin: "0 0 4px" }}>Current Plan</p>
                      <p style={{ fontSize: "22px", fontWeight: "700", color: "#111827", margin: 0, textTransform: "capitalize" }}>{user?.plan || "starter"}</p>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <p style={{ fontSize: "24px", fontWeight: "700", color: "#1A56DB", margin: 0 }}>{planPrices[user?.plan || "starter"]}</p>
                      <p style={{ fontSize: "12px", color: "#6B7280", margin: 0 }}>per workspace</p>
                    </div>
                  </div>
                  <ul style={{ margin: 0, padding: "0 0 0 16px", display: "flex", flexDirection: "column", gap: "6px" }}>
                    {(planFeatures[user?.plan || "starter"]).map(f => (
                      <li key={f} style={{ fontSize: "13px", color: "#374151" }}>{f}</li>
                    ))}
                  </ul>
                </div>

                {/* Upgrade options */}
                {user?.plan !== "enterprise" && (
                  <div>
                    <h3 style={{ fontSize: "14px", fontWeight: "600", color: "#111827", marginBottom: "12px" }}>Upgrade Your Plan</h3>
                    <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                      {["pro", "enterprise"].filter(p => p !== user?.plan).map(p => (
                        <div key={p} style={{ flex: 1, minWidth: "200px", padding: "16px", border: "1px solid #E5E7EB", borderRadius: "10px", backgroundColor: "#FFFFFF" }}>
                          <p style={{ fontSize: "16px", fontWeight: "700", color: "#111827", margin: "0 0 4px", textTransform: "capitalize" }}>{p}</p>
                          <p style={{ fontSize: "20px", fontWeight: "700", color: "#1A56DB", margin: "0 0 12px" }}>{planPrices[p]}</p>
                          <button style={{ width: "100%", padding: "8px", fontSize: "13px", fontWeight: "600", color: "#1A56DB", backgroundColor: "#EFF6FF", border: "1px solid #BFDBFE", borderRadius: "8px", cursor: "pointer" }}>
                            Upgrade to {p.charAt(0).toUpperCase() + p.slice(1)}
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Notifications Tab */}
          {activeTab === "notifications" && (
            <div>
              <div style={{ padding: "24px", borderBottom: "1px solid #F3F4F6" }}>
                <h2 style={{ fontSize: "16px", fontWeight: "700", color: "#111827", margin: "0 0 4px" }}>Notifications</h2>
                <p style={{ fontSize: "13px", color: "#6B7280", margin: 0 }}>Choose how you receive notifications</p>
              </div>
              <div style={{ padding: "24px", display: "flex", flexDirection: "column", gap: "0" }}>
                {notificationItems.map((item) => (
                  <div key={item.key} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 0", borderBottom: "1px solid #F3F4F6" }}>
                    <div>
                      <p style={{ fontSize: "14px", fontWeight: "600", color: "#111827", margin: "0 0 2px" }}>{item.label}</p>
                      <p style={{ fontSize: "13px", color: "#6B7280", margin: 0 }}>{item.desc}</p>
                    </div>
                    <button
                      onClick={() => setNotifs({ ...notifs, [item.key]: !notifs[item.key] })}
                      style={{
                        width: "44px",
                        height: "24px",
                        borderRadius: "100px",
                        backgroundColor: notifs[item.key] ? "#1A56DB" : "#D1D5DB",
                        border: "none",
                        cursor: "pointer",
                        position: "relative",
                        transition: "background-color 0.2s",
                        flexShrink: 0,
                      }}
                    >
                      <div style={{
                        position: "absolute",
                        top: "2px",
                        left: notifs[item.key] ? "22px" : "2px",
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                        backgroundColor: "#FFFFFF",
                        transition: "left 0.2s",
                        boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
                      }} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .settings-grid { grid-template-columns: 1fr !important; }
          .form-grid-2 { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
