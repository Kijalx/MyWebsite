// NavBar.jsx
import Link from 'next/link';
import styles from '../styling/NavBar.module.css'; // Import CSS module

const NavBar = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.navLinks}>
                <ul>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                    <li>
                        <Link href="/projects">Projects</Link>
                    </li>
                    <li>
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default NavBar;
