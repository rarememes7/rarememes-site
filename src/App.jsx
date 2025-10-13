import React, { useState } from "react";

export default function App() {
  // Try these filenames in order. Edit if yours is different.
  const candidates = [
    "/rarememes-intro.jpg",
    "/rarememes-intro.png",
    "/Rarememees-intro.jpg"
  ];
  const [i, setI] = useState(0);
  const [failed, setFailed] = useState(false);

  const handleError = () => {
    if (i < candidates.length - 1) setI(i + 1);
    else setFailed(true);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#000",
        color: "#fff",
        textAlign: "center",
        fontFamily: "Comic Sans MS, Marker Felt, system-ui, sans-serif",
        padding: "20px",
        gap: "20px",
      }}
    >
      <h1 style={{ fontSize: "2rem", letterSpacing: "0.5px" }}>RARE MEMES</h1>

      {!failed ? (
        <img
          src={candidates[i]}
          alt="Rare Memes Intro"
          onError={handleError}
          style={{
            maxWidth: "92vw",
            height: "auto",
            borderRadius: "12px",
            boxShadow: "0 0 25px rgba(0, 255, 128, 0.4)",
          }}
        />
      ) : (
        <div
          style={{
            width: "92vw",
            maxWidth: 1000,
            aspectRatio: "4 / 3",
            borderRadius: "12px",
            border: "2px dashed #333",
            display: "grid",
            placeItems: "center",
            color: "#9aa",
          }}
        >
          Image not found. Put your file in <code>/public</code> as
          <code> rarememes-intro.jpg </code> or update the list in App.jsx.
        </div>
      )}

      <p style={{ marginTop: "6px", fontSize: "1.1rem" }}>
        Witness history at{" "}
        <a
          href="https://pump.fun/profile/rarememes"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#00FFB2", textDecoration: "underline", fontWeight: "bold" }}
        >
          RareMemes
        </a>
      </p>
    </div>
  );
}
