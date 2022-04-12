let initialState = {
    loading: false, 
    error: false, 
    message: ''
}

const userReducer = (state = initialState, action) => {
    switch(action.type){
        case 'LOADING':
            return { ...state, loading: true, error: false, message: '' }
        case 'REGISTER_ERROR':
            return { ...state, loading: false, error: action.payload.error, message: action.payload.message }
        case 'REGISTER_SUCCESS':
            return { ...state, loading: false, error: action.payload.error, message: action.payload.message }
        default : return state
    }
}

export default userReducer