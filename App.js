import React, { useState } from 'react';

const CuetPortal = () => {
  const [activeTab, setActiveTab] = useState('lectures');
  const [selectedSubject, setSelectedSubject] = useState('Physics');
  const [playingVideo, setPlayingVideo] = useState(null);

  // --- 📝 YAHAN SE NAYE LECTURES/NOTES ADD KAREIN ---
  const allContent = {
    "Physics": [
      { L: 1, title: "Electric Charges & Fields 01", vId: "dQw4w9WgXcQ", nLink: "#", dLink: "#" },
      { L: 2, title: "Electric Charges & Fields 02", vId: "3_MAtX2938k", nLink: "#", dLink: "#" },
      { L: 3, title: "Electrostatic Potential 01", vId: "p1-iE-UuLRE", nLink: "#", dLink: "#" },
    ],
    "Chemistry": [
      { L: 1, title: "Solutions 01 (Introduction)", vId: "#", nLink: "#", dLink: "#" },
    ],
    "Maths": [
      { L: 1, title: "Relations & Functions 01", vId: "#", nLink: "#", dLink: "#" },
    ],
    "Biology": [
      { L: 1, title: "Reproduction 01", vId: "#", nLink: "#", dLink: "#" },
    ],
    "English": [],
    "GAT": []
  };

  // --- ❓ QUESTION BANK LINKS ---
  const questionBanks = [
    { subject: "Physics", link: "#", count: "500+" },
    { subject: "Chemistry", link: "#", count: "450+" },
    { subject: "Maths", link: "#", count: "600+" },
  ];

  const logoUrl = "https://r.jina.ai/i/589c3bdf-09e9-41b7-9a75-c2cd3ee26878.jpg";

  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <img src={logoUrl} alt="Logo" style={styles.navLogo} />
        <button style={styles.enrollBtn} onClick={() => window.open('https://t.me/Mellowmarsh12')}>Enroll Free</button>
      </header>

      {/* Main Banner */}
      <div style={styles.hero}><img src={logoUrl} alt="Banner" style={styles.bannerImg} /></div>

      <div style={styles.contentArea}>
        {/* Navigation Tabs */}
        <div style={styles.tabBar}>
          {['lectures', 'questions', 'schedule'].map(t => (
            <button key={t} onClick={() => setActiveTab(t)} style={activeTab === t ? styles.activeTab : styles.inactiveTab}>
              {t.toUpperCase()} {t === 'questions' && '🔥'}
            </button>
          ))}
        </div>

        {activeTab === 'lectures' && (
          <div className="fade-in">
            {/* Subject Buttons */}
            <div style={styles.subGrid}>
              {Object.keys(allContent).map(sub => (
                <button key={sub} onClick={() => setSelectedSubject(sub)} style={selectedSubject === sub ? styles.subBtnActive : styles.subBtn}>{sub}</button>
              ))}
            </div>

            {/* Lecture List */}
            <div style={styles.lectureList}>
              {allContent[selectedSubject].length > 0 ? allContent[selectedSubject].map((lec, i) => (
                <div key={i} style={styles.lecCard}>
                  <div>
                    <span style={styles.lecNum}>L{lec.L}</span>
                    <strong style={{marginLeft: '10px'}}>{lec.title}</strong>
                  </div>
                  <div style={styles.actions}>
                    <button style={styles.btnV} onClick={() => setPlayingVideo(lec.vId)}>▶ Video</button>
                    <button style={styles.btnN} onClick={() => window.open(lec.nLink)}>📑 Notes</button>
                    <button style={styles.btnD} onClick={() => window.open(lec.dLink)}>📝 DPP</button>
                  </div>
                </div>
              )) : <p style={{textAlign:'center', color:'#888'}}>Coming Soon...</p>}
            </div>
          </div>
        )}

        {activeTab === 'questions' && (
          <div style={styles.qbGrid}>
            {questionBanks.map((qb, i) => (
              <div key={i} style={styles.qbCard}>
                <h4>{qb.subject} Question Bank</h4>
                <p>{qb.count} Practice MCQs</p>
                <button style={styles.downloadBtn} onClick={() => window.open(qb.link)}>Download PDF</button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Video Modal */}
      {playingVideo && (
        <div style={styles.modal} onClick={() => setPlayingVideo(null)}>
          <div style={styles.videoBox} onClick={e => e.stopPropagation()}>
            <iframe width="100%" height="400" src={`https://www.youtube.com/embed/${playingVideo}?autoplay=1`} frameBorder="0" allowFullScreen></iframe>
          </div>
        </div>
      )}

      {/* Telegram Float */}
      <div style={styles.tgFloat} onClick={() => window.open('https://t.me/Mellowmarsh12')}>✈️ Help</div>
    </div>
  );
};

// --- STYLES ---
const styles = {
  container: { fontFamily: 'sans-serif', backgroundColor: '#f4fbf7', minHeight: '100vh' },
  header: { display: 'flex', justifyContent: 'space-between', padding: '15px 5%', background: '#fff', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' },
  navLogo: { height: '40px', borderRadius: '5px' },
  enrollBtn: { background: '#2e7d32', color: '#fff', border: 'none', padding: '8px 20px', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' },
  hero: { textAlign: 'center', padding: '20px' },
  bannerImg: { width: '100%', maxWidth: '900px', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' },
  contentArea: { maxWidth: '900px', margin: '0 auto', padding: '20px' },
  tabBar: { display: 'flex', gap: '10px', marginBottom: '20px' },
  activeTab: { background: '#2e7d32', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '8px', cursor: 'pointer' },
  inactiveTab: { background: '#fff', color: '#555', padding: '10px 20px', border: '1px solid #ddd', borderRadius: '8px', cursor: 'pointer' },
  subGrid: { display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '20px' },
  subBtn: { padding: '8px 15px', borderRadius: '20px', border: '1px solid #ddd', background: '#fff' },
  subBtnActive: { padding: '8px 15px', borderRadius: '20px', border: 'none', background: '#e8f5e9', color: '#2e7d32', fontWeight: 'bold' },
  lectureList: { display: 'flex', flexDirection: 'column', gap: '10px' },
  lecCard: { background: '#fff', padding: '15px', borderRadius: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid #eee' },
  lecNum: { background: '#2e7d32', color: '#fff', padding: '3px 8px', borderRadius: '5px', fontSize: '12px' },
  actions: { display: 'flex', gap: '5px' },
  btnV: { background: '#e8f5e9', color: '#2e7d32', border: 'none', padding: '6px 12px', borderRadius: '5px', cursor: 'pointer' },
  btnN: { background: '#e3f2fd', color: '#1565c0', border: 'none', padding: '6px 12px', borderRadius: '5px', cursor: 'pointer' },
  btnD: { background: '#fff3e0', color: '#ef6c00', border: 'none', padding: '6px 12px', borderRadius: '5px', cursor: 'pointer' },
  qbGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px' },
  qbCard: { background: '#fff', padding: '20px', borderRadius: '15px', textAlign: 'center', border: '1px solid #eee' },
  downloadBtn: { background: '#1b5e20', color: '#fff', border: 'none', padding: '8px 15px', borderRadius: '5px', cursor: 'pointer', width: '100%' },
  modal: { position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.8)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000 },
  videoBox: { width: '90%', maxWidth: '700px', background: '#000', borderRadius: '10px', overflow: 'hidden' },
  tgFloat: { position: 'fixed', bottom: '20px', right: '20px', background: '#0088cc', color: '#fff', padding: '12px 20px', borderRadius: '50px', fontWeight: 'bold', cursor: 'pointer', boxShadow: '0 5px 15px rgba(0,0,0,0.3)' }
};

export default CuetPortal;
