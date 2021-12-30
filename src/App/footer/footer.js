import "./footer.css"

import img4 from "./image 4.png"
import img5 from "./image 5.png"
import img6 from "./image 6.png"

function Footer() {
    return (
        <footer className="footer">

            <h2 className="footer-h2">
                Приобретайте подлинное программное обеспечение Майкрософт
            </h2>

            <div className="footer-slides">

                <div className="footer__slide">

                    <div className="footer__slide-top">
                        <img src={img4} alt="img4" />
                        <span></span>
                    </div>

                    <div className="footer__slide-bottom">
                        <h3>
                            Компьютеры
                        </h3>
                        <p>
                            Узнайте, что необходимо проверить при приобретении нового или бывшего в употреблении устройства.
                        </p>
                        <a href="">
                            Подробнее
                        </a>
                    </div>

                </div>

                <div className="footer__slide">

                    <div className="footer__slide-top">
                        <img src={img5} alt="img5" />
                        <span></span>
                    </div>

                    <div className="footer__slide-bottom">
                        <h3>
                            Упакованное программное обеспечение
                        </h3>
                        <p>
                            Знайте поддающуюся проверке особенность подлинного программного обеспечения Майкрософт.
                        </p>
                        <a href="">
                            Подробнее
                        </a>
                    </div>

                </div>

                <div className="footer__slide">

                    <div className="footer__slide-top">
                        <img src={img6} alt="img6" />
                        <span></span>
                    </div>

                    <div className="footer__slide-bottom">
                        <h3>
                            Загрузка цифровых версий программного обеспечения
                        </h3>
                        <p>
                            Эти рекомендации по безопасному приобретению помогут избежать большого количества рисков, связанных с покупкой цифровых версий программного обеспечения.
                        </p>
                        <a href="">
                            Подробнее
                        </a>
                    </div>

                </div>




            </div>



        </footer>
    )
}

export default Footer;