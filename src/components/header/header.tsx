import css from "./header.module.css";
import avatar from "../../assets/avatar.jpg";
import tg from "../../assets/tg.svg";


export const Header = () => {

    return (
        <header className={css.header}>
            <div className={css.promo}>
                <img
                    className={css.avatar}
                    src={avatar}
                    alt="avatar"
                    width={150}
                    height={150}
                />
                <div>
                    <h1 className={css.title}>3cad разработчик</h1>
                    <h2 className={css.sub_title}>Перцев Денис, 44 года</h2>
                    <ul className={css.contacts}>
                        <li className={css.contact}>
                            <a href="tel:+79101493433">+7-910-149-34-33</a>
                        </li>
                        <li className={css.contact}>
                            <a href="mailto:denis21vekplus@yandex.ru">
                                thech@yandex.ru
                            </a>
                        </li>
                        <ul className={css.social_list}>
                            <li>
                                <a href="https://t.me/denis_vpnn">
                                    <img
                                        src={tg}
                                        alt="telegram"
                                        width={18}
                                        height={16}
                                    />
                                </a>
                            </li>
                        </ul>
                    </ul>
                </div>
            </div>
        </header>
    );
};
