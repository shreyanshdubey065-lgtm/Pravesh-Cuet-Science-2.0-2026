                                            import React, { useState } from 'react';

// --- DATA CENTER ---
const DATA = {
  Physics: [
    { id: 1, title: "Electric Charges & Fields 01", vId: "jgv1y06DbI4", notes: "#", dpp: "#" },
    { id: 2, title: "Electric Charges & Fields 02", vId: "", notes: "#", dpp: "#" }
  ],
  Chemistry: [{ id: 1, title: "Solutions 01", vId: "#", notes: "#", dpp: "#" }],
  Maths: [{ id: 1, title: "Relations 01", vId: "#", notes: "#", dpp: "#" }],
  Biology: [{ id: 1, title: "Reproduction 01", vId: "#", notes: "#", dpp: "#" }],
  English: [],
  GAT: []
};

const QB_DATA = [
  { sub: "Physics", link: "#", mcqs: "500+" },
  { sub: "Chemistry", link: "#", mcqs: "450+" },
  { sub: "Maths", link: "#", mcqs: "600+" }
];

export default function App() {
  const [tab, setTab] = useState('lectures');
  const [subject, setSubject] = useState('Physics');
  const [video, setVideo] = useState(null);
  const [enrolled, setEnrolled] = useState(false);

  return (
    <div style={{ background: '#f0fdf4', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      
      <style>{`
        @keyframes colorFlow { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
        .hero-title {
          font-size: clamp(4rem, 15vw, 9rem);
          font-weight: 900;
          text-transform: uppercase;
          background: linear-gradient(135deg, #16a34a 20%, #22d3ee 50%, #1d4ed8 80%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: colorFlow 6s infinite ease-in-out;
          margin: 0;
          line-height: 0.9;
          letter-spacing: -4px;
        }
        .hero-container {
          padding: 80px 20px;
          text-align: center;
          background: #fff;
          border-radius: 30px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.03);
          border: 1px solid #f0fdf4;
        }
        .nav-text { font-weight: 900; font-size: 1.5rem; color: #16a34a; letter-spacing: -1px; }
      `}</style>

      {/* Header - Logo Hata Diya Hai */}
      <nav style={{ background: '#fff', padding: '15px 6%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 2px 10px rgba(0,0,0,0.05)', position: 'sticky', top: 0, zIndex: 100 }}>
        <div className="nav-text">PRAVESH 2.0</div>
        <button onClick={() => setEnrolled(true)} style={{ background: enrolled ? '#16a34a' : '#15803d', color: '#fff', border: 'none', padding: '10px 25px', borderRadius: '50px', fontWeight: 'bold', cursor: 'pointer', boxShadow: '0 4px 10px rgba(22,163,74,0.2)' }}>
          {enrolled ? "✅ Enrolled" : "Enroll Now"}
        </button>
      </nav>

      <div style={{ maxWidth: '1000px', margin: '30px auto', padding: '0 15px' }}>
        {/* Big Colorful PRAVESH Section */}
        <div className="hero-container">
            <h1 className="hero-title">PRAVESH</h1>
            <p style={{marginTop: '25px', fontSize: '1.2rem', color: '#64748b', fontWeight: '500', letterSpacing: '1px'}}>Target CUET 2026 • Science Batch</p>
        </div>
        
        {/* Tabs */}
        <div style={{ display: 'flex', gap: '10px', marginTop: '40px', borderBottom: '2px solid #e2e8f0', overflowX: 'auto', paddingBottom: '2px' }}>
          {['lectures', 'questions', 'support'].map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: '12px 25px', border: 'none', background: 'none', borderBottom: tab === t ? '4px solid #16a34a' : 'none', color: tab === t ? '#16a34a' : '#64748b', fontWeight: 'bold', cursor: 'pointer', textTransform: 'uppercase', fontSize: '0.9rem', whiteSpace: 'nowrap' }}>
              {t === 'questions' ? '❓ Ques Bank' : t}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div style={{ marginTop: '25px', background: '#fff', padding: '25px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
          {tab === 'lectures' && (
            <>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '25px' }}>
                {Object.keys(DATA).map(s => (
                  <button key={s} onClick={() => setSubject(s)} style={{ padding: '10px 20px', borderRadius: '50px', border: subject === s ? 'none' : '1px solid #e2e8f0', background: subject === s ? '#dcfce7' : '#fff', color: subject === s ? '#16a34a' : '#64748b', fontWeight: 'bold', cursor: 'pointer' }}>{s}</button>
                ))}
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                {DATA[subject].length > 0 ? DATA[subject].map(lec => (
                  <div key={lec.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px', border: '1px solid #f1f5f9', borderRadius: '15px', background: '#fff', flexWrap: 'wrap', gap: '15px' }}>
                    <div style={{ display: 'flex', gap: '12px', alignItems: 'center'}}>
                        <span style={{ fontWeight: 'bold', color: '#fff', background: '#16a34a', padding: '4px 10px', borderRadius: '8px', fontSize: '0.8rem'}}>L{lec.id}</span>
                        <span style={{ fontWeight: '600', color: '#334155' }}>{lec.title}</span>
                    </div>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <button onClick={() => setVideo(lec.vId)} style={{ background: '#dcfce7', color: '#16a34a', border: 'none', padding: '8px 16px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>▶ Watch</button>
                      <button onClick={() => window.open(lec.notes)} style={{ background: '#e0f2fe', color: '#1d4ed8', border: 'none', padding: '8px 16px', borderRadius: '8px', cursor: 'pointer' }}>📄 Notes</button>
                      <button onClick={() => window.open(lec.dpp)} style={{ background: '#fffbeb', color: '#d97706', border: 'none', padding: '8px 16px', borderRadius: '8px', cursor: 'pointer' }}>📝 DPP</button>
                    </div>
                  </div>
                )) : <p style={{textAlign:'center', color:'#888', padding:'40px'}}>New Lectures coming soon...</p>}
              </div>
            </>
          )}

          {tab === 'questions' && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
              {QB_DATA.map(qb => (
                <div key={qb.sub} style={{ padding: '30px', border: '2px dashed #cbd5e1', borderRadius: '24px', textAlign: 'center', background: '#f8fafc' }}>
                  <h3 style={{ margin: '0 0 10px 0', color: '#1e293b', fontSize: '1.4rem' }}>{qb.sub} Bank</h3>
                  <p style={{ color: '#64748b', marginBottom: '20px' }}>{qb.mcqs} High-Quality MCQs</p>
                  <button onClick={() => window.open(qb.link)} style={{ background: '#0f172a', color: '#fff', width: '100%', padding: '12px', border: 'none', borderRadius: '12px', cursor: 'pointer', fontWeight: 'bold' }}>Download PDF</button>
                </div>
              ))}
            </div>
          )}

          {tab === 'support' && (
            <div style={{ textAlign: 'center', padding: '60px 20px' }}>
              <h2 style={{fontSize: '2rem', color: '#1e293b'}}>Doubt Support ✈️</h2>
              <p style={{color: '#64748b', marginTop: '10px'}}>Join our community for daily quizzes and doubt solving.</p>
              <button onClick={() => window.open('https://t.me/Mellowmarsh12')} style={{ background: '#0088cc', color: '#fff', border: 'none', padding: '18px 50px', borderRadius: '50px', fontSize: '1.2rem', fontWeight: 'bold', cursor: 'pointer', marginTop: '30px', boxShadow: '0 10px 20px rgba(0,136,204,0.3)' }}>Join Telegram Group</button>
            </div>
          )}
        </div>
      </div>

      {/* Video Modal */}
      {video && (
        <div onClick={() => setVideo(null)} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.95)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000 }}>
          <div onClick={e => e.stopPropagation()} style={{ width: '95%', maxWidth: '900px', background: '#000', borderRadius: '20px', overflow: 'hidden', border: '1px solid #333' }}>
            <iframe width="100%" height="500" src={`https://www.youtube.com/embed/${video}?autoplay=1`} frameBorder="0" allowFullScreen></iframe>
          </div>
        </div>
      )}
    </div>
  );
  }
