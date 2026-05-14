import styles from "../styles.module.css";
import { events } from "../data";

export const metadata = {
  title: "Events — Roy Li",
};

export default function EventsPage() {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Events</h2>
      <ul className={styles.news}>
        {events.map((e) => (
          <li key={e.date} className={styles.newsItem}>
            <span className={styles.newsDate}>{e.date}</span>
            <span className={styles.newsBody}>{e.body}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
