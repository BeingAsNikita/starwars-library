import { API } from '../API/api'

const GET_PEOPLES_SUCCESS = 'GET_PEOPLES_SUCCESS';
const IS_LOADING = 'IS_LOADING';
const GET_INFO_FROM_ARRAY = 'GET_INFO_FROM_ARRAY';
const GET_DATA_FROM_SEARCHING = "GET_DATA_FROM_SEARCHING";
const IS_SEARCHING_TOGGLE = "IS_SEARCHING_TOGGLE";


let initialState = {
    data: [],
    maxPages: null,
    isLoading: true,
    isSearching: false,
    films: null,
    modalIsOpen: false,
}


const peoplesReduser = (state = initialState, action) => {
    switch (action.type) {
        case GET_PEOPLES_SUCCESS:

            return {
                ...state,
                data: state.data.concat(action.payload.peoples.filter( itemB => {
                    return !state.data.some( itemA => itemB.name === itemA.name )
                 })),
                maxPages: Math.ceil(action.payload.total / 10),
                films: action.payload.films
            }

        case IS_LOADING:
            return {
                ...state,
                isLoading: false
            }

        case GET_DATA_FROM_SEARCHING: 
        return {
            ...state,
            data: action.payload
        }

        case IS_SEARCHING_TOGGLE:
            return {
                ...state,
                isSearching: !state.isSearching
            }


        default:
            return state
    }
}

export const getDataFromSearchingSuccess = (data) => {
    return {
        type: GET_DATA_FROM_SEARCHING,
        payload: data
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
export const isSearchingToggle = () => ({ type: IS_SEARCHING_TOGGLE });



export const getPeoples = (page) => {
    return async dispatch => {
        let res = await API.getPeoples(page)
        dispatch(getPeoplesSuccess(res.data.results, res.data.count))
        dispatch(isLoading())
    }
}

export const getDataFromSearching = (text) => {
    return async dispatch => {
         let res = await API.getPeoplesFromSearch(text) 
        dispatch(getDataFromSearchingSuccess(res.data.results))
        dispatch(isLoading())
    }
}




export default peoplesReduser;