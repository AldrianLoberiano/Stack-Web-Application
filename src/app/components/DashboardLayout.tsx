import { useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";

const navItems = [
  {
    path: "/dashboard",
    label: "Dashboard",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
  {
    path: "/dashboard/projects",
    label: "Projects",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    path: "/dashboard/team",
    label: "Team",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    path: "/dashboard/settings",
    label: "Settings",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.07 4.93A10 10 0 0 0 4.93 19.07M4.93 4.93a10 10 0 0 1 14.14 14.14" />
      </svg>
    ),
  },
];

export function DashboardLayout() {
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === "/dashboard") return location.pathname === "/dashboard";
    return location.pathname.startsWith(path);
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const initials = user ? `${user.firstName[0]}${user.lastName[0]}`.toUpperCase() : "U";

  return (
    <div style={{ display: "flex", minHeight: "100vh", backgroundColor: "#F9FAFB", fontFamily: "'Inter', -apple-system, sans-serif" }}>
      {/* Sidebar */}
      <aside style={{
        width: "240px",
        backgroundColor: "#FFFFFF",
        borderRight: "1px solid #E5E7EB",
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        top: 0,
        left: sidebarOpen ? 0 : undefined,
        bottom: 0,
        zIndex: 50,
        flexShrink: 0,
      }} className="dashboard-sidebar">
        {/* Logo */}
        <div style={{ padding: "20px 20px", borderBottom: "1px solid #F3F4F6" }}>
          <Link to="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "10px" }}>
            <div style={{ width: "32px", height: "32px", backgroundColor: "#1A56DB", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                <path d="M10 2L18 7V13L10 18L2 13V7L10 2Z" fill="#FFFFFF" />
              </svg>
            </div>
            <span style={{ fontSize: "18px", fontWeight: "700", color: "#111827" }}>NexaFlow</span>
          </Link>
        </div>

        {/* Nav */}
        <nav style={{ flex: 1, padding: "16px 12px", display: "flex", flexDirection: "column", gap: "4px" }}>
          {navItems.map(item => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setSidebarOpen(false)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "10px 12px",
                borderRadius: "8px",
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: isActive(item.path) ? "600" : "500",
                color: isActive(item.path) ? "#1A56DB" : "#6B7280",
                backgroundColor: isActive(item.path) ? "#EFF6FF" : "transparent",
                transition: "all 0.15s",
              }}
              onMouseEnter={e => {
                if (!isActive(item.path)) {
                  (e.currentTarget as HTMLElement).style.backgroundColor = "#F9FAFB";
                  (e.currentTarget as HTMLElement).style.color = "#374151";
                }
              }}
              onMouseLeave={e => {
                if (!isActive(item.path)) {
                  (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                  (e.currentTarget as HTMLElement).style.color = "#6B7280";
                }
              }}
            >
              {item.icon}
              {item.label}
            </Link>
          ))}

          {/* Divider */}
          <div style={{ borderTop: "1px solid #F3F4F6", margin: "12px 0" }} />

          <Link
            to="/"
            style={{ display: "flex", alignItems: "center", gap: "10px", padding: "10px 12px", borderRadius: "8px", textDecoration: "none", fontSize: "14px", fontWeight: "500", color: "#6B7280" }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            Back to Site
          </Link>
        </nav>

        {/* User info at bottom */}
        <div style={{ padding: "16px", borderTop: "1px solid #F3F4F6" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "10px", borderRadius: "8px", backgroundColor: "#F9FAFB" }}>
            <div style={{ width: "34px", height: "34px", borderRadius: "50%", backgroundColor: "#1A56DB", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <span style={{ fontSize: "13px", fontWeight: "700", color: "#FFFFFF" }}>{initials}</span>
            </div>
            <div style={{ flex: 1, overflow: "hidden" }}>
              <p style={{ fontSize: "13px", fontWeight: "600", color: "#111827", margin: 0, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                {user?.firstName} {user?.lastName}
              </p>
              <p style={{ fontSize: "11px", color: "#9CA3AF", margin: 0, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                {user?.plan} plan
              </p>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          style={{ position: "fixed", inset: 0, backgroundColor: "rgba(0,0,0,0.4)", zIndex: 40 }}
          className="mobile-overlay"
        />
      )}

      {/* Main Content */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", marginLeft: "240px" }} className="dashboard-main">
        {/* Top Bar */}
        <header style={{
          backgroundColor: "#FFFFFF",
          borderBottom: "1px solid #E5E7EB",
          padding: "0 24px",
          height: "60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "sticky",
          top: 0,
          zIndex: 30,
        }}>
          {/* Mobile hamburger */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            style={{ display: "none", background: "none", border: "none", cursor: "pointer", padding: "4px" }}
            className="mobile-hamburger"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2">
              <path d="M3 12H21M3 6H21M3 18H21" strokeLinecap="round" />
            </svg>
          </button>

          {/* Search */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px", backgroundColor: "#F9FAFB", border: "1px solid #E5E7EB", borderRadius: "8px", padding: "8px 12px", maxWidth: "320px", flex: 1, marginRight: "16px" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" strokeLinecap="round" />
            </svg>
            <input
              type="text"
              placeholder="Search..."
              style={{ border: "none", background: "none", outline: "none", fontSize: "14px", color: "#374151", width: "100%" }}
            />
          </div>

          {/* Right actions */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            {/* Notifications */}
            <button style={{ width: "36px", height: "36px", borderRadius: "8px", backgroundColor: "#F9FAFB", border: "1px solid #E5E7EB", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0" strokeLinecap="round" />
              </svg>
              <div style={{ position: "absolute", top: "6px", right: "6px", width: "8px", height: "8px", backgroundColor: "#EF4444", borderRadius: "50%", border: "2px solid #fff" }} />
            </button>

            {/* User Menu */}
            <div style={{ position: "relative" }}>
              <button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                style={{ display: "flex", alignItems: "center", gap: "8px", padding: "6px 10px", borderRadius: "8px", backgroundColor: "transparent", border: "1px solid #E5E7EB", cursor: "pointer" }}
              >
                <div style={{ width: "28px", height: "28px", borderRadius: "50%", backgroundColor: "#1A56DB", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontSize: "11px", fontWeight: "700", color: "#FFFFFF" }}>{initials}</span>
                </div>
                <span style={{ fontSize: "13px", fontWeight: "600", color: "#374151" }}>{user?.firstName}</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2">
                  <path d="M6 9l6 6 6-6" strokeLinecap="round" />
                </svg>
              </button>

              {userMenuOpen && (
                <div style={{
                  position: "absolute",
                  top: "calc(100% + 8px)",
                  right: 0,
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #E5E7EB",
                  borderRadius: "10px",
                  padding: "8px",
                  minWidth: "200px",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                  zIndex: 100,
                }}>
                  <div style={{ padding: "10px 12px", borderBottom: "1px solid #F3F4F6", marginBottom: "4px" }}>
                    <p style={{ fontSize: "13px", fontWeight: "600", color: "#111827", margin: 0 }}>{user?.firstName} {user?.lastName}</p>
                    <p style={{ fontSize: "12px", color: "#9CA3AF", margin: 0 }}>{user?.email}</p>
                  </div>
                  <Link to="/dashboard/settings" onClick={() => setUserMenuOpen(false)} style={{ display: "flex", alignItems: "center", gap: "8px", padding: "8px 12px", borderRadius: "6px", textDecoration: "none", fontSize: "13px", color: "#374151" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3" /><path d="M19.07 4.93A10 10 0 0 0 4.93 19.07M4.93 4.93a10 10 0 0 1 14.14 14.14" /></svg>
                    Settings
                  </Link>
                  <button
                    onClick={handleLogout}
                    style={{ display: "flex", alignItems: "center", gap: "8px", padding: "8px 12px", borderRadius: "6px", fontSize: "13px", color: "#EF4444", width: "100%", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    Sign out
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main style={{ flex: 1, padding: "32px 24px" }}>
          <Outlet />
        </main>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .dashboard-sidebar { width: 240px !important; left: -240px !important; transition: left 0.3s !important; }
          .dashboard-main { margin-left: 0 !important; }
          .mobile-hamburger { display: flex !important; }
          .dashboard-sidebar.open { left: 0 !important; }
        }
      `}</style>
    </div>
  );
}
