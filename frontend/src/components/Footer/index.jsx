import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h3>Blogish - Best Blogging Platform you would ever see!</h3>
      <p className={styles.tagline}>Made with love by Saurabh!</p>
    </footer>
  );
};

export default Footer;
