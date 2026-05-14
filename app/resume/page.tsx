import styles from "../styles.module.css";
import { resume } from "../data";

export const metadata = {
  title: "Resume — Roy Li",
};

type ResumeEntry = {
  period: string;
  title: string;
  institution: string;
  bullets?: string[];
};

function EntryList({ items }: { items: ResumeEntry[] }) {
  return (
    <ul className={styles.resumeList}>
      {items.map((item) => (
        <li
          key={`${item.period}-${item.title}`}
          className={styles.resumeItem}
        >
          <span className={styles.resumePeriod}>{item.period}</span>
          <div className={styles.resumeBody}>
            <span className={styles.resumeTitle}>{item.title}</span>
            <span className={styles.resumeInstitution}>{item.institution}</span>
            {item.bullets && item.bullets.length > 0 ? (
              <ul className={styles.resumeBullets}>
                {item.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            ) : null}
          </div>
        </li>
      ))}
    </ul>
  );
}

export default function ResumePage() {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Resume</h2>

      <div className={styles.resumeIntro}>
        <ul className={styles.resumeContact}>
          <li>
            <a href={`tel:${resume.contact.phone.replace(/[^\d+]/g, "")}`}>
              {resume.contact.phone}
            </a>
          </li>
          <li>
            <a href={`mailto:${resume.contact.email}`}>{resume.contact.email}</a>
          </li>
        </ul>
      </div>

      <div className={styles.resumeBlock}>
        <h3 className={styles.resumeBlockTitle}>Education</h3>
        <EntryList items={resume.education} />
      </div>

      <div className={styles.resumeBlock}>
        <h3 className={styles.resumeBlockTitle}>Skills</h3>
        <ul className={styles.skills}>
          {resume.skills.map((s) => (
            <li key={s} className={styles.skillItem}>
              {s}
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.resumeBlock}>
        <h3 className={styles.resumeBlockTitle}>Experience</h3>
        <EntryList items={resume.experience} />
      </div>

      <div className={styles.resumeBlock}>
        <h3 className={styles.resumeBlockTitle}>Extracurricular Activities</h3>
        <EntryList items={resume.extracurricular} />
      </div>

      <div className={styles.resumeBlock}>
        <h3 className={styles.resumeBlockTitle}>Awards &amp; Certifications</h3>
        <EntryList items={resume.awards} />
      </div>
    </section>
  );
}
