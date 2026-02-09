import css from "./navbar.module.css";
import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {

    const { pathname } = useLocation();

    return <nav className={css.nav}>
        <ul className={css.nav_list}>
            <li className={css.nav_item}>
                <Link
                    className={`${css.nav_link} ${pathname === "/" ? css.nav_link_current : ""
                        }`}
                    to="/"
                >
                    Опыт 3cad
                </Link>
            </li>
            <li className={css.nav_item}>
                <Link
                    className={`${css.nav_link} ${pathname === "/skills"
                            ? css.nav_link_current
                            : ""
                        }`}
                    to="/skills"
                >
                    Профессиональные навыки
                </Link>
            </li>
            <li className={css.nav_item}>
                <Link
                    className={`${css.nav_link} ${pathname === "/ex" ? css.nav_link_current : ""
                        }`}
                    to="/ex"
                >
                    Примеры работ
                </Link>
            </li>
            <li className={css.nav_item}>
                <Link
                    className={`${css.nav_link} ${pathname === "/edu" ? css.nav_link_current : ""
                        }`}
                    to="/edu"
                >
                    О себе
                </Link>
            </li>
        </ul>
    </nav>

}