import styles from "../styles/Banner.module.css";

const Banner = (props) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <span className={styles.title1}>Coffee</span>
        <span className={styles.title2}> Epicure</span>
      </h1>
      <p className={styles.subtitle}>Discover your local coffee stores now!</p>
      <button className={styles.button} onClick={props.handleonClick}>
        {props.buttonText}
      </button>
    </div>
  );
};

export default Banner;
