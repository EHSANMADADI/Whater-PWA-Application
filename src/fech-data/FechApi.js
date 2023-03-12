
import axios from 'axios'
const api_key ='977bfa7d2e22e2534f8d313b5c01e7c1'
export  const FechApi = async (query) => {
     const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${api_key}`);
     return response;
   
}