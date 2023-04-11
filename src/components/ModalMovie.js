import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';
import {useRef } from 'react';

export default  function ModalMovie(props){

  const commentRef = useRef();

  function submitHandler(e){
    e.preventDefault();
    let userComment = commentRef.current.value;
    let newMovie={...props.movie, userComment}
    props.commentHandler(newMovie,newMovie.id);
  }

  async function addToFavHandler(e){
    e.preventDefault();

    let url =`${process.env.REACT_APP_SERVER_URL}/addMovie`;
  
    let data={
    moviename:props.movie.moviename,
      overview:props.movie.overview,
      comment:props.movie.comment
    }
    const response = await fetch (url,{
      method: "POST",
      headers: {
        "Content-Type":"application/json",
      },
      body:JSON.stringify(data),
    })
    const receivedData = await response.json();
    console.log(1111,receivedData)

  if (response.status ===201){
    alert("successfully added to database")
  }




  }







  const full_path = 'https://www.themoviedb.org/t/p/w220_and_h330_face' + props.movie.poster_path
    return (
        <Modal show={props.show} onHide={props.handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>{props.movie.title}</Modal.Title>
        </Modal.Header>
       
        <Modal.Body>
        <img  src={`${full_path}`} alt={props.movie.title}/>
        <br/>
        {props.movie.comment? props.movie.comment:"No comment Added "}
        <br/>
       <Form>
         <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Add your comment</Form.Label>
              <Form.Control ref={commentRef} as="textarea" rows={3} />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={(e)=>submitHandler(e)}>
            Submit
          </Button>

          <Button variant="primary" type="submit" onClick={(e)=>addToFavHandler(e)}>
            add to fav
          </Button>
      </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      
    )
}