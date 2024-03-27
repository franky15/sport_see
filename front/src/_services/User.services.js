import Axios from './Caller.services';

//récupération de la liste de l'utilisateur
let getUser = (id) =>{

    return Axios.get("/user/" +id)  //routes du back
}

//récupération de l'activité quotidienne de l'utilisateur
let getActivityUser = (id) =>{

    return Axios.get(`/user/${id}/activity` )  //routes du back
}

//récupération de la durée moyenne des sessions de l'utilisateur
let getAverageSessionUser = (id) =>{

    return Axios.get(`/user/${id}/average-sessions` )  //routes du back
}

//récupération de la complétion de l'objectif  de la journée de l'utilisateur
let getCompletionUser = (id) =>{

    return Axios.get("/user/" +id )  //routes du back
}

//récupération du type d'activité de l'utilisateur(le radar chart)
let getTypeActivityUser = (id) =>{

    return Axios.get(`/user/${id}/performance` )  //routes du back
}

//récupération du chiffre clé de l'utilisateur (les cards)
let getKeyDataUser = (id) =>{

    return Axios.get(`/user/${id}/activity` )  //routes du back
}

//export des fonctions
export default {
    getUser,
    getActivityUser,
    getAverageSessionUser,
    getCompletionUser,
    getTypeActivityUser,
    getKeyDataUser
}
