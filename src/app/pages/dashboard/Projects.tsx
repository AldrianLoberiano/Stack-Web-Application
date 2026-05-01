import { useState } from "react";
import { FolderOpen } from "lucide-react";

const initialProjects = [
  { id: 1, name: "Q2 Marketing Campaign", status: "active", progress: 68, members: 4, tasks: { done: 17, total: 25 }, color: "#1A56DB", updated: "2 hours ago" },
  { id: 2, name: "Website Redesign", status: "active", progress: 45, members: 6, tasks: { done: 9, total: 20 }, color: "#7C3AED", updated: "Yesterday" },
  { id: 3, name: "CRM Integration", status: "review", progress: 90, members: 3, tasks: { done: 18, total: 20 }, color: "#16A34A", updated: "2 days ago" },
  { id: 4, name: "Mobile App Beta", status: "active", progress: 32, members: 5, tasks: { done: 8, total: 25 }, color: "#D97706", updated: "3 days ago" },
  { id: 5, name: "Data Pipeline Refactor", status: "paused", progress: 20, members: 2, tasks: { done: 4, total: 20 }, color: "#DC2626", updated: "1 week ago" },
  { id: 6, name: "Customer Onboarding Flow", status: "completed", progress: 100, members: 3, tasks: { done: 15, total: 15 }, color: "#059669", updated: "2 weeks ago" },
];

const statusConfig: Record<string, { label: string; color: string; bg: string }> = {
  active: { label: "Active", color: "#16A34A", bg: "#DCFCE7" },
  review: { label: "In Review", color: "#D97706", bg: "#FEF3C7" },
  paused: { label: "Paused", color: "#DC2626", bg: "#FEE2E2" },
  completed: { label: "Completed", color: "#6B7280", bg: "#F3F4F6" },
};

type FilterType = "all" | "active" | "review" | "paused" | "completed";

export function Projects() {
  const [filter, setFilter] = useState<FilterType>("all");
  const [showModal, setShowModal] = useState(false);
  const [newProject, setNewProject] = useState({ name: "", status: "active" });
  const [projects, setProjects] = useState(initialProjects);

  const filtered = filter === "all" ? projects : projects.filter(p => p.status === filter);

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProject.name.trim()) return;
    setProjects([
      {
        id: projects.length + 1,
        name: newProject.name,
        status: newProject.status,
        progress: 0,
        members: 1,
        tasks: { done: 0, total: 0 },
        color: "#1A56DB",
        updated: "Just now",
      },
      ...projects,
    ]);
    setNewProject({ name: "", status: "active" });
    setShowModal(false);
  };

  return (
    <div>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "24px", flexWrap: "wrap", gap: "12px" }}>
        <div>
          <h1 style={{ fontSize: "22px", fontWeight: "700", color: "#111827", margin: "0 0 4px" }}>Projects</h1>
          <p style={{ fontSize: "14px", color: "#6B7280", margin: 0 }}>{projects.length} total projects</p>
        </div>
        <button
          id="new-project-btn"
          onClick={() => setShowModal(true)}
          style={{ display: "flex", alignItems: "center", gap: "8px", padding: "10px 18px", fontSize: "14px", fontWeight: "600", color: "#FFFFFF", backgroundColor: "#1A56DB", border: "none", borderRadius: "8px", cursor: "pointer" }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 5v14M5 12h14" strokeLinecap="round" /></svg>
          New Project
        </button>
      </div>

      {/* Filter Tabs */}
      <div style={{ display: "flex", gap: "4px", marginBottom: "20px", backgroundColor: "#F3F4F6", borderRadius: "8px", padding: "4px", width: "fit-content" }}>
        {(["all", "active", "review", "paused", "completed"] as FilterType[]).map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            style={{
              padding: "6px 14px",
              fontSize: "13px",
              fontWeight: filter === f ? "600" : "500",
              color: filter === f ? "#111827" : "#6B7280",
              backgroundColor: filter === f ? "#FFFFFF" : "transparent",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              boxShadow: filter === f ? "0 1px 3px rgba(0,0,0,0.1)" : "none",
              textTransform: "capitalize",
              transition: "all 0.15s",
            }}
          >
            {f === "all" ? `All (${projects.length})` : `${statusConfig[f]?.label} (${projects.filter(p => p.status === f).length})`}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }} className="projects-grid">
        {filtered.map(project => {
          const sc = statusConfig[project.status];
          return (
            <div key={project.id} style={{ backgroundColor: "#FFFFFF", border: "1px solid #E5E7EB", borderRadius: "12px", overflow: "hidden", transition: "box-shadow 0.2s" }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 16px rgba(0,0,0,0.08)"}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.boxShadow = "none"}
            >
              {/* Color bar */}
              <div style={{ height: "4px", backgroundColor: project.color }} />
              <div style={{ padding: "20px" }}>
                {/* Status + menu */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "12px" }}>
                  <span style={{ fontSize: "11px", fontWeight: "600", color: sc.color, backgroundColor: sc.bg, padding: "3px 10px", borderRadius: "100px" }}>
                    {sc.label}
                  </span>
                  <button style={{ background: "none", border: "none", cursor: "pointer", color: "#9CA3AF", padding: "2px" }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="5" r="1" fill="currentColor" /><circle cx="12" cy="12" r="1" fill="currentColor" /><circle cx="12" cy="19" r="1" fill="currentColor" />
                    </svg>
                  </button>
                </div>

                <h3 style={{ fontSize: "15px", fontWeight: "600", color: "#111827", margin: "0 0 8px" }}>{project.name}</h3>
                <p style={{ fontSize: "12px", color: "#9CA3AF", margin: "0 0 16px" }}>Updated {project.updated}</p>

                {/* Progress */}
                <div style={{ marginBottom: "16px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                    <span style={{ fontSize: "12px", color: "#6B7280" }}>Progress</span>
                    <span style={{ fontSize: "12px", fontWeight: "700", color: "#111827" }}>{project.progress}%</span>
                  </div>
                  <div style={{ height: "5px", backgroundColor: "#F3F4F6", borderRadius: "4px" }}>
                    <div style={{ height: "100%", width: `${project.progress}%`, backgroundColor: project.color, borderRadius: "4px" }} />
                  </div>
                </div>

                {/* Footer */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    {Array.from({ length: Math.min(project.members, 3) }).map((_, i) => (
                      <div key={i} style={{ width: "26px", height: "26px", borderRadius: "50%", backgroundColor: ["#DBEAFE","#EDE9FE","#DCFCE7"][i], border: "2px solid #fff", marginLeft: i > 0 ? "-8px" : 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <span style={{ fontSize: "9px", fontWeight: "700", color: "#374151" }}>
                          {["A","B","C"][i]}
                        </span>
                      </div>
                    ))}
                    {project.members > 3 && <span style={{ fontSize: "11px", color: "#6B7280" }}>+{project.members - 3}</span>}
                  </div>
                  <span style={{ fontSize: "12px", color: "#6B7280" }}>
                    {project.tasks.done}/{project.tasks.total} tasks
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <div style={{ textAlign: "center", padding: "60px 20px" }}>
          <div style={{ marginBottom: "12px", display: "flex", justifyContent: "center" }}>
          <p style={{ fontSize: "16px", fontWeight: "600", color: "#374151", margin: "0 0 8px" }}>No projects found</p>
          <p style={{ fontSize: "14px", color: "#6B7280" }}>Try a different filter or create a new project.</p>
        </div>
      )}

      {/* New Project Modal */}
      {showModal && (
        <div style={{ position: "fixed", inset: 0, backgroundColor: "rgba(0,0,0,0.5)", zIndex: 200, display: "flex", alignItems: "center", justifyContent: "center", padding: "20px" }}>
          <div style={{ backgroundColor: "#FFFFFF", borderRadius: "16px", padding: "32px", width: "100%", maxWidth: "440px", boxShadow: "0 20px 60px rgba(0,0,0,0.15)" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "24px" }}>
              <h2 style={{ fontSize: "18px", fontWeight: "700", color: "#111827", margin: 0 }}>Create New Project</h2>
              <button onClick={() => setShowModal(false)} style={{ background: "none", border: "none", cursor: "pointer", color: "#6B7280" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6L18 18" strokeLinecap="round" /></svg>
              </button>
            </div>
            <form onSubmit={handleCreate} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div>
                <label style={{ display: "block", fontSize: "13px", fontWeight: "500", color: "#374151", marginBottom: "6px" }}>Project Name</label>
                <input
                  id="new-project-name"
                  type="text"
                  value={newProject.name}
                  onChange={e => setNewProject({ ...newProject, name: e.target.value })}
                  placeholder="e.g. Q3 Product Launch"
                  required
                  style={{ width: "100%", padding: "10px 14px", fontSize: "14px", border: "1px solid #D1D5DB", borderRadius: "8px", outline: "none", boxSizing: "border-box" }}
                  onFocus={e => e.target.style.borderColor = "#1A56DB"}
                  onBlur={e => e.target.style.borderColor = "#D1D5DB"}
                />
              </div>
              <div>
                <label style={{ display: "block", fontSize: "13px", fontWeight: "500", color: "#374151", marginBottom: "6px" }}>Status</label>
                <select
                  value={newProject.status}
                  onChange={e => setNewProject({ ...newProject, status: e.target.value })}
                  style={{ width: "100%", padding: "10px 14px", fontSize: "14px", border: "1px solid #D1D5DB", borderRadius: "8px", outline: "none", boxSizing: "border-box", backgroundColor: "#fff" }}
                >
                  <option value="active">Active</option>
                  <option value="review">In Review</option>
                  <option value="paused">Paused</option>
                </select>
              </div>
              <div style={{ display: "flex", gap: "10px" }}>
                <button type="button" onClick={() => setShowModal(false)} style={{ flex: 1, padding: "10px", fontSize: "14px", fontWeight: "500", color: "#374151", backgroundColor: "#FFFFFF", border: "1px solid #D1D5DB", borderRadius: "8px", cursor: "pointer" }}>Cancel</button>
                <button type="submit" style={{ flex: 1, padding: "10px", fontSize: "14px", fontWeight: "600", color: "#FFFFFF", backgroundColor: "#1A56DB", border: "none", borderRadius: "8px", cursor: "pointer" }}>Create Project</button>
              </div>
            </form>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 1024px) { .projects-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 640px) { .projects-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  );
}
