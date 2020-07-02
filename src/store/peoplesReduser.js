import { API } from '../API/api'

const GET_PEOPLES_SUCCESS = 'GET_PEOPLES_SUCCESS';
const IS_LOADING = 'IS_LOADING';

let initialState = {
    data: [],
    isLoading: true
}


const peoplesReduser = (state = initialState, action) => {
    switch (action.type) {
        case GET_PEOPLES_SUCCESS:
            return {
                ...state,
                data: state.data.concat(action.payload)
            }

        case IS_LOADING:
            return {
                ...state,
                isLoading: false
            }

        default:
            return state
    }
}

export const getPeoplesSuccess = (data) => ({ type: GET_PEOPLES_SUCCESS, payload: data });
export const isPeopleLoading = () => ({ type: IS_LOADING });


export const getPeoples = (page) => {
    return async dispatch => {
        let res = await API.getPeoples(page)
        dispatch(getPeoplesSuccess(res.data.results))

        dispatch(isPeopleLoading())
    }
}

export default peoplesReduser;