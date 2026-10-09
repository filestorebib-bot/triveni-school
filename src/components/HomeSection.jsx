import React, { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  GraduationCap,
  Leaf,
  Search,
  Sprout,
  Users,
  Phone,
  Mail,
  MapPin,
  ChevronLeft,
  ChevronRight,
  Quote,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import {
  SCHOOL_INFO,
  HERO_CAROUSEL_IMAGES,
  CORE_FOCUS_AREAS,
  ALUMNI_TESTIMONIALS,
  TEACHERS_LIST,
} from "../data/schoolData";

const DEFAULT_SCHOOL = {
  name: "Triveni Secondary School",
  department: "Department of Plant Science",
  address: "Katari-4, Udayapur, Koshi Province, Nepal",
  phone: "035-450-154",
  email: "",
};

const DEFAULT_SLIDES = [
  {
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2000&q=85",
    title: "Growing Knowledge, Growing Futures",
    subtitle:
      "Practical agricultural education for a greener and more sustainable future.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?auto=format&fit=crop&w=2000&q=85",
    title: "Learning Beyond the Classroom",
    subtitle:
      "Building skills through practical learning, field experience and innovation.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=2000&q=85",
    title: "Cultivating a Better Tomorrow",
    subtitle:
      "Preparing students to contribute to agriculture, communities and the environment.",
  },
];

const DEFAULT_FOCUS_AREAS = [
  {
    title: "Plant Science",
    description:
      "Understand plant growth, crop production and the science behind healthy plants.",
    icon: Sprout,
  },
  {
    title: "Practical Learning",
    description:
      "Connect classroom concepts with hands-on activities and field experience.",
    icon: BookOpen,
  },
  {
    title: "Sustainable Agriculture",
    description:
      "Explore responsible farming practices that support people and the environment.",
    icon: Leaf,
  },
  {
    title: "Student Development",
    description:
      "Develop teamwork, problem-solving skills, confidence and leadership.",
    icon: GraduationCap,
  },
];

const DEFAULT_TESTIMONIALS = [
  {
    name: "Our Students",
    role: "Student Community",
    quote:
      "Practical learning helps us understand how classroom knowledge can be applied in real agricultural settings.",
  },
  {
    name: "Our Alumni",
    role: "Alumni Community",
    quote:
      "The knowledge and skills developed during our studies continue to guide us in our future work.",
  },
];

const DEFAULT_TEACHERS = [];

const getText = (value, fallback = "") =>
  typeof value === "string" && value.trim() ? value : fallback;

const getImageUrl = (item) => {
  if (typeof item === "string") return item;

  return (
    item?.image ||
    item?.imageUrl ||
    item?.src ||
    item?.url ||
    item?.photo ||
    ""
  );
};

const getSlideTitle = (item, fallback) =>
  item?.title || item?.heading || fallback;

const getSlideSubtitle = (item, fallback) =>
  item?.subtitle || item?.description || item?.text || fallback;

function SectionHeading({ eyebrow, title, description, centered = true }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className={`mb-10 max-w-3xl ${
        centered ? "mx-auto text-center" : "text-left"
      }`}
    >
      {eyebrow && (
        <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-emerald-800">
          <Leaf size={14} />
          {eyebrow}
        </span>
      )}

      <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  );
}

function GlassCard({ children, className = "" }) {
  return (
    <div
      className={`rounded-3xl border border-white/70 bg-white/80 shadow-[0_18px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl ${className}`}
    >
      {children}
    </div>
  );
}

function HeroSlider({ slides, schoolName, department }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  const safeSlides = slides.length ? slides : DEFAULT_SLIDES;

  useEffect(() => {
    if (safeSlides.length < 2 || reduceMotion) return undefined;

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % safeSlides.length);
    }, 5500);

    return () => window.clearInterval(interval);
  }, [safeSlides.length, reduceMotion]);

  useEffect(() => {
    if (activeIndex >= safeSlides.length) {
      setActiveIndex(0);
    }
  }, [activeIndex, safeSlides.length]);

  const goToSlide = (index) => {
    setActiveIndex((index + safeSlides.length) % safeSlides.length);
  };

  const currentSlide = safeSlides[activeIndex] || DEFAULT_SLIDES[0];

  return (
    <section className="relative isolate overflow-hidden bg-slate-950">
      <div className="relative min-h-[590px] sm:min-h-[660px] lg:min-h-[730px]">
        {safeSlides.map((slide, index) => {
          const image = getImageUrl(slide);

          return (
            <div
              key={`${image}-${index}`}
              aria-hidden={activeIndex !== index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                activeIndex === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={image || DEFAULT_SLIDES[index % DEFAULT_SLIDES.length].image}
                alt={getSlideTitle(slide, "Agricultural education")}
                className="h-full w-full object-cover"
                loading={index === 0 ? "eager" : "lazy"}
              />
            </div>
          );
        })}

        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/60 to-slate-950/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-transparent to-slate-950/20" />

        <div className="relative mx-auto flex min-h-[590px] max-w-7xl items-center px-5 py-20 sm:min-h-[660px] sm:px-8 lg:min-h-[730px] lg:px-12">
          <div className="max-w-4xl">
            <motion.div
              key={`hero-${activeIndex}`}
              initial={reduceMotion ? false : { opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65 }}
            >
              <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/25 bg-white/10 px-4 py-2.5 text-sm font-medium text-white shadow-lg backdrop-blur-xl sm:px-5">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-400 text-slate-950">
                  <Sprout size={18} />
                </span>
                <span>{schoolName}</span>
              </div>

              <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-emerald-300 sm:text-sm">
                {department}
              </p>

              <h1 className="max-w-4xl text-4xl font-black leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                {getSlideTitle(
                  currentSlide,
                  "Growing Knowledge, Growing Futures"
                )}
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg sm:leading-8">
                {getSlideSubtitle(
                  currentSlide,
                  "Practical education, agricultural innovation and sustainable development."
                )}
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="#about"
                  className="group inline-flex items-center gap-3 rounded-full bg-emerald-400 px-6 py-3.5 font-bold text-slate-950 shadow-lg shadow-emerald-950/20 transition hover:-translate-y-0.5 hover:bg-emerald-300"
                >
                  Discover Our School
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>

                <a
                  href="#focus-areas"
                  className="inline-flex items-center gap-3 rounded-full border border-white/40 bg-white/10 px-6 py-3.5 font-semibold text-white backdrop-blur-xl transition hover:bg-white/20"
                >
                  Explore Plant Science
                  <ArrowUpRight size={18} />
                </a>
              </div>
            </motion.div>
          </div>

          <div className="absolute bottom-8 left-5 right-5 flex items-center justify-between sm:left-8 sm:right-8 lg:left-12 lg:right-12">
            <div className="flex items-center gap-2">
              {safeSlides.map((slide, index) => (
                <button
                  key={`dot-${index}`}
                  type="button"
                  aria-label={`Show slide ${index + 1}`}
                  aria-pressed={activeIndex === index}
                  onClick={() => goToSlide(index)}
                  className={`h-2.5 rounded-full transition-all ${
                    activeIndex === index
                      ? "w-10 bg-emerald-400"
                      : "w-2.5 bg-white/60 hover:bg-white"
                  }`}
                />
              ))}
              <span className="ml-3 text-sm font-medium text-white/80">
                {String(activeIndex + 1).padStart(2, "0")} /{" "}
                {String(safeSlides.length).padStart(2, "0")}
              </span>
            </div>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => goToSlide(activeIndex - 1)}
                aria-label="Previous slide"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-xl transition hover:bg-white/25"
              >
                <ChevronLeft size={21} />
              </button>

              <button
                type="button"
                onClick={() => goToSlide(activeIndex + 1)}
                aria-label="Next slide"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-xl transition hover:bg-white/25"
              >
                <ChevronRight size={21} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LeadershipCard({ title, person, fallbackName, accent = "emerald" }) {
  const name = getText(
    person?.name || person?.fullName,
    fallbackName
  );

  const designation = getText(
    person?.designation || person?.position || person?.role,
    title
  );

  const photo =
    person?.image ||
    person?.photo ||
    person?.photoUrl ||
    person?.imageUrl ||
    "";

  const phone = person?.phone || person?.contact || "";
  const email = person?.email || "";

  const accentClass =
    accent === "blue"
      ? "from-blue-500 to-cyan-400"
      : "from-emerald-500 to-teal-400";

  return (
    <GlassCard className="group h-full overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(15,23,42,0.12)]">
      <div className={`h-1.5 bg-gradient-to-r ${accentClass}`} />

      <div className="p-6 sm:p-7">
        <div className="mb-6 flex items-center gap-4">
          <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-2xl bg-slate-100 ring-4 ring-white shadow-md sm:h-28 sm:w-28">
            {photo ? (
              <img
                src={photo}
                alt={name}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                loading="lazy"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-emerald-50 to-blue-50 text-emerald-700">
                <Users size={34} />
              </div>
            )}
          </div>

          <div className="min-w-0">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-emerald-700">
              {title}
            </p>
            <h3 className="text-xl font-extrabold leading-snug text-slate-900 sm:text-2xl">
              {name}
            </h3>
            <p className="mt-1 text-sm leading-6 text-slate-500">
              {designation}
            </p>
          </div>
        </div>

        {person?.qualification && (
          <p className="mb-4 text-sm leading-6 text-slate-600">
            {person.qualification}
          </p>
        )}

        {person?.message && (
          <p className="mb-5 text-sm leading-7 text-slate-600">
            “{person.message}”
          </p>
        )}

        <div className="space-y-3 border-t border-slate-100 pt-5">
          {phone && (
            <a
              href={`tel:${String(phone).replace(/[^\d+]/g, "")}`}
              className="flex items-center gap-3 text-sm text-slate-600 transition hover:text-emerald-700"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                <Phone size={16} />
              </span>
              <span>{phone}</span>
            </a>
          )}

          {email && (
            <a
              href={`mailto:${email}`}
              className="flex min-w-0 items-center gap-3 text-sm text-slate-600 transition hover:text-emerald-700"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                <Mail size={16} />
              </span>
              <span className="break-all">{email}</span>
            </a>
          )}

          {!phone && !email && (
            <p className="text-sm text-slate-400">
              School leadership and academic guidance
            </p>
          )}
        </div>
      </div>
    </GlassCard>
  );
}

function HomeSection() {
  const school = SCHOOL_INFO || DEFAULT_SCHOOL;

  const slides =
    Array.isArray(HERO_CAROUSEL_IMAGES) &&
    HERO_CAROUSEL_IMAGES.length > 0
      ? HERO_CAROUSEL_IMAGES
      : DEFAULT_SLIDES;

  const focusAreas =
    Array.isArray(CORE_FOCUS_AREAS) &&
    CORE_FOCUS_AREAS.length > 0
      ? CORE_FOCUS_AREAS
      : DEFAULT_FOCUS_AREAS;

  const testimonials =
    Array.isArray(ALUMNI_TESTIMONIALS) &&
    ALUMNI_TESTIMONIALS.length > 0
      ? ALUMNI_TESTIMONIALS
      : DEFAULT_TESTIMONIALS;

  const teachers = Array.isArray(TEACHERS_LIST)
    ? TEACHERS_LIST
    : DEFAULT_TEACHERS;

  const [searchTerm, setSearchTerm] = useState("");
  const reduceMotion = useReducedMotion();

  const principal =
    school.principal ||
    school.principalInfo ||
    school.leadership?.principal ||
    {};

  const coordinator =
    school.coordinator ||
    school.coordinatorInfo ||
    school.leadership?.coordinator ||
    {};

  const principalName = getText(
    principal.name,
    "Gyanendra Bahadur Karki"
  );

  const coordinatorName = getText(
    coordinator.name,
    "Kailash Rayamajhi"
  );

  const filteredTeachers = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    if (!query) return teachers.slice(0, 4);

    return teachers
      .filter((teacher) => {
        const searchableText = [
          teacher.name,
          teacher.fullName,
          teacher.designation,
          teacher.subject,
          teacher.department,
          teacher.qualification,
        ]
          .filter(Boolean)
          .join(" ")
          .toLowerCase();

        return searchableText.includes(query);
      })
      .slice(0, 8);
  }, [teachers, searchTerm]);

  const schoolName = getText(
    school.name || school.schoolName,
    DEFAULT_SCHOOL.name
  );

  const department = getText(
    school.department || school.subtitle,
    DEFAULT_SCHOOL.department
  );

  return (
    <main className="min-h-screen overflow-hidden bg-[#f7faf9] text-slate-800">
      {/* HERO SLIDER */}
      <HeroSlider
        slides={slides}
        schoolName={schoolName}
        department={department}
      />

      {/* QUICK INFORMATION */}
      <section className="relative z-10 mx-auto -mt-1 max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid gap-4 rounded-b-3xl border border-white/80 bg-white/85 p-5 shadow-[0_20px_70px_rgba(15,23,42,0.08)] backdrop-blur-2xl sm:grid-cols-3 sm:p-7">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
              <MapPin size={22} />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Our Location
              </p>
              <p className="mt-1 text-sm font-semibold text-slate-800">
                {getText(school.address, DEFAULT_SCHOOL.address)}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 border-slate-100 sm:border-l sm:pl-6">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
              <Phone size={22} />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Contact Us
              </p>
              <a
                href={`tel:${String(
                  getText(school.phone, DEFAULT_SCHOOL.phone)
                ).replace(/[^\d+]/g, "")}`}
                className="mt-1 block text-sm font-semibold text-slate-800 hover:text-emerald-700"
              >
                {getText(school.phone, DEFAULT_SCHOOL.phone)}
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4 border-slate-100 sm:border-l sm:pl-6">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-50 text-amber-700">
              <Sprout size={22} />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Our Department
              </p>
              <p className="mt-1 text-sm font-semibold text-slate-800">
                {department}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: -25 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.17em] text-emerald-800">
              <Leaf size={15} />
              Welcome to Triveni
            </span>

            <h2 className="text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Education that grows with the world.
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600">
              Welcome to {schoolName}, {department}. We aim to connect
              academic learning with practical skills, agricultural
              knowledge and responsible environmental practices.
            </p>

            <p className="mt-4 text-base leading-8 text-slate-600">
              Our focus is to help students develop the knowledge,
              confidence and practical understanding needed to contribute
              to agriculture, their communities and a sustainable future.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/about"
                className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-emerald-800"
              >
                Learn About Us
                <ArrowRight size={17} />
              </a>

              <a
                href="/programs"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3.5 text-sm font-bold text-slate-700 transition hover:border-emerald-300 hover:text-emerald-800"
              >
                Our Programs
                <ArrowUpRight size={17} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: 25 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute -left-5 -top-5 h-32 w-32 rounded-full bg-emerald-200/60 blur-3xl" />
            <div className="absolute -bottom-5 -right-5 h-32 w-32 rounded-full bg-blue-200/60 blur-3xl" />

            <GlassCard className="relative overflow-hidden p-3 sm:p-4">
              <img
                src={getImageUrl(slides[1]) || DEFAULT_SLIDES[1].image}
                alt="Agriculture and practical education"
                className="h-[300px] w-full rounded-2xl object-cover sm:h-[420px]"
                loading="lazy"
              />

              <div className="absolute bottom-7 left-7 right-7 rounded-2xl border border-white/60 bg-white/85 p-5 shadow-xl backdrop-blur-xl sm:bottom-9 sm:left-9 sm:right-9">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-500 text-white">
                    <Sprout size={25} />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-slate-900">
                      Knowledge into Practice
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      Learning, innovation and sustainable agriculture.
                    </p>
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* PRINCIPAL AND COORDINATOR */}
      <section
        id="leadership"
        className="relative overflow-hidden bg-gradient-to-br from-slate-100 via-white to-emerald-50 px-5 py-20 sm:px-8 sm:py-24 lg:px-12"
      >
        <div className="pointer-events-none absolute -right-24 top-0 h-80 w-80 rounded-full bg-emerald-200/30 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Our Leadership"
            title="Guided by experience. Driven by purpose."
            description="Meet the people supporting our academic environment, student development and institutional progress."
          />

          <div className="grid gap-6 md:grid-cols-2">
            <LeadershipCard
              title="Principal"
              person={principal}
              fallbackName={principalName}
              accent="blue"
            />

            <LeadershipCard
              title="Department Coordinator"
              person={coordinator}
              fallbackName={coordinatorName}
              accent="emerald"
            />
          </div>
        </div>
      </section>

      {/* FOCUS AREAS */}
      <section
        id="focus-areas"
        className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="What We Focus On"
            title="Building skills for a greener future."
            description="A learning environment that brings together scientific understanding, practical experience and responsible development."
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {focusAreas.map((area, index) => {
              const Icon =
                area.iconComponent ||
                area.Icon ||
                area.icon ||
                [
                  Sprout,
                  BookOpen,
                  Leaf,
                  GraduationCap,
                ][index % 4];

              const SafeIcon =
                typeof Icon === "function" ? Icon : Sprout;

              return (
                <motion.div
                  key={area.id || area.title || index}
                  initial={
                    reduceMotion ? false : { opacity: 0, y: 20 }
                  }
                  whileInView={
                    reduceMotion ? undefined : { opacity: 1, y: 0 }
                  }
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.08,
                  }}
                >
                  <GlassCard className="group h-full p-6 transition duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-[0_24px_60px_rgba(16,185,129,0.12)] sm:p-7">
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700 transition duration-300 group-hover:bg-emerald-500 group-hover:text-white">
                      <SafeIcon size={26} />
                    </div>

                    <h3 className="text-xl font-extrabold text-slate-900">
                      {area.title || area.name || "Learning"}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {area.description ||
                        area.details ||
                        "Develop knowledge and practical skills for the future."}
                    </p>

                    <div className="mt-6 flex items-center gap-2 text-sm font-bold text-emerald-700">
                      Learn and grow
                      <ArrowRight
                        size={16}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </div>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TEACHER SEARCH */}
      <section
        id="teachers"
        className="bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Our Academic Team"
            title="Meet our teachers."
            description="Explore the academic team supporting teaching, learning and student development."
          />

          <div className="mx-auto mb-9 max-w-xl">
            <label htmlFor="teacher-search" className="sr-only">
              Search teachers
            </label>

            <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 transition focus-within:border-emerald-400 focus-within:ring-4 focus-within:ring-emerald-100">
              <Search className="shrink-0 text-slate-400" size={21} />

              <input
                id="teacher-search"
                type="search"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search by teacher name, subject or role..."
                className="w-full bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-400"
              />
            </div>
          </div>

          {filteredTeachers.length > 0 ? (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {filteredTeachers.map((teacher, index) => {
                const name = getText(
                  teacher.name || teacher.fullName,
                  "Academic Team Member"
                );

                const photo =
                  teacher.image ||
                  teacher.photo ||
                  teacher.imageUrl ||
                  teacher.photoUrl ||
                  "";

                return (
                  <GlassCard
                    key={teacher.id || teacher.email || `${name}-${index}`}
                    className="overflow-hidden transition hover:-translate-y-1"
                  >
                    <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                      {photo ? (
                        <img
                          src={photo}
                          alt={name}
                          loading="lazy"
                          className="h-full w-full object-cover transition duration-500 hover:scale-105"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center bg-gradient-to-br from-emerald-50 to-blue-50">
                          <Users size={45} className="text-emerald-700" />
                        </div>
                      )}
                    </div>

                    <div className="p-5">
                      <h3 className="font-extrabold text-slate-900">
                        {name}
                      </h3>

                      <p className="mt-1 text-sm text-emerald-700">
                        {teacher.designation ||
                          teacher.position ||
                          teacher.role ||
                          "Teacher"}
                      </p>

                      {teacher.subject && (
                        <p className="mt-2 text-sm text-slate-500">
                          {teacher.subject}
                        </p>
                      )}

                      {teacher.email && (
                        <a
                          href={`mailto:${teacher.email}`}
                          className="mt-4 inline-flex items-center gap-2 break-all text-xs font-semibold text-slate-600 hover:text-emerald-700"
                        >
                          <Mail size={14} />
                          {teacher.email}
                        </a>
                      )}
                    </div>
                  </GlassCard>
                );
              })}
            </div>
          ) : (
            <div className="rounded-3xl border border-dashed border-slate-300 bg-slate-50 px-6 py-12 text-center">
              <Users className="mx-auto mb-4 text-slate-400" size={35} />

              <h3 className="text-lg font-bold text-slate-800">
                {teachers.length === 0
                  ? "Academic team information will be added soon."
                  : "No matching teachers found."}
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                {teachers.length === 0
                  ? "Teacher profiles can be managed in the school data file."
                  : "Try another name, subject or designation."}
              </p>
            </div>
          )}

          <div className="mt-9 text-center">
            <a
              href="/about"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 font-bold text-slate-700 transition hover:border-emerald-300 hover:text-emerald-800"
            >
              Learn More About Our Team
              <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>

      {/* STUDENT AND ALUMNI VOICES */}
      <section
        id="testimonials"
        className="relative overflow-hidden bg-slate-950 px-5 py-20 sm:px-8 sm:py-24 lg:px-12"
      >
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-emerald-500/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-blue-500/15 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.17em] text-emerald-300">
              <Quote size={14} />
              Voices of Our Community
            </span>

            <h2 className="text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
              Learning experiences that matter.
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-300">
              The value of education is reflected in the experiences,
              confidence and growth of our learning community.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {testimonials.slice(0, 4).map((item, index) => (
              <motion.div
                key={item.id || item.name || index}
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={
                  reduceMotion ? undefined : { opacity: 1, y: 0 }
                }
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <div className="h-full rounded-3xl border border-white/10 bg-white/[0.07] p-7 backdrop-blur-xl transition hover:bg-white/[0.1] sm:p-8">
                  <Quote size={28} className="mb-5 text-emerald-400" />

                  <p className="text-base leading-8 text-slate-200">
                    “
                    {item.quote ||
                      item.testimonial ||
                      item.message ||
                      "Education provides the foundation for learning, growth and future opportunities."}
                    ”
                  </p>

                  <div className="mt-7 border-t border-white/10 pt-5">
                    <h3 className="font-bold text-white">
                      {item.name || "School Community"}
                    </h3>
                    <p className="mt-1 text-sm text-emerald-300">
                      {item.role || item.designation || "Our Community"}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-emerald-700 via-emerald-800 to-slate-900 px-6 py-12 shadow-2xl sm:px-12 sm:py-16 lg:px-16">
          <div className="pointer-events-none absolute -right-10 -top-24 h-72 w-72 rounded-full border-[45px] border-white/5" />
          <div className="pointer-events-none absolute -bottom-36 right-1/3 h-72 w-72 rounded-full bg-emerald-400/15 blur-3xl" />

          <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-emerald-100">
                <GraduationCap size={16} />
                Your Future Starts Here
              </span>

              <h2 className="max-w-3xl text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
                Ready to grow your knowledge and shape the future?
              </h2>

              <p className="mt-4 max-w-2xl text-base leading-7 text-emerald-50/90">
                Explore our programs, discover learning opportunities and
                connect with {schoolName}.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 lg:flex-col">
              <a
                href="/programs"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 font-bold text-emerald-800 transition hover:-translate-y-0.5 hover:bg-emerald-50"
              >
                Explore Programs
                <ArrowRight size={18} />
              </a>

              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/35 bg-white/10 px-6 py-3.5 font-bold text-white backdrop-blur-xl transition hover:bg-white/20"
              >
                Contact Our School
                <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default HomeSection;
```
