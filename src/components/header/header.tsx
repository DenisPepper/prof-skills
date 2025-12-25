import css from './header.module.css';
import avatar from '../../assets/avatar.jpg';
import tg from '../../assets/tg.svg';
import vk from '../../assets/vk.svg';
import {Link, useLocation} from "react-router-dom";

export const Header = () => {
    const {pathname} = useLocation();

    return (
        <header className={css.header}>
            <div className={css.promo}>
                <img className={css.avatar} src={avatar} alt='avatar' width={150} height={150}/>
                <div>
                    <h1 className={css.title}>Конструктор-технолог мебельного производства</h1>
                    <h2 className={css.sub_title}>Перцев Денис, 41 год</h2>
                    <ul className={css.contacts}>
                        <li className={css.contact}>
                            <a href="tel:+79101493433">+7-910-149-34-33</a>
                        </li>
                        <li className={css.contact}>
                            <a href="mailto:denis21vekplus@yandex.ru">denis21vekplus@yandex.ru</a>
                        </li>
                        <ul className={css.social_list}>
                            <li>
                                <a href='https://t.me/PDV_NN'>
                                    <img src={tg} alt='telegram' width={18} height={16}/>
                                </a>
                            </li>
                            <li>
                                <a href='https://vk.com/denispepper'>
                                    <img src={vk} alt='vkontakte' width={24} height={14}/>
                                </a>
                            </li>
                        </ul>
                    </ul>
                </div>
            </div>
            <nav className={css.nav}>
                <ul className={css.nav_list}>
                    <li className={css.nav_item}>
                        <Link className={`${css.nav_link} ${pathname === '/' ? css.nav_link_current : ''}`} to='/'>Прошлый опыт</Link>
                    </li>
                    <li className={css.nav_item}>
                        <Link className={`${css.nav_link} ${pathname === '/skills' ? css.nav_link_current : ''}`} to='/skills'>Профессиональные навыки</Link>
                    </li>
                    <li className={css.nav_item}>
                        <Link className={`${css.nav_link} ${pathname === '/ex' ? css.nav_link_current : ''}`} to='/ex'>Примеры работ</Link>
                    </li>
                    <li className={css.nav_item}>
                        <Link className={`${css.nav_link} ${pathname === '/edu' ? css.nav_link_current : ''}`} to='/edu'>О себе</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
