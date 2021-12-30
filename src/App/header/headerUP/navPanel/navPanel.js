import "./navPanel.css";

import logoMS from "./logoMS.png";
import logoMont from "./logoMont.png";

function NavPanel() {
    return (
        <div className="nav-panel">
            <div className="nav-panel__logo">
                <img className="logo" src={logoMS} alt="LogoMS" />
                <img className="logo" src={logoMont} alt="LogoMont" />
            </div>

            <div className="nav-panel__button">
                <a className="button" href="">
                    Приемущества
                </a>
                <a className="button" href="">
                    Риски
                </a>
                <a className="button" href="">
                    Проверка ПО
                </a>
                <a className="button" href="">
                    FAQ
                </a>
                <a className="button nav__buy-button" href="">
                    Купить
                </a>
            </div>








        </div>
    );

}

export default NavPanel;