import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './Header.module.css';

function Header() {
    const { totalCount } = useSelector((state) => state.cart);

    return (
        <>
            <header>
                <div className={styles.container}>
                    <h1>
                        <NavLink to="/">
                            <span className={styles.title}>Store</span>
                        </NavLink>
                    </h1>
                    <NavLink to="/cart" className={styles.cartBtn}>
                        Cart
                        <span className={styles.cartCount}>{totalCount}</span>
                    </NavLink>
                </div>
            </header>
            <Outlet />
        </>
    );
}

export default Header;
