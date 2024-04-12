import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import styles from './ShipmentInfo.module.css';
import { schema } from './utils';

function ShipmentInfo() {
    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });
    const navigate = useNavigate();
    const location = useLocation();

    const onSubmit = (data) => {
        // Go to next page with data from inputs:
        navigate('/confirm', {
            state: { formData: { ...location.state.formData, ...data } },
        });
    };

    return (
        <section className={styles.shipment}>
            <div className={styles.container}>
                <Breadcrumbs />
                <h1>Shipment information</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.formContainer}>
                        <div className={styles.containerInner}>
                            <span>
                                Address (No P. O. Boxes)
                                {'\u002A'}
                            </span>
                            <input
                                type="text"
                                name="address"
                                placeholder="Enter your address"
                                {...register('address')}
                            />
                            <span className={styles.error}>
                                {errors.address?.message}
                            </span>
                        </div>
                        <div className={styles.containerInner}>
                            <span>Apartment, suite etc. (optional)</span>
                            <input
                                type="text"
                                name="apartment"
                                placeholder="Enter your apartment information"
                                {...register('apartment')}
                            />
                            <span className={styles.error}>
                                {errors.apartment?.message}
                            </span>
                        </div>
                        <div className={styles.containerInner}>
                            <span>City{'\u002A'}</span>
                            <input
                                type="text"
                                placeholder="Enter your city"
                                {...register('city')}
                            />
                            <span className={styles.error}>{errors.city?.message}</span>
                        </div>
                        <div className={styles.countryInfo}>
                            <div className={styles.containerInner}>
                                <span>Country/Region{'\u002A'}</span>
                                <select
                                    {...register('country')}
                                    onChange={(e) =>
                                        setValue('country', e.target.value, {
                                            shouldValidate: true,
                                        })
                                    }
                                    defaultValue=""
                                >
                                    <option value="" disabled>
                                        Select your country/region
                                    </option>
                                    <option value="Ukraine">Ukraine</option>
                                    <option value="USA">USA</option>
                                    <option value="Africa">Africa</option>
                                </select>
                                <span className={styles.error}>
                                    {errors.country?.message}
                                </span>
                            </div>
                            <div className={styles.containerInner}>
                                <span>State{'\u002A'}</span>
                                <select
                                    {...register('state')}
                                    onChange={(e) =>
                                        setValue('state', e.target.value, {
                                            shouldValidate: true,
                                        })
                                    }
                                    defaultValue=""
                                >
                                    <option value="" disabled>
                                        Select your state
                                    </option>
                                    <option value="Lviv State">Lviv</option>
                                    <option value="Florida State">Florida</option>
                                    <option value="Congo State">Congo</option>
                                </select>
                                <span className={styles.error}>
                                    {errors.state?.message}
                                </span>
                            </div>
                            <div className={styles.containerInner}>
                                <span>ZIP code{'\u002A'}</span>
                                <input
                                    type="text"
                                    placeholder="Enter your ZIP code"
                                    {...register('zipCode')}
                                />
                                <span className={styles.error}>
                                    {errors.zipCode?.message}
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

export default ShipmentInfo;
