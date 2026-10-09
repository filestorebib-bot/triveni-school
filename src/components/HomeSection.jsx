import React, { useState, useEffect } from "react";
import { 
  Sprout, GraduationCap, ChevronLeft, ChevronRight, Phone, Mail, 
  MapPin, ArrowRight, Wheat, Flower2, Microscope, Layers, Tractor, 
  Briefcase, Quote, Users, Search, CheckCircle2, Award, Sparkles,
  ExternalLink, Calendar, BookOpen
} from "lucide-react";
import { 
  SCHOOL_INFO, HERO_CAROUSEL_IMAGES, CORE_FOCUS_AREAS, 
  ALUMNI_TESTIMONIALS, TEACHERS_LIST 
} from "../data/schoolData";

export default function HomeSection({ onOpenDeveloper, onSelectImage, onSelectNotice }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [teacherSearch, setTeacherSearch] = useState("");
  const [activeTeacherSubject, setActiveTeacherSubject] = useState("All");

  // Autoplay hero slider
  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_CAROUSEL_IMAGES.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_CAROUSEL_IMAGES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_CAROUSEL_IMAGES.length) % HERO_CAROUSEL_IMAGES.length);
  };

  const filteredTeachers = TEACHERS_LIST.filter((t) => {
    const matchesSearch = 
      t.name.toLowerCase().includes(teacherSearch.toLowerCase()) ||
      t.subject.toLowerCase().includes(teacherSearch.toLowerCase()) ||
      t.role.toLowerCase().includes(teacherSearch.toLowerCase());
    
    if (activeTeacherSubject === "All") return matchesSearch;
    return matchesSearch && t.subject.toLowerCase().includes(activeTeacherSubject.toLowerCase());
  });

  return (
    <section id="home" className="relative pt-6 sm:pt-8 pb-16 space-y-16">
      {/* SECTION HEADER / MOTTO */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-900 border border-emerald-200/80 mb-3">
            <Sprout className="w-4 h-4 text-emerald-700" />
            <span>Government Technical Vocational Stream · Grades 9–12</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-emerald-950 tracking-tight leading-tight">
            Cultivating Scientific Minds for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 via-green-600 to-lime-600">
              Sustainable Agriculture
            </span>
          </h1>
          <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed">
            Welcome to Triveni Secondary School, Department of Plant Science, Katari-4, Udayapur. 
            Blending academic rigor with high-tech greenhouse trials, soil diagnostics, and mandatory OJT internships.
          </p>
        </div>

        {/* 1. HERO LEADERSHIP & INTERACTIVE CAROUSEL GRID */}
        {/* Left: Coordinator | Middle: Image Carousel | Right: Principal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* LEFT CARD: COORDINATOR DETAILS */}
          <div className="lg:col-span-3 flex flex-col">
            <div className="h-full glass-panel rounded-3xl p-5 sm:p-6 border border-emerald-100 shadow-xl flex flex-col justify-between glass-card-hover relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-400/10 rounded-full blur-2xl pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800">
                    Coordinator's Desk
                  </span>
                  <Sprout className="w-4 h-4 text-emerald-600" />
                </div>

                {/* Coordinator Photo & Identity */}
                <div className="text-center mt-2 mb-4">
                  <div className="relative inline-block mx-auto mb-3">
                    <img
                      src={SCHOOL_INFO.coordinator.photo}
                      alt={SCHOOL_INFO.coordinator.name}
                      className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover mx-auto border-3 border-emerald-600 shadow-md group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-emerald-700 text-white p-1 rounded-lg shadow">
                      <GraduationCap className="w-3.5 h-3.5" />
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-emerald-950">
                    {SCHOOL_INFO.coordinator.name}
                  </h3>
                  <p className="text-xs font-semibold text-emerald-700 mt-0.5">
                    {SCHOOL_INFO.coordinator.designation}
                  </p>
                  <p className="text-[11px] text-gray-500 mt-0.5">
                    {SCHOOL_INFO.coordinator.qualification}
                  </p>
                </div>

                {/* Message Quote */}
                <div className="bg-emerald-50/70 p-3.5 rounded-2xl border border-emerald-100/80 text-xs text-gray-700 italic leading-relaxed relative">
                  <Quote className="w-4 h-4 text-emerald-300 absolute -top-1.5 -left-1.5" />
                  "{SCHOOL_INFO.coordinator.message}"
                </div>
              </div>

              {/* Contact info & Action */}
              <div className="pt-4 mt-4 border-t border-gray-100 space-y-2 text-xs">
                <a 
                  href={`tel:${SCHOOL_INFO.coordinator.phone}`}
                  className="flex items-center gap-2 text-gray-600 hover:text-emerald-800 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{SCHOOL_INFO.coordinator.phone}</span>
                </a>
                <a 
                  href={`mailto:${SCHOOL_INFO.coordinator.email}`}
                  className="flex items-center gap-2 text-gray-600 hover:text-emerald-800 transition-colors truncate"
                >
                  <Mail className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="truncate">{SCHOOL_INFO.coordinator.email}</span>
                </a>
                <a
                  href="#contact"
                  className="mt-2 w-full py-2 rounded-xl bg-emerald-800 hover:bg-emerald-700 text-white font-bold text-center block transition-colors text-[11px]"
                >
                  Contact Coordinator
                </a>
              </div>
            </div>
          </div>

          {/* MIDDLE: INTERACTIVE IMAGE CAROUSEL / SLIDER */}
          <div 
            className="lg:col-span-6 flex flex-col"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <div className="h-full rounded-3xl overflow-hidden shadow-2xl border border-emerald-200/80 bg-emerald-950 relative flex flex-col group min-h-[380px] sm:min-h-[460px]">
              {/* Image Slides */}
              {HERO_CAROUSEL_IMAGES.map((img, idx) => (
                <div
                  key={idx}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    currentSlide === idx ? "opacity-100 z-10" : "opacity-0 z-0"
                  }`}
                >
                  <img
                    src={img.url}
                    alt={img.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Subtle Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/40 to-black/20" />
                </div>
              ))}

              {/* Slider Content Overlay */}
              <div className="relative z-20 mt-auto p-6 sm:p-8 text-white space-y-3">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-lime-400 text-emerald-950 shadow-md">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{HERO_CAROUSEL_IMAGES[currentSlide].badge}</span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-white leading-tight drop-shadow-md">
                  {HERO_CAROUSEL_IMAGES[currentSlide].title}
                </h2>
                <p className="text-xs sm:text-sm text-emerald-100 max-w-xl leading-relaxed drop-shadow">
                  {HERO_CAROUSEL_IMAGES[currentSlide].subtitle}
                </p>

                {/* Quick Action row inside slider */}
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => onSelectImage && onSelectImage(HERO_CAROUSEL_IMAGES[currentSlide])}
                    className="px-4 py-2 rounded-xl bg-white/20 hover:bg-white/30 backdrop-blur-md text-white text-xs font-bold transition-all flex items-center gap-1.5 border border-white/20"
                  >
                    <span>View Fullscreen</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                  <a
                    href="#program"
                    className="px-4 py-2 rounded-xl bg-lime-400 hover:bg-lime-300 text-emerald-950 text-xs font-bold transition-all shadow-md flex items-center gap-1.5"
                  >
                    <span>Explore Grades 9–12</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Slider Arrows Controls */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-md transition-all group-hover:scale-110"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-md transition-all group-hover:scale-110"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Slider Dot Indicators */}
              <div className="absolute top-4 right-4 z-30 flex items-center gap-1.5 bg-black/40 px-3 py-1.5 rounded-full backdrop-blur-md">
                {HERO_CAROUSEL_IMAGES.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    onClick={() => setCurrentSlide(dotIdx)}
                    className={`h-2 rounded-full transition-all ${
                      currentSlide === dotIdx ? "w-6 bg-lime-400" : "w-2 bg-white/50"
                    }`}
                    aria-label={`Go to slide ${dotIdx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT CARD: PRINCIPAL DETAILS */}
          <div className="lg:col-span-3 flex flex-col">
            <div className="h-full glass-panel rounded-3xl p-5 sm:p-6 border border-emerald-100 shadow-xl flex flex-col justify-between glass-card-hover relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-32 h-32 bg-lime-400/10 rounded-full blur-2xl pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-lime-100 text-emerald-900">
                    Principal's Message
                  </span>
                  <Award className="w-4 h-4 text-emerald-700" />
                </div>

                {/* Principal Photo & Identity */}
                <div className="text-center mt-2 mb-4">
                  <div className="relative inline-block mx-auto mb-3">
                    <img
                      src={SCHOOL_INFO.principal.photo}
                      alt={SCHOOL_INFO.principal.name}
                      className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover mx-auto border-3 border-green-700 shadow-md group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-green-800 text-white p-1 rounded-lg shadow">
                      <GraduationCap className="w-3.5 h-3.5" />
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-emerald-950">
                    {SCHOOL_INFO.principal.name}
                  </h3>
                  <p className="text-xs font-semibold text-emerald-700 mt-0.5">
                    {SCHOOL_INFO.principal.designation}
                  </p>
                  <p className="text-[11px] text-gray-500 mt-0.5">
                    {SCHOOL_INFO.principal.qualification}
                  </p>
                </div>

                {/* Message Quote */}
                <div className="bg-lime-50/70 p-3.5 rounded-2xl border border-lime-200/80 text-xs text-gray-700 italic leading-relaxed relative">
                  <Quote className="w-4 h-4 text-lime-400 absolute -top-1.5 -left-1.5" />
                  "{SCHOOL_INFO.principal.message}"
                </div>
              </div>

              {/* Contact info & Action */}
              <div className="pt-4 mt-4 border-t border-gray-100 space-y-2 text-xs">
                <a 
                  href={`tel:${SCHOOL_INFO.principal.phone}`}
                  className="flex items-center gap-2 text-gray-600 hover:text-emerald-800 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{SCHOOL_INFO.principal.phone}</span>
                </a>
                <a 
                  href={`mailto:${SCHOOL_INFO.principal.email}`}
                  className="flex items-center gap-2 text-gray-600 hover:text-emerald-800 transition-colors truncate"
                >
                  <Mail className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="truncate">{SCHOOL_INFO.principal.email}</span>
                </a>
                <a
                  href="#about"
                  className="mt-2 w-full py-2 rounded-xl bg-green-800 hover:bg-green-700 text-white font-bold text-center block transition-colors text-[11px]"
                >
                  About School Heritage
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 2. COURSE DETAILS CARD & CORE AGRICULTURAL FOCUS AREAS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-emerald-100 shadow-xl relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-8">
            <div>
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800">
                Technical Plant Science Stream · NEB Curriculum
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-emerald-950 mt-2">
                Core Focus Areas & Applied Science Disciplines
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 max-w-2xl mt-1">
                Triveni's curriculum adheres to the National Curriculum Framework (NCF) of Nepal, 
                blending theoretical botanical foundations with applied agricultural engineering.
              </p>
            </div>
            <a
              href="#classes"
              className="px-5 py-2.5 rounded-xl bg-emerald-800 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-2 shadow-md transition-all shrink-0"
            >
              <span>Explore Subject Syllabus</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Grid of 6 Core Disciplines */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {CORE_FOCUS_AREAS.map((area, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-2xl bg-white border border-gray-100 shadow-sm hover:border-emerald-300 hover:shadow-lg transition-all glass-card-hover group"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center group-hover:bg-lime-400 group-hover:text-emerald-950 transition-colors">
                    {idx === 0 && <Wheat className="w-5 h-5" />}
                    {idx === 1 && <Flower2 className="w-5 h-5" />}
                    {idx === 2 && <Microscope className="w-5 h-5" />}
                    {idx === 3 && <Layers className="w-5 h-5" />}
                    {idx === 4 && <Tractor className="w-5 h-5" />}
                    {idx === 5 && <Briefcase className="w-5 h-5" />}
                  </div>
                  <span className="font-mono text-[11px] font-bold text-gray-400 bg-gray-50 px-2 py-0.5 rounded border border-gray-100">
                    {area.code}
                  </span>
                </div>

                <h3 className="text-base font-bold text-emerald-950 mb-1 group-hover:text-emerald-700 transition-colors">
                  {area.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-3">
                  {area.description}
                </p>

                {/* Practical Skill Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-gray-50">
                  {area.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx}
                      className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. VOICE OF FORMER STUDENTS (ALUMNI TESTIMONIALS) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-lime-100 text-emerald-900">
            Alumni Voices & Career Impact
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-emerald-950 mt-2">
            Where Triveni Plant Science Leads Our Graduates
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 mt-1">
            Real stories from past students currently working across agricultural knowledge centers, 
            universities, commercial ventures, and software technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {ALUMNI_TESTIMONIALS.map((alum) => (
            <div
              key={alum.id}
              className="glass-panel rounded-3xl p-5 border border-emerald-100 shadow-md flex flex-col justify-between glass-card-hover relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <Quote className="w-5 h-5 text-emerald-400" />
                  <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100/80 px-2.5 py-0.5 rounded-full">
                    {alum.batch}
                  </span>
                </div>

                <p className="text-xs text-gray-700 italic leading-relaxed mb-4">
                  "{alum.quote}"
                </p>
              </div>

              <div className="pt-3 border-t border-gray-100 flex items-center gap-3">
                <img
                  src={alum.avatar}
                  alt={alum.name}
                  className="w-11 h-11 rounded-xl object-cover border-2 border-emerald-500 shadow-sm shrink-0"
                />
                <div className="min-w-0">
                  <div className="text-xs font-bold text-emerald-950 truncate flex items-center gap-1">
                    <span>{alum.name}</span>
                    {alum.name.includes("Bibash") && (
                      <button
                        onClick={onOpenDeveloper}
                        className="text-[9px] font-bold bg-lime-400 text-emerald-950 px-1.5 py-0.2 rounded hover:underline cursor-pointer"
                        title="View Developer Profile"
                      >
                        Dev
                      </button>
                    )}
                  </div>
                  <div className="text-[11px] font-semibold text-emerald-700 truncate">
                    {alum.currentRole}
                  </div>
                  <div className="text-[10px] text-gray-500 truncate">
                    {alum.affiliation}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. TEACHER & STAFF DETAILS SECTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-emerald-100 shadow-xl">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-6">
            <div>
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800">
                Department Faculty & Academic Staff
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-emerald-950 mt-2">
                Learn from Dedicated Agricultural Educators
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 max-w-2xl mt-1">
                Our team consists of university graduates in Agronomy, Plant Pathology, Horticulture, 
                Soil Science, and seasoned practical farm instructors.
              </p>
            </div>

            {/* Teacher Search Input */}
            <div className="w-full md:w-72 relative">
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search teacher by name or subject..."
                value={teacherSearch}
                onChange={(e) => setTeacherSearch(e.target.value)}
                className="w-full pl-9 pr-3 py-2 rounded-xl text-xs bg-white border border-gray-200 focus:outline-none focus:border-emerald-600 shadow-sm"
              />
            </div>
          </div>

          {/* Teacher Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredTeachers.map((teacher) => (
              <div
                key={teacher.id}
                className="p-5 rounded-2xl bg-white border border-gray-100 shadow-sm hover:border-emerald-200 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start gap-4 mb-3">
                    <img
                      src={teacher.photo}
                      alt={teacher.name}
                      className="w-16 h-16 rounded-2xl object-cover border-2 border-emerald-600 shadow-sm shrink-0"
                    />
                    <div>
                      <h3 className="text-sm font-bold text-emerald-950">
                        {teacher.name}
                      </h3>
                      <div className="text-xs font-semibold text-emerald-700">
                        {teacher.role}
                      </div>
                      <div className="text-[11px] text-gray-500 mt-0.5">
                        {teacher.qualification}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1.5 text-xs text-gray-600 bg-gray-50 p-3 rounded-xl border border-gray-100">
                    <div className="flex items-start gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                      <span><strong>Teaching:</strong> {teacher.subject}</span>
                    </div>
                    <div className="flex items-start gap-1.5">
                      <Award className="w-3.5 h-3.5 text-lime-700 shrink-0 mt-0.5" />
                      <span><strong>Specialty:</strong> {teacher.specialty}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs">
                  <a
                    href={`tel:${teacher.phone}`}
                    className="flex items-center gap-1.5 text-emerald-800 hover:text-emerald-950 font-semibold"
                  >
                    <Phone className="w-3.5 h-3.5" /> {teacher.phone}
                  </a>
                  <a
                    href={`mailto:${teacher.email}`}
                    className="flex items-center gap-1.5 text-gray-500 hover:text-emerald-800"
                    title={teacher.email}
                  >
                    <Mail className="w-3.5 h-3.5" /> Message
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
