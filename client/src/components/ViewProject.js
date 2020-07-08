import React from 'react'
import { connect } from 'react-redux'
import { startGetProjects } from '../actions/projectAction'
import PmsList from './pms/PmsList'
import PmsActionButton from './pms/PmsActionButton'
import { DragDropContext } from 'react-beautiful-dnd'
import { sort } from '../actions/pms/common'
import styled from "styled-components"

const ListContainer = styled.div`
display : flex;
flex-direction : row;
`;


// import '../css/viewProject.css'

class ViewProject extends React.Component {

    constructor(props){
        super(props)
        this.state = {

        }
    }

    componentDidMount(){
        
            this.props.dispatch(startGetProjects())
        
    }

    onDragEnd = (result) => {
        const { destination, source, draggableId } = result

        if(!destination) {
            return;
        }

        console.log(destination.draggableId, "destination")
        this.props.dispatch(sort(
            source.droppableId,
            destination.droppableId,
            source.index,
            destination.index,
            draggableId
        ))
    }

    render(){
        let project = this.props.projects.find(project => project._id == this.props.match.params.id)
        console.log(project, 'required View project')
        console.log(this.props.lists, "list in viewProject")
        return (
            
            <>
            
            {project !== undefined ? (
                 <DragDropContext onDragEnd={this.onDragEnd}>
                <div>
                    <div className="d-flex justify-content-between">
                        <h3>Project Name: {project.title}</h3>
                        <h3>Due Date : {project.dueDate.slice(0, 10)}</h3>
                    </div>
                    <br/>

                    
                    <ListContainer>
                    {this.props.lists.map(list => (
                    
                    <PmsList listID ={list.id}
                    key={list.id} 
                    title={list.title} 
                    cards={list.cards} />
                    
                    ))}
                    <PmsActionButton list/>
                    </ListContainer>
                   
                </div>
                 </DragDropContext>
                
            ) : (<p>...loading</p>)}
            
            </>
            
        )
    }
}

// const styles = {
//     listsContainer : {
//         display : "flex",
//         flexDirection : "row",
//     }
// }

// 

const mapStateToProps = (state) => {
    return {
        projects : state.projects,
        lists : state.lists
    }
}

export default connect(mapStateToProps)(ViewProject)