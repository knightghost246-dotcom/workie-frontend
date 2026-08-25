import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function WorkSpace() {
  const n = useNavigate();
  return (
    <div style={{maxWidth:402,margin:'0 auto',background:'#F8F9FA',minHeight:'100vh',padding:'16px 20px 80px'}}>
      <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:16}}>
        <span style={{fontSize:24,cursor:'pointer'}} onClick={()=>n('/task-detail')}>←</span>
        <h1 style={{fontSize:20,fontWeight:800,color:'#0D9488'}}>Ruang Kerja: Logo Cafe</h1>
      </div>

      <div style={{display:'flex',gap:12,marginBottom:16}}>
        <span style={{padding:'8px 16px',background:'#0D9488',color:'#fff',borderRadius:8,fontSize:14}}>Detail</span>
        <span style={{padding:'8px 16px',background:'#E2E8F0',borderRadius:8,fontSize:14}}>Chat</span>
        <span style={{padding:'8px 16px',background:'#E2E8F0',borderRadius:8,fontSize:14}}>Hasil</span>
      </div>

      <div style={{background:'#fff',padding:16,borderRadius:12}}>
        <h4>Status Pekerjaan</h4>
        <p style={{color:'#475569'}}>Anda terdaftar sebagai pengerja.</p>
        <div style={{marginTop:12}}>
          <div style={{display:'flex',gap:12,alignItems:'center',padding:'8px 0',borderBottom:'1px solid #E2E8F0'}}>
            <span style={{fontSize:20}}>✅</span>
            <div><p style={{fontWeight:600}}>Pekerjaan Diambil</p><p style={{fontSize:13,color:'#64748B'}}>24 Nov 2025, 09:00</p></div>
          </div>
          <div style={{display:'flex',gap:12,alignItems:'center',padding:'8px 0',borderBottom:'1px solid #E2E8F0'}}>
            <span style={{fontSize:20}}>⏳</span>
            <div><p style={{fontWeight:600}}>Kirim Hasil Pekerjaan</p><p style={{fontSize:13,color:'#64748B'}}>Belum ada dokumen dikirim.</p></div>
          </div>
          <div style={{display:'flex',gap:12,alignItems:'center',padding:'8px 0'}}>
            <span style={{fontSize:20}}>⏳</span>
            <div><p style={{fontWeight:600}}>Verifikasi & Pembayaran</p><p style={{fontSize:13,color:'#64748B'}}>Menunggu dokumen terunggah.</p></div>
          </div>
        </div>
      </div>

      <div style={{background:'#fff',padding:16,borderRadius:12,marginTop:12}}>
        <h4>Proses Desain</h4>
        <p style={{color:'#64748B',fontSize:14}}>Silakan kerjakan sesuai brief klien.</p>
        <div style={{border:'2px dashed #E2E8F0',padding:20,borderRadius:12,textAlign:'center',marginTop:12}}>
          <p style={{fontSize:32}}>📁</p>
          <p style={{fontWeight:600}}>Unggah Dokumen Final</p>
          <p style={{fontSize:13,color:'#64748B'}}>Pilih File Logo Final</p>
          <p style={{fontSize:12,color:'#94A3B8'}}>Maksimal ukuran file: 25MB (ZIP, SVG, PNG)</p>
        </div>
        <button style={{width:'100%',padding:12,background:'#0D9488',color:'#fff',border:'none',borderRadius:12,marginTop:12,fontWeight:600}}>Kirim Hasil Pekerjaan</button>
      </div>

      <button onClick={()=>n('/dashboard-worker')} style={{width:'100%',padding:14,background:'#E2E8F0',color:'#475569',border:'none',borderRadius:12,fontSize:16,fontWeight:700,marginTop:16}}>Kembali</button>
    </div>
  );
}
