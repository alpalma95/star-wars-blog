import React from "react";
import SectionCharacters from "./SectionCharacters";
import SectionPlanets from "./SectionPlanets"

const List = () => {
    return (
        <>
            <SectionCharacters sectionTitle="Characters" />
            <SectionPlanets sectionTitle="Planets" />
        </>
    )
}

export default List;