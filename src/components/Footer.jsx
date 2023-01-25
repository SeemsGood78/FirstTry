import React from "react";

const Footer = () => {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="inside">
                        <div className="inside-leftside">
                            <div className="inside-leftside-footercol">
                                <p>Каталог</p>
                                <ul>
                                    <li><a href="#">Вино</a></li>
                                    <li><a href="#">Игристые</a></li>
                                    <li><a href="#">Виски</a></li>
                                    <li><a href="#">Другие крепкие</a></li>
                                    <li><a href="#">Пиво</a></li>
                                    <li><a href="#">Сидры</a></li>
                                    <li><a href="#">Кейсы</a></li>
                                    <li><a href="#">Безалкогольные</a></li>
                                </ul>
                            </div>
                            <div className="inside-leftside-footercol">
                                <p>Pivoslav
                                </p>
                                <ul>
                                    <li><a href="#">О нас</a></li>
                                    <li><a href="#">Вакансии</a></li>
                                    <li><a href="#">Адреса магазинов</a></li>
                                    <li><a href="#">Новости</a></li>
                                    <li><a href="#">Акции</a></li>
                                    <li><a href="#">Программа лояльности</a></li>
                                    <li><a href="#">Календарь дегустаций</a></li>
                                    <li><a href="#">Школа сомелье</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="inside-rightside">
                            <p className="title">Create by</p>
                            <ul>
                                <li>
                                    <span>IFiks619</span>
                                    <a href="https://github.com/IFiks619"><img src="https://raw.githubusercontent.com/SeemsGood78/FirstTry/main/src/assets/Icons/GitHub_Logo_White.png" alt="" /><img src="https://raw.githubusercontent.com/SeemsGood78/FirstTry/main/src/assets/Icons/GitHub-Mark-Light-32px.png" alt="" /></a>
                                </li>
                                <li>
                                    <span>SeemsGood78</span>
                                    <a href="https://github.com/SeemsGood78"><img src="https://raw.githubusercontent.com/SeemsGood78/FirstTry/main/src/assets/Icons/GitHub_Logo_White.png" alt="" /><img src="https://raw.githubusercontent.com/SeemsGood78/FirstTry/main/src/assets/Icons/GitHub-Mark-Light-32px.png" alt="" /></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;