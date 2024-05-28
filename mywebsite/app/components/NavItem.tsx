const NavItem = ({ href, children }: { href: string; children: React.ReactNode }) => {
    return (
        <li>
            <a href={href} className="hover:underline text-black">
                {children}
            </a>
        </li>
    );
};

export default NavItem;
