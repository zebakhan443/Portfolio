import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const portrait =
  "https://images.unsplash.com/photo-1758685848006-1bc450061624?auto=format&fit=crop&w=1100&q=85";
const classroom =
  "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=85";
const board =
  "https://images.unsplash.com/photo-1635372722656-389f87a941b7?auto=format&fit=crop&w=1200&q=85";
const equations = [
  "π = 3.14159",
  "φ = 1.61803",
  "e = 2.71828",
  "Mathematics is the music of reason",
  "∑",
  "√2",
  "∞",
  "a² + b² = c²",
];

function Ribbon() {
  return (
    <div className="ribbon">
      <div>
        {[...equations, ...equations].map((item, i) => (
          <span key={i}>
            {item}
            <b>✦</b>
          </span>
        ))}
      </div>
    </div>
  );
}
function Label({ no, children }) {
  return (
    <div className="label">
      <b>{no}</b>
      <i></i>
      <span>{children}</span>
    </div>
  );
}

function App() {
  const [hover, setHover] = useState(false);
  return (
    <main>
      <header className="nav">
        <a href="#top" className="wordmark">
          ZK<span className="caret">+</span>
        </a>
        <nav>
          <a href="#about">About</a>
          <a href="#skills">Expertise</a>
          <a href="#journey">Journey</a>
          <a href="#contact">Contact ↘</a>
        </nav>
      </header>
      <section id="top" className="hero grid-bg">
        <div className="geometry">
          <i></i>
          <i></i>
          <i></i>
        </div>
        <div className="hero-inner">
          <div className="hero-copy">
            <p className="kicker">Primary Mathematics Educator · Est. 2018</p>
            <h1>
              Zeba
              <br />
              <em>Khan</em>
            </h1>
            <p className="intro">
              Shaping curious, logical young minds —<br />
              one theorem, one question, one child at a time.
            </p>
            <a className="cta" href="#contact">
              Get in touch <span>↘</span>
            </a>
          </div>
          <figure className="portrait">
            <img src={portrait} alt="Zeba Khan, mathematics educator" />
          </figure>
        </div>
      </section>
      <Ribbon />

      <section id="about" className="section manifesto">
        <Label no="( 01 )">Teaching manifesto</Label>
        <div className="manifesto-grid">
          <div>
            <h2>
              Every child
              <br />
              deserves to <em>feel</em>
              <br />
              brilliant.
            </h2>
            <p className="muted">
              A classroom where questions matter more than quick answers.
            </p>
          </div>
          <div className="manifesto-copy">
            <p>
              I believe mathematics isn’t a talent reserved for a few — it’s a
              language every child can speak. My classroom is built on patience,
              curiosity and the quiet thrill of a problem finally solved.
            </p>
            <p>
              The equations change year to year, but my true goal never does —
              to send each student forward believing they are capable, curious
              and unafraid of a hard question.
            </p>
            <a href="#contact" className="underlined">
              My teaching philosophy ↘
            </a>
          </div>
        </div>
        <div className="image-pair">
          <img src={board} alt="Equations on a classroom blackboard" />
          <div className="image-caption">
            “The beautiful thing about learning is that nobody can take it away
            from you.”<small>— B.B. King</small>
          </div>
        </div>
      </section>

      <section id="skills" className="section expertise grid-bg">
        <Label no="( 02 )">What I bring to the classroom</Label>
        <h2>
          A thoughtful approach
          <br />
          to <em>every equation.</em>
        </h2>
        <div className="skill-grid">
          {[
            [
              "01",
              "Foundations first",
              "Making mental math and place value second nature for young learners.",
            ],
            [
              "02",
              "Curriculum design",
              "Structured, age-appropriate lesson plans that scaffold every concept.",
            ],
            [
              "03",
              "Playful problem solving",
              "Teaching the joy of a puzzle — patience over panic.",
            ],
            [
              "04",
              "Storytelling in lessons",
              "Turning abstract maths into stories children want to follow.",
            ],
          ].map(([no, title, text]) => (
            <article key={no}>
              <small>{no}</small>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="journey" className="section journey">
        <Label no="( 03 )">The journey so far</Label>
        <div className="journey-head">
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
          <article>
            <span>2014—2018</span>
            <h3>Bachelor of Education</h3>
            <p>
              Completed my degree under Rajasthan Technical University, building
              the analytical foundation that shapes how I teach problem-solving
              today.
            </p>
          </article>
          <article>
            <span>2018—2021</span>
            <h3>Assistant Teacher — Mathematics</h3>
            <p>
              Began my teaching journey with primary students, translating
              rigorous logic into playful, age-appropriate learning.
            </p>
          </article>
          <article>
            <span>2021—Now</span>
            <h3>Mathematics Educator</h3>
            <p>
              Continuing to grow as an educator — refining curriculum, mentoring
              young learners and collaborating with a wonderful team of
              teachers.
            </p>
          </article>
        </div>
      </section>

      <section id="work" className="section achievements">
        <Label no="( 04 )">Achievements & collaboration</Label>
        <h2>
          Great teaching is a<br />
          <em>team sport.</em>
        </h2>
        <div className="stats">
          {[
            ["6+", "Years shaping primary mathematicians"],
            ["500+", "Students mentored through their number journey"],
            ["Top", "Recognised for engaging, concept-first lessons"],
          ].map(([big, copy]) => (
            <div key={big}>
              <b>✦</b>
              <strong>{big}</strong>
              <p>{copy}</p>
            </div>
          ))}
        </div>
        <img
          className="classroom"
          src={classroom}
          alt="A teacher in a bright primary classroom"
        />
      </section>
      <section id="contact" className="contact">
        <Label no="( 05 )">Let’s connect</Label>
        <h2>
          Let’s make
          <br />
          maths <em>matter.</em>
        </h2>
        <p>
          Whether it’s a collaboration, a workshop, or a conversation about
          teaching mathematics to young minds — I’d love to hear from you.
        </p>
        <a href="mailto:Zebakhan443@gmail.com">Zebakhan443@gmail.com ↗</a>
      </section>
      <Ribbon />
      <footer>
        <span>© 2026 ZEBA KHAN</span>
        <span>PRIMARY MATHEMATICS EDUCATOR AT LKSEC · NIMBAHERA</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
