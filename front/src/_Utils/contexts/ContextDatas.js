import React, { createContext, useContext,useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

//importation des services
import { UserServices } from '../../_services/User.services'; 

 //importation de class
 import FormatDatas from '../../datas/FormatDatas';

 //importation de l'id de l'utilisateur encours
import { id } from "../../_services/User.services";

//creation du context
const createContextDatas = createContext()


const ContextDatasFunction = ({children}) => {

    const navigate = useNavigate();

    //gestion des states de la data  de l'utilisateur
    const [ dataUserContext, setDataUserContext ] = useState({})

    //gestion des states de l'activité de l'utilisateur
    const [ activityUserContext, setActivityUserContext ] = useState({})

    //gestion des states de la durée moyenne des sessions de l'utilisateur
    const [ averageSessionUserContext, setAverageSessionUserContext ] = useState({})

    //gestion des states de la complétion de l'objectif  de la journée de l'utilisateur
    const [ completionUserContext, setCompletionUserContext ] = useState({})

    //gestion des states du type d'activité de l'utilisateur(le radar chart)
    const [ typeActivityUserContext, setTypeActivityUserContext ] = useState({})


    //useEffect va se charger après que le contenu jsx se soit chargé
    useEffect( () => {

        // Création une instance de la classe FormatDatas
        const format = new FormatDatas();
        
        if(id !== 18 && id !== 12) {

            setDataUserContext(
                format._getUser( format._USER_INFOS_AND_COMPLETIONS[0])
            )
        }else{

        //récupération des données de l'utilisateur 
        UserServices.getUser()
            .then( (res)=>{

                //let response 

                // Création une instance de la classe FormatDatas
                const format = new FormatDatas();
                
                
                setDataUserContext(
                    format._getUser(res.data.data)
                )

            })
            .catch( function(err){

                console.log( "**** utilisateur non récupéré")
                console.log( err)

                navigate("/error")

            
            })

        }

        
        //Barchart récupération de l'activité quotidienne de l'utilisateur
        if(id !== 18 && id !== 12) {
            
            setActivityUserContext(
                format._getActivityUser( format._USER_ACTIVITY[0])
            )
        }else{

            UserServices.getActivityUser()
            .then( (res)=>{

                // Création une instance de la classe FormatDatas
               const format = new FormatDatas();

               setActivityUserContext(
                format._getActivityUser(res.data.data)
              )
              
            
               
            
            })
            .catch( function(err){

                console.log( "**** activité non récupérée")
                console.log( err)

                navigate("/error")

                

            })
        }

        //Linechart récupération de la durée moyenne des sessions de l'utilisateur
        if(id !== 18 && id !== 12) {
            
            setAverageSessionUserContext(
                format._getAverageSessionUser(format._USER_AVERAGESESSIONS[0].sessions)
              )
        }else{

            UserServices.getAverageSessionUser()
            .then( (res)=>{

                // Création une instance de la classe FormatDatas
                const format = new FormatDatas();

                setAverageSessionUserContext(
                format._getAverageSessionUser(res.data.data.sessions)
                )

            
            })
            .catch( function(err){

                // console.log( "**** durée moyenne non récupéré")
                // console.log( err)

                navigate("/error")

            })
        }

       
       //RadialBarChartComponent récupération de la complétion de l'objectif  de la journée de l'utilisateur
        if(id !== 18 && id !== 12) {
            
            setCompletionUserContext(
                format._getCompletionUser(format._USER_INFOS_AND_COMPLETIONS[0])
                )
        }else{

            UserServices.getCompletionUser() //12
            .then( (res)=>{

                // Création une instance de la classe FormatDatas
               const format = new FormatDatas();


                if(res.data.data && res.data.data !== 0){
                        
                    //console.log("***res.data.data.todayScore", res.data.data.todayScore)

                    //cas où on a todayScore et pas score
                    setCompletionUserContext(
                        format._getCompletionUser(res.data.data)
                        
                    )
                }
               
            
            })
            .catch( function(err){

                console.log( "**** score non récupéré")
                console.log( err)

                navigate("/error")

            })

        }

        //récupération du type d'activité de l'utilisateur(le radar chart)
        if(id !== 18 && id !== 12) {
            
            setTypeActivityUserContext(
                format._getTypeActivityUser(format._USER_KINDACTIVITY[0])
               )
        }else{

            UserServices.getTypeActivityUser()
            .then( (res)=>{

                 // Création une instance de la classe FormatDatas
               const format = new FormatDatas();

               setTypeActivityUserContext(
                format._getTypeActivityUser(res.data.data)
               )
               
            
            })
            .catch( function(err){

                console.log( "**** activités non récupérées")
                console.log( err)

                navigate("/error")

            })

        }

           
      
    },[navigate])

    return (
        <createContextDatas.Provider value={{ dataUserContext,
            activityUserContext,averageSessionUserContext,completionUserContext,
             typeActivityUserContext
            }} > 

                {children}

        </createContextDatas.Provider>
    );
};

//Attention c'est essential de retourner ce context bien précise car c'est lui qu'on récupèrera dans les autres composants qui en ont besoin
const useContextDatas = () => {

    return useContext(createContextDatas);
};
  
export { ContextDatasFunction, useContextDatas };
