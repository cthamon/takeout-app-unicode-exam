import { useSelector } from 'react-redux';
import Link from 'next/link';
import Image from 'next/image';
import useSWR from "swr";

import { server } from '../config/';
import MenuItem from '../component/MenuItem';
import Header from '../component/Header';

import styles from '../styles/MenuItem.module.css';

export default function Home() {
  const cart = useSelector(state => state.cart);

  const { menu, isLoading, isError } = FetchMenu();
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  return (
    <div className={styles.grid}>
      <Header />
      <div className={styles.menu}>
        {menu.map((item, index) => <MenuItem key={item.id} item={item} index={index} />)}
      </div>
      {
        (cart.length > 0) &&
        <Link href='/cart' passHref>
          <button className={styles.cartButton}>
            View Cart - ${(Math.round(cart.reduce((sum, cartItem) => sum + (cartItem.price * cartItem.quantity), 0) * 100) / 100).toFixed(2)}
            <Image src='/images/cart-icon.png' alt='cart-icon' width='15px' height='15px' />
            <sup><div className={styles.circle}> {cart.reduce((sum, cartItem) => sum + cartItem.quantity, 0)}</div></sup>
          </button>
        </Link>
      }
    </div>
  );
}

const fetcher = (url) => fetch(`${server}${url}`).then(res => res.json());

export function FetchMenu() {
  const { data, error } = useSWR(`/api/menu/`, fetcher);
  return {
    menu: data,
    isLoading: !error && !data,
    isError: error
  };
}