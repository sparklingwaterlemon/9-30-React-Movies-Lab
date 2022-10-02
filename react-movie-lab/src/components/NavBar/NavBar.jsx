import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
        
        <Link to="/movies"> Movie Index Page </Link>
        &nbsp; | &nbsp;
        <Link to="/actors"> Actor Index Page </Link>
    </nav>
  )
}

export default NavBar