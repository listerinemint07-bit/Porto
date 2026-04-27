import React from 'react';
import './App.css';

// Import semua assets
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
import ProfileImg from './assets/meGrayscale.png';
import AboutImg from './assets/MeColour.png';

export default function App() {
  return (
    <div className="container">
      <header className="hero">
        <div className="hero-left">
          <h1>Let's See My<br />Portofolio</h1>
          <p className="hero-subtitle">UI/UX Designer | Frontend Developer | Interaction Design</p>
          
          <div className="contact-me">
            <h2>Contact Me</h2>
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/muhammad-faruq-898b8b289/?locale=en" target="_blank" rel="noopener noreferrer">
                <img src={LinkedinIcon} alt="LinkedIn" />
              </a>
              <a href="https://www.instagram.com/mhmfaruq._/" target="_blank" rel="noopener noreferrer">
                <img src={InstagramIcon} alt="Instagram" />
              </a>
              <a href="mailto:mhmmadfarq7@gmail.com">
                <img src={GmailIcon} alt="Gmail" />
              </a>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="profile-card">
            <img src={ProfileImg} alt="Muhammad Faruq B. N" className="profile-img" />
            <div className="profile-info">
              <div className="info-row"><span className="label">Name</span><span>: Muhammad Faruq B. N</span></div>
              <div className="info-row"><span className="label">Role</span><span>: Designer and Frontend</span></div>
              <div className="info-row"><span className="label">Location</span><span>: Malang City, East Java</span></div>
              <div className="info-row"><span className="label">Email</span><span>: Mhmmadfarq7@gmail.com</span></div>
            </div>
          </div>
        </div>
      </header>

      <section className="about-section">
        <div className="about-text">
          <h2>Who Am I ?</h2>
          <p className="greeting">Hi, I'm Faruq</p>
          <p>I'm an Information Technology and Business student who found the intersection between data and aesthetics. For me, design is a canvas one that channels my deep love for literature, especially writing and reading. Years spent with words have taught me how much composition, layout, and typography matter in delivering a message that truly lands.</p>
          <p>In my work, I don't just chase beautiful visuals. I care just as much about user comfort and technical performance. I believe great design lives at the balance between functionality and feeling. When I'm away from the screen, you'll find me hiking, swimming, or simply soaking in nature chasing the kind of inspiration that only the outdoors can give.</p>
          <div className="about-handle">
            <p><span className="icon-ig">@</span> : Mhmfaruq_</p>
            <p><span className="icon-li">in</span> : Muhammad Faruq</p> 
            <div className="dots"><span></span><span></span></div>
          </div>
        </div>
        <div className="about-card">
          <div className="about-card-inner">
            <img src={AboutImg} alt="Faruq" />
            <h3>Faruq</h3>
            <p>Designer</p>
            <div className="about-tags">
              <span>UI/UX</span>
              <span>Frontend</span>
            </div>
          </div>
        </div>
      </section>

      <section className="tech-stack">
        <h3>Tech Stack</h3>
        <div className="tech-grid">
          <div className="tech-item"><img src={ReactIcon} alt="React" /><span>React</span></div>
          <div className="tech-item"><img src={NextjsIcon} alt="Next.js" /><span>Next.js</span></div>
          <div className="tech-item"><img src={FlutterIcon} alt="Flutter" /><span>Flutter</span></div>
          <div className="tech-item"><img src={GithubIcon} alt="Github" /><span>Github</span></div>
          <div className="tech-item"><img src={FigmaIcon} alt="Figma" /><span>Figma</span></div>
          <div className="tech-item"><img src={LaravelIcon} alt="Laravel" /><span>Laravel</span></div>
          <div className="tech-item"><img src={GolangIcon} alt="Golang" /><span>Golang</span></div>
        </div>
      </section>

      <section className="projects">
        <div className="projects-header">
          <h2>Featured Projects</h2>
          <p>Beberapa karya terbaik yang telah saya kerjakan</p>
        </div>
        
        <div className="projects-grid">
          <div className="project-card purple">
            <h3>Food Ordering System Eat.o</h3>
            <span className="badge">PBL Project</span>
            <div className="tags"><span>Mobile</span><span>Frontend</span><span>UI/UX Design</span></div>
            <p>Is a mobile-first emergency app that enables users to send an SOS, share live location, and alert contacts instantly. As the UI/UX Designer, I focused on creating a clear, fast, and accessible interface.</p>
            <div className="tools"><span>Flutter</span><span>Figma</span><span>Laravel</span></div>
            <button className="btn-details">View Details</button>
          </div>

          <div className="project-card green">
            <h3>Mental Health Web Vimind</h3>
            <span className="badge">PBL Project</span>
            <div className="tags"><span>UI/UX Design</span><span>Frontend</span></div>
            <p>Mental health is often invisible. Vimind helps users recognize the signs early — through a guided questionnaire that predicts potential mental health conditions and delivers personalized.</p>
            <div className="tools"><span>Golang</span><span>React</span><span>Figma</span></div>
            <button className="btn-details">View Details</button>
          </div>

          <div className="project-card brown">
            <h3>Emergency Call Savior</h3>
            <span className="badge">PKM - KC</span>
            <div className="tags"><span>UI/UX Design</span><span>Mobile</span></div>
            <p>Is a mobile-first emergency app that enables users to send an SOS, share live location, and alert contacts instantly. As the UI/UX Designer, I focused on creating a clear, fast, and accessible interface.</p>
            <div className="tools"><span>Flutter</span><span>Figma</span></div>
            <button className="btn-details">View Details</button>
          </div>
        </div>
      </section>

    </div>
  );
}