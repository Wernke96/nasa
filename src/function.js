/* eslint-disable */
const url = "https://api.nasa.gov/";
const Auth = {
    apikey:"vF0RSC37f6sotTU8ac5s7x2cxwTEF6fqa5PJ09aG"
};


export const getForCast = () => {
    return fetch(`${url}insight_weather/?api_key=${Auth.apikey}&feedtype=json&ver=1.0`, {
        method:'GET'
    });
};