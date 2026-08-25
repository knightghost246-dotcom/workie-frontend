import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Wallet() {
  const n = useNavigate();
  const transactions = [
    { desc: 'Pembayaran Logo Cafe Kopi', date: 'Hari ini, 14:20', amount: '+ Rp 250.000', type: 'income' },
    { desc: 'Tips dari Klien Andi Wijaya', date: 'Kemarin, 18:05', amount: '+ Rp 50.000', type: 'income' },
    { desc: 'Penarikan Dana ke Bank BCA', date: '24 Nov 2025, 09:15', amount: '- Rp 150.000', type: 'out' },
    { desc: 'Pembayaran Banner Promosi', date: '22 Nov 2025, 17:00', amount: '+ Rp 350.000', type: 'income' }
  ];

  return (
    <div style={{maxWidth:402,margin:'0 auto',background:'#F8F9FA',minHeight:'100vh',padding:'16px 20px 80px'}}>
      <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:16}}>
        <span style={{fontSize:24,cursor:'pointer'}} onClick={()=>n('/dashboard-worker')}>←</span>
        <h1 style={{fontSize:20,fontWeight:800,color:'#0D9488'}}>Dompet WORKIE</h1>
      </div>

      <div style={{background:'#0D9488',padding:24,borderRadius:16,color:'#fff'}}>
        <p style={{fontSize:14,opacity:0.8}}>SALDO WORKIE</p>
        <h2 style={{fontSize:36,fontWeight:800}}>Rp 500.000</h2>
        <button style={{padding:'10px 20px',background:'rgba(255,255,255,0.2)',border:'none',borderRadius:8,color:'#fff',marginTop:8,fontWeight:600}}>💳 Tarik Dana Instan</button>
        <p style={{fontSize:11,opacity:0.7,marginTop:8}}>Minimal penarikan saldo adalah Rp10.000. Dana langsung cair ke rekening terdaftar.</p>
      </div>

      <h4 style={{margin:'16px 0 12px'}}>Riwayat Transaksi</h4>
      {transactions.map((t,i) => (
        <div key={i} style={{background:'#fff',padding:12,borderRadius:12,marginBottom:8,display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <div>
            <p style={{fontWeight:600,fontSize:14}}>{t.desc}</p>
            <p style={{fontSize:12,color:'#94A3B8'}}>{t.date}</p>
          </div>
          <span style={{fontWeight:700,color:t.type === 'income' ? '#0D9488' : '#EF4444'}}>{t.amount}</span>
        </div>
      ))}
    </div>
  );
}
