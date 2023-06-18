import axios from "axios"
const url = 'https://api.openweathermap.org/data/2.5/weather';
const key = 'type it your key here';


export const getItens = async(city) => {

    let results = '';
    
    await axios.get(url , {
        params: {
            q: city,
            appid: key
        }
    })
    .then((res) => {
        return results = res.data;
    })
    .catch((err) => {
        console.log(err);
        return 'Error'
    })
    .finally(() => {
        console.log('Requisition is Completed');
    })
    
    return results;
}