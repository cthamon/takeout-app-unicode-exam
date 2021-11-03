import Link from 'next/link';
import { useSelector } from 'react-redux';

// import { server } from '../config/';
import { menu } from '../data/menu';
import MenuItem from '../component/MenuItem';

export default function Home() {
  const { cart } = useSelector(state => state);
  return (
    <div>
      {menu.map((item, index) => <MenuItem key={item.id} item={item} index={index} />)}
      {
        (cart.length > 0) &&
        <Link href='/cart'>
          <button>
            View Cart - ${(Math.round(cart.reduce((sum, cartItem) => sum + (cartItem.price * cartItem.quantity), 0) * 100) / 100).toFixed(2)}
            <sup> {cart.reduce((sum, cartItem) => sum + cartItem.quantity, 0)}</sup>
          </button>
        </Link>
      }
    </div>
  );
}

// export const getStaticProps = async () => {
//   const res = await fetch(`${server}/api/menu`);
//   const menu = await res.json();

//   return {
//     props: {
//       menu
//     }
//   };
// };
