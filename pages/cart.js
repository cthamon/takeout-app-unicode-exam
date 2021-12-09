import Link from 'next/link';
import { useSelector } from 'react-redux';

import CartItem from '../component/CartItem';
import Clock from '../component/Clock';
import styles from '../styles/CartItem.module.css';

const Cart = () => {
    const { cart } = useSelector(state => state);

    const subtotal = (Math.round(cart.reduce((sum, cartItem) => sum + (cartItem.price * cartItem.quantity), 0) * 100) / 100).toFixed(2);
    const delivery = 1.99;
    const taxes = (subtotal * 0.1).toFixed(2);

    return (
        <div className={styles.grid}>
            <div>
                <Link href='/' passHref><img src='/images/back-icon.png' alt='back' /></Link>
                <h3>Express Cart</h3>
            </div>
            <hr />
            <div className={styles.head}>
                <h3>Your Order</h3>
                <Link href='/' passHref><p>Add item +</p></Link>
            </div>
            {cart.map(item => <CartItem key={item.id} item={item} />)}
            <div className={styles.summaryHead}>
                <h3>Summary</h3>
                <Clock />
            </div>
            <div className={styles.promotion}>
                <img src='/favicon.ico' alt='icon' />
                <p>Earn credits by playing trivia after checkout!</p>
            </div>
            <div className={styles.summaryItem}>
                <p>Subtotal </p>
                <p>${subtotal}</p>
            </div>
            <div className={styles.summaryItem}>
                <p>Delivery </p>
                <p>${delivery}</p>
            </div>
            <div className={styles.summaryItem}>
                <p>Taxes </p>
                <p>${taxes}</p>
            </div>
            <div className={styles.summaryLast}>
                <p>Total </p>
                <p>${(+subtotal + +delivery + +taxes).toFixed(2)}</p>
            </div>
            <Link href='/checkout' passHref><button>Begin Checkout</button></Link>
        </div>
    );
};

export default Cart;