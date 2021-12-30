import "./main.css"

import MainDown from "./mainDown/mainDown";
import MainUp from "./mainUp/mainUp";


function Main() {
    return (
        <main className="main">
            <MainUp />
            <MainDown />
        </main>
    )
}

export default Main;