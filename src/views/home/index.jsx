//import styles from "./page.module.css";
import styles from "@/sass/pages/home.module.scss";
import Image from "next/image";

function HomePage() {
  return (
    <main className={styles.main}>
      <section className={styles.section_1}>
        <div className={styles.bg_img}></div>
      </section>
    </main>
  );
}

export default HomePage;
