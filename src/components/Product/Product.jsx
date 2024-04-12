import React from 'react';
import styles from './Product.module.css';
import { useSelector, useDispatch } from 'react-redux';
import {
    addItem,
    incrementCount,
    incrementByMoney,
} from './../../store/reducers/cartSlice.js';

function Product(props) {
    const { id, img, title, description, price, category } = props;
    const { items } = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const existingItem = items.find((item) => item.id === id);

    const handleClickAddToCart = (itemId) => {
        if (existingItem) {
            // Adding a value to the counter and money instead of duplicating the same element:
            dispatch(incrementCount({ itemId }));
            dispatch(incrementByMoney({ itemId }));
        } else {
            // Adding a new item if it is not in the cart:
            dispatch(addItem({ ...props }));
        }
    };

    return (
        <div className={styles.product}>
            <div>
                <img src={img} alt={category} />
                <span>
                    {title}, {description}
                </span>
            </div>
            <div>
                <h2>
                    {'\u0024'}
                    {price}
                </h2>
                <button
                    className={styles.addToCartBtn}
                    onClick={() => handleClickAddToCart(id)}
                >
                    Add to cart
                </button>
            </div>
        </div>
    );
}

export default Product;
