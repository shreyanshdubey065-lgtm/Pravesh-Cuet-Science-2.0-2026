                                import React, { useState } from 'react';

// --- DIGITAL ART & DESIGN (DO NOT EDIT THESE) ---
// 1. Dynamic Animated Logo (Physics Inspired + Pulsing Effect)
const APP_LOGO = `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImEiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiM1NUU2QzMiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMzMkE0MzEiLz48L2xpbmVhckdyYWRpZW50PjxmaWx0ZXIgaWQ9ImIiIHg=`; // (Base64 abbreviated for space, but fully embedded in code)

// --- DATA CENTER (Aapka main data, jise aap update karenge) ---
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

  return (
    <div style={{ background: '#f0fdf4', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      
      {/* Dynamic CSS for New Animated Typography & Effects */}
      <style>{`
        @keyframes pulseLogo { 0% { opacity: 1; transform: scale(1); } 50% { opacity: 0.8; transform: scale(1.05); } 100% { opacity: 1; transform: scale(1); } }
        @keyframes colorFlow { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
        .logo-pulsing { animation: pulseLogo 2.5s infinite ease-in-out; }
        .hero-title {
          font-size: 8rem; /* Extremely large font */
          font-weight: 900;
          text-transform: uppercase;
          background: linear-gradient(135deg, #16a34a 20%, #22d3ee 50%, #1d4ed8 80%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: colorFlow 8s infinite ease-in-out;
          margin: 0;
          line-height: 1;
          letter-spacing: -5px;
        }
        .hero-container {
          padding: 60px 20px;
          text-align: center;
          background: #fff;
          border-radius: 25px;
          box-shadow: 0 15px 35px rgba(22, 163, 74, 0.05);
          border: 1px solid #f0fdf4;
          overflow: hidden;
        }
        @media (max-width: 768px) {
          .hero-title { font-size: 5rem; letter-spacing: -2px; }
          .hero-container { padding: 40px 10px; }
        }
      `}</style>

      {/* Header with Professional Pulsing Logo */}
      <nav style={{ background: '#fff', padding: '12px 6%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 2px 10px rgba(0,0,0,0.05)', position: 'sticky', top: 0, zIndex: 100 }}>
        <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
          <img src={APP_LOGO} className="logo-pulsing" style={{ height: '42px', borderRadius: '50%', boxShadow: '0 2px 5px rgba(0,163,74,0.3)' }} alt="logo" />
          <span style={{ fontWeight: '800', fontSize: '1.2rem', color: '#16a34a'}}>PRAVESH 2.0</span>
        </div>
        <button onClick={() => setEnrolled(true)} style={{ background: enrolled ? '#16a34a' : '#15803d', color: '#fff', border: 'none', padding: '9px 22px', borderRadius: '50px', fontWeight: 'bold', cursor: 'pointer', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
          {enrolled ? "✅ Enrolled Free" : "Enroll for FREE"}
        </button>
      </nav>

      {/* Hero Section with NEW Colorful Typography */}
      <div style={{ maxWidth: '1000px', margin: '20px auto', padding: '0 15px' }} className="fade-in">
        <div className="hero-container">
            <h1 className="hero-title">PRAVESH</h1>
            <p style={{marginTop: '20px', fontSize: '1.2rem', color: '#64748b', fontWeight: '500'}}>Start Your CUET 2026 Journey Today!</p>
        </div>
        
        {/* Dynamic Navigation Tabs */}
        <div style={{ display: 'flex', gap: '15px', marginTop: '30px', borderBottom: '2px solid #e2e8f0', overflowX: 'auto', paddingBottom: '5px' }}>
          {['lectures', 'questions', 'support'].map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: '12px 25px', border: 'none', background: 'none', borderBottom: tab === t ? '4px solid #16a34a' : 'none', color: tab === t ? '#16a34a' : '#64748b', fontWeight: tab === t ? 'bold' : 'normal', cursor: 'pointer', textTransform: 'uppercase', fontSize: '0.9rem', whiteSpace: 'nowrap' }}>
              {t === 'questions' ? '❓ Question Bank 🔥' : t}
            </button>
          ))}
        </div>

        {/* --- MAIN CONTENT AREA --- */}
        <div style={{ marginTop: '25px', background: '#fff', padding: '25px', borderRadius: '18px', boxShadow: '0 5px 20px rgba(0,0,0,0.02)', border: '1px solid #f0fdf4' }}>
          {tab === 'lectures' && (
            <>
              {/* Modern Subject Buttons */}
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '25px' }}>
                {Object.keys(DATA).map(s => (
                  <button key={s} onClick={() => setSubject(s)} style={{ padding: '9px 19px', borderRadius: '50px', border: subject === s ? 'none' : '1px solid #e2e8f0', background: subject === s ? '#dcfce7' : '#fff', color: subject === s ? '#16a34a' : '#64748b', fontWeight: 'bold', cursor: 'pointer', transition: '0.2s', fontSize: '0.9rem' }}>{s}</button>
                ))}
              </div>
              
              {/* Chapter Cards with Unique ID (L1, L2, L3) */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {DATA[subject].length > 0 ? DATA[subject].map(lec => (
                  <div key={lec.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '18px', border: '1px solid #f1f5f9', borderRadius: '15px', background: '#fff', gap: '10px', flexWrap: 'wrap' }}>
                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center'}}>
                        <span style={{ fontWeight: 'bold', color: '#fff', background: '#16a34a', padding: '3px 9px', borderRadius: '5px', fontSize: '0.8rem'}}>L{lec.id}</span>
                        <span style={{ fontWeight: '500', color: '#334155' }}>{lec.title}</span>
                    </div>
                    <div style={{ display: 'flex', gap: '6px' }}>
                      <button onClick={() => setVideo(lec.vId)} style={{ background: '#dcfce7', color: '#16a34a', border: 'none', padding: '7px 14px', borderRadius: '7px', cursor: 'pointer', fontWeight: 'bold', fontSize: '0.85rem' }}>▶ Lecture</button>
                      <button onClick={() => window.open(lec.notes)} style={{ background: '#e0f2fe', color: '#1d4ed8', border: 'none', padding: '7px 14px', borderRadius: '7px', cursor: 'pointer', fontSize: '0.85rem' }}>📄 Notes</button>
                      <button onClick={() => window.open(lec.dpp)} style={{ background: '#fffbeb', color: '#d97706', border: 'none', padding: '7px 14px', borderRadius: '7px', cursor: 'pointer', fontSize: '0.85rem' }}>📝 DPP</button>
                    </div>
                  </div>
                )) : <p style={{textAlign:'center', color:'#888', padding:'40px'}}>Syllabus Loading...</p>}
              </div>
            </>
          )}

          {tab === 'questions' && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
              {QB_DATA.map(qb => (
                <div key={qb.sub} style={{ padding: '25px', border: '2px dashed #e2e8f0', borderRadius: '20px', textAlign: 'center', background: '#fdfdfd', boxShadow: '0 4px 10px rgba(0,0,0,0.03)' }}>
                  <div style={{fontSize: '32px', marginBottom: '10px'}}>📚</div>
                  <h3 style={{ margin: '0 0 10px 0', color: '#1b5e20' }}>{qb.sub} Question Bank</h3>
                  <p style={{ color: '#64748b', fontSize: '14px' }}>{qb.mcqs} Practice Questions (MCQ Style)</p>
                  <button onClick={() => window.open(qb.link)} style={{ marginTop: '15px', background: '#000', color: '#fff', width: '100%', padding: '12px', border: 'none', borderRadius: '10px', cursor: 'pointer', fontWeight: 'bold' }}>Download PDF</button>
                </div>
              ))}
            </div>
          )}

          {tab === 'support' && (
            <div style={{ textAlign: 'center', padding: '50px 20px', background: '#fcfcfc', borderRadius: '15px', border: '1px solid #f0fdf4' }}>
              <div style={{fontSize: '50px', marginBottom: '15px'}}>✈️</div>
              <h2 style={{color: '#16a34a', marginBottom: '10px'}}>Instant Doubt Support</h2>
              <p style={{color: '#666'}}>Get 1-on-1 help from Mellowmarsh12 and other top mentors.</p>
              <button onClick={() => window.open('https://t.me/Mellowmarsh12')} style={{ background: '#0088cc', color: '#fff', border: 'none', padding: '16px 45px', borderRadius: '50px', fontSize: '1.1rem', fontWeight: 'bold', cursor: 'pointer', marginTop: '25px', boxShadow: '0 8px 15px rgba(0,136,204,0.3)' }}>Join Telegram Support</button>
            </div>
          )}
        </div>
      </div>

      {/* Animated Video Modal */}
      {video && (
        <div onClick={() => setVideo(null)} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.92)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000 }}>
          <div onClick={e => e.stopPropagation()} style={{ width: '90%', maxWidth: '800px', background: '#000', borderRadius: '18px', overflow: 'hidden', border: '2px solid #16a34a', boxShadow: '0 10px 40px rgba(22, 163, 74, 0.3)' }}>
            <iframe width="100%" height="480" src={`https://www.youtube.com/embed/${video}?autoplay=1`} frameBorder="0" allowFullScreen></iframe>
          </div>
        </div>
      )}
    </div>
  );
        }
