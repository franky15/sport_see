import React, { useState, useEffect } from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';


//importation du context
import { useContextDatas } from "../../_Utils/contexts/ContextDatas";

const RadarChartComponent = () => {

    const { typeActivityUserContext } = useContextDatas();

    //console.log("*****typeActivityUserContext", typeActivityUserContext)

    const [data, setData] = useState([]);

    useEffect(() => {

        if (typeActivityUserContext && typeActivityUserContext.length > 0) {
        
           
          setData(typeActivityUserContext);
            
        }

        

    }, [typeActivityUserContext]);

    //console.log("data RadarChart", data)

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