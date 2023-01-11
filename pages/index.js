import Head from "next/head";
import Link from "next/link";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      {/* <Head>
        <title>Hello nextJS App</title>
        <meta name="description" content="Hello nextJS" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <main className={styles.main}>
        <div className={styles.center}>Hello nextJS</div>
        <ul>
          <li>
            <Link href={"/portfolio"}>link to portfolio</Link>
          </li>
          <li></li>
          <li></li>
        </ul>
      </main>
    </>
  );
}
