import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import styles from './ContactInfo.module.css';
import { schema } from './utils';

function CartInformation() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });
    const navigate = useNavigate();

    const onSubmit = (data) => {
        // Go to next page with data from inputs:
        navigate('/shipment', { state: { formData: data } });
    };

    return (
        <section className={styles.cartInfo}>
            <div className={styles.container}>
                <Breadcrumbs />
                <h1>Contact information</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.formContainer}>
                        <div className={styles.inputsContainer}>
                            <div
                                className={`${styles.containerInner} ${
                                    Object.keys(errors).length > 0
                                        ? styles.errorBorder
                                        : ''
                                }`}
                            >
                                <span>First name{'\u002A'}</span>
                                <input
                                    type="text"
                                    name="firstName"
                                    placeholder="Enter your first name"
                                    {...register('firstName')}
                                />
                                <span className={styles.error}>
                                    {errors.firstName?.message}
                                </span>
                            </div>
                            <div
                                className={`${styles.containerInner} ${
                                    Object.keys(errors).length > 0
                                        ? styles.errorBorder
                                        : ''
                                }`}
                            >
                                <span>Last name{'\u002A'}</span>
                                <input
                                    type="text"
                                    name="lastName"
                                    placeholder="Enter your last name"
                                    {...register('lastName')}
                                />
                                <span className={styles.error}>
                                    {errors.lastName?.message}
                                </span>
                            </div>
                        </div>
                        <div className={styles.inputsContainer}>
                            <div
                                className={`${styles.containerInner} ${
                                    Object.keys(errors).length > 0
                                        ? styles.errorBorder
                                        : ''
                                }`}
                            >
                                <span>Email{'\u002A'}</span>
                                <input
                                    type="text"
                                    name="email"
                                    placeholder="Enter your email"
                                    {...register('email')}
                                />
                                <span className={styles.error}>
                                    {errors.email?.message}
                                </span>
                            </div>
                            <div
                                className={`${styles.containerInner} ${
                                    Object.keys(errors).length > 0
                                        ? styles.errorBorder
                                        : ''
                                }`}
                            >
                                <span>Phone{'\u002A'}</span>
                                <input
                                    type="tel"
                                    name="tel"
                                    placeholder="Enter your phone"
                                    {...register('tel')}
                                />
                                <span className={styles.error}>
                                    {errors.tel?.message}
                                </span>
                            </div>
                        </div>
                    </div>
                    {Object.keys(errors).length === 0 ? (
                        <input id={styles.nextStepBtn} type="submit" value="Next step" />
                    ) : (
                        <input id={styles.disabledButton} value="Next step" disabled />
                    )}
                </form>
            </div>
        </section>
    );
}

export default CartInformation;
