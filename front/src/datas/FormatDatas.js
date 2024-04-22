
import {
    USER_INFOS_AND_COMPLETIONS,
    USER_ACTIVITY,
    USER_AVERAGESESSIONS,
    USER_KINDACTIVITY

} from "./MockData";




export default class FormatDatas {

    constructor() {
        this._USER_INFOS_AND_COMPLETIONS = USER_INFOS_AND_COMPLETIONS;
        this._USER_ACTIVITY = USER_ACTIVITY;
        this._USER_AVERAGESESSIONS = USER_AVERAGESESSIONS;
        this._USER_KINDACTIVITY = USER_KINDACTIVITY;
    }


    //Méthodes pour formater les données getUser
    _getUser(mydata) {

     
        // console.log("***mydata de _getUser", mydata)
        // console.log("***_USER_INFOS_AND_COMPLETIONS", this._USER_INFOS_AND_COMPLETIONS[0])
        
        let response 

        if(mydata && mydata.userInfos){

            response = mydata
        }
        return response
      
    }


     //Méthodes pour formater les données _getActivityUser
     _getActivityUser(mydata) {

        // console.log("***mydata _getActivityUser", mydata)
        // console.log("***_USER_ACTIVITY[0]", this._USER_ACTIVITY[1])
       
        let response 

        if(mydata && mydata.sessions.length > 0){

            //console.log("**** res.data.data getActivityUser Barchart", mydata.sessions)
               
            if(mydata.sessions[0].day.length > 1 ){

                //formatage de la date en jours
                for(let i=0; i<mydata.sessions.length; i++){

                    let dateCurrent = mydata.sessions[i].day;
                    let day1 = dateCurrent.split("-")[2]  //récupération du jour
                    let day =day1.startsWith("0") ? day1[1] : day1; //suppression du 0 devant le jour
                    //console.log("**** day", day)
                
                    mydata.sessions[i].day = day; //remplacement de la date par le jour
                }

            }

            response =  mydata.sessions;

            return response
            
                

        }
      
    }

    //Méthodes pour formater les données _getActivityUser
    _getAverageSessionUser(mydata) {

        //console.log("***mydata _getAverageSessionUser", mydata)
        //console.log("***_USER_AVERAGESESSIONS[0]", this._USER_AVERAGESESSIONS[0])
        
        let response 

        if(mydata && mydata.length > 0){

           
            response =  mydata

        }
        return response
      
    }

    //Méthodes pour formater les données _getActivityUser
    _getCompletionUser(mydata) {

        // console.log("***mydata _getCompletionUser", mydata)
        // console.log("***_USER_INFOS_AND_COMPLETIONS[0]", this._USER_INFOS_AND_COMPLETIONS[0])
        
        let response 

        //conversion en pourcentage
         response = mydata * 100 

       // return response

        
        if(mydata.todayScore && mydata.todayScore !== 0){
                    
            //cas où on a todayScore et pas score
            //conversion en pourcentage
             response = mydata.todayScore * 100 

             //console.log("**** res.data.data.todayScore getCompletionUser RadialBarChartComponent", res.data.data.todayScore)
            
        }else if(mydata.score && mydata.score !== 0){

            //cas où on a score et pas todayScore
            //conversion en pourcentage
             response = mydata.score * 100 

             //console.log("**** res.data.data.score getCompletionUser RadialBarChartComponent", res.data.data.score)

        }else{
            
           // console.log("***bienvenue dans le mock getAverageSessionUser")
            //application de la donnée this._USER_AVERAGESESSIONS mock
            
            let res = this._USER_INFOS_AND_COMPLETIONS[0]

            if(res.todayScore && res.todayScore !== 0){
                    
                //cas où on a todayScore et pas score
                //conversion en pourcentage
                 response = res.todayScore * 100 
    
                 //console.log("**** res.data.data.todayScore getCompletionUser RadialBarChartComponent", res.data.data.todayScore)
                
            }else if(res.score && res.score !== 0){
    
                //cas où on a score et pas todayScore
                //conversion en pourcentage
                 response = res.score * 100 
    
                 //console.log("**** res.data.data.score getCompletionUser RadialBarChartComponent", res.data.data.score)
    
            }

        }
        return response
      
    }

    //Méthodes pour formater les données _getActivityUser
    _getTypeActivityUser(mydata) {

        // console.log("***mydata _getTypeActivityUser", mydata)
        // console.log("***_USER_KINDACTIVITY", this._USER_KINDACTIVITY[0])
        
        let response 
 
         if(mydata.data && mydata.data.length > 0){
 
            ////////////////////////////////
               
                //formatage des données

                //correspondance des données(conversion des numéros en lettres)
                //Remplacement des numéros par les lettres correspondantes dans le tableau data
                for(let i=0; i<mydata.data.length; i++){

                    let kindCurrent = mydata.data[i].kind;
                

                    //ici on met break pour sortir de la boucle switch car on a une boucle for ça évite de refaire tous les cas à chaque tour de boucle for
                    switch (kindCurrent) {
                        case 1:
                            mydata.data[i].kind = mydata.kind[kindCurrent];
                        break;
                        case 2:
                            mydata.data[i].kind = mydata.kind[kindCurrent];
                        break;
                        case 3:
                            mydata.data[i].kind = mydata.kind[kindCurrent];
                        break;
                        case 4:
                            mydata.data[i].kind = mydata.kind[kindCurrent];
                        break;
                        case 5:
                            mydata.data[i].kind = mydata.kind[kindCurrent];
                        break;
                        case 6:
                            mydata.data[i].kind = mydata.kind[kindCurrent];
                        break;
                        default:
                        
                    }
                    

                }


                //inversion du sens des objets du tableau data
                let data = mydata.data.reverse();
                
               // console.log("**** data reverse", data)

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

                    response = data

                   
                }
                dataConvert(data)

                //console.log("**** response", response)

                return response

               

                ////////////////////////////////
 
         }else{
             
             //console.log("***bienvenue dans le mock getAverageSessionUser")
             //application de la donnée this._USER_AVERAGESESSIONS mock
             
             response = this._USER_AVERAGESESSIONS
 
         }
         return response
       
     }

}