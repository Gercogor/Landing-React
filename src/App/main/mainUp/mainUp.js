import "./mainUp.css";

import hand from "./Hand.png";
import cards from "./Cards.png";
import graph from "./Graph.png";
import id from "./Id.png";
import notebook from "./Notebook.png";
import piechart from "./Pie Chart.png";
import sad from "./Sad.png";

function MainUp() {
    return (
        <div className="main-up">

            <div className="main-up__top">
                <div className="top__container">
                    <img className="top__img" src={hand} alt="hand" />
                    <div className="top__text">

                        <p className="top__text-h1 text-h1">
                            Уверенность для движения вперед
                        </p>

                        <p className="top__text-p text-p">
                            Подлинное ПО Microsoft обеспечивает более высокую безопасность, своевременные обновления и необходимую поддержку. Чтобы получить больше возможностей, укрепить доверие и снизить риски – приобретайте подлинное ПО Microsoft.
                        </p>

                        <a className="top__button1 buy-button" href="">
                            Купить Windows
                        </a>

                        <a className="top__button2 buy-button" href="">
                            Купить пакет программ Office
                        </a>

                    </div>
                </div>

            </div>

            <div className="main-up__bottom">

                <div className="bottom__container">

                    <div className="bottom__text">
                        <h2 className="card-block__h2">
                            Риски, связанные с контрафактным программным обеспечением
                        </h2>
                        <p className="bottom__text-p1">
                            Подумайте дважды, прежде чем покупать такие программы снова.
                        </p>
                        <p className="bottom__text-p2">
                            Нелицензионное ПО может содержать вирусы и быть лишено средств защиты для их обнаружения.
                            Так вы можете открыть доступ к вашим домашним или бизнес данным для серьезных угроз со стороны хакеров и вредоносного ПО, даже не подозревая об этом.
                        </p>
                    </div>

                    <div className="bottom__card">

                        <div className="main-up__card main-up__card_bg-w">
                            <div>
                                <img src={sad} alt="sad" />
                            </div>

                            <div className="card__text">
                                <p className="card__text-title">
                                    Вредоносные программы
                                </p>
                                <p className="card__text-p">
                                    Вредоносные программы могут содержать программы-шантажисты, которые блокируют доступ к данным или учетным записям пользователей, пока не будет уплачена сумма, запрашиваемая шантажистами.
                                </p>
                            </div>
                        </div>

                        <div className="main-up__card main-up__card_bg-g">
                            <img src={graph} alt="graph" />
                            <div className="card__text">
                                <p className="card__text-title">
                                    Репутационный и материальный ущерб
                                </p>
                                <p className="card__text-p">
                                    Хакеры могут уничтожить бизнес-данные и другие ценные сведения. Такие нарушения безопасности могут нанести ущерб вашему бизнес-имиджу и подорвать доверие к вам со стороны клиентов.
                                </p>
                            </div>
                        </div>

                    </div>



                </div>



            </div>

        </div>
    );
}

export default MainUp;