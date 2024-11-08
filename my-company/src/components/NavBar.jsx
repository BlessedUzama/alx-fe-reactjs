
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <Link to='/' />
      <Link to='About' />
      <Link to='Contact' />
      <Link to='Services' />
    </nav>
  );
}

export default Navbar
