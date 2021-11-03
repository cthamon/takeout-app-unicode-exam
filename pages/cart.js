import Link from 'next/link';
import { useSelector } from 'react-redux';

import CartItem from '../component/CartItem';

const Cart = () => {
    const { cart } = useSelector(state => state);

    const subtotal = (Math.round(cart.reduce((sum, cartItem) => sum + (cartItem.price * cartItem.quantity), 0) * 100) / 100).toFixed(2);
    const delivery = (Math.round((Math.random() * 3) * 100) / 100).toFixed(2);
    const taxes = (subtotal * 0.1).toFixed(2);

    return (
        <div>
            <h4>Your Order</h4>
            <Link href='/'>Add item +</Link>
            <hr />
            {cart.map(item => <CartItem key={item.id} item={item} />)}

            <h4>Summary</h4>
            <p>Subtotal ${subtotal}</p>
            <p>Delivery ${delivery}</p>
            <p>Taxes ${taxes}</p>
            <Link href='/checkout'><button>Begin Checkout</button></Link>
        </div>
    );
};

export default Cart;