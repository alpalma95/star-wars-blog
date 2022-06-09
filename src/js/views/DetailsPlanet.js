import React, {useContext, useEffect, useState} from "react";
import { Context } from "../store/appContext";

const Details = ({match}) => {

    useEffect(() => {console.log(match)}, [])

    const [generalInfo, setGeneralInfo] = useState({
        name: "loading"
    });
    const [details, setDetails] = useState({
        description: "Loading...",
        properties: {
            population: "Loading...",
            orbital_period: "Loading...",
            rotation_period: "Loading...",
            gravity: "Loading...",
            diameter: "Loading...",
            climate: "Loading..."
        }
    });

    const {store, actions} = useContext(Context);

    useEffect(() => {

        for (let i in store.planets) {
            if (store.planets[i].uid == match.params.id) setGeneralInfo(store.planets[i])
        }
        
        for (let i in store.planetsDetails) {
            if (store.planetsDetails[i].uid == match.params.id) setDetails(store.planetsDetails[i])
        }

    }, [])

    const imgUrl = (
        match.params.id == "1" ?
        "https://picsum.photos/300/300"
        :
        `https://starwars-visualguide.com/assets/img/planets/${match.params.id}.jpg`
    )

    return (
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <img src={imgUrl} alt="character of Star Wars universe" />
                </div>
                <div className="col-6">
                    <h1>{generalInfo.name}</h1>
                    <p>{details.description}</p>
                </div>
                <hr className="dropdown-divider text-danger" />
                <div className="text-danger d-flex justify-content-around">
                    <div>
                        <p className="fw-bold">Name</p>
                        <p>{generalInfo.name}</p>
                    </div>
                    <div>
                        <p className="fw-bold">Population</p>
                        <p>{details.properties.population}</p>
                    </div>
                    <div>
                        <p className="fw-bold">Orbital Period</p>
                        <p>{details.properties.orbital_period}</p>
                    </div>
                    <div>
                        <p className="fw-bold">Rotation Period</p>
                        <p>{details.properties.rotation_period}</p>
                    </div>
                    <div>
                        <p className="fw-bold">Gravity</p>
                        <p>{details.properties.gravity}</p>
                    </div>
                    <div>
                        <p className="fw-bold">Diameter</p>
                        <p>{details.properties.diameter}</p>
                    </div>
                    <div>
                        <p className="fw-bold">Climate</p>
                        <p>{details.properties.climate}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details