import "./infoBlock.css";
import productPic from "./product.png";

function InfoBlock() {
    return (
        <div className="info-block">

            <div className="info-block__container">

                <div className="info-block__text">
                    <p className="info-block__text-title">
                        Уверенность
                    </p>
                    <p className="info-block__text-p">
                        Для движения вперед
                        с подлинными версиями
                        Windows и Office
                    </p>
                    <a className="buy-button buy-button_bg" href="">Купить лицензионное ПО</a>
                </div>

                <div className="info-block__pic">
                    <img src={productPic} alt="productPic" />
                </div>
                
            </div>
            

        </div>
    );
}

export default InfoBlock;