import TopBar from "../components/topBar";
import Footer from "../components/footer";

const projects = [
  {
    builtFor: "My Parents",
    name: "Kyoudai Hostel",
    why: "They had no logo, no website — nothing.",
    story:
      "My parents run a student hostel in Kathmandu. While they visited Sydney for my graduation, I designed their logo from scratch and built a full platform — room listings, an availability checker, inspection request forms, and a complete admin portal. I hosted it on its own domain. When they saw it live, they were very happy. That project taught me more than anything else I had studied.",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    url: "https://kyoudaihostel.com/",
  },
  {
    builtFor: "My Employer",
    name: "Cafe Hub",
    why: "Rosters were sent through WhatsApp. No one asked me to fix it.",
    story:
      "I just saw the problem and built it — staff scheduling, shift assignment, conflict detection, calendar views, automated email notifications, and a manager dashboard. When I showed them, they were completely surprised. They told me they had literally been talking about commissioning exactly this app a few weeks earlier. We scheduled a meeting.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Nodemailer"],
    url: "https://cafehubs.vercel.app/",
  },
  {
    builtFor: "My Partner",
    name: "Whistle Counter",
    why: "She always asked me to count pressure cooker whistles. I automated it.",
    story:
      "At home we use a pressure cooker for dal and meat. Every time my partner made something she'd ask me to turn off the gas after 7 whistles. I built an app that listens through the microphone, counts the whistles automatically, and sounds an alarm after the number you set. She has not had to ask me since.",
    stack: ["React", "Web Audio API"],
    url: null,
  },
  {
    builtFor: "My Friends",
    name: "Khai Ko Imposter?",
    why: "Friends struggled with unfamiliar words in the game.",
    story:
      "Me and my friends play a word guessing game called Guess the Imposter. Some friends were struggling to recognise certain words. I had the idea to build the game in our own language — Nepali — with words that actually made sense to us. Pass-and-play on one phone, inspired by Among Us.",
    stack: ["React Native", "Expo"],
    url: "https://gilded-pixie-1986f9.netlify.app",
  },
  {
    builtFor: "My Community",
    name: "Hamro Kirtipur",
    why: "My hometown in Nepal had no digital directory.",
    story:
      "I created a web app for Kirtipur where people can find and locate everything available — 11 wards, restaurants, libraries, things to do, emergency contacts, and an interactive map. A digital home for a community that did not have one.",
    stack: ["React", "Node.js", "MongoDB", "Maps API"],
    url: "https://hamro-kirtipur.vercel.app/",
  },
  {
    builtFor: "Myself",
    name: "Nylonist Studio",
    why: "I play guitar and wanted to layer recordings into ambient soundscapes.",
    story:
      "I started recording guitar sessions and layering them into ambient soundscapes. Then I thought — why not build a tool for that? I built a browser-based ambient music creator where you can record, layer, and blend guitar recordings into your own soundscapes, entirely in the browser.",
    stack: ["React", "Web Audio API", "MediaRecorder API", "IndexedDB"],
    url: null,
  },
];

const MyStory = () => {
  return (
    <div className="storyPage">
      <TopBar />

      {/* ── Hero ── */}
      <div className="storyHero">
        <div className="storyHeroLabel">✋ The person behind the code</div>
        <div className="storyHeroName">Swornim Maharjan</div>
        <div className="storyHeroTagline">
          I build for real people, not portfolios.
        </div>
        <div className="storyHeroMeta">
          From Kathmandu, Nepal → Sydney, Australia
          <br />
          Master of Computer Science · Software Engineering · University of Wollongong
          <br />
          MERN Stack Bootcamp · Dented Code, Sydney
        </div>
        <div className="skillPillsContainer">
          {[
            "React",
            "Node.js",
            "Express",
            "MongoDB",
            "Web Audio API",
            "React Native",
            "UI/UX Design",
            "AI-Assisted Development",
          ].map((skill) => (
            <span key={skill} className="skillPill">
              {skill}
            </span>
          ))}
        </div>
        <div>
          <a href="mailto:swornimaus@gmail.com" className="hireBtn">
            Get in touch
          </a>
          <a href="/" className="hireBtn2">
            ← Back to portfolio
          </a>
        </div>
      </div>

      {/* ── Narrative ── */}
      <div className="storyNarrative">
        <div className="storyChapterLabel">My Story</div>

        <div className="storyChapter">
          <div className="storyChapterTitle">The Moment It All Started</div>
          <p className="storyText">
            My parents opened a boys hostel for students back home in Kathmandu.
            They had no logo, no website, nothing. They came to Australia for my
            graduation and while we were talking, I got the idea.
          </p>
          <p className="storyText">
            I designed their logo from scratch and built them a full website —
            room listings, availability checker, inspection request form, and a
            complete admin portal to manage everything. I hosted it on its own
            domain.
          </p>
          <blockquote className="pullQuote">
            "That project taught me more than anything else I had studied."
          </blockquote>
          <p className="storyText">
            That is when I understood what software really is. Not a tutorial.
            Not a grade. A real thing, built for real people, that actually
            helps.
          </p>
        </div>

        <div className="storyChapter">
          <div className="storyChapterTitle">Building Without Being Asked</div>
          <p className="storyText">
            At the cafe where I work, rosters are sent through WhatsApp. My boss
            never asked me to fix it. I just saw the problem and built a
            full-stack MERN roster management app — staff scheduling, shift
            assignment, conflict detection, calendar views, automated email
            notifications, and a manager dashboard.
          </p>
          <blockquote className="pullQuote">
            "When I showed them, they were completely surprised. They told me
            they had literally been talking about commissioning exactly this app
            a few weeks earlier."
          </blockquote>
        </div>

        <div className="storyChapter">
          <div className="storyChapterTitle">Building for the People Around Me</div>
          <p className="storyText">
            My partner uses a pressure cooker for dal and meat. Every time she
            made something, she'd ask me to count whistles and turn off the gas.
            I built an app that listens through the microphone, counts the
            pressure cooker whistles automatically, and sounds an alarm after the
            number you set.
          </p>
          <blockquote className="pullQuote">
            "She has not had to ask me since."
          </blockquote>
          <p className="storyText">
            My friends play a word guessing game — I built it in Nepali with
            words that actually made sense to us. My hometown in Kathmandu had no
            digital directory, so I built one. I play guitar and wanted to layer
            recordings into soundscapes, so I built a studio for that too.
          </p>
        </div>

        <div className="storyChapter">
          <div className="storyChapterTitle">What Drives Me</div>
          <blockquote className="pullQuote">
            "I do not build for portfolios. I build because someone needed it. A
            parent who runs a hostel. A partner who cooks dal. A boss with a
            broken workflow. A community that deserves a digital home."
          </blockquote>
          <p className="storyText">
            That is what good software is — something built with a specific
            person in mind, by someone who cared enough to build it.
          </p>
        </div>
      </div>

      {/* ── Projects ── */}
      <div className="storyProjects">
        <div className="storyProjectsTitle">The Projects</div>
        <div className="storyProjectsSubtitle">
          Every one of these was built for a real person, solving a real problem.
        </div>
        <div className="storyProjectGrid">
          {projects.map((project) => (
            <div key={project.name} className="storyProjectCard">
              <div className="storyProjectBuiltFor">
                Built for: {project.builtFor}
              </div>
              <div className="storyProjectName">{project.name}</div>
              <div className="storyProjectWhy">{project.why}</div>
              <div className="storyProjectText">{project.story}</div>
              <div className="storyProjectStack">
                {project.stack.map((tech) => (
                  <span key={tech} className="stackPill">
                    {tech}
                  </span>
                ))}
              </div>
              {project.url && (
                <a
                  href={project.url}
                  className="storyProjectLink"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Live →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ── AI Section ── */}
      <div className="storyAIWrapper">
        <div className="storyAIInner">
          <div className="storyAILabel">How I Use AI</div>
          <div className="storyAITitle">Honest. Confident. Unapologetic.</div>
          <p className="storyAIText">
            I use Claude as a creative and technical collaborator on every single
            project I build. I do not hide this — I think it is one of the most
            valuable skills a developer can have right now.
          </p>
          <p className="storyAIText">
            AI does not replace my thinking. It accelerates it. I identify the
            problem, design the solution, make the decisions, and own the
            outcome. Every project I have built was shipped faster and better
            because I knew how to use the best tools available.
          </p>
          <blockquote className="pullQuote storyAIPullQuote">
            "The moment I was introduced to AI, I have not stopped using it. It
            turns imagination into reality."
          </blockquote>
          <p className="storyAIText">
            Being able to use AI effectively is not cheating. It is the skill.
          </p>
        </div>
      </div>

      {/* ── Closing ── */}
      <div className="storyClosing">
        <p className="storyClosingText">
          Every project I have built starts with a person, not a problem. It
          starts with noticing someone struggling, someone wishing something
          existed, someone who never thought to ask. That noticing — that is what
          I bring. The rest is just code.
        </p>
        <div className="storyClosingSignature">
          — Swornim Maharjan, Sydney 2026
        </div>
        <div style={{ marginTop: "32px" }}>
          <a href="mailto:swornimaus@gmail.com" className="hireBtn">
            Let's build something →
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MyStory;
