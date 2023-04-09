import{ useState, useEffect } from 'react';
import MovieList from './MovieList';


  export default function Home(){
     const url=process.env.REACT_APP_SERVER_URL;
    
    const [movies, setmovies] = useState([]);
     async function sendReq(){
        const response = await fetch(`${url}/trending`);;
        console.log(response)
        const data = await response.json();
        console.log(data);
        setmovies(data);
        console.log(44444,movies)
    }

    useEffect(()=>{
        sendReq();
    },[])  





    return(
        <>
          <h2> Welcome to  Home Page</h2>
          <MovieList  movies={movies}/>
        </>
    )
}
