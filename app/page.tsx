import styles from "./styles.module.css";
import { resume } from "./data";

export default function Home() {
  return (
    <section className={styles.hero}>
      <div className={styles.portraitWrap}>
        <div className={styles.portrait} aria-hidden>
          <span className={styles.portraitInitials}>R</span>
        </div>
      </div>

      <div className={styles.heroBody}>
        <h1 className={styles.name}>Roy Li</h1>
        <p className={styles.title}>
          Undergraduate, <em>Honours Bachelor of Arts</em>
          <br />
          History Specialist · Political Science Minor
          <br />
          University of Toronto
        </p>
        <div className={styles.bio}>
          <p>
            I&apos;m a first-year student at the University of Toronto, broadly
            interested in <em>Canadian history</em>,{" "}
            <em>political institutions</em>, and civic engagement. My program
            combines a History Specialist with a Political Science Minor.
          </p>
          <p>
            Outside class, I&apos;ve worked as a lead canvasser with the{" "}
            <em>Liberal Party of Canada</em> in University–Rosedale and served
            as an information officer with <em>Elections Canada</em>. At U of
            T I&apos;m also a lecture notetaker with Accessibility Services.
          </p>
          <p>
            Before U of T I attended Richmond Hill High School, where I was
            president of the Trivia Club, competed on the Mock Trials team
            (Judges Cup champions, 2023), and volunteered with the Richmond
            Hill Community Food Bank.
          </p>
        </div>
        <ul className={styles.heroLinks}>
          <li>
            <a href={`mailto:${resume.contact.email}`}>{resume.contact.email}</a>
          </li>
          <li>
            <a href={`tel:${resume.contact.phone.replace(/[^\d+]/g, "")}`}>
              {resume.contact.phone}
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
