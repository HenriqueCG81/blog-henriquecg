import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="ui secondary pointing menu">
      <NavLink exact to="/" className="item" activeClassName="active">
        Home
      </NavLink>
      <NavLink to="/about" className="item" activeClassName="active">
        About
      </NavLink>
      <NavLink to="/projects" className="item" activeClassName="active">
        Projects
      </NavLink>
      <NavLink to="/contact" className="item" activeClassName="active">
        Contact
      </NavLink>
    </nav>
  );
};

export default Navbar;
