import React from "react";

const Content = () => {
    const items = [{
        id: 1,
        title: 'obolon',
        isAvailable: true,
        imageUrl: "https://dodopizza.azureedge.net/static/Img/Products/f035c7f46c0844069722f2bb3ee9f113_584x584.jpeg",
        types: ['filtred', 'white'],
        price: 213,
        volume: [0.33, 0.5],
        retitng: 3
    },]



    return (
        <div>
            <div className="container">
                <div className="content">
                    <div className="content-leftblock">
                        <div className="content-leftblock-Filter">
                            <span>
                                Цена
                                <i className="hidefilter"></i>
                            </span>
                            <div className="content-leftblock-Filter-price">
                                <div className="content-leftblock-Filter-price-el">
                                    <div className="content-leftblock-Filter-price-el-selectPrice">
                                        <input type="text" placeholder="oт" />
                                        <input type="text" placeholder="до" />
                                        <input type="submit" value="OK" />
                                    </div>
                                </div>
                                <div className="content-leftblock-Filter-price-el">
                                    <p>
                                        <label for="price-100">0 - 100</label>
                                    </p>
                                    <span>5</span>
                                </div>
                                <div className="content-leftblock-Filter-price-el">
                                    <p>
                                        <label for="price-100,200">100 - 200</label>
                                    </p>
                                    <span>1</span>
                                </div>
                                <div className="content-leftblock-Filter-price-el">
                                    <p>
                                        <label for="price-200">200 и больше</label>
                                    </p>
                                    <span>1</span>
                                </div>
                            </div>
                        </div>
                        <div className="content-leftblock-Filter">
                            <span>Тип
                                <i className="hidefilter">
                                </i>
                            </span>
                            <div className="content-leftblock-Filter-box">
                                <p className="chebox">
                                    <input type="checkbox" id="42" />
                                    <label for="42">Пшеничное</label>
                                </p>
                                <span>7</span>
                            </div>
                        </div>
                        <div className="content-leftblock-Filter">
                            <span>Пивоварня
                                <i className="hidefilter">
                                </i>
                            </span>
                            <div className="content-leftblock-Filter-box">
                                <p className="chebox">
                                    <input type="checkbox" id="42" />
                                    <label for="42">Baladin</label>
                                </p>
                                <span>7</span>
                            </div>
                        </div>
                        <div className="content-leftblock-Filter">
                            <span>Страна
                                <i className="hidefilter">
                                </i>
                            </span>
                            <div className="content-leftblock-Filter-box">
                                <p className="chebox">
                                    <input type="checkbox" id="42" />
                                    <label for="42">Италия</label>
                                </p>
                                <span>2</span>
                            </div>
                            <div className="content-leftblock-Filter-box">
                                <p className="chebox">
                                    <input type="checkbox" id="42" />
                                    <label for="42">Германия</label>
                                </p>
                                <span>5</span>
                            </div>

                        </div>
                        <div className="content-leftblock-Filter">
                            <span>Емкость
                                <i className="hidefilter">
                                </i>
                            </span>
                            <div className="content-leftblock-Filter-box">
                                <p className="chebox">
                                    <input type="checkbox" id="42" />
                                    <label for="42">0.33</label>
                                </p>
                                <span>1</span>
                            </div>
                            <div className="content-leftblock-Filter-box">
                                <p className="chebox">
                                    <input type="checkbox" id="42" />
                                    <label for="42">0.5</label>
                                </p>
                                <span>5</span>
                            </div>
                            <div className="content-leftblock-Filter-box">
                                <p className="chebox">
                                    <input type="checkbox" id="42" />
                                    <label for="42">0.75</label>
                                </p>
                                <span>1</span>
                            </div>
                        </div>
                    </div>
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
                                        <img src="./style/im/photo_2022-02-12_00-03-52 (2).jpg" alt="" />
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
                </div>
            </div>
        </div>
    )
}

export default Content;