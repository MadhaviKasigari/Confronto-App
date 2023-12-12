import React from "react";
import { Link, NavLink } from "react-router-dom";
export default function NavBar() {

    return (
        <React.Fragment>
            <div>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link" activeClassName="active">
                            Catalog
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/compare" className="nav-link" activeClassName="active">
                            Compare
                        </NavLink>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    );
}
