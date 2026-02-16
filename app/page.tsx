export default function Home() {
  return (
    <main style={{ minHeight: "100vh", display: "grid", placeItems: "center", background: "#0b1020", color: "white" }}>
      <div style={{ textAlign: "center", padding: 24 }}>
        <h1 style={{ fontSize: 40, marginBottom: 8 }}>🚀 Vireel is Live</h1>
        <p style={{ opacity: 0.8, marginBottom: 18 }}>Global Content Creator Platform</p>

        <div style={{ display: "inline-flex", gap: 10 }}>
          <a
            href="/"
            style={{ background: "white", color: "#0b1020", padding: "10px 14px", borderRadius: 10, textDecoration: "none", fontWeight: 600 }}
          >
            Refresh Home
          </a>
          <a
            href="/api/health"
            style={{ border: "1px solid rgba(255,255,255,0.25)", color: "white", padding: "10px 14px", borderRadius: 10, textDecoration: "none" }}
          >
            Health Check
          </a>
        </div>
      </div>
    </main>
  );
}