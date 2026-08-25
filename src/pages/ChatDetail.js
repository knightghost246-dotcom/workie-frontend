import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ChatDetail() {
  const n = useNavigate();
  const [msgs, setMsgs] = useState([
    { text: 'Halo Andi, desain logonya bisa tolong ditambahkan ikon biji kopi di atas cangkirnya ya?', sender: 'klien', time: '09:41' },
    { text: 'Siap mas, revisi segera saya buatkan. Kira-kira seperti ini referensi layout barunya.', sender: 'me', time: '09:41' }
  ]);
  const [inp, setInp] = useState('');

  const send = () => {
    if (!inp.trim()) return;
    setMsgs([...msgs, { text: inp, sender: 'me', time: new Date().toLocaleTimeString('id-ID', {hour:'2-digit',minute:'2-digit'}) }]);
    setInp('');
  };

  return (
    <div style={{maxWidth:402,margin:'0 auto',background:'#F8F9FA',minHeight:'100vh',padding:'16px 20px 80px'}}>
      <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:16}}>
        <span style={{fontSize:24,cursor:'pointer'}} onClick={()=>n('/inbox')}>←</span>
        <div style={{display:'flex',alignItems:'center',gap:8}}>
          <div style={{width:40,height:40,borderRadius:'50%',background:'#0D9488',display:'flex',alignItems:'center',justifyContent:'center',color:'#fff'}}>AW</div>
          <div>
            <p style={{fontWeight:600}}>Andi Wijaya</p>
            <p style={{fontSize:12,color:'#22C55E'}}>🟢 Online & Aktif</p>
          </div>
        </div>
      </div>

      <div style={{display:'flex',flexDirection:'column',gap:12,marginBottom:16}}>
        {msgs.map((m,i) => (
          <div key={i} style={{maxWidth:'85%',alignSelf:m.sender==='klien'?'flex-start':'flex-end'}}>
            <div style={{padding:'12px 16px',borderRadius:16,background:m.sender==='klien'?'#fff':'#0D9488',color:m.sender==='klien'?'#0F172A':'#fff'}}>
              {m.text}
            </div>
            <p style={{fontSize:11,color:'#94A3B8',marginTop:4,textAlign:m.sender==='klien'?'left':'right'}}>{m.time}</p>
          </div>
        ))}
      </div>

      <div style={{display:'flex',gap:8,position:'fixed',bottom:80,left:'50%',transform:'translateX(-50%)',maxWidth:402,width:'90%',background:'#fff',padding:8,borderRadius:12,border:'1px solid #E2E8F0'}}>
        <input type="text" placeholder="Ketik balasan Anda disini..." value={inp} onChange={e=>setInp(e.target.value)} onKeyPress={e=>e.key==='Enter'&&send()} style={{flex:1,padding:10,border:'none',outline:'none',fontSize:14}} />
        <button onClick={send} style={{padding:'8px 16px',background:'#0D9488',color:'#fff',border:'none',borderRadius:8}}>➤</button>
      </div>
    </div>
  );
}
