import styles from "@/views/styles/current_day.module.scss"

export default
function CircleBackground({ children }) {
    return (
      <span className={styles.shapeContainer}>
        <span className={styles.shape1}>
          <div className={styles.container}>
            <div className={styles.yellow}></div>
            <div className={styles.orange}></div>
            <div className={styles.blue}></div>
            <div className={styles.pink}></div>
          </div>
  
          <div className={styles.container}>
            <div className={styles.circle}></div>
            <div className={styles.circle}></div>
            <div className={styles.circle}></div>
            <div className={styles.circle}></div>
          </div>
        </span>
        <span className={styles.absoluteCenter}>{children}</span>
      </span>
    );
  }