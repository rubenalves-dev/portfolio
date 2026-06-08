import { useState } from "react";

type PhotoFrameProps = {
  src: string;
  alt: string;
  className?: string;
};

export default function PhotoFrame({ src, alt, className = "" }: PhotoFrameProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`photo-frame ${className}`.trim()}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "var(--surface)",
        border: "0.5px solid var(--border-med)",
        borderRadius: "12px",
        padding: "16px",
        boxShadow: hovered
          ? "0 20px 40px -10px rgba(217, 99, 126, 0.15), 0 0 0 1px var(--rose-light)"
          : "0 12px 30px -15px rgba(26, 21, 18, 0.12)",
        transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
        width: "100%",
        maxWidth: "400px",
        margin: "0 auto",
      }}
    >
      <div
        className="photo-frame__img-container"
        style={{
          position: "relative",
          borderRadius: "8px",
          overflow: "hidden",
          aspectRatio: "1",
          background: "var(--surface-2)",
        }}
      >
        <img
          src={src}
          alt={alt}
          className="photo-frame__img"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
            transform: hovered ? "scale(1.05)" : "scale(1)",
          }}
        />
        {/* Floating status pill */}
        <div
          className="photo-frame__status-badge"
          style={{
            position: "absolute",
            bottom: "16px",
            left: "16px",
            background: "rgba(26, 21, 18, 0.85)",
            backdropFilter: "blur(8px)",
            padding: "6px 12px",
            borderRadius: "99px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            border: "0.5px solid rgba(255, 255, 255, 0.15)",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
          }}
        >
          <span
            className="photo-frame__status-dot"
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: "#4ade80",
              boxShadow: "0 0 8px #4ade80",
              animation: "pulse 2s infinite",
            }}
          />
          <span
            className="photo-frame__status-text"
            style={{
              color: "#faf9f7",
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
            }}
          >
            Loc: Portugal (GMT+1)
          </span>
        </div>
      </div>
      <div
        className="photo-frame__meta"
        style={{
          marginTop: "16px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <h4
            className="photo-frame__name"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.1rem",
              color: "var(--ink)",
              fontWeight: 500,
            }}
          >
            Rúben Alves
          </h4>
          <p
            className="photo-frame__sub"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              color: "var(--muted)",
              textTransform: "uppercase",
              letterSpacing: "0.04em",
              marginTop: "2px",
            }}
          >
            raiiaa.dev · Full-Stack Dev
          </p>
        </div>
        <div
          className="photo-frame__active-badge"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            color: "var(--rose)",
            background: "var(--rose-pale)",
            padding: "4px 8px",
            borderRadius: "4px",
            border: "0.5px solid var(--rose-light)",
          }}
        >
          Active
        </div>
      </div>
    </div>
  );
}
