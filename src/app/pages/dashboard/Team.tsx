import { useState } from "react";
import { Building2, Mail, Users } from "lucide-react";

const initialMembers = [
  { id: 1, name: "Sarah Johnson", email: "sarah@company.com", role: "Admin", department: "Marketing", status: "active", joined: "Jan 2024", initials: "SJ", color: "#DBEAFE" },
  { id: 2, name: "Marcus Rivera", email: "marcus@company.com", role: "Owner", department: "Engineering", status: "active", joined: "Nov 2023", initials: "MR", color: "#EDE9FE" },
  { id: 3, name: "Priya Patel", email: "priya@company.com", role: "Member", department: "Operations", status: "active", joined: "Mar 2024", initials: "PP", color: "#DCFCE7" },
  { id: 4, name: "Alex Johnson", email: "alex@company.com", role: "Member", department: "Design", status: "active", joined: "Apr 2024", initials: "AJ", color: "#FEF3C7" },
  { id: 5, name: "Elena Torres", email: "elena@company.com", role: "Member", department: "Sales", status: "inactive", joined: "Feb 2024", initials: "ET", color: "#FEE2E2" },
  { id: 6, name: "James Kim", email: "james@company.com", role: "Admin", department: "Product", status: "active", joined: "Dec 2023", initials: "JK", color: "#F0FDF4" },
  { id: 7, name: "Diana Okonkwo", email: "diana@company.com", role: "Member", department: "Support", status: "active", joined: "Mar 2024", initials: "DO", color: "#FFF7ED" },
  { id: 8, name: "Ryan Chen", email: "ryan@company.com", role: "Member", department: "Engineering", status: "active", joined: "Jan 2024", initials: "RC", color: "#F5F3FF" },
];

const roleColors: Record<string, { color: string; bg: string }> = {
  Owner: { color: "#7C3AED", bg: "#EDE9FE" },
  Admin: { color: "#1A56DB", bg: "#EFF6FF" },
  Member: { color: "#6B7280", bg: "#F3F4F6" },
};

export function Team() {
  const [members, setMembers] = useState(initialMembers);
  const [showInviteModal, setShowInviteModal] = useState(false);
  const [invite, setInvite] = useState({ email: "", role: "Member" });
  const [search, setSearch] = useState("");

  const filtered = members.filter(m =>
    m.name.toLowerCase().includes(search.toLowerCase()) ||
    m.email.toLowerCase().includes(search.toLowerCase()) ||
    m.department.toLowerCase().includes(search.toLowerCase())
  );

  const handleInvite = (e: React.FormEvent) => {
    e.preventDefault();
    setShowInviteModal(false);
    setInvite({ email: "", role: "Member" });
    // In a real app, send invite email
    alert(`Invitation sent to ${invite.email}!`);
  };

  const handleRemove = (id: number) => {
    if (confirm("Remove this team member?")) {
      setMembers(members.filter(m => m.id !== id));
    }
  };

  return (
    <div>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "24px", flexWrap: "wrap", gap: "12px" }}>
        <div>
          <h1 style={{ fontSize: "22px", fontWeight: "700", color: "#111827", margin: "0 0 4px" }}>Team</h1>
          <p style={{ fontSize: "14px", color: "#6B7280", margin: 0 }}>{members.filter(m => m.status === "active").length} active members</p>
        </div>
        <button
          id="invite-member-btn"
          onClick={() => setShowInviteModal(true)}
          style={{ display: "flex", alignItems: "center", gap: "8px", padding: "10px 18px", fontSize: "14px", fontWeight: "600", color: "#FFFFFF", backgroundColor: "#1A56DB", border: "none", borderRadius: "8px", cursor: "pointer" }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 5v14M5 12h14" strokeLinecap="round" /></svg>
          Invite Member
        </button>
      </div>

      {/* Stats Row */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px", marginBottom: "24px" }} className="team-stats-grid">
        {[
          {
            label: "Total Members",
            value: members.length,
            icon: <Users size={22} color="#1A56DB" />,
          },
          {
            label: "Active Now",
            value: members.filter(m => m.status === "active").length,
            icon: (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="12" cy="12" r="7" fill="#16A34A" />
              </svg>
            ),
        ].map(s => (
          <div key={s.label} style={{ backgroundColor: "#FFFFFF", border: "1px solid #E5E7EB", borderRadius: "12px", padding: "18px 20px", display: "flex", alignItems: "center", gap: "14px" }}>
            <span style={{ fontSize: "26px" }}>{s.icon}</span>
            <div>
              <p style={{ fontSize: "24px", fontWeight: "700", color: "#111827", margin: 0 }}>{s.value}</p>
              <p style={{ fontSize: "13px", color: "#6B7280", margin: 0 }}>{s.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Search */}
      <div style={{ backgroundColor: "#FFFFFF", border: "1px solid #E5E7EB", borderRadius: "12px", overflow: "hidden" }}>
        <div style={{ padding: "16px 20px", borderBottom: "1px solid #F3F4F6", display: "flex", alignItems: "center", gap: "12px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", flex: 1, backgroundColor: "#F9FAFB", border: "1px solid #E5E7EB", borderRadius: "8px", padding: "8px 12px" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" strokeLinecap="round" /></svg>
            <input
              type="text"
              placeholder="Search members..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              style={{ border: "none", background: "none", outline: "none", fontSize: "14px", color: "#374151", width: "100%" }}
            />
          </div>
        </div>

        {/* Table */}
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ borderBottom: "1px solid #F3F4F6" }}>
                {["Member", "Role", "Department", "Status", "Joined", "Actions"].map(h => (
                  <th key={h} style={{ padding: "12px 20px", textAlign: "left", fontSize: "12px", fontWeight: "600", color: "#6B7280", textTransform: "uppercase", letterSpacing: "0.5px", whiteSpace: "nowrap" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map(member => {
                const rc = roleColors[member.role] || roleColors.Member;
                return (
                  <tr key={member.id} style={{ borderBottom: "1px solid #F9FAFB" }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.backgroundColor = "#F9FAFB"}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.backgroundColor = "transparent"}
                  >
                    <td style={{ padding: "14px 20px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                        <div style={{ width: "38px", height: "38px", borderRadius: "50%", backgroundColor: member.color, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                          <span style={{ fontSize: "13px", fontWeight: "700", color: "#374151" }}>{member.initials}</span>
                        </div>
                        <div>
                          <p style={{ fontSize: "14px", fontWeight: "600", color: "#111827", margin: 0 }}>{member.name}</p>
                          <p style={{ fontSize: "12px", color: "#9CA3AF", margin: 0 }}>{member.email}</p>
                        </div>
                      </div>
                    </td>
                    <td style={{ padding: "14px 20px" }}>
                      <span style={{ fontSize: "12px", fontWeight: "600", color: rc.color, backgroundColor: rc.bg, padding: "3px 10px", borderRadius: "100px" }}>
                        {member.role}
                      </span>
                    </td>
                    <td style={{ padding: "14px 20px", fontSize: "14px", color: "#6B7280" }}>{member.department}</td>
                    <td style={{ padding: "14px 20px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                        <div style={{ width: "7px", height: "7px", borderRadius: "50%", backgroundColor: member.status === "active" ? "#16A34A" : "#9CA3AF" }} />
                        <span style={{ fontSize: "13px", color: member.status === "active" ? "#16A34A" : "#9CA3AF", textTransform: "capitalize" }}>{member.status}</span>
                      </div>
                    </td>
                    <td style={{ padding: "14px 20px", fontSize: "13px", color: "#9CA3AF" }}>{member.joined}</td>
                    <td style={{ padding: "14px 20px" }}>
                      <div style={{ display: "flex", gap: "6px" }}>
                        <button style={{ padding: "4px 10px", fontSize: "12px", color: "#6B7280", backgroundColor: "#F9FAFB", border: "1px solid #E5E7EB", borderRadius: "6px", cursor: "pointer" }}>Edit</button>
                        {member.role !== "Owner" && (
                          <button
                            onClick={() => handleRemove(member.id)}
                            style={{ padding: "4px 10px", fontSize: "12px", color: "#DC2626", backgroundColor: "#FEF2F2", border: "1px solid #FECACA", borderRadius: "6px", cursor: "pointer" }}
                          >
                            Remove
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign: "center", padding: "40px" }}>
            <p style={{ color: "#6B7280", fontSize: "14px" }}>No members found matching "{search}"</p>
          </div>
        )}
      </div>

      {/* Invite Modal */}
      {showInviteModal && (
        <div style={{ position: "fixed", inset: 0, backgroundColor: "rgba(0,0,0,0.5)", zIndex: 200, display: "flex", alignItems: "center", justifyContent: "center", padding: "20px" }}>
          <div style={{ backgroundColor: "#FFFFFF", borderRadius: "16px", padding: "32px", width: "100%", maxWidth: "420px", boxShadow: "0 20px 60px rgba(0,0,0,0.15)" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "24px" }}>
              <h2 style={{ fontSize: "18px", fontWeight: "700", color: "#111827", margin: 0 }}>Invite Team Member</h2>
              <button onClick={() => setShowInviteModal(false)} style={{ background: "none", border: "none", cursor: "pointer", color: "#6B7280" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6L18 18" strokeLinecap="round" /></svg>
              </button>
            </div>
            <form onSubmit={handleInvite} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div>
                <label style={{ display: "block", fontSize: "13px", fontWeight: "500", color: "#374151", marginBottom: "6px" }}>Email Address</label>
                <input
                  id="invite-email"
                  type="email"
                  value={invite.email}
                  onChange={e => setInvite({ ...invite, email: e.target.value })}
                  placeholder="colleague@company.com"
                  required
                  style={{ width: "100%", padding: "10px 14px", fontSize: "14px", border: "1px solid #D1D5DB", borderRadius: "8px", outline: "none", boxSizing: "border-box" }}
                  onFocus={e => e.target.style.borderColor = "#1A56DB"}
                  onBlur={e => e.target.style.borderColor = "#D1D5DB"}
                />
              </div>
              <div>
                <label style={{ display: "block", fontSize: "13px", fontWeight: "500", color: "#374151", marginBottom: "6px" }}>Role</label>
                <select
                  value={invite.role}
                  onChange={e => setInvite({ ...invite, role: e.target.value })}
                  style={{ width: "100%", padding: "10px 14px", fontSize: "14px", border: "1px solid #D1D5DB", borderRadius: "8px", outline: "none", boxSizing: "border-box", backgroundColor: "#fff" }}
                >
                  <option value="Member">Member</option>
                  <option value="Admin">Admin</option>
                </select>
              </div>
              <div style={{ display: "flex", gap: "10px" }}>
                <button type="button" onClick={() => setShowInviteModal(false)} style={{ flex: 1, padding: "10px", fontSize: "14px", color: "#374151", backgroundColor: "#fff", border: "1px solid #D1D5DB", borderRadius: "8px", cursor: "pointer" }}>Cancel</button>
                <button type="submit" style={{ flex: 1, padding: "10px", fontSize: "14px", fontWeight: "600", color: "#fff", backgroundColor: "#1A56DB", border: "none", borderRadius: "8px", cursor: "pointer" }}>Send Invite ✉️</button>
              </div>
            </form>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) { .team-stats-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  );
}
