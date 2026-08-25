import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Inbox() {
  const n = useNavigate();
  const chats = [
    { name: 'Andi Wijaya (Klien)', msg: 'Apakah logo minimalisnya sud...', time: '09:41', type: 'Pribadi' },
    { name: 'Team Cafe Project', msg: 'Sarah: Desain aset sudah saya...', time: 'Kemarin', type: 'Grup' },
    { name: 'Farhan M. (Desainer)', msg: 'Siap mas, segera dikirim ya rev...', time: '3 hari lalu', type: 'Pribadi' }
  ];

  return (
    <div style={{maxWidth:402,margin:'0 auto',background:'#F8F9FA',minHeight:'100vh',padding:'16px 20px 80px'}}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:16}}>
        <h1 style={{fontSize:20,fontWeight:800,color:'#0D9488'}}>Kotak Masuk</h1>
        <span style={{fontSize:24,cursor:'pointer'}} onClick={()=>n('/dashboard-customer')}>✕</span>
      </div>

      <div style={{display:'flex',gap:12,marginBottom:16}}>
        <span style={{padding:'6px 16px',background:'#0D9488',color:'#fff',borderRadius:20,fontSize:13}}>Pesanan</span>
        <span style={{padding:'6px 16px',background:'#E2E8F0',borderRadius:20,fontSize:13}}>Chat</span>
        <span style={{padding:'6px 16px',background:'#E2E8F0',borderRadius:20,fontSize:13}}>Sistem</span>
      </div>

      <div style={{background:'#fff',padding:12,borderRadius:12,display:'flex',alignItems:'center',gap:12,marginBottom:12}}>
        <span>🔍</span>
        <input type="text" placeholder="Cari chat atau nama klien..." style={{flex:1,border:'none',outline:'none',fontSize:14,padding:'8px 0'}} />
      </div>

      {chats.map((chat,i) => (
        <div key={i} style={{background:'#fff',padding:16,borderRadius:12,marginBottom:8,cursor:'pointer'}} onClick={()=>n('/chat-detail')}>
          <div style={{display:'flex',justifyContent:'space-between'}}>
            <span style={{fontWeight:600}}>{chat.name}</span>
            <span style={{fontSize:12,color:'#94A3B8'}}>{chat.time}</span>
          </div>
          <p style={{color:'#64748B',fontSize:14,marginTop:4}}>{chat.msg}</p>
          <span style={{fontSize:11,color:'#0D9488',background:'#F0FDFA',padding:'2px 8px',borderRadius:4}}>{chat.type}</span>
        </div>
      ))}
    </div>
  );
}
