import {Link} from "react-router-dom";
import { Pic } from "./Pic";
import { Pic2 } from "./Pic2";
import { Pic3 } from "./Pic3";
import { Pic4 } from "./Pic4";
import { Pic5 } from "./Pic5";

export const Navegation = () => {
return (
    <div className="container mt-4 father">
        <Link to='Pic' className='links'>
        <figure className='image-size'>
            <Pic />
            <figcaption>Pic</figcaption>
        </figure>
        </Link>
        <Link to='Pic2' className='links'>
        <figure className='image-size'>
            <Pic2/>
            <figcaption>Pic2</figcaption>
        </figure>
        </Link>
        <Link to='Pic3' className='links'>
        <figure className='image-size'>
            <Pic3/>
            <figcaption>Pic3</figcaption>
        </figure>
        </Link>
        <Link to='Pic4' className='links'>
        <figure className='image-size'>
            <Pic4/>
            <figcaption>Pic4</figcaption>
        </figure>
        </Link>
        <Link to='Pic5' className='links'>
        <figure className='image-size'>
            <Pic5/>
            <figcaption>Pic5</figcaption>
        </figure>
        </Link>
    </div>
)
}
