import { API } from '../API/api'
import { findLinks, getDataFromArray, getInfo } from '../utils/objectsHelper';

const GET_PEOPLES_SUCCESS = 'GET_PEOPLES_SUCCESS';
const IS_LOADING = 'IS_LOADING';
const GET_INFO_FROM_ARRAY = 'GET_INFO_FROM_ARRAY';

let initialState = {
    data: [],
    maxPages: null,
    isLoading: true,
    films: null,
    modalIsOpen: false,
}


const peoplesReduser = (state = initialState, action) => {
    switch (action.type) {
        case GET_PEOPLES_SUCCESS:

            return {
                ...state,
                data: state.data.concat(action.payload.peoples),
                maxPages: Math.ceil(action.payload.total / 10),
                films: action.payload.films
            }

        case IS_LOADING:
            return {
                ...state,
                isLoading: false
            }

        /* case GET_INFO_FROM_ARRAY:
           debugger
           console.log(state.data[0]) [action.payload.name] 
          return {
              ...state,
               data: [...state.data[0], ...state.data[0][action.payload.name]: [action.payload.data] ] 
          }  */

        default:
            return state
    }
}



export const getPeoplesSuccess = (data, totalPeoples) => {
    return {
        type: GET_PEOPLES_SUCCESS,
        payload: {
            peoples: data,
            total: totalPeoples,
        },
    }
}

export const getInfoSuccess = (data, name) => {
    return {
        type: GET_INFO_FROM_ARRAY,
        payload: {
            name: name,
            data: data,
        }
    }
}

export const isLoading = () => ({ type: IS_LOADING });


export const getPeoples = (page) => {
    return async dispatch => {
        let res = await API.getPeoples(page)
        dispatch(getPeoplesSuccess(res.data.results, res.data.count))
        dispatch(isLoading())
    }
}

export const getInfoThunk = (res, count) => {
    return async dispatch => {
        let promise = res.map(item => getInfo(item))
        Promise.all(promise).then( data => {
            dispatch(getPeoplesSuccess(data, count))

        })







    }
}

export default peoplesReduser;