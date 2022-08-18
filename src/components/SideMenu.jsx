import React from "react";

const SideMenu = () => {
    return (
        <>
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
                                <label htmlFor="price-100">0 - 100</label>
                            </p>
                            <span>5</span>
                        </div>
                        <div className="content-leftblock-Filter-price-el">
                            <p>
                                <label htmlFor="price-100,200">100 - 200</label>
                            </p>
                            <span>1</span>
                        </div>
                        <div className="content-leftblock-Filter-price-el">
                            <p>
                                <label htmlFor="price-200">200 и больше</label>
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
                            <label htmlFor="42">Пшеничное</label>
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
                            <label htmlFor="42">Baladin</label>
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
                            <label htmlFor="42">Италия</label>
                        </p>
                        <span>2</span>
                    </div>
                    <div className="content-leftblock-Filter-box">
                        <p className="chebox">
                            <input type="checkbox" id="42" />
                            <label htmlFor="42">Германия</label>
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
                            <label htmlFor="42">0.33</label>
                        </p>
                        <span>1</span>
                    </div>
                    <div className="content-leftblock-Filter-box">
                        <p className="chebox">
                            <input type="checkbox" id="42" />
                            <label htmlFor="42">0.5</label>
                        </p>
                        <span>5</span>
                    </div>
                    <div className="content-leftblock-Filter-box">
                        <p className="chebox">
                            <input type="checkbox" id="42" />
                            <label htmlFor="42">0.75</label>
                        </p>
                        <span>1</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SideMenu