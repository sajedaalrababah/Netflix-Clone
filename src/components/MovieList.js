
import Movie from "./Movie";


export default function MovieList(props){

return(
    <>
    {
        props.movies.map(movie=>{
            return(
                <Movie movie={movie} commentHandler={props.commentHandler} />
            )
        }

        )
    }
    </>
)


}