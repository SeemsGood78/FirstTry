import React from "react";

const ContentBlock = () => {
    return (
        <>
            <div className="right-block">
                <div className="right-block-titleBar">
                    <div>
                        <h1>Пшеничное пиво</h1>
                    </div>
                    <ul>
                        <li><a href="#">Рекомендуемые</a></li>
                        <li><a href="#">Популярные</a></li>
                        <li><a href="#" className="active">Новинки</a></li>
                        <li className="dropdown"><a href="#" type="button">Цена <i className="change"></i></a>
                            <ul className="dropdown-menu">
                                <li><a href="#">От низкой к высокой </a></li>
                                <li><a href="#">От высокой к низкой </a></li>
                            </ul>
                        </li>
                        <li className="dropdown"><a href="#" type="button">Призводитель A-Z <i className="change"></i></a>
                            <ul className="dropdown-menu">
                                <li><a href="#">От A до Z </a></li>
                                <li><a href="#">От Z до A </a></li>
                            </ul>
                        </li>
                        <li className="dropdown"><a href="#" type="button">Винтаж <i className="change"></i></a>
                            <ul className="dropdown-menu">
                                <li><a href="#">От новых к старым </a></li>
                                <li><a href="#">От старых до новых </a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="right-block-grid">
                    <div className="right-block-grid-item">
                        <div className="right-block-grid-item-img">
                            <a href="#">
                                <img src="./style/im/16.jpg" alt="" />
                            </a>
                        </div>
                        <div className="right-block-grid-item-text">
                            <a href="#" className="title">
                                <span>Isaac</span>
                                <p>0.75 л
                                    <span>Aрт. 31863</span>
                                </p>
                            </a>
                            <span>
                                <img src="./style/im/16.jpg" alt="" />
                                <a href="#">Италия</a>
                                <a href="#">/Baladin</a>
                            </span>
                        </div>
                        <div className="right-block-grid-item-price">
                            <div>
                                <p>Цена за 1 шт</p>
                                <div>
                                    249
                                    <sup>грн</sup>
                                </div>
                            </div>
                            <input type="button" value="+ В корзину " />
                        </div>
                    </div>
                    <div className="right-block-grid-item">
                        <div className="right-block-grid-item-img">
                            <a href="#">
                                <img src="./style/im/16.jpg" alt="" />
                            </a>
                        </div>
                        <div className="right-block-grid-item-text">
                            <a href="#" className="title">
                                <span>Isaac</span>
                                <p>0.75 л
                                    <span>Aрт. 31863</span>
                                </p>
                            </a>
                            <span>
                                <img src="./style/im/16.jpg" alt="" />
                                <a href="#">Италия</a>
                                <a href="#">/Baladin</a>
                            </span>
                        </div>
                        <div className="right-block-grid-item-price">
                            <div>
                                <p>Цена за 1 шт</p>
                                <div>
                                    249
                                    <sup>грн</sup>
                                </div>
                            </div>
                            <input type="button" value="+ В корзину " />
                        </div>
                    </div>
                    <div className="right-block-grid-item">
                        <div className="right-block-grid-item-img">
                            <a href="#">
                                <img src="./style/im/16.jpg" alt="" />
                            </a>
                        </div>
                        <div className="right-block-grid-item-text">
                            <a href="#" className="title">
                                <span>Isaac</span>
                                <p>0.75 л
                                    <span>Aрт. 31863</span>
                                </p>
                            </a>
                            <span>
                                <img src="./style/im/16.jpg" alt="" />
                                <a href="#">Италия</a>
                                <a href="#">/Baladin</a>
                            </span>
                        </div>
                        <div className="right-block-grid-item-price">
                            <div>
                                <p>Цена за 1 шт</p>
                                <div>
                                    249
                                    <sup>грн</sup>
                                </div>
                            </div>
                            <input type="button" value="+ В корзину " />
                        </div>
                    </div>
                    <div className="right-block-grid-item">
                        <div className="right-block-grid-item-img">
                            <a href="#">
                                <img src="./style/im/16.jpg" alt="" />
                            </a>
                        </div>
                        <div className="right-block-grid-item-text">
                            <a href="#" className="title">
                                <span>Isaac</span>
                                <p>0.75 л
                                    <span>Aрт. 31863</span>
                                </p>
                            </a>
                            <span>
                                <img src="./style/im/16.jpg" alt="" />
                                <a href="#">Италия</a>
                                <a href="#">/Baladin</a>
                            </span>
                        </div>
                        <div className="right-block-grid-item-price">
                            <div>
                                <p>Цена за 1 шт</p>
                                <div>
                                    249
                                    <sup>грн</sup>
                                </div>
                            </div>
                            <input type="button" value="+ В корзину " />
                        </div>
                    </div>
                    <div className="right-block-grid-item">
                        <div className="right-block-grid-item-img">
                            <a href="#">
                                <img src="./style/im/16.jpg" alt="" />
                            </a>
                        </div>
                        <div className="right-block-grid-item-text">
                            <a href="#" className="title">
                                <span>Isaac</span>
                                <p>0.75 л
                                    <span>Aрт. 31863</span>
                                </p>
                            </a>
                            <span>
                                <img src="./style/im/16.jpg" alt="" />
                                <a href="#">Италия</a>
                                <a href="#">/Baladin</a>
                            </span>
                        </div>
                        <div className="right-block-grid-item-price">
                            <div>
                                <p>Цена за 1 шт</p>
                                <div>
                                    249
                                    <sup>грн</sup>
                                </div>
                            </div>
                            <input type="button" value="+ В корзину " />
                        </div>
                    </div>
                    <div className="right-block-grid-item">
                        <div className="right-block-grid-item-img">
                            <a href="#">
                                <img src="./style/im/16.jpg" alt="" />
                            </a>
                        </div>
                        <div className="right-block-grid-item-text">
                            <a href="#" className="title">
                                <span>Isaac</span>
                                <p>0.75 л
                                    <span>Aрт. 31863</span>
                                </p>
                            </a>
                            <span>
                                <img src="./style/im/16.jpg" alt="" />
                                <a href="#">Италия</a>
                                <a href="#">/Baladin</a>
                            </span>
                        </div>
                        <div className="right-block-grid-item-price">
                            <div>
                                <p>Цена за 1 шт</p>
                                <div>
                                    249
                                    <sup>грн</sup>
                                </div>
                            </div>
                            <input type="button" value="+ В корзину " />
                        </div>
                    </div>
                    <div className="right-block-grid-item">
                        <div className="right-block-grid-item-img">
                            <a href="#">
                                <img src="./style/im/16.jpg" alt="" />
                            </a>
                        </div>
                        <div className="right-block-grid-item-text">
                            <a href="#" className="title">
                                <span>Isaac</span>
                                <p>0.75 л
                                    <span>Aрт. 31863</span>
                                </p>
                            </a>
                            <span>
                                <img src="./style/im/16.jpg" alt="" />
                                <a href="#">Италия</a>
                                <a href="#">/Baladin</a>
                            </span>
                        </div>
                        <div className="right-block-grid-item-price">
                            <div>
                                <p>Цена за 1 шт</p>
                                <div>
                                    249
                                    <sup>грн</sup>
                                </div>
                            </div>
                            <input type="button" value="+ В корзину " />
                        </div>
                    </div>
                    <div className="right-block-grid-item">
                        <div className="right-block-grid-item-img">
                            <a href="#">
                                <img src="https://photos.app.goo.gl/gw8R7avU34WRNDMXA" alt="" />
                            </a>
                        </div>
                        <div className="right-block-grid-item-text">
                            <a href="#" className="title">
                                <span>Isaac</span>
                                <p>0.75 л
                                    <span>Aрт. 31863</span>
                                </p>
                            </a>
                            <span>
                                <img src="./style/im/16.jpg" alt="" />
                                <a href="#">Италия</a>
                                <a href="#">/Baladin</a>
                            </span>
                        </div>
                        <div className="right-block-grid-item-price">
                            <div>
                                <p>Цена за 1 шт</p>
                                <div>
                                    249
                                    <sup>грн</sup>
                                </div>
                            </div>
                            <input type="button" value="+ В корзину " />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContentBlock