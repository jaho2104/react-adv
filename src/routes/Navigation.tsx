import {
  BrowserRouter,
  Navigate,
  NavLink,
  Route,
  Routes,
} from "react-router-dom";
import logo from "../logo.svg";

const setActiveLinkClassName = ({ isActive }: { isActive: boolean }) =>
  isActive ? "nav-active" : "";

const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>
            <li>
              <NavLink to="/" className={setActiveLinkClassName}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={setActiveLinkClassName}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/users" className={setActiveLinkClassName}>
                Users
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="about" element={<h1>About</h1>} />
          <Route path="users" element={<h1>Users</h1>} />
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Navigation;
