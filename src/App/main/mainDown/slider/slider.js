import "./slider.css";

import arrow from "./Vector.png";
import award from "./Award.png";
import basket from "./Basket.png";
import close from "./Close.png";

function Slider() {
    return (
        <div className="slider">

            <div className="slider-top">
                <div className="slider__text">

                    <h2 className="card-block__h2">
                        Как избежать использования нелицензионного ПО?
                    </h2>

                    <p className="slider__text-p">
                        Следуйте положениям руководства по приобретению программного обеспечения.
                    </p>

                </div>
                <div className="slider-control">
                    <a className="slider-button prev">
                        <img src={arrow} alt="prev" />
                    </a>
                    <a className="slider-button next">
                        <img src={arrow} alt="next" />
                    </a>
                </div>

            </div>

            <div className="slider__container">

                <div className="slide">

                    <div className="slide-top">
                        <img src={basket} alt="basket" />
                        <span></span>
                    </div>

                    <div className="slide-bottom">
                        <h3>
                            Покупайте у доверенных поставщиков
                        </h3>
                        <p>
                            Доверенный торговый посредник  –  хороший вариант приобретения лицензионного персонального обеспечения для вас и вашей семьи
                        </p>
                    </div>

                </div>

                <div className="slide">

                    <div className="slide-top">
                        <img src={award} alt="award" />
                        <span></span>
                    </div>

                    <div className="slide-bottom">
                        <h3>
                            Пользуйтесь только лицензионным программным обеспечением
                        </h3>
                        <p>
                            Программное обеспечение должно быть соответствующе лицензировано, независимо от того, это Windows или  Office.
                        </p>
                    </div>

                </div>



            </div>
        </div>
    )
}

export default Slider;