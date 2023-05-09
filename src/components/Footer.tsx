import Image from "next/image";
import { FC } from "react";
import styles from "@/styles/Footer.module.css";

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image
          src="/img/bg.png"
          style={{ objectFit: "cover" }}
          fill={true}
          alt=""
        />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            OH YES, WE DID.THE LAMA PIZZA, WELL BAKED SLICE OF PIZZA.
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
          <p className={styles.text}>
            70 Washington Square S,
            <br /> New York, NY 10012
            <br /> (012) 345 678
          </p>
          <p className={styles.text}>
            70 Washington Square S,
            <br /> New York, NY 10012
            <br /> (012) 345 678
          </p>
          <p className={styles.text}>
            70 Washington Square S,
            <br /> New York, NY 10012
            <br /> (012) 345 678
          </p>
          <p className={styles.text}>
            70 Washington Square S,
            <br /> New York, NY 10012
            <br /> (012) 345 678
          </p>
          <p className={styles.text}>
            70 Washington Square S,
            <br /> New York, NY 10012
            <br /> (012) 345 678
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br /> 9:00 – 22:00
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 12:00 – 24:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
