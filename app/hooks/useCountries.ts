import { time } from "console";
import countries from "world-countries";
const formattedCountries = countries.map((country)=>({
    value: country.cca2,
    label: country.name.common,
    flag: country.flag,
    latlng: country.latlng,
    region: country.region

}));
 const usecountries =() =>{
    const getAll = () =>formattedCountries;
    const getByvalue = (value: string)=>{
        return formattedCountries.find((item) => item.value === value); 
    }
    return {
        getAll,
        getByvalue
    }
};
export default usecountries;
