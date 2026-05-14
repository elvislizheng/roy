import styles from "./page.module.css";

const news = [
  {
    date: "May 2026",
    body: "New paper accepted to the Journal of Example Studies — preprint available soon.",
  },
  {
    date: "Mar 2026",
    body: "Invited talk at the Workshop on Computational Methods, University of Somewhere.",
  },
  {
    date: "Jan 2026",
    body: "Began the Spring term teaching CS 401: Topics in Research Methods.",
  },
  {
    date: "Oct 2025",
    body: "Joined the Department of Example Studies as Assistant Professor.",
  },
];

const research = [
  {
    title: "Area One",
    body:
      "A short description of one research thread — the question it asks and the approach taken.",
  },
  {
    title: "Area Two",
    body:
      "A second research interest, ideally one that connects to the first but stands on its own.",
  },
  {
    title: "Area Three",
    body:
      "A third area — perhaps applied or interdisciplinary work that complements the theoretical lines above.",
  },
];

const publications = [
  {
    year: "2026",
    items: [
      {
        authors: "Roy, A. Collaborator, B. Collaborator",
        title: "A representative paper title goes here.",
        venue: "Journal of Example Studies",
        links: [
          { label: "PDF", href: "#" },
          { label: "arXiv", href: "#" },
          { label: "Code", href: "#" },
        ],
      },
      {
        authors: "C. Collaborator, Roy",
        title: "Another recent contribution to the field.",
        venue: "Proceedings of the Annual Conference",
        links: [
          { label: "PDF", href: "#" },
          { label: "BibTeX", href: "#" },
        ],
      },
    ],
  },
  {
    year: "2025",
    items: [
      {
        authors: "Roy",
        title: "An earlier single-author paper laying the groundwork.",
        venue: "Working Paper",
        links: [{ label: "PDF", href: "#" }],
      },
      {
        authors: "D. Collaborator, Roy, E. Collaborator",
        title: "A collaborative project from the prior year.",
        venue: "International Symposium on Things",
        links: [
          { label: "PDF", href: "#" },
          { label: "Slides", href: "#" },
        ],
      },
    ],
  },
];

const teaching = [
  { code: "CS 401", title: "Topics in Research Methods", term: "Spring 2026" },
  { code: "CS 210", title: "Foundations of the Field", term: "Fall 2025" },
  { code: "CS 101", title: "Introduction to the Discipline", term: "Fall 2025" },
];

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <a href="#" className={styles.mark}>
          Roy <span className={styles.markSurname}>Li</span>
        </a>
        <nav className={styles.nav}>
          <a href="#about">About</a>
          <a href="#news">News</a>
          <a href="#research">Research</a>
          <a href="#publications">Publications</a>
          <a href="#teaching">Teaching</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main className={styles.main}>
        <section id="about" className={styles.hero}>
          <div className={styles.portraitWrap}>
            <div className={styles.portrait} aria-hidden>
              <span className={styles.portraitInitials}>R</span>
            </div>
            <p className={styles.portraitCaption}>
              Photograph: <em>placeholder</em>
            </p>
          </div>

          <div className={styles.heroBody}>
            <h1 className={styles.name}>Roy Li</h1>
            <p className={styles.title}>
              Assistant Professor of <em>Example Studies</em>
              <br />
              Department of Example, University of Somewhere
            </p>
            <div className={styles.bio}>
              <p>
                I am a researcher working at the intersection of two or three
                things that interest me. My work asks how a particular
                phenomenon arises, and I use a mix of theoretical and empirical
                methods to study it.
              </p>
              <p>
                Before joining Somewhere, I completed my Ph.D. at{" "}
                <em>Another University</em> with{" "}
                <em>Advisor Name</em>, and held a postdoctoral position at{" "}
                <em>Third University</em>.
              </p>
            </div>
            <ul className={styles.heroLinks}>
              <li>
                <a href="mailto:roy@university.edu">roy@university.edu</a>
              </li>
              <li>
                <a href="/cv.pdf">CV</a>
              </li>
              <li>
                <a href="https://scholar.google.com" target="_blank" rel="noopener noreferrer">
                  Google Scholar
                </a>
              </li>
              <li>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </section>

        <section id="news" className={styles.section}>
          <h2 className={styles.sectionTitle}>News</h2>
          <ul className={styles.news}>
            {news.map((n) => (
              <li key={n.date} className={styles.newsItem}>
                <span className={styles.newsDate}>{n.date}</span>
                <span className={styles.newsBody}>{n.body}</span>
              </li>
            ))}
          </ul>
        </section>

        <section id="research" className={styles.section}>
          <h2 className={styles.sectionTitle}>Research</h2>
          <p className={styles.sectionLede}>
            Broadly, I study <em>X</em>, <em>Y</em>, and the relationship
            between them. Current threads include:
          </p>
          <div className={styles.researchGrid}>
            {research.map((r) => (
              <article key={r.title} className={styles.researchCard}>
                <h3 className={styles.researchTitle}>{r.title}</h3>
                <p className={styles.researchBody}>{r.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="publications" className={styles.section}>
          <h2 className={styles.sectionTitle}>Publications</h2>
          <p className={styles.sectionLede}>
            A complete list is available on my{" "}
            <a href="https://scholar.google.com" target="_blank" rel="noopener noreferrer">
              Google Scholar
            </a>{" "}
            page. Selected works below.
          </p>
          {publications.map((group) => (
            <div key={group.year} className={styles.pubGroup}>
              <h3 className={styles.pubYear}>{group.year}</h3>
              <ul className={styles.pubList}>
                {group.items.map((p) => (
                  <li key={p.title} className={styles.pubItem}>
                    <p className={styles.pubTitle}>{p.title}</p>
                    <p className={styles.pubMeta}>
                      <span className={styles.pubAuthors}>{p.authors}</span>
                      <span className={styles.pubSep}> · </span>
                      <em className={styles.pubVenue}>{p.venue}</em>
                    </p>
                    <ul className={styles.pubLinks}>
                      {p.links.map((l) => (
                        <li key={l.label}>
                          <a href={l.href}>[{l.label}]</a>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section id="teaching" className={styles.section}>
          <h2 className={styles.sectionTitle}>Teaching</h2>
          <ul className={styles.teaching}>
            {teaching.map((c) => (
              <li key={c.code} className={styles.teachingItem}>
                <span className={styles.teachingCode}>{c.code}</span>
                <span className={styles.teachingTitle}>{c.title}</span>
                <span className={styles.teachingTerm}>{c.term}</span>
              </li>
            ))}
          </ul>
        </section>

        <section id="contact" className={styles.section}>
          <h2 className={styles.sectionTitle}>Contact</h2>
          <div className={styles.contact}>
            <div>
              <p className={styles.contactLabel}>Email</p>
              <p>
                <a href="mailto:roy@university.edu">roy@university.edu</a>
              </p>
            </div>
            <div>
              <p className={styles.contactLabel}>Office</p>
              <p>Toronto</p>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <span>© {new Date().getFullYear()} Roy Li</span>
        <span>
          Background:{" "}
          <a
            href="https://commons.wikimedia.org/wiki/File:Toronto_University_College_1.jpg"
            target="_blank"
            rel="noopener noreferrer"
          >
            University College, U of T
          </a>{" "}
          (CC BY-SA 4.0)
        </span>
      </footer>
    </div>
  );
}
