import React from 'react'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import Home from './components/static/Home'
import Navigation from './components/static/Navigation'
import Project from './components/Project'
import EditProject from './components/EditProject'
import ViewProject from './components/ViewProject'
import Task from './components/task/Task'
import ViewTask from './components/task/ViewTask'
import EditTask from './components/task/EditTask'
import 'bootstrap/dist/css/bootstrap.css'

function App(props) {

     
    return(
        <BrowserRouter>
            <div>
                <Navigation/>
                <Switch>
                    <Route path="/register" component={Register} exact={true} />
                    <Route path="/login" component={Login} exact={true} />
                    <Route path="/home" component={Home} exact={true} />
                    <Route path="/projects" component={Project} exact={true} />
                    <Route path="/projects/:id" component={EditProject} exact={true} />
                    <Route path="/showProject/:id" component={ViewProject} exact={true} />
                    <Route path="/task" component={Task} />
                    <Route path="/showTask" component={ViewTask} exact={true} />
                    <Route path="/editTask" component={EditTask} exact={true} />
                </Switch>
                
            </div>
        </BrowserRouter>
    )
}


export default App