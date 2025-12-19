import React from "react";
import { SITE_DATA } from "../data/siteData.js";
export default function Contracts({ onImage }) {
  const { contracts, contractsImportant } = SITE_DATA;
  return (
    <div className="container">
      <div className="section"><h2>Contracts</h2><p style={{ color:"var(--muted)" }}>Important details + downloadable files.</p></div>
      <div className="card"><div className="pad">
        <div className="badge">Important details</div>
        <ul style={{ color:"var(--muted)", lineHeight:1.8, marginTop:10 }}>
          {contractsImportant.map((t,i)=><li key={i}>{t}</li>)}
        </ul>
      </div></div>

      <div className="section">
        <div className="grid">
          {contracts.map((c, idx) => (
            <div key={idx} style={{ gridColumn:"span 6" }}>
              <div className="card"><div className="pad">
                <div style={{ fontWeight:900 }}>{c.label}</div>
                <p style={{ color:"var(--muted)" }}>{c.file}</p>
                {c.file.endsWith(".png") ? (
                  <button className="btn primary" onClick={()=>onImage?.(c.file)}>View</button>
                ) : (
                  <a className="btn primary" href={c.file} target="_blank" rel="noreferrer">Open</a>
                )}
              </div></div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
