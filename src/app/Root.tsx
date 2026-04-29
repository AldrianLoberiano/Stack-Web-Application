import { Outlet } from "react-router";
import { Header } from "./components/layouts/Header";
import { Footer } from "./components/layouts/Footer";

export function Root() {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", backgroundColor: "#FFFFFF" }}>
      <Header />
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
