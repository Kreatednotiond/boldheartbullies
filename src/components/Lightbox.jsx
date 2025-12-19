import React from "react";
export default function Lightbox({ src, onClose }) {
  if (!src) return null;
  return (
    <div
      style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.92)", display:"flex",
        alignItems:"center", justifyContent:"center", zIndex:9999, padding:20 }}
      onClick={onClose}
    >
      <img src={src} alt="Enlarged"
        style={{ maxWidth:"95vw", maxHeight:"90vh", borderRadius:14 }}
        onClick={(e)=>e.stopPropagation()}
      />
      <button
        onClick={(e)=>{e.stopPropagation(); onClose();}}
        style={{ position:"fixed", top:16, right:16, fontSize:28, background:"transparent", color:"white",
          border:"none", cursor:"pointer" }}
        aria-label="Close"
      >×</button>
    </div>
  );
}
