import Link from 'next/link';
import styles from '../styling/NavBar.module.css';
import Image from 'next/image';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/navbar";
import hicon from '../icons/home.png';
import aicon from '../icons/about.png';
import picon from '../icons/projects.png';
import cicon from '../icons/contact.png';
const NavBar = () => {
    return (
        <Navbar isBordered>
            <NavbarMenuToggle />
            <NavbarBrand className={styles.brand}>
                aleks.dev
            </NavbarBrand>
            <NavbarContent className={styles.navContent}>
                <NavbarItem>
                    <Link href="/" className={styles.navLink}>Home</Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="/about" className={styles.navLink}>About</Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="/projects" className={styles.navLink}>Projects</Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="/contact" className={styles.navLink}>Contact</Link>
                </NavbarItem>
            </NavbarContent>

            <NavbarMenu className={styles.menuContent}>
                <NavbarMenuItem>
                    <Link href="/" className={styles.menLink}> <Image src={hicon} alt="Icon" width={24} height={24} className={styles.icon} /> Home</Link>
                </NavbarMenuItem>
                <NavbarMenuItem>
                    <Link href="/about" className={styles.menLink}><Image src={aicon} alt="Icon" width={24} height={24} className={styles.icon} /> About</Link>
                </NavbarMenuItem>
                <NavbarMenuItem>
                    <Link href="/projects" className={styles.menLink}><Image src={picon} alt="Icon" width={24} height={24} className={styles.icon} /> Projects</Link>
                </NavbarMenuItem>
                <NavbarMenuItem>
                    <Link href="/contact" className={styles.menLink}><Image src={picon} alt="Icon" width={24} height={24} className={styles.icon} /> Contact</Link>
                </NavbarMenuItem>
            </NavbarMenu>
        </Navbar>
    );
};

export default NavBar;
