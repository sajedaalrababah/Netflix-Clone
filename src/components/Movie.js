import { Card } from "react-bootstrap"
import {Button} from "react-bootstrap"
import ModalMovie from'./ModalMovie'
import {useState} from 'react';


export default function Movie(props){


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    

    return(
    <>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.movie.Image} />
      <Card.Body>
        <Card.Title>{props.movie.title}</Card.Title>
        <Card.Text>
         {props.movie.overview}
        </Card.Text>
        <Button variant="primary" onClick={handleShow}>Add to favorite list</Button>
      </Card.Body>
    </Card>
    <ModalMovie show={show} handleClose={handleClose} movie={props.movie} />
    </>
 )


}