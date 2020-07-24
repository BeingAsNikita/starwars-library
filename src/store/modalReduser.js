import { getDataFromArray } from '../utils/getDataFromArray';
import { API } from '../API/api';


const SET_MODAL_DATA = 'SET_MODAL_DATA';
const HIDE_MODAL = 'HIDE_MODAL';
const GET_SPECIES = 'GET_SPECIES';
const GET_FILMS = 'GET_FILMS';
const GET_HOMEWOLRD = 'GET_HOMEWOLRD';
const IS_LOADING = 'IS_LOADING';


let initialState = {
    data: null,
    isShow: false,
    isLoading: false,
}

const modalReduser = (state = initialState, action) => {
    switch (action.type) {
        case SET_MODAL_DATA:
            return {
                ...state,
                data: action.payload,
                isShow: true,
                isLoading: false
            }

        case HIDE_MODAL:
            return {
                ...state,
                isShow: false,
                isLoading: false
            }

        case GET_SPECIES:
            return {
                ...state,
                data: { ...state.data, species: action.payload }
            }
        case GET_FILMS:
            return {
                ...state,
                data: { ...state.data, films: action.payload }
            }
        case GET_HOMEWOLRD:
            return {
                ...state,
                data: { ...state.data, homeword: action.payload }
            }
            case IS_LOADING:
                return {
                    ...state,
                    isLoading: true
                }

            
        default:
            return state
    }
}

export const setModalDataSuccess = (data) => ({ type: SET_MODAL_DATA, payload: data });
export const setSpecies = (data) => ({ type: GET_SPECIES, payload: data });
export const setFilms = (data) => ({ type: GET_FILMS, payload: data });
export const setHomeword = (data) => ({ type: GET_HOMEWOLRD, payload: data });
export const isLoading = () => ({ type: IS_LOADING });



export const hideModal = () => ({ type: HIDE_MODAL });

export const setModalData = (data) => {
    return async dispatch => {
        dispatch(setModalDataSuccess(data))
        dispatch(setSpeciesThunk(data))
    }
}


export const setSpeciesThunk = (data) => {
    return async dispatch => {

        let speciesPromise = await getDataFromArray(data.species, 'name')
        let homeworldPromise = API.getInfo(data.homeworld)
        let filmsPromise = getDataFromArray(data.films, 'title')

        let species = await speciesPromise;
        let homeworld = await homeworldPromise;
        let films = await filmsPromise;
        
        dispatch(setSpecies(species))
        dispatch(setHomeword(homeworld.data.name))
        dispatch(setFilms(films))
        dispatch(isLoading())

    }
}

export default modalReduser;