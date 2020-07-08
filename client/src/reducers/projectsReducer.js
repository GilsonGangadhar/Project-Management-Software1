const initialStateValue = []

const projectsReducer = (state = initialStateValue, action) => {
    switch(action.type){
        case 'SET_PROJECTS' : {
            return [].concat(action.payload)
        }

        default : {
            return [...state]
        }
    }
}

export default projectsReducer