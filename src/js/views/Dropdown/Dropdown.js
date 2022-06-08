import React, {useContext} from "react";
import { Link } from "react-router-dom";
import {Context} from "../../store/appContext";


const Dropdown = () => {

    const {store, actions} = useContext(Context);


    return (
        <div className="dropdown">
            <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Favorites <span className="badge bg-secondary rounded-circle">{store.favorites.length}</span>
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                {[...store.favorites].map((x, i) => (

                    <li key={i}> 
                        <p className="d-flex gap-1">
                        {x.name}
                        <span onClick={()=> actions.addFavorite({name: "yet another test"})}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                            </svg>
                        </span>
                        </p> 
                    </li>
            ))}
            </ul>
        </div>
    )
}

export default Dropdown;