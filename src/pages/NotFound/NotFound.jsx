import styles from './NotFound.module.css';

function NotFound() {
    return (
        <section className={styles.notFound}>
            <div className={styles.container}>
                <h1>Error 404: Page not found</h1>
            </div>
        </section>
    );
}

export default NotFound;
