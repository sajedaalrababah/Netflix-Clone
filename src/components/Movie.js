import { Card } from "react-bootstrap"
import {Button} from "react-bootstrap"
import ModalMovie from'./ModalMovie'
import {useState} from 'react';


export default function Movie(props){


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const full_path = 'https://www.themoviedb.org/t/p/w220_and_h330_face' + props.movie.poster_path

    return(
      

    <>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={full_path}/>
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