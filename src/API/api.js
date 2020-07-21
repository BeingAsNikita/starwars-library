import * as axios from 'axios';


const instance = axios.create({
    baseURL: 'https://swapi.dev/api/',
})

export const API = {
    getPeoples(page = 1) {
        return instance.get(`people/?page=${page}`)
    },

    getInfo(url) {

        let newUrl = url.replace(/http/gi, 'https');

        try {
            return axios.get(newUrl)
        } catch (error) {
            console.log(error)
        }

    },
    
    getPeoplesFromSearch(text) {
        try {
            return instance.get(`people/?search=${text}`)
        } catch (error) {
            console.log(error)
        }
    }
}