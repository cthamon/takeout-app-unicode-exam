import styles from '../styles/CartItem.module.css';

const Cart = ({ item }) => {
    return (
        <div className={styles.cart}>
            <div className={styles.head}>
                <div className={styles.description}>
                    <p>{item.quantity}</p>
                    <div>
                        <p>{item.name}</p>
                        <p>{item.description}</p>
                    </div>
                </div>
                <div>
                    <p>${(item.price * item.quantity).toFixed(2)}</p>
                </div>
            </div>
        </div>
    );
};

export default Cart;