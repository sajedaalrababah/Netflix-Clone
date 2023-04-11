import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import React from 'react'
import { useState, useEffect } from "react";



export default function FavList(props){
    const [favMovies, setFavMovies] = useState([]);

    

    async function getFavMovie() {
        let url =`${process.env.REACT_APP_SERVER_URL}/getMovie`;
        const response = await fetch(url,{
            method: 'GET',
        });
        const data = await response.json();

        setFavMovies(data);
    }

    async function handleDelete(id){
        let url =`${process.env.REACT_APP_SERVER_URL}/DELETE/${id}`;

        let response = await fetch(url,{

            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
        })
  

        if(response.status === 204){
            getFavMovie();
            // alert("successfully deleted !!")

        }

        


    }

async function handleUpdate(id){
    let url =`${process.env.REACT_APP_SERVER_URL}/UPDATE/${id}`;
      let data={
        
      };
     let response = await fetch(url,{

            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
        if(response.status===201){
            getFavMovie();
        }
}





    useEffect(() => {
        getFavMovie();
    }, []);

   

    return(
        <>
        <h1>Favourite Movies Page</h1>
        {
            favMovies && favMovies.map(movie=>{
                return(
                    <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={movie.full_path} />
                    <Card.Body>
                      <Card.Title>{movie.moviename}</Card.Title>
                      <Card.Text>{movie.overview}</Card.Text>
                      <Button variant="primary" onClick={()=>handleDelete(movie.id)}> DELETE </Button>
                      <Button variant="primary" onClick={()=>handleUpdate(movie.id)}> UPDATE </Button>
                    </Card.Body>
                  </Card>
                )


            })
        }
        </>
        );
}