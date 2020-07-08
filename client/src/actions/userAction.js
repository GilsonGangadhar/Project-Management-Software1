import axios from 'axios'

export const setUser = (user) => {
    return {type : 'SET_USER', payload : user}
}

export const startGetUser = () => {
    return(dispatch) => {
        axios.get('/users/account', {
            headers: {
                'Authorization' : localStorage.getItem('authToken')
            }
        })
        .then((response) => {
            const user = response.data
            dispatch(setUser(user))
        })
        .catch((err) => {
            alert(err)
        })
    }
}

export const startRegisterUser = (formData, redirect) => {
    return(dispatch) => {
        console.log(formData, 'startRegisterUser')
        axios.post('/register', formData)
        .then((response) => {
            if(response.data.hasOwnProperty('errors')){
                alert(response.data.message)
            } else {
                alert('You has successfully registered')
                redirect()
            }
        })

        .catch((err) => {
            console.log(err)
        })
    }
}

export const startLoginUser = (formData, redirect) => {
    return(dispatch) => {
        axios.post('/login', formData)
        .then((response) => {
            if(response.data.hasOwnProperty('errors')){
                alert(response.data.message)
            } else {
                alert('successfully logged in')
                localStorage.setItem('authToken', response.data.token)
                axios.get('/users/account', {
                    headers : {
                        'Authorization' : localStorage.getItem('authToken')
                    }
                })

                .then((response) => {
                    const user = response.data
                    dispatch(setUser(user))
                    redirect()
                })
                .catch((err) => {
                    alert(err)
                })
            }
        })

        .catch((err) => {
            console.log(err)
        })

    }
}

// export const startUserLogout = () => {
//     return(dispatch) => {
//         axios.delete('#', {
//             headers : {
//                 'Authorization' : localStorage.removeItem('authToken')
//             }
//         })
//         .then((response) => {
//             if(response.data.notice) {
//                 alert(response.data.notice)
//                 localStorage.removeItem('authToken')
//                 dispatch(setUser({}))
//                 window.location.href = "/"
//             }
//         })
//     }
// }

