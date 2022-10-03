import { Link } from 'react-router-dom';
import "./NavBar.css";

function NavBar() {
  return (
    <>
      <br />
      <nav>
          <Link to="/movies"> Movie Index Page </Link>
          <Link to="/actors"> Actor Index Page </Link>
      </nav>
    </>
  )
}

export default NavBar