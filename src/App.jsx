import React, { useState } from "react";
import Navbar from "./components/Navbar";
import NoticeTicker from "./components/NoticeTicker";
import HomeSection from "./components/HomeSection";
import AboutSection from "./components/AboutSection";
import ProgramSection from "./components/ProgramSection";
import OjtSection from "./components/OjtSection";
import ClassSyllabusSection from "./components/ClassSyllabusSection";
import NoticesSection from "./components/NoticesSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

// Modals
import DeveloperModal from "./components/DeveloperModal";
import NoticeModal from "./components/NoticeModal";
import ProgramModal from "./components/ProgramModal";
import SyllabusModal from "./components/SyllabusModal";
import ImageLightboxModal from "./components/ImageLightboxModal";

export default function App() {
  const [developerModalOpen, setDeveloperModalOpen] = useState(false);
  const [selectedNotice, setSelectedNotice] = useState(null);
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [selectedGrade, setSelectedGrade] = useState("9");
  const [syllabusModalOpen, setSyllabusModalOpen] = useState(false);
  const [syllabusGrade, setSyllabusGrade] = useState("9");
  const [selectedImage, setSelectedImage] = useState(null);

  const handleOpenSyllabus = (grade = "9") => {
    setSyllabusGrade(grade);
    setSyllabusModalOpen(true);
  };

  const handleSelectGradeFromNav = (grade) => {
    setSelectedGrade(grade);
    const elem = document.getElementById("classes");
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f7faf7] text-gray-900 selection:bg-lime-300 selection:text-emerald-950">
      {/* 1. Header Navigation Bar */}
      <Navbar
        onOpenDeveloper={() => setDeveloperModalOpen(true)}
        onSelectGrade={handleSelectGradeFromNav}
      />

      {/* 2. Dynamic Moving Notice Ticker Bar */}
      <NoticeTicker
        onSelectNotice={(notice) => setSelectedNotice(notice)}
      />

      {/* Main Sections */}
      <main className="flex-1">
        {/* 3A. Home Section: Hero Leadership Grid, Focus Areas, Alumni, Teachers */}
        <HomeSection
          onOpenDeveloper={() => setDeveloperModalOpen(true)}
          onSelectImage={(img) => setSelectedImage(img)}
          onSelectNotice={(notice) => setSelectedNotice(notice)}
        />

        {/* 3B. About Us Section: History, Vision, Mission, Farm Facilities, Community Impact */}
        <AboutSection />

        {/* 3C. Program Section: Plant Science Class 9–12 Cards with Share & Details */}
        <ProgramSection
          onSelectProgram={(prog) => setSelectedProgram(prog)}
          onOpenSyllabus={handleOpenSyllabus}
        />

        {/* 3D. OJT (On-the-Job Training) Section: 10, 11, 12 Guidelines & Field Photo Gallery */}
        <OjtSection
          onSelectImage={(img) => setSelectedImage(img)}
        />

        {/* 3E. Class & Syllabus Section: Interactive Grade Tabs & Matrix */}
        <ClassSyllabusSection
          selectedGrade={selectedGrade}
          onSelectGrade={(g) => setSelectedGrade(g)}
          onOpenSyllabus={handleOpenSyllabus}
        />

        {/* 3F. Notices Section: Filterable Table with In-App Glassmorphic Document Viewer */}
        <NoticesSection
          onSelectNotice={(notice) => setSelectedNotice(notice)}
        />

        {/* 3G. Contact Us Section: Directory, Interactive Map & Glassmorphic Form */}
        <ContactSection />
      </main>

      {/* 4. Footer & Prominent Bibash Lamichhane Developer Attribution */}
      <Footer
        onOpenDeveloper={() => setDeveloperModalOpen(true)}
        onSelectGrade={handleSelectGradeFromNav}
      />

      {/* Modals & In-App Viewers */}
      <DeveloperModal
        isOpen={developerModalOpen}
        onClose={() => setDeveloperModalOpen(false)}
      />

      <NoticeModal
        notice={selectedNotice}
        onClose={() => setSelectedNotice(null)}
      />

      <ProgramModal
        program={selectedProgram}
        onClose={() => setSelectedProgram(null)}
        onOpenSyllabus={handleOpenSyllabus}
      />

      <SyllabusModal
        initialGrade={syllabusGrade}
        isOpen={syllabusModalOpen}
        onClose={() => setSyllabusModalOpen(false)}
      />

      <ImageLightboxModal
        image={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </div>
  );
}
