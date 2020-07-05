import { API } from "../API/api";


export const findLinks = (data) => {

    let keys = Object.keys(data)
    keys.forEach(key => {
        if (data[key].indexOf('http') > -1) {
            console.log(`${key} : ${data[key]}`);
        }
    });
}

const anAsyncFunction = async url => {
    return API.getInfo(url)
}

export const getDataFromArray = async (arr) => {
    return Promise.all(arr.map(async url => anAsyncFunction(url))).then(data => {
        return data.map(item => item.data.name)
    })
}

export const getInfo = async (obj) => {
    let newObj = { ...obj }
    for (let key in newObj) {
        if (Array.isArray(newObj[key])) {
debugger
            if (newObj[key].length > 0) {
                console.log(newObj[key])
                newObj[key] = await getDataFromArray(newObj[key])

            } else {
                newObj[key] = 'UNKNOWN'
            }
        }
    }
    return newObj
}

export const updateObjectInArray = (items, itemId, objPropName, newObjProps) => {
    return items.map(u => {
        if (u[objPropName] === itemId) {
            return { ...u, ...newObjProps }
        }
        return u
    })
}