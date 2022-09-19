import React, { useState } from "react";

const SideMenu = () => {
    const [isShown, setIsShown] = useState(true)
    // smooth scroll hiding
    // затенение карточки товара

    return (
        <>
            <div className="content-leftblock">
                <div className="content-leftblock-Filter">
                    <span>
                        Price
                        <i className="hidefilter"></i>
                    </span>
                    <div className="content-leftblock-Filter-price">
                        <div className="content-leftblock-Filter-price-el">
                            <div className="content-leftblock-Filter-price-el-selectPrice">
                                <input type="text" placeholder="from" />
                                <input type="text" placeholder="to" />
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
                                <label htmlFor="price-200">200 or more </label>
                            </p>
                            <span>1</span>
                        </div>
                    </div>
                </div>

                <div className="content-leftblock-Filter">
                    <span>Bottle size
                        <i onClick={() => setIsShown(!isShown)} className="hidefilter">
                        </i>
                    </span>
                    {isShown
                        ?
                        <><div>
                            <div className="content-leftblock-Filter-box">
                                <p className="chebox">
                                    <input type="checkbox" id="1" />
                                    <label htmlFor="1">0.33</label>
                                </p>
                                <span>1</span>
                            </div>
                            <div className="content-leftblock-Filter-box">
                                <p className="chebox">
                                    <input type="checkbox" id="2" />
                                    <label htmlFor="2">0.5</label>
                                </p>
                                <span>5</span>
                            </div>
                            <div className="content-leftblock-Filter-box">
                                <p className="chebox">
                                    <input type="checkbox" id="3" />
                                    <label htmlFor="3">0.75</label>
                                </p>
                                <span>1</span>
                            </div>
                        </div>
                        </>
                        :
                        <></>
                    }
                </div>
            </div>
        </>
    )
}

export default SideMenu