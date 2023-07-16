import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";
const NavBar = () => {
  return (
    <header>
      <Link to="/">
        <h1 className="tittleNavBar">PuroGaming</h1>
      </Link>
      
      <nav>
        <ul>
          <li> 
            <NavLink to="/categoria/2"> Componentes </NavLink>
            </li>
          <li>
            <NavLink to="/categoria/3"> Accesorios </NavLink>
            </li>
          <li>
            <NavLink to="*"> Consolas </NavLink>
          </li>

        </ul>
      </nav>

      <CartWidget/>
    </header>
  );
};

export default NavBar;
