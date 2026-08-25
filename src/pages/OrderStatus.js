import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function OrderStatus() {
  const n = useNavigate();
  return (
    <div style={{maxWidth:402,margin:'0 auto',background:'#F8F9FA',minHeight:'100vh',padding:'16px 20px 80px'}}>
      <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:16}}>
        <span style={{fontSize:24,cursor:'pointer'}} onClick={()=>n('/dashboard-customer')}>←</span>
        <h1 style={{fontSize:20,fontWeight:800,color:'#0D9488'}}>Detail Status Order</h1>
      </div>

      <div style={{background:'#fff',padding:16,borderRadius:12}}>
        <p style={{fontSize:13,color:'#64748B'}}>ID Order: WRK-10938</p>
        <p style={{fontWeight:700,fontSize:18}}>Desain Logo Cafe Kopi Kekinian</p>
      </div>

      <div style={{background:'#fff',padding:16,borderRadius:12,marginTop:12}}>
        <h4>Tahapan Pekerjaan</h4>
        <div style={{marginTop:12}}>
          <div style={{display:'flex',gap:12,alignItems:'center',padding:'8px 0',borderBottom:'1px solid #E2E8F0'}}>
            <span style={{fontSize:20}}>✅</span>
            <div><p style={{fontWeight:600}}>Aktif</p><p style={{fontSize:13,color:'#64748B'}}>24 Nov 2025, 09:00</p></div>
          </div>
          <div style={{display:'flex',gap:12,alignItems:'center',padding:'8px 0',borderBottom:'1px solid #E2E8F0'}}>
            <span style={{fontSize:20}}>✅</span>
            <div><p style={{fontWeight:600}}>Dikerjakan</p><p style={{fontSize:13,color:'#64748B'}}>24 Nov 2025, 11:30</p></div>
          </div>
          <div style={{display:'flex',gap:12,alignItems:'center',padding:'8px 0',borderBottom:'1px solid #E2E8F0'}}>
            <span style={{fontSize:20}}>✅</span>
            <div><p style={{fontWeight:600}}>Hasil Dikirim</p><p style={{fontSize:13,color:'#64748B'}}>25 Nov 2025, 14:00</p></div>
          </div>
          <div style={{display:'flex',gap:12,alignItems:'center',padding:'8px 0'}}>
            <span style={{fontSize:20}}>⏳</span>
            <div><p style={{fontWeight:600}}>Menunggu Persetujuan</p><p style={{fontSize:13,color:'#64748B'}}>Sedang berjalan</p></div>
          </div>
        </div>
      </div>

      <div style={{background:'#fff',padding:16,borderRadius:12,marginTop:12}}>
        <h4>Review Klien</h4>
        <div style={{display:'flex',gap:12,alignItems:'center',marginTop:8}}>
          <div style={{width:40,height:40,borderRadius:'50%',background:'#0D9488',display:'flex',alignItems:'center',justifyContent:'center',color:'#fff'}}>FM</div>
          <div>
            <p style={{fontWeight:600}}>Farhan M. (Penyedia Jasa)</p>
            <p style={{fontSize:13,color:'#64748B'}}>Selesai mengirim hasil kerja akhir</p>
          </div>
        </div>
      </div>

      <div style={{display:'flex',gap:12,marginTop:16}}>
        <button onClick={()=>n('/rating')} style={{flex:1,padding:14,background:'#0D9488',color:'#fff',border:'none',borderRadius:12,fontWeight:600}}>⭐ Beri Penilaian</button>
        <button onClick={()=>n('/cancel-order')} style={{flex:1,padding:14,background:'#FEE2E2',color:'#991B1B',border:'none',borderRadius:12,fontWeight:600}}>Batalkan</button>
      </div>
    </div>
  );
}
