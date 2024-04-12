import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../../store/reducers/cartSlice';
import { formatDate, randomOrderNumber } from '../../utils';
import styles from './ConfirmOrder.module.css';

function ConfirmOrder() {
    const { items, totalPrice } = useSelector((state) => state.cart);
    const location = useLocation();
    const dispatch = useDispatch();

    // Cleaning the cart after going to the "Home" page:
    const handleClickClearCart = () => {
        dispatch(clearCart());
    };

    const {
        firstName,
        lastName,
        email,
        tel,
        address,
        apartment,
        city,
        state,
        country,
        zipCode,
    } = location.state.formData;

    // Adding the current date to the receipt when placing an order:
    const formattedDate = formatDate(new Date());

    return (
        <section className={styles.confirmOrder}>
            <div className={styles.container}>
                <div className={styles.orderInfo}>
                    <div className={styles.checkMark}></div>
                    <h1>Thank you for your order!</h1>
                    <span className={styles.orderDetails}>
                        The order confirmation email with details of your order and a link
                        to track its progress has been sent to your email address.
                    </span>
                    <span className={styles.numberOrder}>
                        Your order # is {randomOrderNumber} - PENDING
                    </span>
                    <span className={styles.dateOrder}>Order Date: {formattedDate}</span>
                </div>
                <div className={styles.allInfoCart}>
                    <div className={styles.contactInfo}>
                        <h3>Contact information</h3>
                        <span>
                            {firstName} {lastName}
                        </span>
                        <span>{email}</span>
                        <span>{tel}</span>
                    </div>
                    <div className={styles.shipInfo}>
                        <h3>Shipment information</h3>
                        <span>
                            {address}, Apt {apartment}
                        </span>
                        <span>
                            {state}, {city}, {zipCode}
                        </span>
                        <span>{country}</span>
                    </div>
                </div>
                <div className={styles.orderSummary}>
                    <h3>Order summary</h3>
                    {items.map((item) => (
                        <div key={item.id} className={styles.itemOrder}>
                            <img src={item.img} alt={item.category} />
                            <div>
                                <span>
                                    {item.title}, {item.description}
                                </span>
                                <span className={styles.sumItem}>
                                    {'\u0024'}
                                    {item.price}, {item.count} product
                                </span>
                            </div>
                        </div>
                    ))}
                    <div className={styles.totalSum}>
                        <div>
                            <span>Subtotal:</span>
                            <span>Shipping & Handling:</span>
                            <span>Tax:</span>
                            <span className={styles.grandtotal}>Grand Total:</span>
                        </div>
                        <div>
                            <span>
                                {'\u0024'}
                                {totalPrice}
                            </span>
                            <span>{'\u0024'}0.00</span>
                            <span>{'\u0024'}0.00</span>
                            <span className={styles.grandtotal}>
                                {'\u0024'}
                                {totalPrice}
                            </span>
                        </div>
                    </div>
                </div>
                <NavLink to="/" id={styles.nextStepBtn} onClick={handleClickClearCart}>
                    <span>Continue shopping</span>
                </NavLink>
            </div>
        </section>
    );
}

export default ConfirmOrder;
