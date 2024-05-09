import Box from "./Box";
import styles from "./Grid.module.css";

export default function Grid() {
  const colors = Array.from(
    { length: 20 },
    () =>
      "#" +
      Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0")
  );

  return (
    <div className={styles.gridContainer}>
      {colors.map((color) => (
        <div key={color} className={styles.gridItem}>
          <Box color={color} />
        </div>
      ))}
    </div>
  );
}
