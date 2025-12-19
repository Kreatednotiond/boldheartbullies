import React from "react";
export default function ImageGrid({ items, onImage }) {
  if (!items || !items.length) return null;
  return (
    <div className="grid" style={{ marginTop:12 }}>
      {items.map((src, idx) => (
        <div key={idx} style={{ gridColumn:"span 3" }}>
          <div className="card">
            <img className="thumb" src={src} alt={`photo ${idx+1}`}
              style={{ height:200, cursor:onImage?"pointer":"default" }}
              onClick={() => onImage?.(src)}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
