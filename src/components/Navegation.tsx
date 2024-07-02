import {Link} from "react-router-dom";
import { Pic } from "./Pic";
import { Pic2 } from "./Pic2";
import { Pic3 } from "./Pic3";
import { Pic4 } from "./Pic4";
import { Pic5 } from "./Pic5";

export const Navegation = () => {
  return (
    <div>
        <Link to='Pic'>
        <figure>
            <Pic/>
            <figcaption>Pic</figcaption>
        </figure>
        </Link>
        <Link to='Pic2'>
        <figure>
            <Pic2/>
            <figcaption>Pic2</figcaption>
        </figure>
        </Link>
        <Link to='Pic3'>
        <figure>
            <Pic3/>
            <figcaption>Pic3</figcaption>
        </figure>
        </Link>
        <Link to='Pic4'>
        <figure>
            <Pic4/>
            <figcaption>Pic4</figcaption>
        </figure>
        </Link>
        <Link to='Pic5'>
        <figure>
            <Pic5/>
            <figcaption>Pic5</figcaption>
        </figure>
        </Link>
    </div>
  )
}
