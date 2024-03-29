import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setFilterPrice, reset, setFilterVolume} from "../redux/slices/filterSlice";


const SideMenu = () => {
    const dispatch = useDispatch()
    const [isOpenPrice, setIsOpenPrice] = useState(true)
    const [isOpen, setIsOpen] = useState(true)
    // const { items } = useSelector((state) => state.sort)
    // const prices = items.map(item => (item.price))
    const [price, setPrice] = useState({ min: 0, max: 0 })
    // const [volume, setVolume] = useState(0)

    function Test() {
        dispatch(setFilterPrice({min: 0, max: 100}))
    } 
    function Try() {
        dispatch(setFilterVolume(0.33))
    } 

    console.log(price)
    return (
        <>
            <div className="content-leftblock">
                <div className="content-leftblock-Filter">
                    <span>
                        Price
                        <i className="hidefilter" onClick={() => setIsOpenPrice(!isOpenPrice)}></i>
                    </span>
                    <div className={isOpenPrice ? 'content-leftblock-Filter-price open' : 'content-leftblock-Filter-price'}>
                        <div className="content-leftblock-Filter-price-el">
                            <div className="content-leftblock-Filter-price-el-selectPrice">
                                <input
                                    type="number"
                                    placeholder="from"
                                    value={price.min}
                                    onChange={(e) => setPrice((prev) => ({ ...prev, "min": e.target.value }))}
                                />
                                <input
                                    type="number"
                                    min='0'
                                    placeholder="to"
                                    value={price.max}
                                    onChange={(e) => setPrice((prev) => ({ ...prev, "max": e.target.value }))}
                                />
                                <input
                                    type="submit"
                                    value="OK"
                                    onClick={() => dispatch(setFilterPrice(price))}
                                />
                            </div>
                        </div>
                        <div className="content-leftblock-Filter-price-el">
                            <p>
                                <input type="radio" name="price" 
                                onChange={() => Test()}
                                />
                                <label htmlFor="price-100">0 - 100</label>
                            </p>
                            <span>5</span>
                        </div>
                        <div className="content-leftblock-Filter-price-el">
                            <p>
                                <input type="radio" name="price" />
                                <label htmlFor="price-100,200">100 - 200</label>
                            </p>
                            <span>1</span>
                        </div>
                        <div className="content-leftblock-Filter-price-el">
                            <p>
                                <input type="radio" name="price" />
                                <label htmlFor="price-200">200 or more </label>
                            </p>
                            <span>1</span>
                        </div>
                    </div>
                </div>

                <div className="content-leftblock-Filter">
                    <span>Bottle size
                        <i className="hidefilter" onClick={() => setIsOpen(!isOpen)}>
                        </i>
                    </span>
                    <div className={isOpen ? 'acc open' : 'acc'}>
                        <div className="content-leftblock-Filter-box">
                            <p className="chebox">
                                <input type="checkbox" id="1"
                                    onChange = { () => Try()}
                                />
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
                </div>
                <button
                    className="resetButton"
                    onClick={() => dispatch(reset())}
                >Reset
                </button>
            </div>
        </>
    )
}

export default SideMenu