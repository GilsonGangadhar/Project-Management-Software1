import React from 'react'
import PmsCard from './PmsCard'
import PmsActionButton from './PmsActionButton'
import { Droppable } from 'react-beautiful-dnd'
import styled from "styled-components"


const ListContainer = styled.div`
        background-color : skyblue;
        border-radius : 3px;
        width : 300px;
        padding : 8px;
        margin-right : 8px;
        height : 100%;
`

const PmsList = ({title, cards, listID}) => {
    return (
        <Droppable droppableId={String(listID)}>
            {provided => (
                <ListContainer {...provided.droppableProps} ref={provided.innerRef}>
                <h5>{title}</h5>
                { cards.map((card, index) => 
                    (
                    <PmsCard key={card.id} index={index} text={card.text} id={card.id} /> 
                    ))} 
                {provided.placeholder}
                <PmsActionButton listID={listID} />
                </ListContainer>
            )} 
        </Droppable>
    )
}

// const styles = {
//     container : {
//         backgroundColor : "#eee",
//         borderRadius : 3,
//         width : 300,
//         padding : 8,
//         marginRight : 8,
//         height : "100%"
//     }
// }

export default PmsList