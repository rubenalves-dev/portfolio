type PhotoFrameProps = {
  src: string;
  alt: string;
  className?: string;
};

export default function PhotoFrame({ src, alt, className = "" }: PhotoFrameProps) {
  return (
    <div className={`photo-frame ${className}`.trim()}>
      <div className="photo-frame__img-container">
        <img src={src} alt={alt} className="photo-frame__img" />
        {/* Floating status pill */}
        <div className="photo-frame__status-badge">
          <span className="photo-frame__status-dot" />
          <span className="photo-frame__status-text">Loc: Portugal (GMT+1)</span>
        </div>
      </div>
      <div className="photo-frame__meta">
        <div>
          <h4 className="photo-frame__name">Rúben Alves</h4>
          <p className="photo-frame__sub">raiiaa.dev · Full-Stack Dev</p>
        </div>
        <div className="photo-frame__active-badge">Active</div>
      </div>
    </div>
  );
}
