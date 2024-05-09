import styles from "./Box.module.css";
import { Maximize2 } from "lucide-react";

type BoxProps = {
  color: string;
};

export default function Box({ color }: BoxProps) {
  return (
    <div className={styles.box} style={{ backgroundColor: color }}>
      <div className={styles.boxHeader}>
        <Maximize2 color="white" />
      </div>
      <div className={styles.boxBody}>{color}</div>
    </div>
  );
}
