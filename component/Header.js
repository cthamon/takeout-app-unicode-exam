import Clock from './Clock';

import styles from '../styles/Header.module.css';

const Header = () => {
    return (
        <div className={styles.grid}>
            <div>
                <h3>Express Items</h3>
                <p>Order up to 8 of these items form <span className={styles.restaurant}>Katsuei</span>
                    <br />and receive your order by <span className={styles.bold}>10:00pm</span>
                </p>
            </div>
            <Clock />
        </div>
    );
};

export default Header;