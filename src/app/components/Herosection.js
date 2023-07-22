import React from "react";
import heroStyles from "@/app/style/herosection.module.css";
import Styles from "@/app/style/common.module.css";
import Image from "next/image";
import Link from "next/link";

const Herosection = () => {
  return (
    <main className={heroStyles.main_section}>
      <div className={Styles.container}>
        <div className={Styles.grid_two_section}>
          <div className={heroStyles.hero_content}>
            <h1>LET'S WATCH MOVIES TOGETHER</h1>
            <p>
              From award-winning dramas to blockbuster action movies, we&apos;ve
              got you covered. Browse our selection of the latest and greatest
              movies, and find your new favorite today.
            </p>
            <Link href="/movies">
              <button>Explore movies</button>
            </Link>
          </div>
          <div className={heroStyles.hero_image}>
            <Image src="/about1.svg" alt="image" width={500} height={500} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Herosection;
