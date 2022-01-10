import "./mainUpCard.css";

function MainUpCard(props) {
    return (

        <div className="main-up__card main-up__card_bg-w">

            <div>
                <img src={props.img} alt={props.img} />
            </div>

            <div className="card__text">

                <p className="card__text-title">
                    {props.title}
                </p>

                <p className="card__text-p">
                    {props.text}
                </p>

            </div>

        </div>
    )
}

export default MainUpCard;