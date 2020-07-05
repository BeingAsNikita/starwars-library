

const SET_MODAL_DATA = 'SET_MODAL_DATA';
const HIDE_MODAL = 'HIDE_MODAL';


let initialState = {
    data: null,
    isShow: false,
}

const modalReduser = (state = initialState, action) => {
    switch (action.type) {
        case SET_MODAL_DATA:
            return {
                ...state,
                data: action.payload,
                isShow: true,
            }

        case HIDE_MODAL:
            return {
                ...state,
                isShow: false,
            }

        default:
            return state
    }
}

export const setModalDataSuccess = (data) => ({ type: SET_MODAL_DATA, payload: data });
export const hideModal = () => ({ type: HIDE_MODAL });


export default modalReduser;