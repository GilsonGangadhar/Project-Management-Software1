import React from 'react'
import { connect } from 'react-redux'
// import { startPostTask } from '../../actions/taskAction'
import  { Modal, ModalHeader, ModalBody, ModalFooter  } from 'reactstrap'

import '../../css/task.css'

class Task extends React.Component {

    constructor(){
        super()
        this.state = {
            title : '',
            description : '',
            members : [],
            dueDate : '',
            labels : '',
            showModel : true
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleChange2 = () => {
        this.props.history.push('/showTask')
    }

    handleSubmit = (e) => {
        e.preventDefault()

        this.props.history.push('/showTask')

        // const formData = {
        //     title : this.state.title,
        //     description : this.state.description, 
        //     members : this.state.members, 
        //     dueDate : this.state.dueDate,
        //     labels : this.state.labels
        // }

        // const redirect = () => {
        //     return this.props.history.push('/showTask')
        // }

        // console.log(formData, 'add task in task.js')

        // this.props.dispatch(startPostTask(formData, redirect))

        // this.setState({
        //     title : '',
        //     description : '',
        //     members : [],
        //     labels : '',
        //     showModel : false

        // })
        
    }

    

    render(){
        return(
            <div className="container">
                <Modal isOpen={this.state.showModel}>
                    <ModalHeader>Add Task</ModalHeader>
                    <ModalBody>
                        <form className="form-boxAuth" onSubmit={this.handleSubmit}>

                            <div className="form-group">
                            <label html="title">Title: </label>
                            <input type="text" id="title" placeholder="Title" value={this.state.title} name="title" onChange={this.handleChange} className="form-control"  />
                            </div>


                            <div className="form-group">
                            <label htmlFor="description">Description: </label>
                            <textarea id="description" name="description" value={this.state.description} onChange={this.handleChange} className="form-control"></textarea>
                            </div>

                            <div className="form-group">
                            <label htmlFor="members">Members</label>
                            <select id="memebers" name="members" value={this.state.members} onChange={this.handleChange} className="form-control">
                            <option value="">--select--</option>
                            </select>
                            </div>

                            <div className="dueDate">
                            <label htmlFor="dueDate">DueDate:  </label>
                            <br/>
                            <input type="date" id="dueDate" name="dueDate" value={this.state.dueDate} onChange={this.handleChange} />
                            </div>
                            
                            <div className="form-group">
                            <label htmlFor="labels" >Labels: </label>
                            <select id="labels" name="labels" value={this.state.labels} onChange={this.handleChange}  className="form-control">
                                <option value="">--select--</option>
                                <option value="front-end">Front End</option>
                                <option value="back-end">Back End</option>
                                <option value="debugging">Debugging</option>
                            </select>   
                            </div>  
                    <ModalFooter>
                    <input type="submit" className="btn btn-primary" value="Submit" />
                    <button className="btn btn-danger cancel" onClick={this.handleChange2}>Cancel</button>
                    </ModalFooter>
                    </form>
                    </ModalBody>
                </Modal>    
            </div>
        )
    }
}

export default connect()(Task)