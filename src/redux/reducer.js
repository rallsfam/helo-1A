const initialState = {
    user {}

}

const GET_PASSWORD = 'GET_PASSWORD';
const GET_

export default function reducer(state = initialState, action){
    const {type, payload} = action;
    switch(type){
        case GET_USER:
            return {...state, user: payload};
        case CLEAR_USER:
            return {...state, user: payload};   
        default:
            return state;
    }
}