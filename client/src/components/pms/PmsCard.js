import React from 'react'
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { Draggable } from 'react-beautiful-dnd'
import styled from "styled-components"

const CardContainer = styled.div`
margin-bottom : 8px;
`
const handleClick = () => {
    window.location.href = '/showTask'
}

const PmsCard = ({text, id, index}, props) => {
    
    return(
        <Draggable draggableId={String(id)} index={index}>
            {provided => (
                <CardContainer ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} >
                    <Card>
                        <CardContent>
                            <Typography gutterBottom>
                            {text}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" style={styles.buttonContainer} onClick={handleClick} >Details</Button>
                        </CardActions>
                    </Card>
                </CardContainer>
            )}
    </Draggable>
    )
}

const styles = {
    buttonContainer : {
        backgroundColor : "darkGrey",
        color : "white",
        marginTop : "none"
    }
}

export default PmsCard