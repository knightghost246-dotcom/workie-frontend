import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function TaskDetail() {
  const n = useNavigate();
  return (
    <div style={{maxWidth:402,margin:'0 auto',background:'#F8F9FA',minHeight:'100vh',padding:'16px 20px 80px'}}>
      <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:16}}>
        <span style={{fontSize:24,cursor:'pointer'}} onClick={()=>n('/dashboard-worker')}>←</span>
        <h1 style={{fontSize:20,fontWeight:800,color:'#0D9488'}}>Detail Tugas</h1>
      </div>
      <div style={{background:'#fff',padding:16,borderRadius:12}}>
        <div style={{display:'flex',gap:8}}>
          <span style={{padding:'2px 12px',borderRadius:12,fontSize:12,fontWeight:600,background:'#E0F2FE',color:'#0369A1'}}>Desain</span>
          <span style={{padding:'2px 12px',borderRadius:12,fontSize:12,fontWeight:600,background:'#FEF3C7',color:'#92400E'}}>Menengah</span>
        </div>
        <h2>Desain Logo Cafe Kopi Minimalis</h2>
        <p style={{fontSize:24,fontWeight:800,color:'#0D9488'}}>Rp 300.000</p>
      </div>
      <div style={{background:'#fff',padding:16,borderRadius:12,marginTop:12}}>
        <h4>Deskripsi</h4>
        <p style={{color:'#475569'}}>Mencari desainer untuk logo cafe minimalis modern.</p>
      </div>
      <div style={{background:'#fff',padding:16,borderRadius:12,marginTop:12}}>
        <div style={{display:'flex',justifyContent:'space-between',padding:'8px 0',borderBottom:'1px solid #E2E8F0'}}>
          <span style={{color:'#64748B'}}>Format Output</span>
          <span>PNG, SVG</span>
        </div>
        <div style={{display:'flex',justifyContent:'space-between',padding:'8px 0',borderBottom:'1px solid #E2E8F0'}}>
          <span style={{color:'#64748B'}}>Revisi</span>
          <span>2x</span>
        </div>
        <div style={{display:'flex',justifyContent:'space-between',padding:'8px 0'}}>
          <span style={{color:'#64748B'}}>Deadline</span>
          <span>Besok, 17:00</span>
        </div>
      </div>
      <button onClick={()=>n('/workspace')} style={{width:'100%',padding:14,background:'#0D9488',color:'#fff',border:'none',borderRadius:12,fontSize:16,fontWeight:700,marginTop:16}}>Ambil Pekerjaan</button>
    </div>
  );
}
