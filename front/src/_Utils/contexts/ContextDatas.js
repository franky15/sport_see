import React, { createContext, useContext,useEffect, useState } from 'react';

//importation des services
import { UserServices } from '../../_services/User.services'; 

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
    const [ keyDataUserContext, setKeyDataUserContext ] = useState({})

    //useEffect va se charger après que le contenu jsx se soit chargé
    useEffect( () => {

        
        //récupération des données de l'utilisateur 
        UserServices.getUser(12)
            .then( (res)=>{

                //  console.log("*** res.data context activity")
                // console.log(res.data)

                const response = res.data.data

                console.log("**** utilisateur récupéré", response)
            
                setDataUserContext(response)
            
            })
            .catch( function(err){

                console.log( "**** utilisateur non récupéré")
                console.log( err)

            })

        //récupération de l'activité quotidienne de l'utilisateur
        UserServices.getActivityUser(12)
            .then( (res)=>{

               // console.log("*** res.data du context datas")
                //console.log(res.data.data)

                const response = res.data.data

            
                setActivityUserContext(response)
            
            })
            .catch( function(err){

                console.log( "**** activité non récupérée")
                console.log( err)

            })

        //récupération de la durée moyenne des sessions de l'utilisateur
        UserServices.getAverageSessionUser(12)
            .then( (res)=>{

               // console.log("*** res.data du context datas")
               // console.log(res.data.data)

                const response = res.data.data

            
                setAverageSessionUserContext(response)
            
            })
            .catch( function(err){

                console.log( "**** durée moyenne non récupéré")
                console.log( err)

            })

            //récupération de la complétion de l'objectif  de la journée de l'utilisateur
            UserServices.getCompletionUser(12)
            .then( (res)=>{

                //console.log("*** res.data du context datas")
               // console.log(res.data.data)

                const response = res.data.data

            
                setCompletionUserContext(response)
            
            })

            //récupération du type d'activité de l'utilisateur(le radar chart)
            UserServices.getTypeActivityUser(12)
            .then( (res)=>{

                //console.log("*** res.data du context datas")
                //console.log(res.data.data)

                const response = res.data.data

            
                setTypeActivityUserContext(response)
            
            })

            //récupération du chiffre clé de l'utilisateur (les cards)
            UserServices.getKeyDataUser(12)
            .then( (res)=>{

                //console.log("*** res.data du context datas")
                //console.log(res.data.data)

                const response = res.data.data

            
                setKeyDataUserContext(response)
            
            })

        

    },[])

    return (
        <createContextDatas.Provider value={{ dataUserContext,
            activityUserContext,averageSessionUserContext,completionUserContext, typeActivityUserContext,
            keyDataUserContext}} > 

                {children}

        </createContextDatas.Provider>
    );
};

//Attention c'est essential de retourner ce context bien précise car c'est lui qu'on récupèrera dans les autres composants qui en ont besoin
const useContextDatas = () => {

    return useContext(createContextDatas);
};
  
export { ContextDatasFunction, useContextDatas };
