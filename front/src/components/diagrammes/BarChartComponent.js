import React, { useState, useEffect } from "react";

//importation du context
import { useContextDatas } from "../../_Utils/contexts/ContextDatas";

//importation de la librairie de diagramme
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";



const BarChartComponent = () => {
  const { activityUserContext } = useContextDatas();

  //console.log("***activityUserContext", activityUserContext)

  //gestion du sate de l'utilisateur
  const [data, setData] = useState([]);


  let list = [];

  //setData(USER_DATA) 

  useEffect(() => {
    //récupération des données de l'utilisateur
    if (activityUserContext && activityUserContext.length > 0) { 
      //console.log("***activityUserContext.sessions");
      //console.log(activityUserContext.sessions);

      setData(activityUserContext);

    }



  }, [activityUserContext]);

  //console.log("data Barchart", data )
    
  //fonction de customisation du tooltip
    const CustomTooltip = ({ active, payload, label }) => {

        if (active && payload && payload.length) {

          //console.log("payload", payload)
            return (
                <div className="custom-tooltip" style={{ backgroundColor: "#ff0000", height: 100, width: 70,  color: "white", fontSize: 12, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }} >
                    
                    <p className="intro">{`${payload[0].value} kg`}</p>
                    <p className="intro">{`${payload[1].value} kCal`}</p>
                </div>
            );
        }
    
        return null;
    };

   
  return (
    <div className="BarChartComponent1">

       <div className="titleBarchart">
            <p>Activité quotidienne</p>

            <div className="titleBarchart__legend">

                <div className="titleBarchart__legend--Item">
                    
                        <span className="icon poidsIcon"></span>
                        <span className="unit">Poids(kg)</span>
                    
                </div>
                <div className="titleBarchart__legend--Item">
                    
                        <span className="icon caloriesIcon"></span>
                        <span className="unit">Calories brûlées (kCal)</span>
                    
                </div>

            </div>

        </div>

      { data.length > 0 &&

        <div className="BarChartComponent">
   
            <ResponsiveContainer width="100%" height="80%" className="BarChartComponent__test">

                <BarChart data={data}  barSize={15} className="barchartItem" margin={{
                        //top: 50,
                        bottom: 20,
                        right: 40,
                        left: 56,
                    
                    }}
                
                >
                
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis  tickLine={{ stroke: "#ffffff" }}  padding={{ left: -65, right: -66 }}  dataKey={ (value) =>{

                        const day = value.day
                        return day 
                    
                    }} />
                    <YAxis  axisLine={false}   tickMargin={30} orientation="right"  tickLine={{ stroke: "#ffffff" }}  />
                    <Tooltip   content={<CustomTooltip />} />
                    
                    <Bar  dataKey="kilogram"  fill="#020203"  shape={<Rectangle radius={[5, 5, 0, 0]} />}  />
                    <Bar dataKey="calories" fill="#ff0000"  shape={<Rectangle radius={[5, 5, 0, 0]} />} />
                
                </BarChart>

            </ResponsiveContainer>

      </div>
      }
    </div>
  );
};

export default BarChartComponent;
