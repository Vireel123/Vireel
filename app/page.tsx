export default function Home() {
  return (
    <main style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      fontFamily: "sans-serif",
      background: "#0f172a",
      color: "white",
      flexDirection: "column"
    }}>
      <h1 style={{ fontSize: "3rem", marginBottom: "10px" }}>
        🚀 Vireel is Live
      </h1>
      <p style={{ fontSize: "1.2rem", opacity: 0.8 }}>
        Global Content Creator Platform
      </p>
    </main>
  );
}