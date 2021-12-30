import "./header.css";

import HeaderUP from "./headerUP/headerUp";
import HeaderDown from "./headerDown/headerDownn";

import blackCube from "./cube.png";
import whiteRing from "./ring.png";



function Header() {
    return (
        <header className="header">
            <HeaderUP />
            <HeaderDown />
            <img className="cube-img" src={blackCube} alt="blackCube" />
            <img className="ring-img" src={whiteRing} alt="whiteRing" />
        </header>
    );
}

export default Header;
