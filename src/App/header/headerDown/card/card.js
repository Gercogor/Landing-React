import "./card.css"

function Card(props) {
    console.log(props)
    return (

        <div className="header-down__card">
            <div className="card-top">
                <img src={props.img} alt="monitorPic" />
                <span>{props.span}</span>
            </div>
            <div className="card-bottom">
                <h3>
                    {props.h3}
                </h3>
                <p>
                    {props.p}
                </p>
            </div>
        </div>

    );

}

export default Card;