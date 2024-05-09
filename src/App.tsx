import Grid from "./Grid";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.container}>
      <header>
        <h1>Color Zoomer</h1>
      </header>
      <main>
        <Grid />
      </main>
    </div>
  );
}

export default App;
