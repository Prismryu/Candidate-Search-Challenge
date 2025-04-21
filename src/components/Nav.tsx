import { NavLink } from 'react-router-dom';

const Nav = () => {
    // TODO: Add necessary code to display the navigation bar and link between the pages
  return (
    <nav className="nav">
      <ul style={{ display: 'flex', gap: '1rem', margin: 0, padding: 0 }}>
        <li className="nav-item">
          <NavLink
            to="/"
            end
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            Candidate Search
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/saved"
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            Saved Candidates
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;