import React from 'react'
import { connect } from 'react-redux'

import { startPostProject } from '../actions/projectAction'
import { Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap'

import '../css/project.css'

class Project extends React.Component {
    constructor(){
        super()
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

        console.log(formData, 'add project in project.js')

        this.props.dispatch(startPostProject(formData, redirect))

        this.setState({
            title : '',
            description : '',
            showModel : false
        })
    }

    render(){
        return(
            <div className="container">

                <Modal isOpen={this.state.showModel}>
                    <ModalHeader>Add Project</ModalHeader>
                    <ModalBody>
                    <form className="form-boxAuth projectBox" onSubmit={this.handleSubmit}>
                    {/* <h2>Add Project</h2> */}
                    <div  className="form-group">
                    <label htmlFor="title">Title : </label>
                    <input type="text" id="title" name="title" placeholder="Title" value={this.state.title} onChange={this.handleChange} className="form-control" /></div>

                    <div  className="dueDate">
                    <label htmlFor="dueDate">Due Date: </label>
                    <br />
                    <input type="date" id="dueDate" name="dueDate" value={this.state.dueDate} onChange={this.handleChange} /></div>

                    <div  className="form-group">
                    <label htmlFor="description">Description: </label>
                    <textarea id="description" name="description" placeholder="Description" value={this.state.description} onChange={this.handleChange} className="form-control"></textarea></div>
                    
                    <ModalFooter>
                    <input type="submit" className="btn btn-primary" value="Save" />
                    <button className="btn btn-danger cancel" onClick={this.handleChange2}>Cancel</button>
                    </ModalFooter>
                </form>
                    </ModalBody>
                </Modal>    
                
                
            </div>
        )
    }
}

export default connect()(Project)