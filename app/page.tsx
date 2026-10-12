import {
  ArrowDownRight,
  ArrowRight,
  Check,
  Code2,
  Mail,
  MapPin,
  MessageCircle,
  MoveUpRight,
  Sparkles,
} from "lucide-react";
const work = [
  {
    name: "VizmaPro",
    type: "Manufacturing operations",
    desc: "Contributed to a platform for managing manufacturing operations.",
  },
  {
    name: "HiredRCI",
    type: "Hiring platform",
    desc: "Contributed to AI-powered resume and interview tools.",
    url: "https://hiredrci.com/",
  },
  {
    name: "ProSafe",
    type: "Safety training",
    desc: "Contributed to training and scheduling experiences.",
    url: "https://prosafetraining.ca/",
  },
  {
    name: "WEARTHAT",
    type: "Commerce experience",
    desc: "Contributed frontend styling to its commerce experience.",
    url: "https://wearthat.me/",
  },
  {
    name: "Premier Sports",
    type: "Sports platform",
    desc: "Contributed to TV applications for the sports platform.",
  },
];
const services = [
  [
    "High-converting websites",
    "A clear, credible home for your business—built to turn local visitors into calls, messages, and qualified leads.",
    "Service sites · Landing pages · Redesigns",
  ],
  [
    "Custom web applications",
    "When off-the-shelf software holds you back, I build focused tools around the way your business actually works.",
    "Portals · Dashboards · Internal tools",
  ],
  [
    "Ongoing improvements",
    "Practical support after launch—from new pages and features to performance fixes and thoughtful technical guidance.",
    "Optimization · Feature work · Support",
  ],
];
const faqs = [
  [
    "How much does a website cost?",
    "Every project is scoped around what your business actually needs. After a short conversation, I’ll send a clear proposal with the work, timeline, and cost—no surprise add-ons.",
  ],
  [
    "How long does a project take?",
    "It depends on the size and complexity. A focused business site moves faster than a custom platform. I’ll give you a realistic schedule before we begin.",
  ],
  [
    "Can you improve an existing website?",
    "Yes. I can review what is working, identify the weak points, and improve the current site—or recommend a rebuild when that is the more sensible investment.",
  ],
  [
    "Will I be able to update the site later?",
    "Yes. I can set up an editing experience that fits your needs and provide a straightforward handoff, so routine changes do not feel technical.",
  ],
];
export default function Home() {
  return (
    <main>
      <nav className="nav shell" aria-label="Main navigation">
        <a className="brand" href="#top">
          <img className="brand-mark" src="/favicon.svg" alt="" />
          <span>Bajwa Web Studio</span>
        </a>
        <div className="nav-links">
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a href="#process">Process</a>
        </div>
        <a
          className="nav-cta"
          href="https://wa.me/923459584932"
          target="_blank"
          rel="noreferrer"
        >
          Start a project <ArrowDownRight size={17} />
        </a>
      </nav>
      <section className="hero shell" id="top">
        <div>
          <p className="eyebrow">
            <span /> Independent web studio · Available for new work
          </p>
          <h1>
            Websites that make your business <em>hard to overlook.</em>
          </h1>
          <p className="hero-lede">
            I’m Haider Bajwa, the developer behind Bajwa Web Studio. I help
            local businesses look established, earn trust, and turn more
            visitors into customers—with clear strategy, sharp design, and
            dependable development.
          </p>
          <div className="hero-actions">
            <a
              className="button dark"
              href="https://wa.me/923459584932"
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={19} /> Chat on WhatsApp
            </a>
            <a className="text-link" href="#work">
              See selected work <ArrowDownRight size={18} />
            </a>
          </div>
        </div>
        <div className="hero-card">
          <div className="card-top">
            <span>Based in Pakistan</span>
            <MapPin size={18} />
          </div>
          <div className="orb">
            Built with
            <br />
            <strong>care.</strong>
          </div>
          <div className="card-bottom">
            <p>
              Partnering remotely with ambitious businesses in the US and
              beyond.
            </p>
            <Sparkles size={24} />
          </div>
        </div>
      </section>
      <div className="ticker">
        <div>
          Strategy <b>✦</b> Design <b>✦</b> Development <b>✦</b> Launch <b>✦</b>{" "}
          Strategy <b>✦</b> Design <b>✦</b> Development <b>✦</b> Launch
        </div>
      </div>
      <section className="section shell" id="services">
        <header className="section-head">
          <p className="kicker">What I can help with</p>
          <h2>Digital work that does a real job for your business.</h2>
        </header>
        <div className="service-list">
          {services.map((s, i) => (
            <article className="service" key={s[0]}>
              <span>0{i + 1}</span>
              <div>
                <h3>{s[0]}</h3>
                <p>{s[1]}</p>
                <small>{s[2]}</small>
              </div>
              <ArrowDownRight size={28} />
            </article>
          ))}
        </div>
      </section>
      <section className="work section" id="work">
        <div className="shell">
          <header className="section-head work-head">
            <p className="kicker">Selected work</p>
            <h2>Experience shaped across real products and platforms.</h2>
            <p>
              Selected projects I’ve contributed to across product, commerce,
              hiring, safety, and sport.
            </p>
          </header>
          <div className="work-grid">
            {work.map((p, i) => {
              const inner = (
                <>
                  <div className="project-top">
                    <span>0{i + 1}</span>
                    {p.url && <MoveUpRight size={22} />}
                  </div>
                  <div className="project-art" aria-hidden="true">
                    <span>{p.name[0]}</span>
                  </div>
                  <p>{p.type}</p>
                  <h3>{p.name}</h3>
                  <p className="project-desc">{p.desc}</p>
                </>
              );
              return p.url ? (
                <a
                  className="project"
                  href={p.url}
                  target="_blank"
                  rel="noreferrer"
                  key={p.name}
                  aria-label={`Visit ${p.name}`}
                >
                  {inner}
                </a>
              ) : (
                <article className="project" key={p.name}>
                  {inner}
                </article>
              );
            })}
            <div className="project-note">
              <Code2 size={30} />
              <p>
                4+ years building with modern web technologies—chosen to fit the
                project, never to complicate it.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section shell" id="process">
        <header className="section-head">
          <p className="kicker">A simple process</p>
          <h2>Clear from first message to final handoff.</h2>
        </header>
        <ol className="steps">
          {[
            [
              "Discover",
              "We talk through your business, your customers, and what the website needs to achieve.",
            ],
            [
              "Shape",
              "I turn the goals into a clear plan, page structure, and visual direction.",
            ],
            [
              "Build",
              "I design and develop the experience, sharing progress and keeping feedback focused.",
            ],
            [
              "Launch",
              "After careful checks, your site goes live with a clean handoff and support when needed.",
            ],
          ].map((s, i) => (
            <li key={s[0]}>
              <span>0{i + 1}</span>
              <h3>{s[0]}</h3>
              <p>{s[1]}</p>
            </li>
          ))}
        </ol>
      </section>
      <section className="fit shell">
        <div>
          <p className="kicker">Good fit?</p>
          <h2>
            You run the business.
            <br />
            <em>I’ll make the web part easier.</em>
          </h2>
          <aside>
            {[
              "One experienced point of contact",
              "Plain-English communication",
              "Thoughtful, responsive build",
              "No bloated agency process",
            ].map((x) => (
              <p key={x}>
                <Check size={18} />
                {x}
              </p>
            ))}
          </aside>
        </div>
      </section>
      <section className="faq section shell">
        <header>
          <p className="kicker">Common questions</p>
          <h2>Before we get started.</h2>
        </header>
        <div>
          {faqs.map((f, i) => (
            <details key={f[0]} open={i === 0}>
              <summary>
                {f[0]}
                <span>+</span>
              </summary>
              <p>{f[1]}</p>
            </details>
          ))}
        </div>
      </section>
      <section className="contact shell">
        <div>
          <p className="kicker">Have a project in mind?</p>
          <h2>
            Let’s build a website that
            <br />
            <em>earns its place in your business.</em>
          </h2>
          <p>
            Tell me a little about what you need. I’ll reply personally and we
            can see if we’re a good fit.
          </p>
          <aside>
            <a
              className="button light"
              href="https://wa.me/923459584932"
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={19} /> Start on WhatsApp{" "}
              <ArrowRight size={18} />
            </a>
            <a className="email" href="mailto:devbajwa580@gmail.com">
              <Mail size={18} /> devbajwa580@gmail.com
            </a>
          </aside>
        </div>
      </section>
      <footer className="footer shell">
        <a className="brand" href="#top">
          <img className="brand-mark" src="/favicon.svg" alt="" />
          <span>Bajwa Web Studio</span>
        </a>
        <p>Websites & web applications for growing businesses.</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
