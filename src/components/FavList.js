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







    useEffect(() => {
        getFavMovie();
    }, []);
    const full_path = 'https://www.themoviedb.org/t/p/w220_and_h330_face' + props.movie.poster_path

    return(
        <>
        <h1>Favourite Movies Page</h1>
        {
            favMovies && favMovies.map(movie=>{
                return(
                    <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={`${full_path}`} />
                    <Card.Body>
                      <Card.Title>{movie.title}</Card.Title>
                      <Card.Text>{movie.summary.substring(0,100)}</Card.Text>
                      <Button variant="primary" onClick={()=>handleDelete(movie.id)}> Delete </Button>
                    </Card.Body>
                  </Card>
                )


            })
        }
        </>
        );
}