import axios from 'axios'

export const setTask = (data) => {
    return { type : 'SET_TASK', payload : data}
}

export const startPostTask = (formData, redirect) => {
    return(dispatch) => {
        axios.post('/task', formData, {
            headers : {
                'Authorization' : localStorage.getItem('authToken')
            }
        })
        .then((response) => {
            console.log('postTask', response.data)
            alert('Successfully poseted task')
            if(response.data){
                dispatch(startGetTask())
                redirect()
            } else {
                alert('error')
            }
        })
        .catch((err) => {
            alert(err.message)
            console.log(err)
        })
    }
}

export const startGetTask = () => {
    return(dispatch) => {
        axios.get('/task', {
            headers : {
                'Authorization' : localStorage.getItem('authToken')
            }
        })
        .then((response) => {
            console.log('get task', response.data)
            if(response.data){
                dispatch(setTask(response.data))
            } else {
                alert('error')
            }
        })
        .catch((err) => {
            console.log(err)
        })
    }
}

export const startPutTask = (id, data, redirect) => {
    return(dispatch) => {
        axios.put(`/task/${id}`, data, {
            headers : {
                'Authorization' : localStorage.getItem('authToken')
            }
        })
        .then((response) => {
            console.log('updating task', response.data)

            if(Object.values(response.data).length > 0){
                alert('successfully task updated in the DB')
                dispatch(startGetTask())
                redirect()
            }else {
                alert('data not found')
            }
        })
        .catch((err) => {
            console.log(err)
        })
    }
}

export const startRemoveTask = (id, redirect) => {
    return(dispatch) => {
        axios.delete(`/task/${id}`, {
            headers : {
                'Authorization' : localStorage.getItem('authToken')
            }
        })
        .then((response) => {
            console.log('removed task', response.data)

            if(Object.keys(response.data).length > 0){
                alert('successfully removed project')
                dispatch(startGetTask())
                redirect()
            } else {
                console.log('data not found')
            }
        })
        .catch((err) => {
            console.log(err)
        })
    }
}