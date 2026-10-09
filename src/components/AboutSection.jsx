import React, { useState } from "react";
import { 
  Building2, Eye, Target, Compass, Award, Sprout, 
  CheckCircle2, TreePine, FlaskConical, Users, ShieldCheck,
  Calendar, MapPin, HeartHandshake, ArrowRight
} from "lucide-react";
import { SCHOOL_INFO } from "../data/schoolData";

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState("mission"); // mission, facilities, impact

  const facilities = [
    {
      title: "4-Acre Demonstration Research Farm",
      desc: "School-owned agrarian acreage dedicated to seasonal cereal trials, high-density marigold floriculture, and organic crop rotations.",
      badge: "Open Field"
    },
    {
      title: "Naturally Ventilated Polyhouses & Greenhouses",
      desc: "Controlled climate structures equipped with micro-sprinklers and drip fertigation systems for commercial off-season tomatoes and bell peppers.",
      badge: "Protected Agriculture"
    },
    {
      title: "Botanical Pathology & Soil Testing Lab",
      desc: "Equipped with binocular compound microscopes, digital pH & conductivity testers, and soil rapid test kits for community farmer samples.",
      badge: "Lab Diagnostic"
    },
    {
      title: "Oyster Mushroom Spawning Unit",
      desc: "Dedicated incubation and dark cropping chambers for paddy straw substrate pasteurization, oyster mushroom spawning, and humidity regulation.",
      badge: "Mushroom Tech"
    },
    {
      title: "Organic Vermicomposting & Jholmal Plant",
      desc: "Active Eisenia fetida earthworm beds and fermentation barrels producing bio-fertilizer slurry and botanical pest repellents.",
      badge: "Organic Soil Health"
    },
    {
      title: "Modern Apiary & Beekeeping Zone",
      desc: "Demonstration bee boxes (Apis cerana) for studying pollinator ecology, honeybee castes, and sustainable honey extraction.",
      badge: "Apiculture"
    }
  ];

  return (
    <section id="about" className="py-16 bg-gradient-to-b from-transparent via-emerald-50/40 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-900 border border-emerald-200/80 mb-3">
            <Building2 className="w-4 h-4 text-emerald-700" />
            <span>Institutional Profile & Heritage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-emerald-950 tracking-tight">
            Rooted in Tradition, Growing with Science
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-600 leading-relaxed">
            Founded in 2026 B.S., Triveni Secondary School has stood as a bastion of quality public education in Katari, Udayapur. 
            In 2072 B.S., we introduced the Technical Plant Science stream to empower rural youth with technical mastery.
          </p>
        </div>

        {/* Interactive Stats Counter Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="glass-panel p-5 rounded-2xl border border-emerald-100 text-center glass-card-hover">
            <div className="text-2xl sm:text-3xl font-black text-emerald-800">2026 B.S.</div>
            <div className="text-xs font-bold uppercase tracking-wider text-gray-400 mt-1">School Established</div>
            <div className="text-[11px] text-gray-500 mt-0.5">57+ Years of Academic Excellence</div>
          </div>
          <div className="glass-panel p-5 rounded-2xl border border-emerald-100 text-center glass-card-hover">
            <div className="text-2xl sm:text-3xl font-black text-emerald-800">2072 B.S.</div>
            <div className="text-xs font-bold uppercase tracking-wider text-gray-400 mt-1">Plant Science Stream</div>
            <div className="text-[11px] text-gray-500 mt-0.5">Pioneering Technical Agriculture</div>
          </div>
          <div className="glass-panel p-5 rounded-2xl border border-emerald-100 text-center glass-card-hover">
            <div className="text-2xl sm:text-3xl font-black text-emerald-800">4+ Acres</div>
            <div className="text-xs font-bold uppercase tracking-wider text-gray-400 mt-1">Practical Research Farm</div>
            <div className="text-[11px] text-gray-500 mt-0.5">Polyhouses, Fields & Orchards</div>
          </div>
          <div className="glass-panel p-5 rounded-2xl border border-emerald-100 text-center glass-card-hover">
            <div className="text-2xl sm:text-3xl font-black text-emerald-800">450+</div>
            <div className="text-xs font-bold uppercase tracking-wider text-gray-400 mt-1">Graduates & JT/JTAs</div>
            <div className="text-[11px] text-gray-500 mt-0.5">Leading Agricultural Development</div>
          </div>
        </div>

        {/* Story & Vision Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Visual Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-emerald-200 aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=85"
                alt="Triveni School Farm Land"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-transparent to-transparent flex items-end p-6 text-white">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-lime-300">
                    Katari-4, Udayapur
                  </span>
                  <h4 className="text-base sm:text-lg font-bold">
                    Agricultural Science for Koshi Province
                  </h4>
                </div>
              </div>
            </div>

            {/* Floating Info Badge */}
            <div className="absolute -bottom-5 -right-5 bg-white p-4 rounded-2xl border border-emerald-100 shadow-xl hidden sm:flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-lime-400 text-emerald-950 flex items-center justify-center font-bold">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-bold text-gray-900">Affiliated with NEB</div>
                <div className="text-[11px] text-gray-500">Ministry of Education, Nepal</div>
              </div>
            </div>
          </div>

          {/* Right Narrative Tabs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Interactive Tab Switcher */}
            <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-emerald-100/60 max-w-md">
              <button
                onClick={() => setActiveTab("mission")}
                className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold transition-all ${
                  activeTab === "mission"
                    ? "bg-emerald-800 text-white shadow-md"
                    : "text-emerald-900 hover:bg-white/50"
                }`}
              >
                Vision & Mission
              </button>
              <button
                onClick={() => setActiveTab("facilities")}
                className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold transition-all ${
                  activeTab === "facilities"
                    ? "bg-emerald-800 text-white shadow-md"
                    : "text-emerald-900 hover:bg-white/50"
                }`}
              >
                Farm Facilities
              </button>
              <button
                onClick={() => setActiveTab("impact")}
                className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold transition-all ${
                  activeTab === "impact"
                    ? "bg-emerald-800 text-white shadow-md"
                    : "text-emerald-900 hover:bg-white/50"
                }`}
              >
                Community Impact
              </button>
            </div>

            {/* Tab 1: Vision, Mission & Values */}
            {activeTab === "mission" && (
              <div className="space-y-4 animate-fadeIn">
                <div className="p-5 rounded-2xl bg-white border border-emerald-100 shadow-sm">
                  <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm mb-1.5">
                    <Eye className="w-4 h-4 text-emerald-600" />
                    <span>Our Strategic Vision</span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    To be the foremost technical agricultural center of excellence in Koshi Province, 
                    nurturing self-reliant, scientifically competent, and environmentally responsible agro-professionals.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-emerald-100 shadow-sm">
                  <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm mb-1.5">
                    <Target className="w-4 h-4 text-emerald-600" />
                    <span>Our Core Mission</span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    To deliver an immersive 50:50 theory-to-practical curriculum that merges traditional indigenous farming wisdom 
                    with modern polyhouses, soil diagnostics, and bio-organic pest management.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-emerald-100 shadow-sm">
                  <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm mb-1.5">
                    <Compass className="w-4 h-4 text-emerald-600" />
                    <span>Core Values (The Triveni Creed)</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mt-2 text-xs text-gray-700">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Ecological Integrity
                    </span>
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Practical Competence
                    </span>
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Farmer-Centric Empathy
                    </span>
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Agri-Technological Innovation
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 2: Farm Infrastructure */}
            {activeTab === "facilities" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 animate-fadeIn">
                {facilities.map((fac, idx) => (
                  <div 
                    key={idx}
                    className="p-4 rounded-2xl bg-white border border-gray-100 shadow-sm hover:border-emerald-200 transition-all"
                  >
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                      {fac.badge}
                    </span>
                    <h4 className="text-xs font-bold text-emerald-950 mt-1.5 mb-1">
                      {fac.title}
                    </h4>
                    <p className="text-[11px] text-gray-500 leading-relaxed">
                      {fac.desc}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Tab 3: Community Impact */}
            {activeTab === "impact" && (
              <div className="p-6 rounded-2xl bg-white border border-emerald-100 shadow-sm space-y-4 animate-fadeIn text-xs sm:text-sm text-gray-600 leading-relaxed">
                <div className="flex items-center gap-2 text-emerald-900 font-bold text-base">
                  <HeartHandshake className="w-5 h-5 text-emerald-700" />
                  Impact across Katari Municipality & Koshi Province
                </div>
                <p>
                  Triveni Secondary School does not exist inside a vacuum. Our student researchers regularly step outside 
                  the campus gates to assist local farming households throughout Katari Ward 1 to 14.
                </p>
                <div className="space-y-2 pt-2 border-t border-gray-100">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Free Soil Testing Drives:</strong> Students run seasonal mobile N-P-K & pH testing clinics providing local farmers with fertilizer adjustment guidelines.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Bio-Pesticide Awareness:</strong> Demonstrating safe preparation of natural botanical extracts (Jholmal) to minimize toxic synthetic pesticide residue in vegetables.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Quality Seedling Supply:</strong> Triveni nursery produces thousands of healthy marigold, tomato, and chilli saplings distributed to local cooperatives at subsidized rates.</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
