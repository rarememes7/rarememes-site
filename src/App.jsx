import React from "react";

/**
 * RARE MEMES Collective — Clean Build
 * Includes:
 *  - Launchpad
 *  - Hall of Fame
 *  - Gallery
 *  - Arcade (Coming Soon)
 */

export default function RareMemesHome() {
  const socials = {
    twitter: "https://x.com/rarememes7",
  };

  const hallOfFame = [
    {
      name: "FISHY",
      ticker: "$FISHY",
      gain: "+642%",
      link: "https://pump.fun/profile/rarememes",
      image: "/coins/fishy.png",
      quote: "The first to swim — pure chaos energy.",
    },
  ];

  const drops = [
    {
      id: "fishy",
      name: "FISHY",
      ticker: "$FISHY",
      chain: "Solana",
      status: "Testing live now",
      blurb:
        "Generic on purpose, funny by nature. Hand-drawn fish energy — lore-driven, no whitepaper necessary.",
      dexscreener:
        "https://dexscreener.com/solana/PAIR_ADDRESS?embed=1&theme=dark", // replace later
      image: "/rarememes-intro.jpg",
    },
  ];

  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#111111",   // darker gray",
        color: "white",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      {/* Hero */}
      <section style={{ textAlign: "center", padding: "4rem 1rem" }}>
        <h1 style={{ fontSize: "3rem", fontWeight: "bold", letterSpacing: "-1px" }}>
          RARE MEMES Collective
        </h1>
        <p style={{ color: "#ccc", maxWidth: 600, margin: "1rem auto" }}>
          Drawn live. Named after. Minted with heart. Imperfect on purpose. No AI shortcuts — just mouse, grit, and lore.
        </p>
        <div style={{ marginTop: "2rem" }}>
          <a
            href="#launchpad"
            style={{
              backgroundColor: "white",
              color: "black",
              padding: "0.75rem 1.25rem",
              borderRadius: 12,
              fontWeight: "bold",
              marginRight: 12,
              textDecoration: "none",
            }}
          >
            View Current Drop
          </a>
          <a
            href="#gallery"
            style={{
              border: "1px solid #555",
              padding: "0.75rem 1.25rem",
              borderRadius: 12,
              color: "white",
              textDecoration: "none",
            }}
          >
            Live Draw Gallery
          </a>
        </div>
        <div style={{ marginTop: 12, fontSize: "0.9rem", color: "#aaa" }}>
          <a
            href={socials.twitter}
            target="_blank"
            rel="noreferrer"
            style={{ color: "#00FFB2", textDecoration: "underline" }}
          >
            Twitter/X
          </a>
        </div>
      </section>

      {/* Vision */}
      <section style={{ padding: "4rem 1rem", textAlign: "center" }}>
        <h2 style={{ fontSize: "2rem", fontWeight: 600 }}>The Vision</h2>
        <p style={{ color: "#aaa", maxWidth: 700, margin: "1rem auto" }}>
          <span style={{ fontFamily: "monospace" }}>@Meme7Master</span> — is building a living meme ecosystem: every token begins as a
          live, mouse-drawn sketch. Think Matt Furie energy — unpolished, funny, and original. Some flop, some fly; all add to the lore.
        </p>
      </section>

      {/* Launchpad */}
      <section id="launchpad" style={{ padding: "4rem 1rem", textAlign: "center" }}>
        <h2 style={{ fontSize: "2rem", fontWeight: 600, marginBottom: "1.5rem" }}>
          Launchpad — Current Drop
        </h2>
        {drops.map((d) => (
          <div
            key={d.id}
            style={{
              backgroundColor: "#111",
              border: "1px solid #333",
              borderRadius: 20,
              maxWidth: 760,
              margin: "2rem auto",
              padding: "1.5rem",
            }}
          >
            <h3 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
              {d.name} <span style={{ color: "#999" }}>({d.ticker})</span>
            </h3>
            <p style={{ color: "#bbb", fontSize: "0.95rem", marginBottom: "1rem" }}>{d.blurb}</p>
            {d.image && (
              <img
                src={d.image}
                alt={`${d.name} preview`}
                style={{
                  width: "100%",
                  borderRadius: 12,
                  marginBottom: "1rem",
                  boxShadow: "0 0 30px rgba(0,255,128,0.15)",
                }}
              />
            )}
            <iframe
              src={d.dexscreener}
              title={`${d.name} chart`}
              style={{
                width: "100%",
                height: 520,
                borderRadius: 12,
                border: "1px solid #222",
                backgroundColor: "#000",
              }}
              allowFullScreen
              loading="lazy"
            />
          </div>
        ))}
      </section>

      {/* Hall of Fame */}
      <section id="hall" style={{ padding: "4rem 1rem", textAlign: "center" }}>
        <h2 style={{ fontSize: "2rem", fontWeight: 600, marginBottom: "1.5rem" }}>Hall of Fame</h2>
        <p style={{ color: "#aaa", maxWidth: 700, margin: "0 auto 1.5rem" }}>
          Top performing drops — immortalized for absurdity, lore, and numbers that made chat go feral.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
            gap: "1rem",
            maxWidth: 1000,
            margin: "0 auto",
          }}
        >
          {hallOfFame.map((c, idx) => (
            <a
              key={idx}
              href={c.link}
              target="_blank"
              rel="noreferrer"
              style={{
                textDecoration: "none",
                color: "inherit",
                background: "#111",
                border: "1px solid #333",
                borderRadius: 16,
                padding: "1rem",
                display: "block",
              }}
            >
              {c.image ? (
                <img
                  src={c.image}
                  alt={c.name}
                  style={{ width: "100%", borderRadius: 12, marginBottom: 10 }}
                />
              ) : (
                <div
                  style={{
                    width: "100%",
                    aspectRatio: "1 / 1",
                    borderRadius: 12,
                    background: "#0f0f0f",
                    border: "1px dashed #333",
                    display: "grid",
                    placeItems: "center",
                    color: "#666",
                    marginBottom: 10,
                  }}
                >
                  {c.ticker}
                </div>
              )}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                <strong>{c.name}</strong>
                <span style={{ color: "#00ffb2", fontWeight: 700 }}>{c.gain}</span>
              </div>
              {c.quote && (
                <p style={{ color: "#aaa", fontSize: "0.9rem", marginTop: 6 }}>{c.quote}</p>
              )}
            </a>
          ))}
        </div>
      </section>

      {/* Arcade — Coming Soon */}
      <section
        id="arcade"
        style={{
          padding: "4rem 1rem",
          textAlign: "center",
          background:
            "radial-gradient(circle at 50% 0%, rgba(0,255,100,0.05), rgba(0,0,0,1) 80%)",
        }}
      >
        <h2 style={{ fontSize: "2rem", fontWeight: 600, marginBottom: "1rem" }}>RareMemes Arcade</h2>
        <p
          style={{
            color: "#00FFB2",
            fontFamily: "monospace",
            fontSize: "1.2rem",
            letterSpacing: "1px",
            textShadow: "0 0 8px rgba(0,255,128,0.4)",
          }}
        >
          ▸▸ COMING SOON ▸▸
        </p>
        <p style={{ color: "#aaa", marginTop: "1rem", fontStyle: "italic" }}>
          The next evolution — playable memes, scoreboards, and hidden rewards.
        </p>
      </section>

      {/* Footer */}
      <footer
        style={{
          borderTop: "1px solid #222",
          padding: "1.5rem",
          textAlign: "center",
          color: "#777",
          fontSize: "0.9rem",
        }}
      >
        © {new Date().getFullYear()} RARE MEMES Collective — Hand-drawn. Human-made. Foolproof fun.
      </footer>
    </main>
  );
}
