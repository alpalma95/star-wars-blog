import React from "react";
import {Link} from "react-router-dom";

const Card = ({sectionTitle, cardTitle, gender, hair, eye, population, terrain}) => {

    const cardType = sectionTitle;

    const bodyContent = ( 
        cardType === "Characters" ?

        <ul className="list-unstyled card-text">
            <li>Gender: {gender} </li>
            <li>Hair-color: {hair} </li>
            <li>Eye-Color: {eye}</li>
        </ul>
        :
        <ul className="list-unstyled card-text">
            <li>Population: {population}</li>
            <li>Terrain: {terrain}</li>
        </ul>
    )


    return (
        <div className="card col-5" style={{width: "18rem"}}>
            <img src="https://picsum.photos/300/200" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{cardTitle}</h5>
                {bodyContent}
                <div className="d-flex">
                <Link to="#">
                    <button className="btn btn-outline-primary">Go somewhere</button>
                </Link>
                <button className="btn btn-outline-warning ms-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                </svg>
                </button>
                </div>
            </div>
        </div>
    )
}

export default Card;