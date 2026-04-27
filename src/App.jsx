import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BorderGlow from './components/BorderGlow';
import Lanyard from './components/lanyard';
import ShapeGrid from './components/ShapeGrid';
import './App.css';

// Import assets
import LinkedinIcon from './assets/Linkedin.svg';
import InstagramIcon from './assets/Instagram.svg';
import GmailIcon from './assets/Email.svg';
import ReactIcon from './assets/React.svg';
import NextjsIcon from './assets/Next.js.svg';
import FlutterIcon from './assets/Flutter.svg';
import GithubIcon from './assets/Github.svg';
import FigmaIcon from './assets/Figma.svg';
import LaravelIcon from './assets/laravel.svg';
import GolangIcon from './assets/golang.svg';
import LanyardJualan from './assets/LanyardJualan.svg';
import LanyardOrganisasi from './assets/LanyardOrganisasi.svg';
import LanyardWho from './assets/LanyardWho.svg';
import AboutImg from './assets/MeColour.png';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } }
};

const techStack = [
  { name: "React", icon: ReactIcon },
  { name: "Next.js", icon: NextjsIcon },
  { name: "Flutter", icon: FlutterIcon },
  { name: "Github", icon: GithubIcon },
  { name: "Figma", icon: FigmaIcon },
  { name: "Laravel", icon: LaravelIcon },
  { name: "Golang", icon: GolangIcon }
];

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselData = [
    {
      id: 0,
      leftContent: (
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-4xl font-semibold">Who Am I ?</h2>
            <p className="text-xl font-medium text-white/90">Hi, I'm Faruq</p>
          </div>
          <div className="space-y-4 text-white/60 leading-relaxed max-w-xl text-sm lg:text-base">
            <p>
              I'm an Information Technology and Business student who found the intersection between data and aesthetics. For me, design is a canvas one that channels my deep love for literature, especially writing and reading.
            </p>
            <p>
              In my work, I don't just chase beautiful visuals. I care just as much about user comfort and technical performance.
            </p>
          </div>
          <div className="pt-4 border-t border-white/10 w-fit">
            <p className="text-white/80 text-sm mb-1"><span className="text-[#E4405F] font-bold mr-2">@</span>: Mhmfaruq_</p>
            <p className="text-white/80 text-sm"><span className="text-[#0077B5] font-bold mr-2">in</span>: Muhammad Faruq</p>
          </div>
        </div>
      ),
      cardImage: LanyardWho,
    },
    {
      id: 1,
      leftContent: (
        <div className="space-y-6 pr-4">
          <div>
            <h3 className="text-xl font-semibold text-white">Kopi Rempah — Product Development</h3>
            <p className="text-[11px] text-white/50 mb-2">Spiced Coffee · Process Engineering</p>
            <p className="text-sm text-white/70 leading-relaxed">
              Developed A Spiced Coffee Product From Scratch, Focusing On Process Optimization.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white">Ramadan Bazaar — Food Stall</h3>
            <p className="text-sm text-white/70 leading-relaxed mb-2">
              Managed A Food Stall At A Ramadan Bazaar, Handling Cash Flow Recording.
            </p>
            <p className="text-white/80 text-xs flex items-center gap-1">
              <span className="text-[#E4405F] font-bold">@</span>: Njajan.Innn
            </p>
          </div>
        </div>
      ),
      cardImage: LanyardJualan,
    },
    {
      id: 2,
      leftContent: (
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-1">Himpunan Mahasiswa Teknologi Informasi</h3>
            <p className="text-xs text-white/60 mb-4">Organization · Department Of Human Resource Development</p>
            <p className="text-sm text-white italic underline underline-offset-4 decoration-white/30 mb-6">
              "Leading People Is As Much A Design Challenge As Designing Interfaces."
            </p>
          </div>
        </div>
      ),
      cardImage: LanyardOrganisasi,
    }
  ];

  const activeData = carouselData[currentSlide];

  return (
    <div className="min-h-screen selection:bg-purple-500 selection:text-white relative z-0">
      <div className="fixed inset-0 z-[-2]">
        <ShapeGrid
          speed={0.5}
          squareSize={40}
          direction="diagonal"
          borderColor="#2F293A"
          hoverFillColor="#222"
          shape="square"
          hoverTrailAmount={0}
        />
      </div>

      <div className="mesh-gradient pointer-events-none" />

      <main className="max-w-7xl mx-auto px-6 py-12 lg:py-24 space-y-32 relative z-10">
        {/* HERO SECTION */}
        <section className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div className="space-y-8" initial="initial" animate="animate" variants={staggerContainer}>
            <motion.div variants={fadeInUp} className="space-y-4">
              <h1 className="text-6xl lg:text-8xl font-bold tracking-tight leading-tight">
                Let's See My<br />Portfolio
              </h1>
              <p className="text-lg text-white/60 font-medium tracking-wide">
                UI/UX Designer <span className="mx-2 opacity-30">|</span> Frontend Developer <span className="mx-2 opacity-30">|</span> Interaction Design
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="space-y-4">
              <h3 className="text-3xl font-medium">Contact Me</h3>
              <div className="social-icons">
                <a href="#"><img src={LinkedinIcon} alt="LinkedIn" /></a>
                <a href="#"><img src={InstagramIcon} alt="Instagram" /></a>
                <a href="#"><img src={GmailIcon} alt="Email" /></a>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative max-w-xs mx-auto w-full"
            initial={{ opacity: 0, scale: 0.9, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 via-purple-500 to-rose-500 rounded-[2.5rem] blur-2xl opacity-20 animate-pulse" />
            <div className="relative rounded-[2.5rem] p-5 bg-[#1a1a1a] overflow-hidden shadow-2xl transition-transform hover:-translate-y-2 duration-500 group">
              <img
                src={AboutImg}
                alt="Profile"
                className="w-full max-h-[320px] object-cover object-top rounded-2xl mb-6 grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="space-y-2 font-medium">
                <ProfileRow label="Name" value="Muhammad Faruq B. N" />
                <ProfileRow label="Role" value="Designer and Frontend" />
                <ProfileRow label="Location" value="Malang City, East Java" />
                <ProfileRow label="Email" value="Mhmmadfarq7@gmail.com" />
              </div>
            </div>
          </motion.div>
        </section>

        {/* ABOUT SECTION */}
        <section className="glass-card rounded-[3rem] p-8 lg:p-12 relative overflow-hidden bg-[#1a1a1a]">
          <div className="grid lg:grid-cols-[1.5fr_1fr] gap-8 lg:gap-12 items-center relative z-10 min-h-[500px]">
            <div className="h-full flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                >
                  {activeData.leftContent}
                </motion.div>
              </AnimatePresence>
              <div className="flex items-center gap-2 mt-10 z-20 relative">
                {carouselData.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${currentSlide === index ? "w-6 bg-white" : "w-2 bg-white/30 hover:bg-white/50"}`}
                  />
                ))}
              </div>
            </div>
            <div className="relative z-10 w-full h-[500px] flex justify-center items-center cursor-grab active:cursor-grabbing">
              <Lanyard position={[0, 0, 16]} gravity={[0, -40, 0]} cardImage={activeData.cardImage} />
            </div>
          </div>
        </section>

        {/* TECH STACK */}
        <section className="max-w-4xl mx-auto space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-semibold">Tech Stack</h2>
          </div>
          <div className="glass-card rounded-[2.5rem] p-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {techStack.map((tech, idx) => (
              <TechItem key={idx} name={tech.name} icon={tech.icon} />
            ))}
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section className="space-y-16">
          <div className="space-y-3 text-center">
            <h2 className="text-5xl lg:text-6xl font-semibold tracking-tight">Featured Projects</h2>
            <p className="text-white/40 text-lg">Beberapa karya terbaik yang telah saya kerjakan</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1: Eat.o */}
            <BorderGlow
              glowColor="270 80 80"
              colors={['#c084fc', '#a855f7', '#d8b4fe']}
              backgroundColor="#1e1430"
              borderRadius={49}
              className="h-full"
            >
              <ProjectCard
                title="Food Ordering System Eat.o"
                type="PBL Project"
                tags={["Mobile", "Frontend", "UI/UX Design"]}
                desc="A seamless mobile application designed to simplify food discovery and ordering."
                tools={["Flutter", "Figma", "Laravel"]}
                link="https://www.figma.com/design/39DBueaNU4KK7Vgu3WJpup/PROJECT-LAB-MOBILE?node-id=0-1&t=kDh1IuQbtvmaa0f3-1"
                cardClasses="bg-transparent h-full w-full border-none shadow-none"
                badgeClass="bg-purple-500/20 text-purple-200"
              />
            </BorderGlow>

            {/* Card 2: Vimind */}
            <BorderGlow
              glowColor="150 80 80"
              colors={['#34d399', '#10b981', '#6ee7b7']}
              backgroundColor="#06241a"
              borderRadius={49}
              className="h-full"
            >
              <ProjectCard
                title="Mental Health Web Vimind"
                type="PBL Project"
                tags={["UI/UX Design", "Frontend"]}
                desc="Mental health is often invisible. Vimind helps users recognize the signs early."
                tools={["Golang", "React", "Figma"]}
                link="https://www.figma.com/design/X1PngjOjqSZzWtkiuU5FxK/Vimind-PBL?node-id=627-2150&t=FbbEFvRh7ZzrEsuN-1"
                cardClasses="bg-transparent h-full w-full border-none shadow-none"
                badgeClass="bg-emerald-500/20 text-emerald-200"
              />
            </BorderGlow>

            {/* Card 3: Savior */}
            <BorderGlow
              glowColor="35 80 80"
              colors={['#fcd34d', '#f59e0b', '#fef3c7']}
              backgroundColor="#291a13"
              borderRadius={49}
              className="h-full"
            >
              <ProjectCard
                title="Emergency Call Savior"
                type="PKM - KC"
                tags={["UI/UX Design", "Mobile"]}
                desc="Is a mobile-first emergency app that enables users to send an SOS instantly."
                tools={["Flutter", "Figma"]}
                link="https://www.figma.com/design/TsNX7UH2k8WmVe8mF0wAYa/SAVIOR-PKM---KCP?node-id=0-1&t=M2zId0cYVBN36S8j-1"
                cardClasses="bg-transparent h-full w-full border-none shadow-none"
                badgeClass="bg-amber-700/40 text-amber-200"
              />
            </BorderGlow>
          </div>
        </section>
      </main>

      <footer className="py-16 text-center border-t border-white/5 mt-32 relative z-10">
        <p className="text-white/20 text-xs uppercase font-bold tracking-[0.5em]">© 2024 Muhammad Faruq • Made with Passion</p>
      </footer>
    </div>
  );
}

/* --- REUSABLE COMPONENTS --- */

function ProfileRow({ label, value }) {
  return (
    <div className="flex text-[13px] items-baseline text-white/80">
      <span className="w-24 text-white/50 font-normal uppercase tracking-wider">{label}</span>
      <span className="text-white/30 font-normal mr-3">:</span>
      <span className="flex-1 font-semibold">{value}</span>
    </div>
  );
}

function TechItem({ name, icon }) {
  return (
    <motion.div
      whileHover={{ y: -8, backgroundColor: "rgba(255,255,255,0.05)" }}
      className="flex flex-col items-center justify-center p-4 gap-3 rounded-3xl transition-all group cursor-pointer"
    >
      <div className="w-14 h-14 glass-card rounded-2xl flex items-center justify-center group-hover:border-white/20 transition-colors p-3">
        <img src={icon} alt={name} className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-110" />
      </div>
      <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-white/30 group-hover:text-white/80 transition-colors text-center">{name}</span>
    </motion.div>
  );
}

// PERBAIKAN DI SINI: Menambahkan "link" ke props dan membungkus tombol dengan <a>
function ProjectCard({ title, type, tags, desc, tools, link, cardClasses, badgeClass }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`glass-card rounded-[3rem] flex flex-col border-2 transition-all duration-500 overflow-hidden group relative ${cardClasses}`}
    >
      <div className="p-10 space-y-8 flex-grow">
        <div className="space-y-6">
          <h3 className="text-2xl lg:text-3xl font-medium leading-tight group-hover:text-white transition-colors">{title}</h3>
          <div className="flex flex-wrap gap-2">
            <span className={`px-4 py-1 rounded-full text-[11px] font-bold uppercase tracking-widest ${badgeClass}`}>
              {type}
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, idx) => (
              <span key={idx} className="text-[11px] font-medium text-white/50 bg-white/5 px-3 py-1 rounded-full">{tag}</span>
            ))}
          </div>
        </div>
        <p className="text-white/60 text-sm leading-relaxed">{desc}</p>
        <div className="flex flex-wrap gap-2 pt-4">
          {tools.map((t, idx) => (
            <span key={idx} className="text-[10px] uppercase font-bold tracking-widest text-blue-300/70 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">{t}</span>
          ))}
        </div>
      </div>
      
      {/* Bagian Tombol yang Diperbaiki */}
      <div className="p-10 pt-0 mt-auto">
        <a href={link} target="_blank" rel="noopener noreferrer" className="block w-full">
          <button className="w-full glass-card py-4 rounded-[1.5rem] text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-500 group-hover:scale-[1.02]">
            View Details
          </button>
        </a>
      </div>
    </motion.div>
  );
}