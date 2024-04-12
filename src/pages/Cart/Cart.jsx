import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
    incrementCount,
    decrementCount,
    deleteItem,
    incrementByMoney,
    decrementByMoney,
} from '../../store/reducers/cartSlice';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import styles from './Cart.module.css';

function Cart() {
    const { items, totalPrice, totalCount } = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    // When you click on "+" button, the counter and the amount of money are added:
    const handleClickIncrement = (itemId) => {
        dispatch(incrementCount({ itemId }));
        dispatch(incrementByMoney({ itemId }));
    };

    // When you click on "-" button, the counter and the amount of money decrease:
    const handleClickDecrement = (itemId) => {
        const item = items.find((item) => item.id === itemId);

        if (item.count > 1) {
            dispatch(decrementCount({ itemId }));
            dispatch(decrementByMoney({ itemId }));
        } else {
            const confirmed = window.confirm(
                'Do you want to remove this item from your cart?'
            );
            if (confirmed) {
                dispatch(deleteItem({ itemId }));
            }
        }
    };

    // Deleting an item when clicking the "Delete" button:
    const handleClickDeleteItem = (itemId) => {
        dispatch(deleteItem({ itemId }));
    };

    return (
        <section className={styles.cart}>
            <div className={styles.container}>
                <Breadcrumbs />
                <h1>Cart</h1>
                {items.length > 0 ? (
                    // Displaying added items on the "Cart" page:
                    items.map((item) => (
                        <div className={styles.productCart} key={item.id}>
                            <img src={item.img} alt={item.category} />
                            <div className={styles.productCartInner}>
                                <div className={styles.infoAndDeleteBtn}>
                                    <span>
                                        {item.title}, {item.description}
                                    </span>
                                    <button
                                        className={styles.deleteBtn}
                                        onClick={() => handleClickDeleteItem(item.id)}
                                    >
                                        Delete
                                    </button>
                                </div>
                                <div className={styles.counterContainer}>
                                    <div className={styles.plusAndMinus}>
                                        <div
                                            className={styles.minus}
                                            onClick={() => handleClickDecrement(item.id)}
                                        ></div>
                                        <span className={styles.count}>{item.count}</span>
                                        <div
                                            className={styles.plus}
                                            onClick={() => handleClickIncrement(item.id)}
                                        ></div>
                                    </div>
                                    <div className={styles.price}>
                                        <span>Price:</span>
                                        <h2>
                                            {'\u0024'}
                                            {item.price}
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className={styles.productCart}>
                        <span className={styles.noItemsMessage}>No items...</span>
                    </div>
                )}
                <div className={styles.totalProducts}>
                    <div className={styles.totalInfo}>
                        <span>Together:</span>
                        <span>Sum:</span>
                    </div>
                    <div className={styles.totalSum}>
                        <span>{totalCount} products.</span>
                        <span>
                            {'\u0024'}
                            {totalPrice}
                        </span>
                    </div>
                </div>
                {items.length > 0 ? (
                    <NavLink to="/contact" id={styles.nextStepBtn}>
                        <span>Next step</span>
                    </NavLink>
                ) : (
                    <NavLink id={styles.disabledButton}>
                        <span>Next step</span>
                    </NavLink>
                )}
            </div>
        </section>
    );
}

export default Cart;
