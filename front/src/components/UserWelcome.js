import React,{useState, useEffect} from "react";

//importation du context
import { useContextDatas } from '../_Utils/contexts/ContextDatas';


const UserWelcome = () => {

    const { dataUserContext } = useContextDatas();

    //console.log("dataUserContext", dataUserContext)

    const [user, setUser] = useState({});

    useEffect(() => {

        //récupération des données de l'utilisateur
        if(dataUserContext && dataUserContext.userInfos){

            setUser(dataUserContext);
        }
       
    }, [dataUserContext]);

    return (
        <div className='UserWelcome'>
            <p className="UserWelcome__titre">Bonjour <span>{
                user.userInfos ? user.userInfos.firstName : "vide"
                }</span>
            </p>
            <p className="UserWelcome__texte">Félicitation! Vous avez explosé vos objectifs hier 👏</p>
        </div>
    );
};

export default UserWelcome;