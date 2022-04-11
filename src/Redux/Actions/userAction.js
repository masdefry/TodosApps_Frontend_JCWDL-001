import Axios from 'axios';

export const onUserRegister = (username, email, password) => {
    return(dispatch) => {
        dispatch(
            {
                type: 'LOADING'
            }
        )

        if(!username || !email || !password){
            return dispatch(
                {
                    type: 'REGISTER_ERROR',
                    payload: { error: true, message: 'Fill All Data!' }
                }
            )
        }

        Axios.post('http://localhost:3001/user/register', {username, email, password})
        .then((res) => {
            console.log(res)
            dispatch(
                {
                    type: 'REGISTER_SUCCESS',
                    payload: res.data
                }
            )
        })
        .catch((err) => {
            dispatch(
                {
                    type: 'REGISTER_ERROR',
                    payload: err.response.data
                }
            )
        })
    }
}