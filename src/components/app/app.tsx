import css from './app.module.css';
import {Header} from "../header/header";
import {Route, Routes} from "react-router-dom";
import {HomePage} from "../../pages/home-page/home-page";
import {SkillsPage} from "../../pages/skills-page/skills-page";
import {EduPage} from "../../pages/edu-page/edu-page";
import {ExamplePage} from "../../pages/example-page/example-page";

export const App = () => {
    return (
        <main className={css.app}>
            <Header />
            <Routes>
                <Route path='/' element={<HomePage />}/>
                <Route path='/skills' element={<SkillsPage/>} />
                <Route path='/ex' element={<ExamplePage />} />
                <Route path='/edu' element={<EduPage/>} />
            </Routes>
        </main>
    );
}
