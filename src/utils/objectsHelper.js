import { API } from "../API/api";

export const getDataFromArray = async (arr, name) => {
    let newUrls = arr.map(url => {
        return url.replace(/http/gi, 'https')
     })
    if(newUrls.length > 0) {
        return await Promise.all(newUrls.map(async url =>  API.getInfo(url))).then(data => {
            return  data.map(item => item.data[name])
        })
    }
    
    return 'Unknown'
}   


export const debounce = ( callback, data, delay ) => {
    debugger
    let timeout;
    return () => {
        clearTimeout( timeout );
        timeout = setTimeout( callback(data), delay );
    }
}