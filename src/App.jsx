import React from 'react';

/**
 * RARE MEMES Collective — Starter Concept Page
 * Kev's mission: draw original memes live, mint them as tokens, and celebrate imperfection.
 * No whitepaper, no roadmap, just raw, handmade digital art with lore and soul.
 */

export default function RareMemesHome() {
  const socials = {
    twitter: "https://x.com/Rarememes7", // TODO: replace
    telegram: "", // optional later
  };

  const drops = [
    {
      id: "fishy",
      name: "FISHY",
      ticker: "$FISHY",
      chain: "Solana",
      status: "Testing live now",
      blurb:
        "Generic on purpose, funny by nature. Hand-drawn fish energy — lore-driven, no whitepaper necessary.",
      // Example TradingView symbol if you list on a CEX later: "BINANCE:SOLUSDT".
      // For DEX pairs today, embed DexScreener/DEXTools below.
      dexscreener: "https://dexscreener.com/solana/PAIR_ADDRESS?embed=1&theme=dark", // TODO: replace with real pair
      image: "", // optional: add a preview image URL
    },
  ];

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      {/* Hero */}
      <section className="px-6 pt-12 pb-8 text-center max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold tracking-tight">RARE MEMES Collective</h1>
        <p className="text-neutral-300 text-lg max-w-2xl mx-auto mt-3">
          Drawn live. Named after. Minted with heart. Imperfect on purpose. No AI shortcuts — just mouse, grit, and lore.
        </p>
        <div className="flex items-center justify-center gap-3 mt-6">
          <a href="#launchpad" className="px-4 py-2 rounded-xl bg-white text-black font-semibold">View Current Drop</a>
          <a href="#gallery" className="px-4 py-2 rounded-xl border border-neutral-600">Live Draw Gallery</a>
        </div>
        <div className="flex items-center justify-center gap-4 mt-5 text-sm text-neutral-400">
          <a className="underline" href={socials.twitter} target="_blank" rel="noreferrer">Twitter/X</a>
          <a className="underline" href={socials.email}>Email</a>
          {socials.telegram && (
            <a className="underline" href={socials.telegram} target="_blank" rel="noreferrer">Telegram</a>
          )}
        </div>
      </section>

      {/* Vision */}
      <section className="px-6 py-10 max-w-5xl mx-auto text-center space-y-6">
        <h2 className="text-3xl font-semibold">The Vision</h2>
        <p className="text-neutral-400 text-lg">
           <span className="font-mono">@Meme7Master</span> — is building a living meme ecosystem: every token begins as a
          live, mouse-drawn sketch. Think Matt Furie energy — unpolished, funny, and original. Some flop, some fly; all add to the lore.
        </p>
      </section>

      {/* Launchpad */}
      <section id="launchpad" className="px-6 py-10 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-center">Launchpad — Current Drop</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {drops.map((d) => (
            <div key={d.id} className="rounded-2xl border border-neutral-800 bg-neutral-950 p-5 shadow-md">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-semibold">{d.name} <span className="text-neutral-400">({d.ticker})</span></h3>
                <span className="text-xs px-2 py-1 rounded-full bg-neutral-800 text-neutral-300">{d.status}</span>
              </div>
              <p className="text-sm text-neutral-300 mb-4">{d.blurb}</p>
              {d.image && (
                <img src={d.image} alt={`${d.name} preview`} className="w-full rounded-xl border border-neutral-800 mb-4" />
              )}
              {/* DexScreener / DEXTools embed */}
              {d.dexscreener ? (
                <iframe
                  src={d.dexscreener}
                  title={`${d.name} chart`}
                  className="w-full h-[520px] rounded-xl bg-neutral-900 border border-neutral-800"
                  allowFullScreen
                  loading="lazy"
                />
              ) : (
                <div className="w-full h-[120px] rounded-xl bg-neutral-900 border border-neutral-800 grid place-items-center text-neutral-400">
                  Add your DexScreener embed URL in the code to show the live chart.
                </div>
              )}
              <div className="flex flex-wrap gap-3 mt-4">
                <a href="#" className="px-3 py-2 rounded-xl bg-white text-black text-sm font-semibold">Buy / View Pair</a>
                <a href="#lore" className="px-3 py-2 rounded-xl border border-neutral-600 text-sm">Read Lore</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="px-6 py-10 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-center">Live Draw Gallery</h2>
        <p className="text-neutral-400 text-center max-w-3xl mx-auto mb-6">
          Snapshots from stream sessions — raw frames, process shots, and finished meme pieces. Imperfect is the aesthetic.
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Replace these placeholders with your uploaded images */}
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="aspect-square rounded-xl bg-neutral-900 border border-neutral-800 grid place-items-center text-neutral-600">
              Add image {i + 1}
            </div>
          ))}
        </div>
      </section>

      {/* Lore */}
      <section id="lore" className="px-6 py-10 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-3">Manifesto & Lore</h2>
        <p className="text-neutral-300 text-lg italic max-w-2xl mx-auto">
          "Pepe wasn’t perfect — and that’s the point. The rawness is the charm, and the lore is the magic."
        </p>
        <p className="text-neutral-400 mt-4">
          Each drop comes with micro-lore: a short paragraph, a tagline, and a meme origin story. Keep it short and punchy.
        </p>
      </section>

      {/* Footer */}
      <footer className="px-6 border-t border-neutral-800 py-8 text-center text-neutral-500 text-sm">
        <p>© {new Date().getFullYear()} RARE MEMES Collective — Hand-drawn. Human-made. Foolproof fun.</p>
      </footer>
    </main>
  );
}
