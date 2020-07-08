const initialStateValue = []

const taskReducer = (state = initialStateValue, action) => {
    switch(action.type){
        case 'SET_TASK' : {
            return [].concat(action.payload)
        }

        default : {
            return [...state]
        }
    }
}

export default taskReducer
