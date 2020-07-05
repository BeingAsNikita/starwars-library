import { API } from "../API/api";



const anAsyncFunction = async url => {
    return API.getInfo(url)
}

export const getDataFromArray = async (arr) => {
    return Promise.all(arr.map(async url => anAsyncFunction(url))).then(data => {
    debugger

        return data.map(item => item.data.title)
    })
}

export const getInfo = async (obj) => {
    let newObj = { ...obj }
    for (let key in newObj) {
        if (Array.isArray(newObj[key])) {
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