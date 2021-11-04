import { useDispatch, useSelector } from 'react-redux';

import { increment, decrement, setInitialState } from '../store/slices/counterSlice';
import { addToCart, deleteFromCart } from '../store/slices/cartSlice';

import styles from '../styles/MenuItem.module.css';
import { useEffect } from 'react';

const MenuItem = ({ item, index }) => {
    const dispatch = useDispatch();

    const { counter, loading } = useSelector(state => state.counter);
    const { cart } = useSelector(state => state);

    useEffect(() => {
        dispatch(setInitialState());
    }, []);

    if (loading) return (<h4>Loading...</h4>);

    return (
        <div className={styles.card}>
            <img src={item.imgSrc} alt={item.name} />
            <h4>{item.name}</h4>
            <p>{item.description}</p>
            <div>
                <button disabled={cart.some(cartItem => item.id === cartItem.id)} onClick={() => dispatch(decrement(item.id))}>-</button>
                {counter[index].quantity}
                <button disabled={cart.some(cartItem => item.id === cartItem.id)} onClick={() => dispatch(increment(item.id))}>+</button>
            </div>
            {
                cart.some(cartItem => item.id === cartItem.id) ?
                    <button disabled><span onClick={() => dispatch(deleteFromCart(item.id))}>x</span> Added {counter[index].quantity}</button> :
                    <button onClick={() => dispatch(addToCart({ ...item, quantity: counter[index].quantity }))}>Add {(item.price * counter[index].quantity).toFixed(2)}</button>
            }
        </div>
    );
};

export default MenuItem;