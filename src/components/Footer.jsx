import React from "react";
import { 
  Leaf, Phone, Mail, MapPin, Code2, Sparkles, 
  ArrowUp, ExternalLink, Heart, Globe, GraduationCap
} from "lucide-react";
import { SCHOOL_INFO } from "../data/schoolData";

export default function Footer({ onOpenDeveloper, onSelectGrade }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-b from-emerald-950 to-[#07180f] text-white pt-16 pb-8 border-t border-emerald-900/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          
          {/* Col 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-lime-400 to-emerald-500 text-emerald-950 flex items-center justify-center font-bold shadow-lg">
                <Leaf className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-black text-base sm:text-lg text-white leading-tight">
                  {SCHOOL_INFO.name}
                </h3>
                <p className="text-xs text-lime-300 font-medium">
                  {SCHOOL_INFO.department}
                </p>
              </div>
            </div>

            <p className="text-xs text-emerald-200/80 leading-relaxed max-w-sm">
              Dedicated to delivering government-approved technical secondary education in Plant Science. 
              Equipping youth with practical agronomy, greenhouse horticulture, and ecological stewardship since 2072 B.S.
            </p>

            <div className="pt-2 text-xs text-emerald-300 space-y-1.5">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-lime-400" />
                <span>{SCHOOL_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-lime-400" />
                <span>{SCHOOL_INFO.phone} | {SCHOOL_INFO.altPhone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-lime-400" />
                <span>{SCHOOL_INFO.email}</span>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-lime-300">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-emerald-100/80 font-medium">
              <li>
                <a href="#home" className="hover:text-lime-300 transition-colors">Home Page</a>
              </li>
              <li>
                <a href="#about" className="hover:text-lime-300 transition-colors">About Our School</a>
              </li>
              <li>
                <a href="#program" className="hover:text-lime-300 transition-colors">Plant Science Program</a>
              </li>
              <li>
                <a href="#ojt" className="hover:text-lime-300 transition-colors">OJT Field Attachment</a>
              </li>
              <li>
                <a href="#notices" className="hover:text-lime-300 transition-colors">Notice Board</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-lime-300 transition-colors">Contact Administration</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Academic Classes (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-lime-300">
              Technical Classes
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs text-emerald-100/80 font-medium">
              <a
                href="#classes"
                onClick={() => onSelectGrade && onSelectGrade("9")}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 hover:text-lime-300 transition-colors flex items-center gap-1.5"
              >
                <span className="w-5 h-5 rounded-md bg-lime-400 text-emerald-950 font-bold flex items-center justify-center text-[10px]">9</span>
                <span>Class Nine</span>
              </a>
              <a
                href="#classes"
                onClick={() => onSelectGrade && onSelectGrade("10")}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 hover:text-lime-300 transition-colors flex items-center gap-1.5"
              >
                <span className="w-5 h-5 rounded-md bg-lime-400 text-emerald-950 font-bold flex items-center justify-center text-[10px]">10</span>
                <span>Class Ten</span>
              </a>
              <a
                href="#classes"
                onClick={() => onSelectGrade && onSelectGrade("11")}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 hover:text-lime-300 transition-colors flex items-center gap-1.5"
              >
                <span className="w-5 h-5 rounded-md bg-lime-400 text-emerald-950 font-bold flex items-center justify-center text-[10px]">11</span>
                <span>Class Eleven</span>
              </a>
              <a
                href="#classes"
                onClick={() => onSelectGrade && onSelectGrade("12")}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 hover:text-lime-300 transition-colors flex items-center gap-1.5"
              >
                <span className="w-5 h-5 rounded-md bg-lime-400 text-emerald-950 font-bold flex items-center justify-center text-[10px]">12</span>
                <span>Class Twelve</span>
              </a>
            </div>

            <div className="p-3 rounded-xl bg-emerald-900/60 border border-emerald-800/80 text-[11px] text-emerald-200 mt-2">
              <strong>NEB Approved:</strong> Technical secondary graduation provides direct entry into university B.Sc. Agriculture or Loksewa JTA examination.
            </div>
          </div>

          {/* Col 4: Developer Attribution & Special Badge (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-lime-300">
              Developer Attribution
            </h4>
            
            {/* Prominent Interactive Developer Badge */}
            <div 
              onClick={onOpenDeveloper}
              className="p-4 rounded-2xl bg-gradient-to-br from-emerald-900/90 to-emerald-950 border-2 border-lime-400/50 hover:border-lime-300 shadow-xl cursor-pointer group transition-all duration-300 hover:scale-[1.02] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-lime-400/10 rounded-full blur-xl pointer-events-none" />

              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-xl bg-lime-400 text-emerald-950 flex items-center justify-center font-bold shadow-md group-hover:rotate-6 transition-transform">
                  <Code2 className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-lime-300 flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-lime-400 animate-spin" /> Official Engineer
                  </span>
                  <div className="text-sm font-black text-white group-hover:text-lime-200 transition-colors">
                    Bibash Lamichhane
                  </div>
                </div>
              </div>

              <p className="text-[11px] text-emerald-200/90 leading-tight">
                Designed & Developed with pride by <strong>Bibash Lamichhane (विवश लामिछाने)</strong>, 
                Plant Science alumnus of Triveni Secondary School.
              </p>

              <div className="mt-3 pt-2 border-t border-emerald-800/80 flex items-center justify-between text-[11px] text-lime-300 font-bold">
                <span>View Developer Profile</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>

            <p className="text-[10px] text-emerald-400/70">
              Creator of TMVag App & Agri-Extension Technologies.
            </p>
          </div>

        </div>

        {/* Bottom Copyright & Back to Top Row */}
        <div className="pt-8 border-t border-emerald-900/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-300/80">
          <div>
            © {new Date().getFullYear()} {SCHOOL_INFO.name}. All Rights Reserved. 
            <span className="text-emerald-400 ml-1">Katari-4, Udayapur, Koshi Province, Nepal.</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenDeveloper}
              className="text-lime-300 hover:underline font-semibold"
            >
              Bibash Lamichhane Profile
            </button>
            <span className="text-emerald-700">·</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors flex items-center gap-1"
              title="Back to Top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span className="text-[11px] font-bold">Top</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
