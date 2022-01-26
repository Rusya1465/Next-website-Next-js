import Link from "next/link";
import styles from "../styles/header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header_container}>
        <Link href={"/"}>
          <a id={styles.header_logo}>NEXT</a>
        </Link>
        <div className={styles.header_toggle} id="mobile-menu">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul className={styles.header_menu}>
          <li className={styles.header_item}>
            <Link href="">
              <a className={styles.navbar_links}>Home</a>
            </Link>
          </li>
          <li className={styles.header_item}>
            <Link href={"/tech"}>
              <a className={styles.navbar_links}>Tech</a>
            </Link>
          </li>
          <li className={styles.header_item}>
            <Link href={"/products"}>
              <a className={styles.navbar_links}>Products</a>
            </Link>
          </li>
          <li className={styles.header_item}>
            <Link href={"/products"}>
              <a className={styles.button}>Sign Up</a>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};
export default Header;
