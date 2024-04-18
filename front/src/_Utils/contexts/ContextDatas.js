import React, { createContext, useContext,useEffect, useState } from 'react';

//importation des services
import { UserServices } from '../../_services/User.services'; 

//importation des données du mock
import { USER_DATA, USER_ACTIVITY, USER_COMPLETION  } from "../../mockDatas/MockData";

//creation du context
const createContextDatas = createContext()

const ContextDatasFunction = ({children}) => {

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

    //gestion des states du chiffre clé de l'utilisateur (les cards)
    //const [ keyDataUserContext, setKeyDataUserContext ] = useState({})

    

    //useEffect va se charger après que le contenu jsx se soit chargé
    useEffect( () => {

        
        //récupération des données de l'utilisateur 
        UserServices.getUser()
            .then( (res)=>{

                let response 

                if(res.data.data && res.data.data.userInfos){

                   response = res.data.data
                }else{
                    
                    //application de la donnée USER_DATA mock
                    response = USER_DATA
                }
                

                setDataUserContext(response)
            
            })
            .catch( function(err){

                console.log( "**** utilisateur non récupéré")
                console.log( err)

            })

        //Barchart récupération de l'activité quotidienne de l'utilisateur
        UserServices.getActivityUser()
            .then( (res)=>{

                const response = res.data.data

                const response1 =  USER_ACTIVITY.data

            
                ///////////////////////////////////
                
                if(response.sessions && response.sessions.length > 0){

                        //formatage de la date en jours
                        for(let i=0; i<response.sessions.length; i++){

                            let dateCurrent = response.sessions[i].day;
                            let day1 = dateCurrent.split("-")[2]  //récupération du jour
                            let day =day1.startsWith("0") ? day1[1] : day1; //suppression du 0 devant le jour
                            //console.log("**** day", day)
                            
                            response.sessions[i].day = day; //remplacement de la date par le jour
                        }

                }else{

                    response.sessions = response1.sessions

                    //formatage de la date en jours
                    for(let i=0; i<response1.sessions.length; i++){

                        let dateCurrent = response1.sessions[i].day;
                        let day1 = dateCurrent.split("-")[2]  //récupération du jour
                        let day =day1.startsWith("0") ? day1[1] : day1; //suppression du 0 devant le jour
                        //console.log("**** day", day)
                        
                        response1.sessions[i].day = day; //remplacement de la date par le jour
                    }
                    
                }
        
                ///////////////////////////////////
            
                setActivityUserContext(response)
            
            })
            .catch( function(err){

                console.log( "**** activité non récupérée")
                console.log( err)

            })

        //récupération de la durée moyenne des sessions de l'utilisateur
        UserServices.getAverageSessionUser()
            .then( (res)=>{

            
                let response = res.data.data

                const response1 =  USER_ACTIVITY.data.sessions
                
                ///////////////////////////////////
                
                if(response.sessions && response.sessions.length > 0){

                    //formatage de la donnée
                     response = res.data.data.sessions
                     

                }else{

                    //application de la donnée USER_ACTIVITY mock
                    response = response1
 
                }
    
                ///////////////////////////////////
                
            
                setAverageSessionUserContext(response)
            
            })
            .catch( function(err){

                console.log( "**** durée moyenne non récupéré")
                console.log( err)

            })

            //RadialBarChartComponent récupération de la complétion de l'objectif  de la journée de l'utilisateur
            UserServices.getCompletionUser() //12
            .then( (res)=>{

              
                let response 

                if(res.data.data.todayScore && res.data.data.todayScore !== 0){
                    
                    //cas où on a todayScore et pas score
                    //conversion en pourcentage
                     response = res.data.data.todayScore * 100 
                    
                }else if(res.data.data.score && res.data.data.score !== 0){

                    //cas où on a score et pas todayScore
                    //conversion en pourcentage
                     response = res.data.data.score * 100 

                }else{

                    //application de la donnée USER_COMPLETION mock
                    response = USER_COMPLETION.todayScore 

                }
               
                setCompletionUserContext(response)
            
            })

            //récupération du type d'activité de l'utilisateur(le radar chart)
            UserServices.getTypeActivityUser()
            .then( (res)=>{

              

                const response = res.data.data

                ////////////////////////////////
               
                //formatage des données

                //correspondance des données(conversion des numéros en lettres)
                //Remplacement des numéros par les lettres correspondantes dans le tableau data
                for(let i=0; i<response.data.length; i++){

                    let kindCurrent = response.data[i].kind;
                

                    //ici on met break pour sortir de la boucle switch car on a une boucle for ça évite de refaire tous les cas à chaque tour de boucle for
                    switch (kindCurrent) {
                        case 1:
                            response.data[i].kind = response.kind[kindCurrent];
                        break;
                        case 2:
                            response.data[i].kind = response.kind[kindCurrent];
                        break;
                        case 3:
                            response.data[i].kind = response.kind[kindCurrent];
                        break;
                        case 4:
                            response.data[i].kind = response.kind[kindCurrent];
                        break;
                        case 5:
                            response.data[i].kind = response.kind[kindCurrent];
                        break;
                        case 6:
                            response.data[i].kind = response.kind[kindCurrent];
                        break;
                        default:
                        
                    }
                    

                }


                //inversion du sens des objets du tableau data
                let data = response.data.reverse();
                
                //console.log("**** data reverse", data)

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

                ////////////////////////////////
            
                setTypeActivityUserContext(response)
            
            })

          

        

    },[])

    return (
        <createContextDatas.Provider value={{ dataUserContext,
            activityUserContext,averageSessionUserContext,completionUserContext, typeActivityUserContext,
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
