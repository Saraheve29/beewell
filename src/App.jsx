import { useState } from "react";

export default function BeeWell() {
  const [count, setCount] = useState(0);
  return (
    <div style={{padding:40, fontFamily:"sans-serif", background:"#FDF3E3", minHeight:"100vh"}}>
      <h1 style={{color:"#F5A623"}}>🐝 BeeWell</h1>
      <p>If you can see this, the app is loading correctly.</p>
      <button onClick={()=>setCount(c=>c+1)} 
        style={{background:"#F5A623",color:"white",border:"none",padding:"12px 24px",
          borderRadius:999,fontSize:16,cursor:"pointer"}}>
        Tap me: {count}
      </button>
    </div>
  );
}
