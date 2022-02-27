import React from "react";

const getSeason = (lat, month) => {
    const isNorthernHemisphere = lat > 0;
    const winter = 'Burr, Its chilly!!'
    const summer = 'Lets hit the beach';
    if(month >2 && month < 9) {
        return isNorthernHemisphere?  summer : winter;
    } else {
        return isNorthernHemisphere? winter: summer;
    }
}

const SeasonDisplay = props => {
    console.log(JSON.stringify(props));
    return (
        <div> <h1>{getSeason(props.lat, new Date().getMonth())}</h1> </div>
    );
}

export default SeasonDisplay;