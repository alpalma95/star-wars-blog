import React, {useContext} from "react";
import Card from "./Card";
import {Context} from "../../store/appContext";
import Spinner from "../../component/spinner"


const SectionCharacters = ({sectionTitle}) => {

    const {store, actions} = useContext(Context)


    return (
        <div className="container mb-2">
            <h2 className="text-danger mb-5">{sectionTitle}</h2>
            <div className="d-flex overflow-auto gap-5">
                {
                    store.characters.length != 0 ? 
                        [...store.characters].map((x, i) => (
                            <Card 
                                key={i}
                                sectionTitle={sectionTitle}
                                url={x.url}
                                cardTitle={x.name}
                                id={`c-${x.uid}`}
                                imgId={x.uid}
                            />
                        ))
                    :

                    <Spinner />

                }                
            </div>
        </div>
    )
} 

export default SectionCharacters;