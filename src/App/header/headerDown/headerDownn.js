import "./headerDown.css"

import shieldPic from "./Shield Cross 1.png";
import monitorPic from "./Monitoring1.png";
import timePic from "./Time.png";
import attenPic from "./Attention.png";
// import monitorPic2 from "./Monitoring222.png";

import Card from "./card/card";

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

                    <Card
                        img={monitorPic}
                        span="39%"
                        h3="Простые ошибки"
                        p="39 процентов непреднамеренных покупок контрафактных продуктов совершены на признанных соответствующими законодательству сторонних торговых площадках в Интернете.*"
                    />

                    <Card
                        img={timePic}
                        span="20%"
                        h3="Увеличение количества вредоносных программ"
                        p="На 20% больше вредоносного ПО обнаруживается на компьютерах пользователей, если они провели на сайтах с нелицензионными программами вдвое больше времени"
                    />

                    <Card
                        img={attenPic}
                        span="1/2 трлн"
                        h3="Повсеместное распространение"
                        p="½ триллиона долларов США по стоимости
                        или 3,3 % импорта во всем мире приходится
                        на контрафактные или пиратские продукты.*"
                    />

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