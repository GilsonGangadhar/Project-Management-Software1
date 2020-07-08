import React from 'react'
import { connect } from 'react-redux'
import  { Modal, ModalHeader, ModalBody, ModalFooter  } from 'reactstrap'
// import { startPutTask } from '../../actions/taskAction';

import '../../css/task.css'


class EditTask extends React.Component {

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
        //     this.props.history.push('/showTask')
        // }

        // console.log(formData, 'edit task')
        // this.props.dispatch(startPutTask(this.props.match.params.id, formData, redirect))

        // this.setState({
        //     title : '',
        //     description : '',
        //     members : [],
        //     labels : '',
        //     showModel : false
        // })
    }

    

    render(){
        // let task = this.props.tasks.find(task => task._id == this.props.match.params.id)
        // console.log(this.props.task, "required tasks")
        return(
            <div className="container">
                <Modal isOpen={this.state.showModel}>
                    <ModalHeader>Edit Task</ModalHeader>
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
        tasks : state.task
    }
}

export default connect(mapStateToProps)(EditTask)