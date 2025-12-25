import css from './example-page.module.css';
import ex1 from '../../assets/ex_1.jpg';
import ex2 from '../../assets/ex_2.jpg';
import ex3 from '../../assets/ex_3.jpg';
import ex4 from '../../assets/ex_4.jpg';
import ex5 from '../../assets/ex_5.jpg';
import ex6 from '../../assets/ex_6.jpg';

export const ExamplePage = () => {
    return (
        <div>
            <h3>Вот некоторые примеры выполненных изделий</h3>
            <ul className={css.ex_list}>
                <li>
                    <img className={css.img} src={ex1} alt=''/>
                </li>
                <li>
                    <img className={css.img}  src={ex2} alt=''/>
                </li>
                <li>
                    <img className={css.img}  src={ex3} alt=''/>
                </li>
                <li>
                    <img className={css.img}  src={ex4} alt=''/>
                </li>
                <li>
                    <img className={css.img}  src={ex5} alt=''/>
                </li>
                <li>
                    <img className={css.img}  src={ex6} alt=''/>
                </li>
            </ul>
        </div>
    );
}
