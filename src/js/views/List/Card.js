import React, {useState, useEffect, useContext} from "react";
import {Link} from "react-router-dom";
import {Context} from "../../store/appContext";


const Card = ({sectionTitle, cardTitle, url, id}) => {
  
    const {store, actions} = useContext(Context);

    useEffect(()=> {
        if (sectionTitle === "Characters") actions.loadCharactersDetails(url);
      
    }, [])

    useEffect(()=>{
        if (sectionTitle === "Planets") actions.loadPlanetsDetails(url);
    }, [])
    
    const [details, setDetails] = useState({
        properties: {
            gender: "loading",
            hair_color: "loading",
            eye_color: "loading",
            population: "loading",
            terrain: "loading"
        }
    }) //put values as undefined

    // if (sectionTitle === "Characters"){
    //     for (let i in store.characters){
    //         if (store.characters[i].url == url) setDetails(store.characters[i]);
    //         break;
    //     }
    // } else {
    //     for (let i in store.planets){
    //         if (store.planets[i].url == url) setDetails(store.planets[i]);
    //     }
    // }

    //useeffect
    // fetch(url)-> data -> hair / popul

    const cardType = sectionTitle;

    const imgUrl = (
        cardType === "Characters" ?
        `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`
        : 
        cardType === "Planets" && id == "1" ?
        "https://picsum.photos/300/300"
        :
        `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`
    )
    
    const routerLink = (
        cardType === "Characters" ?
        `/people/${id}`
        :
        `/planets/${id}`
    );

    const bodyContent = ( 
        cardType === "Characters" ?

        <ul className="list-unstyled card-text">
            <li>Gender: {details.properties.gender} </li>
            <li>Hair-color: {details.properties.hair_color} </li>
            <li>Eye-Color: {details.properties.eye_color}</li>
        </ul>
        :
        <ul className="list-unstyled card-text">
            <li>Population: {details.properties.population}</li>
            <li>Terrain: {details.properties.terrain}</li>
        </ul>
    )


    return (
        <div className="card col-5" style={{width: "18rem"}}>
            <img src={imgUrl} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{cardTitle}</h5>
                {bodyContent}
                <div className="d-flex">
                <Link to={routerLink}>
                    <button className="btn btn-outline-primary">Learn more!</button>
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