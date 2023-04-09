import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';


export default  function ModalMovie(props){
  const full_path = 'https://www.themoviedb.org/t/p/w220_and_h330_face' + props.movie.poster_path
    return (
        <Modal show={props.show} onHide={props.handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>{props.movie.title}</Modal.Title>
        </Modal.Header>
       
        <Modal.Body>
        <img  src={`${full_path}`} alt={props.movie.title}/>
       <Form>
         <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Add your comment</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
      </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={props.handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      
    )
}