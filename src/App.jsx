
import React, { useState } from "react";
import {
  Menu, X, Leaf, Sprout, GraduationCap, BookOpen,
  ArrowRight, ChevronRight, MapPin, Phone, Mail,
  CalendarDays, Tractor, Microscope, Users, ExternalLink
} from "lucide-react";

const SCHOOL = {
  name: "Triveni Secondary School",
  department: "Department of Plant Science",
  address: "Katari-4, Udayapur, Koshi Province, Nepal",
  phone: "035-450-154",
  email: "info@trivenischool.edu.np"
};

const programs = [
  {
    number: "01",
    title: "Plant Science",
    level: "Agricultural Education",
    description:
      "Learn the science of plants, crop production, soil health and sustainable agriculture through theory and practical learning.",
    icon: Sprout
  },
  {
    number: "02",
    title: "Crop Production",
    level: "Practical Learning",
    description:
      "Develop practical knowledge of crop cultivation, seed selection, nursery management and modern farming techniques.",
    icon: Tractor
  },
  {
    number: "03",
    title: "Soil & Environment",
    level: "Field-Based Learning",
    description:
      "Understand soil fertility, plant nutrition, environmental conservation and responsible use of natural resources.",
    icon: Microscope
  }
];

const classes = [
  { grade: "09", title: "Class Nine", detail: "Build a strong academic foundation." },
  { grade: "10", title: "Class Ten", detail: "Strengthen core knowledge and skills." },
  { grade: "11", title: "Class Eleven", detail: "Explore agricultural education." },
  { grade: "12", title: "Class Twelve", detail: "Prepare for further study and careers." }
];

const notices = [
  {
    category: "Admission",
    title: "Admission Information",
    date: "Academic Year",
    detail: "Contact the school office for current admission procedures, eligibility and deadlines."
  },
  {
    category: "Academic",
    title: "Class Routine & Examination",
    date: "School Notice",
    detail: "Students should obtain the latest class routine and examination schedule from the school."
  },
  {
    category: "Announcement",
    title: "Practical & Field Activities",
    date: "Student Activities",
    detail: "Stay connected with your teachers for updates on practical classes and agricultural fieldwork."
  }
];

const styles = `
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Manrope:wght@400;500;600;700;800&display=swap');

:root {
  font-family: 'DM Sans', sans-serif;
  color: #24362b;
  background: #ffffff;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  scroll-behavior: smooth;
  --green: #173d2b;
  --green2: #275b3d;
  --lime: #d9ed9d;
  --muted: #68756b;
  --line: #e5ebe5;
  --cream: #f6f8f1;
}
* { box-sizing: border-box; }
body { margin: 0; }
button, a { font: inherit; }
a { color: inherit; text-decoration: none; }
button { cursor: pointer; }
.container { width: min(1160px, calc(100% - 44px)); margin: auto; }
.topbar { background: #102d20; color: #e8f1e8; font-size: 12px; }
.topbar-inner { display:flex; align-items:center; justify-content:space-between; gap:15px; padding:10px 0; }
.topbar-contact { display:flex; flex-wrap:wrap; gap:22px; }
.topbar-contact span { display:flex; align-items:center; gap:7px; }
.navbar { background:#fff; position:sticky; top:0; z-index:20; border-bottom:1px solid #edf0ec; }
.nav-inner { min-height:83px; display:flex; align-items:center; justify-content:space-between; gap:20px; }
.brand { display:flex; align-items:center; gap:12px; min-width:0; }
.brand-mark { width:47px; height:47px; border-radius:14px; background:var(--green); color:white; display:grid; place-items:center; flex-shrink:0; }
.brand-title { font-family:Manrope,sans-serif; font-size:15px; font-weight:800; line-height:1.4; color:var(--green); }
.brand-sub { font-size:11px; color:#6e7c70; margin-top:2px; }
.nav-links { display:flex; align-items:center; gap:21px; }
.nav-links a { font-size:12px; font-weight:600; color:#4d5a50; transition:color .2s; }
.nav-links a:hover { color:#4d8a45; }
.nav-cta,.btn-primary { background:var(--green); color:white; border:0; border-radius:7px; padding:13px 17px; display:inline-flex; align-items:center; justify-content:center; gap:9px; font-size:12px; font-weight:700; transition:transform .2s,background .2s; }
.nav-cta:hover,.btn-primary:hover { background:#28563a; transform:translateY(-2px); }
.menu-toggle { display:none; background:#f0f4ee; border:0; border-radius:8px; padding:10px; color:var(--green); }
.hero { background:var(--cream); overflow:hidden; }
.hero-grid { min-height:555px; display:grid; grid-template-columns:1fr 1fr; align-items:center; gap:48px; padding-top:55px; padding-bottom:65px; }
.eyebrow { display:inline-flex; align-items:center; gap:9px; color:#46733d; background:#e8f0df; border-radius:30px; padding:9px 13px; font-size:10px; font-weight:800; letter-spacing:1.2px; text-transform:uppercase; }
.eyebrow-dot { width:7px; height:7px; background:#70a34f; border-radius:50%; }
h1,h2,h3,p { margin-top:0; }
.hero h1 { font-family:Manrope,sans-serif; font-size:clamp(36px,4.2vw,59px); line-height:1.12; letter-spacing:-2.1px; color:var(--green); margin:22px 0 18px; font-weight:800; }
.hero h1 em { color:#6b984b; font-style:normal; }
.hero-copy { max-width:480px; font-size:14px; line-height:1.9; color:#667267; margin-bottom:27px; }
.hero-actions { display:flex; flex-wrap:wrap; gap:12px; }
.btn-outline { background:white; color:var(--green); border:1px solid #d9e2d7; border-radius:7px; padding:13px 17px; display:inline-flex; align-items:center; gap:9px; font-size:12px; font-weight:700; }
.hero-trust { display:flex; align-items:center; gap:12px; margin-top:34px; }
.trust-icons { display:flex; }
.trust-icons span { width:31px; height:31px; margin-right:-7px; border:2px solid var(--cream); border-radius:50%; background:#dce7c9; display:grid; place-items:center; color:var(--green); }
.trust-text { color:#677467; font-size:11px; line-height:1.6; margin-left:5px; }
.hero-visual { position:relative; min-width:0; }
.hero-photo { width:100%; height:405px; object-fit:cover; display:block; border-radius:17px; background:#dce6d1; }
.photo-frame { position:absolute; inset:13px -13px -13px 13px; border:1px solid #c7d8b6; border-radius:17px; z-index:0; pointer-events:none; }
.hero-photo { position:relative; z-index:1; }
.floating-card { position:absolute; z-index:2; background:white; border:1px solid #edf0e9; box-shadow:0 12px 35px #16392313; border-radius:12px; padding:15px; display:flex; gap:12px; align-items:center; }
.floating-card.one { bottom:22px; left:-28px; }
.floating-card.two { top:22px; right:-15px; }
.float-icon { width:38px; height:38px; border-radius:10px; background:#eaf2df; color:#416e35; display:grid; place-items:center; }
.float-title { font-size:12px; font-weight:800; color:#233c2a; }
.float-sub { font-size:10px; color:#748075; margin-top:4px; }
.stats { background:var(--green); color:white; }
.stats-grid { display:grid; grid-template-columns:repeat(4,1fr); padding:27px 0; }
.stat { padding:4px 20px; border-right:1px solid #ffffff25; display:flex; align-items:center; gap:13px; }
.stat:first-child { padding-left:0; }
.stat:last-child { border:0; }
.stat-icon { color:#cde5a0; }
.stat-number { font-family:Manrope,sans-serif; font-size:22px; font-weight:800; }
.stat-label { color:#c8d8ca; font-size:10px; margin-top:4px; }
.section { padding:90px 0; }
.section-soft { background:#f8faf6; }
.section-heading { max-width:650px; margin:0 auto 40px; text-align:center; }
.section-kicker { font-size:10px; color:#6d964d; font-weight:800; letter-spacing:1.7px; text-transform:uppercase; margin-bottom:13px; }
.section-heading h2,.about-copy h2,.contact-copy h2 { font-family:Manrope,sans-serif; color:var(--green); font-size:clamp(27px,3.2vw,39px); line-height:1.25; letter-spacing:-1.1px; margin-bottom:15px; }
.section-heading p,.about-copy p { font-size:13px; line-height:1.9; color:var(--muted); }
.program-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:20px; }
.program-card { background:white; border:1px solid var(--line); border-radius:13px; padding:28px; transition:transform .2s,box-shadow .2s; }
.program-card:hover { transform:translateY(-5px); box-shadow:0 15px 35px #193a2010; }
.program-top { display:flex; justify-content:space-between; align-items:center; margin-bottom:24px; }
.program-icon { width:50px; height:50px; border-radius:12px; display:grid; place-items:center; color:#46783d; background:#eaf2df; }
.program-number { color:#a2ada1; font-size:12px; font-weight:800; }
.program-card h3 { font-family:Manrope,sans-serif; font-size:18px; color:var(--green); margin-bottom:7px; }
.program-level { color:#6b934c; font-size:10px; font-weight:800; text-transform:uppercase; letter-spacing:.8px; margin-bottom:13px; }
.program-card p { color:#69756b; font-size:12px; line-height:1.9; min-height:68px; }
.text-link { display:inline-flex; align-items:center; gap:7px; color:var(--green); font-size:11px; font-weight:800; }
.about-grid { display:grid; grid-template-columns:1fr 1fr; align-items:center; gap:65px; }
.about-image-wrap { position:relative; }
.about-image { width:100%; height:370px; display:block; object-fit:cover; border-radius:14px; background:#e1ead9; }
.about-tag { position:absolute; right:-15px; bottom:20px; background:white; box-shadow:0 9px 30px #00000012; border-radius:10px; padding:15px 19px; font-size:11px; font-weight:800; color:var(--green); }
.about-tag small { display:block; font-weight:500; color:#788379; margin-top:5px; }
.about-copy h2 { margin-top:14px; }
.feature-list { display:grid; gap:17px; margin:26px 0 28px; }
.feature { display:flex; gap:12px; align-items:flex-start; }
.feature-check { width:25px; height:25px; border-radius:50%; background:#e7f0dc; color:#48733b; display:grid; place-items:center; flex-shrink:0; }
.feature strong { display:block; color:#2d4432; font-size:12px; margin-bottom:5px; }
.feature span { display:block; font-size:11px; line-height:1.7; color:#788078; }
.class-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:16px; }
.class-card { padding:24px 19px; background:white; border:1px solid var(--line); border-radius:12px; }
.grade-number { font-family:Manrope,sans-serif; color:#e0e9d9; font-size:42px; font-weight:800; line-height:1; margin-bottom:22px; }
.class-card h3 { font-size:15px; color:var(--green); margin-bottom:9px; }
.class-card p { color:#748075; font-size:11px; line-height:1.8; min-height:40px; }
.class-card a { display:flex; justify-content:space-between; align-items:center; border-top:1px solid #edf0e9; padding-top:15px; color:#47733c; font-size:10px; font-weight:800; }
.ojt-grid { display:grid; grid-template-columns:1fr 1fr; gap:45px; align-items:center; }
.ojt-panel { background:#173d2b; color:white; padding:35px; border-radius:15px; }
.ojt-panel h3 { font-family:Manrope,sans-serif; font-size:25px; line-height:1.35; margin:20px 0 13px; }
.ojt-panel p { color:#d0ded1; font-size:12px; line-height:1.9; }
.ojt-points { display:grid; gap:16px; margin:24px 0; }
.ojt-point { display:flex; gap:12px; align-items:center; font-size:12px; }
.ojt-point svg { color:#cde5a0; flex-shrink:0; }
.btn-light { display:inline-flex; align-items:center; gap:8px; padding:12px 16px; background:#d9ed9d; color:#193d27; border:0; border-radius:7px; font-size:11px; font-weight:800; }
.ojt-copy h2 { font-family:Manrope,sans-serif; color:var(--green); font-size:32px; line-height:1.3; }
.ojt-copy p { color:var(--muted); font-size:13px; line-height:1.9; }
.ojt-step { display:flex; gap:15px; margin-top:21px; }
.step-number { width:35px; height:35px; flex-shrink:0; border:1px solid #dfe8d8; border-radius:10px; display:grid; place-items:center; color:#48733b; font-weight:800; font-size:12px; }
.ojt-step strong { display:block; font-size:12px; margin-bottom:5px; color:#2c4432; }
.ojt-step span { color:#758075; font-size:11px; line-height:1.7; }
.notice-list { display:grid; gap:13px; }
.notice-card { background:white; border:1px solid var(--line); border-radius:11px; padding:21px; display:flex; gap:18px; align-items:flex-start; }
.notice-date { background:#edf3e6; color:#3e6d35; border-radius:9px; min-width:54px; min-height:57px; display:grid; place-content:center; text-align:center; font-size:10px; font-weight:800; }
.notice-body { flex:1; }
.notice-category { color:#6b934c; text-transform:uppercase; letter-spacing:1px; font-size:9px; font-weight:800; margin-bottom:7px; }
.notice-card h3 { color:var(--green); font-size:14px; margin-bottom:7px; }
.notice-card p { color:#758075; font-size:11px; line-height:1.8; margin-bottom:0; }
.notice-label { background:#f1f4ed; color:#5e6e5f; border-radius:5px; padding:6px 9px; font-size:9px; font-weight:700; white-space:nowrap; }
.contact-grid { display:grid; grid-template-columns:.85fr 1.15fr; gap:50px; }
.contact-copy h2 { margin-top:14px; }
.contact-item { display:flex; align-items:flex-start; gap:13px; margin-top:23px; }
.contact-icon { width:39px; height:39px; display:grid; place-items:center; background:#eaf2df; color:#46783d; border-radius:10px; flex-shrink:0; }
.contact-item strong { display:block; font-size:12px; color:var(--green); margin-bottom:5px; }
.contact-item span,.contact-item a { display:block; font-size:11px; line-height:1.8; color:#748075; }
.contact-form { background:white; border:1px solid var(--line); border-radius:14px; padding:29px; }
.contact-form h3 { font-family:Manrope,sans-serif; color:var(--green); font-size:20px; margin-bottom:8px; }
.contact-form > p { font-size:11px; color:#758075; line-height:1.8; margin-bottom:23px; }
.form-grid { display:grid; grid-template-columns:1fr 1fr; gap:15px; }
.form-field { display:grid; gap:7px; margin-bottom:16px; }
.form-field label { color:#45564a; font-size:11px; font-weight:700; }
.form-field input,.form-field textarea,.form-field select { width:100%; border:1px solid #dfe6dc; background:#fbfcfa; border-radius:7px; padding:12px; outline:none; color:#283d2d; font:inherit; font-size:12px; }
.form-field input:focus,.form-field textarea:focus,.form-field select:focus { border-color:#6b934c; }
.form-field textarea { min-height:100px; resize:vertical; }
.form-note { margin-top:13px; color:#788379; font-size:10px; line-height:1.7; }
.form-success { margin-top:13px; background:#eaf4e5; color:#315b32; padding:12px; border-radius:7px; font-size:12px; line-height:1.7; }
.footer { background:#102d20; color:white; padding:55px 0 0; }
.footer-grid { display:grid; grid-template-columns:1.5fr 1fr 1fr 1.1fr; gap:40px; padding-bottom:40px; }
.footer-brand { color:white; }
.footer-brand .brand-title { color:white; }
.footer-brand .brand-sub { color:#bacabb; }
.footer-desc { color:#bfcebf; font-size:11px; line-height:1.9; max-width:290px; margin-top:19px; }
.footer h4 { color:#e5eee4; font-size:11px; margin:4px 0 18px; }
.footer-links { display:grid; gap:13px; }
.footer-links a,.footer-links span { color:#b9cabb; font-size:11px; line-height:1.6; }
.footer-links a:hover { color:#d9ed9d; }
.footer-bottom { border-top:1px solid #ffffff1a; padding:18px 0; display:flex; justify-content:space-between; gap:15px; color:#a9bba9; font-size:10px; }
.footer-bottom a { color:#d9ed9d; }
@media(max-width:1000px) {
  .nav-links { gap:12px; }
  .nav-links a { font-size:11px; }
  .nav-cta { padding:11px; }
  .hero-grid { gap:30px; }
  .hero-photo { height:350px; }
  .stat { padding:4px 12px; }
  .stat-number { font-size:19px; }
  .about-grid { gap:40px; }
  .footer-grid { gap:25px; }
}
@media(max-width:760px) {
  .container { width:min(100% - 32px,560px); }
  .topbar-inner { justify-content:center; }
  .topbar-contact { justify-content:center; gap:10px 18px; }
  .topbar-contact span:last-child { display:none; }
  .nav-inner { min-height:72px; flex-wrap:wrap; }
  .brand-mark { width:42px; height:42px; }
  .brand-title { font-size:13px; }
  .brand-sub { font-size:10px; }
  .menu-toggle { display:grid; place-items:center; }
  .nav-links { display:none; width:100%; padding:5px 0 20px; flex-direction:column; align-items:stretch; gap:0; }
  .nav-links.open { display:flex; }
  .nav-links a { font-size:13px; padding:12px 7px; border-top:1px solid #edf0ec; }
  .nav-links .nav-cta { justify-content:center; margin-top:10px; }
  .hero-grid { grid-template-columns:1fr; padding-top:45px; padding-bottom:45px; gap:40px; }
  .hero h1 { font-size:clamp(37px,10vw,53px); letter-spacing:-1.7px; }
  .hero-copy { font-size:13px; }
  .hero-photo { height:320px; }
  .floating-card.one { left:-5px; bottom:13px; }
  .floating-card.two { right:-5px; top:12px; }
  .stats-grid { grid-template-columns:1fr 1fr; gap:20px 0; padding:24px 0; }
  .stat { border-right:0; padding:5px 9px; }
  .stat:nth-child(odd) { border-right:1px solid #ffffff25; }
  .stat:first-child { padding-left:9px; }
  .section { padding:65px 0; }
  .program-grid { grid-template-columns:1fr; }
  .program-card p { min-height:0; }
  .about-grid,.ojt-grid,.contact-grid { grid-template-columns:1fr; gap:35px; }
  .about-image { height:300px; }
  .about-tag { right:8px; }
  .class-grid { grid-template-columns:1fr 1fr; }
  .class-card { padding:19px 15px; }
  .grade-number { font-size:35px; }
  .ojt-panel { padding:27px; }
  .notice-card { padding:15px; gap:12px; }
  .notice-label { display:none; }
  .contact-form { padding:22px; }
  .footer-grid { grid-template-columns:1fr 1fr; gap:32px 20px; }
  .footer-bottom { flex-direction:column; line-height:1.7; }
}
@media(max-width:390px) {
  .brand-title { font-size:12px; }
  .hero-photo { height:270px; }
  .floating-card { padding:10px; }
  .float-title { font-size:10px; }
  .float-sub { font-size:9px; }
  .form-grid { grid-template-columns:1fr; gap:0; }
  .footer-grid { grid-template-columns:1fr; }
}
`;

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formSent, setFormSent] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = data.get("name");
    const email = data.get("email");
    const subject = data.get("subject");
    const message = data.get("message");

    const mailto =
      `mailto:${SCHOOL.email}` +
      `?subject=${encodeURIComponent(subject || "Website enquiry")}` +
      `&body=${encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\n${message}`
      )}`;

    window.location.href = mailto;
    setFormSent(true);
    form.reset();
  }

  return (
    <>
      <style>{styles}</style>

      <div className="topbar">
        <div className="container topbar-inner">
          <div className="topbar-contact">
            <span><MapPin size={13} /> {SCHOOL.address}</span>
            <span><Phone size={13} /> {SCHOOL.phone}</span>
          </div>
          <div style={{ fontSize: 11 }}>
            Growing Knowledge. Cultivating Futures.
          </div>
        </div>
      </div>

      <header className="navbar">
        <div className="container nav-inner">
          <a className="brand" href="#home" onClick={closeMenu}>
            <div className="brand-mark"><Leaf size={26} /></div>
            <div>
              <div className="brand-title">{SCHOOL.name}</div>
              <div className="brand-sub">{SCHOOL.department}</div>
            </div>
          </a>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
            {[
              ["Home", "#home"],
              ["About Us", "#about"],
              ["Programs", "#programs"],
              ["OJT", "#ojt"],
              ["Classes", "#classes"],
              ["Notices", "#notices"],
              ["Contact", "#contact"]
            ].map(([label, href]) => (
              <a key={label} href={href} onClick={closeMenu}>{label}</a>
            ))}
            <a className="nav-cta" href="#contact" onClick={closeMenu}>
              Get in Touch <ArrowRight size={14} />
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="container hero-grid">
            <div>
              <div className="eyebrow">
                <span className="eyebrow-dot" />
                Learning for a Greener Future
              </div>
              <h1>
                Growing Minds.<br />
                <em>Growing</em> a Better<br />
                Tomorrow.
              </h1>
              <p className="hero-copy">
                Welcome to Triveni Secondary School, Department of Plant
                Science. We bring education and agriculture together to
                nurture practical skills, scientific thinking and a
                sustainable future.
              </p>
              <div className="hero-actions">
                <a className="btn-primary" href="#programs">
                  Explore Our Programs <ArrowRight size={15} />
                </a>
                <a className="btn-outline" href="#about">
                  Discover Our School <ChevronRight size={15} />
                </a>
              </div>
              <div className="hero-trust">
                <div className="trust-icons">
                  <span><Sprout size={15} /></span>
                  <span><BookOpen size={15} /></span>
                  <span><GraduationCap size={15} /></span>
                </div>
                <div className="trust-text">
                  Academic learning meets practical experience
                  <br />Building skills for agriculture and beyond
                </div>
              </div>
            </div>

            <div className="hero-visual">
              <div className="photo-frame" />
              <img
                className="hero-photo"
                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1100&q=85"
                alt="Green agricultural fields and cultivated farmland"
              />
              <div className="floating-card one">
                <div className="float-icon"><Sprout size={21} /></div>
                <div>
                  <div className="float-title">Agricultural Learning</div>
                  <div className="float-sub">Knowledge rooted in nature</div>
                </div>
              </div>
              <div className="floating-card two">
                <div className="float-icon"><BookOpen size={20} /></div>
                <div>
                  <div className="float-title">Learn & Grow</div>
                  <div className="float-sub">Theory meets practice</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="stats">
          <div className="container stats-grid">
            {[
              { icon: GraduationCap, number: "09–12", label: "School Classes" },
              { icon: Sprout, number: "Plant", label: "Science Education" },
              { icon: Tractor, number: "Field", label: "Practical Learning" },
              { icon: Users, number: "Future", label: "Ready Skills" }
            ].map(({ icon: Icon, number, label }) => (
              <div className="stat" key={label}>
                <Icon className="stat-icon" size={25} />
                <div>
                  <div className="stat-number">{number}</div>
                  <div className="stat-label">{label}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="programs">
          <div className="container">
            <div className="section-heading">
              <div className="section-kicker">What We Focus On</div>
              <h2>Learning That Connects<br />Classrooms to the Field</h2>
              <p>
                Explore key areas of agricultural education that help students
                understand plants, improve production and care for the
                environment.
              </p>
            </div>

            <div className="program-grid">
              {programs.map(({ number, title, level, description, icon: Icon }) => (
                <article className="program-card" key={number}>
                  <div className="program-top">
                    <div className="program-icon"><Icon size={25} /></div>
                    <span className="program-number">{number}</span>
                  </div>
                  <h3>{title}</h3>
                  <div className="program-level">{level}</div>
                  <p>{description}</p>
                  <a className="text-link" href="#contact">
                    Learn More <ArrowRight size={14} />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-soft" id="about">
          <div className="container about-grid">
            <div className="about-image-wrap">
              <img
                className="about-image"
                src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1000&q=85"
                alt="Young plants growing in a garden"
                loading="lazy"
              />
              <div className="about-tag">
                Learning Through Nature
                <small>Knowledge · Practice · Responsibility</small>
              </div>
            </div>

            <div className="about-copy">
              <div className="section-kicker">About Our School</div>
              <h2>Education with Purpose. Agriculture with a Future.</h2>
              <p>
                Triveni Secondary School's Department of Plant Science
                connects academic learning with the world of agriculture.
                Our aim is to help students develop knowledge, practical
                abilities and a responsible approach to natural resources.
              </p>
              <div className="feature-list">
                {[
                  ["Practical Knowledge", "Connect classroom concepts with real agricultural applications."],
                  ["Scientific Thinking", "Understand plant growth, soil, crops and sustainable production."],
                  ["Future Opportunities", "Build a foundation for further education and agricultural careers."]
                ].map(([title, detail]) => (
                  <div className="feature" key={title}>
                    <div className="feature-check"><Leaf size={14} /></div>
                    <div><strong>{title}</strong><span>{detail}</span></div>
                  </div>
                ))}
              </div>
              <a className="btn-primary" href="#contact">
                Connect With Our School <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </section>

        <section className="section" id="classes">
          <div className="container">
            <div className="section-heading">
              <div className="section-kicker">Academic Levels</div>
              <h2>Explore Our Classes</h2>
              <p>
                Find your class and stay connected with your academic journey.
                Contact the school for current subjects, routines and curriculum.
              </p>
            </div>
            <div className="class-grid">
              {classes.map((item) => (
                <article className="class-card" key={item.grade}>
                  <div className="grade-number">{item.grade}</div>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                  <a href="#contact">
                    Class Information <ArrowRight size={13} />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-soft" id="ojt">
          <div className="container ojt-grid">
            <div className="ojt-panel">
              <div className="eyebrow">
                <span className="eyebrow-dot" />
                Learning Beyond the Classroom
              </div>
              <h3>Turn Your Knowledge Into Practical Skills.</h3>
              <p>
                On-the-Job Training (OJT) can help students connect academic
                concepts with workplace experience and real agricultural
                practices.
              </p>
              <div className="ojt-points">
                <div className="ojt-point"><Sprout size={19} /> Practical agricultural experience</div>
                <div className="ojt-point"><Users size={19} /> Communication and teamwork</div>
                <div className="ojt-point"><GraduationCap size={19} /> Career-oriented learning</div>
              </div>
              <a className="btn-light" href="#contact">
                Ask About OJT <ArrowRight size={14} />
              </a>
            </div>

            <div className="ojt-copy">
              <div className="section-kicker">On-the-Job Training</div>
              <h2>Experience Is an Important Part of Education.</h2>
              <p>
                OJT gives students an opportunity to explore professional
                environments, observe agricultural operations and develop
                confidence under appropriate supervision.
              </p>
              {[
                ["Learn", "Build practical understanding through observation and instruction."],
                ["Practice", "Apply relevant knowledge under the guidance of supervisors."],
                ["Reflect", "Document experiences and identify skills for improvement."]
              ].map(([title, detail], index) => (
                <div className="ojt-step" key={title}>
                  <div className="step-number">0{index + 1}</div>
                  <div><strong>{title}</strong><span>{detail}</span></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="notices">
          <div className="container">
            <div className="section-heading">
              <div className="section-kicker">Stay Informed</div>
              <h2>Notices & Announcements</h2>
              <p>
                Find useful school updates. Please confirm dates and official
                announcements with the school administration.
              </p>
            </div>

            <div className="notice-list">
              {notices.map((notice) => (
                <article className="notice-card" key={notice.title}>
                  <div className="notice-date">
                    <CalendarDays size={19} />
                  </div>
                  <div className="notice-body">
                    <div className="notice-category">{notice.category}</div>
                    <h3>{notice.title}</h3>
                    <p>{notice.detail}</p>
                  </div>
                  <span className="notice-label">{notice.date}</span>
                </article>
              ))}
            </div>
            <p className="form-note" style={{ textAlign: "center", marginTop: 22 }}>
              These are sample notice entries. Replace them with verified school notices before publishing.
            </p>
          </div>
        </section>

        <section className="section section-soft" id="contact">
          <div className="container contact-grid">
            <div className="contact-copy">
              <div className="section-kicker">Get in Touch</div>
              <h2>We Would Be Happy to Hear From You.</h2>
              <p style={{ color: "var(--muted)", fontSize: 13, lineHeight: 1.9 }}>
                Have questions about admissions, classes, agricultural
                education or OJT? Contact the school using the details below.
              </p>

              <div className="contact-item">
                <div className="contact-icon"><MapPin size={19} /></div>
                <div><strong>Visit Our School</strong><span>{SCHOOL.address}</span></div>
              </div>
              <div className="contact-item">
                <div className="contact-icon"><Phone size={19} /></div>
                <div><strong>Call the School</strong><a href={`tel:${SCHOOL.phone}`}>{SCHOOL.phone}</a></div>
              </div>
              <div className="contact-item">
                <div className="contact-icon"><Mail size={19} /></div>
                <div><strong>Email</strong><a href={`mailto:${SCHOOL.email}`}>{SCHOOL.email}</a></div>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <h3>Send an Enquiry</h3>
              <p>Fill in your details to prepare an email to the school.</p>
              <div className="form-grid">
                <div className="form-field">
                  <label htmlFor="name">Full Name *</label>
                  <input id="name" name="name" required placeholder="Your name" />
                </div>
                <div className="form-field">
                  <label htmlFor="email">Email Address *</label>
                  <input id="email" name="email" type="email" required placeholder="you@example.com" />
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="subject">Subject *</label>
                <select id="subject" name="subject" required defaultValue="">
                  <option value="" disabled>Select an enquiry type</option>
                  <option>Admission Information</option>
                  <option>Class Information</option>
                  <option>Plant Science Program</option>
                  <option>OJT Information</option>
                  <option>Other Enquiry</option>
                </select>
              </div>
              <div className="form-field">
                <label htmlFor="message">Your Message *</label>
                <textarea id="message" name="message" required placeholder="How can we help you?" />
              </div>
              <button className="btn-primary" type="submit">
                Prepare Email <ExternalLink size={14} />
              </button>
              {formSent && (
                <div className="form-success">
                  Your email application should open with your enquiry.
                  If it did not, email the school directly using the contact details.
                </div>
              )}
              <div className="form-note">
                This form opens your email application. It does not send or
                store messages directly on the website.
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <a className="brand footer-brand" href="#home">
                <div className="brand-mark"><Leaf size={25} /></div>
                <div>
                  <div className="brand-title">{SCHOOL.name}</div>
                  <div className="brand-sub">{SCHOOL.department}</div>
                </div>
              </a>
              <p className="footer-desc">
                Cultivating knowledge, encouraging practical learning and
                inspiring the next generation to build a sustainable future.
              </p>
            </div>
            <div>
              <h4>Quick Links</h4>
              <div className="footer-links">
                <a href="#home">Home</a>
                <a href="#about">About Us</a>
                <a href="#programs">Programs</a>
                <a href="#classes">Classes 9–12</a>
              </div>
            </div>
            <div>
              <h4>Student Resources</h4>
              <div className="footer-links">
                <a href="#ojt">OJT Information</a>
                <a href="#notices">Notices</a>
                <a href="#contact">Admission Enquiries</a>
                <a href="#contact">Contact School</a>
              </div>
            </div>
            <div>
              <h4>Contact Information</h4>
              <div className="footer-links">
                <span>{SCHOOL.address}</span>
                <a href={`tel:${SCHOOL.phone}`}>{SCHOOL.phone}</a>
                <a href={`mailto:${SCHOOL.email}`}>{SCHOOL.email}</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} {SCHOOL.name}. All rights reserved.</span>
            <a href="#home">Back to top ↑</a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
