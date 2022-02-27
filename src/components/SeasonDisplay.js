import React from "react";

const seasonConfig = {
    summer: {text: 'Lets hit the beach', iconName: 'sun'},
    winter: {text: 'Burr, Its chilly!!', iconName: 'snowflake'}
}
const getSeason = (lat, month) => {
    const isNorthernHemisphere = lat > 0;
    if(month >2 && month < 9) {
        return isNorthernHemisphere?  'summer' : 'winter';
    } else {
        return isNorthernHemisphere? 'winter': 'summer';
    }
}

const SeasonDisplay = props => {
    console.log(JSON.stringify(props));
    const season = getSeason(props.lat, new Date().getMonth());
    const {text, iconName} = seasonConfig[season];
    return (
        <div> 
            <i className= {`massive ${iconName} icon`}/>
            <h1>{text}</h1> 
            <i className= {`massive ${iconName} icon`}/>
        </div>
    );
}

export default SeasonDisplay;