import React from "react";
import Card from "./Card";


const Section = ({sectionTitle}) => {
    return (
        <div className="container mb-2">
            <h2 className="text-danger mb-5">{sectionTitle}</h2>
            <div className="d-flex overflow-auto gap-5">
                <Card 
                    sectionTitle={sectionTitle} 
                    cardTitle="test" 
                    population="test population" 
                    terrain="test terrain" />
                
            </div>
        </div>
    )
} 

export default Section;