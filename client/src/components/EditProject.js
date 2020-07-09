import React from 'react'
import { connect } from 'react-redux'

import { startPutProject } from '../actions/projectAction'
import { Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap'

import '../css/project.css'

class Project extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            title : '',
            dueDate : '',
            description : '',
            showModel : true
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleChange2 = (e) => {
        this.props.history.push('/home')
    }

    handleSubmit = (e) => {
        e.preventDefault()     
        const formData = {
            title : this.state.title,
            dueDate : this.state.dueDate,
            description : this.state.description
        }

        const redirect = () =>  {
            return this.props.history.push('/home')
        }

        console.log(formData, 'edit project in project.js')

        this.props.dispatch(startPutProject(this.props.match.params.id, formData, redirect))

        this.setState({
            title : '',
            description : '',
            showModel : false
        })
    }

    render(){
        let project = this.props.projects.find(project => project._id == this.props.match.params.id)
        console.log(this.props.projects, "total projects")
        console.log(project, 'required project')
        return(
            <div className="container">

                <Modal isOpen={this.state.showModel}>
                    <ModalHeader>Edit Project</ModalHeader>
                    <ModalBody>
                    <form className="form-boxAuth projectBox" onSubmit={this.handleSubmit}>
                    
                    <div  className="form-group">
                    <label htmlFor="title">Title : </label>
                    <input type="text" id="title" name="title" placeholder={project.title} value={this.state.title} onChange={this.handleChange} className="form-control" /></div>

                    <div  className="dueDate">
                    <label htmlFor="dueDate">Due Date: </label>
                    <br />
                    <input type="date" className="date-input" id="dueDate" name="dueDate" value={this.state.dueDate} onChange={this.handleChange} />
                    <p>{project.dueDate.slice(0, 10)}</p></div>

                    <div  className="form-group">
                    <label htmlFor="description">Description: </label>
                    <textarea id="description" name="description" placeholder={project.description} value={this.state.description} onChange={this.handleChange} className="form-control"></textarea></div>
                    
                    <ModalFooter>
                    <input type="submit" className="btn btn-primary" value="Update" />
                    <button className="btn btn-danger cancel" onClick={this.handleChange2}>Cancel</button>
                    </ModalFooter>
                </form>
                    </ModalBody>
                </Modal>    
                
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        projects : state.projects
    }
}

export default connect(mapStateToProps)(Project)