import React from "react";


//importation des composants
import UserWelcome from "../components/UserWelcome";
import BarChartComponent from "../components/diagrammes/BarChartComponent";
import LineChartComponent from "../components/diagrammes/LineChartComponent";
import RadarChartComponent from "../components/diagrammes/RadarChartComponent";
import RadialBarChartComponent from "../components/diagrammes/RadialBarChartComponent";
import KeyInformation from "../components/diagrammes/KeyInformation";

const Profil = () => {
    return (
        <div className='Profil'>
            <UserWelcome />
            < div className="Profil__container">
                <div className="containerDiagramme">
                    <BarChartComponent />
                    <div className="Profil__containerDiagram">
                        <LineChartComponent />
                        <RadarChartComponent />
                        <RadialBarChartComponent />

                    </div>
                </div>

                <div className="containerAlimentation">
                    <KeyInformation />
                </div>

            </div>
           
           
           
           
           
        </div>
    );
};

export default Profil;