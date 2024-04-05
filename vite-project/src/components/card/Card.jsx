import "./Card.css"

const Card = (props) =>{
    return(
        <div className="card">
            <p >{props.id}</p>
            <p className="card-title" >{props.title}</p>
            <p className="card-price" >{props.price}$ </p>
            <p className="card-text">{props.description}</p>
            <p className="card-text">{props.category}</p>
            <img className="product-image" src = {props.image} alt="product-image"/>
            <p>{props.rating}</p>
        </div>
    )
};

export default Card;