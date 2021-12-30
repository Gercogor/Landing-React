import "./headerDown.css"

import shieldPic from "./Shield Cross 1.png";
import monitorPic from "./Monitoring1.png";
import timePic from "./Time.png";
import attenPic from "./Attention.png";

function HeaderDown() {
    return (
        <div className="header-down">
            <div className="header-down__text-block">
                <div className="header-down__text">
                    <p className="header-down__text-h1 text-h1">
                        Контрафактное программное обеспечение - риск для кибербезопасности
                    </p>
                    <p className="header-down__text-p text-p">
                        Распространение неподлинного ПО — широко распространенная общемировая проблема. Киберпреступники используют нелицензионное программное
                        обеспечение для распространения вредоносных программ, а пользователи подвергают себя различным рискам безопасности.
                    </p>
                </div>
                <img src={shieldPic} alt="shieldPic" />
            </div>

            <div className="header-down__card-block">
                <h2 className="card-block__h2">
                    Доступность контрафактной продукции и риски, связанные с ней
                </h2>


                <div className="card-block__container">
                    
                    <div className="header-down__card">
                        <div className="card-top card-top_white">
                            <img src={monitorPic} alt="monitorPic" />
                            <span>39%</span>
                        </div>
                        <div className="card-bottom card-bottom_white">
                            <h3>
                                Простые ошибки
                            </h3>
                            <p>
                                39 процентов непреднамеренных покупок контрафактных продуктов совершены на признанных соответствующими законодательству сторонних торговых площадках в Интернете.*
                            </p>
                        </div>
                    </div>

                    <div className="header-down__card black">
                        <div className="card-top">
                            <img src={timePic} alt="timePic" />
                            <span>20%</span>
                        </div>
                        <div className="card-bottom">
                            <h3>
                                Увеличение количества вредоносных программ
                            </h3>
                            <p>
                                На 20% больше вредоносного ПО обнаруживается на компьютерах пользователей, если они провели на сайтах с нелицензионными программами вдвое больше времени**
                            </p>
                        </div>
                    </div>

                    <div className="header-down__card black">
                        <div className="card-top">
                            <img src={attenPic} alt="attenPic" />
                            <span>1/2 <span>триллиона</span> </span>
                        </div>
                        <div className="card-bottom">
                            <h3>
                                Повсеместное распространение
                            </h3>
                            <p>
                                ½ триллиона долларов США по стоимости
                                или 3,3 % импорта во всем мире приходится
                                на контрафактные или пиратские продукты.*
                            </p>
                        </div>
                    </div>
                </div>



            </div>

            <div className="header-down__bottom">
                <p >
                    *Источник. Борьба с незаконным оборотом контрафактной и пиратской продукции: Министерство внутренней безопасности США, январь 2020 г.
                </p>
                <p>
                    **Источник. Пиратство и вредоносные программы. Не бывает бесплатных завтраков: Институт технической политики, март 2018 г.
                </p>
            </div>


        </div>
    )
}

export default HeaderDown;