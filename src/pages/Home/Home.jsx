import React, { useState } from 'react';
import Product from '../../components/Product/Product';
import styles from './Home.module.css';
import url from '../../data';

function Home() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchData = async () => {
        try {
            const response = await fetch(url);
            const json = await response.json();

            setData(json.products);
            setIsLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    fetchData();

    return (
        <section className={styles.home}>
            <div className={styles.container}>
                {isLoading ? (
                    // Animation of the preloader when loading data:
                    <div className={styles.preloader}>
                        <div className={styles.preloaderRow}>
                            <div className={styles.preloaderItem}></div>
                            <div className={styles.preloaderItem}></div>
                        </div>
                    </div>
                ) : (
                    // Displaying items on the "Home" page:
                    data.map((item) => (
                        <Product
                            key={item.id}
                            id={item.id}
                            img={item.thumbnail}
                            title={item.title}
                            description={item.description}
                            price={item.price}
                            basePrice={item.price}
                            category={item.category}
                            count={1}
                        />
                    ))
                )}
            </div>
        </section>
    );
}

export default Home;
