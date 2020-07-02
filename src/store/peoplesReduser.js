import { API } from '../API/api'

const GET_PEOPLES_SUCCESS = 'GET_PEOPLES_SUCCESS';
const IS_LOADING = 'IS_LOADING';

let initialState = {
    data: [],
    maxPages: null,
    isLoading: true
}


const peoplesReduser = (state = initialState, action) => {
    switch (action.type) {
        case GET_PEOPLES_SUCCESS:
            return {
                ...state,
                data: state.data.concat(action.payload.peoples),
                maxPages: Math.ceil(action.payload.total/10),
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



export const getPeoplesSuccess = (data, totalPeoples) => {
    return {
      type: GET_PEOPLES_SUCCESS,
      payload: {
        peoples: data,
        total: totalPeoples
      },
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

export default peoplesReduser;