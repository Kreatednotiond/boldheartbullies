import React from "react";
import { SITE_DATA } from "../data/siteData.js";
function fmtDate(iso){
  if(!iso) return "";
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString(undefined,{year:"numeric",month:"long",day:"numeric"});
}
export default function Breedings({ onImage }) {
  const dams = SITE_DATA.dams;
  const pending = dams.filter(d=>d.pendingBreeding);
  const planned = dams.filter(d=>d.plannedBreeding);
  return (
    <div className="container">
      <div className="section">
        <h2>Breedings</h2>
        <p style={{ color:"var(--muted)" }}>Pending and planned breedings.</p>
      </div>

      <div className="section"><h2>Pending</h2></div>
      {pending.map(d=>(
        <div className="card" key={d.id} style={{ marginTop:14 }}>
          <div className="pad">
            <div style={{ fontWeight:900 }}>{d.name} × {d.pendingBreeding.stud}</div>
            <p style={{ color:"var(--muted)", lineHeight:1.7 }}>
              Method: {d.pendingBreeding.method} • Dates: {d.pendingBreeding.dates.map(fmtDate).join(", ")} • Status: {d.pendingBreeding.status}
            </p>
            <div className="row">
              <img className="thumb" style={{ maxWidth:240, height:170, borderRadius:14, cursor:"pointer" }} src={d.hero} alt={d.name} onClick={()=>onImage(d.hero)} />
              {d.pendingBreeding.studHero ? (
                <img className="thumb" style={{ maxWidth:240, height:170, borderRadius:14, cursor:"pointer" }} src={d.pendingBreeding.studHero} alt="stud" onClick={()=>onImage(d.pendingBreeding.studHero)} />
              ) : null}
            </div>
            <div style={{ marginTop:10 }} className="badge">Outside stud — not owned by BHB</div>
          </div>
        </div>
      ))}

      <div className="section"><h2>Planned</h2></div>
      {planned.map(d=>(
        <div className="card" key={d.id} style={{ marginTop:14 }}>
          <div className="pad">
            <div style={{ fontWeight:900 }}>{d.name} × {d.plannedBreeding.stud}</div>
            <p style={{ color:"var(--muted)", lineHeight:1.7 }}>
              Timing: {d.plannedBreeding.timing}{d.plannedBreeding.note?` • ${d.plannedBreeding.note}`:""}
            </p>
            <div className="row">
              <img className="thumb" style={{ maxWidth:240, height:170, borderRadius:14, cursor:"pointer" }} src={d.hero} alt={d.name} onClick={()=>onImage(d.hero)} />
              {d.plannedBreeding.studHero ? (
                <img className="thumb" style={{ maxWidth:240, height:170, borderRadius:14, cursor:"pointer" }} src={d.plannedBreeding.studHero} alt="stud" onClick={()=>onImage(d.plannedBreeding.studHero)} />
              ) : null}
            </div>
            <div style={{ marginTop:10 }} className="badge">Outside stud — not owned by BHB</div>
          </div>
        </div>
      ))}
    </div>
  );
}
