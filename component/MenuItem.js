import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';

import { increment, decrement, setInitialState } from '../store/slices/counterSlice';
import { addToCart, deleteFromCart } from '../store/slices/cartSlice';
import styles from '../styles/MenuItem.module.css';

const MenuItem = ({ item, index }) => {
    const dispatch = useDispatch();

    const { counter, loading } = useSelector(state => state.counter);
    const { cart } = useSelector(state => state);

    useEffect(() => {
        dispatch(setInitialState());
    }, [dispatch]);

    if (loading) return (<h4>Loading...</h4>);

    return (
        <div className={styles.card}>
            <div className={styles.imgBoard}>
                <Image src={item.imgSrc} alt={item.name} width='150px' height='150px' />
            </div>
            <div className={styles.description}>
                <h4>{item.name}</h4>
                <p>{item.description}</p>
                <div className={styles.counter}>
                    <button disabled={cart.some(cartItem => item.id === cartItem.id)} onClick={() => dispatch(decrement(item.id))}>-</button>
                    <span>{counter[index].quantity}</span>
                    <button disabled={cart.some(cartItem => item.id === cartItem.id)} onClick={() => dispatch(increment(item.id))}>+</button>
                </div>
            </div>
            {
                cart.some(cartItem => item.id === cartItem.id) ?
                    <div className={styles.cart}><button disabled><span onClick={() => dispatch(deleteFromCart(item.id))}><div className={styles.circle}>x</div></span> Added {counter[index].quantity}</button></div> :
                    <div className={styles.cart}><button onClick={() => dispatch(addToCart({ ...item, quantity: counter[index].quantity }))}>Add {(item.price * counter[index].quantity).toFixed(2)}</button></div>
            }
        </div>
    );
};

export default MenuItem;