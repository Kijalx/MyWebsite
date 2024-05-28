const NavItem = ({ href, children }) => {
    return (
        <li>
            <a href={href} className="hover:underline text-black">
                {children}
            </a>
        </li>
    );
};

export default NavItem;
