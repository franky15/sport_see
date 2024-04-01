import React, { useState, useEffect } from "react";

import { useContextDatas } from "../../_Utils/contexts/ContextDatas";

//importation des images du dossier images
import calories from "../../images/calories.png";
import proteines from "../../images/protein.png";
import glucides from "../../images/pommes.png";
import lipides from "../../images/burger.png";

const KeyInformation = () => {

    const { dataUserContext } = useContextDatas();

    const [data, setData] = useState({});

   
    useEffect(() => {

        if (dataUserContext && dataUserContext.keyData ) {

            
            setData( 
                dataUserContext.keyData
            );

        }
        
    }, [dataUserContext]);

   
    return (
        <div className="KeyInformation">
            <div className="KeyInformation__item"> 
                <div className="KeyInformation__item--icon">
                    <img src={calories} alt="calories" />
                </div>
                <div className="KeyInformation__item--calories">
                    <span className="KeyInformation__item--calorie--value" style={{ fontSize: "23px",fontWeight: "bold"}}>{`${data.calorieCount}kCal`}</span>
                    <span className="KeyInformation__item--calorie--unit" style={{ color: "#74798c"}}>Calories</span>
                </div>
            </div>

            <div className="KeyInformation__item"> 
                <div className="KeyInformation__item--icon">
                    <img src={proteines} alt="proteines" />
                </div>
                <div className="KeyInformation__item--calories">
                    <span className="KeyInformation__item--calorie--value" style={{ fontSize: "23px",fontWeight: "bold"}}>{`${data.proteinCount}g`}</span>
                    <span className="KeyInformation__item--calorie--unit" style={{ color: "#74798c"}}>Proteines</span>
                </div>
            </div>

            <div className="KeyInformation__item"> 
                <div className="KeyInformation__item--icon">
                    <img src={glucides} alt="glucides" />
                </div>
                <div className="KeyInformation__item--calories">
                    <span className="KeyInformation__item--calorie--value" style={{ fontSize: "23px",fontWeight: "bold"}}>{`${data.carbohydrateCount}g`}</span>
                    <span className="KeyInformation__item--calorie--unit" style={{ color: "#74798c"}}>Glucides</span>
                </div>
            </div>

            <div className="KeyInformation__item"> 
                <div className="KeyInformation__item--icon">
                    <img src={lipides} alt="lipides" />
                </div>
                <div className="KeyInformation__item--calories">
                    <span className="KeyInformation__item--calorie--value" style={{ fontSize: "23px",fontWeight: "bold"}}>{`${data.lipidCount}g`}</span>
                    <span className="KeyInformation__item--calorie--unit" style={{ color: "#74798c"}}>Lipides</span>
                </div>
            </div>
        </div>
    );
};

export default KeyInformation;