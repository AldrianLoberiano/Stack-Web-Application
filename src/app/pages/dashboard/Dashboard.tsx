import { Link } from "react-router";
import { BarChart3, FolderOpen, Hand, Users, Zap } from "lucide-react";
import { useAuth } from "../../context/AuthContext";

const stats = [
  {
    label: "Active Projects",
    value: "12",
    change: "+3 this month",
    up: true,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1A56DB" strokeWidth="2">
        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
      </svg>
    ),
    bg: "#EFF6FF",
  },
  {
    label: "Tasks Completed",
    value: "284",
    change: "+48 this week",
    up: true,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" strokeLinecap="round" />
        <polyline points="22 4 12 14.01 9 11.01" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    bg: "#DCFCE7",
  },
  {
    label: "Team Members",
    value: "8",
    change: "+1 this month",
    up: true,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    bg: "#EDE9FE",
  },
  {
    label: "Automations",
    value: "34",
    change: "98.5% success rate",
    up: true,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    bg: "#FEF3C7",
  },
];

const recentActivity = [
  { action: "Project \"Q2 Campaign\" updated", time: "2 minutes ago", user: "You", type: "project" },
  { action: "Automation \"Weekly Report\" ran successfully", time: "1 hour ago", user: "System", type: "automation" },
  { action: "Alex Johnson joined the team", time: "3 hours ago", user: "Alex J.", type: "team" },
  { action: "Task \"Design Review\" marked complete", time: "5 hours ago", user: "Maria S.", type: "task" },
  { action: "New integration: Slack connected", time: "Yesterday", user: "You", type: "integration" },
  { action: "Project \"Website Redesign\" created", time: "Yesterday", user: "You", type: "project" },
];

const quickActions = [
  { label: "New Project", Icon: FolderOpen, path: "/dashboard/projects" },
  { label: "Invite Member", Icon: Users, path: "/dashboard/team" },
  { label: "Build Workflow", Icon: Zap, path: "/dashboard/projects" },
  { label: "View Reports", Icon: BarChart3, path: "/dashboard" },
];

function ActivityIcon({ type }: { type: string }) {
  const colors: Record<string, { bg: string; color: string }> = {
    project: { bg: "#EFF6FF", color: "#1A56DB" },
    automation: { bg: "#FEF3C7", color: "#D97706" },
    team: { bg: "#EDE9FE", color: "#7C3AED" },
    task: { bg: "#DCFCE7", color: "#16A34A" },
    integration: { bg: "#FEE2E2", color: "#DC2626" },
  };
  const c = colors[type] || { bg: "#F3F4F6", color: "#6B7280" };
  return (
    <div style={{ width: "34px", height: "34px", borderRadius: "50%", backgroundColor: c.bg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
      <div style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: c.color }} />
    </div>
  );
}

export function Dashboard() {
  const { user } = useAuth();

  return (
    <div>
      {/* Welcome Banner */}
      <div style={{
        background: "linear-gradient(135deg, #1A56DB 0%, #1e40af 100%)",
        borderRadius: "16px",
        padding: "32px 36px",
        marginBottom: "32px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "16px",
      }}>
        <div>
          <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.7)", margin: "0 0 4px", fontWeight: "500" }}>
            {new Date().toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })}
          </p>
          <h1 style={{ fontSize: "26px", fontWeight: "700", color: "#FFFFFF", margin: "0 0 8px" }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
              Good {new Date().getHours() < 12 ? "morning" : new Date().getHours() < 18 ? "afternoon" : "evening"}, {user?.firstName}!
              <Hand size={18} />
          </h1>
          <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.8)", margin: 0 }}>
            You have <strong>5 tasks</strong> due today. Let's get it done!
          </p>
        </div>
        <Link to="/dashboard/projects" style={{ textDecoration: "none" }}>
          <button style={{ padding: "10px 20px", fontSize: "14px", fontWeight: "600", color: "#1A56DB", backgroundColor: "#FFFFFF", border: "none", borderRadius: "8px", cursor: "pointer" }}>
            View Projects →
          </button>
        </Link>
      </div>

      {/* Stat Cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px", marginBottom: "32px" }} className="stats-grid-dash">
        {stats.map((stat) => (
          <div key={stat.label} style={{ backgroundColor: "#FFFFFF", border: "1px solid #E5E7EB", borderRadius: "12px", padding: "20px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "12px" }}>
              <div style={{ width: "40px", height: "40px", backgroundColor: stat.bg, borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                {stat.icon}
              </div>
              <span style={{ fontSize: "11px", fontWeight: "600", color: stat.up ? "#16A34A" : "#DC2626", backgroundColor: stat.up ? "#DCFCE7" : "#FEE2E2", padding: "3px 8px", borderRadius: "100px" }}>
                {stat.up ? "↑" : "↓"}
              </span>
            </div>
            <p style={{ fontSize: "28px", fontWeight: "700", color: "#111827", margin: "0 0 4px" }}>{stat.value}</p>
            <p style={{ fontSize: "13px", color: "#6B7280", margin: "0 0 2px", fontWeight: "500" }}>{stat.label}</p>
            <p style={{ fontSize: "12px", color: "#9CA3AF", margin: 0 }}>{stat.change}</p>
          </div>
        ))}
      </div>

      {/* Quick Actions + Activity */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: "20px" }} className="dashboard-bottom-grid">
        {/* Quick Actions */}
        <div style={{ backgroundColor: "#FFFFFF", border: "1px solid #E5E7EB", borderRadius: "12px", padding: "20px" }}>
          <h3 style={{ fontSize: "15px", fontWeight: "600", color: "#111827", margin: "0 0 16px" }}>Quick Actions</h3>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
            {quickActions.map(a => (
              <Link key={a.label} to={a.path} style={{ textDecoration: "none" }}>
                <div style={{
                  padding: "16px",
                  backgroundColor: "#F9FAFB",
                  border: "1px solid #F3F4F6",
                  borderRadius: "10px",
                  textAlign: "center",
                  cursor: "pointer",
                  transition: "all 0.15s",
                }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = "#EFF6FF";
                    (e.currentTarget as HTMLElement).style.borderColor = "#BFDBFE";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = "#F9FAFB";
                    (e.currentTarget as HTMLElement).style.borderColor = "#F3F4F6";
                  }}
                >
                  <div style={{ fontSize: "24px", marginBottom: "6px" }}>{a.icon}</div>
                  <p style={{ fontSize: "12px", fontWeight: "600", color: "#374151", margin: 0 }}>{a.label}</p>
                </div>
              </Link>
            ))}
          </div>

          {/* Progress */}
          <div style={{ marginTop: "20px", padding: "16px", backgroundColor: "#F9FAFB", borderRadius: "10px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
              <span style={{ fontSize: "13px", fontWeight: "600", color: "#374151" }}>Monthly Goal</span>
              <span style={{ fontSize: "13px", fontWeight: "700", color: "#1A56DB" }}>72%</span>
            </div>
            <div style={{ height: "6px", backgroundColor: "#E5E7EB", borderRadius: "4px", overflow: "hidden" }}>
              <div style={{ height: "100%", width: "72%", backgroundColor: "#1A56DB", borderRadius: "4px", transition: "width 1s ease" }} />
            </div>
            <p style={{ fontSize: "12px", color: "#9CA3AF", margin: "6px 0 0" }}>284 / 400 tasks completed</p>
          </div>
        </div>

        {/* Recent Activity */}
        <div style={{ backgroundColor: "#FFFFFF", border: "1px solid #E5E7EB", borderRadius: "12px", padding: "20px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
            <h3 style={{ fontSize: "15px", fontWeight: "600", color: "#111827", margin: 0 }}>Recent Activity</h3>
            <button style={{ fontSize: "13px", color: "#1A56DB", background: "none", border: "none", cursor: "pointer", fontWeight: "500" }}>View all</button>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {recentActivity.map((item, i) => (
              <div key={i} style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "12px",
                padding: "12px 0",
                borderBottom: i < recentActivity.length - 1 ? "1px solid #F3F4F6" : "none",
              }}>
                <ActivityIcon type={item.type} />
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: "13px", color: "#374151", margin: "0 0 2px", lineHeight: "1.4" }}>{item.action}</p>
                  <p style={{ fontSize: "12px", color: "#9CA3AF", margin: 0 }}>{item.time} · {item.user}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1100px) { .stats-grid-dash { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 640px) { .stats-grid-dash { grid-template-columns: 1fr !important; } .dashboard-bottom-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  );
}
