import React from "react";
export default function DogCard({ dog, onOpen, onImage }) {
  return (
    <div className="card">
      <img className="thumb" src={dog.hero} alt={dog.name}
        style={{ cursor: onImage ? "pointer" : "default" }}
        onClick={() => onImage?.(dog.hero)}
      />
      <div className="pad">
        <div className="row" style={{ justifyContent:"space-between", alignItems:"center" }}>
          <div>
            <div style={{ fontWeight:900 }}>{dog.name}</div>
            <small style={{ color:"var(--muted)" }}>
              {dog.breed}{dog.class?` • ${dog.class}`:""}{dog.registry?` • ${dog.registry}`:""}
            </small>
          </div>
          {onOpen ? <button className="btn" onClick={onOpen}>View</button> : null}
        </div>
        {dog.status ? <div style={{ marginTop:10 }} className="badge">{dog.status}</div> : null}
      </div>
    </div>
  );
}
