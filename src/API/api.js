import * as axios from 'axios';


const instance = axios.create({
    baseURL: 'https://swapi.dev/api/',
})

export const API = {
    getPeoples(page = 1) {
        return axios.get(`https://swapi.dev/api/people/?page=${page}`)
    },

    getInfo(url) {

        return axios.get(url)

    }
}