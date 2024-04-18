import React, { useState, useEffect } from "react";

import { LineChart, Line, XAxis,Tooltip, ResponsiveContainer } from 'recharts';

import { useContextDatas } from "../../_Utils/contexts/ContextDatas";

const LineChartComponent = () => {

  const { averageSessionUserContext } = useContextDatas();
  const [data, setData] = useState([]);

  useEffect(() => {

    if (averageSessionUserContext && averageSessionUserContext.length > 0) {
      setData(averageSessionUserContext);
    }
    
  }, [averageSessionUserContext]);

  //console.log("***averageSessionUserContext", averageSessionUserContext)

  const CustomTooltip = ({ active, payload, label }) => {

    if (active && payload && payload.length) {
      return (
        
        <div className="custom-tooltip" style={{ backgroundColor: "#ffffff", height: 40, width: 70, color: "white", fontSize: 12, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }} >
          <p className="intro" style={{ color: "black" }}>{`${payload[0].value} min`}</p>
        </div>
      );
    }

    return null;

  };

  

  const gradientId = 'gradient';


 /////////////////////////////////////////////////

// Déclaration du state pour stocker la position du curseur
const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

// Fonction pour mettre à jour la position du curseur en fonction du mouvement de la souris

const handleMouseMove = (e) => {
  const parentRect = e.currentTarget.getBoundingClientRect(); // Utilisez e.currentTarget pour obtenir les dimensions du parent
  const x = e.clientX - parentRect.left;
  const y = e.clientY - parentRect.top;

  // Limitation la plage de déplacement à l'intérieur du parent
  const minX = 0;
  const maxX = parentRect.width - 100 ; //100 La largeur de container1 est de 100px
  const clampedX = Math.min(Math.max(x, minX), maxX);

  const minY = 0;
  const maxY = parentRect.height - 353; // La hauteur de container1 est de 353px
  const clampedY = Math.min(Math.max(y, minY), maxY);

  setCursorPosition({ x: clampedX, y: clampedY });
};



///////////////:///////////////////////////////

  return (

    <div className="LineChart" onMouseMove={handleMouseMove}>

        <div className="container1" style={{
          width: '98px',
          height: '348px',
          backgroundColor: '#e60001',
          position: 'absolute', // Position absolue pour positionner l'enfant par rapport au parent
          left: (cursorPosition.x + 153 )+ 'px', // Position horizontale en fonction de la position du curseur en X
          top: "771px",
          //top: cursorPosition.y + 'px', // Position verticale en fonction de la position du curseur en Y
          //transform: 'translate(-50%, -50%)', // Translation pour centrer l'enfant par rapport au curseur
        }} >
        </div>
          
        <ResponsiveContainer width="100%" height="95%"> 
          <LineChart
            data={data}
            margin={{
              top: 100,
              left: 20,
              right: 20,
              bottom: 80
            }}
          >
            <defs>
              <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#ffffff" stopOpacity={0.2} />
                <stop offset="100%" stopColor="#ffffff" stopOpacity={1} />
              </linearGradient>
            </defs>

            {/*<XAxis  axisLine={false} dataKey="day" tickLine={false} style={{opacity: 0.5, fill: '#ffffff'}} />*/}
            
            <text x={20} y={60} style={{ fontSize: 16, fontWeight: 500, fill: '#ffffff', opacity: 0.5 }} className="titleDuree">Durée moyenne des sessions</text>
            <text x={20} y={90} style={{ fontSize: 16, fontWeight: 500, fill: '#ffffff', opacity: 0.5 }} className="title">Sessions</text>
            <Tooltip content={<CustomTooltip />} 

              cursor={{
                  stroke: "none",  //ligne verticale
                  //strokeWidth: "25%",//32,
                  
                }}
            />
            <Line type="natural" dataKey="sessionLength" stroke={`url(#${gradientId})`} strokeWidth={3} dot={false} activeDot={{ r: 8, fill: "#ffffff", stroke: "rgba(255,255,255, 0.6)",strokeWidth: 10, }}  />
          
          </LineChart>
        
      </ResponsiveContainer>

      <div className="container2">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart width={300} height={100} data={data}>
              
              <XAxis  axisLine={false} dataKey="day" tickLine={false} style={{opacity: 0.5, fill: "#ffffff"}} />
              
            </LineChart>
          </ResponsiveContainer>
      </div>
       

    </div>

  );
};

export default LineChartComponent;

