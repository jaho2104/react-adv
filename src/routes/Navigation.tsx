import { Suspense } from "react";
import {
  BrowserRouter,
  Navigate,
  NavLink,
  Route,
  Routes,
} from "react-router-dom";
import logo from "../logo.svg";
import routes from "./routes";

const setActiveLinkClassName = ({ isActive }: { isActive: boolean }) =>
  isActive ? "nav-active" : "";

const navLinksElements = routes.map(({ to, name }) => (
  <li key={to}>
    <NavLink to={to} className={setActiveLinkClassName}>
      {name}
    </NavLink>
  </li>
));

const routesElements = routes.map(({ path, Component }) => (
  <Route key={path} path={path} element={<Component />} />
));

const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>{navLinksElements}</ul>
        </nav>

        <Suspense fallback={null}>
          <Routes>
            {routesElements}
            <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
};

export default Navigation;
