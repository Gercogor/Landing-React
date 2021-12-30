import "./mainDown.css"

import Slider from "./slider/slider";

import spring from "./spring.png"

function MainDown() {
    return (
        <div className="main-down">

            <img className="spring-pic" src={spring} alt="spring" />

            <div className="main-down__text-top">
                <h2 className="card-block__h2 card-block__h2-w">
                    Как я могу узнать о том, что используемое программное обеспечение является подлинным?
                </h2>
                <p >
                    Убедитесь, что оно лицензионное.
                </p>
            </div>

            <div className="main-down__text-middle">
                <div className="text-middle">
                    <span>
                        01
                    </span>
                    <p className="text-middle__line"></p>
                    <p>
                        Прежде чем приобретать новый компьютер с предварительно установленной операционной системой Windows, убедитесь, что на нем предварительно установлена подлинная Windows.
                    </p>
                </div>

                <div className="text-middle">
                    <span>
                        02
                    </span>
                    <p className="text-middle__line text-middle__line-bg2"></p>
                    <p>
                        У всех компьютеров с Windows должна быть соответствующая лицензия, которая позволяет обновляться до новых версий посредством корпоративного лицензирования, когда применяются условия и положения лицензирования Майкрософт.
                    </p>
                </div>
                <div className="text-middle">
                    <span>
                        03
                    </span>
                    <p className="text-middle__line text-middle__line-bg3"></p>
                    <p>
                        Соглашения о корпоративном лицензировании предлагают лицензии на обновление Windows. В комплекте с компьютером может поставляться полная базовая лицензия. (OEM/GGWA/FPP/ESD)
                    </p>
                </div>
                <div className="text-middle">
                    <span>
                        04
                    </span>
                    <p className="text-middle__line text-middle__line-bg4"></p>
                    <p>
                        Домашние выпуски Windows НЕ соответствуют требованиям для обновления до Windows Pro с использованием корпоративного лицензирования.
                    </p>
                </div>
                <div className="text-middle text-middle_large">
                    <span>
                        05
                    </span>
                    <p className="text-middle__line text-middle__line-bg5"></p>
                    <p>
                        Соглашение GGWA – это решение по легализации для корпоративных пользователей, которые хотят легализовать лицензии Windows Pro на имеющихся устройствах. Для новых устройств в качестве базовых лицензий подходят OEM лицензии (лицензии для производителей компьютеров).
                    </p>
                </div>
            </div>

            <Slider />

        </div>
    );
}

export default MainDown;