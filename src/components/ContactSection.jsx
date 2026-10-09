import React, { useState } from "react";
import { 
  Phone, Mail, MapPin, Clock, Send, CheckCircle2, 
  Building2, UserCheck, ShieldCheck, Sparkles, MessageSquare
} from "lucide-react";
import { SCHOOL_INFO } from "../data/schoolData";

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Admission Inquiry (Plant Science)",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate swift interactive feedback
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      // Open user's email client as secondary protocol
      const mailto = `mailto:${SCHOOL_INFO.email}?subject=${encodeURIComponent(formState.subject)}&body=${encodeURIComponent(
        `Name: ${formState.name}\nPhone: ${formState.phone}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
      )}`;
      
      // Delay mailto slightly so feedback is clear
      setTimeout(() => {
        window.location.href = mailto;
      }, 700);
    }, 600);
  };

  return (
    <section id="contact" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-900 border border-emerald-200/80 mb-3">
            <MessageSquare className="w-4 h-4 text-emerald-700" />
            <span>Connect & Inquiry Desk</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-emerald-950 tracking-tight">
            Contact Triveni Secondary School
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-600 leading-relaxed">
            Have questions regarding Class 9–12 admissions, technical curricula, OJT partnerships, 
            or campus tours? Reach out to our administration and department desks.
          </p>
        </div>

        {/* 2-Column Layout: Left Contact Info & Map | Right Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column (5 Cols) - Contact Directory & Map */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Cards */}
            <div className="glass-panel rounded-3xl p-6 border border-emerald-100 shadow-xl space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-800 border-b border-gray-100 pb-2">
                Official Directory
              </h3>

              <div className="flex items-start gap-3.5 text-xs">
                <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">Campus Address</div>
                  <div className="text-gray-600">{SCHOOL_INFO.address}</div>
                  <div className="text-[11px] text-gray-400 mt-0.5">Katari Ward No. 4, Udayapur District, Nepal</div>
                </div>
              </div>

              <div className="flex items-start gap-3.5 text-xs">
                <div className="w-9 h-9 rounded-xl bg-lime-100 text-lime-800 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">Telephone Lines</div>
                  <a href={`tel:${SCHOOL_INFO.phone}`} className="text-emerald-800 font-semibold block hover:underline">
                    Office: {SCHOOL_INFO.phone}
                  </a>
                  <span className="text-[11px] text-gray-500">Helpline: {SCHOOL_INFO.altPhone}</span>
                </div>
              </div>

              <div className="flex items-start gap-3.5 text-xs">
                <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">Electronic Mail</div>
                  <a href={`mailto:${SCHOOL_INFO.email}`} className="text-emerald-800 font-semibold block hover:underline">
                    {SCHOOL_INFO.email}
                  </a>
                  <a href={`mailto:${SCHOOL_INFO.deptEmail}`} className="text-[11px] text-gray-500 block hover:underline">
                    {SCHOOL_INFO.deptEmail}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5 text-xs">
                <div className="w-9 h-9 rounded-xl bg-gray-100 text-gray-800 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">Administrative Hours</div>
                  <div className="text-gray-600">{SCHOOL_INFO.officeHours}</div>
                  <div className="text-[11px] text-gray-400">Closed on Saturdays & National Holidays</div>
                </div>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="rounded-3xl overflow-hidden shadow-lg border border-emerald-100 bg-white">
              <div className="p-3 bg-emerald-900 text-white text-xs font-bold flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-lime-400" />
                  <span>Katari-4, Udayapur, Koshi Province, Nepal</span>
                </span>
                <span className="text-[10px] text-emerald-300">Live Map</span>
              </div>
              <div className="aspect-[16/10] w-full bg-emerald-50">
                <iframe
                  title="Triveni Secondary School Katari Udayapur Map"
                  src="https://maps.google.com/maps?q=Katari-4,+Udayapur,+Nepal&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          {/* Right Column (7 Cols) - Glassmorphism Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-emerald-100 shadow-xl relative overflow-hidden">
              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                  Direct Department Messenger
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-emerald-950 mt-1">
                  Send an Inquiry to the Academic Desk
                </h3>
                <p className="text-xs text-gray-600 mt-1">
                  Fill in your details below. Our academic counselors will respond within one business day.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3 animate-fadeIn">
                  <div className="w-14 h-14 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto shadow-lg">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold text-emerald-950">
                    Thank You, {formState.name}!
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed max-w-md mx-auto">
                    Your inquiry has been formulated. If your email application did not open automatically, 
                    please send your inquiry directly to <strong>{SCHOOL_INFO.email}</strong>.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormState({
                        name: "",
                        email: "",
                        phone: "",
                        subject: "Admission Inquiry (Plant Science)",
                        message: ""
                      });
                    }}
                    className="mt-4 px-5 py-2.5 rounded-xl bg-emerald-800 hover:bg-emerald-700 text-white text-xs font-bold transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">
                        Full Name <span className="text-emerald-700">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ramesh Karki"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl text-xs bg-white border border-gray-200 focus:outline-none focus:border-emerald-600 shadow-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">
                        Email Address <span className="text-emerald-700">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. ramesh@example.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl text-xs bg-white border border-gray-200 focus:outline-none focus:border-emerald-600 shadow-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">
                        Contact Phone / Mobile
                      </label>
                      <input
                        type="tel"
                        placeholder="e.g. 98XXXXXXXX"
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl text-xs bg-white border border-gray-200 focus:outline-none focus:border-emerald-600 shadow-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">
                        Inquiry Subject <span className="text-emerald-700">*</span>
                      </label>
                      <select
                        value={formState.subject}
                        onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl text-xs bg-white border border-gray-200 focus:outline-none focus:border-emerald-600 shadow-sm"
                      >
                        <option>Admission Inquiry (Plant Science)</option>
                        <option>Class 9 Technical Stream Eligibility</option>
                        <option>Class 11/12 NEB Plant Science</option>
                        <option>OJT Field Attachment Partnership</option>
                        <option>Soil Testing & Advisory Service</option>
                        <option>General Administration Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      Message & Questions <span className="text-emerald-700">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Please describe your query regarding Triveni Secondary School Plant Science program..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl text-xs bg-white border border-gray-200 focus:outline-none focus:border-emerald-600 shadow-sm resize-y"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-800 to-green-700 hover:from-emerald-700 hover:to-green-600 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/15 transition-all disabled:opacity-50 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Formulating Message...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Send Official Inquiry</span>
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-gray-400 text-center mt-2">
                    Official privacy guarantee: Your contact information is used strictly for school advisory purposes.
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
