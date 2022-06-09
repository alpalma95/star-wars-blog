import React, {useContext, useEffect, useState} from "react";
import { Context } from "../store/appContext";

const Details = ({match}) => {

    const [generalInfo, setGeneralInfo] = useState(null);
    const [details, setDetails] = useState(null)

    useEffect(() => {

        for (let i in store.characters) {
            if (store.characters[i].uid == match.params.id) setGeneralInfo(store.characters[i])
        }
        
        for (let i in store.charactersDetails) {
            if (store.charactersDetails[i].uid == match.params.id) setDetails(store.charactersDetails[i])
        }

    }, [])

    const {store, actions} = useContext(Context);


    return (
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <img src={`https://starwars-visualguide.com/assets/img/characters/${match.params.id}.jpg`} alt="character of Star Wars universe" />
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
                        <p className="fw-bold">Birth Year</p>
                        <p>{details.properties.birth_year}</p>
                    </div>
                    <div>
                        <p className="fw-bold">Gender</p>
                        <p>{details.properties.gender}</p>
                    </div>
                    <div>
                        <p className="fw-bold">Height</p>
                        <p>{details.properties.height}</p>
                    </div>
                    <div>
                        <p className="fw-bold">Skin Color</p>
                        <p>{details.properties.skin_color}</p>
                    </div>
                    <div>
                        <p className="fw-bold">Eye Color</p>
                        <p>details.properties.eye_color</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details