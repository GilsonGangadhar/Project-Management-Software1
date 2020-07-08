import axios from 'axios'

export const setProjects = (data) => {
    return { type : 'SET_PROJECTS', payload : data}
}

export const startPostProject = (formData, redirect) => {
    return(dispatch) => {
        axios.post('/projects', formData, {
            headers : {
                'Authorization' : localStorage.getItem('authToken')
            }
        })
        .then((response) => {
            console.log('postProject', response.data)
            alert('Successfully posted project')
            if(response.data){
                dispatch(startGetProjects())
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

export const startGetProjects = () => {
    return(dispatch) => {
        axios.get('/projects', {
           headers : {
               'Authorization' : localStorage.getItem('authToken')
           } 
        })
        .then((response) => {
            console.log('get Projects', response.data)
            if(response.data){
                dispatch(setProjects(response.data))
            } else {
                alert('error')
            }
        })
        .catch((err) => {
            console.log(err)
        })
    }
}

export const startPutProject = (id, data, redirect) => {
    return(dispatch) => {
        axios.put(`/projects/${id}`, data, {
            headers : {
                'Authorization' : localStorage.getItem('authToken')
            }
        })
        .then((response) => {
            console.log('updating project', response.data)

            if(Object.values(response.data).length > 0){
                alert('successfully project updated in the DB')
                dispatch(startGetProjects())
                redirect()
            } else {
                alert('data not found')
            }
        })

        .catch((err) => {
            console.log(err)
        })
    }
}

export const startRemoveProject = (id) => {
    return(dispatch) => {
        axios.delete(`/projects/${id}`, {
            headers : {
                'Authorization' : localStorage.getItem('authToken')
            }
        })

        .then((response) => {
            console.log('removed project', response.data)

            if(Object.keys(response.data).length > 0){
                alert('successfully removed project')
                dispatch(startGetProjects())
            } else {
                console.log('data not found')
            }
        })

        .catch((err) => {
            console.log(err)
        })
    }
}