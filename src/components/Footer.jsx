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
                                <p>GOOD WINE
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
                            <div className="inside-leftside-footercol">
                                <p>Доставка</p>
                                <ul>
                                    <li><a href="#">Условия доставки и оплаты</a></li>
                                    <li><a href="#">Возврат товаров</a></li>
                                    <li>
                                        <img src="./style/im/16.jpg" alt="" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="inside-rightside">
                            <p className="title">КОНТАКТЫ</p>
                            <ul>
                                <li>
                                    <span>Интеренет магазин</span>
                                    <p>044 390 79 61</p>
                                    <p>050 385 04 68</p>
                                </li>
                                <li>
                                    <span>Режим работы</span>
                                    <p>Пн.-Пт. 9:00-18:00</p>
                                    <p>Сб. 9:00-18:00</p>
                                </li>
                                <li>
                                    <span>Адрес:</span>
                                    <p>г. Киев, ул. Мечникова 9</p>
                                </li>
                            </ul>
                            <p><a href="#"><img src="./style/im/16.jpg" alt="" /></a></p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;