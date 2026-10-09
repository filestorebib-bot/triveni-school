
import React, { useState } from "react";
import {
  Menu, X, Leaf, Sprout, GraduationCap, BookOpen,
  ArrowRight, ChevronRight, MapPin, Phone, Mail,
  CalendarDays, Tractor, Microscope, Users, Award,
  CheckCircle2, Quote, Camera, ChevronLeft, ChevronRight as Next,
  ExternalLink, FlaskConical, Wheat, Globe, School,
  Facebook, Instagram, Clock, BriefcaseBusiness
} from "lucide-react";

const SCHOOL = {
  name: "Triveni Secondary School",
  department: "Department of Plant Science",
  address: "Katari-4, Udayapur, Koshi Province, Nepal",
  phone: "035-450-154",
  email: "info@trivenischool.edu.np"
};

// Replace these sample images and details with official school information.
const gallery = [
  {
    title: "Agricultural Learning",
    description: "Learning about plants and farming",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=85"
  },
  {
    title: "Practical Education",
    description: "Learning through practical activities",
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1000&q=85"
  },
  {
    title: "Green Agriculture",
    description: "Exploring crops and cultivated fields",
    image:
      "https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?auto=format&fit=crop&w=1000&q=85"
  },
  {
    title: "Nature & Plants",
    description: "Discovering the world of plants",
    image:
      "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=1000&q=85"
  }
];

const courses = [
  {
    grade: "09",
    title: "Class Nine",
    subtitle: "Foundation in Plant Science",
    description:
      "Build a foundation in agricultural science, crop production, soil, plants and practical learning.",
    subjects: [
      "Principles of Agronomy",
      "Principles and Practices of Fruit Crop Production",
      "Plant Protection",
      "Soil and Soil Fertility Management",
      "Computer Applications",
      "Extension and Community Development"
    ]
  },
  {
    grade: "10",
    title: "Class Ten",
    subtitle: "Developing Agricultural Skills",
    description:
      "Explore crop production, farm management, vegetables, fisheries and other areas of agriculture.",
    subjects: [
      "Farm Management and Marketing",
      "Aquaculture and Fisheries",
      "Vegetable and Medicinal Plant Production",
      "Food Crop Production",
      "Industrial Entomology and Mushroom Cultivation",
      "Floriculture and Nursery Management"
    ]
  },
  {
    grade: "11",
    title: "Class Eleven",
    subtitle: "Advanced Agricultural Studies",
    description:
      "Study higher secondary subjects alongside specialized agricultural theory and practical work.",
    subjects: [
      "English, Physics, Chemistry and Biology",
      "Commercial Fruit Production and Orchard Management",
      "Food Crops Production and Food Security",
      "Participatory Agriculture Extension and Marketing"
    ]
  },
  {
    grade: "12",
    title: "Class Twelve",
    subtitle: "Specialization & Future Pathways",
    description:
      "Develop practical knowledge of commercial agriculture, crop management and sustainable farming.",
    subjects: [
      "English, Physics, Chemistry and Biology",
      "Commercial Vegetable Production and Marketing",
      "Commercial Mushroom Production and Marketing",
      "Sustainable Integrated Nutrient and Pest Management"
    ]
  }
];

const teachers = [
  {
    name: "Teacher Name",
    role: "Plant Science Teacher",
    qualification: "Add verified qualification",
    subject: "Agricultural Science",
    phone: "",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Teacher Name",
    role: "Agriculture Instructor",
    qualification: "Add verified qualification",
    subject: "Crop Production",
    phone: "",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Teacher Name",
    role: "Science Teacher",
    qualification: "Add verified qualification",
    subject: "Science & Practical Learning",
    phone: "",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80"
  }
];

// Publish only real, approved alumni testimonials.
const alumni = [
  {
    quote:
      "Add a genuine statement from a former student about their learning experience, practical training and future career.",
    name: "Former Student Name",
    batch: "Graduation year",
    path: "Current study or profession"
  },
  {
    quote:
      "Share how studying Plant Science helped a former student understand agriculture and develop useful practical skills.",
    name: "Former Student Name",
    batch: "Graduation year",
    path: "Current study or profession"
  },
  {
    quote:
      "Include an approved alumni experience about teachers, field activities and opportunities after graduation.",
    name: "Former Student Name",
    batch: "Graduation year",
    path: "Current study or profession"
  }
];

const notices = [
  {
    category: "Admissions",
    title: "Admission Information",
    description:
      "Contact the school office for verified admission dates, eligibility and application procedures."
  },
  {
    category: "Academics",
    title: "Class Routine & Examination",
    description:
      "Students should obtain the official class routine and examination schedule from the school."
  },
  {
    category: "Practical",
    title: "Agricultural Field Activities",
    description:
      "Follow announcements from teachers for practical classes, field visits and agricultural activities."
  }
];

const styles = `
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Manrope:wght@400;500;600;700;800&display=swap');

:root {
  font-family:'DM Sans',sans-serif;
  color:#26392d;
  background:#fff;
  --green:#173d2b;
  --green2:#285b3b;
  --lime:#d8ed9b;
  --cream:#f5f8f0;
  --muted:#6d796f;
  --line:#e5ebe3;
}
*{box-sizing:border-box}
html{scroll-behavior:smooth;scroll-padding-top:100px}
body{margin:0}
a{color:inherit;text-decoration:none}
button,input,textarea,select{font:inherit}
button{cursor:pointer}
img{max-width:100%}
.container{width:min(1180px,calc(100% - 44px));margin:auto}
.section{padding:90px 0}
.soft{background:#f7f9f4}
.kicker{color:#6c934d;font-size:10px;font-weight:800;letter-spacing:1.8px;text-transform:uppercase;margin-bottom:13px}
.heading{text-align:center;max-width:700px;margin:0 auto 43px}
.heading h2,.about-copy h2,.contact-copy h2{font-family:Manrope,sans-serif;font-size:clamp(28px,3.5vw,43px);line-height:1.2;letter-spacing:-1.3px;color:var(--green);margin:0 0 15px}
.heading p,.about-copy>p,.contact-copy>p{font-size:13px;line-height:1.95;color:var(--muted)}
.heading p{max-width:590px;margin:0 auto}
.btn{display:inline-flex;align-items:center;justify-content:center;gap:9px;background:var(--green);color:#fff;border:1px solid var(--green);border-radius:8px;padding:13px 18px;font-size:12px;font-weight:800;transition:transform .25s,box-shadow .25s,background .25s}
.btn:hover{background:#2d6240;transform:translateY(-3px);box-shadow:0 12px 25px #173d2b24}
.btn-outline{display:inline-flex;align-items:center;gap:8px;padding:13px 18px;border:1px solid #dce5d8;background:#fff;color:var(--green);border-radius:8px;font-size:12px;font-weight:800;transition:.25s}
.btn-outline:hover{transform:translateY(-3px);border-color:#739b61;box-shadow:0 10px 24px #173d2b10}
.topbar{background:#102c1e;color:#e1ebe1;font-size:11px}
.topbar-inner{display:flex;align-items:center;justify-content:space-between;gap:15px;padding:10px 0}
.topbar-contact{display:flex;flex-wrap:wrap;gap:20px}
.topbar-contact span{display:flex;align-items:center;gap:7px}
.navbar{position:sticky;top:0;z-index:30;background:#ffffffed;backdrop-filter:blur(14px);border-bottom:1px solid #e9eee7}
.nav-inner{min-height:80px;display:flex;align-items:center;justify-content:space-between;gap:20px}
.brand{display:flex;align-items:center;gap:12px;min-width:0}
.brand-mark{height:46px;width:46px;display:grid;place-items:center;background:var(--green);color:white;border-radius:14px;flex-shrink:0}
.brand-title{font-family:Manrope,sans-serif;font-weight:800;font-size:14px;color:var(--green);line-height:1.45}
.brand-sub{font-size:10px;color:#748174;margin-top:3px}
.nav-links{display:flex;align-items:center;gap:19px}
.nav-links>a:not(.btn){font-size:11px;font-weight:700;color:#4d5c50;transition:color .2s}
.nav-links>a:hover{color:#669448}
.menu-toggle{display:none;border:0;border-radius:9px;background:#edf3e8;color:var(--green);padding:10px}
.hero{position:relative;overflow:hidden;background:radial-gradient(ellipse at 90% 10%,#e0eccd 0,transparent 36%),linear-gradient(120deg,#f8faf5,#eef4e7)}
.hero-grid{display:grid;grid-template-columns:1.04fr .96fr;gap:55px;align-items:center;min-height:570px;padding-top:55px;padding-bottom:65px}
.eyebrow{display:inline-flex;align-items:center;gap:9px;border:1px solid #dce8d2;background:#ffffffb8;padding:9px 13px;border-radius:30px;color:#4c773a;font-size:10px;font-weight:800;letter-spacing:1px;text-transform:uppercase}
.dot{width:7px;height:7px;background:#7ca85b;border-radius:50%}
.hero h1{font-family:Manrope,sans-serif;font-size:clamp(38px,5vw,64px);line-height:1.09;letter-spacing:-2.5px;color:var(--green);margin:22px 0 20px}
.hero h1 em{font-style:normal;color:#72984f}
.hero-copy{max-width:520px;color:#657267;font-size:13px;line-height:2;margin-bottom:25px}
.hero-actions{display:flex;flex-wrap:wrap;gap:12px}
.hero-mini{display:flex;align-items:center;gap:12px;margin-top:32px;color:#637164;font-size:10px;line-height:1.8}
.hero-mini-icon{width:37px;height:37px;border-radius:12px;display:grid;place-items:center;background:#dfeccd;color:#3f6e36}
.hero-visual{position:relative;perspective:1000px;padding:12px}
.hero-frame{position:absolute;inset:0;border:1px solid #b9cfaa;border-radius:19px;transform:rotate(3deg)}
.hero-img{position:relative;width:100%;height:405px;display:block;object-fit:cover;border-radius:17px;box-shadow:0 25px 60px #193d241c;transition:transform .5s}
.hero-visual:hover .hero-img{transform:rotateY(-3deg) rotateX(2deg) translateY(-4px)}
.floating{position:absolute;background:white;border:1px solid #e9eee6;border-radius:12px;padding:14px;display:flex;align-items:center;gap:10px;box-shadow:0 15px 35px #173d2b19}
.floating.one{left:-25px;bottom:24px}
.floating.two{right:-16px;top:25px}
.float-icon{width:36px;height:36px;border-radius:10px;background:#eaf2e0;color:#4b783a;display:grid;place-items:center}
.float-title{font-size:11px;font-weight:800;color:#24402b}
.float-sub{font-size:9px;color:#7a857a;margin-top:4px}
.stats{background:var(--green);color:white}
.stats-grid{display:grid;grid-template-columns:repeat(4,1fr);padding:27px 0}
.stat{display:flex;align-items:center;gap:13px;padding:5px 20px;border-right:1px solid #ffffff23}
.stat:first-child{padding-left:0}
.stat:last-child{border:0}
.stat-icon{color:var(--lime)}
.stat-number{font-family:Manrope,sans-serif;font-size:22px;font-weight:800}
.stat-label{font-size:10px;color:#c6d7c8;margin-top:5px}
.leadership{display:grid;grid-template-columns:.82fr 1.5fr .82fr;gap:22px;align-items:stretch}
.person-card{position:relative;background:white;border:1px solid var(--line);border-radius:15px;padding:23px 19px;text-align:center;overflow:hidden;transition:transform .35s,box-shadow .35s,border-color .35s;transform-style:preserve-3d}
.person-card:hover{transform:translateY(-8px) rotateX(2deg);box-shadow:0 22px 50px #193d2415;border-color:#c9daba}
.person-photo{width:112px;height:112px;object-fit:cover;border-radius:50%;border:4px solid #e6efdc;padding:3px;margin:4px auto 17px;display:block;background:#edf2e9}
.person-role{font-size:9px;letter-spacing:1.4px;text-transform:uppercase;font-weight:800;color:#759951;margin-bottom:9px}
.person-name{font-family:Manrope,sans-serif;font-size:18px;line-height:1.4;color:var(--green);margin-bottom:7px}
.person-designation{font-size:11px;color:#718074;line-height:1.8}
.person-contact{display:flex;align-items:center;justify-content:center;gap:7px;color:#4c753d;font-size:11px;font-weight:700;margin-top:18px;overflow-wrap:anywhere}
.person-contact.muted{color:#879087;font-weight:500}
.gallery-main{min-width:0;position:relative;border-radius:16px;overflow:hidden;background:#e8eee2;min-height:390px;isolation:isolate}
.gallery-main>img{width:100%;height:100%;min-height:390px;position:absolute;inset:0;object-fit:cover;transition:transform .7s}
.gallery-main:hover>img{transform:scale(1.045)}
.gallery-overlay{position:absolute;inset:0;background:linear-gradient(0deg,#102d20dc,transparent 62%);display:flex;flex-direction:column;justify-content:flex-end;padding:25px;color:white}
.gallery-overlay h3{font-family:Manrope,sans-serif;font-size:22px;margin:0 0 6px}
.gallery-overlay p{font-size:11px;color:#e0eadf;margin:0}
.gallery-count{position:absolute;top:17px;left:17px;background:#ffffffed;color:var(--green);padding:9px 12px;border-radius:8px;font-size:10px;font-weight:800}
.gallery-arrows{position:absolute;right:17px;bottom:20px;display:flex;gap:8px}
.gallery-arrows button{width:36px;height:36px;border:1px solid #ffffff75;background:#ffffff19;color:white;backdrop-filter:blur(5px);border-radius:9px;display:grid;place-items:center;transition:.2s}
.gallery-arrows button:hover{background:white;color:var(--green)}
.gallery-thumbs{display:grid;grid-template-columns:repeat(4,1fr);gap:9px;margin-top:12px}
.gallery-thumb{position:relative;padding:0;border:2px solid transparent;border-radius:9px;overflow:hidden;height:78px;background:#e7eee1}
.gallery-thumb.active{border-color:#679448}
.gallery-thumb img{width:100%;height:100%;object-fit:cover;transition:transform .3s}
.gallery-thumb:hover img{transform:scale(1.08)}
.gallery-thumb span{position:absolute;inset:auto 0 0;background:#102d2090;color:white;padding:5px;font-size:9px;text-align:center}
.program-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
.program-card{background:white;border:1px solid var(--line);border-radius:14px;padding:26px;transition:transform .3s,box-shadow .3s;transform-style:preserve-3d}
.program-card:hover{transform:translateY(-7px) rotateX(1deg);box-shadow:0 20px 45px #173d2b12}
.program-top{display:flex;justify-content:space-between;align-items:center;margin-bottom:23px}
.program-icon{width:49px;height:49px;border-radius:13px;display:grid;place-items:center;background:#eaf2df;color:#49793c}
.program-num{font-size:12px;font-weight:800;color:#b0b9ad}
.program-card h3{font-family:Manrope,sans-serif;color:var(--green);font-size:18px;margin:0 0 9px}
.program-card p{color:var(--muted);font-size:12px;line-height:1.9;min-height:68px}
.program-link{display:inline-flex;gap:7px;align-items:center;color:#4d783e;font-size:11px;font-weight:800}
.course-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:19px}
.course-card{position:relative;overflow:hidden;background:#fff;border:1px solid var(--line);border-radius:15px;padding:26px;transition:transform .3s,box-shadow .3s}
.course-card:hover{transform:translateY(-6px);box-shadow:0 20px 45px #173d2b12}
.course-head{display:flex;align-items:flex-start;gap:16px}
.grade-box{width:63px;height:67px;flex-shrink:0;display:grid;place-items:center;border-radius:12px;background:var(--green);color:white;font-family:Manrope,sans-serif;font-size:23px;font-weight:800}
.course-subtitle{font-size:9px;text-transform:uppercase;letter-spacing:1px;font-weight:800;color:#76994e;margin:2px 0 8px}
.course-card h3{font-family:Manrope,sans-serif;color:var(--green);font-size:19px;margin:0 0 7px}
.course-card p{color:var(--muted);font-size:11px;line-height:1.8;margin:0}
.subject-title{font-size:11px;font-weight:800;color:#344c39;margin:22px 0 12px}
.subject-list{display:grid;grid-template-columns:1fr 1fr;gap:10px}
.subject-item{display:flex;gap:7px;align-items:flex-start;color:#68766a;font-size:10px;line-height:1.6}
.subject-item svg{flex-shrink:0;color:#719a50;margin-top:1px}
.course-foot{border-top:1px solid #edf0e9;margin-top:21px;padding-top:15px;display:flex;justify-content:space-between;gap:10px;align-items:center;color:#758174;font-size:10px}
.course-foot a{color:#49783b;font-weight:800;display:inline-flex;align-items:center;gap:5px}
.curriculum-note{margin:25px auto 0;max-width:850px;border:1px solid #e0e9d8;background:#f4f8ef;border-radius:10px;padding:15px 17px;color:#63725f;font-size:10px;line-height:1.8}
.about-grid{display:grid;grid-template-columns:1fr 1fr;align-items:center;gap:60px}
.about-image{width:100%;height:390px;object-fit:cover;border-radius:15px;display:block;transition:transform .4s}
.about-image-wrap{perspective:900px;position:relative}
.about-image-wrap:hover .about-image{transform:rotateY(3deg) translateY(-4px);box-shadow:0 20px 45px #173d2b14}
.about-tag{position:absolute;right:-12px;bottom:20px;background:white;border:1px solid var(--line);border-radius:10px;padding:15px;box-shadow:0 10px 30px #173d2b13;font-size:11px;font-weight:800;color:var(--green)}
.about-tag small{display:block;font-size:9px;font-weight:500;color:var(--muted);margin-top:5px}
.feature-list{display:grid;gap:18px;margin:25px 0}
.feature{display:flex;gap:12px;align-items:flex-start}
.feature-icon{width:29px;height:29px;border-radius:9px;background:#eaf2df;color:#49763c;display:grid;place-items:center;flex-shrink:0}
.feature strong{display:block;color:#304734;font-size:12px;margin-bottom:5px}
.feature span{display:block;color:#778177;font-size:11px;line-height:1.8}
.class-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:15px}
.class-card{background:white;border:1px solid var(--line);border-radius:13px;padding:23px 17px;transition:transform .3s,box-shadow .3s}
.class-card:hover{transform:translateY(-6px);box-shadow:0 15px 35px #173d2b10}
.class-number{font-family:Manrope,sans-serif;font-size:38px;font-weight:800;color:#dfe9d6;margin-bottom:17px}
.class-card h3{font-size:15px;color:var(--green);margin:0 0 8px}
.class-card p{font-size:10px;line-height:1.8;color:var(--muted);min-height:40px}
.class-card a{display:flex;justify-content:space-between;gap:5px;border-top:1px solid #edf0e9;padding-top:13px;color:#4d783e;font-size:10px;font-weight:800}
.ojt-grid{display:grid;grid-template-columns:1fr 1fr;gap:50px;align-items:center}
.ojt-panel{background:var(--green);color:white;border-radius:15px;padding:32px}
.ojt-panel h3{font-family:Manrope,sans-serif;font-size:27px;line-height:1.35;margin:20px 0 12px}
.ojt-panel p{color:#c9d9ca;font-size:12px;line-height:1.9}
.ojt-points{display:grid;gap:17px;margin:24px 0}
.ojt-point{display:flex;align-items:center;gap:12px;font-size:11px}
.ojt-point svg{color:var(--lime)}
.btn-light{display:inline-flex;align-items:center;gap:8px;padding:12px 16px;border:0;border-radius:8px;background:var(--lime);color:#183b27;font-size:11px;font-weight:800}
.ojt-copy h2{font-family:Manrope,sans-serif;color:var(--green);font-size:31px;line-height:1.3}
.ojt-copy>p{font-size:12px;line-height:1.9;color:var(--muted)}
.ojt-step{display:flex;gap:13px;margin-top:20px}
.step-num{height:34px;width:34px;border:1px solid #dce7d5;border-radius:9px;display:grid;place-items:center;color:#49773b;font-size:11px;font-weight:800;flex-shrink:0}
.ojt-step strong{display:block;color:#314734;font-size:12px;margin-bottom:5px}
.ojt-step span{display:block;color:#768176;font-size:11px;line-height:1.8}
.teacher-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
.teacher-card{background:white;border:1px solid var(--line);border-radius:14px;overflow:hidden;transition:transform .35s,box-shadow .35s}
.teacher-card:hover{transform:translateY(-8px);box-shadow:0 22px 45px #173d2b14}
.teacher-photo-wrap{position:relative;height:230px;overflow:hidden;background:#e9efe4}
.teacher-photo{height:100%;width:100%;object-fit:cover;display:block;transition:transform .5s}
.teacher-card:hover .teacher-photo{transform:scale(1.06)}
.teacher-label{position:absolute;left:13px;bottom:13px;background:#ffffffed;color:#456b38;border-radius:6px;padding:7px 10px;font-size:9px;font-weight:800}
.teacher-info{padding:20px}
.teacher-info h3{font-family:Manrope,sans-serif;font-size:17px;color:var(--green);margin:0 0 5px}
.teacher-role{font-size:10px;font-weight:800;color:#70954d;margin-bottom:13px}
.teacher-detail{display:flex;gap:8px;align-items:flex-start;color:#728074;font-size:10px;line-height:1.8;margin-top:9px}
.teacher-detail svg{color:#72974f;flex-shrink:0;margin-top:2px}
.teacher-contact{display:flex;align-items:center;gap:8px;border-top:1px solid #edf0e9;padding-top:14px;margin-top:15px;color:#4c773c;font-size:10px;font-weight:800}
.alumni-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}
.alumni-card{background:white;border:1px solid var(--line);border-radius:13px;padding:25px;transition:transform .3s,box-shadow .3s}
.alumni-card:hover{transform:translateY(-6px);box-shadow:0 18px 40px #173d2b10}
.quote-icon{width:39px;height:39px;background:#eaf2df;color:#4c773c;border-radius:11px;display:grid;place-items:center;margin-bottom:18px}
.alumni-quote{font-size:12px;color:#5f6e62;line-height:1.95;min-height:115px}
.alumni-person{display:flex;align-items:center;gap:12px;border-top:1px solid #edf0e9;padding-top:17px}
.alumni-avatar{width:39px;height:39px;border-radius:50%;background:#e6eedc;display:grid;place-items:center;color:#49743c}
.alumni-name{font-size:11px;font-weight:800;color:var(--green)}
.alumni-path{font-size:9px;color:#788478;margin-top:4px}
.notice-list{display:grid;gap:13px;max-width:900px;margin:auto}
.notice-card{display:flex;gap:15px;align-items:flex-start;padding:20px;border:1px solid var(--line);border-radius:12px;background:white;transition:transform .25s,box-shadow .25s}
.notice-card:hover{transform:translateX(4px);box-shadow:0 12px 28px #173d2b0a}
.notice-icon{width:43px;height:43px;flex-shrink:0;border-radius:10px;background:#eaf2df;color:#49783b;display:grid;place-items:center}
.notice-body{flex:1}
.notice-category{font-size:9px;color:#70944e;text-transform:uppercase;letter-spacing:1px;font-weight:800;margin-bottom:6px}
.notice-card h3{font-size:14px;color:var(--green);margin:0 0 7px}
.notice-card p{font-size:11px;color:#748075;line-height:1.8;margin:0}
.contact-grid{display:grid;grid-template-columns:.9fr 1.1fr;gap:55px}
.contact-copy h2{margin-top:12px}
.contact-item{display:flex;gap:12px;align-items:flex-start;margin-top:23px}
.contact-icon{width:39px;height:39px;flex-shrink:0;border-radius:10px;background:#eaf2df;color:#49783b;display:grid;place-items:center}
.contact-item strong{display:block;font-size:12px;color:var(--green);margin-bottom:5px}
.contact-item span,.contact-item a{display:block;font-size:11px;color:#748075;line-height:1.8;overflow-wrap:anywhere}
.contact-form{border:1px solid var(--line);background:white;border-radius:14px;padding:28px}
.contact-form h3{font-family:Manrope,sans-serif;color:var(--green);font-size:21px;margin:0 0 8px}
.contact-form>p{font-size:11px;color:var(--muted);line-height:1.8;margin-bottom:22px}
.form-grid{display:grid;grid-template-columns:1fr 1fr;gap:14px}
.field{display:grid;gap:7px;margin-bottom:15px}
.field label{font-size:10px;font-weight:800;color:#45564a}
.field input,.field select,.field textarea{width:100%;border:1px solid #dfe6dc;background:#fbfcfa;border-radius:7px;padding:12px;outline:none;font-size:11px;color:#26392d}
.field input:focus,.field select:focus,.field textarea:focus{border-color:#739b59}
.field textarea{min-height:100px;resize:vertical}
.form-note{font-size:10px;line-height:1.8;color:#7b857a;margin-top:13px}
.form-success{background:#eaf4e5;color:#315b32;padding:12px;border-radius:7px;font-size:11px;line-height:1.8;margin-top:12px}
.footer{background:#102c1e;color:white;padding:53px 0 0}
.footer-grid{display:grid;grid-template-columns:1.5fr 1fr 1fr 1.1fr;gap:35px;padding-bottom:37px}
.footer .brand-title{color:white}
.footer .brand-sub{color:#b9cbbb}
.footer-desc{max-width:290px;color:#bdcdbf;font-size:11px;line-height:1.9;margin-top:18px}
.footer h4{font-size:11px;color:#e6eee4;margin:4px 0 17px}
.footer-links{display:grid;gap:12px}
.footer-links a,.footer-links span{color:#b8c9ba;font-size:10px;line-height:1.8;overflow-wrap:anywhere}
.footer-links a:hover{color:var(--lime)}
.footer-bottom{border-top:1px solid #ffffff1a;padding:17px 0;display:flex;justify-content:space-between;gap:15px;color:#a9bba9;font-size:10px;line-height:1.8}
.footer-bottom a{color:var(--lime)}
@media(max-width:1050px){
 .nav-links{gap:11px}.nav-links>a:not(.btn){font-size:10px}
 .leadership{grid-template-columns:.8fr 1.3fr .8fr;gap:13px}
 .person-card{padding:19px 12px}.person-photo{width:90px;height:90px}
 .gallery-main,.gallery-main>img{min-height:355px}
 .stat{padding:5px 12px}.footer-grid{gap:23px}
}
@media(max-width:780px){
 .container{width:min(100% - 32px,600px)}
 .topbar-inner{justify-content:center}.topbar-inner>div:last-child{display:none}
 .nav-inner{min-height:72px;flex-wrap:wrap}
 .brand-mark{width:41px;height:41px}.brand-title{font-size:12px}.brand-sub{font-size:9px}
 .menu-toggle{display:grid;place-items:center}
 .nav-links{display:none;width:100%;padding:0 0 17px;align-items:stretch;flex-direction:column;gap:0}
 .nav-links.open{display:flex}
 .nav-links>a:not(.btn){font-size:12px;padding:12px 6px;border-top:1px solid #edf0e9}
 .nav-links .btn{margin-top:10px}
 .section{padding:65px 0}
 .hero-grid{grid-template-columns:1fr;gap:35px;padding-top:43px;padding-bottom:50px}
 .hero h1{font-size:clamp(38px,9vw,55px);letter-spacing:-1.8px}
 .hero-img{height:320px}.floating.one{left:-5px;bottom:16px}.floating.two{right:-5px;top:15px}
 .stats-grid{grid-template-columns:1fr 1fr;gap:20px 0}
 .stat{padding:5px 10px;border-right:0}.stat:nth-child(odd){border-right:1px solid #ffffff23}
 .stat:first-child{padding-left:10px}.stat-number{font-size:19px}
 .leadership{grid-template-columns:1fr 1fr;gap:13px}
 .gallery-main{grid-column:1/-1;grid-row:1}
 .gallery-main,.gallery-main>img{min-height:330px}
 .person-card{padding:20px 12px}
 .person-name{font-size:15px}
 .program-grid{grid-template-columns:1fr}
 .program-card p{min-height:0}
 .course-grid{grid-template-columns:1fr}
 .about-grid,.ojt-grid,.contact-grid{grid-template-columns:1fr;gap:35px}
 .about-image{height:300px}
 .about-tag{right:7px}
 .class-grid{grid-template-columns:1fr 1fr}
 .teacher-grid,.alumni-grid{grid-template-columns:1fr 1fr}
 .teacher-photo-wrap{height:210px}
 .alumni-card{padding:19px}
 .alumni-quote{min-height:0;margin-bottom:22px}
 .footer-grid{grid-template-columns:1fr 1fr;gap:30px 20px}
 .contact-form{padding:22px}
}
@media(max-width:460px){
 .container{width:calc(100% - 28px)}
 .hero h1{font-size:38px}
 .hero-img{height:265px}
 .floating{padding:9px}.float-icon{width:30px;height:30px}
 .float-title{font-size:9px}.float-sub{font-size:8px}
 .leadership{grid-template-columns:1fr 1fr}
 .gallery-main,.gallery-main>img{min-height:265px}
 .gallery-overlay h3{font-size:18px}
 .gallery-thumb{height:60px}
 .person-photo{height:78px;width:78px}
 .person-name{font-size:13px}
 .person-role{font-size:8px}
 .person-contact{font-size:9px;overflow-wrap:anywhere}
 .course-card{padding:18px}
 .grade-box{width:52px;height:57px;font-size:19px}
 .course-card h3{font-size:16px}
 .subject-list{grid-template-columns:1fr}
 .class-grid{gap:10px}
 .class-card{padding:16px 12px}
 .class-number{font-size:33px}
 .teacher-grid,.alumni-grid{grid-template-columns:1fr}
 .teacher-photo-wrap{height:250px}
 .notice-card{padding:14px;gap:10px}
 .notice-icon{width:35px;height:35px}
 .form-grid{grid-template-columns:1fr;gap:0}
 .footer-grid{grid-template-columns:1fr}
 .footer-bottom{flex-direction:column}
}
`;

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [courseIndex, setCourseIndex] = useState(null);
  const [formSent, setFormSent] = useState(false);

  const currentPhoto = gallery[photoIndex];

  function changePhoto(direction) {
    setPhotoIndex((index) =>
      (index + direction + gallery.length) % gallery.length
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const mailto =
      `mailto:${SCHOOL.email}` +
      `?subject=${encodeURIComponent(data.get("subject"))}` +
      `&body=${encodeURIComponent(
        `Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`
      )}`;

    window.location.href = mailto;
    setFormSent(true);
    form.reset();
  }

  const navItems = [
    ["Home", "#home"],
    ["About", "#about"],
    ["Courses", "#courses"],
    ["OJT", "#ojt"],
    ["Teachers", "#teachers"],
    ["Alumni", "#alumni"],
    ["Notices", "#notices"],
    ["Contact", "#contact"]
  ];

  return (
    <>
      <style>{styles}</style>

      <div className="topbar">
        <div className="container topbar-inner">
          <div className="topbar-contact">
            <span><MapPin size={12} /> {SCHOOL.address}</span>
            <span><Phone size={12} /> {SCHOOL.phone}</span>
          </div>
          <div>Growing Knowledge · Cultivating Futures</div>
        </div>
      </div>

      <header className="navbar">
        <div className="container nav-inner">
          <a className="brand" href="#home" onClick={() => setMenuOpen(false)}>
            <div className="brand-mark"><Leaf size={25} /></div>
            <div>
              <div className="brand-title">{SCHOOL.name}</div>
              <div className="brand-sub">{SCHOOL.department}</div>
            </div>
          </a>

          <button
            className="menu-toggle"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>

          <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
            {navItems.map(([label, href]) => (
              <a key={label} href={href} onClick={() => setMenuOpen(false)}>
                {label}
              </a>
            ))}
            <a className="btn" href="#contact" onClick={() => setMenuOpen(false)}>
              Get in Touch <ArrowRight size={13} />
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="container hero-grid">
            <div>
              <div className="eyebrow">
                <span className="dot" /> Department of Plant Science
              </div>
              <h1>
                Growing Minds.<br />
                Growing <em>Green</em><br />
                Futures.
              </h1>
              <p className="hero-copy">
                Welcome to Triveni Secondary School, Department of Plant
                Science, Katari, Udayapur. Discover an educational journey
                that connects academic knowledge, agricultural science and
                practical skills for a sustainable future.
              </p>
              <div className="hero-actions">
                <a className="btn" href="#courses">
                  Explore Our Courses <ArrowRight size={15} />
                </a>
                <a className="btn-outline" href="#leadership">
                  Meet Our Leadership <Users size={15} />
                </a>
              </div>
              <div className="hero-mini">
                <div className="hero-mini-icon"><Sprout size={20} /></div>
                <div>
                  Agriculture-focused education<br />
                  <strong>Learn · Practice · Grow</strong>
                </div>
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-frame" />
              <img
                className="hero-img"
                src={currentPhoto.image}
                alt={currentPhoto.title}
              />
              <div className="floating one">
                <div className="float-icon"><Sprout size={19} /></div>
                <div>
                  <div className="float-title">Plant Science</div>
                  <div className="float-sub">Learning from nature</div>
                </div>
              </div>
              <div className="floating two">
                <div className="float-icon"><GraduationCap size={19} /></div>
                <div>
                  <div className="float-title">Classes 9–12</div>
                  <div className="float-sub">Education for the future</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="stats">
          <div className="container stats-grid">
            {[
              { icon: GraduationCap, number: "9–12", label: "School Grades" },
              { icon: Sprout, number: "Plant", label: "Science Education" },
              { icon: Tractor, number: "Practical", label: "Agricultural Learning" },
              { icon: Globe, number: "Future", label: "Career Preparation" }
            ].map(({ icon: Icon, number, label }) => (
              <div className="stat" key={label}>
                <Icon size={25} className="stat-icon" />
                <div>
                  <div className="stat-number">{number}</div>
                  <div className="stat-label">{label}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Leadership: coordinator left, gallery centre, principal right */}
        <section className="section" id="leadership">
          <div className="container">
            <div className="heading">
              <div className="kicker">The People Behind Our School</div>
              <h2>Meet Our Leadership</h2>
              <p>
                Dedicated leadership and a shared commitment to education,
                student development and agricultural learning.
              </p>
            </div>

            <div className="leadership">
              <article className="person-card">
                <img
                  className="person-photo"
                  src="https://placehold.co/300x300/e8efdf/25472e?text=Coordinator"
                  alt="Coordinator portrait placeholder"
                  loading="lazy"
                />
                <div className="person-role">Department Coordinator</div>
                <h3 className="person-name">Kailash Rayamajhi</h3>
                <div className="person-designation">
                  Department of Plant Science
                </div>
                <div className="person-contact muted">
                  <Phone size={13} /> Contact details to be added
                </div>
              </article>

              <div>
                <div className="gallery-main">
                  <img src={currentPhoto.image} alt={currentPhoto.title} />
                  <div className="gallery-count">
                    <Camera size={12} style={{ display: "inline", marginRight: 6 }} />
                    {String(photoIndex + 1).padStart(2, "0")} / {String(gallery.length).padStart(2, "0")}
                  </div>
                  <div className="gallery-overlay">
                    <div className="kicker" style={{ color: "#d8ed9b" }}>
                      School Life
                    </div>
                    <h3>{currentPhoto.title}</h3>
                    <p>{currentPhoto.description}</p>
                    <div className="gallery-arrows">
                      <button aria-label="Previous photo" onClick={() => changePhoto(-1)}>
                        <ChevronLeft size={18} />
                      </button>
                      <button aria-label="Next photo" onClick={() => changePhoto(1)}>
                        <Next size={18} />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="gallery-thumbs">
                  {gallery.map((photo, index) => (
                    <button
                      key={photo.title}
                      className={`gallery-thumb ${photoIndex === index ? "active" : ""}`}
                      onClick={() => setPhotoIndex(index)}
                      aria-label={`View ${photo.title}`}
                    >
                      <img src={photo.image} alt="" loading="lazy" />
                      <span>{photo.title}</span>
                    </button>
                  ))}
                </div>
              </div>

              <article className="person-card">
                <img
                  className="person-photo"
                  src="https://placehold.co/300x300/e8efdf/25472e?text=Principal"
                  alt="Principal portrait placeholder"
                  loading="lazy"
                />
                <div className="person-role">School Principal</div>
                <h3 className="person-name">Gyanendra Bahadur Karki</h3>
                <div className="person-designation">
                  School Administration
                </div>
                <div className="person-contact muted">
                  <Phone size={13} /> Contact details to be added
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section soft" id="about">
          <div className="container about-grid">
            <div className="about-image-wrap">
              <img
                className="about-image"
                src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1000&q=85"
                alt="Plants growing in a garden"
                loading="lazy"
              />
              <div className="about-tag">
                Education with Purpose
                <small>Knowledge · Practice · Responsibility</small>
              </div>
            </div>

            <div className="about-copy">
              <div className="kicker">About Our Department</div>
              <h2>Where Education Meets Agriculture.</h2>
              <p>
                Plant Science combines scientific understanding of plants
                with agricultural production and practical learning. Students
                explore how crops grow, how soil supports plants and how
                agricultural practices contribute to food security and rural
                development.
              </p>
              <div className="feature-list">
                {[
                  ["Scientific Foundation", "Understand plants, crops, soil and the environment."],
                  ["Practical Experience", "Connect classroom learning with field and laboratory activities."],
                  ["Future Opportunities", "Build a foundation for further study and agricultural careers."]
                ].map(([title, detail]) => (
                  <div className="feature" key={title}>
                    <div className="feature-icon"><CheckCircle2 size={16} /></div>
                    <div><strong>{title}</strong><span>{detail}</span></div>
                  </div>
                ))}
              </div>
              <a className="btn" href="#courses">
                Explore the Curriculum <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </section>

        <section className="section" id="courses">
          <div className="container">
            <div className="heading">
              <div className="kicker">Academic Program</div>
              <h2>Plant Science Courses · Grades 9–12</h2>
              <p>
                Explore agricultural subjects, scientific foundations and
                practical learning areas across the secondary and higher
                secondary levels.
              </p>
            </div>

            <div className="course-grid">
              {courses.map((course, index) => (
                <article className="course-card" key={course.grade}>
                  <div className="course-head">
                    <div className="grade-box">{course.grade}</div>
                    <div>
                      <div className="course-subtitle">{course.subtitle}</div>
                      <h3>{course.title}</h3>
                      <p>{course.description}</p>
                    </div>
                  </div>

                  <div className="subject-title">Key learning areas</div>
                  <div className="subject-list">
                    {(courseIndex === index
                      ? course.subjects
                      : course.subjects.slice(0, 4)
                    ).map((subject) => (
                      <div className="subject-item" key={subject}>
                        <CheckCircle2 size={13} /> {subject}
                      </div>
                    ))}
                  </div>

                  <div className="course-foot">
                    <span>{course.subjects.length} subject areas listed</span>
                    <button
                      type="button"
                      className="program-link"
                      style={{ border: 0, background: "none" }}
                      onClick={() => setCourseIndex(courseIndex === index ? null : index)}
                    >
                      {courseIndex === index ? "Show Less" : "View Subjects"}
                      <ArrowRight size={13} />
                    </button>
                  </div>
                </article>
              ))}
            </div>

            <div className="curriculum-note">
              <strong>Curriculum note:</strong> The subjects shown are a
              curriculum guide, not a verified current school timetable.
              Grade 9–10 and Grade 11–12 curriculum structures differ.
              Please confirm the current NEB-approved subjects, examination
              scheme and course availability with the school before publishing.
            </div>
          </div>
        </section>

        <section className="section soft" id="ojt">
          <div className="container ojt-grid">
            <div className="ojt-panel">
              <div className="eyebrow">
                <span className="dot" /> Learning Beyond the Classroom
              </div>
              <h3>Learn by Doing. Grow by Experience.</h3>
              <p>
                Practical activities help students connect agricultural
                concepts with real farming situations and develop skills
                through observation, guided practice and reflection.
              </p>
              <div className="ojt-points">
                <div className="ojt-point"><Sprout size={18} /> Crop and plant production</div>
                <div className="ojt-point"><FlaskConical size={18} /> Observation and practical activities</div>
                <div className="ojt-point"><BriefcaseBusiness size={18} /> Workplace and career awareness</div>
              </div>
              <a className="btn-light" href="#contact">
                Ask About Practical Training <ArrowRight size={14} />
              </a>
            </div>

            <div className="ojt-copy">
              <div className="kicker">Practical Learning</div>
              <h2>Build Skills for the Real World.</h2>
              <p>
                Practical learning may include field observations, crop
                management, nursery activities and supervised agricultural
                assignments according to the school's current program.
              </p>
              {[
                ["Observe", "Understand agricultural methods and plant growth."],
                ["Practice", "Develop skills through supervised activities."],
                ["Reflect", "Document learning and identify areas to improve."]
              ].map(([title, detail], index) => (
                <div className="ojt-step" key={title}>
                  <div className="step-num">0{index + 1}</div>
                  <div><strong>{title}</strong><span>{detail}</span></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="teachers">
          <div className="container">
            <div className="heading">
              <div className="kicker">Meet Our Educators</div>
              <h2>Teachers & Academic Team</h2>
              <p>
                Introduce the teachers who guide students through scientific
                concepts, agricultural subjects and practical learning.
              </p>
            </div>

            <div className="teacher-grid">
              {teachers.map((teacher, index) => (
                <article className="teacher-card" key={`${teacher.name}-${index}`}>
                  <div className="teacher-photo-wrap">
                    <img
                      className="teacher-photo"
                      src={teacher.image}
                      alt="Sample teacher portrait"
                      loading="lazy"
                    />
                    <div className="teacher-label">{teacher.subject}</div>
                  </div>
                  <div className="teacher-info">
                    <h3>{teacher.name}</h3>
                    <div className="teacher-role">{teacher.role}</div>
                    <div className="teacher-detail">
                      <GraduationCap size={14} />
                      <span>{teacher.qualification}</span>
                    </div>
                    <div className="teacher-detail">
                      <BookOpen size={14} />
                      <span>{teacher.subject}</span>
                    </div>
                    <div className="teacher-contact">
                      <Mail size={14} />
                      {teacher.phone || "Official contact to be added"}
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <p className="form-note" style={{ textAlign: "center", marginTop: 22 }}>
              Teacher profiles currently use sample portraits and placeholder
              details. Replace them with approved photographs, real names,
              verified qualifications and authorized contact information.
            </p>
          </div>
        </section>

        <section className="section soft" id="alumni">
          <div className="container">
            <div className="heading">
              <div className="kicker">Student Experiences</div>
              <h2>Voices of Our Former Students</h2>
              <p>
                Celebrate alumni achievements, learning experiences and
                pathways after school through authentic student stories.
              </p>
            </div>

            <div className="alumni-grid">
              {alumni.map((person, index) => (
                <article className="alumni-card" key={`${person.name}-${index}`}>
                  <div className="quote-icon"><Quote size={20} /></div>
                  <p className="alumni-quote">“{person.quote}”</p>
                  <div className="alumni-person">
                    <div className="alumni-avatar"><GraduationCap size={19} /></div>
                    <div>
                      <div className="alumni-name">{person.name}</div>
                      <div className="alumni-path">
                        {person.batch} · {person.path}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <p className="form-note" style={{ textAlign: "center", marginTop: 22 }}>
              These are testimonial placeholders, not statements from real
              alumni. Publish only genuine testimonials with permission.
            </p>
          </div>
        </section>

        <section className="section" id="notices">
          <div className="container">
            <div className="heading">
              <div className="kicker">School Updates</div>
              <h2>Notices & Announcements</h2>
              <p>
                Keep students and parents informed about verified academic
                updates and school activities.
              </p>
            </div>

            <div className="notice-list">
              {notices.map((notice) => (
                <article className="notice-card" key={notice.title}>
                  <div className="notice-icon"><CalendarDays size={19} /></div>
                  <div className="notice-body">
                    <div className="notice-category">{notice.category}</div>
                    <h3>{notice.title}</h3>
                    <p>{notice.description}</p>
                  </div>
                </article>
              ))}
            </div>
            <p className="form-note" style={{ textAlign: "center", marginTop: 20 }}>
              Sample notices: replace with official announcements and dates.
            </p>
          </div>
        </section>

        <section className="section soft" id="contact">
          <div className="container contact-grid">
            <div className="contact-copy">
              <div className="kicker">Contact the School</div>
              <h2>Let's Connect and Grow Together.</h2>
              <p>
                Contact the school for confirmed information about admission,
                the Plant Science program, classes and academic activities.
              </p>

              <div className="contact-item">
                <div className="contact-icon"><MapPin size={18} /></div>
                <div><strong>School Address</strong><span>{SCHOOL.address}</span></div>
              </div>
              <div className="contact-item">
                <div className="contact-icon"><Phone size={18} /></div>
                <div><strong>Telephone</strong><a href={`tel:${SCHOOL.phone}`}>{SCHOOL.phone}</a></div>
              </div>
              <div className="contact-item">
                <div className="contact-icon"><Mail size={18} /></div>
                <div><strong>Email</strong><a href={`mailto:${SCHOOL.email}`}>{SCHOOL.email}</a></div>
              </div>
              <div className="contact-item">
                <div className="contact-icon"><Clock size={18} /></div>
                <div><strong>Office Hours</strong><span>Contact the school to confirm current office hours.</span></div>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <h3>Send an Enquiry</h3>
              <p>Prepare an email to ask about school programs or admission.</p>
              <div className="form-grid">
                <div className="field">
                  <label htmlFor="name">Full Name *</label>
                  <input id="name" name="name" required placeholder="Your name" />
                </div>
                <div className="field">
                  <label htmlFor="email">Email Address *</label>
                  <input id="email" name="email" type="email" required placeholder="you@example.com" />
                </div>
              </div>
              <div className="field">
                <label htmlFor="subject">Enquiry Type *</label>
                <select id="subject" name="subject" required defaultValue="">
                  <option value="" disabled>Select a subject</option>
                  <option>Admission Information</option>
                  <option>Plant Science Courses</option>
                  <option>Class 9–12 Information</option>
                  <option>Practical Training / OJT</option>
                  <option>Other Enquiry</option>
                </select>
              </div>
              <div className="field">
                <label htmlFor="message">Message *</label>
                <textarea id="message" name="message" required placeholder="Write your enquiry..." />
              </div>
              <button className="btn" type="submit">
                Prepare Email <ExternalLink size={14} />
              </button>
              {formSent && (
                <div className="form-success">
                  Your email application should open with your message. If
                  it does not, contact the school directly by telephone.
                </div>
              )}
              <div className="form-note">
                This form opens the visitor's email application. It does not
                store messages on the website. Replace the placeholder email
                with the school's verified address.
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <a className="brand" href="#home">
                <div className="brand-mark"><Leaf size={24} /></div>
                <div>
                  <div className="brand-title">{SCHOOL.name}</div>
                  <div className="brand-sub">{SCHOOL.department}</div>
                </div>
              </a>
              <p className="footer-desc">
                Encouraging scientific learning, agricultural skills and
                responsible stewardship of plants and natural resources.
              </p>
            </div>
            <div>
              <h4>Explore</h4>
              <div className="footer-links">
                <a href="#about">About Us</a>
                <a href="#leadership">Leadership</a>
                <a href="#courses">Courses</a>
                <a href="#teachers">Teachers</a>
              </div>
            </div>
            <div>
              <h4>Student Corner</h4>
              <div className="footer-links">
                <a href="#ojt">Practical Learning</a>
                <a href="#alumni">Alumni Stories</a>
                <a href="#notices">Notices</a>
                <a href="#contact">Enquiries</a>
              </div>
            </div>
            <div>
              <h4>Visit & Contact</h4>
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
