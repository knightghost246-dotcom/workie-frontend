import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function WorkerProfile() {
  const n = useNavigate();
  return (
    <div style={{maxWidth:402,margin:'0 auto',background:'#F8F9FA',minHeight:'100vh',padding:'16px 20px 80px'}}>
      <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:16}}>
        <span style={{fontSize:24,cursor:'pointer'}} onClick={()=>n('/dashboard-worker')}>←</span>
        <h1 style={{fontSize:20,fontWeight:800,color:'#0D9488'}}>Profil Pekerja</h1>
      </div>

      <div style={{textAlign:'center',background:'#fff',padding:24,borderRadius:16}}>
        <div style={{width:80,height:80,borderRadius:'50%',background:'#0D9488',display:'flex',alignItems:'center',justifyContent:'center',fontSize:32,color:'#fff',margin:'0 auto 12px'}}>FM</div>
        <h2 style={{fontSize:22}}>Farhan M.</h2>
        <p style={{color:'#0D9488',fontWeight:600}}>PRO Desainer Grafis</p>
        <div style={{display:'flex',justifyContent:'center',gap:24,marginTop:12}}>
          <div><p style={{fontSize:20,fontWeight:700}}>142</p><p style={{fontSize:12,color:'#64748B'}}>Order Selesai</p></div>
          <div><p style={{fontSize:20,fontWeight:700}}>4.9⭐</p><p style={{fontSize:12,color:'#64748B'}}>Penilaian</p></div>
          <div><p style={{fontSize:20,fontWeight:700}}>99%</p><p style={{fontSize:12,color:'#64748B'}}>Tepat Waktu</p></div>
        </div>
      </div>

      <div style={{background:'#fff',padding:16,borderRadius:12,marginTop:12}}>
        <h4>Keahlian</h4>
        <div style={{display:'flex',gap:8,marginTop:8,flexWrap:'wrap'}}>
          <span style={{padding:'4px 12px',background:'#E0F2FE',color:'#0369A1',borderRadius:12,fontSize:13}}>Logo Brand</span>
          <span style={{padding:'4px 12px',background:'#E0F2FE',color:'#0369A1',borderRadius:12,fontSize:13}}>Illustrator</span>
          <span style={{padding:'4px 12px',background:'#E0F2FE',color:'#0369A1',borderRadius:12,fontSize:13}}>Figma</span>
          <span style={{padding:'4px 12px',background:'#E0F2FE',color:'#0369A1',borderRadius:12,fontSize:13}}>Banner Sosmed</span>
          <span style={{padding:'4px 12px',background:'#E0F2FE',color:'#0369A1',borderRadius:12,fontSize:13}}>Mockup 3D</span>
        </div>
      </div>

      <div style={{background:'#fff',padding:16,borderRadius:12,marginTop:12}}>
        <h4>Portofolio Terbaru</h4>
        <div style={{display:'flex',gap:8,marginTop:8}}>
          <div style={{width:100,height:100,background:'#E2E8F0',borderRadius:8}}></div>
          <div style={{width:100,height:100,background:'#E2E8F0',borderRadius:8}}></div>
          <div style={{width:100,height:100,background:'#E2E8F0',borderRadius:8}}></div>
        </div>
      </div>

      <div style={{background:'#fff',padding:16,borderRadius:12,marginTop:12}}>
        <h4>Ulasan Klien (3)</h4>
        <div style={{marginTop:8}}>
          <div style={{display:'flex',justifyContent:'space-between'}}>
            <span style={{fontWeight:600}}>Andi Wijaya</span>
            <span style={{color:'#F59E0B'}}>⭐ 5.0</span>
          </div>
          <p style={{fontSize:14,color:'#64748B'}}>Kerjaan luar biasa! Farhan sangat komunikatif dan hasilnya melebihi ekspektasi.</p>
        </div>
      </div>

      <button style={{width:'100%',padding:14,background:'#0D9488',color:'#fff',border:'none',borderRadius:12,fontSize:16,fontWeight:700,marginTop:16}}>Hubungi Farhan</button>
    </div>
  );
}
