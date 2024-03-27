import axios from 'axios';

// creation ou itération de l'objet baseUrsl qu'on utilisera partout
const Axios = axios.create({ 
    
    baseURL: "http://localhost:3000"  
})