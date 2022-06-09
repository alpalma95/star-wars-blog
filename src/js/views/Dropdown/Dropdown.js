import React, {useContext} from "react";
import { Link } from "react-router-dom";
import {Context} from "../../store/appContext";


const Dropdown = () => {

    const {store, actions} = useContext(Context);


    return (
        <div className="dropdown">
            <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                Favorites <span className="badge bg-secondary rounded-circle">{store.favorites.length}</span>
            </button>
            <ul className="dropdown-menu p-1" aria-labelledby="dropdownMenuButton1">
                {[...store.favorites].map((x, i) => (

                    <li key={i}> 
                        <p className="d-flex justify-content-between">
                        {x.name}
                        <span id={x.id} onClick={actions.removeFavorite}>
                            🗑️
                        </span>
                        </p> 
                    </li>
            ))}
            </ul>
        </div>
    )
}

export default Dropdown;