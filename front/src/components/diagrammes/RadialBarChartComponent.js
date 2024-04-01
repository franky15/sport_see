import React, { useState, useEffect } from "react";

import {  Pie, PieChart, ResponsiveContainer } from "recharts";
import { useContextDatas } from "../../_Utils/contexts/ContextDatas";

const RadialBarChartComponent = () => {

    const { dataUserContext } = useContextDatas();

    const [data, setData] = useState({
        todayScore: 0,
    });

   
    useEffect(() => {

        if (dataUserContext.todayScore && dataUserContext.todayScore !== 0) {

            setData( {
                 todayScore: dataUserContext.todayScore * 100  //rajout d'une valeur max au score pour avoir un pourcentage
                 
            });

        }
        
    }, [dataUserContext]);

    //donnée fictive pour le centre du diagramme
    const data01 = [
        { name: 'Group A', value: 400 },
       
      ];

    let listScore = []
    //fonction de rajout de la valeur du score maximal et de la couleur de remplissage de la partie de score manquant ou max
    const dataMax = ()=>{

        
        if(data.todayScore ){

            listScore.push(data)

            listScore.push({
                todayScore: 100 - data.todayScore,
                fill: "#fBfBfB",
                stroke: "none"
            })
        }
          
    
    }
    dataMax()
   
    return (
        <div className="RadialBarChartComponent">

            <ResponsiveContainer width="100%" height="100%">
                <PieChart width={400} height={400}  >

                    <Pie data={listScore} dataKey="todayScore" cx="50%" cy="50%"  outerRadius={105} fill="#ff0000" startAngle={160} cornerRadius={9} />
                    <Pie data={data01} dataKey="value" cx="50%" cy="50%"  outerRadius={90} fill="white"  /> 
                   
                    <text x={20} y={60} style={{ fontSize: 16, fontWeight: 500, fill: 'black',}} className="title">Score</text>
                    <text x={"42%"} y={"50%"} style={{ fontSize: 28, fontWeight: 500, fill: 'black',}} className="title"> {`${data.todayScore }%`} </text>
                    <text x={"42%"} y={"55%"} style={{ fontSize: 16, fontWeight: 500, fill: '#74798c',  }} className="title">de votre</text>
                    <text x={"42%"} y={"60%"} style={{ fontSize: 16, fontWeight: 500, fill: '#74798c', }} className="title">objectif</text>
                </PieChart>
            </ResponsiveContainer>

        </div>
    );
};

export default RadialBarChartComponent;
