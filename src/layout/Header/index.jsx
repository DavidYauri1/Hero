import './style.css';
import logo from '../../../src/dddd.png';
const Header = () =>{
    return(
 <>
    <header>
        <img  className="logo" src={logo} alt="" alt="logo" />
         <nav>
            <ul className="nav__links">
                <li ><a href="">Servicios</a> </li>
                <li ><a href="">Project</a></li>
                <li ><a href="">About</a></li>
                <li ><a href="">About</a></li>
            </ul>  
        </nav>
        <a href="cta" href="#"> <button>Git Hub</button> </a>
    </header>

</>
    )
}


export default Header;