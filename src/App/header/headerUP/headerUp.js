import NavPanel from "./navPanel/navPanel";
import InfoBlock from "./infoBlock/infoBlock"; 

import "./headerUp.css"

function HeaderUP() {
    return (
        <div className="header-up">
            <NavPanel />
            <InfoBlock />
        </div>
    )
}

export default HeaderUP;