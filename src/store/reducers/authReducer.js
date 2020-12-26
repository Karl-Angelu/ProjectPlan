const initState = {
    authError:null
}

const authReducer = (state = initState, action) =>{
    switch(action.type){
        case 'LOGIN_ERROR':
            console.log('Login Failed')
            return {
                ...state,
                authError: 'Login Failed'
            }
        case 'LOGIN_SUCCESS':
            console.log('Login success')
            return {
                ...state,
                authError:null
            }
        case 'SIGN_OUT_SUCCESS':
            console.log('Sign out success')
            return state
        case 'SIGNUP_SUCCESS':
            console.log('Sign up success')
            return {
                ...state,
                authError:null
            }
        case 'SIGNUP_ERROR':
            console.log('Sign up error')
            console.log(state)
            return {
                ...state,
                authError:action.err.message
            }
        default:
            return state;
    }
}
export default authReducer