import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./styles.css";

const images = {
  portrait: "/profile2.jpeg",
  board:
    "https://images.unsplash.com/photo-1635372722656-389f87a941b7?auto=format&fit=crop&w=1200&q=85",
  classroom:
    "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=85",
  collab:
    "https://images.unsplash.com/photo-1588075592405-d3d4f0846961?auto=format&fit=crop&w=1200&q=85",
};
const equations = [
  "pi = 3.14159",
  "phi = 1.61803",
  "e = 2.71828",
  "Mathematics is the music of reason",
  "sum",
  "root 2",
  "infinity",
  "a2 + b2 = c2",
];

function Ribbon() {
  return (
    <div className="ribbon">
      <div>
        {[...equations, ...equations].map((item, i) => (
          <span key={i}>
            {item}
            <b>*</b>
          </span>
        ))}
      </div>
    </div>
  );
}
function Label({ index, children }) {
  return (
    <div className="label reveal">
      <b>{index}</b>
      <i />
      <span>{children}</span>
    </div>
  );
}

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.12 },
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  const closeMenu = () => setMenuOpen(false);
  return (
    <main>
      <header className="nav">
        <a href="#top" className="wordmark">
          Zeba Khan<span>+</span>
        </a>
        <button
          className="menu"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "x" : "menu"}
        </button>
        <nav className={menuOpen ? "open" : ""}>
          <a onClick={closeMenu} href="#about">
            About
          </a>
          <a onClick={closeMenu} href="#journey">
            Journey
          </a>
          <a onClick={closeMenu} href="#skills">
            Skills
          </a>
          <Link onClick={closeMenu} to="/gallery">
            Activities
          </Link>
          <a onClick={closeMenu} href="#contact">
            Contact &#8599;
          </a>
        </nav>
      </header>
      <section id="top" className="hero grid-bg">
        <div className="geometry">
          <i />
          <i />
          <i />
        </div>
        <div className="hero-inner">
          <div className="hero-copy hero-enter">
            <p className="kicker">
              Primary Mathematics Educator &middot; Est. 2018
            </p>
            <h1>
              Zeba
              <br />
              <em>Khan</em>
            </h1>
            <p className="intro">
              Shaping curious, logical young minds &mdash;
              <br />
              one theorem, one question, one child at a time.
            </p>
            <a className="cta" href="#contact">
              Get in touch <span>&#8599;</span>
            </a>
          </div>
          <figure className="portrait hero-enter">
            <img src={images.portrait} alt="Zeba Khan, mathematics educator" />
          </figure>
        </div>
      </section>
      <Ribbon />
      <section id="about" className="section manifesto">
        <Label index="( 01 )">Teaching manifesto</Label>
        <div className="manifesto-grid reveal">
          <div>
            <h2>
              What I stand
              <br />
              for at the front
              <br />
              of <em>the class.</em>
            </h2>
            <p className="muted">
              A classroom where questions matter more than quick answers.
            </p>
          </div>
          <div className="manifesto-copy">
            <p>
              <strong>Every child can love numbers.</strong>
              <br />I believe mathematics isn't a talent reserved for a few
              &mdash; it's a language every child can speak. My classroom is
              built on patience, curiosity and the quiet thrill of a problem
              finally solved.
            </p>
            <p>
              <strong>Concepts before formulas.</strong>
              <br />
              Before a single formula is memorised, my students learn to see the
              why. We build intuition with stories, shapes and play, so the
              logic feels discovered rather than dictated.
            </p>
            <p>
              <strong>Confidence is the real subject.</strong>
              <br />
              The equations change year to year, but my true goal never does
              &mdash; to send each student forward believing they are capable,
              curious and unafraid of a hard question.
            </p>
            <a href="#contact" className="underlined">
              My teaching philosophy &#8599;
            </a>
          </div>
        </div>
        <div className="image-pair reveal">
          <img
            src={images.board}
            alt="Blackboard with mathematical equations"
          />
          <div className="image-caption">
            The beautiful thing about learning is that nobody can take it away
            from you.<small>&mdash; B.B. King</small>
          </div>
        </div>
      </section>
      <section id="journey" className="section journey">
        <Label index="( 02 )">The journey</Label>
        <div className="journey-head reveal">
          <h2>
            From student of
            <br />
            numbers to{" "}
            <em>
              teacher
              <br />
              of minds.
            </em>
          </h2>
          <p>Every chapter has made the classroom feel more like home.</p>
        </div>
        <div className="timeline">
          {[
            [
              "2012 - 2016",
              "Graduated - B.Tech",
              "Completed my degree under Rajasthan Technical University, building the analytical foundation that shapes how I teach problem-solving today.",
            ],
            [
              "2018 - 2021",
              "Assistant Teacher - Mathematics",
              "Began my teaching journey with primary students, translating rigorous logic into playful, age-appropriate learning.",
            ],
            [
              "2021 - Now",
              "Mathematics Educator",
              "Continuing to grow as an educator - refining curriculum, mentoring young learners and collaborating with a wonderful team of teachers.",
            ],
          ].map(([year, title, detail]) => (
            <article className="reveal" key={year}>
              <span>{year}</span>
              <h3>{title}</h3>
              <p>{detail}</p>
            </article>
          ))}
        </div>
      </section>
      <section id="skills" className="section expertise grid-bg">
        <Label index="( 03 )">Skills & talents</Label>
        <h2 className="reveal">
          A toolkit built for
          <br />
          <em>curious minds.</em>
        </h2>
        <div className="skill-grid">
          {[
            [
              "01",
              "Arithmetic & Number Sense",
              "Making mental math and place value second nature for young learners.",
            ],
            [
              "02",
              "Geometry",
              "Shapes, symmetry & spatial reasoning through hands-on play.",
            ],
            [
              "03",
              "Curriculum Design",
              "Structured, age-appropriate lesson plans that scaffold every concept.",
            ],
            [
              "04",
              "Problem Solving",
              "Teaching the joy of a puzzle - patience over panic.",
            ],
            [
              "05",
              "Creative Explanations",
              "Stories, analogies and visuals that make the abstract click.",
            ],
          ].map(([no, title, text]) => (
            <article className="reveal" key={no}>
              <small>{no}</small>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
      <section id="work" className="section achievements">
        <Label index="( 04 )">Achievements & collaboration</Label>
        <h2 className="reveal">
          Great teaching is a<br />
          <em>team sport.</em>
        </h2>
        <div className="stats">
          {[
            ["7+", "Years shaping primary mathematicians"],
            ["500+", "Students mentored through their number journey"],
            ["Top", "Recognised for engaging, concept-first lessons"],
          ].map(([big, copy]) => (
            <div className="reveal" key={big}>
              <b>*</b>
              <strong>{big}</strong>
              <p>{copy}</p>
            </div>
          ))}
        </div>
        <div className="collaboration reveal">
          <img src={images.classroom} alt="Teacher helping children learn" />
          <img
            src={images.collab}
            alt="Teachers collaborating in a classroom"
          />
        </div>
      </section>
      <section id="contact" className="contact">
        <Label index="( 05 )">Get in touch</Label>
        <h2 className="reveal">
          Let's make
          <br />
          maths <em>matter.</em>
        </h2>
        <p className="reveal">
          Whether it's a collaboration, a workshop, or a conversation about
          teaching mathematics to young minds &mdash; I'd love to hear from you.
        </p>
        <a className="reveal" href="mailto:Zebakhan443@gmail.com">
          Zebakhan443@gmail.com &#8599;
        </a>
      </section>
      <Ribbon />
      <footer>
        <span>&copy; 2026 ZEBA KHAN</span>
        <span>Primary Mathematics Educator at LKSEC &middot; Nimbahera</span>
        <a href="#top">Back to top &#8593;</a>
      </footer>
    </main>
  );
}

const galleryItems = [
  {
    src: "/gallery/a2.jpeg",
    title: "Learning through play",
    category: "Digital learning workshop",
    position: "center 36%",
  },
  {
    src: "/gallery/c3.jpeg",
    title: "Patterns in practice",
    category: "Computational thinking",
    position: "center 45%",
  },
  {
    src: "/gallery/c5.jpeg",
    title: "Number detectives",
    category: "Collaborative maths",
    position: "center 48%",
  },
  {
    src: "/gallery/Play2.jpeg",
    title: "Learning beyond the classroom",
    category: "Hands-on activity",
    position: "center center",
  },
  {
    src: "/gallery/c6.jpeg",
    title: "Thinking together",
    category: "Peer learning",
    position: "center 42%",
  },
  {
    src: "/gallery/Play3.jpeg",
    title: "A lesson in motion",
    category: "Outdoor exploration",
    position: "center center",
  },
  {
    src: "/gallery/C2.jpeg",
    title: "Finding the pattern",
    category: "Student-led learning",
    position: "center 46%",
  },
  {
    src: "/gallery/Stud3.jpeg",
    title: "Big questions",
    category: "Computational thinking",
    position: "center center",
  },
];

function Gallery() {
  const [active, setActive] = useState(null);
  useEffect(() => {
    const onKeyDown = (event) => event.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.08 },
    );
    document
      .querySelectorAll(".gallery-page .reveal")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return (
    <main className="gallery-page">
      <header className="nav gallery-nav">
        <Link to="/" className="wordmark">
          Zeba Khan<span>+</span>
        </Link>
        <Link className="gallery-back" to="/">
          &#8592; Back to portfolio
        </Link>
      </header>
      <section className="gallery-hero grid-bg">
        <p className="kicker">A glimpse inside the classroom</p>
        <h1>
          Learning in
          <br />
          <em>action.</em>
        </h1>
        <p>
          Small discoveries, shared questions and the joy of figuring things out
          — together.
        </p>
        <span className="gallery-count">
          01—{String(galleryItems.length).padStart(2, "0")}
        </span>
      </section>
      <section className="gallery-content">
        <div className="gallery-intro">
          <Label index="( 06 )">Activity gallery</Label>
          <p>
            Each activity is designed to make mathematical thinking visible,
            social and memorable.
          </p>
        </div>
        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <button
              className="gallery-card reveal"
              key={item.src}
              onClick={() => setActive(index)}
            >
              <img
                src={item.src}
                alt={item.title}
                style={{ objectPosition: item.position }}
              />
              <span className="gallery-overlay">
                <small>{item.category}</small>
                <b>{item.title}</b>
                <i>View &#8599;</i>
              </span>
            </button>
          ))}
          <article className="gallery-video reveal">
            <video controls preload="metadata" poster="/gallery/Play2.jpeg">
              <source src="/gallery/C1.mp4" type="video/mp4" />
            </video>
            <p>
              <small>Classroom moments</small>See learning come alive.
            </p>
          </article>
        </div>
      </section>
      {active !== null && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={galleryItems[active].title}
          onClick={() => setActive(null)}
        >
          <button aria-label="Close image" onClick={() => setActive(null)}>
            ×
          </button>
          <img
            src={galleryItems[active].src}
            alt={galleryItems[active].title}
            onClick={(e) => e.stopPropagation()}
          />
          <p>{galleryItems[active].title}</p>
        </div>
      )}
    </main>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gallery" element={<Gallery />} />
    </Routes>
  );
}
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
