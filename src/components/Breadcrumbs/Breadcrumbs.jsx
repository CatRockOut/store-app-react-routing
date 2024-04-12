import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styles from './Breadcrumbs.module.css';

function Breadcrumbs() {
    const location = useLocation();
    const paths = ['/cart', '/contact', '/shipment'];
    const currentPathIndex = paths.indexOf(location.pathname);

    const renderNavLink = (path, text) => (
        <NavLink to={path}>
            <span
                className={currentPathIndex >= paths.indexOf(path) ? styles.active : ''}
            >
                {text}
            </span>
        </NavLink>
    );

    return (
        <nav>
            <ul className={styles.breadcrumbs}>
                <li>
                    {renderNavLink('/cart', 'Cart')}
                </li>
                <li>
                    {currentPathIndex < 1 ? (
                        <NavLink>
                            <span>Contact information</span>
                        </NavLink>
                    ) : (
                        renderNavLink('/contact', 'Contact information')
                    )}
                </li>
                <li>
                    {currentPathIndex < 2 ? (
                        <NavLink>
                            <span>Shipment information</span>
                        </NavLink>
                    ) : (
                        renderNavLink('/shipment', 'Shipment information')
                    )}
                </li>
            </ul>
        </nav>
    );
}

export default Breadcrumbs;
