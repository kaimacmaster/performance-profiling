import dynamic from "next/dynamic";
import styles from "./page.module.css";

const App = dynamic(() => import("@/components/rendering-example"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className={styles.main}>
      <App />
    </main>
  );
}
