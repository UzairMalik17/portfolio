export default function Home() {
  return (
    <main>
      <section className="container">
        <div
          style={{
            minHeight: "70vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <p
            style={{
              margin: 0,
              color: "var(--foreground-muted)",
              fontSize: "12px",
              fontWeight: 500,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            Software Engineer
          </p>

          <h1
            style={{
              maxWidth: "900px",
              margin: "20px 0 0",
              color: "var(--foreground)",
              fontSize: "clamp(48px, 7vw, 88px)",
              fontWeight: 600,
              letterSpacing: "-0.055em",
              lineHeight: 0.98,
            }}
          >
            I build reliable web applications and AI-enhanced software.
          </h1>

          <p
            style={{
              maxWidth: "640px",
              margin: "32px 0 0",
              color: "var(--foreground-secondary)",
              fontSize: "18px",
              lineHeight: 1.6,
            }}
          >
            Software engineer focused on modern web systems, thoughtful
            interfaces, and practical AI-powered applications.
          </p>
        </div>
      </section>
    </main>
  );
}
