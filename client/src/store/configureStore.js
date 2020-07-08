import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import userReducer from '../reducers/userReducer'
import projectsReducer from '../reducers/projectsReducer'
import listsReducer from '../reducers/listReducer'
import taskReducer from '../reducers/taskReducer'

const configureStore = () => {
    const store = createStore(combineReducers({
        user : userReducer,
        projects : projectsReducer,
        lists : listsReducer,
        task : taskReducer
    }), applyMiddleware(thunk))
    return store
}

export default configureStore

