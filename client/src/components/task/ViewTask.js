import React from 'react'
import { connect } from 'react-redux'
import  { Modal, ModalHeader, ModalBody, ModalFooter  } from 'reactstrap'
// import { startGetTask,startRemoveTask } from '../../actions/taskAction';

import '../../css/task.css'


class ViewTask extends React.Component {

    constructor(){
        super()
        this.state = {
            showModel : true
        }
    }

    handleAdd = () => {
        this.props.history.push('/task')
    }

    handleEdit = () => {
        this.props.history.push('/editTask')
    }

    handleDelete = () => {
        window.confirm("Are you sure you want to delete?")
        if(window.confirm){
            this.props.history.push('/showProject/5ef09e03584e5a4574923003')

            // this.props.dispatch(startRemoveTask(id))
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleChange2 = () => {
        this.props.history.push('/showProject/5ef09e03584e5a4574923003')
    }

    // componentDidMount(){
    //     if(this.props.tasks.length === 0){
    //         this.props.dispatch(startGetTask())
    //     }
    // }

    render(){
        return(
            <div className="container">
                <Modal isOpen={this.state.showModel}>
                    <ModalHeader><h4>Task</h4></ModalHeader>
                    <ModalBody>
                        <h5>Title :</h5> 
                        <br/>
                        <h5>Description :</h5> 
                        <br/>
                        <h5>Members :</h5> 
                        <br/>
                        <h5>Due Date :</h5> 
                        <br/>
                        <h5>Labels :</h5> 
                        <br/>
                    <ModalFooter>
                    <button className="btn btn-primary" onClick={this.handleAdd}>Add</button>
                    <button className="btn btn-primary" onClick={this.handleEdit}>Edit</button>
                    <button className="btn btn-danger cancel" onClick={this.handleDelete} >Delete</button>
                    <button className="btn btn btn-light" onClick={this.handleChange2}>Cancel</button>
                    </ModalFooter>
                    </ModalBody>
                </Modal>    
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user : state.user,
        tasks : state.task
    }
}

export default connect(mapStateToProps)(ViewTask)