import React, {useContext, useEffect} from "react";
import { Context } from "../store/appContext";

const Details = ({match}) => {

    useEffect(() => {console.log(match)}, [])

    const {store, actions} = useContext(Context);

    return (
        <div className="container">
            <div className="row">
                <div className="col-6">img</div>
                <div className="col-6">
                    <h1>Name</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas, iste laboriosam! Praesentium reiciendis qui, modi quibusdam eaque quidem! Quia sint accusantium nesciunt est atque dolore odit sed reprehenderit minus a.</p>
                </div>
                <hr className="dropdown-divider text-danger" />
                <div className="text-danger d-flex justify-content-around">
                    <div>
                        <p className="fw-bold">Name</p>
                        <p></p>
                    </div>
                    <div>
                        <p className="fw-bold">Birth Year</p>
                        <p></p>
                    </div>
                    <div>
                        <p className="fw-bold">Gender</p>
                        <p></p>
                    </div>
                    <div>
                        <p className="fw-bold">Height</p>
                        <p></p>
                    </div>
                    <div>
                        <p className="fw-bold">Skin Color</p>
                        <p></p>
                    </div>
                    <div>
                        <p className="fw-bold">Eye Color</p>
                        <p></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details