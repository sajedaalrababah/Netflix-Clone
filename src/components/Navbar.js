

import { Link } from "react-router-dom";

export default function Navbar(){
    return(
        <>
            <div>
                <Link to="/">Home Page</Link>
            </div>
            <div>
                <Link to="favMovie">Favorite Movies</Link>
            </div>
            
            <br></br>
            <br></br>
        </>
    );
}