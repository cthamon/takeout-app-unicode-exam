import { useSelector } from 'react-redux';
import Link from 'next/link';

import { server } from '../config/';
import MenuItem from '../component/MenuItem';
import Header from '../component/Header';

import styles from '../styles/MenuItem.module.css';

export default function Home({ menu }) {
  const cart = useSelector(state => state.cart);

  return (
    <div className={styles.grid}>
      <Header />
      <div className={styles.menu}>
        {menu.map((item, index) => <MenuItem key={item.id} item={item} index={index} />)}
      </div>
      {
        (cart.length > 0) &&
        <Link href='/cart'>
          <button className={styles.cartButton}>
            View Cart - ${(Math.round(cart.reduce((sum, cartItem) => sum + (cartItem.price * cartItem.quantity), 0) * 100) / 100).toFixed(2)}
            <img src='/images/cart-icon.png' alt='cart-icon' />
            <sup><div className={styles.circle}> {cart.reduce((sum, cartItem) => sum + cartItem.quantity, 0)}</div></sup>
          </button>
        </Link>
      }
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/menu`);
  const menu = await res.json();

  return {
    props: {
      menu
    }
  };
};
