import React, { useState } from 'react';

// --- DATA CENTER (Yahan se update karein) ---
const DATA = {
  Physics: [
    { id: 1, title: "Electric Charges & Fields 01", vId: "dQw4w9WgXcQ", notes: "#", dpp: "#" },
    { id: 2, title: "Electric Charges & Fields 02", vId: "3_MAtX2938k", notes: "#", dpp: "#" }
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

  const logo = "https://r.jina.ai/i/589c3bdf-09e9-41b7-9a75-c2cd3ee26878.jpg";

  return (
    <div style={{ background: '#f8fafc', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      {/* Header */}
      <nav style={{ background: '#fff', padding: '10px 5%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
        <img src={logo} style={{ height: '40px', borderRadius: '50%' }} alt="logo" />
        <button onClick={() => setEnrolled(true)} style={{ background: enrolled ? '#16a34a' : '#2563eb', color: '#fff', border: 'none', padding: '8px 20px', borderRadius: '20px', fontWeight: 'bold', cursor: 'pointer' }}>
          {enrolled ? "✅ Enrolled" : "Enroll Now"}
        </button>
      </nav>

      {/* Hero */}
      <div style={{ maxWidth: '1000px', margin: '20px auto', padding: '0 15px' }}>
        <img src={logo} style={{ width: '100%', borderRadius: '20px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }} alt="banner" />
        
        {/* Tabs */}
        <div style={{ display: 'flex', gap: '15px', marginTop: '30px', borderBottom: '2px solid #e2e8f0' }}>
          {['lectures', 'questions', 'support'].map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: '10px 20px', border: 'none', background: 'none', borderBottom: tab === t ? '3px solid #2563eb' : 'none', color: tab === t ? '#2563eb' : '#64748b', fontWeight: 'bold', cursor: 'pointer', textTransform: 'uppercase' }}>
              {t === 'questions' ? '❓ Ques Bank' : t}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div style={{ marginTop: '25px', background: '#fff', padding: '20px', borderRadius: '15px', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
          {tab === 'lectures' && (
            <>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '20px' }}>
                {Object.keys(DATA).map(s => (
                  <button key={s} onClick={() => setSubject(s)} style={{ padding: '8px 18px', borderRadius: '20px', border: '1px solid #e2e8f0', background: subject === s ? '#eff6ff' : '#fff', color: subject === s ? '#2563eb' : '#64748b', fontWeight: 'bold', cursor: 'pointer' }}>{s}</button>
                ))}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {DATA[subject].map(lec => (
                  <div key={lec.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px', border: '1px solid #f1f5f9', borderRadius: '12px' }}>
                    <span style={{ fontWeight: 'bold' }}>L{lec.id}. {lec.title}</span>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <button onClick={() => setVideo(lec.vId)} style={{ background: '#dcfce7', color: '#16a34a', border: 'none', padding: '6px 12px', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>▶ Watch</button>
                      <button onClick={() => window.open(lec.notes)} style={{ background: '#dbeafe', color: '#1d4ed8', border: 'none', padding: '6px 12px', borderRadius: '6px', cursor: 'pointer' }}>📑 Notes</button>
                      <button onClick={() => window.open(lec.dpp)} style={{ background: '#fef3c7', color: '#d97706', border: 'none', padding: '6px 12px', borderRadius: '6px', cursor: 'pointer' }}>📝 DPP</button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {tab === 'questions' && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
              {QB_DATA.map(qb => (
                <div key={qb.sub} style={{ padding: '20px', border: '2px dashed #e2e8f0', borderRadius: '15px', textAlign: 'center' }}>
                  <h3 style={{ margin: '0 0 10px 0' }}>{qb.sub} Bank</h3>
                  <p style={{ color: '#64748b', fontSize: '14px' }}>{qb.mcqs} Practice Questions</p>
                  <button onClick={() => window.open(qb.link)} style={{ marginTop: '15px', background: '#000', color: '#fff', width: '100%', padding: '10px', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>Download PDF</button>
                </div>
              ))}
            </div>
          )}

          {tab === 'support' && (
            <div style={{ textAlign: 'center', padding: '40px' }}>
              <h2>🚀 Join Our Telegram</h2>
              <p>Get instant help from Mellowmarsh12 and other mentors.</p>
              <button onClick={() => window.open('https://t.me/Mellowmarsh12')} style={{ background: '#0088cc', color: '#fff', border: 'none', padding: '15px 40px', borderRadius: '30px', fontSize: '18px', fontWeight: 'bold', cursor: 'pointer', marginTop: '20px' }}>Join @Mellowmarsh12</button>
            </div>
          )}
        </div>
      </div>

      {/* Video Modal */}
      {video && (
        <div onClick={() => setVideo(null)} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.9)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000 }}>
          <div onClick={e => e.stopPropagation()} style={{ width: '90%', maxWidth: '800px', background: '#000', borderRadius: '15px', overflow: 'hidden' }}>
            <iframe width="100%" height="450" src={`https://www.youtube.com/embed/${video}?autoplay=1`} frameBorder="0" allowFullScreen></iframe>
          </div>
        </div>
      )}
    </div>
  );
   }
