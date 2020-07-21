import { API } from "../API/api";

export const getDataFromArray = async (arr, name) => {

    if (arr.length > 0) {
        return await Promise.all(arr.map(async url => API.getInfo(url))).then(data => {
            return data.map(item => item.data[name])
        })
    }

    return 'Unknown'
}


export const debounce = (callback, data, delay) => {
    debugger
    let timeout;
    return () => {
        clearTimeout(timeout);
        timeout = setTimeout(callback(data), delay);
    }
}