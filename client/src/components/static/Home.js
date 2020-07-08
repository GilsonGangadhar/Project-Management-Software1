import React from 'react'
import { connect } from 'react-redux'
import { startGetProjects, startRemoveProject } from '../../actions/projectAction'
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap'


import '../../css/home.css'

class Home extends React.Component{
    constructor(props){
        super(props)
        this.setState = {
            title : ''
        }
    }

    handleView = (id) => {
        this.props.history.push(`/showProject/${id}`)
    }

    handleEdit = (id) => {
        this.props.history.push(`/projects/${id}`)
    }

    handleRemove = (id) => {
        window.confirm("Are you sure you want to delete?")
        if(window.confirm === true){
            this.props.dispatch(startRemoveProject(id))
        }
       
    }

    

    handlePush = (e) => {
        this.props.history.push('/projects')
    }

    componentDidMount(){
        if(this.props.projects.length === 0) {
            this.props.dispatch(startGetProjects())
        }
    }

   render(){
    return(
        <div className="container profilePage">
            <div className="d-flex justify-content-between">
            <h3>Welcome : {this.props.user.username}</h3>
            <h3>Role - {this.props.user.role}</h3> 
            </div>
            { (this.props.user.role == 'teamLeader')? (
            <button class="btn btn-primary addProject" onClick={this.handlePush}>Add Project</button>) : (<div></div>)
            }
            <br/><br/>
            <div className="row">
            {
                this.props.projects.map(project => {
                    return (
                        <div className="col-md-4 profile-card" key={project._id}>
                            <Card>
                                <CardBody>
                                <CardTitle>Title: {project.title}</CardTitle>
                                <CardSubtitle>DueDate: {project.dueDate.slice(0,10)}</CardSubtitle>
                                {/* <CardText>Description: {project.description}</CardText> */} <br/>
                                <Button onClick={() => {
                                    this.handleView(project._id)
                                }}>View</Button>
                                <Button className="card-edit"onClick={() => {
                                    this.handleEdit(project._id)
                                }}>Edit</Button>
                                <Button className="card-delete" onClick={() => {
                                this.handleRemove(project._id)}}>Delete</Button>
                                </CardBody>
                            </Card>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
   }
}

const mapStateToProps = (state) => {
    return {
        user : state.user,
        projects : state.projects
    }
}

export default connect(mapStateToProps)(Home)