import React from "react";

export default function ImageGrid({ items, onImage }) {
  const safeItems = Array.isArray(items) ? items.filter(Boolean) : (items ? [items] : []);
  if (!safeItems.length) return null;

  return (
    <div className="grid" style={{ marginTop: 12 }}>
      {safeItems.map((src, idx) => (
        <div key={`${src}-${idx}`} className="gridItem">
          <div className="card">
            <img
              className="thumb"
              src={src}
              alt={`photo ${idx + 1}`}
              style={{ height: 220, cursor: onImage ? "pointer" : "default" }}
              onClick={() => onImage?.(src)}
              onError={(e) => {
                // hide broken images so they don't show as a second "ghost" photo
                e.currentTarget.style.display = "none";
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
