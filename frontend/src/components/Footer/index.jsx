import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer>
      <h1>Blogish - Best Blogging Platform you would ever see!</h1>
      <hr />
      <p className={styles.tagline}>Made with love by Saurabh!</p>
    </footer>
  );
};

export default Footer;
