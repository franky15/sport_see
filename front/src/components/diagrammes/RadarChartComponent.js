import React, { useState, useEffect } from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';


//importation du context
import { useContextDatas } from "../../_Utils/contexts/ContextDatas";

const RadarChartComponent = () => {

    const { typeActivityUserContext } = useContextDatas();

    const [data, setData] = useState([]);

    useEffect(() => {

        if (typeActivityUserContext.data && typeActivityUserContext.data.length > 0) {
        

            //correspondance des données(conversion des numéros en lettres)
            //Remplacement des numéros par les lettres correspondantes dans le tableau data
            for(let i=0; i<typeActivityUserContext.data.length; i++){

                let kindCurrent = typeActivityUserContext.data[i].kind;
               
                //ici on met break pour sortir de la boucle switch car on a une boucle for ça évite de refaire tous les cas à chaque tour de boucle for
                switch (kindCurrent) {
                    case 1:
                      typeActivityUserContext.data[i].kind = typeActivityUserContext.kind[kindCurrent];
                      break;
                    case 2:
                      typeActivityUserContext.data[i].kind = typeActivityUserContext.kind[kindCurrent];
                      break;
                    case 3:
                      typeActivityUserContext.data[i].kind = typeActivityUserContext.kind[kindCurrent];
                      break;
                    case 4:
                      typeActivityUserContext.data[i].kind = typeActivityUserContext.kind[kindCurrent];
                      break;
                    case 5:
                      typeActivityUserContext.data[i].kind = typeActivityUserContext.kind[kindCurrent];
                      break;
                    case 6:
                      typeActivityUserContext.data[i].kind = typeActivityUserContext.kind[kindCurrent];
                      break;
                    default:
                     
                  }
                  

            }


            //inversion du sens des objets du tableau data
            let data = typeActivityUserContext.data.reverse();

            //fonction de conversion des valeurs des objets de l'anglais vers le français
            const dataConvert = (data) => {

                for(let i=0; i<data.length; i++){

                    let kindCurrent = data[i].kind;
                   
                    //ici on met break pour sortir de la boucle switch car on a une boucle for ça évite de refaire tous les cas à chaque tour de boucle for
                    switch (kindCurrent) {
                        case "cardio":
                          data[i].kind = "Cardio";
                          break;
                        case "endurance":
                          data[i].kind = "Endurance";
                          break;
                        case "strength":
                          data[i].kind = "Force";
                          break;
                        case "speed":
                          data[i].kind = "Vitesse";
                          break;
                        case "energy":
                          data[i].kind = "Energie";
                          break;
                        case "intensity":
                          data[i].kind = "Intensité";
                          break;
                        default:
                         
                      }
                      

                }
            }
            dataConvert(data)
            
            
            setData(data);
            
        }

        

    }, [typeActivityUserContext]);


    return (
        <div className='RadarChartComponent'>
            {
                data && data.length > 0 &&

                <ResponsiveContainer width="95%" height="90%"  >
                    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data} >
                    <PolarGrid radialLines={false} />
                    <PolarAngleAxis dataKey="kind"  stroke="white"
                        dy={4}
                        tickLine={false}
                        tick={{
                        fontSize: 12,
                        fontWeight: 500,
                        
                        }}  
                        
                    />
                    <Radar  dataKey="value"  fill="#ff0000" fillOpacity={0.6}  />
                    </RadarChart>
               </ResponsiveContainer>
            }
        </div>
    );
};

export default RadarChartComponent;