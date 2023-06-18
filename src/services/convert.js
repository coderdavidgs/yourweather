export default function convert(temp, type, current){
    let result = 0;

    if(type == 'kelvin'){
        if(current == 'celsius'){
            result = (temp + 273);
        }else if(current == 'farenheit'){
            result =  (temp - 32)/1.8;
            result =  (temp + 273);
        }else {
            result = temp;
        }

    }

    if(type == 'celsius'){
        if(current == 'kelvin'){
            result = (273 - temp)
        }else if(current == 'farenheit'){
            result =  (temp - 32)/1.8; 
        }else {
            result = temp;
        }
    }

    if(type == 'farenheit'){
        if(current == 'celsius'){
            result = 1.8 * temp + 32;
        }else if(current == 'kelvin'){
            result = (273 - temp);
            result = 1.8 * temp + 32;
        }else {
            result = temp;
        }
    }

    result = Math.abs(result);
    result = result.toFixed(1);
    return result
}